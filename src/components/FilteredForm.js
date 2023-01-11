// 2. imporst useState hook
import { useState } from 'react';

// destructure the handleSubmit functin within the props object
const FilteredForm = ({ handleSubmit }) => {
// const FilteredForm = ({ props }) => {

    // 2A. initialize state to keep track of the user's dropdown selection
    const [ userSelection, setUserSelection ] = useState('placeholder');
     // 2C. declare a handleChange function
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // e.target.value();
        setUserSelection(e.target.value);

        // document.querySelector('select').addEventListener('change', function(){

        // }) 
    }

    return (
        // C. define a submit event listener and call the event handler which has been passed down via props 
            // pass it the userSelection state as an argument
        <form action="" onSubmit={ (event) => handleSubmit(event, userSelection) }
        > 
            {/* anonymous function () => << is there to access event and to prevent function running right when the page is loaded */}
        
            <label htmlFor="filtration">Show me some photos of the following orientation:</label>
            {/* in order to associate a label with an input, use the for and id attributes */}

            {/* in order for React to know selection the user has made within the dropdown, we need to tie th eselect to state */}

            {/* 1. listen for the 'change' event within the dropdown */}
                {/* 1A. pass in the onChange event handler */}

            {/* 2E. use the state for the dropdown to subsequently dictate the value of this element (CLOSE THE STATE LOOP AKA the value of the dropdown be dictated by react)  */}
            <select id="filtration" onChange={ handleChange } value ={userSelection}>
                <option value="placeholder" disabled>Pick a photo orientation:</option>
                <option value="squarish">Square</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
            </select>
            <button>Show me my photos!</button>
        </form>
    )
}

export default FilteredForm;