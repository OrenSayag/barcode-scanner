import {useRef, useState} from 'react'
import './App.css'
import BarcodeScanner from "./components/BarcodeScanner";
import EnterManuallyButton from "./components/EnterManuallyButton";

function App() {
  const [val, setVal] = useState<string>('')
    const [withChild, setWithChild] = useState<boolean>(false)
    const [withRef, setWithRef] = useState<boolean>(false)
    const ref = useRef<HTMLInputElement>(null)

    const toggleWithChild = () => setWithChild(!withChild)
    const toggleWithRef = () => setWithRef(!withRef)

    const clear = () => setVal('')

  return (
    <div>
        <div>
            {!withChild && <button onClick={toggleWithChild}>Try with Children</button>}
            {withChild && <button onClick={toggleWithChild}>Try without Children</button>}
            {!withRef && <button onClick={toggleWithRef}>Try with ref</button>}
            {withRef && <button onClick={toggleWithRef}>Try without ref</button>}
            <button onClick={clear}>Clear</button>
        </div>
        <BarcodeScanner refEl={withRef ? ref : undefined} onInput={(val: string)=>setVal(val)}>
            {withChild ? <EnterManuallyButton style={{position: "absolute", left: 2, top: 2}} /> : null}
        </BarcodeScanner>
        <div>
            <h4>Barcode Is:</h4>
            <div>{val}</div>
        </div>
        {withRef && <input ref={ref} style={{width: "30em"}} placeholder={"Focus on me. Value will be above me!"} readOnly value={""} />}
    </div>
  )
}

export default App
