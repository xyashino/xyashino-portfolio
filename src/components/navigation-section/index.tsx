import {
  Contact,
  Project,
  Question,
  Stack
} from '@/components/icons/navigation'
import { NavigationItem } from '@/components/navigation-section/navigation-item'
import { Navigation } from '@/lib/enum/navigation'

export const NavigationSection = () => {
  return (
    <section className="flex-row justify-center w-full lg:space-x-4  grid grid-cols-3  lg:grid-rows-2 gap-3 lg:gap-6 h-2/3 lg:h-1/2 lg:p-8 p-2">
      <NavigationItem
        to={Navigation.Projects}
        className="lg:row-span-2 col-span-3 lg:col-span-1 bg-white text-accent ring-black"
        text="Projects"
        icon={<Project />}
        theme="white"
      />
      <NavigationItem
        to={Navigation.Contact}
        className="col-span-2 bg-yellow text-black ring-black"
        text="Hire Me"
        icon={<Contact />}
        theme="yellow"
      />
      <NavigationItem
        className="bg-blue text-white ring-white"
        to={Navigation.About}
        text="About Me"
        icon={<Question />}
        theme="blue"
      />
      <NavigationItem
        to={Navigation.Stack}
        className="col-span-3 lg:col-span-1 bg-accent ring-white text-white"
        text="My Stack"
        icon={<Stack />}
        theme="black"
      />
    </section>
  )
}
