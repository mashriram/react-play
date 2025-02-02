import React, { useState } from 'react';
import { MainSection } from '../components/MainSection';
import { RightSection } from '../components/RightSection';
import { SearchBar } from '../components/SearchBar';
import logo from './../images/logo.jpg';

export function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(undefined);

  function getWData(city, weatherData) {
    setWeatherData(weatherData);
    setCity(city);
    // console.log(weatherData);
  }

  return (
    <div>
      <div className="lg:flex lg:flex-row lg:gap-12 lg:items-center  text-center">
        <div className="px-14 py-4 flex flex-row gap-4 items-center justify-center">
          <img alt="Weather App" className="w-16 h-16 rounded-full " src={logo} />
          <div className="text-white text-[2rem] ">The Weather App</div>
        </div>
        <div className="flex justify-center items-center">
          <SearchBar getWeatherData={getWData} />
        </div>
      </div>

      <div className="flex xl:flex-row flex-col gap-8 px-8 py-10 justify-between bg-black  ">
        {/* <div className="grow-[1]">
                <LeftNav />
            </div> */}

        <div className="grow-[2]">
          <MainSection weatherData={weatherData} />
        </div>
        <div className="">
          <RightSection city={city} />
        </div>
      </div>
    </div>
  );
}
