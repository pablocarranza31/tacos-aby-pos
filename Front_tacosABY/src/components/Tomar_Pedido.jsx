import React, { useState } from 'react';
import './Css/Tomar_Pedido.css';

// --- DEFINICIÓN DEL MENÚ ---
const MENU_PRODUCTOS = [
    { id: '1', nombre: 'Tacos barbacoa', precio: 23 },
    { id: '2', nombre: 'Tacos con queso', precio: 29 },
    { id: '3', nombre: 'Lonche de barbacoa', precio: 65 },
    { id: '4', nombre: 'Lonche con queso', precio: 70 },
];
// -----------------------------

function Tomar_Pedido() {
    const [nombreCliente, setNombreCliente] = useState('');
    const [numeroMesa, setNumeroMesa] = useState('');
    
    // Estados para el Plato Compuesto (el item que se está creando)
    const [cantidadActual, setCantidadActual] = useState(1); 
    const [subItemsActuales, setSubItemsActuales] = useState([]); // Array de sub-productos del plato
        const [descripcionPlatoActual, setDescripcionPlatoActual] = useState(''); // Descripción/Nota general para el Plato Compuesto

    
    // Estados para la selección rápida de sub-items
    const [subProductoSeleccionadoId, setSubProductoSeleccionadoId] = useState('');
    const [subCantidadSeleccionada, setSubCantidadSeleccionada] = useState(1);
    const [DescripcionSeleccionada, setDescripcionSeleccionada] = useState('');
    
    // El array que contendrá todos los pedidos finales
    const [itemsPedido, setItemsPedido] = useState([]);

    // --- LÓGICA DE MANEJO DE ESTADOS ---

    // Función para añadir un sub-producto al plato temporal (subItemsActuales)
    const handleSubItemAdd = () => {
        const producto = MENU_PRODUCTOS.find(p => p.id === subProductoSeleccionadoId);
        
        if (producto && subCantidadSeleccionada > 0) {
            const nuevoSubItem = {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                subCantidad: subCantidadSeleccionada,
                descripcion: DescripcionSeleccionada,// Descripción específica del sub-item
            };
            
            // Verifica si el sub-item ya existe para actualizar la cantidad
            const indexExistente = subItemsActuales.findIndex(item => item.id === nuevoSubItem.id);

            if (indexExistente > -1) {
                 // Si existe, actualiza solo la cantidad
                const updatedSubItems = subItemsActuales.map((item, index) => 
                    index === indexExistente 
                        ? { ...item, subCantidad: item.subCantidad + nuevoSubItem.subCantidad }
                        : item
                );
                setSubItemsActuales(updatedSubItems);
            } else {
                // Si no existe, lo añade
                setSubItemsActuales([...subItemsActuales, nuevoSubItem]);
            }

            // Reiniciamos los selectores
            setSubProductoSeleccionadoId('');
            setSubCantidadSeleccionada(1);
            setDescripcionSeleccionada('');
        }
    };

    // Función para eliminar un sub-item del plato temporal
    const handleRemoveSubItem = (id) => {
        const nuevosSubItems = subItemsActuales.filter(item => item.id !== id);
        setSubItemsActuales(nuevosSubItems);
    };

    // Función para añadir el Plato Compuesto (con sus sub-items) al pedido final
    const handleAddItem = (e) => {
        e.preventDefault(); 

        if (subItemsActuales.length > 0 && cantidadActual > 0) {

             //CALCULA PRECIO UNITARIO DEL PLATO COMPUESTO 
            const precioUnitarioPlato = subItemsActuales.reduce((total, subItem) => {
                // Suma (cantidad del sub-item * precio individual)
                return total + (subItem.subCantidad * subItem.precio);
            }, 0);

            //CALCULA PRECIO TOTAL DEL ITEM 
            const precioTotalItem = cantidadActual * precioUnitarioPlato;
            
            // Crea una descripción legible para mostrar en pantalla y en la comanda
            const descripcionDetallada  = subItemsActuales
                .map(sub => `${sub.subCantidad} ${sub.nombre} $${sub.precio} ${sub.descripcion}`)
                .join(', ');

            const nuevoItem = {
                cantidad: cantidadActual,      // Cantidad de veces que se pide ESTE PLATO MIXTO
                descripcion:descripcionDetallada,                  // Descripción legible
                subItems: subItemsActuales,    // El detalle para el backend/cocina (¡el arreglo!)
                precioUnitario: precioUnitarioPlato,
                precioTotal: precioTotalItem,
                notaPlato: descripcionPlatoActual, // Nota general del plato (ya corregido el estado)
            };
            
            setItemsPedido([...itemsPedido, nuevoItem]);
            
            // Limpia el estado del plato compuesto para el siguiente pedido
            setSubItemsActuales([]);
            setCantidadActual(1);
            setDescripcionSeleccionada('');
            setDescripcionPlatoActual('');
        } else {
             alert('Por favor, completa la cantidad del plato y añade al menos un producto.');
        }
    };

    // Función para manejar el envío del pedido completo (sin cambios)
    const handleSubmitOrder = (e) => {
        e.preventDefault();

        //CALCULA EL PRECIO FINAL TOTAL DEL PEDIDO
        const totalFinal = itemsPedido.reduce((acc, item) => acc + item.precioTotal, 0);

        const pedidoCompleto = {
            nombreCliente,
            numeroMesa,
            items: itemsPedido, // Esto contiene los items compuestos
            total: totalFinal.toFixed(2), // Añadimos el total final
            descripcion: DescripcionSeleccionada,
        };
        
        if (itemsPedido.length > 0 && nombreCliente.trim() && numeroMesa.trim()) {
            console.log('Pedido completo a enviar:', pedidoCompleto);
            alert(`¡Pedido enviado con éxito! Total a pagar: $${totalFinal.toFixed(2)}.`);
            
            // Limpiar formulario:
            setNombreCliente('');
            setNumeroMesa('');
            setItemsPedido([]);
        } else {
            alert('Por favor, completa el nombre, la mesa y añade al menos un producto al pedido.');
        }
    };

    // Función para eliminar un item del pedido final (sin cambios)
    const handleRemoveItem = (index) => {
        const nuevosItems = itemsPedido.filter((_, i) => i !== index);
        setItemsPedido(nuevosItems);
    };

    // --- RENDERIZADO (JSX) ---

    return (
        <div className="tomar-pedido-container">
            <h2 className='header'>Tomar Pedido</h2>
            <form onSubmit={handleSubmitOrder}>
                <div className="section">
                    {/* --- SECCIÓN DATOS DEL CLIENTE (simplificado) --- */}
                    <h5>Datos del Cliente y Mesa</h5>
                    {/* ... (inputs de Nombre y Mesa) ... */}
                    <div className="inputGroup">
                        <label className='label'>Nombre del cliente:
                            <input className='input' type="text" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)} required />
                        </label>
                        <label className='label'>Mesa:
                            <input className='input' type="text" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} required />
                        </label>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* --- SECCIÓN DE CREACIÓN DE PLATO COMPUESTO --- */}
                {/* ---------------------------------------------------- */}
           
                
                
                {/* 1.1 Selector y Añadir Sub-Item */}
                <div className="section">
                    <h5>Crea el Plato </h5>
                    <label className='label'>
                        Cantidad de Producto:
                        <input 
                            type="number" 
                            min="1" 
                            value={subCantidadSeleccionada}
                            onChange={(e) => setSubCantidadSeleccionada(parseInt(e.target.value))}
                            className='input'
                        />
                    </label>
                    <label className='label'>
                        Producto:
                        <select  
                            className='select'
                            value={subProductoSeleccionadoId} 
                            onChange={(e) => setSubProductoSeleccionadoId(e.target.value)}
                        >
                            <option value="">-- Selecciona --</option>
                            {MENU_PRODUCTOS.map(prod => (
                                <option key={prod.id} value={prod.id} 
                                className='option'>
                                    {prod.nombre}
                                    {` ($${prod.precio})`}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className='label'>
                        Descripcion:
                        <input 
                            type="text" 
                            value={DescripcionSeleccionada}
                            onChange={(e) => setDescripcionSeleccionada(e.target.value)}
                            className='input'
                        />
                    </label>
                    <button 
                        type="button"
                        onClick={handleSubItemAdd}
                        disabled={!subProductoSeleccionadoId}
                        className='buttonSecondary'
                    >
                        Añadir Producto al Plato
                    </button>
                </div>

                {/* 1.2 Vista Previa del Plato Compuesto */}
                <div className='section'>
                    <h5>Contenido del Plato actual:</h5>
                    {subItemsActuales.length === 0 ? (
                        <p>Plato vacío. Añade productos.</p>
                    ) : (
                        <ul className='subItemsList'>
                            {subItemsActuales.map((sub, index) => (
                                <li key={sub.id} className='subItemListItem'>
                                    {sub.subCantidad} {sub.nombre} ${sub.precio} {sub.descripcion}
                                    <button 
                                        type="button" 
                                        onClick={() => handleRemoveSubItem(sub.id)}
                                        className='buttonRemove'
                                    >
                                        Quitar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <button 
                        type="button" 
                        onClick={handleAddItem} 
                        disabled={subItemsActuales.length === 0}
                        className='buttonSecondary'
                    >
                     Añadir Plato al Pedido Final
                    </button>
                </div>

                {/* ---------------------------------------------------- */}
                {/* --- SECCIÓN RESUMEN DEL PEDIDO FINAL --- */}
                {/* ---------------------------------------------------- */}
               
                
                <div className="section">
                    <h5>Resumen del Pedido Final ({itemsPedido.length} Platos)</h5>
                    {itemsPedido.length === 0 ? (
                        <p>Aún no hay platos en el pedido.</p>
                    ) : (
                        <ul className='pedidoSummary'>
                            {itemsPedido.map((item, index) => (
                                <li key={index} className='pedidoItem'>
                                    {item.descripcion}

                                    <button
                                        type="button"
                                        onClick={() => handleRemoveItem(index)}
                                        className='buttonRemove' 
                                    >
                                        Eliminar Pedido
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

               

                {/* Cálculo del Subtotal para mostrarlo antes de enviar */}
                {itemsPedido.length > 0 && (
                <h4 className='total'>
                    SUBTOTAL FINAL: $
                    {itemsPedido.reduce((acc, item) => acc + item.precioTotal, 0).toFixed(2)}
                </h4>
                )}

                {/* --- BOTÓN FINAL DE ENVÍO --- */}
                <button 
                    type="submit" 
                    disabled={itemsPedido.length === 0 || !nombreCliente.trim() || !numeroMesa.trim()}
                    className={`buttonPrimary ${itemsPedido.length === 0 || !nombreCliente.trim() || !numeroMesa.trim() ? 'disabledButton' : ''}`}
                >
                    Enviar pedido
                </button>
            </form>
        </div>
    )
}

export default Tomar_Pedido;