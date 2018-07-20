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
import Layout from '../components/layout';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

const IndexPage = () => (
  <Layout>
    <div>
      <Jumbotron>
        <h1 className="display-3">{__('Welcome')}</h1>
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
            <CardTitle>{__('Designers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>{__('Developers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line for testing
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>{__('Writers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Making this one line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        
        <Card className="col">
          <CardBody>
            <CardTitle>{__('Data Scientists')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col">
          <CardBody>
            <CardTitle>{__('Partners')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  </Layout>
);

export default LocalizedComponent(IndexPage);
