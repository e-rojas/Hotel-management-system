import Card from '../components/Card';
import axios from 'axios';
import React, { Component } from 'react';
import Nav from '../components/global/Navigation';
import Jumbotron from '../components/Jumbotron';
class Guest extends Component {
  state = {
    rooms: [],
  };
  handleForm = async (e) => {
    const formData = new FormData(e.target);
    const data = { rooms: [] };
    e.preventDefault();
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }
    console.log(data);
    e.target.reset();
    const fetch = await axios.post(
      'http://localhost:4000/rooms/api-rooms',
      data
    );
    this.setState(
      (prevState) => ({
        rooms: [...fetch.data],
      }),
      () => {
        console.log(fetch.data);
      }
    );

    /*  this.setState({ rooms: fetch.data }, () => {
      console.log('state.rooms', this.state.rooms);
    }); */
    console.log(fetch.data);
  };

  render() {
    return (
      <>
        <Nav />
        <Jumbotron handleForm={this.handleForm} />
        <div className="row">
          <div className="col s12">
            {this.state.rooms &&
              this.state.rooms.map((room) => {
                return (
                  <Card
                    key={room._id}
                    images={room.images}
                    roomType={room.type}
                    beds={room.beds}
                    max_occupancy={room.max_occupancy}
                    price={room.cost_per_night}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Guest;
