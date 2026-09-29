import Asistente from './Asistente';
import Message from './Message';
import estilo from './Bienvenida.module.css';

const Bienvenida = () => {
  const asistentes = [
    { nombre: 'Juan ', tarea: 'Revisar correos ', emoji: '📧' },
    { nombre: 'María ', tarea: 'Organizar reuniones ', emoji: '📅' },
    { nombre: 'Carlos ', tarea: 'Actualizar documentos ', emoji: '📝' },
  ];

  return (
    <div>
      <Message>Esto es un Mensaje para Recordar</Message>
      <p className={estilo.phrase}>Estamos encantados de tenerte aquí. Explora nuestras funciones y disfruta de la experiencia.</p>
      <Asistente personas={asistentes} />
    </div>
  );
};

export default Bienvenida;