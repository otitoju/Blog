import React, { Component } from 'react'
import { NewTech } from '../../api/api'

export default class newTech extends Component {
    constructor(props){
        super(props)
        this.state ={
            title:'',
            content:''
        }
    }
    async handlePost(e) {
        e.preventDefault()
        const info = await NewTech(this.state)
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
          <h1 class="text-center my-5 header-color">New Tech Post</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="upload-img">
              <div class="row justify-content-center">
                <div class="col-12">
                  <p class="text-center">
                    <span class="h2">
                      <i class="fa fa-camera" aria-hidden="true"></i>
                    </span>
                    <br/> Click to upload image
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
