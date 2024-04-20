import Link from 'next/link';

const Button = ({ text, href = '/', iconLeft, iconRight, className }) => {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center gap-3 ${className}`}
    >
      {iconLeft}
      {text}
      {iconRight}
    </Link>
  );
};

export default Button;
