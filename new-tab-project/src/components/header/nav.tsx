import SettingBtn from "./seting";
import UserBtn from "./user";
export default function Nav(){
    return <div className="nav">
        <div className="nav-item">
            <SettingBtn/>
        </div>
        <div className="nav-item">
            <UserBtn/>
        </div>
        
    </div>
}