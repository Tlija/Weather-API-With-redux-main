import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../JS/action/action";

const SearchLoc = ({ setQuere }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search.."
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          marginLeft: "25%",
          marginTop: "30px",
          paddingBottom: "10px",
          borderRadius: "20px",
          
        }}
        onChange={(e) => dispatch(getWeather(e.target.value))}
      />
    </div>
  );
};
export default SearchLoc;
