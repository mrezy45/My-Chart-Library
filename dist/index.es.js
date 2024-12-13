import React from 'react';

var BarChart = function BarChart(_ref) {
  var data = _ref.data,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors;
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-container"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "300px"
  }, data.map(function (d, i) {
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: i * 50,
      y: 300 - d.value,
      width: "40",
      height: d.value,
      fill: colors[i % colors.length] || 'steelblue'
    });
  })));
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var LineChart = function LineChart(_ref) {
  var data = _ref.data,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors;
  var maxValue = Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.value;
  })));
  var svgHeight = 300;
  var points = data.map(function (d, i) {
    return "".concat(i * 50, ",").concat(svgHeight - d.value / maxValue * svgHeight);
  }).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-container"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "300px"
  }, /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: colors[0] || 'steelblue',
    strokeWidth: "2",
    points: points
  })));
};

var PieChart = function PieChart(_ref) {
  var data = _ref.data,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors;
  var total = data.reduce(function (sum, d) {
    return sum + d.value;
  }, 0);
  var cumulativeValue = 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-container"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "200px",
    height: "200px",
    viewBox: "-100 -100 200 200"
  }, data.map(function (d, i) {
    var startAngle = cumulativeValue / total * 2 * Math.PI;
    cumulativeValue += d.value;
    var endAngle = cumulativeValue / total * 2 * Math.PI;
    var largeArcFlag = d.value / total > 0.5 ? 1 : 0;
    var startX = Math.cos(startAngle) * 100,
      startY = Math.sin(startAngle) * 100;
    var endX = Math.cos(endAngle) * 100,
      endY = Math.sin(endAngle) * 100;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: "M 0 0 L ".concat(startX, " ").concat(startY, " A 100 100 0 ").concat(largeArcFlag, " 1 ").concat(endX, " ").concat(endY, " Z"),
      fill: colors[i % colors.length] || 'steelblue'
    });
  })));
};

var ChartLegend = function ChartLegend(_ref) {
  var data = _ref.data,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors;
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-legend"
  }, data.map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "legend-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "legend-color",
      style: {
        backgroundColor: colors[i % colors.length] || 'steelblue'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "legend-label"
    }, d.label));
  }));
};

export { BarChart, ChartLegend, LineChart, PieChart };
