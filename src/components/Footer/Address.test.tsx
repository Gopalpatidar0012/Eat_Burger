// ==============================================
// Filename: Address.test.tsx
// Type: Component
// Last Updated: Oct 24, 2023
// Project: Codebin website - Front End
// ==============================================

import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';
import { faMap } from '@fortawesome/free-regular-svg-icons';

describe('Footer Component', () => {
  it('renders a button with the provided title', () => {
    const cityAddresses = [
      {
        id: '1',
        city: 'India',
        phoneNo: '',
        address:
          'Code-Bin, Plot No. 4, S.No. 131/1A/1, Mahavir Park, opp.Orchid School, Baner Pune – 411045',
      },
      {
        id: '2',
        city: 'Canada',
        phoneNo: '+1 647-773-8546',
        address: '826 Brimorton Drive Scarborough ON M1G 2S9 Toronto',
      },
    ];

    render(
      <Address
        cityAddresses={cityAddresses}
        title='Address'
        addressIcon={faMap}
      />
    );

    const indiaAddress = screen.getByText(cityAddresses[0].address);
    const canadaAddress = screen.getByText(cityAddresses[1].address);
    const phoneNo = screen.getByText(cityAddresses[1].phoneNo);
    const title = screen.getByText('Address');
    const socialIcons = screen.getAllByTestId('social-icon');

    expect(socialIcons).toHaveLength(1);
    expect(indiaAddress).toBeInTheDocument();
    expect(canadaAddress).toBeInTheDocument();
    expect(phoneNo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
