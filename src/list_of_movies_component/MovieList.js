import React,{useState} from 'react';
import Modal from 'react-modal';
import './MovieList.css';
import Filter from '../search_component/Filter';
import Rater from '../Rating/Rater';




export default()=>{


const [list,setList]=useState([


{name:"We're the millers" ,story:"sorry no story!!",rating:4,
image:'https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_.jpg'},
{name:"Last Man on earth" ,story:"no story too!!",rating:4,
image:'https://images-na.ssl-images-amazon.com/images/I/91Qa6FY7CjL._AC_SY550_.jpg'

},
{
    name:"GOT" ,story:"best story ever!!",rating:5,
    image:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg'},

    {
        name:"Lembi" ,story:"no word to say !!",rating:3,
        image:'https://images-na.ssl-images-amazon.com/images/I/41G9KOJiGqL.jpg'},
        {
            name:"Katkout" ,story:"null!!",rating:0,
            image:'https://m.media-amazon.com/images/M/MV5BZTQ3Mjk3ZjItZGFiYy00MzE0LTlmMjQtYzQ4YzQzNDhhYTkwXkEyXkFqcGdeQXVyNjU0NTU1NjU@._V1_.jpg'}

]);
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

<label htmlFor="image_url">Image du film</label> <input type='text'  name="image_url" onChange={e=>{


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










