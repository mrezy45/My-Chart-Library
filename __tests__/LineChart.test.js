import React from 'react';
import { render } from '@testing-library/react';
import LineChart from '../src/components/LineChart';

describe('LineChart Component', () => {
  it('renders without crashing', () => {
    const data = [{ value: 50 }, { value: 80 }];
    const { container } = render(<LineChart data={data} colors={['#ff0000']} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the polyline correctly', () => {
    const data = [{ value: 50 }, { value: 80 }];
    const { container } = render(<LineChart data={data} colors={['#ff0000']} />);
    const polyline = container.querySelector('polyline');
    expect(polyline).toBeInTheDocument();
  });
});