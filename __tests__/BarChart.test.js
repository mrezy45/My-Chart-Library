import React from 'react';
import { render } from '@testing-library/react';
import BarChart from '../src/components/BarChart';

describe('BarChart Component', () => {
  it('renders without crashing', () => {
    const data = [{ value: 50 }, { value: 80 }];
    const { container } = render(<BarChart data={data} colors={['#ff0000', '#00ff00']} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct number of bars', () => {
    const data = [{ value: 50 }, { value: 80 }, { value: 30 }];
    const { container } = render(<BarChart data={data} colors={['#ff0000', '#00ff00']} />);
    
    // Find the rect elements (bars)
    const bars = container.querySelectorAll('rect');
    
    // Ensure that the number of rect elements matches the data length
    expect(bars.length).toBe(data.length);
  });
  
});
