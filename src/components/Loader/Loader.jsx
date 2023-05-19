import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function App() {
  let [loading] = useState(true);
  let [color] = useState("#ffffff");

  return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
  );
}

export default App;