import React from 'react';
import { Menu } from 'antd';

import {HomeOutlined,
    BarsOutlined,
    TeamOutlined,
    UserOutlined,
    BookOutlined,
    CalendarOutlined,
    PieChartOutlined

} from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';

export default function MenuList() {
  return (
    <>
    <Menu 
    // theme={darkTheme ? 'dark' : 'light'}
    mode='inline'
    className='menu-bar'
    >
      <MenuItem key="home" icon={<HomeOutlined />}>
      Dashboard
      </MenuItem>
      {/* Section */}
    <Menu.SubMenu key="tasks" icon={<TeamOutlined/>} 
    // ⚙️
    title="Section"
    >
      <MenuItem key="Task-1">Create Section</MenuItem>
      <MenuItem key="Task-2">All Sections</MenuItem>
    </Menu.SubMenu>
    {/* Door */}
    <Menu.SubMenu 
    key="subtasks"
    icon={<BarsOutlined />}
    title="Door"
    >
      <MenuItem key="task-1">Task-1</MenuItem>
      <MenuItem key="task-2">Task-2</MenuItem>
      <Menu.SubMenu key="subtask" title="Subtask">
        <MenuItem key="subtask-1">Subtask-1</MenuItem>
        <MenuItem key="subtask-2">Subtask-2</MenuItem>
      </Menu.SubMenu>
    </Menu.SubMenu>
    {/* Teacher */}
    <Menu.SubMenu key="task" icon={<UserOutlined />} 
    title="Teacher"
    >
      <MenuItem key="Task-3">Task-1</MenuItem>
      <MenuItem key="Task-4">task-2</MenuItem>
    </Menu.SubMenu>
{/* Class */}
<Menu.SubMenu key="tassk" icon={<BookOutlined />} 
    title="Class"
    >
      <MenuItem key="Task-5">Task-1</MenuItem>
      <MenuItem key="Task-6">task-2</MenuItem>
    </Menu.SubMenu>
{/* Students */}
<Menu.SubMenu key="taask" icon={<TeamOutlined />} 
    title="Students"
    >
      <MenuItem key="Task-7">Task-1</MenuItem>
      <MenuItem key="Task-8">task-2</MenuItem>
    </Menu.SubMenu>
{/* Holidays */}
<Menu.SubMenu key="tsk" icon={<CalendarOutlined />} 
    title="Holidays"
    >
      <MenuItem key="Task-9">Task-1</MenuItem>
      <MenuItem key="Task-10">task-2</MenuItem>
    </Menu.SubMenu>
{/* Leaves */}
<Menu.SubMenu key="taassk" icon={<PieChartOutlined />} 
    title="Leaves"
    >
      <MenuItem key="Task-11">Task-1</MenuItem>
      <MenuItem key="Task-12">task-2</MenuItem>
    </Menu.SubMenu>
{/* Attendence */}
<Menu.SubMenu key="tasek" icon={<PieChartOutlined />} 
    title="Attendence"
    >
      <MenuItem key="Task-13">Task-1</MenuItem>
      <MenuItem key="Task-14">task-2</MenuItem>
    </Menu.SubMenu>
    </Menu>
    </>
  )
}
