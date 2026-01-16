function DatosCliente({ nombreCliente, setNombreCliente, numeroMesa, setNumeroMesa, errores }) {
  return (
    <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title" >Datos del Cliente y Mesa</h5>

                <div className="row">
                    <div className="col-md-6 mb-3"> 
                            <label className="form-label">
                            Nombre del cliente:
                            <input
                                className="form-control"
                                type="text"
                                value={nombreCliente}
                                onChange={(e) => setNombreCliente(e.target.value)}
                                required
                            />
                            </label>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                        Mesa:
                        <input
                            className="form-control"
                            type="text"
                            value={numeroMesa}
                            onChange={(e) => setNumeroMesa(e.target.value)}
                            required
                        />
                        </label>   
                    </div>
            </div>
        </div>
    </div>
  );
}

export default DatosCliente;
