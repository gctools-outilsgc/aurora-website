import React from 'react'
import { Link } from 'gatsby'

import {
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Maple!</h1>
        <p className="lead">
          Subtitle.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typgraphy and spacing to space content out
          within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Get started!</Button>
        </p>
      </Jumbotron>
      <div class="row">
        <Card className="col">
          <CardBody>
            <CardTitle>Designers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>Developers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>Writers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  </Layout>
)

export default IndexPage
