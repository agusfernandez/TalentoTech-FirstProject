
import Bienvenida from './components/Bienvenida';
import Encabezado from './components/Encabezado';
import CuerpoPosteo from './components/CuerpoPosteo';
import PieDePosteo from './components/PieDePosteo';
import Asistente from './Asistente';

function App() {


  return (
    <>
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
      <Bienvenida />
      <Asistente nombre="Agustina" apellido="Gonzalez" emoji="😊" />
     
    </>
  )
}

export default App
