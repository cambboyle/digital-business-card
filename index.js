import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function Page() {
    return (
        <div className="page">
            <App />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))