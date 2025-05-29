import React, {useState} from 'react'

export default function Contact() {
  const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    function handleChange(e) {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        const {name, value} = e.target
        setContactData({ ...contactData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(contactData)
    }
  return (
    <>
    <h2>Contact Form</h2>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange}/>
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" onChange={handleChange}/>
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}
