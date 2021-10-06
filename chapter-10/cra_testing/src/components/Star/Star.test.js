import { render } from '@testing-library/react';
import React from "react";
import { Star } from './Star.jsx'

test('renders a h1', () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Great Star/);
    expect(h1).toHaveTextContent('Great Star');
});