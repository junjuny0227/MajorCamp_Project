import React from "react";
import * as S from "./style";
import Menus from "../../components/menus";

function Home() {
  return (
    <S.Wrapper>
      <S.Title>IMTY</S.Title>
      <img src="/img/home.svg" alt="홈" style={{ maxWidth: "50%" }}></img>
      <S.Textwrapper>
        <S.Text>Let me introduce</S.Text>
        <S.Maintext>myself</S.Maintext>
      </S.Textwrapper>
      <Menus />
    </S.Wrapper>
  );
}

export default Home;
