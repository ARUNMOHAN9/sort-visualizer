import React from 'react';

import styles from './sort-selector.module.scss';

import bubblesort from '../../utilities/bubble-sort';
import quickSort from '../../utilities/quick-sort';
import heapSort from '../../utilities/heap-sort';

class SortSelector extends React.Component {

    selectSort = (sortType, arr) => {
        let result = arr;

        switch (sortType) {
            case 'bubbleSort':
                result = bubblesort(arr);
                break;

            case 'quickSort':
                result = quickSort(arr, 0, arr.length - 1);
                break;

            case 'heapSort':
                result = heapSort(arr);
                break;

            default:
                break;
        }
        this.props.setSortedData(result, sortType);
    }

    componentDidMount() {
        this.selectSort(this.props.selectedSort, [...this.props.dataToSort]);
    }

    render() {
        return (
            <>
                <select className={styles.select} value={this.props.selectedSort} name="sortType" id="sortSelector" onChange={(event) => this.selectSort(event.target.value, [...this.props.dataToSort])}>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="quickSort">Quick Sort</option>
                    <option value="heapSort">Heap Sort</option>
                </select>
            </>
        )
    }
}

export default SortSelector;