import Asistente from './Asistente';


const Bienvenida = () => {
  const asistentes = [
    { nombre: 'Juan ', tarea: 'Revisar correos ', emoji: '📧' },
    { nombre: 'María ', tarea: 'Organizar reuniones ', emoji: '📅' },
    { nombre: 'Carlos ', tarea: 'Actualizar documentos ', emoji: '📝' },
  ];

  return (
    <div>
      <h1>Bienvenido a nuestra aplicación</h1>
      <p>Estamos encantados de tenerte aquí. Explora nuestras funciones y disfruta de la experiencia.</p>
      <Asistente personas={asistentes} />
    </div>
  );
};

export default Bienvenida;