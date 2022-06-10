import axios from 'axios';
import { localUrl, token } from '.';

const baseURl = localUrl;
export const mostTraveled = async () => {
  try {
    const response = await axios.get(`${baseURl}v1/accommodations/destinationStats`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.data;
  } catch (error) {
    return {};
  }
};

export const accomodations=async()=>{
  try {
    const response = await axios.get(`${baseURl}v1/accommodations`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.accommodations;
  } catch (error) {
    return {};
  }
}

export const mostTraveledInSingle=async(accommodationId)=>{
  try {
    const response = await axios.get(`${baseURl}v1/accommodations/${accommodationId}/destinationStats`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.data;
  } catch (error) {
    return {};
  }
}
