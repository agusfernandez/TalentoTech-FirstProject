const Asistente = ({nombre, apellido, emoji}) => {
  return (
    <div>
      <h2>Asistente</h2>
      <p>El nombre completo es {nombre} ,{apellido}</p>
      <p>Emoji: {emoji}</p>
    </div>
  );
};

export default Asistente;