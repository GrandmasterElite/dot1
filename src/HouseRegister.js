import {useState} from 'react'
import Fileupload from './fileupload' 
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'  
import  Validator  from 'validator';

function HouseRegister()
{

    const[Category,setCategory_Id]=useState('')
    const[City,setCity]=useState('')
    const[Country,setCountry]=useState('')
    const[Description,setDescription]=useState('')
    const[House_No,setHouse_No]=useState('')
    const[Rent,setRent]=useState('')
    const[State,setState]=useState('')


    function register1(e)
    {
       //  alert("category id" +Category_Id+ " Product name "+pr_name)
        
        
        
       let data={Category,City,Country,Description,House_No,Rent,State}

       fetch("https://localhost:44310/api/Houses",{
       method:'POST',
       headers:{
       'Content-Type':'application/json'
       },
       body:JSON.stringify(data)
       }).then((result)=>{
       result.json().then((resp)=>{
       console.warn("resp",resp)
       })
       })
    
}


    function c_id(e)
    {
        setCategory_Id(e.target.value)
    }

    function city(e)
    {
        setCity(e.target.value)
    }

    function country(e)
    {
        setCountry(e.target.value)
    }

    function desc(e)
    {
        setDescription(e.target.value)
    }

    function H_no(e)
    {
        setHouse_No(e.target.value)
    }

    function rent(e)
    {
        setRent(e.target.value)
    }

    function stat(e)
    {
        setState(e.target.value)
    }



  return(

    <div>

<div class="container">

<form onSubmit={register1}>

<table >
    <tr><h2>House Registration</h2></tr>
<tr>
    <td>Category </td>
    <td><input type="text" onChange={c_id} className="form-control" required /></td>
</tr>

<tr>
    <td>City</td>
    <td><input type="text" onChange={city} className="form-control" style={{marginTop :"3px"}}required/></td>
</tr>

<tr>
    <td>Country</td>
    <td><input type="text" onChange={country} className="form-control" style={{marginTop :"3px"}} required/></td>
</tr>

<tr>
    <td>Description</td>
    <td><input type="text" onChange={desc} className="form-control" style={{marginTop :"3px"}} required/></td>
</tr>

<tr>
    <td>House No</td>
    <td><input type="text" onChange={H_no} className="form-control" style={{marginTop :"3px"}} required/></td>
</tr>

<tr>
    <td>Rent</td>
    <td><input type="text" onChange={rent} className="form-control" style={{marginTop :"3px"}} required/></td>
</tr>

<tr>
    <td>State</td>
    <td><input type="text" onChange={stat} className="form-control" style={{marginTop :"3px"}} required/></td>
</tr>

<tr>
    <td><button type="submit" class="btn btn-primary">Register Product</button></td>
    <td></td>
</tr>

</table>
</form>
{/* <tr>
    <td> <Router>
            
            <td>
            <Link  to="/Fileupload"><button type="button" style={{marginRight:"80px"}} class="btn btn-outline-light text-dark">Upload File</button></Link>
            </td>
            <td>
            <Switch>                
                <Route path='/Fileupload' component={ Fileupload }></Route>            
            </Switch></td>
        </Router></td>
</tr> */}
</div>
    </div>
  )
}
export default HouseRegister;