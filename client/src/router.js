import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './components/css/MDB-Free/css/bootstrap.min.css'
import './components/css/MDB-Free/css/mdb.min.css'
import Posts from './components/pages/clientView/posts'
import NewPost from './components/pages/admin/newPost'
import TechPosts from './components/pages/clientView/techs'
import Campus from './components/pages/clientView/campus'
import NewTech from './components/pages/admin/newTech'

export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" strict exact={true} component={Posts} />
            <Route path="/newtech" strict exact={true} component={NewTech} />
            <Route path="/campus" strict exact={true} component={Campus} />
            <Route path="/newpost" strict exact={true} component={NewPost} />
            <Route path="/techs" strict exact={true} component={TechPosts} />
        </Switch>
      </div>
    )
  }
}
