import { useSelector, useDispatch } from "react-redux";
import { borrarNota } from "../actions/notes";

const Lista = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
      dispatch(borrarNota(id))
  }

  return (
    <div className="col-md-6">
      <h1>Lista de Tareas</h1>

      {notes &&
        notes.map((item) => (
          <div key={item.id} className="card text-white bg-primary mb-3">
            <div className="card-header">ㅤ</div>
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.texto}</p>
              <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Eliminar</button>
              <span> </span>
              <button className="btn btn-warning">Editar</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Lista;
