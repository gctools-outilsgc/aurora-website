import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import Subnav from './subnav';

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.subSecDivider = this.subSecDivider.bind(this);
  }

  subSecDivider(data) {

    let subSecEng = [];
    let subSecFr = [];
    let subName = "";
    let subGroup = [];
    data[this.props.path.split("/")[1]].edges.forEach((edges) => {
      if ((localizer.lang === "en_CA") && (edges.node.frontmatter.lang === "en"))
        subSecEng.push(
          <NavItem>
            <Link to={edges.node.frontmatter.path} class="nav-link">
              {edges.node.frontmatter.title}
            </Link>
          </NavItem>);
      else
        if ((localizer.lang === "fr_CA") && (edges.node.frontmatter.lang === "fr"))
          subSecFr.push({
            path: edges.node.frontmatter.path,
            title: edges.node.frontmatter.title,
          });
    });
    return (localizer.lang === "en_CA") ?
      <Subnav files={subSecEng} name="SubSection" />
      : subSecFr.map((entry) =>
        <NavItem>
          <Link to={entry.path} class="nav-link">
            {entry.title}
          </Link>
        </NavItem>
      )
      ;
  }

  render() {

    return (

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
                  }
                }
            }
          }
        }
    `}
        render={data => (
          <div className="col-1">
            <Nav vertical pills justify>
              {
                data[this.props.path.split("/")[1]].edges.map((edges) => {
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
            {this.subSecDivider(data)}
          </div>
        )}
      />
    )
  }
}
;



export default LocalizedComponent(Sidenav);

