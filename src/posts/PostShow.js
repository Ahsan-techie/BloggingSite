import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPost,deletePost} from '../actions'
import {Link} from 'react-router-dom'

class PostShow extends Component {
    componentDidMount(){
        const {id} = this.props.match.params
        this.props.fetchPost(id)
    }
    onDeleteClick=()=>{
        this.props.deletePost(this.props.match.params.id,()=>{this.props.history.push("/")})
    }
    render() {
        
        const {post} = this.props
        if(!post){
            return <div></div>
        }
        return (
            <div>
                <Link to='/' className="btn btn-primary">Back to Home</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h1>{post.title}</h1>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>    
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {post:state.posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow)
