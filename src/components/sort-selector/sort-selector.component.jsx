import React from 'react';

import bubblesort from '../../utilities/bubble-sort';
import quickSort from '../../utilities/quick-sort';

class SortSelector extends React.Component {

    selectSort = (sortType, arr) => {
        let result = arr;

        switch (sortType) {
            case 'bubbleSort':
                result = bubblesort(arr);
                break;

            case 'quickSort':
                result = quickSort(arr, 0, arr.length-1);
                break;
        
            default:
                break;
        }

        this.props.setSortedData(result, sortType);
    }

    render() {
        return <h1 onClick={()=> this.selectSort('quickSort', [...this.props.dataToSort])}>Srt selector</h1>
    }
}

export default SortSelector;