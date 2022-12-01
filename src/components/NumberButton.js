import {Button} from "@mui/material";

export const NumberButton = ({number, result, setResult}) => {
    function addNumber() {
        setResult(Number('' + result + number))
    }

    return (
        <Button variant="contained" onClick={addNumber}>{number}</Button>
    )
}