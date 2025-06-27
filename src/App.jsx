import { createRoot } from 'react-dom/client'
import Counter from './Counter'

function App() {
    return (
        <main style={{ textAlign: 'center' }}>
            <h1>Hello Vite + React!</h1>
            <Counter/>
        </main>
    )
}

createRoot(document.getElementById('app')).render(<App />)
