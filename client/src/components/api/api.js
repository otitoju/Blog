import axios from 'axios'

//get all post 
export async function getAllPost() {
    try {
        const posts = await axios.get('/getposts')
        return posts.data.posts
    } catch (error) {
        return error.message
    }
}

//new post
export async function NewPost( details) {
    try {
        const { title, content } = details
        const newpost = await axios.post('/post', {title, content})
        return newpost.data
    } catch (error) {
        return error.message
    }
}

//get all tech post
export async function getAllTech() {
    try {
        const techs = await axios.get('/allpost')
        return techs.data
    } catch (error) {
        return error.message
    }
}
// new tech post
export async function NewTech(details) {
    try {
        const { title, content } = details
        const newtech = await axios.post('/tech', { title, content })
        console.log(newtech.data)
        return newtech.data
    } catch (error) {
        return error.message
    }
}
//new post image
export async function PostImage() {
    
}

//get all campus gist 
export async function getAllCampusGist() {
    try {
        const campus = await axios.get('/getcampusgist')
        console.log(campus.data)
        return campus.data
    } catch (error) {
        return error.message
    }
}
