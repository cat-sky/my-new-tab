// import { useReducer, useState } from "react";

// import SearchButton from "./search-button";
// import SearchEngineSwitch from "./search-engine-switch";
// import { searchReducer,getInitsearchEngines } from '@/store/search-state'
// import { getFormatSearch } from "@/utils/search";

// import './index.scss';

// export default function SearchBox() {
//     const [searchEngines, dispatch] = useReducer(searchReducer, getInitsearchEngines());
//     //搜索引擎列表的reducer
//     const [searchWord,setSearchWord]=useState('');
//     //搜索关键词
//     const [count, setCount] = useState(0);
//     //当前选择哪个搜索引擎？
//     function onAccountChange(e:any){
//         //同步输入词
//         const value = e.target.value;
//         setSearchWord(value);
//     }
//     const SearchKeyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
//         //监听键盘事件
//         switch (event.code) {
//             case "Enter":
//                 window.location.replace(
//                     getFormatSearch(searchWord,searchEngines[count].url));
//                 break;

//             default:
//                 break;
//         }
//     };
//     return (
//         <div className="search-box" 

//         >
//             <span>
//             <SearchEngineSwitch 
//             searchEngines={searchEngines}
//             optEngines={dispatch}
//             setEngine={[count,setCount]}
//             />
//             <input 
//             type="text" 
//             value={searchWord} 
//             onChange={onAccountChange}
//             onKeyDown={SearchKeyHandler}
//             />
//             <SearchButton clickfn={()=>{
//                 window.location.
//                 replace(getFormatSearch(searchWord,
//                 searchEngines[count].url))
//             }}/>
//             </span>
//         </div>
//     )
// }
import './index.scss'
export default function SeachBar() {
    return (
        <div id="searchBar"><input type="text" id="inputSearch" name="word" size={30} placeholder="搜索" autoComplete="off" /><div className="searchBarBtn" id="btnSearchEng"><i id="iconSearchEng"></i></div><div className="searchBarBtn" id="btnSearch"><i></i></div></div>
    )
}