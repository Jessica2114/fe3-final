import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length <= 5 || !formData.email.includes("@")) {
      setFormError("Debe contener al menos 5 caracteres.");
      setFormSuccess(false);
    } else {
      console.log("Formulario enviado:", formData);
      setFormSuccess(true);
      setFormError("");
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {formError && <p>{formError}</p>}
      {formSuccess && (
        <p>
          Gracias {formData.fullName}, te contactaremos lo antes posible vía
          email.
        </p>
      )}
    </div>
  );
};

export default Form;
