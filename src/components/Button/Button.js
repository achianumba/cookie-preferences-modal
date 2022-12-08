import './Button.css';

const Button = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type ? `${type}` : 'button'}
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
