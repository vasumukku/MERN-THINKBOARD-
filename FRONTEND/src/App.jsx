import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import axios from "./components/axios";
import Forms from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/notes");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state]); // reload when state changes

  return (
    <div>
      <Navbar state={state} setstate={setState} />

      <div className="body-cards-container">
        {state ? (
          <Body data={data} />
        ) : (
          <Forms state={state} setstate={setState} />
        )}
      </div>
    </div>
  );
};

export default App;