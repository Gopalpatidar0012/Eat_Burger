// ==============================================
// Filename: SocialLinks.test.tsx
// Type: Component
// Last Updated: Oct 24, 2023
// Project: Codebin website - Front End
// ==============================================

import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

describe('ContactUs Component', () => {
  it('renders the correct social Media icons', () => {
    const socialMediaLinks = [
      {
        id: '1',
        url: 'your-instagram-url',
        color: '#C2C2C2',
        icon: faInstagram,
        size: 'lg',
      },
      {
        id: '2',
        url: 'your-facebook-url',
        color: '#C2C2C2',
        icon: faFacebook,
        size: 'lg',
      },
    ];
    render(
      <SocialLinks
        title='Follow for interesting updates'
        socialMediaLinks={socialMediaLinks}
      />
    );
    const socialTitle = screen.getByText('Follow for interesting updates');
    const socialIcons = screen.getAllByTestId('social-icon');

    expect(socialIcons).toHaveLength(2);
    expect(socialTitle).toBeInTheDocument();
  });
});
