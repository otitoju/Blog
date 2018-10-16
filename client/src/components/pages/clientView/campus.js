import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { getAllCampusGist } from '../../api/api'

export default class campus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: []
        }
    }
    async componentDidMount() {
        const gist = await getAllCampusGist()
        this.setState({campus: gist.gist})
    }
  render() {
    return (
      <div>
                  <section class="container" style={{marginTop: '50px'}}>
        <h2 className="h1-responsive font-weight-bold text-center my-5">Campus Gist</h2>
          <div class=" card-deck" >
            { this.state.campus ? this.state.campus.map( (gist, index) => (
                <div class="col-md-4">
                  <div class="card" key={index} style={{ marginBottom:'30px'}}>
                  <img class="card-img-top"  src={require('../../images/learn-node.jpg')}  alt=""/>
                      <div class="card-body">
                      <Link to={`/campus/${gist._id}`} style={{color:'rgb(45 5 5)', listStyle:'none'}}>
                          <h5 className="card-title"><bold>{gist.title.toUpperCase()}</bold></h5>
                        </Link>
                          <h4 className="card-text">posted by Author</h4>
                                            <p className="card-text"><span class="glyphicon glyphicon-time" aria-hidden="true"></span> time</p>
                              
                          
                          <div class="Button text-center">
                    <Link to={`/campus/${gist._id}`} class="btn btn-outline-indigo"> Explore More</Link>
                  </div>
                      </div>
                  </div>
              </div>
            )) : (
                <h1>Unable to fetch recipe, please try again</h1>
            )}
            
                
            
              
          </div>
        </section>
        
      
      </div>
    )
  }
}
