import React from 'react'

export default function ModalTrigger({ buttonRef, text, onOpen }) {
  return (
    <button className="btn btn-default" ref={buttonRef} onClick={ onOpen }>
        {text}
    </button>
  )
}
