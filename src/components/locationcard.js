// genaric card
import React, { Component } from 'react';
import Gmaps from './maps.js';

// import { Router, browserHistory, Route, Link } from 'react-router';

// var key = "AIzaSyBrZPy5tN2veJeIY4LXn2K3pCYcuu0-AVc"

// fetch(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`)
  // .then()

class LocationCard extends Component {
  state = {lat: 0, lng: 0}

  componentDidMount() {
    let context = this
    let pos = navigator
    .geolocation
    .getCurrentPosition(function(success, err, options) {
      let lat = success.coords.latitude
      let lng = success.coords.longitude
      let position = {lat, lng}
      // fetch
      let url = "http://localhost:3001"
      fetch(url, {
        method: "POST",
        body: JSON.stringify(position),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      context.setState(position)
      console.log(context.state);
    })
  }

  render() {
    
    return (
      <div className="card" >
        <div className="card-content">
          <h4>Your Current Location ...</h4>
          {/* <img src="./img/map-screenshot.png" /> */}
          <Gmaps x={this.state.lat} y={this.state.lng}/>
          <p>Latitude: {this.state.lat}</p>
          <p>Longitude: {this.state.lng}</p>
        </div>
      </div>
    )
  }
}

export default LocationCard;
