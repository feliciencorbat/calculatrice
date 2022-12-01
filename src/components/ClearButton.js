import {Button} from "@mui/material";

export const ClearButton = ({setResult, setTmpResult, setOperation}) => {
    function clearResult() {
        setResult(0)
        setTmpResult(0)
        setOperation(null)
    }

    return (
        <Button color="error" variant="contained" size="large" onClick={clearResult}>C</Button>
    )
}