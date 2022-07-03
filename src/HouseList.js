import React from 'react';
import {useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'  
import  { useEffect } from 'react';
import UpdateHouse from './UpdateHouse';
import HouseRegister from './HouseRegister';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
function HouseList(){
    
  

    const[house,sethouse]= useState([]);

    useEffect(()=>{
        fetch("https://localhost:44310/api/Houses").then((result)=>{
        result.json().then((resp)=>{
        sethouse(resp)
        
        })
        
        })
        
        },[])

        function deleteUser(HId) {
            fetch(`https://localhost:44310/api/Houses/${HId}`, {
              method: 'DELETE'
            }).then((result) => {
              result.json().then((resp) => {
                console.warn(resp)
                
              })
            })
          }

    return(
      
        <div style={{marginTop :"100px"}}>
         

    
           <div class="card-header">
        <tr>
        <td><h2>House Details</h2></td>
         <td style={{paddingLeft :"500px"}}> <Router>
            
            <Link to="/HouseRegister"><button type="button" class="btn btn-info">+ New Entry</button></Link>
            <Link style={{paddingLeft :"20px"}} to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
            <Switch>
            
             <Route path='/HouseRegister' component={ HouseRegister }></Route>
             
             </Switch>
        </Router></td> 
     
     
        </tr></div>
        <div class="container-fluid"  >
    <table class="table table-bordered" >
        
        <tr>
            <th>H_Id</th><th>Category</th><th>City</th><th>Country</th><th>Description</th><th>H_No</th><th>Rent</th><th>State</th><th></th><th>Action</th>
        </tr>
{

    house.map((data)=>

    <tr>
        <td>{data.HId}</td>
        <td>{data.Category}</td>
        <td>{data.City}</td>
        <td>{data.Country}</td>
        <td>{data.Description}</td>
        
        
        <td>{data.House_No}</td>
        <td>{data.Rent}</td>
        <td>{data.State}</td>
        <td>   </td>
        <td>
        <button class="btn btn-outline-danger" type="button" onClick={() => deleteUser(data.HId)}>Delete</button>
            <Router>
            <Link to="/UpdateHouse"><button type="button" class="btn btn-info">Update</button></Link>
            <Link to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
            <Switch>
             <Route path='/UpdateHouse' component={UpdateHouse }></Route>            
            </Switch>
        </Router>
        </td>
    </tr>
    
    )
}
    </table>
    </div>
    </div>
        




    );
}
export default HouseList;