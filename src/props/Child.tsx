interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// Child.displayName="hello!" BAD!


export const ChildAsFc: React.FC<ChildProps> = ({color}) => {
  return <div>{color}</div>;
}

ChildAsFc.displayName="hello!"
