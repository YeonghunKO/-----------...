import { Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { lazy, Suspense } from "react"
import Auth from "./pages/Auth"
// import Todo from "./pages/Todo"
// const Auth = lazy(() => import("./pages/Auth"))
const Todo = lazy(() => import("./pages/Todo"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        path="/todo"
        element={
          <Suspense fallback={<div>...laoding</div>}>
            <Todo />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
