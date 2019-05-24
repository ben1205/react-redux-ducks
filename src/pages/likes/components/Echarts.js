import React from 'react';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends React.Component{
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    try {
      const myChart = echarts.init(document.getElementById('ben'));
      // 绘制图表
      myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });
    } catch (error) {
      // todo
    }
  }

  render () {
    return (
      <div id='ben' style={{height: '200px'}}>
      </div>
    )
  }
}

export default Echarts;