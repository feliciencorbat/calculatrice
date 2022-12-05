import {Button} from "@mui/material";
import bigDecimal from "js-big-decimal";

export const PlusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setComma, setHasComma}) => {
    function plusResult() {
        if (operation === "+") {
            setTmpResult(Number(bigDecimal.add(tmpResult, result)))
        } else if (operation === "-") {
            setTmpResult(Number(bigDecimal.subtract(tmpResult, result)))
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