import { NavigationItem } from "@/components/NavigationSection/navigationItem";
import { ROUTES } from "@/config/routes";

export const NavigationSection = () => {
  return (
    <section className="flex-row justify-center w-full lg:space-x-4  grid grid-cols-3  lg:grid-rows-2 gap-3 lg:gap-6 h-2/3 lg:h-1/2 lg:p-8 p-2">
      {ROUTES.map((route, i) => (
        <NavigationItem key={i} {...route} />
      ))}
    </section>
  );
};
