import React from 'react';
import githubLogo from '../img/github.png';
import downloadIcon from '../img/download.png';
import { StaticQuery, graphql, push, replace } from 'gatsby';
import {
  Button,
  Card,
  CardText,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardSubtitle,
  Jumbotron
} from 'reactstrap';
import Layout from '../components/layout';
import Img from "gatsby-image"
import { translate } from "react-i18next";
const IndexPage = ({ data, t, i18n }) => (

  <Layout>
    <Jumbotron style={{ backgroundImage: 'url("https://www.sciencealert.com/images/2018-02/processed/aurora_substorm_1024.jpg")', backgroundSize: 'cover', color: 'white' }}>
      <h1 className="display-3">Aurora Design System</h1>
      <p className="lead" style={{ maxWidth: '75%', paddingBottom: '20px' }}>
        A central design guide for the Digital Collaboration Division, the Government of Canada and our digital partners. Always free, always open and always collaborative.
        </p>
      <div>
        <Button>Get started</Button>
        <Button style={{ marginLeft: '10px' }}>Documentation</Button>
        <div className="ext-links" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <img src={githubLogo} style={{ width: '32px', height: '32px', display: 'inline-block' }} />
            <a href="" className="ext-link-text">Github</a>
          </span>
          <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '15px'}}>
            <img src={downloadIcon} style={{ width: '32px', height: '32px', display: 'inline-block' }} />
            <a href="" className="ext-link-text">Download</a>
          </span>
        </div>
      </div>
    </Jumbotron>
    <Card>
      <h2>I am a...</h2>
      <div className="row" style={{ width: '100%', justifyContent: 'space-between' }}>
        <Card className="col text-center" style={{ maxWidth: '300px' }}>
          <Img fluid={data.eye.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{t("Designer")}</CardTitle>
            <Button outline color="primary" block>Start Sketching</Button>
          </CardBody>
        </Card>
        <Card className="col text-center" style={{ maxWidth: '300px' }}>
          <Img fluid={data.gears.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{t("Developer")}</CardTitle>
            <Button outline color="primary" block>Start coding</Button>
          </CardBody>
        </Card>

        <Card className="col text-center" style={{ maxWidth: '300px' }}>
          <Img fluid={data.pen.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{t("Writer")}</CardTitle>
            <Button outline color="primary" block>Start typing</Button>
          </CardBody>
        </Card>

        <Card className="col text-center" style={{ maxWidth: '300px' }}>
          <Img fluid={data.pie.childImageSharp.fluid} />
          <CardBody>
            <CardTitle>{t("Data Scientist")}</CardTitle>
            <Button outline color="primary" block>Start Analyzing</Button>
          </CardBody>
        </Card>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>About Aurora Design System</h2>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <Card className="col text-left">
          <CardBody>
            <CardTitle className="highlight">{t("Simple and flexible")}</CardTitle>
            A leightweight system that allows individual teams to adapt branding and other design elements to suit a specific project. The system will provide guidelines for all necessary elements without being restrictive.
          </CardBody>
        </Card>
        <Card className="col text-left" >
          <CardBody>
            <CardTitle className="highlight">{t("Fun to use")}</CardTitle>
            The system itself will have a pleasing design that is easy for developers and designers to navigate and adapt to their needs. Using the design syustem wuill make their jobs weasier rather than add an extra burden or obligations to follow.
          </CardBody>
        </Card>
        <Card className="col text-left" >
          <CardBody>
            <CardTitle className="highlight">{t("Re-usable")}</CardTitle>
            All components and principles included in the design system are generic enough to suit a variety of needs for multiple teams. Code and design elements can easily be extracted to create new products. Communications guidelines are easy to understand and follow.
          </CardBody>
        </Card>
      </div>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <Card className="col text-left">
          <CardBody>
            <CardTitle className="highlight">{t("Diverse")}</CardTitle>
            The design system will cover a variety of needs and types of products. The system will also cover necessary government obligations such as official languages and accessibility.
          </CardBody>
        </Card>
        <Card className="col text-left" >
          <CardBody>
            <CardTitle className="highlight">{t("Technology agnostic")}</CardTitle>
            The design system is applicable regardless of which technology framework the team decides to use for their project.
          </CardBody>
        </Card>
        <Card className="col text-left" >
          <CardBody>
            <CardTitle className="highlight">{t("Open")}</CardTitle>
            The design system will be open and accessible to anyone who wishes to use it. All code is open source, and other guidelines and elements are free to copy.
          </CardBody>
        </Card>
      </div>
    </Card>
    <Jumbotron className="text-right" style={{ marginTop: '50px', backgroundImage: 'url("https://www.sciencealert.com/images/2018-02/processed/aurora_substorm_1024.jpg")', backgroundSize: 'cover', color: 'white', textAlign: 'right' }}>
      <p className="lead" style={{ display: 'inline-block', maxWidth: '50%', paddingBottom: '10px', textAlign: 'left' }}>
        Don’t fall into one of the roles above? The Aurora Design System can still improve your work! We are always looking for contributors to make the Aurora Design System better for content creators.
    </p>
      <p>
        <Button>Learn more</Button>
      </p>

    </Jumbotron>

  </Layout>

);



export default translate("FrontPage")(IndexPage);

//Fetches all images using the image plugin

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
  github:file(relativePath: { regex: "/github/" }) {
    childImageSharp {
      sizes(maxWidth: 32, maxHeight: 32) {
      ...GatsbyImageSharpSizes
      }
    }
  }
  aurora:file(relativePath: { regex: "/aurora/" }) {
    childImageSharp {
      fluid(maxWidth: 1920 ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;