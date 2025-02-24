import axios from 'axios';
import { Data } from '../types';

export const fetchPeople = async (): Promise<Data> => {
  return axios
    .get('https://swapi.dev/api/people')
    .then((res) => res.data as Data);
};

export const fetchPlanets = async (): Promise<Data> => {
  return axios
    .get('https://swapi.dev/api/planets')
    .then((res) => res.data as Data);
};