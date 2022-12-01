import {Button} from "@mui/material";

export const PlusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation}) => {
    function plusResult() {
        if (operation === "+") {
            setTmpResult(tmpResult + result)
        } else if (operation === "-") {
            setTmpResult(tmpResult - result)
        } else {
            setTmpResult(result)
        }

        setOperation("+")
        setResult(0)
    }

    return (
        <Button color="secondary" variant="contained" size="large" onClick={plusResult}>+</Button>
    )
}