import {Button} from "@mui/material";

export const PlusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setComma, setHasComma}) => {
    function plusResult() {
        if (operation === "+") {
            setTmpResult(tmpResult + Number(result))
        } else if (operation === "-") {
            setTmpResult(tmpResult - Number(result))
        } else {
            setTmpResult(Number(result))
        }

        setOperation("+")
        setResult(0)
        setComma(false)
        setHasComma(false)
    }

    return (
        <Button color="secondary" variant="contained" size="large" onClick={plusResult}>+</Button>
    )
}