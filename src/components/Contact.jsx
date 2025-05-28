import React from 'react'

export default function Contact() {
  return (
    <>
    <h2>Contact Form</h2>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
