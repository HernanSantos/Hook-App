import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter();
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author,quote} = !!data && data[0]; //al ser devuelto un array se desestructura de esta forma

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                ? <LoadingQuote />
                : <Quote quote={quote} author={author}/>
            }

            <button 
                className="btn btn-primary" 
                disabled={isLoading}
                onClick={()=>increment()}>
                Next quote
            </button>            
        </>
    )
}