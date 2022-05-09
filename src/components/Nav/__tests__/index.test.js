// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portriats of people in my life'}
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContectSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      contactSelected = {mockContactSelected}
      setContactSelected = {mockSetContectSelected}
      />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      contactSelected = {mockContactSelected}
      setContactSelected = {mockSetContectSelected}
      />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav 
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      contactSelected = {mockContactSelected}
      setContactSelected = {mockSetContectSelected}
      />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav 
      categories = {categories}
      setCurrentCategory = {mockSetCurrentCategory}
      currentCategory = {mockCurrentCategory}
      contactSelected = {mockContactSelected}
      setContactSelected = {mockSetContectSelected}
      />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });

})