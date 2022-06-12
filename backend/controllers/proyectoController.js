import Proyecto from "../models/Proyecto.js"

export const obtenerProyectos = async (req, res) => {
    res.send('s')
}

export const nuevoProyecto = async (req, res) => {
    const proyecto = new Proyecto(req.body)
    proyecto.creador = req.usuario._id

    try {
        const proyectoAlmacenado = await proyecto.save()

        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

export const obtenerPoryecto = async (req, res) => {}

export const editarProyecto = async (req, res) => {}

export const eliminarProyecto = async (req, res) => {}

export const agregarColaborador = async (req, res) => {}

export const eliminarColaborador = async (req, res) => {}

export const obtenerTareas = async (req, res) => {}