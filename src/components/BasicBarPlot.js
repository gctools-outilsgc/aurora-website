import React from 'react';
import Plot from 'react-plotly.js';

class BasicBarPlot extends React.Component {
    constructor(props) {
        super(props); //props will be xData, yData, type, xAxis, yAxis, title
    }
    render() {
        return (
            <Plot
                data={[{
                    type: this.props.type, 
                    x: this.props.xData, 
                    y: this.props.yData,
                    marker: {color: this.props.color},
                    mode: this.props.type == "scatter" ? "markers" : "points",
                    fill: this.props.filled == true ? "tozeroy" : "none",
                    orientation: this.props.orientation
                }]}
                layout={ {autosize: true, title: this.props.title, xaxis:{title:this.props.xAxis}, yaxis:{title:this.props.yAxis}} }
                config={ {displayModeBar: false} }
                style={ {"width": "100%"} }
            />
        );
    }
};

BasicBarPlot.defaultProps = {
    color: '#55C0A3',
    fill: false,
    orientation: 'v'
};

const BasicBarPlotSource = `
import React from 'react';
import Plot from 'react-plotly.js';
class BasicBarPlot extends React.Component {
    render() {
        return (
            <Plot
                data={[{
                    type: 'bar', 
                    x: ['Apples','Oranges','Lemons','Limes'], 
                    y: [2, 5, 3, 7]
                }]}
                layout={ {autosize: true, title: 'A Basic Bar Plot'} }
                config={ {displayModeBar: false} }
                style={ {"width": "100%"} }
            />
        );
    }
}
export default BasicBarPlot;
`

export { BasicBarPlot, BasicBarPlotSource };