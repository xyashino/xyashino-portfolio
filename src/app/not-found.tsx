import { redirect } from 'next/navigation'
import { Navigation } from '@/lib/enum/navigation'

export default function NotFound() {
  redirect(Navigation.Home)
}
