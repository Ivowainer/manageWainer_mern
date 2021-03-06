import React from 'react'
import capitalizeLetter from '../helpers/capitalizeLetter'
import useProyectos from '../hooks/useProyectos'

import { useContext } from 'react'
import ProyectosContext from '../context/ProyectosProvider'

const Colaborador = ({ colaborador }) => {

    const { handleModalEliminarColaborador } = useContext(ProyectosContext)

    const { nombre, email } = colaborador
        
    return (
        <div className="border-b p-5 flex justify-between items-center mb-2 bg-white shadow">
            <div className="">
                <p>{capitalizeLetter(nombre)}</p>
                <p className='text-sm text-gray-700'>{email}</p>
            </div>

            <div className="">
                <button 
                    onClick={() => handleModalEliminarColaborador(colaborador)}
                    type="button" 
                    className='bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Colaborador