import {Button} from "@mui/material";

export const CommaButton = ({setComma, hasComma, setHasComma}) => {
    function commaResult() {
        setComma(true)
        setHasComma(true)
    }

    return (
        <Button disabled={hasComma} variant="contained" onClick={commaResult}>.</Button>
    )
}