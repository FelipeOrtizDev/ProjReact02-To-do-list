import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

  const [value, setValue ] = useState('');

  const handleSubmit = (e) => {
    //previne ação padrão 
    e.preventDefault();
    if (value) {
      //adicionar todo
      addTodo(value);
      // limpa todas as solicitações
      setValue('');
    }
  };z   


  return (
    <>
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className='todo-input'placeholder="Qual e a sua tarefa para hoje?" />
        <button type='submit'className='todo-btn'> 
        Adicione a tarefa
         </button>

    </form>



  </>
  )
}
