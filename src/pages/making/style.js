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

export const Text = styled.p`
  font-family: SUIT;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
`;

export const Title = styled(Text)`
  margin: 10px 550px 30px 0px;
  font-size: 32px;
  font-weight: 900;
  line-height: 40px;
  margin-bottom: 110px;
`;

export const Minibox = styled.div`
  width: 328px;
  height: 63px;
`;
