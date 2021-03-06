import formatearFecha from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"
import useAdmin from "../hooks/useAdmin"

import { useContext } from 'react'
import ProyectosContext from '../context/ProyectosProvider'

const Tarea = ({ tarea }) => {
    const admin = useAdmin()

    const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } = useContext(ProyectosContext)

    const { descripcion, prioridad, nombre, fechaEntrega, estado, _id } = tarea

    return (
        <div className="border-b p-5 flex justify-between items-center mb-2 bg-white shadow">
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
                <p className="mb-1 text-sm">{ formatearFecha(fechaEntrega) }</p>
                <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
                { estado &&  <p className="bg-green-600 text-xs uppercase p-1 rounded-lg text-white">Completada por: {tarea?.completado?.nombre}</p>}
            </div>

            <div className="flex flex-col gap-2 lg:flex-row">
                {admin && (
                    <button 
                    onClick={() => handleModalEditarTarea(tarea)}
                    className="bg-indigo-600 px-4 py-3 uppercase font-bold text-sm rounded-lg text-white"
                    >Editar</button>
                )}

                <button onClick={() => completarTarea(tarea._id)} className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 py-3 uppercase font-bold text-sm rounded-lg text-white`}>{estado ? "Completa" : "Incompleta"}</button>

                {admin && (
                    <button 
                    onClick={() => handleModalEliminarTarea(tarea)} 
                    className="bg-red-600 px-4 py-3 uppercase font-bold text-sm rounded-lg text-white"
                    >Eliminar</button>
                )}
                
            </div>
        </div>
    )
}

export default Tarea