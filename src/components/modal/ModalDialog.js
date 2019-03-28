import React from 'react';
import ReactDOM from 'react-dom';

export default function ModalDialog({ title, content, onClose, onKeyDown, modalRef, buttonRef, onClickAway }) {


    return ReactDOM.createPortal(
        <div className="overlay" ref={ modalRef } onClick={ onClickAway }>
            <aside role="dialog" aria-modal="true" tabIndex="-1" aria-labelledby="modal-title" className="modal" onKeyDown={ onKeyDown }>
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={ onClose }>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    { content }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={ buttonRef } onClick={ onClose }>Close</button>
                    <button type="submit" form="modalForm" className="btn btn-primary" onClick={ onClose }>Submit</button>
                </div>
            </aside>
        </div>,
        document.body
    );
}
