"use client";

interface CourseSeatCounterProps {
  claimed: number;
  total: number;
  isLive?: boolean;
}

export default function CourseSeatCounter({
  claimed,
  total,
  isLive = true,
}: CourseSeatCounterProps) {
  const pct = Math.min(Math.round((claimed / total) * 100), 100);

  return (
    <div className="glass rounded-2xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-sm font-semibold text-foreground">
          {claimed.toLocaleString()}/{total.toLocaleString()}
        </span>
        {isLive && (
          <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Live
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Seats Claimed This Month
      </p>
    </div>
  );
}