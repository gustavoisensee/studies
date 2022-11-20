import { backendData } from '../data';

const apiUrl = 'https://5ca723bb8e58df0014602da2.mockapi.io';

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, backendData);
  });
}

export async function fetchUsers(limit, page, search = '') {
  const url = `${apiUrl}/users?limit=${limit}&page=${page}&sortBy=id&order=desc&name=${search}`;

  try {
    const r = await fetch(url);
    return await r.json();
  } catch {
    return [];
  }
}

export async function fetchUser(id) {
  const url = `${apiUrl}/users/${id}`;

  try {
    const r = await fetch(url);
    return await r.json();
  } catch {
    return [];
  }
}

export async function saveUser(data) {
  const url = `${apiUrl}/users${data.id ? `/${data.id}` : ''}`;
  const options = {
    method: data.id ? 'PUT' : 'POST',
    body: JSON.stringify(data)
  }

  try {
    const r = await fetch(url, options);
    return await r.json();
  } catch {
    return [];
  }
}
