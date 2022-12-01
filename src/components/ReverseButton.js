import {Button} from "@mui/material";

export const ReverseButton = ({result, setResult}) => {
    function reverseResult() {
        setResult(result * (-1))
    }

    return (
        <Button variant="contained" onClick={reverseResult}>-/+</Button>
    )
}