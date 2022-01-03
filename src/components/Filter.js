import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import Rating from './Rating';

function Filter({setSearch,setRating,rating}) {


    return (
        <div className="SearchBar">
            <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <i class="fas fa-search"></i>  </InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={ (e)=> setSearch ((e.target.value))}
    />
  </InputGroup>

<Rating rating={rating} setRating={setRating}/>

        </div>
    )
}

export default Filter ;
