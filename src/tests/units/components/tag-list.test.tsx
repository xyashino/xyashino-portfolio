import { TagList } from '@/components/tag-list'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'

describe('TagList', () => {
  const tags = ['test', 'test2', 'test3']

  beforeEach(() => {
    render(<TagList tags={tags} />)
  })

  test('should render tags with proper values', () => {
    for (const tag of tags) {
      const tagElement = screen.getByText(tag)
      expect(tagElement).toBeInTheDocument()
      expect(tagElement.textContent).toBe(tag)
    }
  })
})
