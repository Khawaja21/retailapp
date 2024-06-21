import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from 'antd';
// import './BarChartComponent.css';

const data = [
  { name: 'JAN', value: 4000 },
  { name: 'FEB', value: 3000 },
  { name: 'MAR', value: 2000 },
  { name: 'APR', value: 2780 },
  { name: 'MAY', value: 1890 },
  { name: 'JUN', value: 2390 },
  { name: 'JUL', value: 3490 },
  { name: 'AUG', value: 2000 },
  { name: 'SEP', value: 2780 },
  { name: 'OCT', value: 3000 },
  { name: 'NOV', value: 2390 },
  { name: 'DEC', value: 3490 },
];

const BarChartComponent = () => {
  return (
    <Card className="bar-chart-card" title="Students Attendance" extra={<span>Jan 2024 - Dec 2024</span>}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
          <Bar dataKey="value" fill="url(#colorValue)" barSize={20} radius={[10, 10, 0, 0]} />
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarChartComponent;
