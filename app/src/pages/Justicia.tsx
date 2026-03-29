import { Card, CardContent } from "@/components/ui/card";
import { courtCaseData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const statusStyles: Record<string, string> = {
  Abierto: "bg-confidence-high/10 text-confidence-high border-confidence-high",
  Archivado: "bg-muted text-muted-foreground border-border",
  Condenado: "bg-foreground text-background border-foreground",
};

const credibilityStyles: Record<string, string> = {
  OFICIAL: "bg-primary/10 text-primary border-primary",
  MEDIOS: "bg-accent/10 text-accent border-accent",
};

export default function Justicia() {
  return (
    <div className="min-h-screen py-14">
      <div className="container space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Poder judicial
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Seguimiento judicial</h1>
          <p className="text-base text-muted-foreground max-w-lg">
            Procesos judiciales de relevancia pública con fuentes verificadas
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {courtCaseData.map((c, i) => (
            <Card
              key={c.case_id}
              className="border bg-card shadow-[var(--shadow-card)] opacity-0 animate-fade-in-up hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CardContent className="p-7">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-muted-foreground">{c.case_id}</span>
                      <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-semibold ${statusStyles[c.status]}`}>
                        {c.status}
                      </span>
                      <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-semibold ${credibilityStyles[c.credibility_badge]}`}>
                        {c.credibility_badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-sans">{c.defendant}</h3>
                    <p className="text-sm text-muted-foreground">
                      {c.category} — {c.court}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground tabular-nums">
                      Fecha: {new Date(c.filing_date).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                  <a
                    href={c.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline shrink-0"
                  >
                    Fuente <ExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground border-t pt-6">
          Los datos judiciales proceden de fuentes oficiales (Poder Judicial) y medios de comunicación verificados.
          La etiqueta OFICIAL indica procedencia directa del sistema judicial.
        </p>
      </div>
    </div>
  );
}
