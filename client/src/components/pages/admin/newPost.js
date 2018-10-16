import React, { Component } from 'react'
import { NewPost } from '../../api/api'

export default class newPost extends Component {
    constructor(props){
        super(props)
        this.state ={
            title:'',
            content:'',
            picture:''
        }
    }
    async handlePost(e) {
        e.preventDefault()
        const {title, content } = this.state
        const info = await NewPost(this.state)
        console.log(info)
    }
    handleTitle(e) {
        this.setState({title: e.target.value})
    }
    handleContent(e) {
        this.setState({content: e.target.value})
    }
  render() {
    return (
      <div>
        
      <div class="container my-5">
        <div class="row justify-content-center">
          <h1 class="text-center my-5 header-color">Add New Blog post</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="upload-img">
              <div class="row justify-content-center">
                <div class="col-12">
                  <p class="text-center"><label>
                  <span class="h2">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                  </span>
                  <br/><input type="file"style={{display:'none'}}/> Click to upload image <i class="fa fa-upload-o" aria-hidden="true"></i>
                </label>
                  </p>
                </div>
              </div>
            </div>
            <hr/>
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-4">
                <label>Title:</label>
                <input type="text" class="form-control" placeholder="lorem ipsum" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
              </div>
            </div>
            <label>Story</label>
            <textarea placeholder="Lorem Ipsum Dolor" cols="3" rows="3" class="form-control" value={this.state.content} onChange={this.handleContent.bind(this)}></textarea>
            <hr/>
            <div class="text-center">
              <button class="btn btn-primary" onClick={this.handlePost.bind(this)}>
                <i class="fa fa-plus-circle" aria-hidden="true"></i> Post
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
