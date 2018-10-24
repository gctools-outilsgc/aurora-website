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
import BarGraph from '../components/BarGraph';
import BarGraphHorizontal from '../components/BarGraphHorizontal'
import LineGraph from  '../components/LineGraph'
import FilledLineGraph from '../components/FilledLineGraph'
import ScatterPlot from '../components/ScatterPlot'

class MarkdownRenderer extends React.Component {
  render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        // HTML COMPONENT EXAMPLES
        htmlalert1: HtmlExamples.AlertExample1, 
        htmlalert2: HtmlExamples.AlertExample2, 
        htmlalert3: HtmlExamples.AlertExample3, 
        htmlbadge1: HtmlExamples.BadgeExample1, 
        htmlbadge2: HtmlExamples.BadgeExample2, 
        htmlbadge3: HtmlExamples.BadgeExample3, 
        htmlbreadcrumb1: HtmlExamples.BreadcrumbExample1,
        htmlcard1: HtmlExamples.CardExample1,
        htmlcard2: HtmlExamples.CardExample2,
        htmlcard3: HtmlExamples.CardExample3,
        htmlcard4: HtmlExamples.CardExample4,
        htmlcarousel1: HtmlExamples.CarouselExample1,
        htmlcollapse1: HtmlExamples.CollapseExample1,
        htmljumbotron1: HtmlExamples.JumbotronExample1,
        htmljumbotron2: HtmlExamples.JumbotronExample2,
        htmlinputgroup1: HtmlExamples.InputGroupExample1,
        htmlinputgroup2: HtmlExamples.InputGroupExample2,
        htmlinputgroup3: HtmlExamples.InputGroupExample3,
        htmllistgroup1: HtmlExamples.ListGroupExample1,
        htmllistgroup2: HtmlExamples.ListGroupExample2,
        htmllistgroup3: HtmlExamples.ListGroupExample3,
        htmlnav1: HtmlExamples.NavExample1,
        htmlnav2: HtmlExamples.NavExample2,
        htmlnav3: HtmlExamples.NavExample3,
        htmlnavbar1: HtmlExamples.NavBarExample1,
        htmlmodal1: HtmlExamples.ModalExample1,
        // Addsion
        htmlform1: HtmlExamples.FormExample1,
        // Guillaume
        htmlbuttonexample1:  HtmlExamples.ButtonExample1,
        htmlbuttonexample2:  HtmlExamples.ButtonExample2,
        htmlbuttonexample3:  HtmlExamples.ButtonExample3,
        htmlbuttonexample4:  HtmlExamples.ButtonExample4, 
        htmlbuttonexample5:  HtmlExamples.ButtonExample5, 
        htmlbuttonexample6:  HtmlExamples.ButtonExample6,
        htmlbuttonexample7:  HtmlExamples.ButtonExample7, 
        htmlbuttonexample8:  HtmlExamples.ButtonExample8, 
        htmlbuttonexample9:  HtmlExamples.ButtonExample9,
        htmlbuttonexample10:  HtmlExamples.ButtonExample10, 
        htmlbuttonExample11:  HtmlExamples.ButtonExample11, 
        htmlbuttonexample12:  HtmlExamples.ButtonExample12,
        htmlbuttongroupexample1:  HtmlExamples.ButtonGroupExample1, 
        htmlbuttongroupexample2:  HtmlExamples.ButtonGroupExample2, 
        htmlbuttongroupexample3:  HtmlExamples.ButtonGroupExample3,
        htmlbuttongroupexample4:  HtmlExamples.ButtonGroupExample4, 
        htmlbuttongroupexample5:  HtmlExamples.ButtonGroupExample5, 
        htmlbuttongroupexample6:  HtmlExamples.ButtonGroupExample6,
        htmlbuttongroupexample7:  HtmlExamples.ButtonGroupExample7,
        htmlbuttondropdownexample1:  HtmlExamples.ButtonDropdownExample1, 
        htmlbuttondropdownexample2:  HtmlExamples.ButtonDropdownExample2,
        htmlbuttondropdownexample3:  HtmlExamples.ButtonDropdownExample3, 
        htmlbuttondropdownexample4:  HtmlExamples.ButtonDropdownExample4,
        htmlbuttondropdownexample5:  HtmlExamples.ButtonDropdownExample5, 
        htmlbuttondropdownexample6:  HtmlExamples.ButtonDropdownExample6,
        htmltootlipexample1:  HtmlExamples.TooltipExample1,
        htmltooltipexample2:  HtmlExamples.TooltipExample2, 
        htmltooltipexample3:  HtmlExamples.TooltipExample3,
        htmltooltipexample4:  HtmlExamples.TooltipExample4, 
        htmltooltipexample5:  HtmlExamples.TooltipExample5, 
        htmltooltipexample6:  HtmlExamples.TooltipExample6,
        htmltooltipexample7:  HtmlExamples.TooltipExample7, 
        htmltooltipexample8:  HtmlExamples.TooltipExample8, 
        htmltooltipexample9:  HtmlExamples.TooltipExample9,
        htmltooltipexample10:  HtmlExamples.TooltipExample10, 
        htmltooltipexample11:  HtmlExamples.TooltipExample11, 
        htmltooltipexample12:  HtmlExamples.TooltipExample12,
        htmltooltipexample13:  HtmlExamples.TooltipExample13, 
        htmltooltipexample14:  HtmlExamples.TooltipExample14, 
        htmltooltipexample15:  HtmlExamples.TooltipExample15,
        htmltooltipexample16:  HtmlExamples.TooltipExample16,
        htmltableexample1:  HtmlExamples.TableExample1, 
        htmltableexample2:  HtmlExamples.TableExample2, 
        htmltableexample3:  HtmlExamples.TableExample3,
        htmltableexample4:  HtmlExamples.TableExample4, 
        htmltableexample5:  HtmlExamples.TableExample5, 
        htmltableexample6:  HtmlExamples.TableExample6,
        htmltableexample7:  HtmlExamples.TableExample7, 
        htmltableexample8:  HtmlExamples.TableExample8, 
        htmltableexample9:  HtmlExamples.TableExample9,
        htmltableexample10:  HtmlExamples.TableExample10,
        htmltableexample11:  HtmlExamples.TableExample11, 
        htmltableexample12:  HtmlExamples.TableExample12,
        htmltableexample13:  HtmlExamples.TableExample13, 
        htmltableexample14:  HtmlExamples.TableExample14, 
        htmltableexample15:  HtmlExamples.TableExample15,
        htmltableexample16:  HtmlExamples.TableExample16, 
        htmltableexample17:  HtmlExamples.TableExample17, 
        htmltableexample18:  HtmlExamples.TableExample18,
        htmltableexample19:  HtmlExamples.TableExample19, 
        htmltableexample20:  HtmlExamples.TableExample20,
        htmlpopoversexample1:  HtmlExamples.PopoversExample1, 
        htmlpopoversexample2:  HtmlExamples.PopoversExample2, 
        htmlpopoversexample3:  HtmlExamples.PopoversExample3,
        htmlpopoversexample4:  HtmlExamples.PopoversExample4, 
        htmlpopoversexample5:  HtmlExamples.PopoversExample5, 
        htmlpopoversexample6:  HtmlExamples.PopoversExample6,
        htmlpopoversexample7:  HtmlExamples.PopoversExample7, 
        htmlpopoversexample8:  HtmlExamples.PopoversExample8, 
        htmlpopoversexample9:  HtmlExamples.PopoversExample9,
        htmlpopoversexample10:  HtmlExamples.PopoversExample10, 
        htmlpopoversexample11:  HtmlExamples.PopoversExample11, 
        htmlpopoversexample12:  HtmlExamples.PopoversExample12,
        htmlpopoversexample13:  HtmlExamples.PopoversExample13, 
        htmlpopoversexample14:  HtmlExamples.PopoversExample14, 
        htmlpopoversexample15:  HtmlExamples.PopoversExample15,
        htmlpopoversexample16:  HtmlExamples.PopoversExample16, 
        htmlpopoversexample17:  HtmlExamples.PopoversExample17,
        htmlmediaexample1:  HtmlExamples.MediaExample1, 
        htmlmediaexample2:  HtmlExamples.MediaExample2, 
        htmlmediaexample3:  HtmlExamples.MediaExample3,
        htmlmediaexample4:  HtmlExamples.MediaExample4, 
        htmlmediaexample5:  HtmlExamples.MediaExample5, 
        htmlmediaexample6:  HtmlExamples.MediaExample6,
        htmlmediaexample7:  HtmlExamples.MediaExample7,
        // Beatrice
        htmlpagination1: HtmlExamples.Pagination1,
        htmlpagination2: HtmlExamples.Pagination2,
        htmlpagination3: HtmlExamples.Pagination3,
        htmlpagination4: HtmlExamples.Pagination4,
        htmldropdown1: HtmlExamples.Dropdown1,
        htmldropdown2: HtmlExamples.Dropdown2,
        htmldropdown3: HtmlExamples.Dropdown3,
        htmlprogress1: HtmlExamples.Progress1,
        htmlprogress2: HtmlExamples.Progress2,
        htmlprogress3: HtmlExamples.Progress3, 
        htmlprogress4: HtmlExamples.Progress4, 
        htmlprogress5: HtmlExamples.Progress5,
        // REACT COMPONENT EXAMPLES
        reactalert1: ReactExamples.AlertExample1, 
        reactalert2: ReactExamples.AlertExample2, 
        reactalert3: ReactExamples.AlertExample3, 
        reactbadge1: ReactExamples.BadgeExample1, 
        reactbadge2: ReactExamples.BadgeExample2, 
        reactbadge3: ReactExamples.BadgeExample3, 
        reactbreadcrumb1: ReactExamples.BreadcrumbExample1,
        reactcarousel1: ReactExamples.CarouselExample1, 
        reactcollapse1: ReactExamples.CollapseExample1,
        reactjumbotron1: ReactExamples.JumbotronExample1,
        reactjumbotron2: ReactExamples.JumbotronExample2,
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
        reactmodal1: ReactExamples.ModalExample1,
        // Guillaume
        reactbuttonexample1: ReactExamples.ButtonExample1,
        buttonexample1properties :ReactExamples.ButtonExample1Properties,
        reactbuttonexample2: ReactExamples.ButtonExample2, 
        reactbuttonexample3: ReactExamples.ButtonExample3,
        reactbuttonexample4: ReactExamples.ButtonExample4, 
        reactbuttonexample5: ReactExamples.ButtonExample5,
        reactbuttonexample6: ReactExamples.ButtonExample6, 
        reactbuttonexample7: ReactExamples.ButtonExample7,
        reactbuttonexample8: ReactExamples.ButtonExample8, 
        reactbuttonexample9: ReactExamples.ButtonExample9,
        reactbuttongroupexample1: ReactExamples.ButtonGroupExample1, 
        reactbuttongroupexample1properties: ReactExamples.ButtonGroupExample1Properties,
        reactbuttongroupexample2: ReactExamples.ButtonGroupExample2, 
        reactbuttongroupexample3: ReactExamples.ButtonGroupExample3,
        reactbuttongroupexample4: ReactExamples.ButtonGroupExample4, 
        reactbuttongroupexample5: ReactExamples.ButtonGroupExample5,
        reactbuttondropdownexample1: ReactExamples.ButtonDropDownExample1, 
        reactbuttondropdownexample1properties : ReactExamples.ButtonDropDownExample1Properties,
        reactbuttondropdownexample2 : ReactExamples.ButtonDropDownExample2, 
        reactbuttondropdownexample3: ReactExamples.ButtonDropDownExample3,
        reactbuttondropdownexample4 : ReactExamples.ButtonDropDownExample4, 
        reactbuttondropdownexample5: ReactExamples.ButtonDropDownExample5,
        reactbuttondropdownexample6 : ReactExamples.ButtonDropDownExample6,
        reacttooltipexample1: ReactExamples.TooltipExample1, 
        reacttooltipexample2: ReactExamples.TooltipExample2, 
        reacttooltipexample3: ReactExamples.TooltipExample3,
        reacttooltipexample4: ReactExamples.TooltipExample4, 
        reacttooltipexample5: ReactExamples.TooltipExample5,
        reactpopoversexample1: ReactExamples.PopoversExample1, 
        reactpopoversexample2: ReactExamples.PopoversExample2, 
        reactpopoversexample3: ReactExamples.PopoversExample3,
        // Beatrice
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
        reactalert1: ReactExamples.AlertExample1, 
        reactalert2: ReactExamples.AlertExample2, 
        reactalert3: ReactExamples.AlertExample3, 
        reactbadge1: ReactExamples.BadgeExample1, 
        reactbadge2: ReactExamples.BadgeExample2, 
        reactbadge3: ReactExamples.BadgeExample3, 
        reactbreadcrumb1: ReactExamples.BreadcrumbExample1,
        // Addison
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
        // Omar
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
        // OTHER
        componentnav: ComponentNav, strippedtable: StrippedTable, buttondropdownopen: ButtonDropdownWrapperOpen, helmet: Helmet, togglecodeblock: ToggleCodeBlock, codeblock: CodeBlock, mdbuttondropdown: ButtonDropdownWrapper, alert: reactstrap.Alert, badge: reactstrap.Badge, breadcrumb: reactstrap.Breadcrumb, breadcrumbitem: reactstrap.BreadcrumbItem, button: reactstrap.Button, buttondropdown: reactstrap.ButtonDropdown, buttongroup: reactstrap.ButtonGroup, buttontoolbar: reactstrap.ButtonToolbar, card: reactstrap.Card, cardblock: reactstrap.CardBlock, cardbody: reactstrap.CardBody, cardcolumns: reactstrap.CardColumns, carddeck: reactstrap.CardDeck, cardfooter: reactstrap.CardFooter, cardgroup: reactstrap.CardGroup, cardheader: reactstrap.CardHeader, cardimg: reactstrap.CardImg, cardimgoverlay: reactstrap.CardImgOverlay, cardlink: reactstrap.CardLink, cardsubtitle: reactstrap.CardSubtitle, cardtext: reactstrap.CardText, cardtitle: reactstrap.CardTitle, carousel: reactstrap.Carousel, carouselcaption: reactstrap.CarouselCaption, carouselcontrol: reactstrap.CarouselControl, carouselindicators: reactstrap.CarouselIndicators, carouselitem: reactstrap.CarouselItem, mdcol: reactstrap.Col, collapse: reactstrap.Collapse, container: reactstrap.Container, custominput: reactstrap.CustomInput, dropdown: reactstrap.Dropdown, dropdownitem: reactstrap.DropdownItem, dropdownmenu: reactstrap.DropdownMenu, dropdowntoggle: reactstrap.DropdownToggle, fade: reactstrap.Fade, form: reactstrap.Form, formfeedback: reactstrap.FormFeedback, formgroup: reactstrap.FormGroup, formtext: reactstrap.FormText, input: reactstrap.Input, inputgroup: reactstrap.InputGroup, inputgroupaddon: reactstrap.InputGroupAddon, inputgroupbutton: reactstrap.InputGroupButton, inputgroupbuttondropdown: reactstrap.InputGroupButtonDropdown, inputgrouptext: reactstrap.InputGroupText, jumbotron: reactstrap.Jumbotron, label: reactstrap.Label, listgroup: reactstrap.ListGroup, listgroupitem: reactstrap.ListGroupItem, listgroupitemheading: reactstrap.ListGroupItemHeading, listgroupitemtext: reactstrap.ListGroupItemText, media: reactstrap.Media, modal: reactstrap.Modal, modalbody: reactstrap.ModalBody, modalfooter: reactstrap.ModalFooter, modalheader: reactstrap.ModalHeader, nav: reactstrap.Nav, navbar: reactstrap.Navbar, navbarbrand: reactstrap.NavbarBrand, navbartoggler: reactstrap.NavbarToggler, navdropdown: reactstrap.NavDropdown, navitem: reactstrap.NavItem, navlink: reactstrap.NavLink, pagination: reactstrap.Pagination, paginationitem: reactstrap.PaginationItem, paginationlink: reactstrap.PaginationLink, popover: reactstrap.Popover, popoverbody: reactstrap.PopoverBody, popovercontent: reactstrap.PopoverContent, popoverheader: reactstrap.PopoverHeader, popovertitle: reactstrap.PopoverTitle, poppercontent: reactstrap.PopperContent, poppertargethelper: reactstrap.PopperTargetHelper, progress: reactstrap.Progress, row: reactstrap.Row, tabcontent: reactstrap.TabContent, table: reactstrap.Table, tabpane: reactstrap.TabPane, tooltip: reactstrap.Tooltip, uncontrolledalert: reactstrap.UncontrolledAlert, uncontrolledbuttondropdown: reactstrap.UncontrolledButtonDropdown, uncontrolledcarousel: reactstrap.UncontrolledCarousel, uncontrolledcollapse: reactstrap.UncontrolledCollapse, uncontrolleddropdown: reactstrap.UncontrolledDropdown, uncontrollednavdropdown: reactstrap.UncontrolledNavDropdown, uncontrolledtooltip: reactstrap.UncontrolledTooltip,
        // GRAPHS
        scatterplot: ScatterPlot, 
        filledlinegraph: FilledLineGraph, 
        linegraph: LineGraph, 
        bargraphhorizontal: BarGraphHorizontal, 
        bargraph: BarGraph
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
