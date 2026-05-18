import { prisma } from "@/lib/db";
import { getSignedAuidoUrl } from "@/lib/r2";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ generationId: string }> },
) {
  const { userId, orgId } = await auth();
  if (!userId || !orgId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { generationId } = await params;
  const generation = await prisma.generation.findUnique({
    where: { id: generationId, orgId },
  });
  if (!generation) {
    return new Response("Generation not found", { status: 404 });
  }
  if (!generation.r2ObjectKey) {
    return new Response("Generated audio not available yet, try again later", {
      status: 409,
    });
  }
  const signedUrl = await getSignedAuidoUrl(generation.r2ObjectKey);
  const audioResponse = await fetch(signedUrl);
  if (!audioResponse.ok) {
    return new Response("Failed to fetch audio", { status: 502 });
  }
  return new Response(audioResponse.body, {
    headers: {
      "Content-Type": "audio/wav",
      "Cache-Control": "private, max-age=3600",
    },
  });
}
