import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import LogoImg from "../../assets/images/logo_plano.png";

const Logo = () => {
  const [show, setShow] = useState(false);

  const animationProps = useSpring({
    from: { transform: "translateX(-200%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 800 },
    delay: 500,
    onStart: () => setShow(true),
  });

  return (
    <animated.div style={animationProps}>
      {show && <img src={LogoImg} alt="Logo" />}
    </animated.div>
  );
};
export default Logo;
