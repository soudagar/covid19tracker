import React from "react";
import {FormControl, NativeSelect} from '@material-ui/core'
import classes from './CountryPicker.module.css'

const countryPicker = (props) => {
  const countriesList = props.countries
  console.log(countriesList)
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect defaultValue=" " onChange={e => props.changed(e.target.value)} >
        <option value=""> Global</option>
        {countriesList.map((data,i) => {
          return (
          <option key={i}value={data.name}>{data.name}</option>
          )
        })}
      </NativeSelect>
    </FormControl>
  )
};

export default countryPicker;
