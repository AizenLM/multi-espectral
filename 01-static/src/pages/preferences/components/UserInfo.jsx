import React from 'react'
import { useAuth } from '../../../auth/AuthProvider'
import Select from 'react-select'
import Flag from 'react-world-flags'

const countryOptions = [
  { value: 'US', label: 'United States', flag: 'US' },
  { value: 'MX', label: 'Mexico', flag: 'MX' },
  { value: 'ES', label: 'Spain', flag: 'ES' },
  { value: 'FR', label: 'France', flag: 'FR' },
  // Agrega más países según sea necesario
];

function UserInfo() {
  const { infoUser, updateUserInfo } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      country: e.target.country.value,
      birthDate: e.target.birthDate.value,
      sex: e.target.sex.value,
      bibliography: e.target.bibliography.value
    };
    updateUserInfo(updatedInfo);
  };

  // Custom option renderer with flag
  const customSingleValue = ({ data }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Flag code={data.flag} style={{ width: 20, height: 15, marginRight: 10 }} />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
        <Flag code={data.flag} style={{ width: 20, height: 15, marginRight: 10 }} />
        {data.label}
      </div>
    );
  };

  return (
    <>
      <form className='form-modif-user animate__animated animate__backInLeft' onSubmit={handleSubmit}>
        <div>
          <h2>Mi Información</h2>
          <hr />
          
          <div>
            <label htmlFor="fullName">Nombres: </label>
            <input
              type="text"
              name="fullName"
              placeholder={`${infoUser.firstName} ${infoUser.lastName}`}
            />
          </div>
          
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder={infoUser.email} />
          </div>
          
          
          <div>
            <label htmlFor="country">País: </label>
            <select name="country" defaultValue={infoUser.country || 'MX'}>
              <option value="">Selecciona un país</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="ES">España</option>
              <option value="FR">Francia</option>
              <option value="DE">Alemania</option>
              <option value="IT">Italia</option>
              <option value="BR">Brasil</option>
              <option value="AR">Argentina</option>
              <option value="CA">Canadá</option>
              <option value="JP">Japón</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
              <option value="RU">Rusia</option>
              <option value="GB">Reino Unido</option>
              <option value="KR">Corea del Sur</option>
              <option value="AU">Australia</option>
            </select>
          </div>

          <div>
            <label htmlFor="birthDate">Fecha de nacimiento: </label>
            <input type="date" name="birthDate" placeholder={infoUser.birthDate || 'Fecha de nacimiento'} />
          </div>
          
          <div>
            <label htmlFor="sex">Sexo: </label>
            <select name="sex" defaultValue={infoUser.sex || ''}>
              <option value="">Selecciona un sexo</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="bibliography">Bibliografía: </label>
            <textarea
              name="bibliography"
              placeholder={infoUser.bibliography || 'Escribe algo sobre ti...'}
            />
          </div>

          <div>
            <button type="submit">Actualizar Información</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserInfo;
