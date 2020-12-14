import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PostIndex from '../posts/PostIndex'
import PostsNew from '../posts/PostsNew'
import PostShow from '../posts/PostShow'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      
        <div style={{margin: "20px 40px"}} className="bg-white text-dark" >
        <Switch>
          <Route path='/' exact component={PostIndex} />
          <Route path='/posts/new' exact component={PostsNew} />
          <Route path='/posts/:id' exact component={PostShow} />
          </Switch>

        </div>
      </BrowserRouter>
        
      
    )
  }
}

export default App
