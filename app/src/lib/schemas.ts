import { z } from "zod";

export const ConfidenceLevelSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type ConfidenceLevel = z.infer<typeof ConfidenceLevelSchema>;

export const DemographicDataSchema = z.object({
  province_code: z.string(),
  province_name: z.string(),
  year: z.number(),
  population: z.number(),
  source_url: z.string().url(),
});
export type DemographicData = z.infer<typeof DemographicDataSchema>;

export const SubsidyDataSchema = z.object({
  id: z.string(),
  beneficiary: z.string(),
  amount_eur: z.number(),
  granting_body: z.string(),
  purpose: z.string(),
  date: z.string(),
  confidence_level: ConfidenceLevelSchema,
  keywords_matched: z.array(z.string()),
});
export type SubsidyData = z.infer<typeof SubsidyDataSchema>;

export const CourtCaseDataSchema = z.object({
  case_id: z.string(),
  defendant: z.string(),
  category: z.string(),
  status: z.enum(["Abierto", "Archivado", "Condenado"]),
  court: z.string(),
  filing_date: z.string(),
  source_url: z.string().url(),
  credibility_badge: z.enum(["OFICIAL", "MEDIOS"]),
});
export type CourtCaseData = z.infer<typeof CourtCaseDataSchema>;

export const CandidateDataSchema = z.object({
  name: z.string(),
  party: z.string(),
  role: z.string(),
  court_cases_count: z.number(),
  controversies_count: z.number(),
  bio_url: z.string().url(),
});
export type CandidateData = z.infer<typeof CandidateDataSchema>;
