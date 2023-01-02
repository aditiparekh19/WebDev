import {useEffect, useState} from 'react'

export const FunctionalComponent = ()=>{
    const [count, setCount] = useState(0)
    
    useEffect(()=>{ // Mounting
        console.log("Functional Component: Mounting")
         
    })

    useEffect(()=>{ // Updating
        console.log("Functional Component: Updating")
        
        return ()=>{ // Will Unmount
            console.log("Functional Component: Removed")
        }
    }, [count])

    return(
      <>
      <h1>This is a functional component</h1>
      <h2>{count}</h2>
      <button onClick={()=>{setCount(preCount => preCount+1)}}>Click me!</button>
      </>
    )
}
