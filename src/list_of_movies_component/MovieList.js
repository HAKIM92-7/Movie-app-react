import React,{useState} from 'react';
import Modal from 'react-modal';
import './MovieList.css';
import Filter from '../search_component/Filter';
import Rater from '../Rating/Rater';




export default()=>{


const [list,setList]=useState([]);
const [modalIsOpen,setIsOpen]=useState(false) ;   
const [movie,setMovie]=useState({});


        
const ratingValue=(value)=>{


setMovie({...movie,rating:value});
console.log (value);

    
}   
        
        









return( 
<>



<Filter  list={list} />







<button onClick={()=>


setIsOpen(true)



}>+</button>


<Modal  id='modal' isOpen={modalIsOpen} onRequestClose={()=>setIsOpen(false)} shouldCloseOnOverlayClick={false}>

<h2>New Movie Card</h2>

<form onSubmit={e=>{

e.preventDefault();

setList([...list,movie]);




console.log(list);

setIsOpen(false);
setMovie({});

}}>

<label htmlFor='name'>Name Of Movie</label> <input type='text' name='name' placeholder='Enter name of movie' onChange={e=>{



setMovie({name:e.target.value})


}}  required/><br/><br/><br/>

<label htmlFor='story'>Story Of Movie</label> <br/><br/><textarea name='story' rows="10" cols="40" onChange={e=>{


setMovie({ ...movie, story:e.target.value})



}}  required>





</textarea>

<br/><br/>

<Rater ratingValue={ratingValue}/>


<br/><br/>

<label Forhtml="image_url">Image du film</label> <input type='text'  name="image_url" onChange={e=>{


setMovie({ ...movie, image:e.target.value})



}}/><br/><br/>
<input type="submit" value="add movie"/>

</form> <br/><br/>

<button onClick={()=>setIsOpen(false)}>

Fermer le modal

</button>



</Modal>



        




</>

);
}










