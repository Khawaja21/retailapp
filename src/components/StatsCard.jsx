// import React from 'react';
// import { Card } from 'antd';
// import { Line } from 'recharts';
// import { LineChart } from 'recharts';

// const StatsCard = ({ title, value, icon, dataKey, data }) => {
//   return (
//     <Card>
//       <div 
//     //   style={{ display: 'flex', justifyContent: 'space-between' }}
//       >
//         <div>
//         <div style={{ fontSize: '1.5rem' }}>{icon}</div>
//           <h3 style={{color:'grey'}}>{value}</h3>
//           <p style={{color:'grey'}}>{title}</p>
//         </div>
//       </div>
//       <LineChart width={150} height={50} data={data}>
//         <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
//       </LineChart>
//     </Card>
//   );
// };

// export default StatsCard;

// import React from 'react';
// import { Card } from 'antd';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// // import { UserOutlined } from '@ant-design/icons';
// // import './StatsCard.css';

// const data = [
//   { name: 'Page A', value: 20 },
//   { name: 'Page B', value: 45 },
//   { name: 'Page C', value: 85 },
//   { name: 'Page D', value: 30 },
// ];

// const StatsCard = ({ title, value, icon }) => {
//   return (
//     <Card className="stats-card">
//       <div className="stats-card-header">
//         <div className="stats-card-icon">
//           {icon}
//         </div>
//         <div className="stats-card-info">
//           <h3>{value}</h3>
//           <p>{title}</p>
//         </div>
//       </div>
//       <div className="stats-card-graph">
//         <ResponsiveContainer width="100%" height={120}>
//           <AreaChart data={data}>
//             <defs>
//               <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6495ED" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#6495ED" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" hide />
//             <YAxis hide />
//             <Tooltip />
//             <Area type="monotone" dataKey="value" stroke="#1E90FF" fillOpacity={1}
//              fill="url(#colorValue)" />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </Card>
//   );
// };

// export default StatsCard;


import React from 'react';
import { Card } from 'antd';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import './StatsCard.css';

const StatsCard = ({ title, value, icon, color, data }) => {
  return (
    <Card className="stats-card">
      <div className="stats-card-header">
        <div className="stats-card-icon" style={{ color }}>
          {icon}
        </div>
        <div className="stats-card-info">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
      </div>
      <div className="stats-card-graph">
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`colorValue-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke={color} fillOpacity={1} fill={`url(#colorValue-${title})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default StatsCard;
