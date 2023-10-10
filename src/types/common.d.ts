type Theme = "black" | "white" | "yellow" | "blue";

interface ExtendedDocument extends Document {
  startViewTransition?: any;
}

type NotNullish<T extends object> = {
  [K in keyof T]-?: Exclude<T[K], null | undefined>;
};
