import "./Warning";

const Warning = ({ message }: { message: string }) => {
  return (
    <div className={"Warning"}>
      <h2>{message}</h2>
    </div>
  );
};
export default Warning;
