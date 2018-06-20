import React from 'react'
import Link from 'gatsby-link'
import {nav} from 'reactstrap'

const Header = ({ siteTitle }) => (
  <div class="container-fluid" >
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/"> { siteTitle } </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/page-2">Components</a>
                </li>
                
            </ul>
        </div>
  </nav>
  </div>
)

export default Header
