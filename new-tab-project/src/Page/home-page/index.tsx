import MessageContainer from "@/components/message-container";
import SearchBox from "@/components/search-box";
export default function HomePage() {

    return (
        <div className="home-page">
            <MessageContainer
            type="time"
            />
            <SearchBox/>

        </div>
    )
}