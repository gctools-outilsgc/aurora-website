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
          xData={[9, 16, 16, 21, 22, 28, 29, 31, 31, 32, 33, 35, 36, 36, 37, 38, 39, 41, 42, 46, 47, 55, 56, 59, 63, 65]}
          yData={[9, 18, 15, 16, 17, 18, 28, 23, 35, 36, 32, 37, 38, 34, 36, 46, 35, 52, 44, 50, 44, 46, 52, 64, 67, 70]}
          type="scatter"
          xAxis="Category Axis Title"
          yAxis="Category Axis Title"
          filled = {false}
        />
      </div>
    );
  }
}

export default BarGraph;