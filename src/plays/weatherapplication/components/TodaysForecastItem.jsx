import { Card, CardBody } from '@material-tailwind/react';
import React from 'react';
import day from '../images/icons/day.jpg';
import night from '../images/icons/night.jpg';
import twilight from '../images/icons/twilight.jpg';

export function TodaysForecastItem({ parameter, data }) {
  function getHeading(parameter) {
    let heading;
    let value;
    if (parameter == 'maxwind_kph') {
      heading = 'Maximum wind speed';
      value = 'kph';
    } else if (parameter == 'daily_chance_of_rain') {
      heading = 'Chance of rain';
      value = '%';
    } else if (parameter == 'totalprecip_mm') {
      heading = 'Total precipitation ';
      value = 'mm';
    } else if (parameter == 'uv') {
      heading = 'UV index';
      value = '';
    } else if (parameter == 'sunrise') {
      heading = 'Sun rises at';
      value = '';
    } else if (parameter == 'sunset') {
      heading = 'Sun sets at';
      value = '';
    } else if (parameter == 'is_sun_up' || parameter == 'is_moon_up') {
      heading = 'Day condition';
      value = '';
    }

    return { heading, value };
  }

  function getData(parameter, data) {
    let itemData;
    let commonPath = data.forecast.forecastday[0];
    if (parameter == 'maxwind_kph') {
      itemData = commonPath['day'][parameter];
    } else if (parameter == 'daily_chance_of_rain') {
      itemData = commonPath['day'][parameter];
    } else if (parameter == 'totalprecip_mm') {
      itemData = commonPath['day'][parameter];
    } else if (parameter == 'uv') {
      itemData = commonPath['day'][parameter];
    } else if (parameter == 'sunrise') {
      itemData = commonPath['astro'][parameter];
    } else if (parameter == 'sunset') {
      itemData = commonPath['astro'][parameter];
    } else if (parameter == 'is_sun_up' || parameter == 'is_moon_up') {
      if (data.current.is_day == 1) {
        itemData = <img className="w-[50px] h-[50px]" src={day} />;
      } else if (data.current.is_day == 0) {
        itemData = <img className="w-[50px] h-[50px]" src={night} />;
      } else {
        itemData = <img className="w-[50px] h-[50px]" src={twilight} />;
      }
    }

    return <div>{itemData}</div>;
  }

  return (
    <div>
      <Card className="bg-gradient-to-tr from-[#3961c3] to-[#212b50] text-white">
        <CardBody className="p-3">
          <div className="flex flex-row gap-4 justify-between items-center sm:text-[0.4rem] md:text-[0.6rem] lg:text-[1.2rem]">
            <div className="px-2">{getHeading(parameter)['heading']}</div>
            <div className="flex flex-row gap-1 px-2">
              {getData(parameter, data)} {getHeading(parameter)['value']}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
