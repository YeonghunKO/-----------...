/** @jsxImportSource @emotion/react */
import { useEffect } from "react"
import { useNavigate } from "react-router"
import TodoCreate from "../components/todo/TodoCreate"
import TodoHeader from "../components/todo/TodoHeader"
import TodoList from "../components/todo/TodoList"
import { TOKEN_STORAGE_KEY } from "../constants/storage"
import { mainContainer } from "../shared/globalStyle"
import { getItem } from "../utils/storage"

import TodoContextWrapper from "../context/TodoContext"

const Todo = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!getItem(TOKEN_STORAGE_KEY)) {
      return navigate("/")
    }
  }, [])

  return (
    <div css={mainContainer}>
      <TodoHeader />
      <TodoContextWrapper>
        <TodoCreate />
        <TodoList />
      </TodoContextWrapper>
    </div>
  )
}

export default Todo
