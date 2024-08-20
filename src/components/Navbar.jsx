import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full rounded-lg bg-primary text-accent p-3 flex justify-between items-center'>
      <ul className='flex justify-start gap-3 text-sm font-medium'>
        <li><a href="#">Mission</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Resources</a></li>

      </ul>
      <h2>HH</h2>
      <div>
        <a href="#">Advertising</a>
        <a href="#">Get in touch</a>
      </div>
    </nav>
  )
}
