import React from 'react';
import {BasicBarPlot, BasicBarPlotSource} from './BasicBarPlot';
import CodeBlock from './CodeBlock';
import { Row, Col } from 'reactstrap';
import DataFooter from './Footer';

class BarGraph extends React.Component {
  render() {
    return(
      <div>
        <BasicBarPlot 
          title="Graph Title"
          xData={["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]}
          yData={[9, 18, 26, 18,39, 38, 19]}
          type="bar"
          xAxis="Category Axis Title"
          yAxis="Category Axis Title"
          filled = {false}
        />
      </div>
    );
  }
}

export default BarGraph;