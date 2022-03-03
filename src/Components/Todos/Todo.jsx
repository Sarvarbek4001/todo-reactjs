import React from 'react'
import "./Todo.css"

export function Todo(props) {
    return (
        <>
        <div className="todos">
            <input className='input-checkbox' type="checkbox" checked={props.isCompiled} data-todo-id ={props.id} onChange={props.handleComplete} />
            <p style={{textDecoration: props.isCompiled ? 'line-through' : null,fontStyle: props.isCompiled ? 'italic' : null }} className='todo-item'>{props.title}</p>
            <button className='button-todo' data-todo-id ={props.id} onClick={props.deleted}>delete</button>
        </div>
        </>
    )
}
