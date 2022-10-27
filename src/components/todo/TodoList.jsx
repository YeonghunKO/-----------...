/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import { dispatchContext, todoContext } from '../../context/TodoContext';
import { getTodoApi } from '../../api/todo';

const TodoList = () => {
  const todoData = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const getData = () => {
      getTodoApi()
        .then(res => {
          dispatch({ type: 'INIT', initTodos: res.data });
        })
        .catch(err => {
          console.log('주 에러 : ', err);
        });
    };
    getData();
  }, []);
  // console.log('todoData', todoData);
  return (
    <ul css={todoWrapper}>
      {todoData?.map((list, id) => (
        <TodoItem key={list.id} list={list} />
      ))}
    </ul>
  );
};

const todoWrapper = css`
  overflow: auto;
  height: 70%;
`;

export default TodoList;
