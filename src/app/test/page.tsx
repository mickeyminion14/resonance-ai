import { prisma } from "@/lib/db";

export default async function TestPage() {
  const voices = await prisma.voice.findMany();

  return (
    <div className="p-8">
      Voices {voices.length}
      <ul className="space-y-2">
        {voices.map((v) => (
          <li key={v.id}>
            {v.name} - {v.variant}
          </li>
        ))}
      </ul>
    </div>
  );
}
