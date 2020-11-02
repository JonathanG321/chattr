import { API_URL, jsonHeaders } from './base';
import { NetworkError } from '../utils/errors';

export const User = {
  getCurrentUser() {
    return fetch(`${API_URL}/users/current`, {
      credentials: 'include',
    }).then(async (res) => {
      if (res.status !== 200) {
        throw new NetworkError(await res.json());
      }
      return res.json();
    });
  },
  create(newUser) {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: jsonHeaders,
      credentials: 'include',
      body: JSON.stringify(newUser),
    }).then(async (res) => {
      if (res.status !== 200) {
        throw new NetworkError(await res.json());
      }
      return res.json();
    });
  },
};
