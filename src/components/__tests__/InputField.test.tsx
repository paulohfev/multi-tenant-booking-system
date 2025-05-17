import { render } from '@testing-library/react'
import InputField from '../InputField'

describe('InputField', () => {
  it('should match snapshot with required props', () => {
    const { container } = render(<InputField label='Test Label' name='test' type='text' value='' onChange={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with min value', () => {
    const { container } = render(
      <InputField label='Test Label' name='test' type='date' value='' onChange={() => {}} min='2024-03-21' />
    )
    expect(container).toMatchSnapshot()
  })
})
