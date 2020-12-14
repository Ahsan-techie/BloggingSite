import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
    renderPosts=()=>{
        return  _.map(this.props.posts,
            post=>{
                return (
                    <li className="list-group-item list-group-item-action list-group-item-warning" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                       {post.title}
                    </Link>
                    </li>
                )
            })
    }
    render() {
        return (
            
            <div className="bg-white text-dark">
            <div className="text-xs-right">
               <Link className="btn btn-info" to='/posts/new'>
                 Add a Post
                </Link>

            </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return { posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostIndex)
