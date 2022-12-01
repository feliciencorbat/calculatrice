import {Button} from "@mui/material";

export const MinusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation}) => {
    function minusResult() {
        if (operation === "+") {
            setTmpResult(tmpResult + result)
        } else if (operation === "-") {
            setTmpResult(tmpResult - result)
        } else {
            setTmpResult(result)
        }

        setOperation("-")
        setResult(0)
    }

    return (
        <Button color="secondary" variant="contained" size="large" onClick={minusResult}>-</Button>
    )
}