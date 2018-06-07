import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';
 
const Weather = () => {
return(
  <OpenWeatherMap city="Los Angeles" country="IL" units='imperial' appid="350a2cc0146479cbbd3f6e9d189d5dc1" />
)
};



export default Weather;
