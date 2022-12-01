import {Button} from "@mui/material";

export const NumberButton = ({number, result, setResult, operation, setOperation}) => {
    function addNumber() {
        if (operation === "=") {
            setResult(number)
            setOperation(null)
        } else {
            setResult(Number('' + result + number))
        }

    }

    return (
        <Button variant="contained" onClick={addNumber}>{number}</Button>
    )
}