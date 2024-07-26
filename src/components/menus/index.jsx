import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Menus() {
  return (
    <S.Wrapper>
      <Link to="/making" style={{ color: "black", textDecoration: "none" }}>
        <S.MenuContainer>
          <p>나만의 웹페이지 만들러 가기</p>
          <p>&#62;</p>
        </S.MenuContainer>
      </Link>
      <Link to="/example" style={{ color: "black", textDecoration: "none" }}>
        <S.MenuContainer>
          <p>웹페이지 예시 보러 가기</p>
          <p>&#62;</p>
        </S.MenuContainer>
      </Link>
      <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
        <S.MenuContainer>
          <p>팀 소개</p>
          <p>&#62;</p>
        </S.MenuContainer>
      </Link>
    </S.Wrapper>
  );
}

export default Menus;
