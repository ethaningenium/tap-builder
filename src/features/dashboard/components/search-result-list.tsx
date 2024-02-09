export const SearchResultList = ({ results }) => {
  return (
    <div className=" rounded border border-solid border-neutral-300 w-full mt-1 overflow-y-scroll max-h-14">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};
