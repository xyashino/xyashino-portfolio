import { InfoSection } from "@/components/InfoSection";
import { NavigationSection } from "@/components/NavigationSection";
import { ThemeProvider } from "@/app/theme-provider";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="white"
      themes={["black", "yellow", "white", "blue"] as Theme[]}
      disableTransitionOnChange={false}
    >
      <main className="bg-primary text-primary-content transition-colors duration-300 w-full h-full flex flex-col justify-between animate-fadeIn">
        <InfoSection />
        <NavigationSection />
      </main>
    </ThemeProvider>
  );
}
