import styled from '@emotion/styled';

const SpeechBubble = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  height: 300px;
  width: 450px;
  padding: 20px;
  margin: 50px;
  position: absolute;

  background: darkgrey;

  border: 4px solid darkgrey;
  border-radius: 40px;
  -moz-border-radius: 40px;
  -webkit-border-radius: 40px;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 33px solid transparent;
    border-left: 46px solid darkgrey;
    border-bottom: 39px solid transparent;
    margin: 153px 0 0 278px;
  }
`;
export default SpeechBubble;
