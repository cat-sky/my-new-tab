import SearchButton from "./search-button";
import SearchEngineSwitch from "./search-engine-switch";

export default function SearchBox() {

    return (
        <div className="search-box">
            <SearchEngineSwitch/>
            <input type="text" />
            <SearchButton/>
        </div>
    )
}