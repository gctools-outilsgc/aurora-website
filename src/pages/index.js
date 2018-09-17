import React from 'react';
import githubLogo from '../img/github.png';
import downloadIcon from '../img/download.png';
import headerImg from '../img/aurora-banner-large.png';
import { StaticQuery, graphql, push, replace, Link } from 'gatsby';
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron
} from 'reactstrap';
import Layout from '../components/layout';
import Img from "gatsby-image";
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { translate } from "react-i18next";
const IndexPage = ({ data, t, i18n }) => (

  <Layout>
    <Helmet>
      <title>{t("AuroraDesignSystem")}</title>
    </Helmet>
    <h1 className="sr-only">{t("AuroraDesignSystem")}</h1>
    <main id="main-content" role="main">
      <div className="hero-holder">
      <Container>
        <h2 className="display-5">{t("Tagline")}</h2>
        <p className="lead">
          {t("TopIntro")}
        </p>
        <div>
          <Link to="/component" className="mb-1 btn btn-primary btn-lg">{t("MainCTA")}</Link>
          <div className="mb-3 mt-2">
            <a className="ext-link-text mr-3 mt-2" href="https://github.com/gctools-outilsgc/design-system"><FontAwesomeIcon className="mr-2" style={{"font-size":"1.5em", "color":"black"}} icon={faGithub} />{t("GithubLink")}</a>
            <a className="ext-link-text mt-2" href="https://github.com/gctools-outilsgc/design-system/blob/master/master_ui_kit.ai"><FontAwesomeIcon className="mr-2" style={{"font-size":"1.5em", "color":"black"}} icon={faDownload} />{t("DownloadLink")}</a>
          </div>
        </div>
        </Container>
      </div>
    <Container className="home-body">

      <h2>{t("IAM")}</h2>

      <Row className="pb-2">
        <Col xs="6" sm="6" md="6" lg="3" className="text-center">
          <Img fluid={data.eye.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Designers")}</h3>
          <Link to="/component" style={{"white-space":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DesignerCTA")}</Link>
        </Col>
        <Col xs="6" sm="6" md="6" lg="3" className="text-center">
          <Img fluid={data.gears.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Developers")}</h3>
          <Link to="/component" style={{"white-space":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DeveloperCTA")}</Link>
        </Col>
        <Col xs="6" sm="6" md="6" lg="3" className="text-center">
          <Img fluid={data.pen.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("Writers")}</h3>
          <Link to="/content/content-guidelines" style={{"white-space":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("WriterCTA")}</Link>
        </Col>
        <Col xs="6" sm="6" md="6" lg="3" className="text-center">
          <Img fluid={data.pie.childImageSharp.fluid}  />
          <h3 className="mb-3 mt-3 h4">{t("DataScientists")}</h3>
          <Link to="/data/data-overview" style={{"white-space":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DataScientistCTA")}</Link>
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
        <div>
          <p className="lead" style={{ display: 'inline-block', paddingBottom: '10px', textAlign: 'left' }}>
            {t("BottomText")}
            <div>
              <Link to="/overview/introduction" className="btn btn-primary mt-3">{t("LearnMore")}</Link>
            </div>
          </p>
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
  eye:file(relativePath: { regex: "/designer/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  gears:file(relativePath: { regex: "/developer/" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
      }
    }
  }
  pen:file(relativePath: { regex: "/writer/" }) {
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
  pie:file(relativePath: { regex: "/datasci/" }) {
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
