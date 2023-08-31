import axios from 'axios';
import queryString from 'query-string';
import { DieticianInterface, DieticianGetQueryInterface } from 'interfaces/dietician';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDieticians = async (
  query?: DieticianGetQueryInterface,
): Promise<PaginatedInterface<DieticianInterface>> => {
  const response = await axios.get('/api/dieticians', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDietician = async (dietician: DieticianInterface) => {
  const response = await axios.post('/api/dieticians', dietician);
  return response.data;
};

export const updateDieticianById = async (id: string, dietician: DieticianInterface) => {
  const response = await axios.put(`/api/dieticians/${id}`, dietician);
  return response.data;
};

export const getDieticianById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dieticians/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDieticianById = async (id: string) => {
  const response = await axios.delete(`/api/dieticians/${id}`);
  return response.data;
};
