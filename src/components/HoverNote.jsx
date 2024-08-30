import { RxQuestionMark } from "react-icons/rx";

export const HoverNote = ({ text }) => {
  return (
    <span className="note">
      <RxQuestionMark />
      <span>{text}</span>
    </span>
  );
};
