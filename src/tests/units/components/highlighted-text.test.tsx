import { HighlightedText } from '@/components/dialogs/resume-dialog/highlighted-text'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'
import { beforeEach, describe, expect, test } from 'vitest'

describe('HighlightedText', () => {
  let props: ComponentProps<typeof HighlightedText>
  let rerender: (newProps?: typeof props) => void

  beforeEach(() => {
    props = {
      highlight: false,
      text: 'text'
    }

    const { rerender: rerenderComponent } = render(
      <HighlightedText {...props} />
    )
    rerender = (newProps = props) =>
      rerenderComponent(<HighlightedText {...newProps} />)
  })

  test('should be rendered', () => {
    expect(screen.getByTestId('highlighted-text')).toBeInTheDocument()
  })

  test('should render with text', () => {
    expect(screen.getByText(props.text)).toBeInTheDocument()
  })

  test('should apply classes correctly', () => {
    const highlightClass = 'bg-secondary text-secondary-content'
    expect(screen.getByTestId('highlighted-text')).not.toHaveClass(
      highlightClass
    )

    props.highlight = true
    rerender()
    expect(screen.getByTestId('highlighted-text')).toHaveClass(highlightClass)
  })
})
