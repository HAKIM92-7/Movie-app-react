import React from 'react';
import {FaStar} from "react-icons/fa" ;
import './Rater.css';
class Rater extends React.Component{

    constructor(props) {
        super(props);
        this.state = {rating:null,
            
            hover: null};

            
    };







sendValue=(x)=>{

this.props.ratingValue(x);
};





render (){
return (



<div>
    
    
{[...Array(6)].map((star,i)=>{

var ratingValue=i;


return <label key={i}>
    
    <input type="radio" name="rating" value={ratingValue} onClick={() =>{
        
    this.setState({rating:ratingValue})
    
    this.sendValue(ratingValue);
    
    
    }}  />
    
    <FaStar className="star" size={30}  style={ratingValue===0?{color:'red'}:""} color={ratingValue<=(this.state.hover||this.state.rating)&&
    ratingValue!==0?'yellow':'black' }
    onMouseEnter={()=>this.setState({hover: ratingValue})}
    onMouseLeave={()=>this.setState({hover: null})}
    
    
    
    />
    
    
    
    
    </label>;




})}




</div>





);















}};
export default Rater;