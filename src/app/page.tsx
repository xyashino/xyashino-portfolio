import { InfoSection } from "@/components/InfoSection";
import { NavigationSection } from "@/components/NavigationSection";
import { ThemeProvider } from "@/app/theme-provider";
import { PageWrapper } from "@/components/containers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
