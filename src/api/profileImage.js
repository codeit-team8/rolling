import axios from 'axios';
import { DOMAIN } from '@/api/Domain.js';

export async function getProfileImages() {
  try {
    const response = await axios.get(`${DOMAIN}/profile-images/`);
    return response.data;
  } catch (error) {
    throw new Error('프로필 이미지 정보를 가져오지 못했습니다.', { cause: { status: error.response.status } });
  }
}
