import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
//import Home from "./Home";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
    this.storeWeatherData = this.storeWeatherData.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.convertLocationIntoString = this.convertLocationIntoString.bind(this);
  }

  storeWeatherData(data) {
    this.setState({
      weatherData: data,
    });
  }

  async getWeatherData(address) {
    try {
      const result = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD1Gxt9irjoAYzRDvCbs_DYgKJtATYAmnA`
      );
      console.log(result);
      const lat = result.data.results[0].geometry.location.lat;
      console.log(lat);
      const lon = result.data.results[0].geometry.location.lng;
      const data = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=27cb6d460482e895ae4d104c55c13c09`
      );
      console.log("data");
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  convertLocationIntoString() {
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const fullAddress = `${address} ${city} ${state}`.split(" ").join("+");
    //return fullAddress;
    this.getWeatherData(fullAddress).then((data) => {
      this.storeWeatherData(data);
    });
  }

  render() {
    const Home = () => {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <label for="address">Address</label>
                <input type="text" id="address" name="address" />
                <label for="city">City</label>
                <input type="text" id="city" name="city" />
                <select id="state">
                  <option>State...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <input
                  type="button"
                  value="Click Me"
                  id="submit"
                  onClick={this.convertLocationIntoString}
                />
              </form>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default Main;
