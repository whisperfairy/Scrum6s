/**
 *
 * app.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/8/17
 *
 * @内容 作用
 * @内容 作用
 */
import React from 'react';
import './app.scss';
import {Layout, Menu} from 'antd';
const {Header, Content, Sider} = Layout, {SubMenu} = Menu;

import {Miss, Match} from 'react-router';
import Router from 'react-router/HashRouter';
import Renyuan from '../Renyuan/Renyuan.jsx';

class app extends React.PureComponent {
    constructor() {
        super();
    }

    handleClick({item}) {
        const {targetPath, redirect} = item.props;

        if (targetPath) {
            window.location.hash = item.props.targetPath;
        } else if (redirect) {
            window.location.href = redirect;
        }
    }

    render() {
        return <Router>
            <div className="app">
                <Layout className="layout_Main">
                    <Header className="header">
                        <div className="title">软件技术研究室项目管理系统</div>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{'background': '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{'height': '100%', 'borderRight': 0}}
                                onClick={this.handleClick}
                            >
                                <Menu.Item key="1" targetPath="/xiangmu">项目管理</Menu.Item>
                                <Menu.Item key="2" targetPath="/jihua">工作计划</Menu.Item>
                                <Menu.Item key="3" targetPath="/tongzhi">通知公告</Menu.Item>
                                <Menu.Item key="4" targetPath="/liucheng">项目流程</Menu.Item>
                                <Menu.Item key="5" targetPath="/renyuan">人员管理</Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout className="layout_Content" style={{'padding': '0 24px 24px'}}>
                            <Content style={{'background': '#fff', 'padding': 24, 'margin': 0, 'minHeight': 280}}>
                                <Match pattern="/renyuan" component={ Renyuan }/>
                                <Miss component={ Renyuan }></Miss>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        </Router>;
    }
}

export default app;