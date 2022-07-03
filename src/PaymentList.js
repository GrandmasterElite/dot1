import React from 'react'
import { useState } from "react"
import {useEffect} from "react"
import UpdateCategory from './UpdateCategory'
// import {Card,CardBody,CardHeader,Col,Row,Table} from 'reactstrap'
import { Route, Link, BrowserRouter as Router, Routes, BrowserRouter,Switch} from 'react-router-dom'  
import AddCategory from './AddCategory'
import AddPayment from './AddPayment'
import UpdatePayment from './UpdatePayment'
function PaymentList()
{
const [h_category,setcategory]=useState([])

useEffect(()=>{
fetch("https://localhost:44310/api/Payment").then((result)=>{
    result.json().then((resp)=>{
        setcategory(resp)
    })
})
},[])
function deleteUser(PId) {
    fetch(`https://localhost:44310/api/Payment/${PId}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        
      })
    })
  }

    return(
        <div style={{marginTop :"90px"}}>
               <div class="card-header">
        <tr >
        <td><h2>Payment Details</h2></td>
        <td style={{paddingLeft :"400px"}}> <Router>
            
            <Link to="/AddPayment"><button type="button" class="btn btn-info">+ New Entry</button></Link>
            <Link style={{paddingLeft :"20px"}} to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
             <Switch>
              <Route path='/AddPayment' component={ AddPayment }></Route>             
            </Switch> 
        </Router></td>
        </tr></div>
           
         <div class="container" id="table-area">
             
              <table class="table table-striped">
              <tr>
              <th>Sr.No</th>
              <th>H.No</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Invoice</th>
              <th>Action</th>
             </tr>
                {
                  h_category.map((data)=>
                  <tr key={data.PId}>
                      <td>{data.PId}</td>
                      <td>{data.House_No}</td>
                      <td>{data.TenantName}</td>
                      <td>{data.Amount}</td>
                      <td>{data.Date}</td>
                      <td>{data.InvoiceNo}</td>
                      
                      <td>
                        <button class="btn btn-outline-danger" type="button" onClick={() => deleteUser(data.PId)}>Delete</button>
                        <Router>            
                            <Link to="/UpdatePayment"><button type="button" class="btn btn-info">Update</button></Link>
                            <Link to="/"><button type="button" class="btn btn-warning">Refresh</button></Link>
                            <Switch>
                            <Route path='/UpdatePayment' component={ UpdatePayment }></Route>                            
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
export default PaymentList;
