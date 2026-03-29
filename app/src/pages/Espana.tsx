import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demographicData, populationTimeline } from "@/lib/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const sortedProvinces = [...demographicData].sort((a, b) => b.population - a.population);

export default function Espana() {
  return (
    <div className="min-h-screen py-14">
      <div className="container space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Demografía
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">España en datos</h1>
          <p className="text-base text-muted-foreground max-w-lg">
            Demografía por provincias con datos del padrón municipal — Fuente: INE (2024)
          </p>
        </div>

        {/* Population timeline */}
        <Card className="border bg-card shadow-[var(--shadow-card)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-sans">
              Evolución de la población (2014–2024)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] md:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={populationTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(35 10% 87%)" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 12, fontFamily: "JetBrains Mono" }}
                    stroke="hsl(30 6% 48%)"
                  />
                  <YAxis
                    tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
                    stroke="hsl(30 6% 48%)"
                    tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
                    width={55}
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
                    formatter={(value: number) => [value.toLocaleString("es-ES"), "Población"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="population"
                    stroke="hsl(30 32% 48%)"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: "hsl(30 32% 48%)" }}
                    activeDot={{ r: 5, strokeWidth: 2, stroke: "hsl(40 20% 97%)" }}
                    animationDuration={600}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Province bar chart */}
        <Card className="border bg-card shadow-[var(--shadow-card)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-sans">
              Población por provincia (Top 10)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[380px] md:h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedProvinces} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(35 10% 87%)" />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
                    stroke="hsl(30 6% 48%)"
                    tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
                  />
                  <YAxis
                    type="category"
                    dataKey="province_name"
                    tick={{ fontSize: 12 }}
                    stroke="hsl(30 6% 48%)"
                    width={90}
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
                    formatter={(value: number) => [value.toLocaleString("es-ES"), "Habitantes"]}
                  />
                  <Bar dataKey="population" fill="hsl(25 30% 26%)" radius={[0, 3, 3, 0]} animationDuration={400} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground border-t pt-6">
          Fuente:{" "}
          <a href="https://www.ine.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
            Instituto Nacional de Estadística (INE)
          </a>
          {" "}— Datos de padrón municipal 2024
        </p>
      </div>
    </div>
  );
}
