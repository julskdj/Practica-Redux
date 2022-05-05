import { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import Lista from "./components/Lista";
import Navbar from "./components/Navbar";

function App() {
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Navbar />
      <div className="container">
        <br />
        <br />
        <div className="row g-3">
          <Form />
          <Lista />
        </div>
      </div>
    </>
  );
}

export default App;
