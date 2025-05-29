import React, {useState} from 'react'

export default function Contact() {
  return (
    <>
    <h2>Contact Form</h2>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName"  />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email"  />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" />
      </label>
      <br />
      <button>Submit</button>
    </form>
    </>
  )
}
