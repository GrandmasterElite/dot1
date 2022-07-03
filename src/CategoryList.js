import React from 'react'
import { useState } from "react"
import {useEffect} from "react"
import { NavLink } from 'react-router-dom';
import UpdateCategory from './UpdateCategory'
// import {Card,CardBody,CardHeader,Col,Row,Table} from 'reactstrap'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom' 
import AddCategory from './AddCategory'
function Categorylist()
{
const [h_category,setcategory]=useState([])

useEffect(()=>{
fetch("https://localhost:44310/api/Categories").then((result)=>{
    result.json().then((resp)=>{
        setcategory(resp)
    })
})
},[])
function deleteUser(CId) {
    fetch(`https://localhost:44310/api/Categories/${CId}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        
      })
    })
  }

    return(
        <div style={{marginTop :"100px"}}>
               <div>
        <tr class="card-header">
        <td><h2>Category Details</h2></td>
        <td style={{paddingLeft :"500px"}}> 
        <Router>
          <Link to="/AddCategory"><button type="button" class="btn btn-info">+ New Entry</button></Link>
          <Link style={{paddingLeft :"20px"}} to="/"><button type="button" class="btn btn-warning">Refresh</button></Link> 
          <Switch>
            <Route path='/AddCategory' component={ AddCategory }></Route>             
          </Switch>
        </Router></td>
        </tr></div>
            <div></div>
         <div class="container-fluid" id="table-area">
             
              <table class="table table-striped">
              <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Action</th>
             </tr>
                {
                  h_category.map((data)=>
                  <tr key={data.CId}>
                      <td>{data.CId}</td>
                      <td>{data.Name}</td>
                      <td>
        <button class="btn btn-outline-danger" type="button" onClick={() => deleteUser(data.CId)}>Delete</button>
         <Router>
            
            
            <Link to="/UpdateCategory"><button type="button" class="btn btn-info">Update</button></Link>
            <Link to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
            <Switch>
             <Route path='/UpdateCategory' component={UpdateCategory }></Route>             
            </Switch>
        </Router>
           </td>
                  </tr>
                )
              }
          </table>
        </div>
        </div>
    )
}
export default Categorylist;