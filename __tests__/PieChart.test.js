import React from 'react';
import { render } from '@testing-library/react';
import PieChart from '../src/components/PieChart';

describe('PieChart Component', () => {
  it('renders without crashing', () => {
    const data = [{ value: 50 }, { value: 80 }];
    const { container } = render(<PieChart data={data} colors={['#ff0000', '#00ff00']} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct number of paths', () => {
    const data = [{ value: 50 }, { value: 80 }, { value: 30 }];
    const { container } = render(<PieChart data={data} colors={['#ff0000', '#00ff00']} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(data.length);
  });
});
