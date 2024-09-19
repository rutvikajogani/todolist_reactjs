import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{TodoList} from './assets//todolist'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
