import React from 'react';
import Navbar from '../component/Navbar';
import Link from 'next/link';
import axios from "axios";



export const getStaticProps = async ()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const Users = response.data ;
return{
  props:{Users },
}
};
const Profile = ({Users}) => {

  return <>
      <Navbar/>
    <div className='container-fluid'>
      <div className='row'>
      { 
        Users.map((cureUser)=>{
        return(
          <div className="col-sm-3 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cureUser.name}</h5>
                <p className="card-text"></p>
                <Link href={{
                  pathname: "/myPages/about[id]",
                  query: { id: cureUser.id }
                  }}><a className="btn btn-primary">view user</a></Link>
              </div>
            </div>
        </div>
        )
      })

      }
      </div>
    </div>
  </>;
};

export default Profile;
