/* eslint-disable react/prop-types */
import { TitlePorti } from "./styles";

function Title({ children, ...props }) {
  return (
    <TitlePorti {...props}>
      {children}
    </TitlePorti>
  );
}

export default Title;
