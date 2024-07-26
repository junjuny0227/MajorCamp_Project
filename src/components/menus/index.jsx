import React from "react";
import * as S from "./style";

function Menus() {
  return (
    <S.Wrapper>
      <S.MenuContainer>나만의 웹페이지 만들러 가기</S.MenuContainer>
      <S.MenuContainer>웹페이지 예시 보러 가기</S.MenuContainer>
      <S.MenuContainer>팀 소개</S.MenuContainer>
    </S.Wrapper>
  );
}

export default Menus;
