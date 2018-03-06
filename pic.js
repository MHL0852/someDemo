new Chartist.Bar('.ct-chart', {
    labels: ['第一个人', '第二个人', '第三个人', '第四个人'],
    series: [
        [600, 400, 800, 700],
        [400, 300, 700, 650],
        [800, 300, 1000, 600]
    ]
}, {
    seriesBarDistance: 10,
    axisX: {
        offset: 60
    },
    axisY: {
        offset: 80,
        labelInterpolationFnc: function(value) {
            return value + ' 元'
        },
        scaleMinSpace: 15
    }
});