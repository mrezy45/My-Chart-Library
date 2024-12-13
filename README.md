A React library for reusable chart components.

## Installation
\`\`\`bash
npm install my-chart-library
\`\`\`

## Usage
\`\`\`javascript
import { BarChart } from 'my-chart-library';

const data = [
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 80 },
];

<BarChart data={data} colors={['red', 'blue']} />;
\`\`\`
`;