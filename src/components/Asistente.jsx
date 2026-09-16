const Asistente = ({personas}) => {
  return (
    <div>
      <ul>
          {personas.map((persona, index) => (
            <li key={index}>
              Nombre: {persona.nombre} 
              Tarea: {persona.tarea}
              Emoji: {persona.emoji}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Asistente;