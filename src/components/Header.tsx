import Link from 'next/link';
import React from 'react'

export function Header() {
  return (
    <header>
        <h1>Mis tareas</h1>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Tareas</Link>
                </li>
                <li>
                    <Link href='/hechas'>Hechas</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
