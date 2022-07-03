
import React from 'react';
import {useState} from 'react';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import  { useEffect } from 'react';
import UpdateHouse from './UpdateHouse';
import HouseRegister from './HouseRegister';
import TenantRegister from './TenantRegister';


function TenantList(){
    
  

    const[tenant,settenant]= useState([]);

    useEffect(()=>{
        fetch("https://localhost:44310/api/Tenant").then((result)=>{
        result.json().then((resp)=>{
        settenant(resp)
        
        })
        
        })
        
        },[])

        function deleteUser(TId) {
            fetch(`https://localhost:44310/api/Values/${TId}`, {
              method: 'DELETE'
            }).then((result) => {
              result.json().then((resp) => {
                console.warn(resp)
                
              })
            })
          }

    return(
        <div class="container-fluid" style={{marginTop:"100px"}}>
            
            <div class="card-header">
        <tr>
         
        <td style={{paddingleft:"600px"}}><h2>Tenant Details</h2></td>
        </tr></div>
            <div>
    <table class="table table-bordered">
        
        <tr>
            <th>Sr.No</th><th>Name</th><th>Email</th><th>House No</th><th>Contact</th><th>Action</th>
        </tr>
{

    tenant.map((data)=>

    <tr>
        <td>{data.TId}</td>
        <td>{data.Name}</td>
        <td>{data.Email}</td>
        <td>{data.House_No}</td>
        <td>{data.Contact_No}</td>
        <td>   </td>
        <td>
        <button class="btn btn-outline-danger" type="button" onClick={() => deleteUser(data.TId)}>Delete</button>
            {/* <Router>
            
            
            <Link to="/UpdateHouse"><button type="button" class="btn btn-info">Update</button></Link>
            <Link to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
            <Routes>
             <Route path='/UpdateHouse' element={< UpdateHouse />}></Route>
            
             </Routes>
        </Router> */}
        </td>
    </tr>
    
    )
}
    </table>
    </div>
        </div>
        




    );
}
export default TenantList;