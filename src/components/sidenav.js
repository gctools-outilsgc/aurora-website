import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import {
  Nav,
  NavItem
} from 'reactstrap';


const Sidenav = (props) => (
  <StaticQuery query={graphql`
  query{
    component:allMarkdownRemark(filter: {frontmatter: {path: {regex: "/component/"}}}) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
            }
          }
      }
    }
    overview:allMarkdownRemark(filter: {frontmatter: {path: {regex: "/overview/"}}}) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
            }
          }
      }
    }
    content:allMarkdownRemark(filter: {frontmatter: {path: {regex: "/content/"}}}) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
            }
          }
      }
    }
    identity:allMarkdownRemark(filter: {frontmatter: {path: {regex: "/identity/"}}}) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
            }
          }
      }
    }
    data:allMarkdownRemark(filter: {frontmatter: {path: {regex: "/data/"}}}) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
            }
          }
      }
    }
  }
    `}
    render={data => (
      <div className="col-sm-auto">
        <Nav vertical navbar justify>
          {
           
            data[props.path.split("/")[1]].edges.map((edges) => {
              if ((localizer.lang === "en_CA") && (edges.node.frontmatter.lang === "en"))
                return (
                  <NavItem>
                    <Link to={edges.node.frontmatter.path} class="nav-link">
                      {edges.node.frontmatter.title}
                    </Link>

                  </NavItem>
                );
              else
                if((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
                return (
                  <NavItem>
                    <Link to={edges.node.frontmatter.path} class="nav-link">
                      {edges.node.frontmatter.title}
                    </Link>

                  </NavItem>)
            }
            )
          }
        </Nav>
      </div>
    )}
  />
);

/* Sidenav.propTypes = {
  data: PropTypes.string,
};

Sidenav.defaultProps = {
  data: 'Data',
}; */

export default LocalizedComponent(Sidenav);

