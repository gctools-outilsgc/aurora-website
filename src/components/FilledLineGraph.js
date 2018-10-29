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
                xData={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                yData={[20, 25, 22, 26, 24, 10, 26, 36, 31, 27, 16, 30]}
                type="line"
                xAxis="Category X-Axis Title"
                yAxis="Category Y-Axis Title"
                filled = {true}
                color= '#467B8D'
        />
      </div>
    );
  }
}

export default BarGraph;