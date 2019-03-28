import React, { Component, Fragment } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalDialog from './ModalDialog';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    onDialogOpen = () => {
        this.setState( { modalOpen: true}, () => {
            this.closeButtonNode.focus();
        } );
        this.toggleScrollLock();
    }
    onDialogClose = () => {
        this.setState( { modalOpen: false } );
        this.toggleScrollLock();
        this.openButtonNode.focus();
    }
    onKeyDown = (e) => {
        return e.keyCode === 27 && this.onDialogClose();
    }
    onClickAway = (e) => {
        return this.modalNode && this.modalNode === e.target && this.onDialogClose();
    }
    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('u-lock-scroll');
    }

    render() {
        const { modalOpen } = this.state;
        const { triggerText, title, children } = this.props;
        return (
            <Fragment>
                <ModalTrigger buttonRef={n => this.openButtonNode = n} text={ triggerText } onOpen={ this.onDialogOpen } />
                {modalOpen && 
                    <ModalDialog title={ title } content={ children } onClose={ this.onDialogClose } onKeyDown={ this.onKeyDown } modalRef={ n => this.modalNode = n } buttonRef={n => this.closeButtonNode = n} onClickAway={ this.onClickAway } />
                }
            </Fragment>
        );
    }
}

export default Modal;
