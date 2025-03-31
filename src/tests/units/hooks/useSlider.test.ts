import { describe, expect, expectTypeOf, test, vi } from 'vitest'
import { useSlider } from '@/lib/hooks/useSlider'
import { act, renderHook } from '@testing-library/react'

describe('useSlider hook:', () => {
  test('should be defined', () => {
    expect(useSlider).toBeDefined()
  })

  test('should return valid data', () => {
    const { result } = renderHook(useSlider)
    expectTypeOf(result.current.currentIndex).toEqualTypeOf<number>()
    expectTypeOf(result.current.nextSlide).toEqualTypeOf<() => void>()
    expectTypeOf(result.current.prevSlide).toEqualTypeOf<() => void>()
    expectTypeOf(result.current).toEqualTypeOf<ReturnType<typeof useSlider>>()
  })

  test('currentIndex should have 0 as initial value', () => {
    const { result } = renderHook(useSlider)
    expect(result.current.currentIndex).toEqual(0)
  })

  describe('nextSlide method:', () => {
    test('should increment currentIndex', () => {
      const { result } = renderHook(useSlider)
      expect(result.current.currentIndex).toEqual(0)
      act(() => {
        result.current.nextSlide()
      })
      expect(result.current.currentIndex).toEqual(1)
    })

    test("should set currentIndex to 0 if it's bigger than maxItems", () => {
      const maxItems = 2
      const { result } = renderHook(() => useSlider(maxItems))
      expect(result.current.currentIndex).toEqual(0)
      act(() => {
        for (let i = 0; i < maxItems; i++) {
          result.current.nextSlide()
        }
        result.current.nextSlide()
      })
      expect(result.current.currentIndex).toEqual(0)
    })
  })

  describe('prevSlide method:', () => {
    test('should decrement currentIndex', () => {
      const { result } = renderHook(() => useSlider(2))
      expect(result.current.currentIndex).toEqual(0)
      act(() => {
        {
          result.current.nextSlide()
          result.current.prevSlide()
        }
      })
      expect(result.current.currentIndex).toEqual(0)
    })
    test("should set currentIndex to maxItems if it's equal to 0", () => {
      const maxItems = 2
      const { result } = renderHook(() => useSlider(maxItems))
      expect(result.current.currentIndex).toEqual(0)
      act(() => {
        result.current.prevSlide()
      })
      expect(result.current.currentIndex).toEqual(maxItems)
    })
  })
  test('should increment currentIndex every 7 seconds', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useSlider(2))
    expect(result.current.currentIndex).toEqual(0)
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(result.current.currentIndex).toEqual(1)
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(result.current.currentIndex).toEqual(2)
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(result.current.currentIndex).toEqual(0)
  })
})
