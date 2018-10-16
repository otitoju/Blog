import React, { Component } from 'react'
import { getAllTech } from '../../api/api'
import { Link } from 'react-router-dom'

export default class techs extends Component {
  constructor(props) {
    super(props)
    this.state = {
        techs: []
    }
}
async componentDidMount() {
    const techs = await getAllTech()
    this.setState({techs: techs.message})
}
  render() {
    return (
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Technology posts</h2>
            <div class="col-lg-12 col-md-12">
            <h2 style={{color:'red'}}>Latest tech update</h2>
            {this.state.techs.map( (tech, index) => (
                <div>
                <Link to="/"><h1 style={{fontFamily:"Times New Roman", color:'teal'}}>{tech.title.toUpperCase()}</h1></Link>
                    <p style={{fontFamily:'Times New Roman'}}>{tech.content}</p>
                    
                    <h6 className="text-muted">posted by oluwapelumi, 10:28pm monday 2018.</h6>
                    <hr/>
            </div>
            ))}
            
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}
