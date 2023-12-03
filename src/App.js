import './App.css';
import ColorFlipper from "./ColorFlipper";
// let i=0
function App() {
    // i+=10
    // async function f() {
    //
    //     let promise = new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(i < 56 ? App() : ''), 5000)
    //     });
    //     let result = await promise
    // }

    // setTimeout(i < 56? App():'', 5000)
    // setTimeout(function (){App()},1000)
    return (
        // <div>
        //     <div style={{backgroundColor: `rgb(${i},${i + 10},${i + 20})`}} ></div>
        //     {console.log(i)}
        // </div>
        <ColorFlipper />
    );

}

export default App;
