import { useState } from 'react'
import './App.css'

function App() {
  const docs= [
    {id:1, nombre:"Juan Perez", especialidad:"Cardiologia"},
    {id:2, nombre:"Maria Gomez", especialidad:"Neurologia"},
    {id:3, nombre:"Luis Rodriguez", especialidad:"Pediatria"},
    {id:4, nombre:"Ana Martinez", especialidad:"Dermatologia"},
    {id:5, nombre:"Carlos Sanchez", especialidad:"Ortopedia"},
    {id:6, nombre:"Sofia Lopez", especialidad:"Ginecologia"},
    {id:7, nombre:"Jorge Ramirez", especialidad:"Oftalmologia"},
    {id:8, nombre:"Laura Torres", especialidad:"Psiquiatria"},
    {id:9, nombre:"Diego Flores", especialidad:"Endocrinologia"},
    {id:10, nombre:"Elena Cruz", especialidad:"Gastroenterologia"}
  ]

  const [reservas,setReservas]=useState([])
  const [doctores,setDoctores]=useState("")

  const addDoctorSeleccionado= ()=>{
    const doctorSeleccionado=docs.find((doc)=>doc.id=== Number(doctores));
    if(doctorSeleccionado){
      setReservas([...reservas,doctorSeleccionado]);
      setDoctores("");
    }
  }


  return (
    <>
      <main> 
        <h1 className='titulo'>consultorio online</h1>
        <div className='contenedor'>
          <h2>seleccione un doctor</h2>
          <select className='selectorM' name="doctor" id="doctor" onChange={(e)=>setDoctores(e.target.value)}>
            <option value="" >doctores</option>
            {docs.map(doctores => (
              <option key={doctores.id} value={doctores.id}>
                {doctores.nombre}
              </option>
            ))}
          </select>
          <button disabled={!doctores} onClick={addDoctorSeleccionado} className='btnSeleccionar'>seleccionar</button>
        </div>

        <div className='contenedorTabla'>
          <table>
            <thead className='contenedorTurnos'>
              <tr >
                <td className='seccion'>medico</td>
                <td className='seccion'>especialidad</td>
                <td className='seccion'>estado</td>
              </tr>
            </thead>
            
            <tbody>
              {reservas.map((reserva)=>(
                <tr key={reserva.id}>
                  <td className='secciones'>{reserva.nombre}</td>
                  <td className='secciones'>{reserva.especialidad}</td>
                  <td className='secciones estado'>reservado</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
