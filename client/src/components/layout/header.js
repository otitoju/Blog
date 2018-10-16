import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">

    
            <Link to="/" class="navbar-brand">myBlog</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav">

                
                <ul class="navbar-nav mr-auto pull-center">
                    <li className="nav-item active">
                        <Link to="/"class="nav-link">Gist
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/techs" className="nav-link">Tech</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/sport" class="nav-link">Sport</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/campus" class="nav-link">Campus gist</Link>
                    </li>

                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                </ul>
                

                <form class="form-inline">
                    <div class="md-form my-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    </div>
                </form>
            </div>


        </nav>
      </div>
    )
  }
}
