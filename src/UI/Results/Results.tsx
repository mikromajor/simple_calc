interface ResultsProps {
  result: number | null;
}
const Results = ({ result }: ResultsProps) => {
  return (
    <div className={"Results"}>
      <h2>Rounded result: </h2>
      <h2>{result}</h2>
    </div>
  );
};
export default Results;
