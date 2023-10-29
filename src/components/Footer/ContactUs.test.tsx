// ==============================================
// Filename: ContactUs.test.tsx
// Type: Component
// Last Updated: Oct 24, 2023
// Project: Codebin website - Front End
// ==============================================

import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from './ContactUs';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

describe('ContactUs Component', () => {
  it('renders the correct contact details', () => {
    render(
      <ContactUs
        emailId='info@code-b.in'
        title='contactUs'
        contactIcon={faEnvelope}
      />
    );
    const Contactus = screen.getByText('info@code-b.in');
    const contactTitle = screen.getByText('contactUs');
    const Icons = screen.getAllByTestId('social-icon');

    expect(Icons).toHaveLength(1);
    expect(Contactus).toBeInTheDocument();
    expect(contactTitle).toBeInTheDocument();
  });
});
