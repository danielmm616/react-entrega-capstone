import { ReactNode } from "react";
import "./styles.css";

interface AnimatedBoxProps {
  children: ReactNode;
}

const AnimatedBox = ({ children }: AnimatedBoxProps) => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default AnimatedBox;
