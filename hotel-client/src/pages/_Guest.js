import React, { useState } from 'react';

import 'materialize-css';
import Nav from '../components/global/Navigation';
import Jumbotron from '../components/Jumbotron';
import { axiosPost } from '../helpers';
import Card from '../components/Card';
import BookingRef from '../components/BookingRef';
const Guest = () => {
  const [state, setState] = useState({ rooms: [] });
  const [rooms, setRooms] = useState();
  const [bookProces, setBookProcess] = useState({ display: false });
  //            ::::jumbotron::::
  const [startDate, setStartDate] = useState(new Date('2014/04/01'));
  const [endDate, setEndDate] = useState(new Date('2014/04/05'));

  /*  const handleForm = async (e) => {
    const formData = new FormData(e.target);
    const data = {};
    e.preventDefault();
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
      setBookProcess({ display: true });
    }
    setStartDate(new Date('2014/04/01'));
    setEndDate(new Date('2014/04/05'));
    e.target.reset();

    console.log(result.data);
  }; */

  return (
    <>
      <Nav />
      <Jumbotron
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleForm={handleForm}
      />
      <BookingRef bookProces={bookProces} />
      <div className="row">
        <div className="col s12"></div>
      </div>
    </>
  );
};

export default Guest;
