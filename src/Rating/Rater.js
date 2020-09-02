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
    
    
{[...Array(5)].map((star,i)=>{

var ratingValue=i+1;


return <label key={i}>
    
    <input type="radio" name="rating" value={ratingValue} onClick={() =>{
        
    this.setState({rating:ratingValue})
    
    this.sendValue(ratingValue);
    
    
    }}  />
    
    <FaStar className="star" size={30}  color={ratingValue<=(this.state.hover||this.state.rating)?'yellow':'black' }
    onMouseEnter={()=>this.setState({hover: ratingValue})}
    onMouseLeave={()=>this.setState({hover: null})}
    
    
    
    />
    
    
    
    
    </label>;




})}




</div>





);















}};
export default Rater;