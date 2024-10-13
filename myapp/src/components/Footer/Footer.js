import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="container" style={{width:'883px'}}>
        <div className="contact-section" style={{background:'0', width:'770px'}}>
            <div className="contact-title">
                Liên hệ với chúng tôi:
            </div>
            <a href="" className="btn btn-contact">
                <img src="https://i.transtechvietnam.com/uploads/block_thumbnail_images/ab2d5ad2db98b8881fbe804382227081.png" alt="Email Icon"/> 
                <span>Email</span>
            </a>
            <a href="" className="btn btn-contact">
                <img src="https://i.transtechvietnam.com/uploads/block_thumbnail_images/7fb2ffa15d6aada56ed78a4ed3d95416.png" alt="Zalo Icon"/>
                Zalo
            </a>
            <a href="" className="btn btn-contact">
                <img src="https://i.transtechvietnam.com/uploads/block_thumbnail_images/be7011a2231ef87bb804fe20b64a47d7.jpg" alt="Call Icon"/>
                Call
            </a>
            <div className="footer-text">
                by Trans Tech
            </div>
        </div>
    </div>
  )
}

export default Footer;