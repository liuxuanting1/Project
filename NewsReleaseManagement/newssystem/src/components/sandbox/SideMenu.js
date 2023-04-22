// 侧边栏组件
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
// withRouter高阶组件   withRouter有Router属性
import { withRouter } from 'react-router-dom'
import {
  UserOutlined
} from '@ant-design/icons';
import axios from 'axios'
import { connect } from 'react-redux'
const { Sider } = Layout;
const { SubMenu } = Menu

//模拟数组结构
// const  menuList = [
//   {
//     key:"/home",
//     title:"首页",
//     icon:<UserOutlined />
//   },
//   {
//     key:"/user-manage",
//     title:"用户管理",
//     icon:<UserOutlined />,
//     children:[
//       {
//         key:"/user-manage/list",
//         title:"用户列表",
//         icon:<UserOutlined />
//       }
//     ]
//   },
//   {
//     key:"/right-manage",
//     title:"权限管理",
//     icon:<UserOutlined />,
//     children:[
//       {
//         key:"/right-manage/role/list",
//         title:"角色列表",
//         icon:<UserOutlined />
//       },
//       {
//         key:"/right-manage/right/list",
//         title:"权限列表",
//         icon:<UserOutlined />
//       }
//     ]
//   }
// ]
const iconList = {
  "/home": <UserOutlined />,
  "/user-manage": <UserOutlined />,
  "/user-manage/list": <UserOutlined />,
  "/right-manage": <UserOutlined />,
  "/right-manage/role/list": <UserOutlined />,
  "/right-manage/right/list": <UserOutlined />
  //.......
}


function SideMenu(props) {
  const [meun, setMeun] = useState([])
  useEffect(() => {
    axios.get("/rights?_embed=children").then(res => {
      console.log(res.data)
      setMeun(res.data)
    })
  }, [])

  const { role: { rights } } = JSON.parse(localStorage.getItem("token"))

  const checkPagePermission = (item) => {
    // pagepermisson 决定配置权限是否访问
    return item.pagepermisson && rights.includes(item.key)
  }
  // 展开二级目录
  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
          {/* 递归 */}
          {renderMenu(item.children)}
        </SubMenu>
      }

      return checkPagePermission(item) && <Menu.Item key={item.key} icon=
      // 点击跳转
      {iconList[item.key]} onClick={() => {
        //  console.log(props)
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

  // console.log(props.location.pathname)
  const selectKeys = [props.location.pathname]
  const openKeys = ["/" + props.location.pathname.split("/")[1]]
  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed} >
      <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
        <div className="logo" >全球新闻发布管理系统</div>
        <div style={{ flex: 1, "overflow": "auto" }}>
          <Menu theme="dark" mode="inline" selectedKeys={selectKeys} className="aaaaaaa" defaultOpenKeys={openKeys}>
            {renderMenu(meun)}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
const mapStateToProps = ({ CollApsedReducer: { isCollapsed } }) => ({
  isCollapsed
})
// 导出
// 导出之前用withRouter把SideMenu当成参数传出去
export default connect(mapStateToProps)(withRouter(SideMenu))