import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Busqueda from './Busqueda'

import { useContext } from 'react'
import ProyectosContext from '../context/ProyectosProvider'
import AuthProvider from '../context/AuthProvider'

const Header = () => {
  const { handleBuscador } = useContext(ProyectosContext)
  const { cerrarSesion } = useContext(AuthProvider)

  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between md:items-center">
            <h2 className="text-4xl text-sky-600 font-black text-center md:mb-0"><Link to="/proyectos">ManagerWainer</Link></h2>

            

            <div className='flex flex-col gap-4 items-center md:flex-row'>
              <button 
                type='button'
                className='font-bold uppercase'
                onClick={handleBuscador}
              >Buscar Proyecto</button>
                <Link to="/proyectos" className='font-bold uppercase'>Proyectos</Link>

                <button 
                  type='button' 
                  className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold'
                  onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>

                <Busqueda />
            </div>
        </div>
    </header>
  )
}

export default Header