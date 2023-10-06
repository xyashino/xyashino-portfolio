const { NEXT_PUBLIC_EMAIL, NEXT_PUBLIC_LINKEDIN } = process.env;

export const CONTACT_DATA = [
  {
    title: "By email:",
    link: `mailto:${NEXT_PUBLIC_EMAIL}`,
    text: NEXT_PUBLIC_EMAIL,
  },
  {
    title: "By LinkedIn:",
    link: NEXT_PUBLIC_LINKEDIN,
    text: "Szczepan M.",
  },
];
