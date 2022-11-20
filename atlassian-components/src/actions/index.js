import { backendData } from '../data';

const apiUrl = 'https://5ca723bb8e58df0014602da2.mockapi.io';

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, backendData);
  });
}

export async function fetchUsers(limit, page) {
  const url = `${apiUrl}/users?limit=${limit}&page=${page}&sortBy=id&order=desc`;

  try {
    const r = await fetch(url);
    return await r.json();
  } catch {
    return [];
  }
}

export async function createUser(data) {
  const url = `${apiUrl}/users`;
  const options = {
    method: 'POST',
    body: JSON.stringify(data)
  }

  try {
    const r = await fetch(url, options);
    return await r.json();
  } catch {
    return [];
  }
}
