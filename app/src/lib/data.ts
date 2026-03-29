import type { DemographicData, SubsidyData, CourtCaseData, CandidateData } from "./schemas";

export const demographicData: DemographicData[] = [
  { province_code: "28", province_name: "Madrid", year: 2024, population: 6751251, source_url: "https://www.ine.es" },
  { province_code: "08", province_name: "Barcelona", year: 2024, population: 5714730, source_url: "https://www.ine.es" },
  { province_code: "46", province_name: "Valencia", year: 2024, population: 2591875, source_url: "https://www.ine.es" },
  { province_code: "41", province_name: "Sevilla", year: 2024, population: 1950528, source_url: "https://www.ine.es" },
  { province_code: "29", province_name: "Málaga", year: 2024, population: 1713715, source_url: "https://www.ine.es" },
  { province_code: "48", province_name: "Vizcaya", year: 2024, population: 1153689, source_url: "https://www.ine.es" },
  { province_code: "15", province_name: "A Coruña", year: 2024, population: 1121815, source_url: "https://www.ine.es" },
  { province_code: "03", province_name: "Alicante", year: 2024, population: 1928105, source_url: "https://www.ine.es" },
  { province_code: "50", province_name: "Zaragoza", year: 2024, population: 977603, source_url: "https://www.ine.es" },
  { province_code: "30", province_name: "Murcia", year: 2024, population: 1530615, source_url: "https://www.ine.es" },
];

export const populationTimeline = [
  { year: 2014, population: 46512199 },
  { year: 2015, population: 46449565 },
  { year: 2016, population: 46440099 },
  { year: 2017, population: 46527039 },
  { year: 2018, population: 46722980 },
  { year: 2019, population: 47026208 },
  { year: 2020, population: 47329981 },
  { year: 2021, population: 47385107 },
  { year: 2022, population: 47615034 },
  { year: 2023, population: 48085361 },
  { year: 2024, population: 48592909 },
];

export const subsidyData: SubsidyData[] = [
  { id: "SUB-001", beneficiary: "Fundación Cultura Libre", amount_eur: 245000, granting_body: "Ministerio de Cultura", purpose: "Promoción cultural regional", date: "2024-03-15", confidence_level: "HIGH", keywords_matched: ["cultura", "subvención directa"] },
  { id: "SUB-002", beneficiary: "Asociación Emprendedores del Sur", amount_eur: 180000, granting_body: "Junta de Andalucía", purpose: "Fomento del emprendimiento", date: "2024-02-20", confidence_level: "MEDIUM", keywords_matched: ["emprendimiento"] },
  { id: "SUB-003", beneficiary: "Instituto Verde España", amount_eur: 520000, granting_body: "Ministerio de Transición Ecológica", purpose: "Rehabilitación medioambiental", date: "2024-01-10", confidence_level: "LOW", keywords_matched: ["medio ambiente"] },
  { id: "SUB-004", beneficiary: "Consultora Estratégica SL", amount_eur: 890000, granting_body: "Comunidad de Madrid", purpose: "Asesoramiento estratégico institucional", date: "2024-04-05", confidence_level: "HIGH", keywords_matched: ["consultoría", "contrato menor", "asesoramiento"] },
  { id: "SUB-005", beneficiary: "Red de Innovación Social", amount_eur: 67000, granting_body: "Generalitat de Catalunya", purpose: "Programa de integración social", date: "2024-03-28", confidence_level: "LOW", keywords_matched: ["integración"] },
  { id: "SUB-006", beneficiary: "Deportes para Todos", amount_eur: 312000, granting_body: "Consejo Superior de Deportes", purpose: "Infraestructura deportiva municipal", date: "2024-05-12", confidence_level: "MEDIUM", keywords_matched: ["deportes", "infraestructura"] },
  { id: "SUB-007", beneficiary: "Fundación Hermanos Unidos", amount_eur: 1450000, granting_body: "Ministerio de Asuntos Sociales", purpose: "Red de centros de acogida", date: "2024-01-22", confidence_level: "HIGH", keywords_matched: ["acogida", "sin licitación"] },
  { id: "SUB-008", beneficiary: "TechGov Solutions", amount_eur: 2100000, granting_body: "Secretaría de Estado de Digitalización", purpose: "Digitalización de servicios públicos", date: "2024-06-01", confidence_level: "HIGH", keywords_matched: ["digitalización", "adjudicación directa"] },
];

export const courtCaseData: CourtCaseData[] = [
  { case_id: "JC-2024-001", defendant: "García Martínez, J.", category: "Malversación", status: "Abierto", court: "Audiencia Nacional", filing_date: "2024-01-15", source_url: "https://www.poderjudicial.es", credibility_badge: "OFICIAL" },
  { case_id: "JC-2024-002", defendant: "López Fernández, M.", category: "Prevaricación", status: "Archivado", court: "Tribunal Superior de Justicia de Madrid", filing_date: "2023-11-20", source_url: "https://www.poderjudicial.es", credibility_badge: "OFICIAL" },
  { case_id: "JC-2024-003", defendant: "Rodríguez Sánchez, A.", category: "Cohecho", status: "Condenado", court: "Tribunal Supremo", filing_date: "2022-06-10", source_url: "https://elpais.com", credibility_badge: "MEDIOS" },
  { case_id: "JC-2024-004", defendant: "Pérez Gutiérrez, C.", category: "Tráfico de influencias", status: "Abierto", court: "Audiencia Provincial de Barcelona", filing_date: "2024-03-05", source_url: "https://www.poderjudicial.es", credibility_badge: "OFICIAL" },
  { case_id: "JC-2024-005", defendant: "Hernández Díaz, R.", category: "Fraude fiscal", status: "Abierto", court: "Audiencia Nacional", filing_date: "2024-04-18", source_url: "https://www.poderjudicial.es", credibility_badge: "OFICIAL" },
];

export const candidateData: CandidateData[] = [
  { name: "Ana Beltrán Ortega", party: "Partido A", role: "Diputada", court_cases_count: 0, controversies_count: 1, bio_url: "https://example.com/ana" },
  { name: "Carlos Montoya Ruiz", party: "Partido B", role: "Senador", court_cases_count: 2, controversies_count: 4, bio_url: "https://example.com/carlos" },
  { name: "Elena Vázquez Gil", party: "Partido C", role: "Alcaldesa", court_cases_count: 1, controversies_count: 2, bio_url: "https://example.com/elena" },
  { name: "Francisco Morales Díaz", party: "Partido A", role: "Concejal", court_cases_count: 0, controversies_count: 0, bio_url: "https://example.com/francisco" },
  { name: "Isabel Navarro Torres", party: "Partido D", role: "Diputada autonómica", court_cases_count: 3, controversies_count: 5, bio_url: "https://example.com/isabel" },
  { name: "Jorge Delgado Prieto", party: "Partido B", role: "Eurodiputado", court_cases_count: 0, controversies_count: 1, bio_url: "https://example.com/jorge" },
];

export const dataLastUpdated = "2025-03-18T14:02:00+01:00";
