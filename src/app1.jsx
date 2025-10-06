import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import uuid from 'uuid-random';
function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [Hidecompleted, setHidecompleted] = useState(false)
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSave = (e) => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuid(), mytodo: todo, isCompleted: false }])
      setTodo("")
    }
  }

  const handleDelete = (e, id, ask) => {
    let del = () => {
      let newtodos = todos.filter(item => {
        if (item.id !== id) {
          return item
        }
      })
      setTodos(newtodos)
      newtodos = []
    }
    if (ask) {
      let todoname = todos.filter(item => {
        if (item.id === id) {
          return item
        }
      })
      let b = confirm(`Deleting Todo : ${todoname[0].mytodo}`)
      if (b) {
        del()
      }
    }
    else {
      del()
    }
  }

  const handleEdit = (e, id, td) => {
    if (todo === "") {
      setTodo(e.target.value)
      handleDelete(e, id, false)
      setTodo(td)
    }
    else {
      alert("Please save the edited Todo first!!")
    }
  }

  const handleCompleted = (e) => {
    let id = e.target.id;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    console.log(index)
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
  }

  const handleHidecompletedTodos = () => {
    setHidecompleted(!Hidecompleted)

  }
  useEffect(() => {
    let comptodo = todos.filter(item => {
      if (item.isCompleted) {
        return item
      }
    })
    let dontcomtodo = todos.filter(item => {
      if (!item.isCompleted) {
        return item
      }
    })
    if (Hidecompleted) {
      console.log(dontcomtodo,"dont completed todos")
      setTodos(dontcomtodo)
    }
    else {
      console.log(comptodo,"completed todos")

      setTodos(comptodo.concat(dontcomtodo))
    }
  }, [Hidecompleted])

  return (

    <>
      <div>
        <Navbar />
        <div className=" mx-auto my-4 rounded-md flex flex-col min-h-[90vh] p-4 bg-amber-200 w-[50vw]">
          <h1 className='font-extrabold text-gray-800 '>uTodo - Your todos at one place</h1>
          <div className="input flex justify-between mx-6 p-2">
            <input id='input' type="text" className='bg-white w-[80%]' placeholder='Enter your todo' onChange={handleChange} value={todo} />
            <button className='bg-amber-950 text-white px-4 rounded-[5px]' disabled={todo.length <= 3} onClick={(e) => { handleSave(e) }}>save</button>
          </div>
          <div className='flex gap-4'>
            <input type="checkbox" id='Hidecompleted' onChange={() => { handleHidecompletedTodos() }} checked={Hidecompleted} />
            <label htmlFor="Hidecompleted">Hide completed Todo's</label>
          </div>
          <div className='bg-slate-700 w-[90%] h-[1px] mx-auto my-[5px]'></div>
          <div>
            {todos.map(item => {
              return (
                <div key={item.id} className='flex justify-between p-2 m-1 bg-amber-100 rounded-[5px]'>
                  <div className="leftside flex gap-2">
                    <input type="checkbox" id={item.id} checked={item.isCompleted} onChange={handleCompleted} />
                    <label htmlFor={item.id}><div className={item.isCompleted ? "line-through" : ""}>{item.mytodo}</div></label>
                  </div>
                  <div className="btn flex gap-3">
                    <button className='bg-amber-600 rounded-[5px] text-white px-1 w-[70px]' onClick={(e) => { handleEdit(e, item.id, item.mytodo) }}>Edit</button>
                    <button className='bg-amber-600 rounded-[5px] text-white px-1 w-[70px]' onClick={(e) => { handleDelete(e, item.id, true) }}>Delete</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
