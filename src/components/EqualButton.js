import {Button} from "@mui/material";

export const EqualButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setHasComma}) => {
    function equalResult() {
        if (operation === "+") {
            setResult(tmpResult + result)
        } else if (operation === "-") {
            setResult(tmpResult - result)
        } else {
            setResult(result)
        }

        setOperation("=")
        setTmpResult(0)
        setHasComma(false)
    }

    return (
        <Button color="success" variant="contained" size="large" onClick={equalResult}>=</Button>
    )
}