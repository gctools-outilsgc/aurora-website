import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import LanguageSwitch from '../components/languageSwitch';
import PageHeader from '../components/pageHeader';
import '../components/i18n';
const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <PageHeader />
    <LanguageSwitch />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
