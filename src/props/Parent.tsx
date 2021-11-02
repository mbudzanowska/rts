import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc
      onClick={() => {
        console.log("Cliked!");
      }}
      color={"black"}
    >
      wahteverrr
    </ChildAsFc>
  );
};

export default Parent;
