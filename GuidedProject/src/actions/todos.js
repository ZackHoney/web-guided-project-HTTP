import axios from "axios"

const baseUrl = 'http://localhost:3001';
const todosUrl = baseUrl + '/todos';

 export const getTodos = () => {
    return axios.get(todosUrl)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const postTodo = (description) => {
    const todo = {
        description: description,
        isDone: false
    }
    return axios.get(todosUrl);
}
