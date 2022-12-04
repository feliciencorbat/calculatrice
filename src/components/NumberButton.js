import {Button} from "@mui/material";

export const NumberButton = ({number, result, setResult, operation, setOperation, comma, setComma, hasComma}) => {
    function addNumber() {
        if (operation === "=") {
            setResult(Number(number))
            setOperation(null)
        } else {
            if (comma) {
                setResult('' + result + '.' + number)
                setComma(false)
            } else if (hasComma) {
                setResult('' + result + number)
            } else {
                setResult(Number('' + result + number))
            }
        }
    }

    return (
        <Button variant="contained" onClick={addNumber}>{number}</Button>
    )
}