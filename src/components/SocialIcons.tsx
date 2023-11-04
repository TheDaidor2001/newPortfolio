import Link from "next/link";
import { Children } from "react";

interface Props {
  link: string;
  text: string;
  children: JSX.Element;
}

const SocialIcons = ({ link, text, children }: Props) => {
  return (
    <>
      <li className="flex flex-col justify-center items-center text relative">
        <Link href={link} className="ancla" target="_blank">
          {children}
        </Link>
        <p className="border border-secondary-color rounded-xl px-2 py-1 mt-3 absolute top top-10 text-white">
          {text}
        </p>
      </li>
    </>
  );
};

export default SocialIcons;
