import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {NumberButton} from "./components/NumberButton"
import {ClearButton} from "./components/ClearButton";
import {PlusButton} from "./components/PlusButton";
import {EqualButton} from "./components/EqualButton";
import {MinusButton} from "./components/MinusButton";

function App() {

    const [result, setResult] = useState(0);
    const [tmpResult, setTmpResult] = useState(0);
    const [operation, setOperation] = useState(null);

    return (
    <div className="App">
            <Box
                sx={{ margin: 10,
                    '& h1': { m: 2 },
                    '& button': { m: 2 },
                    '& .MuiTextField-root': { m: 2 , width: '20ch'},
                }}>
                <div>
                    <h1>Calculatrice</h1>
                </div>
                <div>
                    <TextField
                        value={result}
                        fullWidth id="result"
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <ClearButton setResult={setResult} setTmpResult={setTmpResult} setOperation={setOperation}/>
                </div>
                <div>
                    <NumberButton number={7} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={8} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={9} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                </div>
                <div>
                    <NumberButton number={4} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={5} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={6} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <MinusButton result={result} setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} operation={operation} setOperation={setOperation} />
                </div>
                <div>
                    <NumberButton number={1} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={2} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <NumberButton number={3} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <PlusButton result={result} setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} operation={operation} setOperation={setOperation} />
                </div>
                <div>
                    <NumberButton number={0} result={result} setResult={setResult} operation={operation} setOperation={setOperation} />
                    <Button variant="contained">.</Button>
                    <Button variant="contained">-/+</Button>
                    <EqualButton result={result} setResult={setResult} tmpResult={tmpResult} setTmpResult={setTmpResult} operation={operation} setOperation={setOperation} />
                </div>
            </Box>
    </div>
  );
}

export default App;
