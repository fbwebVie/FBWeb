export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center">
        {/* Pulsing Dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <p className="text-text-muted text-sm">
          Loading...
        </p>
      </div>
    </div>
  );
}
