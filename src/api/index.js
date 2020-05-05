import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    
  let changedUrl = url
  if(country){
    changedUrl = `${url}/countries/${country}`
  }
  console.log(changedUrl)
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);

    //console.log(response);
    const dailyData = response.data.map((data) => {
      return {
        confirmed: data.confirmed.total,
        deaths: data.deaths.total,
        date: data.reportDate,
      };
    });
   // console.log(dailyData);

    return dailyData;
  } catch (error) {}
};

export const fetchCountryData = async () => {
  try {
    const response = await axios.get(`${url}/countries`)
    const countries =response.data.countries.map((data) => ({
      name :data.name
    }))
    console.log(countries)
    return countries
  } catch (error) {
    
  }
}