import ReactWeather, { useOpenWeather } from 'react-open-weather'

export default function Weather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: `${process.env.REACT_APP_WEATHER_API}`,
        lat: '47.6062',
        lon: '122.3321',
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
      });
     
      return (
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Seattle"
          unitsLabels={{ temperature: 'F', windSpeed: 'm/hr' }}
          showForecast
        />
      );
}