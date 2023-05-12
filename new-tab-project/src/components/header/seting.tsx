//click it,show setting page
import { Link } from "react-router-dom";

import { SettingFilled } from "@ant-design/icons";
export default function SettingBtn(){
    return <div className="setting-btn">
        <Link to={'/set'}>
            <SettingFilled/>
        </Link>
    </div>
}