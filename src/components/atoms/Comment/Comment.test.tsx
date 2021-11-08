import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from '.';

// Constants
test('Default render: name', () => {
    render(<Comment value={{}} />);
    const linkElement = screen.getByText(/name/i);
    expect(linkElement).toBeInTheDocument();
});

test('Default render: email', () => {
    render(<Comment value={{}} />);
    const linkElement = screen.getByText(/email/i);
    expect(linkElement).toBeInTheDocument();
});

test('Default render: rating', () => {
    render(<Comment value={{}} />);
    const linkElement = screen.getByText(/rating/i);
    expect(linkElement).toBeInTheDocument();
});

test('Default render: comments', () => {
    render(<Comment value={{}} />);
    const linkElement = screen.getByText(/comments/i);
    expect(linkElement).toBeInTheDocument();
});

// Value
test('Default render with values', () => {
    render(<Comment value={{ name: "Jordi Serra", email: "jordi.serra@yopmail.com", rating: 1, comments: "lore ipsum" }} />);
    const linkElementName = screen.getByText(/Jordi Serra/i);
    const linkElementEmail = screen.getByText(/jordi.serra@yopmail.com/i);
    const linkElementComments = screen.getByText(/lore ipsum/i);
    expect(linkElementName).toBeInTheDocument();
    expect(linkElementEmail).toBeInTheDocument();
    expect(linkElementComments).toBeInTheDocument();
});

test('Default render with values (force without rating)', () => {
    render(<Comment value={{ name: "Jordi Serra", email: "jordi.serra@yopmail.com", rating: undefined, comments: "lore ipsum" }} />);
    const linkElementName = screen.getByText(/Jordi Serra/i);
    const linkElementEmail = screen.getByText(/jordi.serra@yopmail.com/i);
    const linkElementComments = screen.getByText(/lore ipsum/i);
    expect(linkElementName).toBeInTheDocument();
    expect(linkElementEmail).toBeInTheDocument();
    expect(linkElementComments).toBeInTheDocument();
});