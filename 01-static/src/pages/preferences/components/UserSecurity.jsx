import React from 'react'

function UserSecurity() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <>
    <form className='form-modif-user animate__animated animate__backInLeft' onSubmit={handleSubmit}>
      <div>
        <h2>Seguridad</h2>
        <hr />
        
        <div>
          <label htmlFor="password">Contraseña actual: </label>
          <input
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
        <h2>Cambiar contraseña</h2>
        <div>
          <label htmlFor="password">Nueva contraseña: </label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="password">Repita la contraseña nueva: </label>
          <input type="password" name="password" />
        </div>

        <div>
          <button type="submit">Cambiar contaseña</button>
        </div>
      </div>
    </form>
  </>
  )
}

export default UserSecurity