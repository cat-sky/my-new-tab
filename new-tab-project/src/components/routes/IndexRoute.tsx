import { Route,Routes } from "react-router-dom";
import HomePage from "../../Page/home-page";
import SetPage from "../../Page/set-page";
import AboutPage from "../../Page/about-page";
import UserPage from "@/Page/user-pahe";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/set" element={<SetPage/>}/>
            
        </Routes>
    )
}