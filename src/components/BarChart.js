import React from 'react';
import '../styles/ChartStyles.css';

const BarChart = ({ data, colors = [] }) => {
  return (
    <div className="chart-container">
      <svg width="100%" height="300px">
        {data.map((d, i) => (
          <rect
            key={i}
            x={i * 50}
            y={300 - d.value}
            width="40"
            height={d.value}
            fill={colors[i % colors.length] || 'steelblue'}
          />
        ))}
      </svg>
    </div>
  );
};

export default BarChart;