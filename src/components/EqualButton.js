import {Button} from "@mui/material";
import bigDecimal from "js-big-decimal";

export const EqualButton = ({result, setResult, tmpResult, setTmpResult, operation, setOperation, setHasComma}) => {
    function equalResult() {
        if (operation === "+") {
            setResult(Number(bigDecimal.add(tmpResult, result)))
        } else if (operation === "-") {
            setResult(Number(bigDecimal.subtract(tmpResult, result)))
        } else {
            setResult(Number(result))
        }

        setOperation("=")
        setTmpResult(0)
        setHasComma(false)
    }

    return (
        <Button color="success" variant="contained" size="large" onClick={equalResult}>=</Button>
    )
}