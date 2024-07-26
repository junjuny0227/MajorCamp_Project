import styled from "styled-components";

export const Wrapper = styled.div`
  // position: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

export const Textwrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: #333;
  font-family: SUIT;
  line-height: 40px;(
  `;

export const Title = styled(Text)`
  margin: 10px 550px 30px 0px;
`;

export const Maintext = styled(Text)`
  background: linear-gradient(105.89deg, #706dff, #b2e3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
