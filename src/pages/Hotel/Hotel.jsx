import { faLocationDot, faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Footer from "../../Components/foooter/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/mailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
    const photos = [
        { src: "https://media.radissonhotels.net/image/radisson-blu-jammu/guestroom/16256-114056-f63652605_3xl.jpg" },
        { src: "https://cdn.businesstraveller.com/wp-content/uploads/2021/09/unnamed-file.jpeg" },
        { src: "https://pix10.agoda.net/hotelImages/13594586/355856489/cfe1f3eff91985ea7d062755b9150562.jpg?ca=22&ce=0&s=1024x768" },
        { src: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlchi-wellness-swimming-pool:Medium?wid=2000&hei=1123" },
        { src: "https://cdn.vox-cdn.com/thumbor/V3BigoVPBcnvIvkz9dz43aaurm8=/0x0:2048x1366/1200x900/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/58074707/Panorama_Room_2_2048x1366.13.jpg" },
        { src: "https://foyr.com/learn/wp-content/uploads/2021/12/hotel-interior-design.jpg" },
    ]

    const [open, setOpen] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleOpen = (i) => {
        setOpen(true);
        setSlideNumber(i);
    }

    const handleMove = (move) => {
        let newSlideNumber;
        if (move === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type={"list"} />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close"
                        onClick={() => { setOpen(false) }}
                    />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l") } />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} className="sliderImg" alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r") } />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book now</button>
                    <h1 className="hotelTitle">Grand hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>123 toronto ave</span>
                    </div>
                    <span className="hotelDistance">Excellent location -500m from center</span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) =>
                            <div key={photo.src} className="hotelImgWrapper">
                                <img onClick={() => { handleOpen(i) }} src={photo.src} alt="photo" className="hotelImg" />
                            </div>
                        )}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">
                                Stay in the heart of Toronto
                            </h1>
                            <p className="hotelDesc">
                                Featuring a year-round outdoor pool, Cosmos Living Modern Studio Near Dubai Marina in Dubai provides accommodations with free WiFi and free private parking for guests who drive.
                                Accommodations are fitted with air conditioning, a fully equipped kitchen with a dining area, a flat-screen TV and a private bathroom with hot tub, a hairdryer and free toiletries. A microwave, a fridge and oven are also provided, as well as an electric tea pot.
                                Spa and wellness facilities including a fitness center and a sauna are at guests' disposal during their stay at the apartment.
                                A bicycle rental service is available at Cosmos Living Modern Studio Near Dubai Marina.
                                Hidden Beach is 2.3 km from the accommodation, while Marina Beach is 2.4 km away. The nearest airport is Al Maktoum International Airport, 25.7 km from Cosmos Living Modern Studio Near Dubai Marina.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>
                                located in the heart of toronto near CN tower, this property has an excellent score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserve or book now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel
