import { Fragment } from "react";

interface Props {
  text: string;
  textWhite: string;
}

const MarqueeItem = ({ text, textWhite }: Props) => {
  return (
    <>
      <p
        className={`uppercase text-5xl lg:text-6xl xl:text-8xl text-stroke-1 mx-10`}
      >
        {text} <span className="stroke-white text-stroke-2">{textWhite}</span>
      </p>
    </>
  );
};

export default MarqueeItem;
