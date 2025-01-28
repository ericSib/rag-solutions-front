import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../card'

describe('Card Components', () => {
  const renderCard = (props = {}) => {
    return render(
      <Card {...props}>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    )
  }

  it('renders card with all subcomponents', () => {
    renderCard()

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(screen.getByText('Test Footer')).toBeInTheDocument()
  })

  it('applies custom className to card', () => {
    const { container } = renderCard({ className: 'custom-class' })

    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('renders card header with custom className', () => {
    const { container } = render(
      <Card>
        <CardHeader className="custom-header">
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
      </Card>
    )

    const header = container.querySelector('.custom-header')
    expect(header).toBeInTheDocument()
  })

  it('renders card content with custom className', () => {
    const { container } = render(
      <Card>
        <CardContent className="custom-content">
          Test Content
        </CardContent>
      </Card>
    )

    const content = container.querySelector('.custom-content')
    expect(content).toBeInTheDocument()
  })

  it('forwards ref to card component', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Card ref={ref}>
        <CardContent>Test Content</CardContent>
      </Card>
    )

    expect(ref.current).toBeInTheDocument()
  })

  it('handles nested content correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Main Title</CardTitle>
          <CardDescription>Main Description</CardDescription>
          <p>Subtitle</p>
        </CardHeader>
        <CardContent>
          <div>Nested Content</div>
          <button>Action Button</button>
        </CardContent>
        <CardFooter>
          <button>Cancel</button>
          <button>Submit</button>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText('Main Title')).toBeInTheDocument()
    expect(screen.getByText('Main Description')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Nested Content')).toBeInTheDocument()
    expect(screen.getByText('Action Button')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('maintains proper nesting structure', () => {
    const { container } = renderCard()

    const card = container.firstChild as HTMLElement
    expect(card.firstChild).toHaveClass('flex flex-col space-y-1.5 p-6') // CardHeader
    expect(card.children[1]).toHaveClass('p-6 pt-0') // CardContent
    expect(card.lastChild).toHaveClass('flex items-center p-6 pt-0') // CardFooter
  })

  it('handles click events on card', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Card onClick={handleClick}>
        <CardContent>Clickable Content</CardContent>
      </Card>
    )

    await user.click(screen.getByText('Clickable Content'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('applies hover styles correctly', () => {
    const { container } = render(
      <Card className="hover:bg-gray-100">
        <CardContent>Hover Content</CardContent>
      </Card>
    )

    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('hover:bg-gray-100')
  })

  it('handles conditional rendering of card components', () => {
    const showFooter = false
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        {showFooter && <CardFooter>Test Footer</CardFooter>}
      </Card>
    )

    expect(screen.queryByText('Test Footer')).not.toBeInTheDocument()
  })

  it('supports data attributes', () => {
    const { container } = render(
      <Card data-testid="test-card" data-custom="custom-value">
        <CardContent>Test Content</CardContent>
      </Card>
    )

    const card = container.firstChild as HTMLElement
    expect(card).toHaveAttribute('data-testid', 'test-card')
    expect(card).toHaveAttribute('data-custom', 'custom-value')
  })

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup()
    render(
      <Card tabIndex={0}>
        <CardContent>
          <button>First Button</button>
          <button>Second Button</button>
        </CardContent>
      </Card>
    )

    await user.tab()
    expect(screen.getByText('First Button')).toHaveFocus()

    await user.tab()
    expect(screen.getByText('Second Button')).toHaveFocus()
  })
})
