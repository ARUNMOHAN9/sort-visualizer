import React from 'react';

import bubblesort from '../../utilities/bubble-sort';

class SortSelector extends React.Component {

    selectSort = (sortType, arr) => {
        let result = arr;

        switch (sortType) {
            case 'bubbleSort':
                result = bubblesort(arr);
                break;
        
            default:
                break;
        }

        this.props.setSortedData(result);
    }

    render() {
        return <h1 onClick={()=> this.selectSort('bubbleSort', [...this.props.dataToSort])}>Srt selector</h1>
    }
}

export default SortSelector;