import { backendData } from '../data';

const apiUrl = 'https://5ca723bb8e58df0014602da2.mockapi.io';

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, backendData);
  });
}

export async function fetchUsers(limit, page) {
  const url = `${apiUrl}/users?limit=${limit}&page=${page}`;

  try {
    const r = await fetch(url);
    return await r.json();
  } catch {
    return [];
  }
}
