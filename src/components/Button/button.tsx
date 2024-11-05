import Link from 'next/link';
import './button.css';

interface ButtonProps {
  text: string;
  redirectTo: string;
}

export const Button = ({ text, redirectTo }: ButtonProps) => {
  return (
    <Link href={redirectTo}>
      <button className="poker-button">
        <span className="button-text">{text}</span>
      </button>
    </Link>
  );
};