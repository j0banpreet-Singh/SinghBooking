import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                className="pListImg" 
                src="https://thumbs.dreamstime.com/b/beautiful-hotel-room-25954964.jpg" 
                alt="hotels" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img 
                className="pListImg" 
                src="https://cdngeneralcf.rentcafe.com/dmslivecafe/2/23042/Main%20level%20Common%20Low%20Res%20(1).jpg?crop=(0,87.1666666666672,800,483)&cropxunits=800&cropyunits=532&quality=85&scale=both&" 
                alt="apartments" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>1234 apartments</h2>
                </div>
            </div>

            <div className="pListItem">
                <img
                className="pListImg" 
                src="https://www.theindia.co.in/blog/wp-content/uploads/2021/03/Heritage-Village-Resort-Spa.jpeg" 
                alt="resorts" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>1234 resorts</h2>
                </div>
            </div>

            <div className="pListItem">
                <img 
                className="pListImg"                
                src="https://i0.wp.com/www.favouritehomes.com/wp-content/uploads/2021/12/luxury-villa.jpg?fit=700%2C467&ssl=1" 
                alt="villas" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>1234 villas</h2>
                </div>
            </div>

            <div className="pListItem">
                <img 
                className="pListImg"                
                src="https://media.architecturaldigest.com/photos/560460aec4e90f983393dd5f/master/pass/dam-images-decor-2013-09-ralph-lauren-ralph-lauren-13-ranch-guest-cabin.jpg" 
                alt="cabins" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>1234 cabins</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList
