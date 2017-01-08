import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div>
      <h2>Contact Us</h2>
      <form>
        <fieldset>
          <p>
            <label htmlFor='fullName'> Name</label>
            <input name='fullName' type='text' />
          </p>
          <p>
            <label htmlFor='email'> Email</label>
            <input name='email' type='email' />
          </p>
          <p>
            <label htmlFor='message'> message</label>
            <textarea cols='30' rows='10' />
          </p>
          <p>
            <button type='submit'>Submit</button>
          </p>
        </fieldset>
      </form>
    </div>
  }
}

export default Contact
