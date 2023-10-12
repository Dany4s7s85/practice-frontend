import './Footer.css'

function Footer(){
    return(
        <div className='FooterMainDiv' type='text'>
            <div className='footerFormDiv'>
                <textarea placeholder="Your Feedback" rows="6" className='footerTextArea'/>
                <button className='footerButton'>Submit</button>
            </div>
        </div>
    )
}

export default Footer;