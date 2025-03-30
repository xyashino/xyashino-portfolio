import { TextArea } from '@/components/contact/contact-form/text-area'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'
import { beforeEach, describe, expect, test } from 'vitest'

describe('TextArea', () => {
  let props: ComponentProps<typeof TextArea>
  let rerender: (newProps?: typeof props) => void

  beforeEach(() => {
    props = {
      label: 'label',
      defaultValue: ''
    }
    const { rerender: rerenderComponents } = render(<TextArea {...props} />)
    rerender = (newProps = props) =>
      rerenderComponents(<TextArea {...newProps} />)
  })

  test('should render', () => {
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  test('should render with placeholder', () => {
    props.placeholder = 'placeholder'
    rerender()
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  test('should render with value', () => {
    props.defaultValue = 'value'
    rerender()
    expect(screen.getByDisplayValue('value')).toBeInTheDocument()
  })
})
