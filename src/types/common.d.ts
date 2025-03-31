type Theme = 'black' | 'white' | 'yellow' | 'blue'

interface ExtendedDocument extends Document {
  startViewTransition?: any
}

type NotNullish<T extends object> = {
  [K in keyof T]-?: Exclude<T[K], null | undefined>
}

type DataTypeAttribute = {
  [key: `data-${string}`]: string
}

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type Overwrite<T, U> = Prettify<Omit<T, keyof U> & U>