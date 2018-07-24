import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import MapsLocalConvenienceStore from 'material-ui/SvgIcon';


const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default LocalizedComponent(SecondPage);
