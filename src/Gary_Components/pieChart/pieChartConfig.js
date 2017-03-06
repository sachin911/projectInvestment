const config = {
    chart :{
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title : {
        text:''
    },
    plotOptions: {
        pie:{
            dataLabels:{
                enabled:false,
            },
            center: ['50%', '25%']
        }
    },
    series : [{
        type:'pie',
        innerSize:'70%',
        data: [
            {
                y : 14,
                color : 'rgb(2,74,122)'
            },
            {
                y : 6,
                color : 'rgb(29,173,226)'
            },
            {
                y : 50,
                color : 'rgb(111,152,36)'
            },
            {
                y : 30,
                color : 'rgb(255,205,0)'
            }
        ]
    }]
}

export default config;