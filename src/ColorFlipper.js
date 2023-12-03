import React from "react";
export default function ColorFlipper() {
    const [count,setCount] = React.useState(0)
    // const [blue,setBlue] =React.useState()
    // const [red,setRed] =React.useState()
    // const [green,setGreen] =React.useState()
    console.log("in")
    // async function f() {
    //
    //     let promise = new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(i < 56 ? App() : ''), 5000)
    //     });
    //     let result = await promise
    // }

    React.useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 2000);
    },[count]);

    // setTimeout(i < 56? ColorFlipper:'', 5000)
    return(
        <div className='RGB-container'>
            <div style={{backgroundColor: `rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})` , width:`${Math.floor(Math.random()*700)+300}px`,height:`${Math.floor(Math.random()*700)+300}px`,borderRadius:`${Math.floor(Math.random()*300)+1}px`,transition:"2000ms"}}></div>
            {console.log(count)}
        </div>
    )
}
