import axios from 'axios';
import { DOMAIN_TEAM } from '@/api/Domain.js';

/**
 * 롤링 페이퍼 대상 목록 조회 API
 * @param {number} limit - 리턴받기 원하는 질문 대상 객체 수. 기본값은 8
 * @param {number} offset - 가장 앞 객체부터 건너 뛰고 싶은 객체 수.
 * @param {string} sort - "Like" 를 넣으면 총 리액션 순서대로 목록 정렬
 * @returns {Promise<any>}
 */
export async function getRecipients({ limit = '', offset = '', sort = '' }) {
  try {
    const query = `limit=${limit}&offset=${offset}&sort=${sort}`;
    const response = await axios.get(`${DOMAIN_TEAM}/recipients/?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 목록을 가져오지 못했습니다.');
  }
}

/**
 * 롤링 페이퍼 대상 생성 API
 * @param {string} name - 롤링 페이퍼 대상의 이름
 * @param {string} backgroundColor - 롤링 페이퍼 배경색. 기본값은 베이지
 * @param {string} backgroundImageURL - 롤링 페이퍼 배경 URL.(Optional)
 * @returns {Promise<any>}
 */
export async function postRecipients({ name, backgroundColor = 'beige', backgroundImageURL }) {
  try {
    const response = await axios.post(`${DOMAIN_TEAM}/recipients/`, {
      name,
      backgroundColor,
      backgroundImageURL,
    });
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 생성을 실패했습니다.');
  }
}
