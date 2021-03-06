import React from 'react';

import styles from './sort-visualizer.module.scss';

import VerticalBar from '../vertical-bar/vertical-bar.component';

class SortVisualizer extends React.Component {

    selectSteps = () => {
        let i = 0;
        const timer = setInterval(() => {
            this.animateBars(this.props.steps[i])
            ++i;
            if (i === this.props.steps.length) {
                clearInterval(timer);
            }
        }, 500);
    }

    animateBars = (step) => {
        let domElems =   Array.from(document.getElementsByClassName('bar')).sort((a,b) => a.getBoundingClientRect().x - b.getBoundingClientRect().x);
        const elem1 = domElems[step.values[0]];
        const elem2 = domElems[step.values[1]];
        elem1.style.background = '#FDD835';
        elem2.style.background = '#FDD835';
        if (this.props.selectedSort !== 'bubbleSort') {
            elem1.style.transform = `translateX(${this.gettranslatevalue(elem1) + (20 * Math.abs(step.values[0] - step.values[1]))}px)`;
            elem2.style.transform = `translateX(${this.gettranslatevalue(elem2) - (20 * Math.abs(step.values[0] - step.values[1]))}px)`;
        } else {
            elem1.style.transform = `translateX(${this.gettranslatevalue(elem1) + 20}px)`;
            elem2.style.transform = `translateX(${this.gettranslatevalue(elem2) - 20}px)`;
        }
        setTimeout(() => {
            elem1.style.background = '#1565C0';
            elem2.style.background = '#1565C0';
        }, 200);
    }

    gettranslatevalue = (domElem) => {
        const computStyle = window.getComputedStyle(domElem).transform;
        if (computStyle !== 'none') {
            console.log(+computStyle.split(',')[4].trim());
            return +computStyle.split(',')[4].trim();
        }
        return 0;
    }

    render() {
        return (
            <>  
                <button className={!this.props.steps.length ? styles.disable : ''} onClick={this.selectSteps}>Trigger Sort</button>
                <div className={styles.sortVisualizer}>
                    {this.props.result.map((elem, index) => <VerticalBar key={index} hgt={elem} />)}
                </div>
            </>
        )
    }
}

export default SortVisualizer;