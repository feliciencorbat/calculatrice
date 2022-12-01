import {Button} from "@mui/material";

export const ClearButton = ({setResult, setTmpResult, setOperation, setComma, setHasComma}) => {
    function clearResult() {
        setResult(0)
        setTmpResult(0)
        setOperation(null)
        setComma(false)
        setHasComma(false)
    }

    return (
        <Button color="error" variant="contained" size="large" onClick={clearResult}>C</Button>
    )
}