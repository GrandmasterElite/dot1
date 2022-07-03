
import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
    return (
        <>
        <Hero>
      <Banner title="Find a home you'll love" 
      subtitle="Search" >
      <Link to='/rooms' className="btn-primary" >
          Property
      </Link>
      </Banner>
    </Hero>
     <FeaturedRooms/>
    
     </>
    ); 
  }