import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo() {
    const dataset = [
        { x: 1, y: 2 },
        { x: 2, y: 5.5 },
        { x: 3, y: 2 },
        { x: 5, y: 8.5 },
        { x: 8, y: 1.5 },
        { x: 10, y: 5 },
      ];
      
  return (
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y',color:'#333A73' }]}
      height={200}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
