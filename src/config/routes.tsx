import { NavigationItemProps } from "@/components/NavigationSection/navigationItem";
import { Navigation } from "@/types/enum/navigation";
import { Project } from "@/components/icons/navigation/Project";
import { Contact } from "@/components/icons/navigation/Contact";
import { Question } from "@/components/icons/navigation/Question";
import { Stack } from "@/components/icons/navigation/Stack";

export const ROUTES: NavigationItemProps[] = [
  {
    to: Navigation.Projects,
    className: "lg:row-span-2 col-span-3 lg:col-span-1 bg-white text-accent",
    text: "Projects",
    icon: <Project />,
    theme: "white",
  },
  {
    to: Navigation.Contact,
    className: "col-span-2 bg-yellow text-black ",
    text: "Hire Me",
    icon: <Contact />,
    theme: "yellow",
  },
  {
    to: Navigation.About,
    className: "bg-blue text-white",
    text: "About Me",
    icon: <Question />,
    theme: "blue",
  },
  {
    to: Navigation.Stack,
    className: "col-span-3 lg:col-span-1 bg-accent text-white",
    text: "My Stack",
    icon: <Stack />,
    theme: "black",
  },
];
