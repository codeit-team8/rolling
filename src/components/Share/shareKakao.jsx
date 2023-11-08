export default function shareKakao(Kakao, url) {
  Kakao.Share.sendCustom({
    templateId: 100469,
    templateArgs: {
      title: '제목 영역입니다.',
      description: '설명 영역입니다.',
      url: url,
    },
  });
}
