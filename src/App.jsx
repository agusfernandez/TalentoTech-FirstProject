
import Bienvenida from './components/Bienvenida';
import Encabezado from './components/Encabezado';
import CuerpoPosteo from './components/CuerpoPosteo';
import PieDePosteo from './components/PieDePosteo';
import Asistente from './Asistente';


const asistentes = [
  { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '👨‍💻' },
  { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' },
  { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '👩‍💻' }
];

function App() {


  return (
    <>
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
      <Bienvenida />

       {asistentes.map((asistente) => (
        <Asistente
          key={asistente.nombre}
          nombre={asistente.nombre}
          tarea={asistente.tarea}
          emoji={asistente.emoji}
        />
      ))}
    </>
  )
}

export default App
