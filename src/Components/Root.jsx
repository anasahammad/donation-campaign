import  { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

const Root = () => {
    const loc = useLocation();

    useEffect(()=>{
        if(loc.pathname === "/"){
            document.title = `Donation- Home`;
        } else{
            document.title = `Donation ${loc.pathname.replace("/", "-")}`
        } 
        if(loc.state){
            document.title = loc.state;
        }
    }, [loc.pathname, loc.state])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;