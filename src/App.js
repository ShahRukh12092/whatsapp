import Sidebar from "./Sidebar"
import Chat from "./Chat"
import "./app.css"
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
