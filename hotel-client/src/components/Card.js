import React from 'react';
import Collapsable from '../components/Collapsable';

import 'materialize-css';
const CardDisplay = (props) => {
  return (
    <div>
      <div className="row _card">
        <div>
          <div className="col s3">
            <img alt="resort" src={props.images[0]} />
          </div>
          <div className="col s7 pt-2 align-even ">
            <span>
              <strong> {props.roomType} </strong>
            </span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <strong>Occupancy: {props.max_occupancy}</strong>
            <strong>
              {' '}
              {props.beds === 1
                ? props.beds + ' Bed'
                : props.beds + ' Beds'}{' '}
            </strong>
          </div>
          <div className="col s2 pt-2 test ">
            <span>
              <strong>$ {props.price} </strong>
            </span>
            <form>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Select</span>
                </label>
              </p>
            </form>
          </div>
        </div>
        <div className="col s12">
          <Collapsable images={props.images} />
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
