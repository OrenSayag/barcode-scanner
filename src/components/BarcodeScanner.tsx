import {FC, ReactNode, RefObject, useEffect, useState} from "react";
import onScan from "onscan.js";
import Dialog from "./Dialog";

interface Params {
    onInput: (val: string) => void;
    children?: ReactNode;
    refEl?: RefObject<HTMLElement>
}

const BarcodeScanner: FC<Params> = ({ onInput, children , refEl}) => {
    const [dialog, setDialog] = useState<boolean>(false);
    const toggleDialog = () => setDialog(!dialog);
    useEffect(() => {
        if(refEl && !refEl.current) return
        const element =refEl?.current || document;
        onScan.attachTo(element, {
            onScan: function (sCode) {
                onInput(sCode);
            },
        });

        return () => {
            onScan.detachFrom(element);
        };
    }, [refEl]);
    return (
        <>
            {children ? <div onClick={toggleDialog}>{children}</div> : null}
            {dialog && <Dialog onInput={(val: string)=>{
                onInput(val)
                toggleDialog()
            }} />}
        </>
    );
};

export default BarcodeScanner;
