
import {useState} from 'react'
import  { useEffect } from 'react';
function UpdateCategory()
{
    const[CId,setCategory_Id]=useState('')
    const[Name,setName]=useState('')
    

    function updateUser()
    {
      let item={CId,Name}
      console.warn("item",item)
      fetch(`https://localhost:44310/api/Categories/${CId}`, {
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
            <h1>Category Update </h1>
        <form onSubmit={updateUser}>
        <table>
       
            <tr>
                <td>Category</td>
                <td> <input type="text"  onChange={(e)=>{setCategory_Id(e.target.value)}} className="form-control" style={{marginTop :"3px"}} required/> </td>
            </tr>
            <tr>
                <td>Name</td>
                <td> <input type="text"  onChange={(e)=>{setName(e.target.value)}} className="form-control" style={{marginTop :"3px"}} required/> </td>
            </tr>
            <tr>
    <td> <button type="submit" class="btn btn-primary">Update Category</button> </td>
    <td></td>
</tr>
        </table>
        </form>
        </div>
    )

}
export default UpdateCategory;