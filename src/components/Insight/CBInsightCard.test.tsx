// ==============================================
// Filename: CBInsightCard.test.tsx
// Type: Component
// Last Updated: Oct 27, 2023
// Project: cb-website - Front End
// ==============================================

import React from 'react';
import { render, screen } from '@testing-library/react';
import CBInsightCard from './CBInsightCard';

describe('InsightCard Component', () => {
  it('should render an InsightCard with title, description, date, and image', () => {
    const cardData = {
      title: 'Sample Title 1',
      description: 'Maecenas volutpat, diam enim sagittis uam',
      image: require('../../public/assets/images/featured image(6).png'),
      date: 'October 27, 2023',
    };

    render(
      <CBInsightCard
        title={cardData.title}
        description={cardData.description}
        date={cardData.date}
        image={cardData.image}
      />
    );

    expect(screen.getByText(cardData.title)).toBeInTheDocument();
    expect(screen.getByText(cardData.description)).toBeInTheDocument();
    expect(screen.getByText(cardData.date)).toBeInTheDocument();

    const image = screen.getByAltText('image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  it('should render an image card without date', () => {
    const cardData = {
      title: 'Sample Title 1',
      description: 'Maecenas volutpat, diam enim sagittis uam',
      image: require('../../public/assets/images/featured image(6).png'),
      date: '',
    };

    render(
      <CBInsightCard
        title={cardData.title}
        description={cardData.description}
        image={cardData.image}
      />
    );

    expect(screen.getByText('Sample Title 1')).toBeInTheDocument();
    expect(
      screen.getByText('Maecenas volutpat, diam enim sagittis uam')
    ).toBeInTheDocument();

    const imageAltText = screen.getByAltText('image');
    expect(imageAltText).toBeInTheDocument();

    const image = screen.getByAltText('image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');

    expect(() => screen.getByText(cardData.date)).toThrow();
  });
});
