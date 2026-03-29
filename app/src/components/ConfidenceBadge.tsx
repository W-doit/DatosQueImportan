import type { ConfidenceLevel } from "@/lib/schemas";

const styles: Record<ConfidenceLevel, string> = {
  HIGH: "border-confidence-high text-confidence-high bg-confidence-high/10",
  MEDIUM: "border-confidence-medium text-confidence-medium bg-confidence-medium/10",
  LOW: "border-confidence-low text-confidence-low bg-confidence-low/10",
};

const labels: Record<ConfidenceLevel, string> = {
  HIGH: "Alto riesgo",
  MEDIUM: "Medio",
  LOW: "Bajo",
};

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  return (
    <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-semibold ${styles[level]}`}>
      {labels[level]}
    </span>
  );
}
