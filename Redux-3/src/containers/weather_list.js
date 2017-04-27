import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../Components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
	 const name= cityData.city.name

	 const temps = cityData.list.map(weather => weather.main.temp-270);
     const pres = cityData.list.map(weather => weather.main.pressure);
     const humids = cityData.list.map(weather => weather.main.humidity);
		return (
		   <tr key={name}>
		   <td>{name}</td>
		   <td>
		     <Chart data={temps} color="red" />
		   </td>
		   <td>  
		     <Chart data={pres} color="black" />
		   </td>
           <td>
		     <Chart data={humids} color="orange" />
		   </td>

		   </tr>

		);
	}

	render() {
		console.log(this.props.weather);
		return (
		  <table className="table table-hover">
		   <thead>
		     <tr>
		       <th> City </th>
		       <th> Temperature </th>
		       <th> Pressure </th>
		       <th> Humidity </th>
		      </tr>
		    </thead>
		    <tbody>
             {this.props.weather.map(this.renderWeather)}
		    </tbody>
		   </table>

		);
	}
}

function mapStatetoProps(state) {
	return { weather: state.weather};
}

export default connect(mapStatetoProps)(WeatherList);