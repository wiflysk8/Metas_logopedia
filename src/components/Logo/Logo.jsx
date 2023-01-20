import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import LogoImg from "../../assets/images/logo_plano.png";
import { LogoContainer } from "./Logo.styles";

const Logo = () => {
  const [show, setShow] = useState(false);

  const animationProps = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 1600 },
    delay: 400,
    onStart: () => setShow(true),
  });

  return (
    <animated.div style={animationProps}>
      <LogoContainer>{show && <img src={LogoImg} alt="Logo" />}</LogoContainer>
    </animated.div>
  );
};
export default Logo;
