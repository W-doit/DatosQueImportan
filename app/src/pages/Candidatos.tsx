import { Card, CardContent } from "@/components/ui/card";
import { candidateData } from "@/lib/data";
import { ExternalLink, AlertTriangle, Scale } from "lucide-react";

function getTransparencyScore(c: typeof candidateData[0]) {
  const penalty = c.court_cases_count * 3 + c.controversies_count;
  return Math.max(0, 10 - penalty);
}

function scoreColor(score: number) {
  if (score >= 7) return "text-confidence-low";
  if (score >= 4) return "text-confidence-medium";
  return "text-confidence-high";
}

export default function Candidatos() {
  return (
    <div className="min-h-screen py-14">
      <div className="container space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Registro público
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Candidatos</h1>
          <p className="text-base text-muted-foreground max-w-lg">
            Fichas públicas de candidatos con datos verificados de controversias y procesos judiciales
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {candidateData.map((c, i) => {
            const score = getTransparencyScore(c);
            return (
              <Card
                key={c.name}
                className="border bg-card shadow-[var(--shadow-card)] opacity-0 animate-fade-in-up hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardContent className="p-7 space-y-5">
                  <div>
                    <h3 className="text-lg font-bold font-sans">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {c.party} — {c.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Scale size={14} />
                      <span className="font-mono tabular-nums">{c.court_cases_count}</span>
                      <span className="text-xs">casos</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <AlertTriangle size={14} />
                      <span className="font-mono tabular-nums">{c.controversies_count}</span>
                      <span className="text-xs">controversias</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Puntuación de transparencia</p>
                      <p className={`text-3xl font-bold font-mono tabular-nums ${scoreColor(score)}`}>
                        {score}/10
                      </p>
                    </div>
                    <a
                      href={c.bio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      Perfil <ExternalLink size={12} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground border-t pt-6">
          La puntuación de transparencia se calcula en base a datos públicos disponibles.
          No constituye una valoración moral ni legal del candidato.
        </p>
      </div>
    </div>
  );
}
