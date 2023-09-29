import { InfoSection } from "@/components/InfoSection";
import { NavigationSection } from "@/components/NavigationSection";
import { ThemeProvider } from "@/app/theme-provider";
import { ViewTransitionModal } from "@/components/ViewTransitionModal";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="white"
      themes={["black", "yellow", "white", "blue"] as Theme[]}
      disableTransitionOnChange={false}
    >
      <main className="bg-primary text-primary-content h-full transition-colors duration-300 pt-0 w-full flex flex-col justify-between">
        <InfoSection />
        <NavigationSection />
      </main>
      <ViewTransitionModal />
    </ThemeProvider>
  );
}
