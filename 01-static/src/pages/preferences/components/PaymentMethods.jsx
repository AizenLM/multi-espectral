import React, { useState } from 'react';

function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const addPaymentMethod = (e) => {
    e.preventDefault();
    if (cardInfo.cardNumber && cardInfo.expiryDate && cardInfo.cardHolder && cardInfo.cvv) {
      setPaymentMethods([...paymentMethods, cardInfo]);
      setCardInfo({ cardNumber: '', expiryDate: '', cardHolder: '', cvv: '' });
    } else {
      alert('Por favor, completa todos los campos de la tarjeta.');
    }
  };

  const removePaymentMethod = (index) => {
    setPaymentMethods(paymentMethods.filter((_, i) => i !== index));
  };

  return (
    <>
      <form className="form-modif-user animate__animated animate__backInLeft" onSubmit={addPaymentMethod}>
        <div>
          <h2>Métodos de Pago</h2>
          <hr />

          {/* Formulario para añadir un nuevo método de pago */}
          <div>
            <label htmlFor="cardNumber">Número de tarjeta: </label>
            <input
              type="text"
              name="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 1234 5678"
              maxLength="16"
              required
            />
          </div>

          <div>
            <label htmlFor="expiryDate">Fecha de vencimiento: </label>
            <input
              type="month"
              name="expiryDate"
              value={cardInfo.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="cardHolder">Nombre en la tarjeta: </label>
            <input
              type="text"
              name="cardHolder"
              value={cardInfo.cardHolder}
              onChange={handleInputChange}
              placeholder="Nombre Completo"
              required
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV: </label>
            <input
              type="password"
              name="cvv"
              value={cardInfo.cvv}
              onChange={handleInputChange}
              placeholder="***"
              maxLength="3"
              required
            />
          </div>

          <div>
            <button type="submit">Agregar Método de Pago</button>
          </div>
        </div>
      </form>

      {/* Lista de métodos de pago guardados */}
      <div>
        <h3>Métodos de Pago Guardados</h3>
        <hr />
        {paymentMethods.length > 0 ? (
          <ul>
            {paymentMethods.map((method, index) => (
              <li key={index}>
                <p>Tarjeta terminada en **** {method.cardNumber.slice(-4)}</p>
                <p>Vencimiento: {method.expiryDate}</p>
                <p>Nombre: {method.cardHolder}</p>
                <button onClick={() => removePaymentMethod(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes métodos de pago guardados.</p>
        )}
      </div>
    </>
  );
}

export default PaymentMethods;
