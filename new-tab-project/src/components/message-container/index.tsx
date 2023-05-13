import { useState,useEffect } from "react";
import TiemContainer from "./time-contianer";

import './index.scss'

export default function MessageContainer(props:{
    type:'time'|'welcome',
}){
    let message:any=(<div className="message">
        sorry,message component has't this type.
    </div>);
    switch (props.type) {
        case 'time':
            message=<TiemContainer/>
            break;
    
        default:
            break;
    }
    return <div className="message-container">
        {
            message
        }
    </div>
}