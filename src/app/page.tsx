import { ThemeProvider } from '@/components/providers/theme-provider'
import { InfoSection } from '@/components/info-section'
import { NavigationSection } from '@/components/navigation-section'

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="white"
      themes={['black', 'yellow', 'white', 'blue'] as Theme[]}
      disableTransitionOnChange={false}
    >
      <main className="bg-primary text-primary-content transition-colors duration-300 w-full h-full flex flex-col justify-between">
        <InfoSection />
        <NavigationSection />
      </main>
    </ThemeProvider>
  )
}
