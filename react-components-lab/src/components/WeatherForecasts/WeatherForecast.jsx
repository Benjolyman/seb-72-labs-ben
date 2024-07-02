import "./WeatherForecast.css";

const WeatherForecast = (props) => {
   const { weather } = props;

  return (
    <div className="weather">
      <h2>{weather.day}</h2>
      <img src={weather.img} alt={weather.imgAlt} />
      <p>
        <span>conditions: </span>{weather.conditions}
      </p>
      <p>
        <span>time: </span>{weather.time}
      </p>
    </div>
  );
};

export default WeatherForecast;