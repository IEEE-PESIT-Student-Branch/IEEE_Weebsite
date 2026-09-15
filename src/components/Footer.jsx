import { useState } from 'react'
import './Footer.css'

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className='footer-logos'>
                    <div className='logo'>
                        <a href='./'><img src="src/assets/logo.png" alt="Logo_IEEE" /></a>
                    </div>
                </div>

                <div className='footer-legal'>
                    IEEE PESU ECC Student Branch © 2026
                </div>

                <div className='footer-socials'>
                    <a href='https://github.com/IEEE-PESIT-Student-Branch' target='_blank'>GitHub</a>
                    <a href='https://www.instagram.com/ieee_pesuecc_sb/' target='_blank'>Instagram</a>
                    <a href='http://linkedin.com/company/ieee-pesuecc-sb/' target='_blank'>LinkedIn</a>
                </div>
            </footer>
        </>
    );
}

export default Footer