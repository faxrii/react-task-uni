import React from 'react'
import "./Contacts.css"
function Contacts() {
  return (
    <div className="container">
    <form className="form">
      <h1 className="form-title">Message me</h1>
      <div className="grid">
        <div className="form-group">
          <input type="text" name="name" id="name" placeholder="Full name"/>
        </div>
        <div className="form-group">
          <input type="email" name="email" id="email" placeholder="Your email"/>
        </div>
        <div className="form-group">
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" placeholder="Your message goes here"></textarea>
        </div>
        <button type="submit" className="btn">Send message</button>
      </div>
    </form>
  </div>
  )
}

export default Contacts
