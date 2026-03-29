import { dataLastUpdated } from "@/lib/data";

export function Footer() {
  const formatted = new Date(dataLastUpdated).toLocaleString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <footer className="border-t bg-card py-14">
      <div className="container space-y-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Fuentes oficiales</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.ine.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Instituto Nacional de Estadística (INE)
                </a>
              </li>
              <li>
                <a href="https://www.boe.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Boletín Oficial del Estado (BOE)
                </a>
              </li>
              <li>
                <a href="https://www.poderjudicial.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Consejo General del Poder Judicial
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Metodología</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Los datos presentados son agregados de fuentes públicas oficiales.
              El nivel de confianza se calcula mediante un algoritmo de verificación cruzada.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Aviso legal</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este panel agrega datos públicos oficiales. No constituye asesoramiento legal.
            </p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DatosQueImportan — Transparencia verificada
          </p>
          <p className="text-xs font-mono text-muted-foreground tabular-nums">
            ACTUALIZADO: {formatted}
          </p>
        </div>
      </div>
    </footer>
  );
}
