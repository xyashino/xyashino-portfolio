import { TextAnimation } from '@/components/about/text-animation'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('TextAnimation', () => {
  test('it renders', () => {
    render(<TextAnimation words={[]} />)
    expect(screen.getByTestId('text-animation')).toBeInTheDocument()
  })
  test('it renders the provided words', () => {
    const words = ['Hello', 'World']
    const { getByText } = render(<TextAnimation words={words} />)

    words.forEach(word => {
      expect(getByText(word)).toBeInTheDocument()
    })
  })
})
