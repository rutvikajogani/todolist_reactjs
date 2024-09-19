import './style.css'
export function ItemList({ item, index, removeItem, checkbox }) {
    const { value, status } = item;

    return (
        <li>
            <input
              className='checkbox'
                type="checkbox"
                checked={status}
                onChange={(e) => checkbox(index, e.target.checked)}
            />
                 <span className="checkbox-label">{value}</span>
                

            <button onClick={() => removeItem(index)}>Delete</button>
        </li>
    );
}
