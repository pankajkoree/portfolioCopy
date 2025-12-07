"use client";
import { useEffect, useState } from "react";

export default function GitHubHeatmap() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`/api/github/${year}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load GitHub data");
        return res.json();
      })
      .then((data) => setCalendar(data))
      .catch(() => setError("Unable to fetch GitHub contributions"))
      .finally(() => setLoading(false));
  }, [year]);

  if (loading) return <Skeleton />;

  if (error)
    return (
      <div className="flex flex-col px-6 py-4 gap-4 border-b">
        <div>
          <p className="text-2xl">Github Activity</p>
        </div>
        <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Github Activity</p>
      </div>
      <div className="relative flex flex-col p-2 bg-gradient-to-r from-[#c5d6d6] via-[#9fa3a3] to-[#bdc7c7] dark:bg-gradient-to-r dark:from-[#2a2b2b] dark:via-[#2a2c2c] dark:to-[#0f0e0e] px-6 rounded-sm border dark:border-zinc-800 w-fit inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
            {calendar.totalContributions} contributions in {year}
          </h2>

          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border dark:border-zinc-700 text-sm px-2 py-1 rounded-sm"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Month Labels */}
        <div className="grid grid-flow-col auto-cols-max ml-8 mb-1 text-[10px] text-gray-800 dark:text-zinc-200">
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((m) => (
            <div key={m} className="w-12 text-center">
              {m}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day Labels */}
          <div className="flex flex-col justify-between text-[10px] text-gray-800 dark:text-zinc-200">
            {["Mon", "Wed", "Fri"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          {/* Heatmap */}
          <div className="grid grid-flow-col auto-cols-max gap-[2px]">
            {calendar.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.contributionDays.map((day, j) => (
                  <div
                    key={j}
                    onMouseMove={(e) => {
                      if (window.innerWidth < 640) return;
                      setTooltip({
                        x: e.clientX,
                        y: e.clientY,
                        ...day,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    className="w-[10px] h-[10px] rounded-md cursor-pointer ring-1 ring-transparent hover:ring-zinc-400"
                    style={{ backgroundColor: day.color }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Floating GitHub-Style Tooltip */}
        {tooltip && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 28,
            }}
          >
            <div className="bg-zinc-900 dark:bg-white text-white dark:text-black text-[11px] px-2 py-1 rounded shadow-lg border border-blue-700 dark:border-blue-400">
              <strong>{tooltip.contributionCount}</strong>{" "}
              {tooltip.contributionCount === 1
                ? "contribution"
                : "contributions"}{" "}
              on {new Date(tooltip.date).toDateString()}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-800 dark:text-zinc-200">
          <span>Less</span>
          <div className="flex gap-1">
            {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
              (c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-sm"
                  style={{ background: c }}
                />
              )
            )}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

/* ✅ Skeleton Loader */
function Skeleton() {
  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Github Activity</p>
      </div>
      <div className="bg-white dark:bg-zinc-900 px-6 py-4 rounded-xl shadow animate-pulse w-fit">
        <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4" />
        <div className="grid grid-flow-col auto-cols-max gap-[2px]">
          {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-[2px]">
              {Array.from({ length: 7 }).map((_, j) => (
                <div
                  key={j}
                  className="w-[10px] h-[10px] rounded-md bg-zinc-200 dark:bg-zinc-800"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
