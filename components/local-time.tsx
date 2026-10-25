"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type LocalTimeProps = {
  className?: string;
};

export function LocalTime({ className = "" }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      weekday: "short",
    });

    const update = () => setTime(formatter.format(new Date()));

    update();
    const timer = window.setInterval(update, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      <span suppressHydrationWarning>
        {time ? `${time} · Chattogram` : "Chattogram time"}
      </span>
    </span>
  );
}
