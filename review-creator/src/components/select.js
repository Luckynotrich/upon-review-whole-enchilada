import React from "react"
import Option from "./option.js"

const Select = ({ categories, onSelect, key}) => {
    return (
        <>
            <div>
                <label htmlFor='selectCat'>Category </label>
                <select name="selectCat" id="selectCat" onChange={onSelect}>
                    <option value="" defaultValue>Choose a Category</option>
                    {categories && categories.map((option) => (
                        <Option
                            text={option.name}
                            value={option.id}
                            key={option.id}
                         />))}

                </select>
            </div>
        </>

    )
}

export default Select
