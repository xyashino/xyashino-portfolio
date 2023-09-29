import { redirect } from "next/navigation";
import { Navigation } from "@/types/enum/navigation";

export default function NotFound() {
  redirect(Navigation.Home);
}
