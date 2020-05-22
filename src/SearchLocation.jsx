import React, { Component } from "react";
import axios from "axios";
import apiKeys from "./apiKeys";
import ReactAnimatedWeather from "react-animated-weather";

class SearchLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            error: "",
            weather: {},
        }
    }
    componentDidMount() {
        this.search("Bangalore");
    }
    search = city => {
        axios.get(`${apiKeys.base}weather?q=${
            city != "[object Object]" ? city : this.state.query
            }&units=metric&APPID=${apiKeys.key}`
        )
            .then(response => {
                this.setState({ query: "", error: null, weather: response.data }, () => {"inide .then function()"})
            })
            .catch(() => {
                this.setState({ weather: "", query: "", error: { query: this.state.query, message: " NOT FOUND" }},()=>{"inside .catch ()"})
            })
    }
    default = { color: "white", size: 112, animate: true };
    render() {
        return (
            <div className="forecast">
                <div className="forecasr-icon">
                    <ReactAnimatedWeather
                        icon={this.props.icon}
                        color={this.default.color}
                        size={this.default.size}
                        animate={this.default.animate}
                    />
                </div>
                <div className="today-weather">
                    <h3>{this.props.weather}</h3>
                    <div className="search-box">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search any city"
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                        <div className="img-box">
                            {" "}
                            <img
                                src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                                onClick={this.search}
                            />
                        </div>
                    </div>
                    <ul>
                        {typeof this.state.weather.main !== "undefined" ? (
                            <div>
                                {" "}
                                <li className="cityHead">
                                    <p>
                                        {this.state.weather.name},{this.state.weather.sys.country}
                                    </p>
                                    <img
                                        className="temp"
                                        src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}.png`}
                                    />
                                </li>
                                <li>
                                    Temperature{" "}
                                    <span className="temp">
                                        {Math.round(this.state.weather.main.temp)}°c ({this.state.weather.weather[0].main})
                </span>
                                </li>
                                <li>
                                    Humidity{" "}
                                    <span className="temp">
                                        {Math.round(this.state.weather.main.humidity)}%
                </span>
                                </li>
                                <li>
                                    Visibility{" "}
                                    <span className="temp">
                                        {Math.round(this.state.weather.visibility)} mi
                </span>
                                </li>
                                <li>
                                    Wind Speed{" "}
                                    <span className="temp">
                                        {Math.round(this.state.weather.wind.speed)} Km/h
                </span>
                                </li>
                            </div>
                        ) : (
                                <li>
                                    {this.state.error.query} {this.state.error.message}
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default SearchLocation;