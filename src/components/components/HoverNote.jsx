import { RxQuestionMark } from "react-icons/rx";
import PropTypes from 'prop-types';

export const HoverNote = ({ text }) => {
  return (
    <span className="note">
      <RxQuestionMark />
      <span>{text}</span>
    </span>
  );
};

HoverNote.propTypes = {
  text: PropTypes.string.isRequired,
};