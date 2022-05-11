import axios from 'axios'
import { ITodo } from '../store/Todos'

export const BASE_TODO = {
    URL: 'https://jsonplaceholder.typicode.com',
    PAGE_SIZE: 10,
}

export const getTodosPage = async (page: number = 0): Promise<ITodo[]> => {
    const response = await axios.get<ITodo[]>(
        BASE_TODO.URL + `/todos?_start=${BASE_TODO.PAGE_SIZE * page}&_limit=${BASE_TODO.PAGE_SIZE}`,
    )

    return response.data
}
