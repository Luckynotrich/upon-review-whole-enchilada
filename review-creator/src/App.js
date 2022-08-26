import React from 'react';
import { hot } from "react-hot-loader/root";
import ReviewForm from "./components/review-form.js";
import { SelectedDataContextProvider } from "./components/contexts/selected-data-context";
import { ReviewContextProvider } from "./components/contexts/review-context";

function reviewCreator() {
  return (

    <div className="Container">

      <SelectedDataContextProvider  >
        <ReviewContextProvider>
          <ReviewForm />
        </ReviewContextProvider>
      </SelectedDataContextProvider>

      ]
    </div>
  );
}

export default hot(reviewCreator);
