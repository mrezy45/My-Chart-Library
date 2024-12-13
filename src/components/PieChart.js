import React from 'react';
import '../styles/ChartStyles.css'

const PieChart = ({ data, colors = [] }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulativeValue = 0;

  return (
    <div className="chart-container">
      <svg width="200px" height="200px" viewBox="-100 -100 200 200">
        {data.map((d, i) => {
          const startAngle = (cumulativeValue / total) * 2 * Math.PI;
          cumulativeValue += d.value;
          const endAngle = (cumulativeValue / total) * 2 * Math.PI;

          const largeArcFlag = d.value / total > 0.5 ? 1 : 0;
          const [startX, startY] = [Math.cos(startAngle) * 100, Math.sin(startAngle) * 100];
          const [endX, endY] = [Math.cos(endAngle) * 100, Math.sin(endAngle) * 100];

          return (
            <path
              key={i}
              d={`M 0 0 L ${startX} ${startY} A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
              fill={colors[i % colors.length] || 'steelblue'}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PieChart;