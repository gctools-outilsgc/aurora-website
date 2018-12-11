import React from 'react';

class DocumentationTabPanel extends React.Component {
  render(){
    return(
      <div className={(this.props.visible === 'true') ? "visible" : "doc-hidden"}>
        {this.props.children}
      </div>
    )
  }
}

export default DocumentationTabPanel;
