import React from 'react';
import { 
  // Layout,
   Row, Col } from 'antd';
   import StatsCard from './StatsCard';
   import {
    UserOutlined,
  //   DoorOutlined,
    TeamOutlined,
    BookOutlined,
  } from '@ant-design/icons';
// import LeavesChart from './LeavesChart';
import DoughnutChart from './DoughnutChart';
// import AttendanceChart from './AttendanceChart';
import BarChartComponent from './BarChart';

const dataSection = [{ name: 'Page A', value: 20 }, { name: 'Page B', value: 45 }, { name: 'Page C', value: 85 }, { name: 'Page D', value: 30 }];
const dataDoor = [{ name: 'Page A', value: 20 }, { name: 'Page B', value: 10 }, { name: 'Page C', value: 70 }, { name: 'Page D', value: 90 }, { name: 'Page E', value: 40 }, { name: 'Page F', value: 90 }];
const dataTeacher = [{ name: 'Page A', value: 1200 }, { name: 'Page B', value: 750 }, { name: 'Page C', value: 1450 }, { name: 'Page D', value: 1850 }, { name: 'Page E', value: 1350 }, { name: 'Page F', value: 1900 }];
const dataClass = [{ name: 'Page A', value: 100 }, { name: 'Page B', value: 610 }, { name: 'Page C', value: 120 }, { name: 'Page D', value: 1350 }, { name: 'Page E', value: 300 }, { name: 'Page F', value: 1100 }];
export default function StuCard() {
  return (
    <>
        <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Section"
          value="50"
          icon={<UserOutlined  style={{color:'rgb(8, 160, 255)',background:'rgb(136, 223, 252)',  borderRadius: '50%',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  fontSize: '24px'}}/>}
          color="#6495ED"
          data={dataSection}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Door"
          value="30"
          icon={<TeamOutlined  style={{background:'palegreen',  borderRadius: '50%',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  fontSize: '24px'}}/>}
          // color="#FF69B4"
          color='rgb(6, 255, 6)'
          data={dataDoor}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Teacher"
          value="1.2k"
          icon={<TeamOutlined  style={{color:'rgb(204, 4, 204)',background:'rgb(234, 138, 234)',  borderRadius: '50%',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  fontSize: '24px'}}/>}
          // color="#FFD700"
          color='rgb(234, 138, 234)'
          data={dataTeacher}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Class"
          value="100"
          icon={<BookOutlined  style={{color:'rgb(241, 181, 71)',background:'rgb(242, 209, 149)',  borderRadius: '50%',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  fontSize: '24px'}}/>}
          // color="#32CD32"
            color='rgb(241, 181, 71)'
          data={dataClass}
        />
      </Col>
    </Row>
    {/* <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Section"
          value="50"
          icon={<UserOutlined className="stats-card-icon" />}
          dataKey="value"
          data={[{ value: 20 }, { value: 45 }, { value: 85 }, { value: 30 }]}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Door"
          value="30"
          icon={<TeamOutlined className='stat-card-icon' />}
          dataKey="value"
          data={[{ value: 20 }, { value: 10 }, { value: 70 }, { value: 90 }, { value: 40 }, { value: 90 }]}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Teacher"
          value="1.2k"
          icon={<TeamOutlined className='state-icon-3' />}
          dataKey="value"
          data={[{ value: 1200 }, { value: 750 }, { value: 1450 }, { value: 1850 }, { value: 1350 }, { value: 1900 }]}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <StatsCard
          title="Class"
          value="100"
          icon={<BookOutlined className='state-icon-4' />}
          dataKey="value"
          data={[{ value: 100 }, { value: 610 }, { value: 120 }, { value: 1350 }, { value: 300 }, { value: 1100 }]}
        />
      </Col>
    </Row> */}
        {/* <div className="container"
        // theme={ darkTheme ? 'dark' : 'light' }
        >
  <div className="card">
    <div className="card-header">
        <div className="card-top">
            <h4 className="card-title">AttendanceChart</h4>
        </div>
    </div>
    <div className="card-body">
          <AttendanceChart />
    </div>
  </div>
</div> */}
{/* <div className='Stu'>
<div className="Apppp">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BarChartComponent />
        </Col>
      </Row>
    </div>
  <div className="Appp">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <DoughnutChart />
        </Col>
      </Row>
    </div>

</div> */}
{/* <div className="Stu"> */}
      <Row gutter={[16, 16]} className="chart-container">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="chart-col">
          <BarChartComponent />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="chart-col">
          <DoughnutChart />
        </Col>
      </Row>
    {/* </div> */}
    </>
  )
}
