import "./parent.css";
import React from "react";
import { useState } from "react";

import axios from "axios";

const ParentApp = (props) => {
  const userId = "";
  const [data, setData] = useState({
    phone: "",
    childname: "",
    location: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // const handleSubmit = async () => {
  //   try {
  //     const url = 'http://localhost:5000/api/users/632bcb5b37f22bc523a104aa';
  //     axios.put(url, data);
  //     // this.setData({ updatedAt: response.updatedAt})
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  // };

  //  const handleSubmit=async()=> {
  //     // PUT request using axios with async/await
  //     const url = "http://localhost:5000/api/users/:id"
  //     const response = await axios.put(url, data);
  //     this.setData({ updatedAt: response.data.updatedAt });
  // }

  //   const editUser = () => {
  //     console.log(data);
  //     const url = `http://localhost:5000/api/users/${userId}`;
  //     axios.put(url, data);
  //   };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/users/${userId}`, {
        phone: data.phone,
        childname: data.childname,
        location: data.location,
        // employee_name: {employee_name},
        // employee_salary: {employee_salary},
        // employee_age: {employee_age}
      })
      .then((response) => {
        console.log(response);
      });
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         const TimeStamp = position.timestamp
    //         const Time = new Date(TimeStamp).toLocaleTimeString()
    //         setTime(Time)
    //     })
  };
  return (
    <div className="main-parent">
      <form className="child-form-container" onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Child Number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
          required
          className="input"
        />

        <input
          type="text"
          placeholder="Child name"
          name="childname"
          onChange={handleChange}
          value={data.childname}
          required
          className="input"
        />
        <button type="submit" className="button">
          {" "}
          Add a child
        </button>
      </form>
      {console.log(data.childname)}
      <h1 className="where">Where is {data.childname} ?</h1>
      <div className="card">
        <h2>Current Location</h2>
        <br />
        <h1 className="location">{props.location}</h1>
        {/* <br />
        <p className="last-seen">
         { `Last seen on ${time} `}
        </p> */}
      </div>
    </div>
  );
};

export default ParentApp;
