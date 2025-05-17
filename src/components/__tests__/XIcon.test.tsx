import { render } from '@testing-library/react'
import XIcon from '../XIcon'

describe('XIcon', () => {
  it('should match snapshot', () => {
    const { container } = render(<XIcon classNameStyling='w-6 h-6' />)
    expect(container).toMatchSnapshot()
  })
})
