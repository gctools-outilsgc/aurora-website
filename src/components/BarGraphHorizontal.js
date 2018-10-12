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
                xData={[15, 145]}
                yData={['Naw', 'Yee']}
                type="bar"
                xAxis="Category Axis Title"
                yAxis="Category Axis Title"
                filled = {false}
                orientation = 'h'
                color = {['#ADE18D', '#467B8D']}
        />
      </div>
    );
  }
}

export default BarGraph;