import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from '.';

// Constants
test('Default render', () => {
    render(<InputText label={"jordi"} />);
    const linkElement = screen.getByText(/jordi/i);
    expect(linkElement).toBeInTheDocument();
});