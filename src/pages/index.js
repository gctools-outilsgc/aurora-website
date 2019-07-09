import React from 'react';
import Layout from '../layouts/layout';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { I18n } from 'react-i18next';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <I18n ns={['translation']}>
            {
            t => (<Helmet><title>{t('Quantum')}</title></Helmet>)
          }
          </I18n>
          <I18n ns={['translation']}>
            {
          t => (
            <main id="main-content" role="main">
              <h1 className="sr-only">{t('QuantumDocumentation')}</h1>
              <div className="hero-holder">
                <Container>
                  <h2 className="display-5">{t('Tagline')}</h2>
                  <p className="lead">
                    {t('TopIntro')}
                  </p>
                  <div>
                    <Link to="/architecture/introduction" className="mb-1 btn btn-primary btn-lg">{t('MainCTA')}</Link>
                    <div className="mb-3 mt-2">
                      <a className="ext-link-text mr-3 mt-2" href="https://github.com/gctools-outilsgc/"><FontAwesomeIcon className="mr-2" style={{ fontSize: '1.5em', width: '1em', color: 'black' }} icon={faGithub} />{t('GithubLink')}</a>
                    </div>
                  </div>
                </Container>
              </div>
              <Container className="home-body">

                <h2 className="mt-5 mb-5" style={{ textAlign: 'center' }}>{t('AboutQuantum')}</h2>

                <Row className="mb-5">
                  <Col xs="12" sm="6" md="3">
                    <h3 className="mb-3" style={{ color: '#467B8D' }}>{t('SimpleFlexible')}</h3>
                    <p>{t('SimpleFlexibleParagraph')}</p>
                  </Col>
                  <Col xs="12" sm="6" md="3">
                    <h3 className="mb-3" style={{ color: '#467B8D' }}>{t('Reusable')}</h3>
                    <p>{t('ReusableParagraph')}</p>
                  </Col>
                  <Col xs="12" sm="6" md="3">
                    <h3 className="mb-3" style={{ color: '#467B8D' }}>{t('Diverse')}</h3>
                    <p>{t('DiverseParagraph')}</p>
                  </Col>
                  <Col xs="12" sm="6" md="3">
                    <h3 className="mb-3" style={{ color: '#467B8D' }}>{t('Open')}</h3>
                    <p>{t('OpenParagraph')}</p>
                  </Col>
                </Row>
              </Container>
              <div className="footer-holder">
                <Container />
              </div>
            </main>

          )
        }
          </I18n>
          <Footer />
        </div>
      </Layout>
    );
  }
}


export default IndexPage;
