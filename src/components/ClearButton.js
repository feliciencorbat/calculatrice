import {Button} from "@mui/material";

export const ClearButton = ({setResult}) => {
    function clearResult() {
        setResult(0)
    }

    return (
        <Button color="error" variant="contained" size="large" onClick={clearResult}>C</Button>
    )
}