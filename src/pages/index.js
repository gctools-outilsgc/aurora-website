import React from 'react';

import {
  Jumbotron,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Layout from '../components/Layout';

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
          Making this one line
        </p>
        <p className="lead">
          <Button color="primary">Get started!</Button>
        </p>
      </Jumbotron>
      <div className="row">
        <Card className="col">
          <CardBody>
            <CardTitle>Designers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>Developers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line for testing
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>Writers</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Making this one line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
