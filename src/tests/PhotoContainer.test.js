import React from 'react'
import { render } from '@testing-library/react'
import PhotoContainer from '../components/PhotoContainer'

it('should render PhotoContainer correctly', () => {
  const { container } = render(<PhotoContainer />)
  expect(container).toBeInTheDocument()
})