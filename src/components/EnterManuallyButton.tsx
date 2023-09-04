import {ComponentPropsWithoutRef, FC} from "react";

interface Params extends ComponentPropsWithoutRef<'button'> {}


const EnterManuallyButton: FC<Params> = (props) => {
    return (
        <button {...props}>
            Enter Manually
        </button>
    )
}

export default EnterManuallyButton