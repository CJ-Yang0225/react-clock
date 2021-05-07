import propTypes from "prop-types";
import styled from "styled-components";
import clockBgImg from "../images/clock.png";

function Clock({ time }) {
  const secHandAngle = time.getSeconds() * 6;
  const minHandAngle = time.getMinutes() * 6;
  const hourHandAngle = time.getHours() * 30 + minHandAngle / 12;

  return (
    <Clock.Container>
      <Wrapper>
        <Clock.HourHand angle={hourHandAngle} />
      </Wrapper>
      <Wrapper>
        <Clock.MinHand angle={minHandAngle} />
      </Wrapper>
      <Wrapper>
        <Clock.SecHand angle={secHandAngle} />
      </Wrapper>
    </Clock.Container>
  );
}

Clock.propsTypes = {
  time: propTypes.instanceOf(Date),
};

Clock.Container = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${clockBgImg});
  background-size: cover;
  border: 4px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.05), inset 0 15px 15px rgba(0, 0, 0, 0.05);

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 999;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/** @type {any} */
const Hand = styled.div`
  display: flex;
  justify-content: center;
  transform: rotateZ(${(/** @type {any} */ props) => props.angle}deg);
`;

Clock.HourHand = styled(Hand)`
  width: 160px;
  height: 160px;

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 80px;
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;
  }
`;

Clock.MinHand = styled(Hand)`
  width: 190px;
  height: 190px;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 90px;
    background: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;
  }
`;

Clock.SecHand = styled(Hand)`
  width: 230px;
  height: 230px;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 150px;
    background: #fff;
    z-index: 12;
    border-radius: 6px 6px 0 0;
  }
`;

export default Clock;
