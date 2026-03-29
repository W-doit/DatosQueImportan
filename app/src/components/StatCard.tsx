import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  delay?: number;
}

export function StatCard({ label, value, detail, delay = 0 }: StatCardProps) {
  return (
    <Card
      className="border bg-card shadow-[var(--shadow-card)] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
          {label}
        </p>
        <p className="text-4xl font-bold font-mono tabular-nums text-foreground tracking-tight">
          {value}
        </p>
        {detail && (
          <p className="text-xs text-muted-foreground mt-2">{detail}</p>
        )}
      </CardContent>
    </Card>
  );
}
