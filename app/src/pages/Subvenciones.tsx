import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import { subsidyData } from "@/lib/data";
import { Search, ArrowUpDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ConfidenceLevel } from "@/lib/schemas";

type FilterLevel = ConfidenceLevel | "ALL";

export default function Subvenciones() {
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState<FilterLevel>("ALL");
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = useMemo(() => {
    let data = [...subsidyData];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (d) =>
          d.beneficiary.toLowerCase().includes(q) ||
          d.granting_body.toLowerCase().includes(q) ||
          d.purpose.toLowerCase().includes(q)
      );
    }
    if (filterLevel !== "ALL") {
      data = data.filter((d) => d.confidence_level === filterLevel);
    }
    data.sort((a, b) => (sortAsc ? a.amount_eur - b.amount_eur : b.amount_eur - a.amount_eur));
    return data;
  }, [search, filterLevel, sortAsc]);

  const topBeneficiaries = useMemo(() => {
    return [...subsidyData]
      .sort((a, b) => b.amount_eur - a.amount_eur)
      .slice(0, 5)
      .map((d) => ({
        name: d.beneficiary.length > 25 ? d.beneficiary.slice(0, 25) + "…" : d.beneficiary,
        amount: d.amount_eur,
      }));
  }, []);

  const borderClass: Record<ConfidenceLevel, string> = {
    HIGH: "border-l-4 border-l-confidence-high",
    MEDIUM: "border-l-4 border-l-confidence-medium",
    LOW: "border-l-4 border-l-confidence-low",
  };

  return (
    <div className="min-h-screen py-14">
      <div className="container space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Registro público
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Subvenciones públicas</h1>
          <p className="text-base text-muted-foreground max-w-lg">
            Registro de subvenciones clasificadas por nivel de confianza y riesgo
          </p>
        </div>

        {/* Top beneficiaries chart */}
        <Card className="border bg-card shadow-[var(--shadow-card)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-sans">
              Mayores beneficiarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topBeneficiaries} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(35 10% 87%)" />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
                    stroke="hsl(30 6% 48%)"
                    tickFormatter={(v: number) => `€${(v / 1000).toFixed(0)}k`}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 11 }}
                    stroke="hsl(30 6% 48%)"
                    width={160}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(35 10% 87%)",
                      borderRadius: 4,
                      fontSize: 12,
                      fontFamily: "JetBrains Mono",
                      boxShadow: "0 4px 12px -2px hsl(30 10% 12% / 0.08)",
                    }}
                    formatter={(value: number) => [`€${value.toLocaleString("es-ES")}`, "Importe"]}
                  />
                  <Bar dataKey="amount" fill="hsl(25 30% 26%)" radius={[0, 3, 3, 0]} animationDuration={400} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Buscar beneficiario, organismo o finalidad..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            {(["ALL", "HIGH", "MEDIUM", "LOW"] as FilterLevel[]).map((level) => (
              <Button
                key={level}
                variant={filterLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterLevel(level)}
              >
                {level === "ALL" ? "Todos" : level === "HIGH" ? "Alto" : level === "MEDIUM" ? "Medio" : "Bajo"}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="border rounded-sm overflow-hidden shadow-[var(--shadow-card)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60 text-left">
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-[0.1em] text-muted-foreground">Beneficiario</th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    <button
                      className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                      onClick={() => setSortAsc(!sortAsc)}
                    >
                      Importe <ArrowUpDown size={12} />
                    </button>
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-[0.1em] text-muted-foreground hidden md:table-cell">Organismo</th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-[0.1em] text-muted-foreground hidden lg:table-cell">Finalidad</th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-[0.1em] text-muted-foreground">Nivel</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-14 text-center text-muted-foreground">
                      No se encontraron registros coincidentes con los filtros seleccionados.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`${borderClass[row.confidence_level]} border-b bg-card hover:bg-muted/30 transition-colors opacity-0 animate-fade-in-up`}
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <td className="px-5 py-3.5 font-medium">{row.beneficiary}</td>
                      <td className="px-5 py-3.5 font-mono tabular-nums">€{row.amount_eur.toLocaleString("es-ES")}</td>
                      <td className="px-5 py-3.5 text-muted-foreground hidden md:table-cell">{row.granting_body}</td>
                      <td className="px-5 py-3.5 text-muted-foreground hidden lg:table-cell">{row.purpose}</td>
                      <td className="px-5 py-3.5">
                        <ConfidenceBadge level={row.confidence_level} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
