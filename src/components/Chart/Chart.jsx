import React from "react";
import { Line, Bar } from "react-chartjs-2";
import classes from "./Chart.module.css";

const chart = (props) => {

  const lineChartArray =props.dailyData
  const {confirmed, recovered, deaths}=props.countryData  
  const country=props.countrySele
  console.log(props)
  console.log(country)

  console.log(lineChartArray)

  const barChart =(
    confirmed ?(
        <Bar 
          data={{
            labels :['Infected','Recovred','Deaths'],
            datasets : [{
              label : 'people',
              backgroundColor : ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data : [confirmed.value,recovered.value,deaths.value]
            }]
          }}
          options = {{
            legend :{display:false},
            title : {display:true, text: `current state in ${country}` },
          }}
        
        />
    ) : null
  )

  const lineChart =(
    lineChartArray.length ? (
      <Line  
        data ={{
          labels : lineChartArray.map(({date}) => date),
          datasets :[{
            data : lineChartArray.map(({confirmed})=> confirmed),
            label : 'Infected',
            borderColor : '#3333ff',
            fill : true
          },{
            data : lineChartArray.map(({deaths})=> deaths),
            label : 'Deaths',
            borderColor : 'red',
            backgroundColor : 'rgba(255,0,0,0.5)',
            fill : true
          }]

        }}
      >
      </Line>
    ) : null
  )
  return (
    <div className={classes.container}>
     {country ? barChart : lineChart}
    </div>
  );
};

export default chart;
