import "./list.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from '../../Components/Header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file;
import 'react-date-range/dist/theme/default.css'; // theme css file;
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import SearchItem from "../../Components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options)
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);


  const handleOpenDate = () => {
    setOpenDate(!openDate);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="Destination" >Destinstion</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="check-in-date">check-in-date</label>
              <span onClick={handleOpenDate}>{`${format(location.state.date[0].startDate, "MM-dd-yyyy")} to ${format(location.state.date[0].endDate, "MM-dd-yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />}
            </div>

            <div className="lsItem">
              <label htmlFor="options">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>(per night)</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>(per night)</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" className="lsOptionInput" min={1} placeholder={options.adults} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" className="lsOptionInput" min={0} placeholder={options.children} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    rooms
                  </span>
                  <input type="number" className="lsOptionInput" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />

          </div>
        </div>
      </div>
    </div>
  )
}

export default List
