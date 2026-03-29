import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Scale, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { subsidyData, courtCaseData, candidateData } from "@/lib/data";

const totalSubsidies = subsidyData.reduce((s, d) => s + d.amount_eur, 0);
const openCases = courtCaseData.filter((c) => c.status === "Abierto").length;

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-[12vh] md:py-[16vh]">
        <div className="container max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-0 animate-fade-in-up">
            Panel de transparencia independiente
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-[1.05] mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            Datos oficiales.
            <br />
            <span className="text-accent">Transparencia</span> real.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
            Agregamos y verificamos datos públicos de España:
            subvenciones, procesos judiciales y demografía — sin filtros partidistas.
          </p>
          <div className="flex gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <Link to="/subvenciones">
              <Button size="lg" className="gap-2">
                Explorar registros
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/espana">
              <Button variant="outline" size="lg">
                Ver España en datos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border" />
      </div>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
            Cifras clave
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              label="Población total (2024)"
              value="48.592.909"
              detail="Fuente: INE"
              delay={300}
            />
            <StatCard
              label="Subvenciones rastreadas"
              value={`€${(totalSubsidies / 1_000_000).toFixed(1)}M`}
              detail={`${subsidyData.length} registros`}
              delay={400}
            />
            <StatCard
              label="Casos judiciales abiertos"
              value={String(openCases)}
              detail={`${courtCaseData.length} total registrados`}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border" />
      </div>

      {/* Navigation cards */}
      <section className="py-16 pb-24">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
            Secciones
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <NavCard
              icon={<BarChart3 size={20} />}
              title="Subvenciones"
              desc="Analiza subvenciones públicas clasificadas por nivel de riesgo."
              to="/subvenciones"
              delay={0}
            />
            <NavCard
              icon={<Scale size={20} />}
              title="Justicia"
              desc="Seguimiento de procesos judiciales con fuentes verificadas."
              to="/justicia"
              delay={100}
            />
            <NavCard
              icon={<Users size={20} />}
              title="Candidatos"
              desc="Fichas de candidatos con historial de controversias."
              to="/candidatos"
              delay={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

function NavCard({ icon, title, desc, to, delay }: { icon: React.ReactNode; title: string; desc: string; to: string; delay: number }) {
  return (
    <Link
      to={to}
      className="group block border bg-card p-7 rounded-sm opacity-0 animate-fade-in-up transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:border-accent/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-1.5 font-sans">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
        Ver sección <ArrowRight size={12} />
      </span>
    </Link>
  );
}

export default Index;
