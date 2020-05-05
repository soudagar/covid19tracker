import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import classes from "./App.module.css";
import { fetchData, fetchDailyData, fetchCountryData } from './api'
import coronaImage from '../src/assets/image.png'

class App extends React.Component {

    state = {
        data :{},
        dailyData : [],
        countriesData :[],
        country : ''
    }

    async componentDidMount(){
        const data = await fetchData()
        this.setState({data:data})
        const dailyData = await fetchDailyData()
        this.setState({dailyData:dailyData})
        const countries = await fetchCountryData()
        this.setState({countriesData : countries})
        console.log(data)
        console.log(dailyData)
        console.log(countries)
    }

    onChangeHandler = async (country) => {
          console.log(country)
          const changedCountry = await fetchData(country)
          console.log(changedCountry)
          this.setState({data:changedCountry, country : country})
          console.log(changedCountry)
          console.log("inside change handler"+country)
    }

  
  render() {
      //const {data} =this.state
      //console.log(this.state.dailyData)
      //const modifiedData = this.state.dailyData
      const testCountry=this.state.country
      console.log(testCountry)

    return (
      <div className={classes.container}>
        <img src={coronaImage} className={classes.image} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker countries={this.state.countriesData} changed ={this.onChangeHandler}/>
        <Chart dailyData={this.state.dailyData} countryData={this.state.data} countrySele={this.state.country}/>
      </div>
    );
  }
}

export default App;
