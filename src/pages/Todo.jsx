/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getTodoApi } from "../api/todo"
import TodoCreate from "../components/todo/TodoCreate"
import TodoHeader from "../components/todo/TodoHeader"
import TodoList from "../components/todo/TodoList"
import { TOKEN_STORAGE_KEY } from "../constants/storage"
import { mainContainer } from "../shared/globalStyle"
import { getItem } from "../utils/storage"

import TodoContextWrapper from "../context/TodoContext"

const Todo = () => {
  const navigate = useNavigate()
  const [todoData, setTodoData] = useState()

  useEffect(() => {
    if (!getItem(TOKEN_STORAGE_KEY)) {
      return navigate("/")
    }
    const getData = () => {
      getTodoApi()
        .then((res) => {
          setTodoData(res.data)
        })
        .catch((err) => {
          console.log("주 에러 : ", err)
        })
    }
    getData()
  }, [])

  return (
    <div css={mainContainer}>
      <TodoHeader />
      <TodoContextWrapper>
        <TodoCreate todoData={todoData} setTodoData={setTodoData} />
        <TodoList todoData={todoData} setTodoData={setTodoData} />
      </TodoContextWrapper>
    </div>
  )
}

export default Todo
