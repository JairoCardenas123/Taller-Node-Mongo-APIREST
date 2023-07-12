import Empleado from "../models/Empleados.js";

const obtenerEmpleados = async (req,res) => {
      const empleados = await Empleado.find();
      res.json(empleados);
}

export { obtenerEmpleados }

