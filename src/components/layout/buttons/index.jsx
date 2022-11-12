import * as s from './styles';
import { IoIosClose } from 'react-icons/io';

export const CloseCircleButton = function (props) {
  return (
    <s.CloseCircleButton {...props}>
      <IoIosClose />
    </s.CloseCircleButton>
  );
};
