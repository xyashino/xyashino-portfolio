const { NEXT_PUBLIC_RESUME_URL_PL, NEXT_PUBLIC_RESUME_URL_EN } = process.env
if (!NEXT_PUBLIC_RESUME_URL_PL || !NEXT_PUBLIC_RESUME_URL_EN) {
  throw new Error(
    'Missing NEXT_PUBLIC_RESUME_URL_PL or NEXT_PUBLIC_RESUME_URL_EN env variable'
  )
}

export const RESUME_PL = NEXT_PUBLIC_RESUME_URL_PL
export const RESUME_EN = NEXT_PUBLIC_RESUME_URL_EN
