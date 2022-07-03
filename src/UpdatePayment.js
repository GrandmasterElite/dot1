import {useState} from 'react'
import  { useEffect } from 'react';
function UpdatePayment()
{
    const[TenantName,setTenantName]=useState('')
    const[Amount,setAmount]=useState('')
    const[InvoiceNo,setInvoiceNo]=useState('')
    const[Date,setDateTime]=useState('')
    const[House_No,setHouse_No]=useState('')
    const [PId,setPId]=useState('')

    function updateUser()
    {
      let item={TenantName,Amount,InvoiceNo,Date,PId,House_No}
      console.warn("item",item)
      fetch(`https://localhost:44310/api/Payment/${PId}`, {
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
            <h2>Payment Update Form</h2>
        <form  onSubmit={updateUser} >
        <table>
        <tr>
                <td> Id</td>
                <td> <input type="text"  onChange={(e)=>{setPId(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
            </tr>
            <tr>
                <td>Name</td>
                <td> <input type="text"  onChange={(e)=>{setTenantName(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
            </tr>
            <tr>
                <td>Amount</td>
                <td> <input type="text"  onChange={(e)=>{setAmount(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
            </tr>
            <tr>
                <td>Invoice No</td>
                <td> <input type="text"   onChange={(e)=>{setInvoiceNo(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
            </tr>
            <tr>
                <td>Date</td>
                <td><input type="date"  onChange={(e)=>{setDateTime(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
            </tr>
             <tr>
                <td>HouseNo</td>
                <td> <input type="text"  onChange={(e)=>{setHouse_No(e.target.value)}} style={{marginTop :"3px"}} className="form-control" required/> </td>
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
export default UpdatePayment;
