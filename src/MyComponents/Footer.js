import React from 'react'
import './footer.css'

const Footer = () => {
  let footerStyle = {
    position : "relative",
    top : "99vh",
    width : "100%",
  }
  return (
    <footer className='bg-dark text-light text-center' style={footerStyle}>
      <p className='my-2 py-2'>Copyright &copy; MyTodosList.com</p>
      
    </footer>
  )
}

export default Footer
