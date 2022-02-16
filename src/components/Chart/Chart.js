import ChartBar from './ChartBar';

import './Chart.css';

function Chart(props) {
  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...valueArray);

  const chartBars = props.dataPoints.map(dataPoint =>
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum}
      label={dataPoint.label}
    />
  );

  return (
    <div className="chart">
      {chartBars}
    </div>
  );
}

export default Chart;
