import React, { useState } from "react";
import "./DropDown.scss";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "USA",
    value: "US",
    cities: ["New York", "Los Angeles"],
  },
  {
    name: "Canada",
    value: "CA",
    cities: ["Toronto", "Vancouver"],
  },
];

export default function DropDown() {
  const [country, setCountry] = useState(0);
  return (
    <div className="dropdown-container">
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries.map((country, index) => {
          return (
            <option key={index} value={index}>
              {country.name}
            </option>
          );
        })}
      </select>
      <select>
        {countries[country].cities.map((city, index) => {
          return (
            <option key={index} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}
