import React from "react"
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts"

export default class Bar extends React.Component {
  render() {
    const data = [
      {
        year: "1月",
        sales: 38
      },
      {
        year: "2月",
        sales: 52
      },
      {
        year: "3月",
        sales: 61
      },
      {
        year: "4月",
        sales: 145
      },
      {
        year: "5月",
        sales: 48
      },
      {
        year: "6月",
        sales: 38
      },
      {
        year: "7月",
        sales: 28
      },
      {
        year: "8月",
        sales: 38
      },
      {
        year: "59月",
        sales: 68
      },
      {
        year: "10月",
        sales: 38
      },
      {
        year: "11月",
        sales: 58
      },
      {
        year: "12月",
        sales: 38
      }
    ]
    const cols = {
      sales: {
        tickInterval: 20
      }
    }
    return (
      <div style={{width: '100%', marginLeft: -30}}>
        <Chart height={338} data={data} scale={cols} forceFit>
          <Axis name="year"/>
          <Axis name="sales"/>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales"/>
        </Chart>
      </div>
    )
  }
}