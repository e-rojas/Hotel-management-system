import axios from 'axios';
export const loadRooms = () => {
  return (dispatch) => {
    return axios
      .get(`process.env.REACT_APP_API/rooms/api-rooms`)
      .then((response) => {
        dispatch(updateRooms(response.data));
      });
  };
};

export const updateRooms = (rooms) => {
  return {
    type: 'SEARCH',
    rooms: rooms,
  };
};
