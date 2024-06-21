import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Vacation Leaves', value: 50, color: '#00C49F' },
  { name: 'Sick Leave', value: 25, color: '#8884D8' },
  { name: 'Emergency Leave', value: 25, color: '#FF8042' },
];

const DoughnutChart = () => {
  return (
    <div className="doughnut-chart">
      <h3 className="chart-title">Leaves</h3>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry,index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value, entry) => <span>{entry.payload.name}
            </span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;