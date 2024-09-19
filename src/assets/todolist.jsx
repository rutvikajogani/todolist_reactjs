import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import './style.css'

export function TodoList() {
    const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("todo")) || []);

    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(items));
    }, [items]);

    function inputHandler(event) {
        setInputValue(event.target.value);
    }

    function addItem() {
        if (inputValue.trim()) {
            setItems([...items,
            {
                value: inputValue,
                status: false
            }]);
        }
        setInputValue('');
    }

    function removeItem(index) {
        setItems(items.filter((i, value) => value !== index));
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    }

    function checkbox(index) {

        const updatedItems = [...items];
        updatedItems[index].status = !updatedItems[index].status;
        setItems(updatedItems);
        console.log(updatedItems)
    }

    return (
        <>
            <h1>Todo List</h1>
          
          <div className="input">  <input 
                type="text"
                placeholder="Enter item"
                onChange={inputHandler}
                value={inputValue}
                onKeyDown={handleKeyPress}
            />
            <button onClick={addItem}>Add</button></div> 
            <ul>
                {items.map((item, index) => (
                    <ItemList
                        key={index}
                        item={item}
                        index={index}
                        removeItem={removeItem}
                        checkbox={checkbox}
                    />
                    
                ))}
            </ul>
           
        </>
    );
}
