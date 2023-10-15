import { useState, useEffect } from "react"
import ToDoList from "./ToDoList"

function getItemsfromLocalStorage() {
  const localItems: string[] = JSON.parse(localStorage.getItem("items") || "[]");
  return localItems;
}

function App() {

  const [inputList, setInputList] = useState<string>("")
  const [items, setItems] = useState<string[]>(getItemsfromLocalStorage());

  const itemEventFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems: string[]) => {
      return [inputList, ...oldItems]
    })
    setInputList("");
  }

  const deleteItemFunction = (id: number) => {
    console.log("deleted")

    setItems((oldItems: string[]) => {
      return oldItems.filter((_arrElem, index) => {
        return index !== id;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])



  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add a item" value={inputList} onChange={itemEventFunction} />
        <button onClick={listOfItems}>Add</button>

        <ol>
          {items.map((itemVal, index) => (
            <ToDoList key={index} id={index} text={itemVal} onSelect={() => deleteItemFunction(index)} />))}
        </ol>
      </div>
    </>
  )
}

export default App