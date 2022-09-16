import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

   const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        //delete logic
        setModalIsOpen(true);
    }

    function closeModalHandler() {
      setModalIsOpen(false);
    }
  

    return (
    <div className='card'>
        <h2>
            {props.text}
        </h2>
        <div className='actions'>
          <button className='btn' 
          onClick={deleteHandler}
          >Delete</button>
        </div>
       {modalIsOpen &&  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen &&  <Backdrop/>}
      </div>
    );
}

export default Todo;