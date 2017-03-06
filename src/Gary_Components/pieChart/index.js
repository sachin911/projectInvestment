import React, { Component } from 'react';
import _ from 'lodash';

import config from './pieChartConfig';

import ReactHighcharts  from 'react-highcharts';

const info = [
    [14,6,50,30],
    [21,9,50,20],
    [28,12,45,15],
    [35,15,40,10]
]

const index = 0;

const color = [ 'rgb(2,74,122)',
                'rgb(29,173,226)',
                'rgb(111,152,36)',
                'rgb(255,205,0)'];

export default class PieChart extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const icon0 = {'background' : color[0]}
        const icon1 = {'background' : color[1]}
        const icon2 = {'background' : color[2]}
        const icon3 = {'background' : color[3]}

        const infoDisplay = info[index];
        const data = _.map(color,(c,i)=>{
            return {
                value: infoDisplay[i],
                color: c
            }
        });
        //console.log(data);
        return (
            <div className = 'pie-chart-component'>
                <div className = 'header'>
                    <span>You're currently exploring the</span> <br/>
                    <strong>Conservative (20% stocks) </strong>
                    <span> strategy</span>
                </div>
                <div className = 'pie-chart-container'>
                    <div className = 'pie-chart'>
                        <ReactHighcharts config = {config}/>
                        <div className = 'pie-inner-info'> 
                            <span>$20,000.00</span>
                            <p>Initial Deposit</p>
                        </div>
                    </div>
                    <div className = 'pie-info'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Domestic Stock</td>
                                    <td><span style = {icon0} className='fgo-icon'></span></td>
                                    <td>14%</td>
                                    <td>
                                        <span className='pie-spacer'>|</span>
                                        <span>$2,800.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Foreign Stock</td>
                                    <td><span style = {icon1} className='fgo-icon'></span></td>
                                    <td>6%</td>
                                    <td>
                                        <span className='pie-spacer'>|</span>
                                        <span>$1,200.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bonds</td>
                                    <td><span style = {icon2} className='fgo-icon'></span></td>
                                    <td>50%</td>
                                    <td>
                                        <span className='pie-spacer'>|</span>
                                        <span>$10,000.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Short-Term</td>
                                    <td><span style = {icon3} className='fgo-icon'></span></td>
                                    <td>30%</td>
                                    <td>
                                        <span className='pie-spacer'>|</span>
                                        <span>$6,000.00</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}