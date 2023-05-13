import { formatData } from "@/utils/messageHandle";
import { useState, useEffect } from "react"
export default function TiemContainer() {
    const date = new Date();
    const [currentTime,setCurrentTime]=useState(Date.now());
    const [time, setTime] = useState('');
    useEffect(() => {
        getTime();
    }, [time]);
    const getTime=()=>{
        const timeID=setInterval(()=>{
            setCurrentTime(Date.now());
            const result=formatData(currentTime);
            setTime(result);
            console.log(result);
            clearInterval(timeID);
        },1000)
    }
    return <div className="time-container">
        {time}
    </div>
}