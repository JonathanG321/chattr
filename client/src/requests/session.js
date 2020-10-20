import { API_URL, jsonHeaders } from './base';
import { NetworkError } from '../utils/errors';

export const Session = {
  create(userCredentials) {
    return fetch(`${API_URL}/session`, {
      method: 'POST',
      headers: jsonHeaders,
      credentials: 'include',
      body: JSON.stringify(userCredentials),
    }).then(async (res) => {
      if (res.status !== 200) {
        throw new NetworkError(await res.json());
      }
      return res.json();
    });
  },
  destroy() {
    return fetch(`${API_URL}/session`, {
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => res.json());
  },
};
