"use client";
import { useEffect, useState, useRef } from "react";

export default function GitHubHeatmap() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tooltip, setTooltip] = useState(null);
  const heatmapRef = useRef(null);

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
      <div className="flex flex-col px-4 sm:px-6 py-4 gap-4 border-b">
        <div>
          <p className="text-2xl">GitHub Activity</p>
        </div>
        <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col px-4 sm:px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">GitHub Activity</p>
      </div>

      <div className="relative p-3 sm:p-4 bg-gradient-to-r from-[#c5d6d6] via-[#9fa3a3] to-[#bdc7c7] dark:bg-gradient-to-r dark:from-[#2a2b2b] dark:via-[#2a2c2c] dark:to-[#0f0e0e] rounded-lg border dark:border-zinc-800 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-3">
          <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
            {calendar.totalContributions} contributions in {year}
          </h2>

          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border dark:border-zinc-700 text-sm px-3 py-1.5 rounded-md bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* GitHub-like Container */}
        <div
          className="overflow-x-auto pb-3 -mx-2 px-2 sm:overflow-visible sm:mx-0 sm:px-0"
          ref={heatmapRef}
        >
          <div className="min-w-max sm:min-w-0">
            {/* Month Labels - Desktop */}
            <div className="hidden sm:grid grid-flow-col auto-cols-max ml-9 mb-1 text-[10px] text-gray-800 dark:text-zinc-200">
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

            <div className="flex gap-2">
              {/* Day Labels - Desktop */}
              <div className="hidden sm:flex flex-col justify-between text-[10px] text-gray-800 dark:text-zinc-200 pt-1.5">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                  <span key={i} className="h-[14px] leading-none">
                    {d}
                  </span>
                ))}
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-flow-col auto-cols-max gap-[3px] sm:gap-[2px]">
                {calendar.weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-[3px] sm:gap-[2px]">
                    {week.contributionDays.map((day, j) => (
                      <button
                        key={j}
                        type="button"
                        onClick={() => {
                          // Mobile touch support
                          const rect =
                            heatmapRef.current.getBoundingClientRect();
                          setTooltip({
                            x: rect.left + i * 13,
                            y: rect.top + j * 13,
                            ...day,
                          });
                          setTimeout(() => setTooltip(null), 2000);
                        }}
                        onMouseMove={(e) => {
                          if (window.innerWidth >= 640) {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            setTooltip({
                              x: rect.left + rect.width / 2,
                              y: rect.top - 40,
                              ...day,
                            });
                          }
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        className="w-[10px] h-[10px] md:w-[11px] md:h-[11px] lg:w-[10px] lg:h-[10px] rounded-full cursor-pointer transition-transform hover:scale-110 active:scale-95 relative group"
                        style={{ backgroundColor: day.color }}
                        aria-label={`${
                          day.contributionCount
                        } contributions on ${new Date(
                          day.date
                        ).toDateString()}`}
                      >
                        {/* Mobile touch indicator */}
                        <span className="absolute -inset-1 sm:hidden" />
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Month Labels - Mobile (Simplified) */}
            <div className="sm:hidden flex justify-between mt-2 text-[9px] text-gray-800 dark:text-zinc-200 px-1">
              {["Jan", "Apr", "Jul", "Oct"].map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Tooltip */}
        {tooltip && window.innerWidth >= 640 && (
          <div
            className="fixed z-50 pointer-events-none transition-opacity duration-150"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 text-xs px-3 py-2 rounded-md shadow-lg border border-gray-700 dark:border-gray-600 whitespace-nowrap">
              <div className="font-semibold">
                {tooltip.contributionCount}{" "}
                {tooltip.contributionCount === 1
                  ? "contribution"
                  : "contributions"}
              </div>
              <div className="text-gray-300 dark:text-gray-400 text-[11px]">
                {new Date(tooltip.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 border-b border-r border-gray-700 dark:border-gray-600 rotate-45"></div>
          </div>
        )}

        {/* Mobile Tooltip */}
        {tooltip && window.innerWidth < 640 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInUp">
            <div className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 text-sm px-4 py-3 rounded-lg shadow-xl border border-gray-700 dark:border-gray-600 max-w-[90vw] text-center">
              <div className="font-semibold">
                {tooltip.contributionCount}{" "}
                {tooltip.contributionCount === 1
                  ? "contribution"
                  : "contributions"}
              </div>
              <div className="text-gray-300 dark:text-gray-400 text-sm mt-1">
                {new Date(tooltip.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-4 sm:mt-6 flex items-center justify-between sm:justify-start gap-4 text-[10px] text-gray-800 dark:text-zinc-200">
          <span className="text-xs">Less</span>
          <div className="flex gap-[3px] sm:gap-1">
            {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
              (c) => (
                <div
                  key={c}
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ background: c }}
                />
              )
            )}
          </div>
          <span className="text-xs">More</span>

          {/* Mobile scroll hint */}
          <div className="sm:hidden ml-auto flex items-center gap-1 text-[9px] text-gray-500 dark:text-gray-400">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span>Scroll →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ Skeleton Loader */
function Skeleton() {
  return (
    <div className="flex flex-col px-4 sm:px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">GitHub Activity</p>
      </div>
      <div className="bg-white dark:bg-zinc-900 px-6 py-4 rounded-lg shadow animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded" />
          <div className="h-8 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
        </div>

        {/* Desktop Skeleton */}
        <div className="hidden sm:block">
          <div className="ml-9 mb-1 flex gap-12">
            {["", "", "", ""].map((_, i) => (
              <div
                key={i}
                className="h-3 w-12 bg-zinc-200 dark:bg-zinc-800 rounded"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 pt-1">
              {["", "", ""].map((_, i) => (
                <div
                  key={i}
                  className="h-3 w-8 bg-zinc-200 dark:bg-zinc-800 rounded"
                />
              ))}
            </div>
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

        {/* Mobile Skeleton */}
        <div className="sm:hidden overflow-x-auto pb-3">
          <div className="min-w-max">
            <div className="grid grid-flow-col auto-cols-max gap-1.5">
              {Array.from({ length: 80 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-3.5 h-3.5 rounded-[2px] bg-zinc-200 dark:bg-zinc-800"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-3 w-8 bg-zinc-200 dark:bg-zinc-800 rounded" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm bg-zinc-200 dark:bg-zinc-800"
              />
            ))}
          </div>
          <div className="h-3 w-8 bg-zinc-200 dark:bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  );
}
