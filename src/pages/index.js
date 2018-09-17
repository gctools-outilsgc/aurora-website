import React from 'react';
import Layout from '../layouts/layout';
import Eye from "../img/eye.png";
import Gears from '../img/gears.png';
import Pen from '../img/pen.png';
import Pie from '../img/pie_chart.png';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { I18n } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class IndexPage extends React.Component {
  render() {
    return(
      <Layout>
        <div>
        <I18n ns={["translation"]}>
          {
            (t) => (<Helmet><title>{t("AuroraDesignSystem")}</title></Helmet>)
          }
        </I18n>
        <I18n ns={["translation"]}>
          {
            (t) => (<h1 className="sr-only">{t("AuroraDesignSystem")}</h1>)
          }
        </I18n>
        <I18n ns={["translation"]}>
        {
          (t) => (
            <main id="main-content" role="main">
              <div className="hero-holder">
              <Container>
                <h1 className="display-5">{t("Tagline")}</h1>
                <p className="lead">
                  {t("TopIntro")}
                </p>
                <div>
                  <Link to="/component" className="mb-1 btn btn-primary btn-lg">{t("MainCTA")}</Link>
                  <div className="mb-3 mt-2">
                    <a className="ext-link-text mr-3 mt-2" href="https://github.com/gctools-outilsgc/design-system"><FontAwesomeIcon className="mr-2" style={{"fontSize":"1.5em", "color":"black"}} icon={faGithub} />{t("GithubLink")}</a>
                    <a className="ext-link-text mt-2" href="https://github.com/gctools-outilsgc/design-system/blob/master/master_ui_kit.ai"><FontAwesomeIcon className="mr-2" style={{"fontSize":"1.5em", "color":"black"}} icon={faDownload} />{t("DownloadLink")}</a>
                  </div>
                </div>
                </Container>
              </div>
              <Container className="home-body">

                <h2>{t("IAM")}</h2>

                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6" lg="3" className="text-center">
                    <img className="img-fluid" src={Eye} alt="" />
                    <h3 className="mb-3 mt-3 h4">{t("Designers")}</h3>
                    <Link to="/component" style={{"whiteSpace":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DesignerCTA")}</Link>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="3" className="text-center">
                    <img className="img-fluid" src={Gears} alt="" />
                    <h3 className="mb-3 mt-3 h4">{t("Developers")}</h3>
                    <Link to="/component" style={{"whiteSpace":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DeveloperCTA")}</Link>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="3" className="text-center">
                    <img className="img-fluid" src={Pen} alt="" />
                    <h3 className="mb-3 mt-3 h4">{t("Writers")}</h3>
                    <Link to="/content/content-guidelines" style={{"whiteSpace":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("WriterCTA")}</Link>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="3" className="text-center">
                    <img className="img-fluid" src={Pie} alt="" />
                    <h3 className="mb-3 mt-3 h4">{t("DataScientists")}</h3>
                    <Link to="/data/data-overview" style={{"whiteSpace":"normal"}} className="mb-2 btn btn-outline-primary btn-block">{t("DataScientistCTA")}</Link>
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
                      </p>
                      <Link to="/overview/introduction" className="btn btn-primary mt-3">{t("LearnMore")}</Link>
                    </div>
                  </Container>
                </div>
            </main>
          )
        }
        </I18n>
      </div>
      </Layout>
    );
  }
}



export default IndexPage;