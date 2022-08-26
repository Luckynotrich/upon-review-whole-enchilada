import React, { createContext, useContext, useState/* , useEffect  */} from 'react';
import SelectedDataContext from './selected-data-context';
import postReview from '../../post_review'

const ReviewContext = createContext()
const ReviewContextProvider = ({ children }) => {

    const [ revName, setRevName ] = useState('')
    const [ revURL, setRevURL ] = useState()
    const [ revDate, setRevDate ] = useState()
    const [  revRating,setRevRating ] = useState(0)
    const [ reviewTxt, setReviewTxt ] = useState()
    const {propArray} = useContext(SelectedDataContext)
    const handleSubmit = (() => {
        postReview(revName, revURL, revDate, revRating, reviewTxt,propArray);
        console.log(
          'name: ', revName,
          'URL: ', revURL,
          'Date: ', revDate,
          'Rating: ' + revRating,
          'Review: ', reviewTxt,
          'Selected', propArray
        )
      })

    const providerProps = {
        handleSubmit, setRevName, setRevURL, setRevDate, revRating, setRevRating, setReviewTxt
    }
      
    return (
        <ReviewContext.Provider value={ providerProps}>
            {children}
        </ReviewContext.Provider>
    )
}
export {ReviewContextProvider}
export default ReviewContext