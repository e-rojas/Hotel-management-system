import React from 'react';
import DatePicker from 'react-datepicker';
import { Range } from 'react-materialize';

import 'nouislider/distribute/nouislider.css';
const SearchBarForm = ({
  handleForm,
  setEndDate,
  setStartDate,
  startDate,
  endDate,
}) => {
  return (
    <>
      <form style={{ width: '100%' }} onSubmit={handleForm}>
        <div id="booking-bar" className="row valign-wrapper">
          <div className="col  s2 blue-text text-darken-2">
            <select name="guest" className="browser-default">
              <option defaultValue="" disabled>
                Choose your option
              </option>
              <option value={2}>2 Persons</option>
              <option value={4}>4 Persons</option>
              <option value={6}>6 Persons</option>
            </select>
          </div>
          <div className="col  s2 blue-text text-darken-2">
            <select name="beds" className="browser-default">
              <option defaultValue="" disabled>
                Choose your option
              </option>
              <option value={2}>2 Beds</option>
              <option value={4}>4 Beds</option>
              <option value={6}>6 Beds</option>
            </select>
          </div>
          <div className="col  s2 blue-text text-darken-2">
            <Range max="500" min="50" name="amount" />
          </div>
          <div className="col  s2 blue-text text-darken-2">
            <DatePicker
              name="from"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="col  s2 blue-text text-darken-2">
            <DatePicker
              name="to"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
          <div className="col  s3 blue-text text-darken-2">
            <button
              className="btn waves-effect grey darken-1 waves-light"
              type="submit"
            >
              Check Rates
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBarForm;
