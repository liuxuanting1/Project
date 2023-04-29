import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
// 引入组件
import Login from '../views/login/Login'
import Detail from '../views/news/Detail'
import News from '../views/news/News'
import NewsSandBox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {
    return (
        <HashRouter>
            {/* switch： 匹配到之后立即停止匹配*/}
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/detail/:id" component={Detail} />
                {/* <Route path="/" component={NewsSandBox}/> */}
                {/* tender 通过判断有没有token字段？有加载NewsSandBox ： 没有重定向到/login中 */}
                <Route path="/" render={() =>
                    localStorage.getItem("token") ?
                        <NewsSandBox ></NewsSandBox> :
                        <Redirect to="/login" />
                } />
            </Switch>
        </HashRouter>
    )
}
