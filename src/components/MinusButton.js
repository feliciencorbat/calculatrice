import {Button} from "@mui/material";
import bigDecimal from "js-big-decimal";

export const MinusButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setComma, setHasComma}) => {
    function minusResult() {
        if (operation === "+") {
            setTmpResult(Number(bigDecimal.add(tmpResult, result)))
        } else if (operation === "-") {
            setTmpResult(Number(bigDecimal.subtract(tmpResult, result)))
        } else {
            setTmpResult(Number(result))
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