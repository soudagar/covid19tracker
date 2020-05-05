import React from "react";
import { Card, Typography, Grid, CardContent} from '@material-ui/core'
import classes from './Cards.module.css'
import CountUp from "react-countup";
import cx from 'classnames'

const cards = (props) => {
  const {data :{confirmed, recovered, deaths, lastUpdate}} =props
  if(!confirmed){
    return "Loading..."
  }
  console.log("confirmed"+confirmed.value)


  return(
    <div className={classes.container}>
        <Grid container spacing={5} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(classes.infected,classes.card)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Infected</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={confirmed.value} delay={2.5} separator=","></CountUp>
              </Typography>
              <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
              <Typography variant="body2"> Number of Active cases of Covid 19 </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(classes.recovered,classes.card)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Recovered</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={recovered.value} delay={2.5} separator=","></CountUp> 
              </Typography>
              <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
              <Typography variant="body2"> Number of Recovered cases of Covid 19 </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(classes.deaths,classes.card)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Deaths</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={deaths.value} delay={2.5} separator=","></CountUp> 
               </Typography>
              <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
              <Typography variant="body2"> Number of Deaths cases of Covid 19 </Typography>
            </CardContent>
          </Grid>
        </Grid>
    </div>
  )
};

export default cards;
