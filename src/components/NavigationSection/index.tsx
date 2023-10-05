import { NavigationItem } from "@/components/NavigationSection/navigationItem";
import { Navigation } from "@/types/enum/navigation";
import { Contact } from "@/components/icons/navigation/Contact";
import { Project } from "@/components/icons/navigation/Project";
import { Question } from "@/components/icons/navigation/Question";
import { Stack } from "@/components/icons/navigation/Stack";

export const NavigationSection = () => {
  return (
    <section className="flex-row justify-center w-full lg:space-x-4  grid grid-cols-3  lg:grid-rows-2 gap-3 lg:gap-6 h-2/3 lg:h-1/2 lg:p-8 p-2">
      <NavigationItem
        to={Navigation.Projects}
        className="lg:row-span-2 col-span-3 lg:col-span-1 bg-white text-accent"
        text="Projects"
        icon={<Project />}
        theme="white"
      />
      <NavigationItem
        to={Navigation.Contact}
        className="col-span-2 bg-yellow text-black"
        text="Hire Me"
        icon={<Contact />}
        theme="yellow"
      />
      <NavigationItem
        className="bg-blue text-white"
        to={Navigation.About}
        text="About Me"
        icon={<Question />}
        theme="blue"
      />
      <NavigationItem
        to={Navigation.Stack}
        className="col-span-3 lg:col-span-1 bg-accent text-white"
        text="My Stack"
        icon={<Stack />}
        theme="black"
      />
    </section>
  );
};
