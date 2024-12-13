import React from 'react';
import { render } from '@testing-library/react';
import ChartLegend from '../src/components/ChartLegend';

describe('ChartLegend Component', () => {
  it('renders without crashing', () => {
    const data = [
      { label: 'January', value: 40 },
      { label: 'February', value: 60 },
    ];
    const { container } = render(<ChartLegend data={data} colors={['#ff0000', '#00ff00']} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the correct number of legend items', () => {
    const data = [
      { label: 'January', value: 40 },
      { label: 'February', value: 60 },
      { label: 'March', value: 20 },
    ];
    const { getAllByText } = render(<ChartLegend data={data} colors={['#ff0000', '#00ff00', '#0000ff']} />);
    const items = getAllByText(/January|February|March/);
    expect(items.length).toBe(data.length);
  });
});