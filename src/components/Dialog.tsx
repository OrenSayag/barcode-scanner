import {FC, useState} from "react";


interface Params {
    onInput: (val: string) => void;
}

const style = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
}

const Dialog: FC<Params> = ({onInput})=> {
    const[input, setInput] = useState<string>('')
    return <div style={{...style, position: "fixed", display: "flex"}}>
        <div style={{flexDirection: "column", border: "1px solid white", padding: "2em 1em", background: "black", display: "flex", gap: 6}}>
            <button onClick={()=>onInput('')}>X</button>
            <h4>Enter Manually:</h4>
            <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>onInput(input)}>Submit</button>
        </div>
    </div>
}

export default Dialog
