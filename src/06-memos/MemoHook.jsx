import { useState } from "react"
import { useCounter } from "../hooks"


export const MemoHook = () => {

    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={()=>increment()}
            >
                +1
            </button>
        
            <button
                className="btn btn-primary"
                onClick={()=>setShow(!show)}
                >
                show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
