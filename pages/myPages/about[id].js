import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import Navbar from '../../component/Navbar';
import axios from "axios";

const About = () => {
  // const [singleUser, setSingleUser] = useState("");
    const routers = useRouter()
    const {query: { id }} = routers;

//     const about = async()=>{
//       const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//       const single = user.data;
//     }
// useEffect = (()=>{
// about();
// },[]);
  return <>
  <Navbar/>
  <div>i am about page{id}</div>
  </>;
};

export default About;
