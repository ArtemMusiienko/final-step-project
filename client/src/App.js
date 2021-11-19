import React from "react"
import Button from "@material-ui/core/Button"
import "./App.css"

const App = function () {
    return (
        <div className="App">
            <div>
                Сделал: Eslint Stylelint Pre-commit hook Eslint-config-airbnb
                Husky MUI
            </div>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
            >
                Link
            </Button>
        </div>
    )
}
export default App
