import axios from 'axios';
import { DOMAIN_TEAM } from '@/api/Domain.js';

export async function getRecipients({ limit = '', offset = '', sort = '' }) {
  try {
    const query = `limit=${limit}&offset=${offset}&sort=${sort}`;
    const response = await axios.get(`${DOMAIN_TEAM}/recipients/?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 목록을 가져오지 못했습니다.');
  }
}
