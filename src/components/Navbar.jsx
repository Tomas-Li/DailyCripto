import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, WindowsFilled } from '@ant-design/icons';

import { useSelector } from 'react-redux';

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  const navbarKey = useSelector((state => state.navbarKey.navbarKey[0]?.payload || ""))
  console.log(navbarKey)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth) //This gives us the screen size!

    window.addEventListener('resize', handleResize);

    handleResize();

    return() => window.removeEventListener('resize', handleResize);
  },[])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])


  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme='dark' selectedKeys={navbarKey}> {/*//!*/}
          <Menu.Item icon={<HomeOutlined/>} key={"Home"}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>} key={"Cryptocurrencies"}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>} key={"Exchanges"}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>} key={"News"}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}

    </div>
  )
}

export default Navbar