var React = require('react');
// Note that Highcharts has to be required separately

var Highlight = require('react-highlight');
var ReactHighcharts = require('react-highcharts');
var ReactDOM = require('react-dom');
import tooltip_config from './tooltip';

// area backgroundColor opacity: use '#ff0000' instead of 'red'
// crosshair : automatic plot line
// Everyting has a zIndex (capital i !!) 
// shared for the all dots 
// data, the biggest one the first



const config = {
  chart:{
    type:'area'
  },
  title:{
      text:''
  },
  colors : 
      [ '#d5eafb', '#8fc6f5', '#55c0fd']
  ,
  plotOptions : {
    series : {
        marker : {
            fillColor : '#FFFFFF',
            enabled : false,
            lineWidth : 2 , 
            lineColor : null,
            // symble : 'square'
        }
    }
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    , crosshair : {
        width : 2,
        color : 'gray',
        dashStyle : 'shortdot',
        zIndex: 3
        }
    },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }],

  tooltip: {      
        borderWidth: 0,
        shared: true,
        shadow: false,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding:0,
        useHTML:true,
        followPointer : true,
        formatter : function() {
            return tooltip_config;
        }
    }
};

const series_data = (a) => {
    const len = a.length;
    let data1 =[],data2=[],data3=[];
    for(let i=0;i<len;i++){
        data2.push( i*3000 );
        data1.push( i*3500 );
        data3.push( i*2500 );
    }
    return [{
        'data':data1,
        'marker' : {
            radius : 5,
            symbol : 'circle',
            fillColor : '#FFFFFF',
            lineWidth : 2,
            lineColor : 'lightblue',
            enabled : false,
            zIndex : 10
        }
    },{
        'data':data2,
        'marker' : {
            radius : 5,
            symbol : 'circle',
            fillColor : '#FFFFFF',
            lineWidth : 2,
            lineColor : 'orange',
            enabled : false,
            zIndex : 10
        }
    },{
        'data':data3,
        'marker' : {
            radius : 5,
            symbol : 'circle',
            fillColor : '#FFFFFF',
            lineWidth : 2,
            lineColor : 'gray',
            enabled : false,
            zIndex : 10
        }
    }];
}


export default class AreaChart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        config.series = (series_data(config.xAxis.categories));
        //console.log(tooltip_config);
        return (
            <div>
                <ReactHighcharts config = {config}/>
            </div>
        );
    }
}
