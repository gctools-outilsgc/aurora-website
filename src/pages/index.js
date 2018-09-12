import React from 'react';
import githubLogo from '../img/github.png';
import downloadIcon from '../img/download.png';
import headerImg from '../img/aurora-banner-large.png';
import { StaticQuery, graphql, push, replace } from 'gatsby';
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron
} from 'reactstrap';
import Layout from '../components/layout';
import Img from "gatsby-image"
import { translate } from "react-i18next";
const IndexPage = ({ data, t, i18n }) => (

  <Layout>
    <main id="main-content" role="main">
      <div className="hero-holder">
      <Container>
        <h1 className="display-5">Aurora Design System</h1>
        <p className="lead">
          {t("TopIntro")}
        </p>
        <div>
          <a href="/component" className="mb-1 btn btn-primary btn-lg">{t("MainCTA")}</a>
          <div className="mb-3 mt-3">
            <a className="ext-link-text" href="https://github.com/gctools-outilsgc/design-system"><img alt="" className="mr-1" src={githubLogo} style={{ width: '32px', height: '32px', display: 'inline-block', 'margin-top':'-5px' }} />{t("GithubLink")}</a>
            <a className="ml-3 ext-link-text" href="https://github.com/gctools-outilsgc/design-system/blob/master/master_ui_kit.ai"><img alt="" className="mr-1" src={downloadIcon} style={{ width: '32px', height: '32px', display: 'inline-block', 'margin-top':'-5px' }} />{t("DownloadLink")}</a>
          </div>
        </div>
        </Container>
      </div>
    <Container className="home-body">

      <h2>{t("IAM")}</h2>

      <Row className="pb-2">
        <Col xs="6" sm="6" md="3" className="text-center">
          <Img fluid={data.eye.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Designers")}</h3>
          <a href="/component" className="mb-2 btn btn-outline-primary btn-block">{t("DesignerCTA")}</a>
        </Col>
        <Col xs="6" sm="6" md="3" className="text-center">
          <Img fluid={data.gears.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Developers")}</h3>
          <a href="/component" className="mb-2 btn btn-outline-primary btn-block">{t("DeveloperCTA")}</a>
        </Col>
        <Col xs="6" sm="6" md="3" className="text-center">
          <Img fluid={data.pen.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Writers")}</h3>
          <a href="/content/content-guidelines" className="mb-2 btn btn-outline-primary btn-block">{t("WriterCTA")}</a>
        </Col>
        <Col xs="6" sm="6" md="3" className="text-center">
          <Img fluid={data.pie.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("DataScientists")}</h3>
          <a href="/data/data-overview" className="mb-2 btn btn-outline-primary btn-block">{t("DataScientistCTA")}</a>
        </Col>
      </Row>

      <h2 className="mt-4 mb-5" style={{textAlign: 'center'}}>{t("AboutAurora")}</h2>

      <Row className="mb-3">
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("SimpleFlexible")}</h3>
          <p>{t("SimpleFlexibleParagraph")}</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("FunToUse")}</h3>
          <p>{t("FunToUseParagraph")}</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("Reusable")}</h3>
          <p>{t("ReusableParagraph")}</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("Diverse")}</h3>
          <p>{t("DiverseParagraph")}</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("TechnologyAgnostic")}</h3>
          <p>{t("TechnologyAgnosticParagraph")}</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <h3 className="text-primary mb-3">{t("Open")}</h3>
          <p>{t("OpenParagraph")}</p>
        </Col>
      </Row>
      </Container>
      <div className="footer-holder">
      <Container>
        <div style={{maxWidth:'50%', float: 'right'}}>
          <p className="lead" style={{ display: 'inline-block', paddingBottom: '10px', textAlign: 'left' }}>
            {t("BottomText")}
          </p>
          <div>
            <a href="/overview/introduction" className="btn btn-primary">{t("LearnMore")}</a>
          </div>
        </div>

      </Container>

      </div>
    </main>
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
