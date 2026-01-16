function PedidoResumen({ items, onRemove }) {
  const total = items.reduce((t, i) => t + i.precioTotal, 0);

  return (
    <div className="section">
      <h5>Resumen del Pedido</h5>

      {items.length === 0 ? (
        <p>No hay platos</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <strong>{item.cantidad}x</strong> {item.descripcion}
              <span> ${item.precioTotal.toFixed(2)}</span>
              <button onClick={() => onRemove(i)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

export default PedidoResumen;
