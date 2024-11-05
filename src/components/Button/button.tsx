import { useRouter } from 'next/router';
import './button.css';

interface ButtonProps {
  text: string;
  redirectTo: string;
}

export const Button = ({ text, redirectTo }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirectTo);
  };

  return (
    <button className="poker-button" onClick={handleClick}>
      <span className="button-text">{text}</span>
    </button>
  );
};