import React from 'react';
import rehypeReact from 'rehype-react';
import PropTypes from 'prop-types';
import ToggleCodeBlock from '../components/ToggleCodeBlock';
import CodeBlock from '../components/CodeBlock';
import ButtonDropdownWrapper from '../components/ButtonDropdownWrapper';
import ButtonDropdownWrapperOpen from '../components/ButtonDropdownWrapperOpen';
import ComponentNav from '../components/ComponentNav';
import StrippedTable from '../components/StrippedTable';
import * as reactstrap from 'reactstrap';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import * as ReactExamples from '../code-examples/react-examples';
import * as HtmlExamples from '../code-examples/html-examples';

class MarkdownRenderer extends React.Component {
  render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      // html code examples top line, react components second line, components 3rd line
      components: {
        // HTML COMPONENT EXAMPLES
        htmlalert1: HtmlExamples.AlertExample1, 
        htmlalert2: HtmlExamples.AlertExample2, 
        htmlalert3: HtmlExamples.AlertExample3, 
        htmlbadge1: HtmlExamples.BadgeExample1, 
        htmlbadge2: HtmlExamples.BadgeExample2, 
        htmlbadge3: HtmlExamples.BadgeExample3,
        // REACT COMPONENT EXAMPLES
        reactalert1: ReactExamples.AlertExample1, 
        reactalert2: ReactExamples.AlertExample2, 
        reactalert3: ReactExamples.AlertExample3, 
        reactfade1: ReactExamples.FadeExample1, 
        reactjumbotron: ReactExamples.JumbotronExample, 
        reacttabs: ReactExamples.TabsExample, 
        reactmedia: ReactExamples.MediaExample, 
        // reactnavbar: ReactExamples.NavBarExample,
        reactbadge1: ReactExamples.BadgeExample1, 
        reactbadge2: ReactExamples.BadgeExample2, 
        reactbadge3: ReactExamples.BadgeExample3, 
        reactbreadcrumb1: ReactExamples.BreadcrumbExample1,
        reactcard1: ReactExamples.CardExample1,
        reactcard2: ReactExamples.CardExample2,
        reactcard3: ReactExamples.CardExample3,
        reactcard4: ReactExamples.CardExample4,
        reactform1: ReactExamples.FormExample1,
        reacttable1: ReactExamples.TableExample1,
        reacttable2: ReactExamples.TableExample2,
        reacttable3: ReactExamples.TableExample3,
        reacttable4: ReactExamples.TableExample4,
        reacttable5: ReactExamples.TableExample5,
        reacttable6: ReactExamples.TableExample6,
        reacttable7: ReactExamples.TableExample7,
        reacttable8: ReactExamples.TableExample8,
        reactlayout1: ReactExamples.LayoutExample1,
        reactmodal1: ReactExamples.Modal1,
        reactmodal2: ReactExamples.Modal2,
        reactpagination1: ReactExamples.Pagination1,
        reactpagination2: ReactExamples.Pagination2,
        reactpagination3: ReactExamples.Pagination3,
        reactpagination4: ReactExamples.Pagination4,
        reactdropdown1: ReactExamples.Dropdown1,
        reactdropdown2: ReactExamples.Dropdown2,
        reactdropdown3: ReactExamples.Dropdown3,
        reactprogess1: ReactExamples.Progress1,
        reactprogess2: ReactExamples.Progress2, 
        reactprogess3: ReactExamples.Progress3, 
        reactprogess4: ReactExamples.Progress4,
        reactprogess5: ReactExamples.Progress5,
        reactbuttonexample1: ReactExamples.ButtonExample1, buttonexample1properties :ReactExamples.ButtonExample1Properties,
        reactbuttonexample2: ReactExamples.ButtonExample2, reactbuttonexample3: ReactExamples.ButtonExample3,
        reactbuttonexample4: ReactExamples.ButtonExample4, reactbuttonexample5: ReactExamples.ButtonExample5,
        reactbuttonexample6: ReactExamples.ButtonExample6, reactbuttonexample7: ReactExamples.ButtonExample7,
        reactbuttonexample8: ReactExamples.ButtonExample8, reactbuttonexample9: ReactExamples.ButtonExample9,
        reactbuttongroupexample1: ReactExamples.ButtonGroupExample1, reactbuttongroupexample1properties: ReactExamples.ButtonGroupExample1Properties,
        reactbuttongroupexample2: ReactExamples.ButtonGroupExample2, reactbuttongroupexample3: ReactExamples.ButtonGroupExample3,
        reactbuttongroupexample4: ReactExamples.ButtonGroupExample4, reactbuttongroupexample5: ReactExamples.ButtonGroupExample5,
        reactbuttondropdownexample1: ReactExamples.ButtonDropDownExample1, reactbuttondropdownexample1properties : ReactExamples.ButtonDropDownExample1Properties,
        reactbuttondropdownexample2 : ReactExamples.ButtonDropDownExample2, reactbuttondropdownexample3: ReactExamples.ButtonDropDownExample3,
        reactbuttondropdownexample4 : ReactExamples.ButtonDropDownExample4, reactbuttondropdownexample5: ReactExamples.ButtonDropDownExample5,
        reactbuttondropdownexample6 : ReactExamples.ButtonDropDownExample6,
        reacttooltipexample1: ReactExamples.TooltipExample1, reacttooltipexample2: ReactExamples.TooltipExample2, reacttooltipexample3: ReactExamples.TooltipExample3,
        reacttooltipexample4: ReactExamples.TooltipExample4, reacttooltipexample5: ReactExamples.TooltipExample5,
        reactpopoversexample1: ReactExamples.PopoversExample1, reactpopoversexample2: ReactExamples.PopoversExample2, reactpopoversexample3: ReactExamples.PopoversExample3,
        reactcarousel1: ReactExamples.CarouselExample1, 
        reactcollapse1: ReactExamples.CollapseExample1,
        // reactjumbotron1: ReactExamples.JumbotronExample1,
        // reactjumbotron2: ReactExamples.JumbotronExample2,
        reactinputgroup1: ReactExamples.InputGroupExample1,
        reactinputgroup2: ReactExamples.InputGroupExample2,
        reactinputgroup3: ReactExamples.InputGroupExample3,
        reactlistgroup1: ReactExamples.ListGroupExample1,
        reactlistgroup2: ReactExamples.ListGroupExample2,
        reactlistgroup3: ReactExamples.ListGroupExample3,
        reactnav1: ReactExamples.NavExample1,
        reactnav2: ReactExamples.NavExample2,
        reactnav3: ReactExamples.NavExample3,
        reactnavbar1: ReactExamples.NavBarExample1,
        // reactmodal1: ReactExamples.ModalExample1,
        // OTHER
        componentnav: ComponentNav, strippedtable: StrippedTable, buttondropdownopen: ButtonDropdownWrapperOpen, helmet: Helmet, togglecodeblock: ToggleCodeBlock, codeblock: CodeBlock, mdbuttondropdown: ButtonDropdownWrapper, alert: reactstrap.Alert, badge: reactstrap.Badge, breadcrumb: reactstrap.Breadcrumb, breadcrumbitem: reactstrap.BreadcrumbItem, button: reactstrap.Button, buttondropdown: reactstrap.ButtonDropdown, buttongroup: reactstrap.ButtonGroup, buttontoolbar: reactstrap.ButtonToolbar, card: reactstrap.Card, cardblock: reactstrap.CardBlock, cardbody: reactstrap.CardBody, cardcolumns: reactstrap.CardColumns, carddeck: reactstrap.CardDeck, cardfooter: reactstrap.CardFooter, cardgroup: reactstrap.CardGroup, cardheader: reactstrap.CardHeader, cardimg: reactstrap.CardImg, cardimgoverlay: reactstrap.CardImgOverlay, cardlink: reactstrap.CardLink, cardsubtitle: reactstrap.CardSubtitle, cardtext: reactstrap.CardText, cardtitle: reactstrap.CardTitle, carousel: reactstrap.Carousel, carouselcaption: reactstrap.CarouselCaption, carouselcontrol: reactstrap.CarouselControl, carouselindicators: reactstrap.CarouselIndicators, carouselitem: reactstrap.CarouselItem, mdcol: reactstrap.Col, collapse: reactstrap.Collapse, container: reactstrap.Container, custominput: reactstrap.CustomInput, dropdown: reactstrap.Dropdown, dropdownitem: reactstrap.DropdownItem, dropdownmenu: reactstrap.DropdownMenu, dropdowntoggle: reactstrap.DropdownToggle, fade: reactstrap.Fade, form: reactstrap.Form, formfeedback: reactstrap.FormFeedback, formgroup: reactstrap.FormGroup, formtext: reactstrap.FormText, input: reactstrap.Input, inputgroup: reactstrap.InputGroup, inputgroupaddon: reactstrap.InputGroupAddon, inputgroupbutton: reactstrap.InputGroupButton, inputgroupbuttondropdown: reactstrap.InputGroupButtonDropdown, inputgrouptext: reactstrap.InputGroupText, jumbotron: reactstrap.Jumbotron, label: reactstrap.Label, listgroup: reactstrap.ListGroup, listgroupitem: reactstrap.ListGroupItem, listgroupitemheading: reactstrap.ListGroupItemHeading, listgroupitemtext: reactstrap.ListGroupItemText, media: reactstrap.Media, modal: reactstrap.Modal, modalbody: reactstrap.ModalBody, modalfooter: reactstrap.ModalFooter, modalheader: reactstrap.ModalHeader, nav: reactstrap.Nav, navbar: reactstrap.Navbar, navbarbrand: reactstrap.NavbarBrand, navbartoggler: reactstrap.NavbarToggler, navdropdown: reactstrap.NavDropdown, navitem: reactstrap.NavItem, navlink: reactstrap.NavLink, pagination: reactstrap.Pagination, paginationitem: reactstrap.PaginationItem, paginationlink: reactstrap.PaginationLink, popover: reactstrap.Popover, popoverbody: reactstrap.PopoverBody, popovercontent: reactstrap.PopoverContent, popoverheader: reactstrap.PopoverHeader, popovertitle: reactstrap.PopoverTitle, poppercontent: reactstrap.PopperContent, poppertargethelper: reactstrap.PopperTargetHelper, progress: reactstrap.Progress, row: reactstrap.Row, tabcontent: reactstrap.TabContent, table: reactstrap.Table, tabpane: reactstrap.TabPane, tooltip: reactstrap.Tooltip, uncontrolledalert: reactstrap.UncontrolledAlert, uncontrolledbuttondropdown: reactstrap.UncontrolledButtonDropdown, uncontrolledcarousel: reactstrap.UncontrolledCarousel, uncontrolledcollapse: reactstrap.UncontrolledCollapse, uncontrolleddropdown: reactstrap.UncontrolledDropdown, uncontrollednavdropdown: reactstrap.UncontrolledNavDropdown, uncontrolledtooltip: reactstrap.UncontrolledTooltip
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
