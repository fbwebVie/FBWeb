import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Page not found
          </h2>

          <p className="text-text-muted mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
