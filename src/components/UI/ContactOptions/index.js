import React, {useState, useEffect} from "react";
import emailjs from 'emailjs-com';

import { IoLogoWhatsapp, IoPaperPlaneSharp, IoMailOpenSharp, IoCloseCircleSharp, IoArrowBackSharp, IoInformationCircleSharp, IoCheckmarkDoneOutline } from "react-icons/io5";
import { Button } from "../Button";
import {contactOptions, contactOptions__active, contactOptions__close,contactOptions__back, contactOptions__ul, contactOptions__mailSection, contactOptions__textError, contactOptions__textSuccess } from "./styles.module.scss"


// Email JS
const SERVICE_ID = 'service_pyk3alb'
const TEMPLATE_ID = 'template_hqv3s0o'
const USER_ID = 'user_mZrX1CcjdIZxJajHBBlK8'
// Email JS

const options = [
  {
    title: "Whatsapp",
    link: "https://wa.me/+584120318685",
    icon: () => <IoLogoWhatsapp />,
  },
  {
    title: "Telegram",
    link: "https://t.me/yosefblandinrios",
    icon: () => <IoPaperPlaneSharp />,
  }
]



export const ContactOptions = ({handleClick, show}) => {
  const [mailSection, setMailSection] = useState(false);
  const [response, setResponse] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    setResponse(false)
    const data = {
      to_name: "Yosef",
      from_name: formValues.name,
      from_email: formValues.email,
      message: formValues.message
    }

    if(!formValues.email.includes('@')) {
      setError('Invalid Email')
    } else if (!formValues.email.includes('.com')) {
      setError('Invalid Email')
    } else if (formValues.name.length < 3) {
      setError('Name too small')
    } else if (formValues.message.length < 10) {
      setError('Message too small')
    }
    else {
      setLoading(true)
          emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response)
        setLoading(false)
        setResponse('Message Sent')
      },
      function (err) {
        console.log(err)
        setLoading(false)
        console.log(err.toString())
        setError('Error, message not sent')
      }
    ).catch(e => setError("Error"))
    }
  }
  useEffect(() => {
    setError(false)
    setResponse(false)
    setFormValues({
      name: "",
      email: "",
      message: "",
    })
  },[])

  return (
    
    <article className={show ? `${contactOptions} ${contactOptions__active}`  : contactOptions}>
        <IoCloseCircleSharp  onClick={handleClick} className={contactOptions__close} />
        {mailSection && <IoArrowBackSharp onClick={() => setMailSection(!mailSection)} className={contactOptions__back} />}
      <h3>{mailSection ? "Write the message my friend" : "Which option do you prefer to contact me"}</h3>
      {mailSection ? (
        <ul className={contactOptions__mailSection}>
          <form onSubmit={handleSubmit}>
            
              <label>Name:
                <input onChange={(e) => setFormValues({...formValues, name: e.target.value})} placeholder="Enter your name" />


              </label>

              <label>Email:
                <input onChange={(e) => setFormValues({...formValues, email: e.target.value})} placeholder="Enter your email"/>

              </label>

              <label>Message:

                <textarea onChange={(e) => setFormValues({...formValues, message: e.target.value})} placeholder="What do you want to say me?" />
              </label>
              {error && <span className={contactOptions__textError}><IoInformationCircleSharp />{error}</span>}
              {response && <span className={contactOptions__textSuccess}><IoCheckmarkDoneOutline />{response}</span>}
              <Button title="Send message" loading={loading}/>
          </form>
        </ul>
      ) : (
        <ul className={contactOptions__ul}>
        {options.map((e) => (
          <a  key={e.title} href={e.link}>
            <li>
            {e.icon()}
            <span>{e.title}</span>
          </li>
          </a>
        ))}
        <li onClick={() => setMailSection(!mailSection)}>
          <IoMailOpenSharp />
          <span>Mail</span>
        </li>
      </ul>
      )}
    </article>
    
  )
}