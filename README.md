# React + Vite

### First Ejercise
1. **Componente asistente.jsx:**
- Creá un nuevo archivo /src/Asistente.jsx.
- Este componente debe recibir tres props: nombre, tarea y emoji.
- Adentro, tiene que mostrar esos datos. Por ejemplo, en un div que contenga un h3 para el nombre y un p para la tarea con su emoji. ¡Usá la desestructuración de props que vimos!

```

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

   
```