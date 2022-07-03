
import {useState} from 'react'
import  { useEffect } from 'react';
function UpdateHouse()
{
    const[Category,setCategory_Id]=useState('')
    const[City,setCity]=useState('')
    const[Country,setCountry]=useState('')
    const[Description,setDescription]=useState('')
    const[House_No,setHouse_No]=useState('')
    const[Rent,setRent]=useState('')
    const[State,setState]=useState('')
    const [HId,setHId]=useState('')

    function updateUser()
    {
      let item={HId,Category,City,Country,Description,House_No,Rent,State}
      console.warn("item",item)
      fetch(`https://localhost:44310/api/Houses/${HId}`, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
          
        })
      })
    }

    return(
        <div>
            <h1>House Update Form</h1>
        <form onSubmit={updateUser}>
        <table>
        <tr>
                <td>House Id</td>
                <td> <input type="text"   onChange={(e)=>{setHId(e.target.value)}} className="form-control" required /> <br /></td>
            </tr>
            <tr>
                <td>Category</td>
                <td> <input type="text"  onChange={(e)=>{setCategory_Id(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>City</td>
                <td> <input type="text"  onChange={(e)=>{setCity(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>country</td>
                <td> <input type="text"   onChange={(e)=>{setCountry(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>Description</td>
                <td><input type="text"  onChange={(e)=>{setDescription(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>HouseNo</td>
                <td> <input type="text"  onChange={(e)=>{setHouse_No(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>Rent</td>
                <td>  <input type="text"   onChange={(e)=>{setRent(e.target.value)}} className="form-control" required/> <br /></td>
            </tr>
            <tr>
                <td>state</td>
                <td> <input type="text"  onChange={(e)=>{setState(e.target.value)}} className="form-control" required /> <br /></td>
            </tr>
            <tr>
    <td> <button type="submit" class="btn btn-primary">Update User</button> </td>
    <td></td>
</tr>
        </table>
        </form>
        </div>
    )

}
export default UpdateHouse;
