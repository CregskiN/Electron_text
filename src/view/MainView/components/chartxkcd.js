import React, { Component } from "react";
import chartXkcd from 'chart.xkcd'
import { Line } from 'chart.xkcd-react'
// Bar, Pie, XY

class ChartxkcdIndex extends Component {
  render () {
    return (
      <div className="hello-body">
        <p className="text-style">
          chart.xkcd
        </p>
        <Line 
          config={{
            title: 'Monthly ihcome of an indie developer',
            xLabel: 'Month',
            yLabel: '$ Dollors',
            data: {
              labels: ['1', '2', '3', '4', '5', '6'],
              datasets: [{
                label: 'Plan',
                data: [30, 70, 200, 300, 500, 800],
              }, {
                label: 'Reality',
                data: [0, 1, 30, 70, 80, 100, 50]
              }]
            },
            options: {
              yTickCount: 3,
              legendPosition: chartXkcd.config.positionType.upLeft
            }
          }}
        />
      </div>
    )
  }
}

export default ChartxkcdIndex;