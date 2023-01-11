import FilteredForm from './FilteredForm';
import LilGallery from './LilGallery';

// 1. import the useState and useEffect Hooks from the react library
import { useState, useEffect } from 'react';

// 2. import axios
import axios from 'axios';

const GalleryMom = () => {

    // 3. initialize state to hold the data - AKA pictures - returned from the Unsplash API
    const [ puppyPics, setPuppyPics ] = useState([]);

    // D. initialize another piece of state to represent the photo orientation (which the user has chosen witin the form dropdown)
    const [ photoOrientation, setPhotoOrientation ] = useState(null);

    // 4. define a side effect which will run ONCE on component mount to make a request to Unsplash for some puppy pics
    useEffect( () => {

        axios({
            baseURL: 'https://api.unsplash.com/search/photos',
            params: {
                query: 'puppies',
                per_page: 30,
                page: 2,
                client_id: 'wq2u7lPtNbT44-iHGCbN6Q0FETu3uPSRA9UM84_pNaA',
                // how do we get the user's dropdown selection on from submit into this parameter???
                // D1. pass in the state variable so that this parameter's value is tied to state
                // orientation: null
                orientation: photoOrientation
            }
        }).then( (apiData) => {
            console.log(apiData);
            
            // once the async API request resolves successfully, we will save the returned data in state
            setPuppyPics(apiData.data.results);
        }) 
        // E. in order to ensure that this side effect runs EVERY TIME the user chooses a new photo orientation (+ submits the form with their choice), just pass that state value into the dependency array
            // i.e. we are defining what the execution of this side effect is DEPENDENT on
    }, [photoOrientation] );

    // A. define an event handler which will be passed via props to the LilGallery component 
        // when called, this event handler will log out the value of the chosen picture orientation 
        // we need to calll the preventDefault method which is available on the event object!
    const selectPhotoOrientation = (event, chosenOrientation) => {
        // this function is called when the form is submitted and the default behaviour of a form is to submit data and refresh the page
            // how do we tell this function to NOT to refresh the page?
            event.preventDefault();
            console.log(chosenOrientation);

            // call the state updater function and use the selected option value to update
            setPhotoOrientation(chosenOrientation);
    }   
 
    return (
        <section>
            <FilteredForm handleSubmit={ selectPhotoOrientation }/>
            
            {/* 5. pass down the photos in state to LilGallery as props */}
            {/* B. pass the submit event handler down via props */}
            <LilGallery puppyArray={puppyPics} />
        </section>
    )
}

export default GalleryMom;