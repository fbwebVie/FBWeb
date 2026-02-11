import Link from "next/link";

export function DemoWatermark() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/70 hover:text-white hover:border-white/20 transition-all group"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Demo by{" "}
        <span className="font-semibold text-white group-hover:text-primary transition-colors">
          FBWebVie
        </span>
      </Link>
    </div>
  );
}
