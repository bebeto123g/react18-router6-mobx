import React, { useCallback, useEffect, useState } from 'react'
import { APIJson } from '../API/APIJson'
import { ITodo } from '../store/Todos'
import styles from '../components/Todo/Todo.module.scss'
import Loader from '../UI/Loader/Loader'
import Container from '../UI/Container/Container'
import TodoMemo from '../components/Todo/TodoMemo'
import AddTodoMemo from '../components/Todo/AddTodoMemo'

const TestMemoView = () => {
    const [todos, setTodos] = useState<ITodo[] | null>(null)
    const [isReverse, setIsReverse] = useState<boolean>(false)

    const toggleCompleted = useCallback((id: number) => {
        setTodos((todos) => {
            if (!todos) return null
            const newTodos = todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return newTodos
        })
    }, [])

    const removeTodo = useCallback((id: number) => {
        setTodos((todos) => {
            if (!todos) return null
            return todos.filter((todo) => todo.id !== id)
        })
    }, [])

    const addTodo = useCallback((title: string) => {
        setTodos((todos) => {
            if (!todos) return null
            return [
                ...todos,
                {
                    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
                    userId: 123,
                    title,
                    completed: false,
                },
            ]
        })
    }, [])

    useEffect(() => {
        if (!todos) {
            APIJson.getTodosPage().then((todos) => {
                setTodos(todos)
            })
        }
    }, [todos])

    if (!todos) return <Loader />

    const reverseTodos = todos?.reverse()

    return (
        <Container>
            <h1>Memo Page</h1>
            <div className=''>
                <input
                    type='checkbox'
                    name='reverse-list'
                    id='reverse-list'
                    checked={isReverse}
                    onChange={() => {
                        setIsReverse((prev) => !prev)
                    }}
                />
                <label htmlFor='reverse-list'>????????????</label>
            </div>
            <AddTodoMemo addTodo={addTodo} />
            <ul className={styles.list}>
                {reverseTodos.map((todo) => (
                    <TodoMemo
                        todo={todo}
                        key={todo.id + String(+todo.completed)}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </ul>
        </Container>
    )
}

export default TestMemoView
