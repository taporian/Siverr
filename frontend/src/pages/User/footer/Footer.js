import React, {useEffect, useState } from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsPinterest} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import { LogoFooter } from '../../../components/styled/Navbar.styled';
export default function Footer() {

    const [height,setHeight] = useState(0);
    const [divElemnt,setDivElement] = useState();


    useEffect(() => {
        if(divElemnt){
            setHeight(divElemnt.clientHeight)
        }
    }, [divElemnt])

    return (
        <>
        <div style={{height:height/1.5,width:"100%"}}></div>
        <div ref={(heightRef)=>setDivElement(heightRef)} className="footer-dark">
      
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className='footer-h3'>Services</h3>
                        <ul className='footer-ul'>
                            <li ><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className='footer-h3'>About</h3>
                        <ul className='footer-ul'>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3 className='footer-h3'>Siverr</h3>
                        <p className='footer-ul'>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social">
                        <a href="#"><BsFacebook style={{'width':'2rem','height':'2rem','margin-bottom':'0.425rem','color':'#7b7d84'}}/></a>
                        <a href="#"><AiFillTwitterCircle  style={{'width':'2.3rem','height':'2.3rem','margin-bottom':'0.425rem','color':'#7b7d84'}} /></a>
                        <a href="#"><BsInstagram style={{'width':'2rem','height':'2rem','margin-bottom':'0.425rem','color':'#7b7d84'}}/></a>
                        <a href="#"><BsPinterest style={{'width':'2rem','height':'2rem','margin-bottom':'0.425rem','color':'#7b7d84'}}/></a></div>
                </div>
                <div className='copyright-container'> 
                <LogoFooter >
                        Siverr
                        </LogoFooter>
                    <p className="copyright"> © Siverr International Ltd. 2021</p>
                </div>
               
            </div>
        </footer>
    </div>
    </>
    )
}
