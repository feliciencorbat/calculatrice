import {Button} from "@mui/material";

export const MinusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setComma, setHasComma}) => {
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
        setComma(false)
        setHasComma(false)
    }

    return (
        <Button color="secondary" variant="contained" size="large" onClick={minusResult}>-</Button>
    )
}