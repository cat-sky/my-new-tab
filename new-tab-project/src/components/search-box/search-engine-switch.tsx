import { searchEngine } from "@/types/propSearch"
import { useState } from "react";

import errorSVG from '@/assets/error.svg' 

import EngineSwitchItem from "./engine-switch-item";
import { getSiteIco } from "@/utils/search";

export default function SearchEngineSwitch(props: {
    searchEngines: searchEngine[],
    optEngines: unknown,
    setEngine:any[2]
}) {
    const [count,setCount]=props.setEngine;
    const [active,setActive]=useState(false);
    return <span className="search-engine-switch">
        <ul>
            <button className="now-search-engine"
            title={props.searchEngines[count].name}
            >
                <img 
                src={
                    getSiteIco(props.searchEngines[count].url)
                } 
                alt="error" />
            </button>
            {
                props.searchEngines.map((item, index) => {
                    return <EngineSwitchItem
                        key={index}
                        searchEngine={item}
                        opt={() => {
                            setCount(index);
                        }}
                    />
                })
            }
        </ul>
        <div>
            {count}
        </div>
    </span>
}