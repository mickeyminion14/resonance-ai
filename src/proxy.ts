import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

const isPublicRoot = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  if (isPublicRoot(req)) {
    if (userId) {
      if (orgId) {
        return Response.redirect(new URL("/dashboard", req.url));
      } else {
        return Response.redirect(new URL("/org-selection", req.url));
      }
    }
    {
      return NextResponse.next();
    }
  }

  // allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // for non-public routes
  if (!userId) {
    await auth.protect();
  }

  // allow org selection route
  if (isOrgSelectionRoute(req)) {
    return NextResponse.next();
  }

  if (userId && !orgId) {
    const orgSelection = new URL("/org-selection", req.url);
    return NextResponse.redirect(orgSelection);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
