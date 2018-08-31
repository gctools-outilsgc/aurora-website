import React from 'react';
import githubLogo from '../img/github.png';
import downloadIcon from '../img/download.png';
import { graphql } from 'gatsby';
import {
  Button,
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';
import Layout from '../components/layout';
import Img from "gatsby-image"
import { I18n } from "react-i18next";

const IndexPage = ({ data }) => (
  <Layout>
    <I18n ns={ ['FrontPage'] } >
      {
        (t, { i18n }) => (
          <Container>
            <Jumbotron style={{ backgroundImage: 'url("https://www.sciencealert.com/images/2018-02/processed/aurora_substorm_1024.jpg")', backgroundSize: 'cover', color: 'white' }}>
              <h1 className="display-3">Aurora Design System</h1>
              <p className="lead" style={{ maxWidth: '75%' }}>
                A central design guide for the Digital Collaboration Division, the Government of Canada and our digital partners. Always free, always open and always collaborative.
              </p>
              <div>
                <Button className="mb-1" size="lg">Get started</Button>
                <div className="mb-3 mt-3">
                  <a className="ext-link-text" href="https://github.com/gctools-outilsgc/design-system"><img className="mr-1" src={githubLogo} style={{ width: '32px', height: '32px', display: 'inline-block' }} />Find us on GitHub</a>
                  <a className="ml-3 ext-link-text" href="#"><img className="mr-1" src={downloadIcon} style={{ width: '32px', height: '32px', display: 'inline-block' }} />Download UI kit</a>
                </div>
              </div>
            </Jumbotron>

            <h2>I am a...</h2>

            <Row className="pb-2">
              <Col xs="6" sm="6" md="3" className="text-center">
                <Img fluid={data.eye.childImageSharp.fluid}  />
                <h3 className="mb-3 mt-3 h4">{t("Designers")}</h3>
                <Button className="mb-2" outline color="primary" block>Start sketching</Button>
              </Col>
              <Col xs="6" sm="6" md="3" className="text-center">
                <Img fluid={data.gears.childImageSharp.fluid}  />
                <h3 className="mb-3 mt-3 h4">{t("Developers")}</h3>
                <Button className="mb-2" outline color="primary" block>Start coding</Button>
              </Col>
              <Col xs="6" sm="6" md="3" className="text-center">
                <Img fluid={data.pen.childImageSharp.fluid}  />
                <h3 className="mb-3 mt-3 h4">{t("Writers")}</h3>
                <Button className="mb-2" outline color="primary" block>Start writing</Button>
              </Col>
              <Col xs="6" sm="6" md="3" className="text-center">
                <Img fluid={data.pie.childImageSharp.fluid}  />
                <h3 className="mb-3 mt-3 h4">{t("DataScientists")}</h3>
                <Button className="mb-2" outline color="primary" block>Start analyzing</Button>
              </Col>
            </Row>

            <h2 className="mt-3 mb-4" style={{textAlign: 'center'}}>About Aurora Design System</h2>

            <Row className="mb-3">
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Simple and flexible")}</h3>
                <p>A leightweight system that allows individual teams to adapt branding and other design elements to suit a specific project. The system will provide guidelines for all necessary elements without being restrictive.</p>
              </Col>
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Fun to use")}</h3>
                <p>The system itself will have a pleasing design that is easy for developers and designers to navigate and adapt to their needs. Using the design syustem wuill make their jobs weasier rather than add an extra burden or obligations to follow.</p>
              </Col>
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Re-usable")}</h3>
                <p>All components and principles included in the design system are generic enough to suit a variety of needs for multiple teams. Code and design elements can easily be extracted to create new products. Communications guidelines are easy to understand and follow.</p>
              </Col>
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Diverse")}</h3>
                <p>The design system will cover a variety of needs and types of products. The system will also cover necessary government obligations such as official languages and accessibility.</p>
              </Col>
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Technology agnostic")}</h3>
                <p>The design system is applicable regardless of which technology framework the team decides to use for their project.</p>
              </Col>
              <Col xs="12" sm="6" md="4">
                <h3 className="text-primary mb-3">{t("Open")}</h3>
                <p>The design system will be open and accessible to anyone who wishes to use it. All code is open source, and other guidelines and elements are free to copy.</p>
              </Col>
            </Row>

            <Jumbotron className="text-right" style={{ marginTop: '50px', backgroundImage: 'url("https://www.sciencealert.com/images/2018-02/processed/aurora_substorm_1024.jpg")', backgroundSize: 'cover', color: 'white', textAlign: 'right' }}>
              <p className="lead" style={{ display: 'inline-block', maxWidth: '50%', paddingBottom: '10px', textAlign: 'left' }}>
                Don’t fall into one of the roles above? The Aurora Design System can still improve your work! We are always looking for contributors to make the Aurora Design System better for content creators.
              </p>
              <div>
                <Button>Learn more</Button>
              </div>
            </Jumbotron>
          </Container>
        )
      }
    </I18n>
  </Layout>
);



export default IndexPage;

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
