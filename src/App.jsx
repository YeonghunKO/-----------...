import { Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { lazy, Suspense } from "react"

const Auth = lazy(() => import("./pages/Auth"))
const Todo = lazy(() => import("./pages/Todo"))

function App() {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Suspense>
  )
}

export default App
