import React from 'react'
import HashLoader from 'react-spinners/HashLoader';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

const CustomLoader = () => {
  return (
    <HashLoader
        color={"green"}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default CustomLoader