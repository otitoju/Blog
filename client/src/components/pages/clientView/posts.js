import React, { Component } from 'react'
import { getAllPost } from '../../api/api'

export default class posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        const posts = await getAllPost()
        console.log(posts)
        this.setState({posts: posts})
        console.log(this.state.posts)
    }
  render() {
    return (
      <div>
        <section className="container my-5">

            <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
            <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {this.state.posts.map( post => (
                <div>
                <div  className="row" >
                        <div className="col-lg-5">

                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                        <img className="img-fluid" src={require('../../images/learn-node.jpg')} alt="Sample image"/>
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                        </div>

                        </div>
                        <div className="col-lg-7">

                        <a href="#!" className="green-text"><h6 className="font-weight-bold mb-3"><i className="fa fa-cutlery pr-2"></i>Food</h6></a>
                        <h3 className="font-weight-bold mb-3"><strong>{post.title}</strong></h3>
                        <p>{post.content}</p>
                        <p>by <a><strong>Carine Fox</strong></a>, {post.createdAt}</p>
                        <a class="btn btn-pink btn-md mb-lg-0 mb-4">Read more</a>

                        </div>

                    </div>

            <hr className="my-5"/>
            </div>
            ))}
            




        </section>
      </div>
    )
  }
}
