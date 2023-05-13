import './index.scss'
export default function SearchBox() {
    return <div className="search-box">
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="..."/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
            </div>
        </div>
    </div>
}