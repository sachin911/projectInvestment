import React , { Component } from 'react';
import Highcharts from 'highcharts';
import {findDOMNode} from 'react-dom';
import addFunnel from 'highcharts/modules/funnel';
import $ from 'jquery';

export default class AreaChart extends Component{
    constructor(props){
        super(props);

        this.chart = undefined;

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
    }

    renderChart(config){
        this.chart = new Highcharts['chart']({
            ...config,
            chart:{
                ...chartConfig,
                renderTo: this.refs.mychart
            }
        })
    }

    render(){
        return(
            <div>
                <h1 ref = 'toggle' >Area Chart </h1>
                <button onClick = {this.handleToggle}>Toggle</button>
                <div ref = 'mychart'></div>
            </div>
        )
    }
}