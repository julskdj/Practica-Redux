import React from "react";
import { useDispatch } from "react-redux";
import { añadirNota } from "../actions/notes";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const dispatch = useDispatch();
  const [{ titulo, texto }, handleInputChnage] = useForm({
    titulo: "",
    texto: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = {
        id: new Date().getTime(),
        titulo,
        texto
    }

    dispatch(añadirNota(note))
    
  };

  return (
    <>
      <div className="col-md-6">
        <h1>Formulario</h1>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4"
            name="titulo"
            autoComplete="off"
            value={titulo}
            onChange={handleInputChnage}
          />
          <textarea
            name="texto"
            className="form-control"
            cols="30"
            rows="10"
            value={texto}
            onChange={handleInputChnage}
          ></textarea>
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="submit">
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
