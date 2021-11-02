interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div onClick={onClick}>{color}</div>;
};

// Child.displayName="hello!" BAD!

export const ChildAsFc: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div onClick={onClick}>
      {color}{" "}{children}
    </div>
  );
};

ChildAsFc.displayName = "hello!";
