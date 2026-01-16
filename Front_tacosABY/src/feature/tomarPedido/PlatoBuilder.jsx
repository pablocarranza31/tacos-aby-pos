import { useState } from 'react';

function PlatoBuilder({ onAddPlato, productos }) {
  const [cantidadPlato, setCantidadPlato] = useState(1);
  const [subItems, setSubItems] = useState([]);

  const [productoId, setProductoId] = useState('');
  const [cantidadSub, setCantidadSub] = useState(1);
  const [notaPlato, setNotaPlato] = useState('');


  const incrementar = (setter, value) => setter(value + 1);
  const decrementar = (setter, value) => setter(Math.max(1, value - 1));

  const agregarSubItem = () => {
    const producto = productos.find(p => p.id === Number(productoId));
    if (!producto) return;

    const existente = subItems.find(i => i.id === producto.id);

    if (existente) {
      setSubItems(subItems.map(i =>
        i.id === producto.id
          ? { ...i, subCantidad: i.subCantidad + cantidadSub }
          : i
      ));
    } else {
      setSubItems([
        ...subItems,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          subCantidad: cantidadSub,
        }
      ]);
    }

    setProductoId('');
    setCantidadSub(1);
  };

  const agregarPlato = () => {
    if (subItems.length === 0) return;

    const precioUnitario = subItems.reduce(
      (t, s) => t + s.subCantidad * s.precio,
      0
    );

    onAddPlato({
      cantidad: cantidadPlato,
      subItems: subItems.map(s => ({ ...s })),
      descripcion: subItems
        .map(s => `${s.subCantidad} ${s.nombre} ${s.descripcion}`)
        .join(', '),
      notaPlato,
      precioUnitario,
      precioTotal: precioUnitario * cantidadPlato,
    });

    setSubItems([]);
    setCantidadPlato(1);
    setNotaPlato('');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">Crear Plato</h5>
  
        {/* Selector de sub-productos */}
         <div className="crow g-2 align-items-end mb-3">
            <label className="form-label">Producto</label>
            <select
              className="form-select"
              value={productoId}
              onChange={(e) => setProductoId(e.target.value)}
            >
              <option value="">Selecciona</option>
              {productos.map(p => (
                <option key={p.id} value={p.id}>
                  {p.nombre} (${p.precio})
                </option>
              ))}
            </select>
          </div>
          
         <div className="row g-2 align-items-end">
          <div className="col-4">
            <label className="form-label">Cantidad</label>
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={() => decrementar(setCantidadSub, cantidadSub)}
              >
                −
              </button>
              <span className="fs-5 fw-bold mt-2">{cantidadSub}</span>
              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={() => incrementar(setCantidadSub, cantidadSub)}
              >
                +
              </button>
            </div>
          </div> 
        </div>

        {/* Botón agregar sub-producto */}
        <div className="mt-3">
          <button
            type="button"
            onClick={agregarSubItem}
            className="btn btn-outline-primary w-100"
            disabled={!productoId}
          >
            Añadir producto
          </button>
        </div>

        {/* Lista de sub-items */}
        {subItems.length > 0 && (
          <ul className="list-group mt-3">
            {subItems.map(s => (
              <li
                key={s.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>
                  {s.subCantidad} × {s.nombre}
                </span>
                <span>${(s.subCantidad * s.precio).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Nota del plato */}
        <div className="mt-3">
          <label className="form-label">Nota del plato</label>
          <textarea
            className="form-control"
            rows="2"
            placeholder="Nota general para cocina"
            value={notaPlato}
            onChange={(e) => setNotaPlato(e.target.value)}
          />
        </div>

        {/* Botón agregar plato */}
        <div className="d-grid mt-4">
          <button
            type="button"
            onClick={agregarPlato}
            className="btn btn-success"
            disabled={subItems.length === 0}
          >
            Añadir plato al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlatoBuilder;
