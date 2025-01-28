import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '../radio-group'

describe('RadioGroup Component', () => {
  const renderRadioGroup = (props = {}) => {
    return render(
      <RadioGroup {...props}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <label htmlFor="option-one">Option One</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <label htmlFor="option-two">Option Two</label>
        </div>
      </RadioGroup>
    )
  }

  it('renders radio group with items', () => {
    renderRadioGroup({ defaultValue: "option-one" })

    expect(screen.getByRole('radio', { name: 'Option One' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Option Two' })).toBeInTheDocument()
  })

  it('selects the default value', () => {
    renderRadioGroup({ defaultValue: "option-one" })

    expect(screen.getByRole('radio', { name: 'Option One' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Option Two' })).not.toBeChecked()
  })

  it('changes selection when clicking different options', async () => {
    const user = userEvent.setup()
    renderRadioGroup({ defaultValue: "option-one" })

    const optionOne = screen.getByRole('radio', { name: 'Option One' })
    const optionTwo = screen.getByRole('radio', { name: 'Option Two' })

    expect(optionOne).toBeChecked()
    expect(optionTwo).not.toBeChecked()

    await user.click(optionTwo)

    expect(optionOne).not.toBeChecked()
    expect(optionTwo).toBeChecked()
  })

  it('handles disabled state', () => {
    render(
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <label htmlFor="option-one">Option One</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" disabled />
          <label htmlFor="option-two">Option Two</label>
        </div>
      </RadioGroup>
    )

    expect(screen.getByRole('radio', { name: 'Option Two' })).toBeDisabled()
  })

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup()
    renderRadioGroup({ defaultValue: "option-one" })

    const optionOne = screen.getByRole('radio', { name: 'Option One' })
    const optionTwo = screen.getByRole('radio', { name: 'Option Two' })

    await user.tab()
    expect(optionOne).toHaveFocus()

    await user.keyboard('{ArrowRight}')
    expect(optionTwo).toHaveFocus()

    await user.keyboard('{ArrowLeft}')
    expect(optionOne).toHaveFocus()
  })

  it('calls onChange handler when selection changes', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()

    render(
      <RadioGroup defaultValue="option-one" onValueChange={handleChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <label htmlFor="option-one">Option One</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <label htmlFor="option-two">Option Two</label>
        </div>
      </RadioGroup>
    )

    await user.click(screen.getByRole('radio', { name: 'Option Two' }))
    expect(handleChange).toHaveBeenCalledWith('option-two')
  })

  it('maintains ARIA attributes', () => {
    renderRadioGroup({ defaultValue: "option-one", "aria-label": "Test Options" })

    const radioGroup = screen.getByRole('radiogroup')
    expect(radioGroup).toHaveAttribute('aria-label', 'Test Options')

    const options = screen.getAllByRole('radio')
    options.forEach(option => {
      expect(option).toHaveAttribute('aria-checked')
    })
  })

  it('applies custom className to radio items', () => {
    render(
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" className="custom-radio" />
          <label htmlFor="option-one">Option One</label>
        </div>
      </RadioGroup>
    )

    expect(screen.getByRole('radio', { name: 'Option One' })).toHaveClass('custom-radio')
  })

  it('handles form submission correctly', async () => {
    const handleSubmit = jest.fn(e => e.preventDefault())
    const user = userEvent.setup()

    render(
      <form onSubmit={handleSubmit}>
        <RadioGroup defaultValue="option-one" name="test-radio">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <label htmlFor="option-one">Option One</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <label htmlFor="option-two">Option Two</label>
          </div>
        </RadioGroup>
        <button type="submit">Submit</button>
      </form>
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
