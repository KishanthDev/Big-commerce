import React from 'react';
import { render, screen } from '@testing-library/react';
import BusinessHoursSection from './BusinessHoursSection'; // adjust the import path as needed
import type { BusinessHour } from '../../../types/data';

describe('BusinessHoursSection', () => {
  const mockBusinessHours: BusinessHour[] = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  ];

  test('renders the component with title', () => {
    render(<BusinessHoursSection businessHours={mockBusinessHours} />);
    
    expect(screen.getByRole('heading', { level: 2, name: 'Business Hours' })).toBeInTheDocument();
  });


  test('renders the emergency towing notice', () => {
    render(<BusinessHoursSection businessHours={mockBusinessHours} />);
    
    expect(screen.getByText('24/7 Emergency Towing Available')).toBeInTheDocument();
    expect(screen.getByText('24/7 Emergency Towing Available')).toHaveClass('text-red-600');
  });

  test('applies dark mode classes when in dark mode', () => {
    // This test assumes your setup can handle dark mode classes
    // You might need to mock or set up a dark mode context/provider
    render(<BusinessHoursSection businessHours={mockBusinessHours} />);
    
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveClass('dark:text-white');
    
    const emergencyText = screen.getByText('24/7 Emergency Towing Available');
    expect(emergencyText).toHaveClass('dark:text-red-400');
  });

  test('renders with empty business hours array', () => {
    render(<BusinessHoursSection businessHours={[]} />);
    
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByText('24/7 Emergency Towing Available')).toBeInTheDocument();
    expect(screen.queryAllByTestId('business-hour-row')).toHaveLength(0);
  });

});