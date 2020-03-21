import React from 'react';

import SortSelector from '../sort-selector/sort-selector.component';
import SortVisualizer from '../sort-visualizer/sort-visualizer.component';
import SortControlPanel from '../sort-control-panel/sort-control-panel.component';

class SortContainer extends React.Component {

    state = {
        result: [],
        dataToSort: [3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6,3,2,6,2,5,2,5,10,12,6],
        steps: []
    }

    setSortedData = (steps) => {
        this.setState({steps: steps});
    }

    render() {
        return (
            <>
                <SortSelector dataToSort={this.state.dataToSort} setSortedData={this.setSortedData}/>
                <SortVisualizer result={this.state.dataToSort} steps={this.state.steps}/>
                <SortControlPanel />
            </>
        );
    }
}

export default SortContainer;