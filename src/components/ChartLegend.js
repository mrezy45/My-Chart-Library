import React from 'react';
import '../styles/ChartStyles.css';

const ChartLegend = ({ data, colors = [] }) => {
  return (
    <div className="chart-legend">
      {data.map((d, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: colors[i % colors.length] || 'steelblue' }}
          ></span>
          <span className="legend-label">{d.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;