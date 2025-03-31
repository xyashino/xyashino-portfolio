import { NavigationItem } from '@/components/navigation-section/navigation-item'
import { Navigation } from '@/lib/enum/navigation'
import { fireEvent, render, screen } from '@testing-library/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'
import { beforeEach, describe, expect, MockInstance, test, vi } from 'vitest'

vi.mock('next/navigation')
vi.mock('next-themes')

describe('NavigationItem', () => {
  let props: ComponentProps<typeof NavigationItem>
  let rerender: (newProps?: typeof props) => void
  ;(useRouter as unknown as MockInstance).mockReturnValue({ push: vi.fn() })
  ;(useTheme as unknown as MockInstance).mockReturnValue({
    theme: 'light',
    setTheme: vi.fn()
  })

  beforeEach(() => {
    props = {
      to: Navigation.Home,
      className: 'test',
      text: 'test',
      icon: <div data-testid="icon" />,
      theme: 'white'
    }
    const { rerender: rerenderComponent } = render(
      <NavigationItem {...props} />
    )
    rerender = (newProps = props) =>
      rerenderComponent(<NavigationItem {...newProps} />)
  })

  test('should be rendered', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should render with text', () => {
    expect(screen.getByText(props.text)).toBeInTheDocument()
  })

  test('should render with icon', () => {
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  test('should navigate after click and enter', () => {
    const pushMock = vi.fn()
    // @ts-ignore
    useRouter.mockReturnValue({ push: pushMock })
    props.to = Navigation.About
    rerender()
    fireEvent.click(screen.getByRole('button'))
    expect(pushMock).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalledWith(Navigation.About)
    expect(pushMock).toHaveBeenCalledTimes(1)
    props.to = Navigation.Home
    rerender()
    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'Space'
    })
    expect(pushMock).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'Enter'
    })
    expect(pushMock).toHaveBeenCalledTimes(2)
    expect(pushMock).toHaveBeenCalledWith(Navigation.Home)
  })

  test('should apply classes correctly', () => {
    const whiteClass = 'text-white'
    expect(screen.getByRole('button')).not.toHaveClass(whiteClass)
    props.className = whiteClass
    rerender()
    expect(screen.getByRole('button')).toHaveClass(whiteClass)
  })

  test('should change theme when btn is clicked', () => {
    const setThemeMock = vi.fn()
    ;(useTheme as unknown as MockInstance).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock
    })
    rerender()
    fireEvent.click(screen.getByRole('button'))
    expect(setThemeMock).toHaveBeenCalled()
    expect(setThemeMock).toHaveBeenCalledWith(props.theme)
    expect(setThemeMock).toHaveBeenCalledTimes(1)

    props.theme = 'yellow'
    rerender()
    fireEvent.keyDown(screen.getByRole('button'), { key: 'space' })
    expect(setThemeMock).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' })
    expect(setThemeMock).toHaveBeenCalledTimes(2)
    expect(setThemeMock).toHaveBeenCalledWith(props.theme)
  })
})
