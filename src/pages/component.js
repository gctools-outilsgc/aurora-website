import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Button } from 'reactstrap';
const Component = () => (
  <div>
  <Jumbotron>
    <h1 className="display-3">Hi from the components page</h1>
    <hr className="my-2" />
    <Link to="/">Go back to the homepage</Link>
    
    </Jumbotron>
  </div>
)

export default Component
