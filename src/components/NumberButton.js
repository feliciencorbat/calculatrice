import {Button} from "@mui/material";

export const NumberButton = ({number, result, setResult, operation, setOperation, comma, setComma}) => {
    function addNumber() {
        if (operation === "=") {
            setResult(number)
            setOperation(null)
        } else {
            if (comma) {
                setResult(Number('' + result + '.' + number))
                setComma(false)
            } else {
                setResult(Number('' + result + number))
            }
        }

    }

    return (
        <Button variant="contained" onClick={addNumber}>{number}</Button>
    )
}