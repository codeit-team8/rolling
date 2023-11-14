import axios from 'axios';
import { DOMAIN_TEAM } from '@/api/Domain.js';

/**
 * 대상에게 보내는 메세지 생성 API
 * @param {number} recipientId - 페이퍼 ID
 * @param {string} sender - 보내는 사람
 * @param {string} relationship - 관계(”친구” | “지인” | “동료” | “가족”)
 * @param {string} content - 메세지 내용
 * @param {string} font - 폰트("Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”)
 * @param {string} profileImageURL - 프로필 이미지 URL
 * @returns {Promise<any>}
 */
export async function sendMessage({ recipientId, sender, relationship, content, font, profileImageURL }) {
  try {
    const response = await axios.post(`${DOMAIN_TEAM}/recipients/${recipientId}/messages/`, {
      sender,
      relationship,
      content,
      font,
      profileImageURL,
    });
    return response.data;
  } catch (error) {
    throw new Error('메세지 생성을 실패했습니다.', { cause: { status: error.response.status } });
  }
}

/**
 * 대상에게 보내는 메세지 목록 조회 API
 * @param recipientId - 페이퍼 ID
 * @param {number} limit - 리턴받기 원하는 메세지 대상 객체 수. 기본값은 8
 * @param {number} offset - 가장 앞 객체부터 건너 뛰고 싶은 객체 수.
 * @returns {Promise<any>}
 */
export async function getMessages({ recipientId, limit = '8', offset = '0' }) {
  try {
    const query = `limit=${limit}&offset=${offset}`;
    const response = await axios.get(`${DOMAIN_TEAM}/recipients/${recipientId}/messages/?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('메세지 목록 조회를 실패했습니다.', { cause: { status: error.response.status } });
  }
}

/**
 * 메세지 삭제 API
 * @param {number} messageId - 삭제할 메세지 ID
 * @returns {Promise<void>}
 */
export async function deleteMessage({ messageId }) {
  try {
    await axios.delete(`${DOMAIN_TEAM}/messages/${messageId}/`);
  } catch (error) {
    throw new Error('메세지 생성을 실패했습니다.', { cause: { status: error.response.status } });
  }
}
