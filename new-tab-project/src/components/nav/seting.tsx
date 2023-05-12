
import { NavLink } from "react-router-dom";
import  settingSvg  from "@/assets/setting.svg";
export default function Setting(){
    return <div className="Setting">
        <NavLink to={'/setting'}>
            <img src={settingSvg} alt="" />
        </NavLink>
    </div>
}