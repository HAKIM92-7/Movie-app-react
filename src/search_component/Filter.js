import React,{useState} from 'react';
import Rater from '../Rating/Rater';
import './Fiter.css';
import {FaStar} from "react-icons/fa" ;

import 'bootstrap/dist/css/bootstrap.css';





export default(props)=>{


const [filter,setFilter]=useState("");
const [stars,setStars]=useState("");



const ratingValue=(value)=>{


    setStars(value);
    console.log (value);
    
        
    }   


const filtredList=props.list.filter(movie=>{
    
   
    
    return  movie.name.toLowerCase().indexOf(filter.toLowerCase())   !==-1  && movie.rating===stars });


return(

<>

<nav className="navbar navbar-dark bg-dark" style={{height:'180px',marginBottom:'30px'}}>
  <a className="navbar-brand">My Best Movies</a>
  
  <div id="search" >
  
  <Rater ratingValue={ratingValue} /> 
  <form className="form-inline"  onSubmit={e=>{


e.preventDefault();

console.log(filter);

}}>
 <input className="form-control mr-sm-2" type="search" placeholder="Search"  aria-label="Search" onChange={
e=> setFilter(e.target.value)


}/> 
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form></div>
</nav>

<div id="movieList">

{ filtredList.map ((el,i)=> (

        <div key={i} className="card" style={{width: '18rem', textAlign:'center'}}>
        <h1 style={{marginLeft:'20px'}}>{el.name}</h1>
        <img src={el.image} class="card-img-top" alt="image non loaded"/>
        <div className="card-body">
            <p className="card-text">{el.story}</p>
            <p > {[...Array(5)].map((star,i)=>{
        
        var ratingValue=i+1;
        
        
        return <label>
            
            <input type="radio" name="rating" value={ratingValue}/><br/><br/>
            
            <FaStar className="star" size={30}   color={ratingValue<=el.rating ?'yellow':'black' }
            
            />
            </label>;
        
        })}</p> 
        </div>
        </div>
        
            
        
        
    ))}

</div>



</>



);






}