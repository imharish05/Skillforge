import React from 'react'
import MissingImg from "../assets/Missing.png"
import "../Styles/Missing.css"
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='Missing container d-flex flex-column align-items-center justify-content-center'>
        <img src={MissingImg} className='img-fluid pt-5 mt-4' alt="" id='MissingImg'/>
        <p className='h4 pt-2'>Uh oh! This page drifted away…</p>
        <Link to="/" className='text-decoration-none btn mt-2 border-2 border shadow-1'>Go to Home</Link>
    </div>
  )
}

export default Missing