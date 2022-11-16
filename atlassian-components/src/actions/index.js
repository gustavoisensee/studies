import { backendData } from '../data';

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, backendData);
  });
}
