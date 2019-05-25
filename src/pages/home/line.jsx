import React from "react"
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts"
import DataSet from "@antv/data-set"

export default class Line extends React.Component {
  render() {
    const data = [
      {
        month: "Jan",
        a: 7.0,
        b: 3.9,
        c: 5.9
      },
      {
        month: "Feb",
        a: 6.9,
        b: 4.2,
        c: 1.9
      },
      {
        month: "Mar",
        a: 9.5,
        b: 5.7,
        c: 3.9
      },
      {
        month: "Apr",
        a: 14.5,
        b: 8.5,
        c: 5.5
      },
      {
        month: "May",
        a: 18.4,
        b: 11.9,
        c: 8.9
      },
      {
        month: "Jun",
        a: 21.5,
        b: 15.2,
        c: 10.0
      },
      {
        month: "Jul",
        a: 25.2,
        b: 17.0,
        c: 12.9
      },
      {
        month: "Aug",
        a: 26.5,
        b: 16.6,
        c: 15.9
      },
      {
        month: "Sep",
        a: 23.3,
        b: 14.2,
        c: 20.7
      },
      {
        month: "Oct",
        a: 18.3,
        b: 10.3,
        c: 25.9
      },
      {
        month: "Nov",
        a: 13.9,
        b: 6.6,
        c: 30.9
      },
      {
        month: "Dec",
        a: 9.6,
        b: 4.8,
        c: 35.9
      }
    ]
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: "fold",
      fields: ["a", "b", "c"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    })
    const cols = {
      month: {
        range: [0, 1]
      }
    }
    return (
      <div style={{float: 'right', width: 750, height: 300}}>
        <Chart height={250} data={dv} scale={cols} forceFit>
          <Legend/>
          <Axis name="month"/>
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}万个`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    )
  }
}
