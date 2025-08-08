import "./formcheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <div className="order-form-container">
      <h2 className="order-form-title">Datos para la orden</h2>
      <form onSubmit={sendOrder} className="order-form">
        <div className="input-group">
          <label htmlFor="fullname">Nombre y apellido</label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            value={dataForm.fullname}
            onChange={handleChangeInput}
            placeholder="Ej: Ana Pérez"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeInput}
            placeholder="Ej: 11 2345 6789"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
            placeholder="tu@correo.com"
            required
          />
        </div>

        <button type="submit" className="order-form-button">
          Realizar Orden
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
