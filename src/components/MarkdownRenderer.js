import React from 'react';
import rehypeReact from 'rehype-react';
import PropTypes from 'prop-types';
import ToggleCodeBlock from '../components/ToggleCodeBlock';
import CodeBlock from '../components/CodeBlock';
import ButtonDropdownWrapper from '../components/ButtonDropdownWrapper';
import ButtonDropdownWrapperOpen from '../components/ButtonDropdownWrapperOpen';
import StrippedTable from '../components/StrippedTable';
import * as reactstrap from 'reactstrap';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

class MarkdownRenderer extends React.Component {
  render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        strippedtable: StrippedTable, buttondropdownopen: ButtonDropdownWrapperOpen, helmet: Helmet, togglecodeblock: ToggleCodeBlock, codeblock: CodeBlock, mdbuttondropdown: ButtonDropdownWrapper, alert: reactstrap.Alert, badge: reactstrap.Badge, breadcrumb: reactstrap.Breadcrumb, breadcrumbitem: reactstrap.BreadcrumbItem, button: reactstrap.Button, buttondropdown: reactstrap.ButtonDropdown, buttongroup: reactstrap.ButtonGroup, buttontoolbar: reactstrap.ButtonToolbar, card: reactstrap.Card, cardblock: reactstrap.CardBlock, cardbody: reactstrap.CardBody, cardcolumns: reactstrap.CardColumns, carddeck: reactstrap.CardDeck, cardfooter: reactstrap.CardFooter, cardgroup: reactstrap.CardGroup, cardheader: reactstrap.CardHeader, cardimg: reactstrap.CardImg, cardimgoverlay: reactstrap.CardImgOverlay, cardlink: reactstrap.CardLink, cardsubtitle: reactstrap.CardSubtitle, cardtext: reactstrap.CardText, cardtitle: reactstrap.CardTitle, carousel: reactstrap.Carousel, carouselcaption: reactstrap.CarouselCaption, carouselcontrol: reactstrap.CarouselControl, carouselindicators: reactstrap.CarouselIndicators, carouselitem: reactstrap.CarouselItem, mdcol: reactstrap.Col, collapse: reactstrap.Collapse, container: reactstrap.Container, custominput: reactstrap.CustomInput, dropdown: reactstrap.Dropdown, dropdownitem: reactstrap.DropdownItem, dropdownmenu: reactstrap.DropdownMenu, dropdowntoggle: reactstrap.DropdownToggle, fade: reactstrap.Fade, form: reactstrap.Form, formfeedback: reactstrap.FormFeedback, formgroup: reactstrap.FormGroup, formtext: reactstrap.FormText, input: reactstrap.Input, inputgroup: reactstrap.InputGroup, inputgroupaddon: reactstrap.InputGroupAddon, inputgroupbutton: reactstrap.InputGroupButton, inputgroupbuttondropdown: reactstrap.InputGroupButtonDropdown, inputgrouptext: reactstrap.InputGroupText, jumbotron: reactstrap.Jumbotron, label: reactstrap.Label, listgroup: reactstrap.ListGroup, listgroupitem: reactstrap.ListGroupItem, listgroupitemheading: reactstrap.ListGroupItemHeading, listgroupitemtext: reactstrap.ListGroupItemText, media: reactstrap.Media, modal: reactstrap.Modal, modalbody: reactstrap.ModalBody, modalfooter: reactstrap.ModalFooter, modalheader: reactstrap.ModalHeader, nav: reactstrap.Nav, navbar: reactstrap.Navbar, navbarbrand: reactstrap.NavbarBrand, navbartoggler: reactstrap.NavbarToggler, navdropdown: reactstrap.NavDropdown, navitem: reactstrap.NavItem, navlink: reactstrap.NavLink, pagination: reactstrap.Pagination, paginationitem: reactstrap.PaginationItem, paginationlink: reactstrap.PaginationLink, popover: reactstrap.Popover, popoverbody: reactstrap.PopoverBody, popovercontent: reactstrap.PopoverContent, popoverheader: reactstrap.PopoverHeader, popovertitle: reactstrap.PopoverTitle, poppercontent: reactstrap.PopperContent, poppertargethelper: reactstrap.PopperTargetHelper, progress: reactstrap.Progress, row: reactstrap.Row, tabcontent: reactstrap.TabContent, table: reactstrap.Table, tabpane: reactstrap.TabPane, tooltip: reactstrap.Tooltip, uncontrolledalert: reactstrap.UncontrolledAlert, uncontrolledbuttondropdown: reactstrap.UncontrolledButtonDropdown, uncontrolledcarousel: reactstrap.UncontrolledCarousel, uncontrolledcollapse: reactstrap.UncontrolledCollapse, uncontrolleddropdown: reactstrap.UncontrolledDropdown, uncontrollednavdropdown: reactstrap.UncontrolledNavDropdown, uncontrolledtooltip: reactstrap.UncontrolledTooltip
      }
    }).Compiler;
    if (this.props.lang === "en") {
      return(
        <reactstrap.Container className="mt-4 pb-4 doc-container">
          <main id="main-content" role="main">
            {renderAst(this.props.eng.htmlAst)}
          </main>
          <Footer/>
        </reactstrap.Container>
      );
    } else {
      return(
        <reactstrap.Container className="mt-4 pb-4 doc-container">
          <main id="main-content" role="main">
            {renderAst(this.props.fr.htmlAst)}
          </main>
          <Footer/>
        </reactstrap.Container>
      );
    }

  }
}

MarkdownRenderer.propTypes = {
  eng: PropTypes.any,
  fr: PropTypes.any,
  lang: PropTypes.string
};

export default MarkdownRenderer;
