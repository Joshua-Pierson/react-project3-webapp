import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid text-center bg-light p-3 mt-5'>
    <p>&copy; {new Date().getFullYear()} To-Do List Maker. All rights reserved.</p>
    <p>Created by Joshua Pierson</p>

    </div>

  )
}
