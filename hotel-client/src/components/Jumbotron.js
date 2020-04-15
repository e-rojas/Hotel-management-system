import React, { useState } from 'react';
import SearchBar from '../components/SearchBarForm';

import 'react-datepicker/dist/react-datepicker.css';
const Jumbotron = ({ handleForm }) => {
  const [startDate, setStartDate] = useState(new Date('2014/04/01'));
  const [endDate, setEndDate] = useState(new Date('2014/04/05'));
  return (
    <>
      <div id="jumbotron" className="card-panel grey lighten-2">
        <h4>Bali at Jimbaran Bay</h4>
        <p>Beach Front Village Hotel</p>
        <SearchBar
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleForm={handleForm}
        />
      </div>
    </>
  );
};

export default Jumbotron;
