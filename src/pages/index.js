import React from 'react';

import {
  Jumbotron,
  Button,
  Card,
  CardText,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Layout from '../components/layout';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby';
const IndexPage = ({ data }) => (

  <Layout>
    <div>
      <Card inverse>
        <Img sizes={data.aurora.childImageSharp.sizes} />
        <CardImgOverlay className="no-borders">
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
        </CardImgOverlay>
      </Card>
      <div className="row">
        <Card className="col text-center">
          <Img fluid={data.eye.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{__('Designers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="col text-center">
          <Img fluid={data.gears.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{__('Developers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line for testing
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col text-center">
          <Img fluid={data.pen.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{__('Writers')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Making this one line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col text-center">
          <Img fluid={data.pie.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{__('Data Scientists')}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              One Line
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card className="col text-center">
          <Img fluid={data.contributors.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{__('Contributors')}</CardTitle>
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

export const query = graphql`
query {
  eye:file(relativePath: { regex: "/eye/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  gears:file(relativePath: { regex: "/gears/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  pen:file(relativePath: { regex: "/pen/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  contributors:file(relativePath: { regex: "/contributors/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  pie:file(relativePath: { regex: "/pie/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  aurora:file(relativePath: { regex: "/aurora/" }) {
    childImageSharp {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
}
`;