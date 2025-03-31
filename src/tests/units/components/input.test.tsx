import { Input } from '@/components/contact/contact-form/input'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'
import { beforeEach, describe, expect, test } from 'vitest'

describe('Input', () => {
  let props: ComponentProps<typeof Input>
  let rerender: (newProps?: typeof props) => void

  beforeEach(() => {
    props = {
      defaultValue: '',
      label: 'label',
      'data-testid': 'input'
    }
    const { rerender: rerenderComponent } = render(<Input {...props} />)
    rerender = (newProps = props) => rerenderComponent(<Input {...newProps} />)
  })

  test('should be rendered', () => {
    expect(screen.getByLabelText('label')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  test('should render with placeholder', () => {
    props.placeholder = 'placeholder'
    rerender()
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  test('should render with value', () => {
    props.defaultValue = 'value'
    rerender()
    expect(screen.getByDisplayValue(props.defaultValue)).toBeInTheDocument()
  })
})
