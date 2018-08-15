import echarts from "echarts";

const $charts = $('[bar-chart]');

$charts.each(function () {
    const el = this;
    const $el = $(this);
    const $accordion = $el.closest('[uk-accordion]');
    const chart = echarts.init(el);
    const option = el.getAttribute('bar-chart').length > 2 ?
        JSON.stringify(el.getAttribute('bar-chart')) :
        {
            tooltip: {
                trigger: 'axis',
                // axisPointer: {
                //     type: 'shadow',
                // }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true},
                },
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };

    // use configuration item and data specified to show chart
    chart.setOption(option);

    $accordion.on('show shown', function () {
        if (!$el.closest('.uk-open').length) return;

        chart.resize();
    });

    $(window).on('resize', chart.resize.bind(chart));
});