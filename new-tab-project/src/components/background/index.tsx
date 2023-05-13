import './index.scss'
export default function Background(props:{
    type:'img'|'video',
    url:string
}){
    let bg:any=<div>null</div>;
    switch (props.type) {
        case 'img':
            bg=<div className="bgimg">
                <img src={props.url} alt="" />
            </div>;
            break;
    
        default:
            bg=(<div className="bg">
                background none this type.
            </div>);
            // return Error('background none this type.');
    }
    return <div className="background">
        {bg}
    </div>
}