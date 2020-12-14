import axios from 'axios'

const RootURL = 'http://reduxblog.herokuapp.com/api'
const API_Key = '?key=superman'

export const fetchPosts =()=>{
    const request = axios.get(`${RootURL}/posts${API_Key}`)
    return {
        type:'FETCH_POSTS',
        payload:request

    }
}

export const createPost = (values,callback)=>{
    const request = axios.post(`${RootURL}/posts${API_Key}`,values).then(()=>callback())
    return {
        type:'CREATE_POST',
        payload:request,
        
    }
}
export const fetchPost =(id)=>{
    const request = axios.get(`${RootURL}/posts/${id}${API_Key}`)
    return {
        type:'FETCH_POST',
        payload:request

    }
}
export const deletePost =(id,callback)=>{
    axios.delete(`${RootURL}/posts/${id}${API_Key}`).then(()=>callback())
    return {
        type:'DELETE_POST',
        payload:id

    }
}

