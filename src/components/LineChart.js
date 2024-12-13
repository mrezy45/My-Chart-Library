import React from 'react';
import '../styles/ChartStyles.css';

const LineChart = ({ data, colors = [] }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const svgHeight = 300;
  const points = data
    .map((d, i) => `${i * 50},${svgHeight - (d.value / maxValue) * svgHeight}`)
    .join(' ');

  return (
    <div className="chart-container">
      <svg width="100%" height="300px">
        <polyline
          fill="none"
          stroke={colors[0] || 'steelblue'}
          strokeWidth="2"
          points={points}
        />
      </svg>
    </div>
  );
};

export default LineChart;