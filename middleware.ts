import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are public (no authentication required)
// The landing page, services, stats, portfolio, and rsvp submissions should be public.
const isPublicRoute = createRouteMatcher([
  '/', 
  '/api/webhooks/clerk', // Clerk webhook sync must be public
  '/api/rsvp(.*)',
  '/#(.*)'
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect(); // Protect all dashboard or private pages
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.[\\w]+$|_next/image|favicon.ico).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
