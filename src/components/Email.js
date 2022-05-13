import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../style/Email.scss";


export const Email = () => {
    const [subjectText, setSubjectText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [contentText, setContentText] = useState('');
    
    const [sendingEmail, setSendingEmail] = useState(false);

    const form = useRef();
    const subjectInput = useRef();
    const emailInput = useRef();
    const contentInput = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        if(validateFields()){
            setSendingEmail(true);
            emailjs.sendForm('service_lpht0s5', 'template_m8yj6bk', form.current, 'Ng_lvRzLCb008pGkw')
            .then((result) => {
                console.log(`Email sent. HTTP Status: ${result.status}`);
                clearFields();
                setSendingEmail(false);
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    const validateFields = () => {
        let toReturn;
        if(subjectText === '') { 
            console.log('Please add a Subject'); 
            toReturn = false;
        } 
        if(emailText === '') { 
            console.log('Please add your Email'); 
            emailInput.current.classList.add("required--unset")
            toReturn = false 
        } 
        if(contentText === '') { 
            console.log('Please add write something kind'); 
            contentInput.current.classList.add("required--unset")
            toReturn = false 
        } 
        if(contentText !== '' && emailText !== '' && contentText !== '') 
            toReturn = true;
        return toReturn;
    }

    const clearFields = () => {
        setSubjectText('');
        setEmailText('');
        setContentText('');
    }

    return (
            <form className="email" ref={form} onSubmit={sendEmail}>
            <input 
                ref={subjectInput}
                className="email__subject"
                type="text" 
                name="subject" 
                placeholder='Subject' 
                value={subjectText}
                disabled={sendingEmail ? true : false}
                onChange={ e => { 
                    setSubjectText(e.target.value); 
                    subjectInput.current.classList.remove("required--unset")
                }}/>
            <input 
                ref={emailInput}
                className="email__id" 
                type="email" name="email" 
                placeholder='Email' 
                disabled={sendingEmail ? true : false}
                value={emailText}
                onChange={ e => { 
                    setEmailText(e.target.value); 
                    emailInput.current.classList.remove("required--unset")
                }}/>
            <input className="email__sendBtn" 
                type="submit" 
                value="Send" 
                disabled={sendingEmail ? true : false}/>
            <textarea 
                ref={contentInput}
                className="email__content" 
                name="message" 
                placeholder='Message' 
                value={contentText}
                disabled={sendingEmail ? true : false}
                onChange={ e => { 
                    setContentText(e.target.value);
                    contentInput.current.classList.remove("required--unset")
                }}/>
        </form>
    );
};