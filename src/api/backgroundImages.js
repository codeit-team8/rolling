import axios from 'axios';
import { DOMAIN } from '@/api/Domain.js';

export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${DOMAIN}/background-image/`);
    return response.data;
  } catch (error) {
    throw new Error('배경 화면 정보를 가져오지 못했습니다.', { cause: { status: error.response.status } });
  }
}
