import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import Subnav from './subnav';

const Sidenav = (props) => (

  <StaticQuery query={graphql`
        query{
          component:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/component/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                    subnav
                  }
                }
            }
          }
          overview:allMarkdownRemark(
            filter: 
              {frontmatter: {path: {regex: "/overview/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                    subnav
                  }
                }
            }
          }
          content:allMarkdownRemark(
            filter: 
            {frontmatter: {path: {regex: "/content/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ) {
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                    subnav
                  }
                }
            }
          }
          identity:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/identity/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ) {
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                    subnav
                  }
                }
            }
          }
          data:allMarkdownRemark(
            filter: {
              frontmatter: {path: {regex: "/data/"}}
            },
            sort:{
              fields:[frontmatter___num]
            }
          ){
            totalCount
              edges{
                node {
                  frontmatter {
                    title
                    path
                    lang
                    num
                    subnav
                  }
                }
            }
          }
        }
    `}
    render={(data) => {

      let subSecEng = [];
      let subSecFr = [];
      let subName = "";
      let subGroup = [];
      data[props.path.split("/")[1]].edges.forEach((edges) => {
        if ((localizer.lang === "en_CA") && (edges.node.frontmatter.lang === "en"))
          subSecEng.push(
            <NavItem>
              <Link to={edges.node.frontmatter.path} class="nav-link">
                {edges.node.frontmatter.title}
              </Link>
            </NavItem>);
        else
          if ((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
            subSecEng.push(
              <NavItem>
                <Link to={edges.node.frontmatter.path} class="nav-link">
                  {edges.node.frontmatter.title}
                </Link>
              </NavItem>);
      });

      return (
        <div className="col-1">
          <Nav vertical pills justify>
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
                  if ((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
                    return (
                      <NavItem>
                        <Link to={edges.node.frontmatter.path} class="nav-link">
                          {edges.node.frontmatter.title}
                        </Link>
                      </NavItem>);
              }
              )
            }
          </Nav>
          {(localizer.lang === "en_CA") ?
            <Subnav files={subSecEng} name="SubSection" />
            : <Subnav files={subSecFr} name="SubSection" />}
        </div>
      )
    }}
  />
);

export default LocalizedComponent(Sidenav);

