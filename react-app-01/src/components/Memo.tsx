import { useCallback, useMemo, useState } from "react";

export const Memo = ()=>{
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = useMemo(()=>{ // To stop call to unwanted function => useMemoHook
        console.warn("IsEven called")
        let i=0;
        while (i<2000000000) i++;
        return counterOne%2===0
    }, [counterOne])

    const fun = useCallback(
      () => {
        console.log("UseCallBack")
      },
      [counterTwo],
    )
    

    return(
        <div>
            <h1>Memo</h1>
           <button onClick={()=>{setCounterOne(preCountOne=> preCountOne+1)}}>Counter One - {counterOne}</button> 
           <span>{isEven? "Even" : "Odd"}</span>
           <button onClick={()=>{setCounterTwo(preCountTwo=> preCountTwo+1)}}>Counter Two - {counterTwo}</button> 
        </div>
    )
}