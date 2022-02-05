import React, { useState }from 'react';
import { useRouter } from "next/router"



const Admin = () => {

    const[users,setUsers] = useState({
        email:'',
        password:'',
    });
    const router = useRouter()
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setUsers({...users, [name]: value });
        console.log(users);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();

        router.push({
            pathname: '/admin/dashboard',
        });
    }
  return <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                <div className='card my-5 bg-dark'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control"
                                vlaue={users.email}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input 
                                type="text"
                                name="password"
                                className="form-control"
                                value={users.password}
                                onChange={handleChange} />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
  </>;
};

export default Admin;
