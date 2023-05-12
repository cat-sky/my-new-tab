import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function UserBtn(){
    return <div className="user-btn">
        <Link to={'/user'}>
            <UserOutlined />
        </Link>
    </div>
}