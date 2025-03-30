import '@testing-library/jest-dom'

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
