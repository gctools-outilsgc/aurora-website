import React from 'react';
import rehypeReact from 'rehype-react';
import * as reactstrap from 'reactstrap';
import { graphql } from 'gatsby';
import { Row, Col, Container, UncontrolledCollapse, Button } from 'reactstrap';
import { translate } from 'react-i18next';

import Sidenav from '../components/sidenav';
import Search from '../components/search';
import Layout from '../components/layout';
import ToggleCodeBlock from '../components/ToggleCodeBlock';
import CodeBlock from '../components/CodeBlock';
import PaginationLinkPrev from '../components/PaginationLinkPrev';
/* Import wrappers for embedding state-dependent components in markdown */
import ButtonDropdownWrapper from '../components/ButtonDropdownWrapper';
import ButtonDropdownWrapperOpen from '../components/ButtonDropdownWrapperOpen';
import StrippedTable from '../components/StrippedTable';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
  i18n }) => {
  const { eng, fr } = data;
  const { frontmatter: { path } } = eng;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      strippedtable: StrippedTable, buttondropdownopen: ButtonDropdownWrapperOpen, helmet: Helmet, paginationlinkprev: PaginationLinkPrev, togglecodeblock: ToggleCodeBlock, codeblock: CodeBlock, mdbuttondropdown: ButtonDropdownWrapper, alert: reactstrap.Alert, badge: reactstrap.Badge, breadcrumb: reactstrap.Breadcrumb, breadcrumbitem: reactstrap.BreadcrumbItem, button: reactstrap.Button, buttondropdown: reactstrap.ButtonDropdown, buttongroup: reactstrap.ButtonGroup, buttontoolbar: reactstrap.ButtonToolbar, card: reactstrap.Card, cardblock: reactstrap.CardBlock, cardbody: reactstrap.CardBody, cardcolumns: reactstrap.CardColumns, carddeck: reactstrap.CardDeck, cardfooter: reactstrap.CardFooter, cardgroup: reactstrap.CardGroup, cardheader: reactstrap.CardHeader, cardimg: reactstrap.CardImg, cardimgoverlay: reactstrap.CardImgOverlay, cardlink: reactstrap.CardLink, cardsubtitle: reactstrap.CardSubtitle, cardtext: reactstrap.CardText, cardtitle: reactstrap.CardTitle, carousel: reactstrap.Carousel, carouselcaption: reactstrap.CarouselCaption, carouselcontrol: reactstrap.CarouselControl, carouselindicators: reactstrap.CarouselIndicators, carouselitem: reactstrap.CarouselItem, mdcol: reactstrap.Col, collapse: reactstrap.Collapse, container: reactstrap.Container, custominput: reactstrap.CustomInput, dropdown: reactstrap.Dropdown, dropdownitem: reactstrap.DropdownItem, dropdownmenu: reactstrap.DropdownMenu, dropdowntoggle: reactstrap.DropdownToggle, fade: reactstrap.Fade, form: reactstrap.Form, formfeedback: reactstrap.FormFeedback, formgroup: reactstrap.FormGroup, formtext: reactstrap.FormText, input: reactstrap.Input, inputgroup: reactstrap.InputGroup, inputgroupaddon: reactstrap.InputGroupAddon, inputgroupbutton: reactstrap.InputGroupButton, inputgroupbuttondropdown: reactstrap.InputGroupButtonDropdown, inputgrouptext: reactstrap.InputGroupText, jumbotron: reactstrap.Jumbotron, label: reactstrap.Label, listgroup: reactstrap.ListGroup, listgroupitem: reactstrap.ListGroupItem, listgroupitemheading: reactstrap.ListGroupItemHeading, listgroupitemtext: reactstrap.ListGroupItemText, media: reactstrap.Media, modal: reactstrap.Modal, modalbody: reactstrap.ModalBody, modalfooter: reactstrap.ModalFooter, modalheader: reactstrap.ModalHeader, nav: reactstrap.Nav, navbar: reactstrap.Navbar, navbarbrand: reactstrap.NavbarBrand, navbartoggler: reactstrap.NavbarToggler, navdropdown: reactstrap.NavDropdown, navitem: reactstrap.NavItem, navlink: reactstrap.NavLink, pagination: reactstrap.Pagination, paginationitem: reactstrap.PaginationItem, paginationlink: reactstrap.PaginationLink, popover: reactstrap.Popover, popoverbody: reactstrap.PopoverBody, popovercontent: reactstrap.PopoverContent, popoverheader: reactstrap.PopoverHeader, popovertitle: reactstrap.PopoverTitle, poppercontent: reactstrap.PopperContent, poppertargethelper: reactstrap.PopperTargetHelper, progress: reactstrap.Progress, row: reactstrap.Row, tabcontent: reactstrap.TabContent, table: reactstrap.Table, tabpane: reactstrap.TabPane, tooltip: reactstrap.Tooltip, uncontrolledalert: reactstrap.UncontrolledAlert, uncontrolledbuttondropdown: reactstrap.UncontrolledButtonDropdown, uncontrolledcarousel: reactstrap.UncontrolledCarousel, uncontrolledcollapse: reactstrap.UncontrolledCollapse, uncontrolleddropdown: reactstrap.UncontrolledDropdown, uncontrollednavdropdown: reactstrap.UncontrolledNavDropdown, uncontrolledtooltip: reactstrap.UncontrolledTooltip,
    },
  }).Compiler;
  return (
    <Layout>
          <div id="mobile-menu-holder" className="d-sm-block d-md-none d-lg-none d-xl-none bg-primary" style={{padding: '6px', position: 'fixed', zIndex: '9999', top: '100px', width: '100%'}}>
            <Button color="primary" id="mobile-menu" className="mr-3 sidenavToggle"><FontAwesomeIcon size="2x" icon={faBars} /><span className="sr-only">Menu</span></Button>
            <Search
              lng={(i18n.language === "en") ? "en" : "fr"}
              placeholder={(i18n.language === "en") ? "Search" : "Chercher"}
            />
          </div>
          <UncontrolledCollapse toggler=".sidenavToggle">
            <div className="mobile-sidebar">
              <Sidenav path={path} />
            </div>
            <div className="ui-mask sidenavToggle"></div>
          </UncontrolledCollapse>
          <div className="d-none d-md-block">
            <Sidenav path={path} />
          </div>
          <Container className="mt-4 mb-4 doc-container">
            <main id="main-content" role="main">
            {(i18n.language === "en" || fr === null) ?
              <div className="col-sm">{renderAst(eng.htmlAst)}</div> :
              <div className="col-sm">{renderAst(fr.htmlAst)}</div>
            }
            </main>
          </Container>
    </Layout>
  );
}

export default translate("default")(Template);
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    eng:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "en"} }) {
      html
      htmlAst
      frontmatter {
        path
        lang
      }
    }
    fr:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "fr"} }) {
      html
      htmlAst
      frontmatter {
        path
        lang
      }
    }
  }
`;
