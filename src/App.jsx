import { createRoot } from 'react-dom/client'
import Game from './Game'

function App() {
    return (
        <main style={{ textAlign: 'center' }}>
            <h1>Hello Vite + React!</h1>
            <Game/>
        </main>
    )
}

createRoot(document.getElementById('app')).render(<App />)
