import React from 'react'
import Button from '../button/Button';
import Container from '../container/Container'
import './contact.css'

function Contact() {
    const handlForm=(e)=>{
        e.preventDefault();
    }

  return (
    <section name="contact" className='se_contact' id='contact'>
        <Container>
        <h1 className="title block text_center ">contact me</h1>
            <form onSubmit={handlForm} action="https://mail.google.com/mail/u/0/#settings/filters" method="post">
                <input type="text" name='name'  placeholder='Your name'/>
                <input type="email" name='email'  placeholder='Email address' />
                <textarea name="message" id="message" placeholder='Message...' ></textarea>
                <Button type='submit'>submit message</Button>
            </form>
        </Container>
    </section>
  )
}

export default Contact