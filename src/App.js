import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {NumberButton} from "./components/NumberButton"
import {ClearButton} from "./components/ClearButton";

function App() {

    const [result, setResult] = useState(0);

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
                    <ClearButton setResult={setResult} />
                </div>
                <div>
                    <NumberButton number={7} result={result} setResult={setResult} />
                    <NumberButton number={8} result={result} setResult={setResult} />
                    <NumberButton number={9} result={result} setResult={setResult} />
                </div>
                <div>
                    <NumberButton number={4} result={result} setResult={setResult} />
                    <NumberButton number={5} result={result} setResult={setResult} />
                    <NumberButton number={6} result={result} setResult={setResult} />
                    <Button color="secondary" variant="contained" size="large">-</Button>
                </div>
                <div>
                    <NumberButton number={1} result={result} setResult={setResult} />
                    <NumberButton number={2} result={result} setResult={setResult} />
                    <NumberButton number={3} result={result} setResult={setResult} />
                    <Button color="secondary" variant="contained" size="large">+</Button>
                </div>
                <div>
                    <NumberButton number={0} result={result} setResult={setResult} />
                    <Button variant="contained">.</Button>
                    <Button variant="contained">-/+</Button>
                    <Button color="success" variant="contained" size="large">=</Button>
                </div>
            </Box>
    </div>
  );
}

export default App;
