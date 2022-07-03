import React from 'react';
import {useState} from 'react';
import Sidebar from '../Sidebar';

function AddCategory(){
// const[CId,setcid]=useState('')
const[Name,setname]=useState('')


function register1(e)
 {
  // alert('Category ID= '+CId +' Category Name = '+Name)
   let data={Name}

   fetch("https://localhost:44310/api/Categories",{
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
// function h_cid(e)
// {
//    setcid(e.target.value)
// }
function h_name(e)
{
setname(e.target.value);

}
return(
 

     <div className="container mt-3">
        <Sidebar/>
        <h2>Category Form</h2>
           <form onSubmit={register1}>
               {/* <div className="mb-3 mt-3">
           <label for="ID">Category ID</label>
           <input type="text" onChange={h_cid} className="form-control"/>
          </div> */}
       <div className="mb-3">
     <label for="Name">Category Name </label>
<input type="text" onChange={h_name} name="category" className="form-control" />
</div>
 <button type="submit"  className="btn btn-primary">Save</button>
</form>
</div>
    )
    }
export default AddCategory;