

import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items,value)=>{
  return [...new Set(items.map(item=>item[value]))]

}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
   const{
       handleChange,type,city,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
   
//get unique types
       let types= getUnique(rooms,'type');
       //add all

       types=['all',...types];
       //map to jsx
       types =types.map((item,index)=>{
           return (
           <option value={item} key={index}>{item}</option>
           );
       });
/////////////////////////////////////

       let cities= getUnique(rooms,'city');
       //add all

       cities=['all',...cities];
       //map to jsx
       cities =cities.map((item,index)=>{
           return (
           <option value={item} key={index}>{item}</option>
           );
       });



  return (
  <section className="filter-container">
  <Title title="Search Houses"/>
  <form className="filter-form">

      
  {/* select city */}
  <div className="filter-group">
<lable htmlfor="city">City</lable>
<select name="city" id="city" value={city}
className="form-control" onChange={handleChange}>

{cities}
</select>
  </div>


 {/* select type */}
  <div className="filter-group">
<lable htmlfor="type">Property Type</lable>
<select name="type" id="type" value={type}
className="form-control" onChange={handleChange}>

{types}
</select>
  </div>

  {/* House Price */}
<div className="form-group">
    <lable htmlFor="price">
        House price RS.{price}
    </lable>
    <input type="range" name="price" min={minPrice}
     max={maxPrice} id="price" value={price} 
    onChange={handleChange} className="form-control"/>
</div>
  </form>
  </section>
  );
   }

