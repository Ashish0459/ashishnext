import React, { useState } from 'react';
import { useRouter } from "next/router"



const Snaptest = () => {

    const [cCode, setCompCode] = useState("");
    const routers = useRouter()


    const handleChange = (e) =>{
        const value = e.target.value;
        setCompCode(value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        routers.push({
            pathname: `/snaptest/${cCode}`,
            query: { CompId: cCode },
        });
        // routers.push("/employee")
    }
  return <>
    
        
            <div style={{width:"100% ",background:"gray",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <form style={{width:"50%"}} onSubmit={handleSubmit}>
                        <div className="mb-3  text-center">
                            <label className="form-label text-black font-weight-bold">Company Code</label>
                            <input 
                                type="text"
                                name="comp_code"
                                className="form-control"
                                value={cCode}
                                onChange={handleChange} />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </form>
                    </div>
                  
               
           
   

  </>
    ;
};

export default Snaptest;
