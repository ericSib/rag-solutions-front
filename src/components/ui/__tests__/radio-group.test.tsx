import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { act } from 'react-dom/test-utils'

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

    expect(screen.getByLabelText('Option One')).toBeInTheDocument()
    expect(screen.getByLabelText('Option Two')).toBeInTheDocument()
  })

  it('selects the default value', () => {
    renderRadioGroup({ defaultValue: "option-one" })

    const optionOne = screen.getByLabelText('Option One')
    expect(optionOne).toBeChecked()
  })

  it('changes selection when clicking different options', async () => {
    const user = userEvent.setup()
    renderRadioGroup({ defaultValue: "option-one" })

    const optionOne = screen.getByLabelText('Option One')
    const optionTwo = screen.getByLabelText('Option Two')

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

    const optionTwo = screen.getByLabelText('Option Two')
    expect(optionTwo).toBeDisabled()
  })

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup()
    renderRadioGroup({ defaultValue: "option-one" })

    const optionOne = screen.getByLabelText('Option One')
    const optionTwo = screen.getByLabelText('Option Two')

    // Focus on first option
    await user.tab()
    expect(optionOne).toHaveFocus()

    // Move to next option with arrow key
    await user.keyboard('[ArrowRight]')
    expect(optionTwo).toHaveFocus()

    // Move back with left arrow
    await user.keyboard('[ArrowLeft]')
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

    await user.click(screen.getByLabelText('Option Two'))
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

    const radioItem = screen.getByLabelText('Option One')
    expect(radioItem).toHaveClass('custom-radio')
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

    await user.click(screen.getByLabelText('Option Two'))
    await user.click(screen.getByText('Submit'))

    expect(handleSubmit).toHaveBeenCalled()
    const formData = new FormData(handleSubmit.mock.calls[0][0].target)
    expect(formData.get('test-radio')).toBe('option-two')
  })
})
