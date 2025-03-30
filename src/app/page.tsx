import { ThemeProvider } from "@/app/theme-provider";
import { InfoSection } from "@/components/info-section";
import { NavigationSection } from "@/components/NavigationSection";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="white"
      themes={["black", "yellow", "white", "blue"] as Theme[]}
      disableTransitionOnChange={false}
    >
      <main className="bg-primary text-primary-content transition-colors duration-300 w-full h-full flex flex-col justify-between">
        <InfoSection />
        <NavigationSection />
      </main>
    </ThemeProvider>
  );
}
