import { Dialog } from '@/components/dialogs/dialog'
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { ComponentProps } from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

describe('Dialog:', () => {
  let props: ComponentProps<typeof Dialog>
  let rerender: (newProps?: ComponentProps<typeof Dialog>) => void
  beforeEach(() => {
    props = {
      isOpen: true,
      close: vi.fn()
    }
    const { rerender: rerenderComponent } = render(<Dialog {...props} />)
    rerender = (newProps = props) => rerenderComponent(<Dialog {...newProps} />)
  })

  test('should render flag work properly', async () => {
    props.children = <p>Test</p>
    rerender()
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()
    expect(screen.queryByText('Test')).toBeInTheDocument()

    props.isOpen = false
    rerender()
    await waitForElementToBeRemoved(() => screen.getByTestId('modal'))
    expect(screen.queryByText('Test')).not.toBeInTheDocument()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  test('should call close method when background is clicked', () => {
    const element = screen.getByTestId('modal')
    fireEvent.click(element)
    expect(props.close).toHaveBeenCalledTimes(1)
  })
  test('should call close method when escape is pressed', () => {
    fireEvent.keyDown(window, {
      key: 'Escape'
    })
    expect(props.close).toHaveBeenCalledTimes(1)
  })
})
