import React, { useState, useEffect, useRef, useContext } from "react";
import axios from 'axios'
import Header from "./header";
import Select from "./select.js";
import GetReview from "./get-review";
import SelectedDataContext from "./contexts/selected-data-context.js";
const userId = '11d6af03-20ac-4f04-a21c-28ec418a2c18'

const ReviewForm = () => {
  const { clearPropArray } = useContext(SelectedDataContext)
  const [categories, setCategories] = useState([]);
  const [catState, setCatState] = useState("");


  let _categories = useRef()
  let isSubscribed = useRef(true);

  useEffect(() => {
    async function GetCats() {
      await axios.get("/api/categories/" + userId, (request, response, error) => {
        if (error) { throw error }
          _categories.current = response
          
         setCategories(_categories.current);
      });
    

    return () => (isSubscribed.currentValue = false)
  }
    GetCats();

}, []);


const chooseCat = (e) => {
  const id = e.target.value;
  const selectedCat = categories.filter((cat) => cat.id === id)[0];

  if (selectedCat) {
    clearPropArray();
    setCatState(selectedCat);
  }
};

return (
  <div className="container">
    <Header />
    <form>
      {categories.length > 0 ? (
        <Select categories={categories} onSelect={chooseCat} key={categories.id} />
      ) : (
        " Categories currently unavailable. Please check the internet connection and refresh the browser"
      )}
    </form>

    {catState && [
      <GetReview pros={catState.pros} cons={catState.cons} />
    ]
    }
  </div>
);
}

export default ReviewForm;
