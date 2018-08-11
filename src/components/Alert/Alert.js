import React from 'react'
import './styles.css'

const Alert = ({type, text}) =>
    <div className={`alert ${type}`}><p>{text}</p></div>

export default Alert
