import './TenantRegister.css';
import {useState} from 'react'
import  Validator  from 'validator';
function TenantRegister()
{
    const[Name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const[Contact_No,setContact_No]=useState('')
    const[Id_Proof,setId_Proof]=useState('')
    const[House_No,setHouse_No]=useState('')
    const[Registration_Date,setRegistration_Date]=useState('')
    const[Status,setStatus]=useState('')
    const[In_Date,setIn_Date]=useState('')
   
    function register1(e)
    {
       //  alert("category id" +Category_Id+ " Product name "+pr_name)
      
       
       let data={Name,Email,Contact_No,Id_Proof,House_No,Registration_Date,Status,In_Date}

       fetch("https://localhost:44310/api/Tenant",{
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

    function nam(e)
    {
        setName(e.target.value)
    }

    function email(e)
    {
        setEmail(e.target.value)
    }

    function ContactNo(e)
    {
        setContact_No(e.target.value)
    }

    function Hno(e)
    {
        setHouse_No(e.target.value)
    }

    function id(e)
    {
        setId_Proof(e.target.value)
    }

    function rdate(e)
    {
        setRegistration_Date(e.target.value)
    }

    // function statu(e)
    // {
    //     setStatus(e.target.value)
    // }
    function indate(e)
    {
        setIn_Date(e.target.value)
    }

    return(
       
    <div class="cotainer" style={{marginTop :"50px"}}>
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Tenant Registration</div>
                        <div class="card-body">
                            <form class="my-form" onSubmit={register1}>
                                <div class="form-group row" >
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <input type="text" onChange={nam} id="full_name" class="form-control" required name="full-name"/>
                                    </div>
                                </div>

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input type="text" onChange={email} id="email_address" class="form-control" name="email-address" required/>
                                    </div>
                                </div>

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="user_name" class="col-md-4 col-form-label text-md-right">Contact No</label>
                                    <div class="col-md-6">
                                        <input type="text" onChange={ContactNo} id="user_name" class="form-control" name="username" required/>
                                    </div>
                                </div>

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="phone_number" class="col-md-4 col-form-label text-md-right">House Number</label>
                                    <div class="col-md-6">
                                        <input type="text" onChange={Hno} id="phone_number" class="form-control" required/>
                                    </div>
                                </div>

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">Id proof</label>
                                    <div class="col-md-6">
                                    <select class="form-control" onChange={id}>
                                            <option class="form-control" onChange={id}value="Pan Card">Pan Card</option>
                                            <option class="form-control" onChange={id} value="Aadhar">Aadhar</option>
                                            
                                    </select>
                                        {/* <input type="text" id="present_address" class="form-control"/> */}
                                    </div>
                                </div>

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="permanent_address" class="col-md-4 col-form-label text-md-right">Registration Date</label>
                                    <div class="col-md-6">
                                        <input type="date" onChange={rdate} id="permanent_address" class="form-control" name="permanent-address" required/>
                                    </div>
                                </div>

                                {/* <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="nid_number" class="col-md-4 col-form-label text-md-right">
                                                Status</label>
                                    <div class="col-md-6">
                                        <input type="text" onChange={statu} id="nid_number" class="form-control" name="nid-number"/>
                                    </div>
                                </div> */}

                                <div class="form-group row" style={{marginTop :"3px"}}>
                                    <label for="permanent_address" class="col-md-4 col-form-label text-md-right">In Date</label>
                                    <div class="col-md-6">
                                        <input type="date" onChange={indate} id="permanent_address" class="form-control" name="permanent-address" required/>
                                    </div>
                                </div>

                                    <div class="col-md-6 offset-md-4" style={{marginTop :"3px"}}>
                                        <button type="submit" class="btn btn-primary">
                                        Register
                                        </button>
                                    </div>
                                    </form>
                                </div>
                                
                    </div>
                        </div>
                        </div>
                    </div>
            
        
    


  
        





     
    )
}
export default TenantRegister;
