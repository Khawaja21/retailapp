import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', value: 4000 },
  { name: 'FEB', value: 3000 },
  { name: 'MAR', value: 2000 },
  { name: 'APR', value: 2780 },
  { name: 'MAY', value: 1890 },
  { name: 'JUN', value: 2390 },
  { name: 'JUL', value: 3490 },
  { name: 'AUG', value: 4000 },
  { name: 'SEP', value: 3000 },
  { name: 'OCT', value: 2000 },
  { name: 'NOV', value: 2780 },
  { name: 'DEC', value: 1890 },
];

const AttendanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;