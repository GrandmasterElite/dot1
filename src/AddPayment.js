
import {useState} from 'react'
import  Validator  from 'validator';
function AddPayment()
{
    const[TenantName,setName]=useState('')
    const[Amount,setAmount]=useState('')
    const[InvoiceNo,setInvoiceNo]=useState('')
    const[Date,setDate]=useState('')
    const[House_No,setHouse_No]=useState('')

    function register1(e)
    {       
       let data={TenantName,Amount,InvoiceNo,Date,House_No}

       fetch("https://localhost:44310/api/Payment",{
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

    
    function h_name(e)
    {
        setName(e.target.value)
    }

    function h_amt(e)
    {
        setAmount(e.target.value)
    }

    function h_Inv(e)
    {
        setInvoiceNo(e.target.value)
    }

    function h_date(e)
    {
        setDate(e.target.value)
    }

    function h_Hno(e)
    {
        setHouse_No(e.target.value)
    }

    

    return(

        <div className="container mt-3">
            
           <form onSubmit={register1}>
               {/* <div className="mb-3 mt-3">
           <label for="ID">Category ID</label>
           <input type="text" onChange={h_cid} className="form-control"/>
          </div> */} <div className="mb-3">
        <h2>Add Payments</h2></div>
       <div className="mb-3">
     <label for="Name">Tenant Name </label>
<input type="text"  onChange={h_name} className="form-control" required/>
</div>
<div className="mb-3">
     <label for="Name">Amount </label>
<input type="text" onChange={h_amt} className="form-control" required/>
</div>
<div className="mb-3">
     <label for="Name">Invoice </label>
<input type="text" onChange={h_Inv} className="form-control" required/>
</div>
<div className="mb-3">
     <label for="Name">Date </label>
<input type="date" onChange={h_date} className="form-control" required/>
</div>
<div className="mb-3">
     <label for="Name">House No </label>
<input type="text" onChange={h_Hno} className="form-control" required/>
</div>
 <button type="submit"  className="btn btn-primary">Save</button>
</form>
</div>
      )
    
}

export default AddPayment;