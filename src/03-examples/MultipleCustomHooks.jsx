import { useCounter, useFetch } from "../hooks/index";
import { Loader } from "./Loader";
import { Quote } from "./Quote";
export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[data.length - 1];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      <Loader isLoading={isLoading}>
        <Quote author={author} quote={quote} />
      </Loader>
      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
