import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import LogoImg from "../../assets/images/logo_plano.png";

const Logo = () => {
  const [show, setShow] = useState(false);

  const animationProps = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 4000 },
    delay: 2000,
    onStart: () => setShow(true),
  });

  return (
    <animated.div style={animationProps}>
      {show && <img src={LogoImg} alt="Logo" className="lg:h-32 lg:mb-3" />}
    </animated.div>
  );
};
export default Logo;
