import React from 'react';

import SortSelector from '../sort-selector/sort-selector.component';
import SortVisualizer from '../sort-visualizer/sort-visualizer.component';
import SortControlPanel from '../sort-control-panel/sort-control-panel.component';

class SortContainer extends React.Component {

    state = {
        result: [],
        dataToSort: [],
        steps: [],
        selectedSort: 'quickSort'
    }

    componentDidMount() {
        this.setState({dataToSort: this.randomDataSet(25,2,50)});
    }

    randomDataSet = (dataSetSize, minValue, maxValue) => {
        return new Array(dataSetSize).fill(0).map(function(n) {
          return Math.random() * (maxValue - minValue) + minValue;
        });
    }

    setSortedData = (steps, sortType) => {
        this.setState({steps: steps, selectedSort: sortType});
    }

    render() {
        return (
            <>
                <SortSelector dataToSort={this.state.dataToSort} setSortedData={this.setSortedData}/>
                <SortVisualizer selectedSort={this.state.selectedSort} result={this.state.dataToSort} steps={this.state.steps}/>
                <SortControlPanel />
            </>
        );
    }
}

export default SortContainer;