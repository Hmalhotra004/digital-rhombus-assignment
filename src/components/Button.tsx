interface Button {
  children: string;
}

const Button = ({ children }: Button) => {
  return (
    <button className="p-4 bg-white rounded-md text-clairvoyant text-xl">
      {children}
    </button>
  );
};

export default Button;
