import { z } from 'zod'

export const languageSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
})
export type Language = z.infer<typeof languageSchema>

export const translationSchema = z.object({
  id: z.string(),
  wordId: z.string(),
  translation: z.string(),
})
export type Translation = z.infer<typeof translationSchema>

export const wordSchema = z.object({
  id: z.string(),
  userId: z.string(),
  text: z.string(),
  language: z.string(),
  translations: translationSchema.array(),
})
export type Word = z.infer<typeof wordSchema>
