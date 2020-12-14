import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostsNew extends Component {
    renderField=field=>{
        return (
            <div className={`form-group ${field.meta.touched && field.meta.error?'has-danger':''} `}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type='text'
                    {...field.input}
                />
                <div className="text-help">
                {field.meta.touched?field.meta.error:''}
                </div>
            </div>
            
        )
    }
    onFormSubmit = values=>{
        this.props.createPost(values,()=>{this.props.history.push("/")})
    }
    render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field
                    label='Title of a Blog'
                    name='title'
                    component={this.renderField}
                />
                 <Field
                    label="Categories"
                    name='categories'
                    component={this.renderField}
                />
                 <Field
                    label="Post Content"
                    name='content'
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-success">Submit</button> 
                <Link to="/" style={{marginLeft:"10px"}} className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}
const validate=(values)=>{
      const errors = {}
      if(!values.title){
          errors.title='Please enter a Title of your blog!'
      }
     
      if(!values.categories){
        errors.categories='Enter a Categories of your Blog!'
    }
    if(!values.content){
        errors.content='Enter some Content to your Blog!'
    }
    return errors
}

export default reduxForm({
    validate,
    form:'PostsNewForm'}
)(
    connect(null,{createPost})(PostsNew))
