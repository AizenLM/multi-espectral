import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div>
            <h1>Multi-Espectral</h1>
        </div>
        <div>
            <li>
                <Link>Home</Link>
                <Link>Detectar Bandas</Link>
                <Link>Adjuntar Bandas</Link>
                
            </li>
            <span>Creado por GHAVA</span>
        </div>
    </footer>
  )
}
