import { searchEngine } from "@/types/propSearch"

export default function EngineSwitchItem(props:{
    searchEngine:searchEngine,
    opt:any,
}) {
    return <li className="engine-switch-item">
        <span 
        onClick={props.opt}
        >{props.searchEngine.name}</span>
        <span>
            <button>x</button>
        </span>
    </li>
}