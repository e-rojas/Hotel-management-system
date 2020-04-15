import React from 'react';

const BookingRef = ({ bookProces }) => {
  return (
    <>
      <div className={`row ${bookProces.display === false ? 'hide' : ''}`}>
        <div id="booking-reference" className="row p-3">
          <div className="col s4  ">
            <div className="card-panel grey lighten-3 ">
              <span className="  valign-wrapper ">
                <i className="material-icons "> date_range</i>
                BOOKING
              </span>
            </div>
          </div>
          <div className="col s4 ">
            <div className="card-panel valign-wrapper center-align  ">
              {' '}
              <i className="material-icons "> assignment_turned_in</i>SELECT
            </div>
          </div>
          <div className="col s4 ">
            <div className="card-panel valign-wrapper center-align  ">
              {' '}
              <i className="material-icons "> credit_card</i>PAYMENT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingRef;
