import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-content"  style={{color:"#000000"}}>
                    <i className="service-icon">{icon}</i>
                    <h4  style={{color:"#000000"}}>{title}</h4>  
                </div>         
            </div>
        </Fade>
    )
}

export default SingleService
