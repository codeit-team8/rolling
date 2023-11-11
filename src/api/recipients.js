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

/**
 * 롤링 페이퍼 대상 조회 API
 * @param {number} id - 조회 대상 ID
 * @returns {Promise<any>}
 */
export async function getRecipientsId({ id }) {
  try {
    const response = await axios.get(`${DOMAIN_TEAM}/recipients/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 대상 조회를 실패했습니다.');
  }
}

/**
 * 롤링 페이퍼 대삭 삭제 API
 * @param {number} id - 삭제 대상 ID
 * @returns {Promise<void>}
 */
export async function deleteRecipientsId({ id }) {
  try {
    await axios.delete(`${DOMAIN_TEAM}/recipients/${id}/`);
  } catch (error) {
    throw new Error('롤링 페이퍼 대상 조회를 실패했습니다.');
  }
}

/**
 * 대상에게 리액션 달기 API
 * @param {number} id - 페이퍼 ID
 * @param {string} emoji - 이모지
 * @param {string} type - 이모지 개수 +/- 여부(”increase” | “decrease”)
 * @returns {Promise<any>}
 */
export async function reactionToRecipient({ id, emoji, type }) {
  try {
    const response = await axios.post(`${DOMAIN_TEAM}/recipients/${id}/reactions/`, {
      emoji,
      type,
    });
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 대상으로 리액션 주기를 실패했습니다.');
  }
}

/**
 * 대상에게 단 리액션 조회 API
 * @param {number} id - 페이퍼 ID
 * @param {number} limit - 리턴받기 원하는 리액션 객체 수. 기본값은 8
 * @param {number} offset - 가장 앞 객체부터 건너 뛰고 싶은 객체 수.
 * @returns {Promise<any>}
 */
export async function getReactionOfRecipient({ id, limit = 8, offset = '' }) {
  try {
    const query = `limit=${limit}&offset=${offset}`;
    const response = await axios.get(`${DOMAIN_TEAM}/recipients/${id}/reactions/?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('롤링 페이퍼 대상의 리액션 조회를 실패했습니다.');
  }
}
