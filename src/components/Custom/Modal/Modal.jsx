import { useDispatch, useSelector } from 'react-redux';
import FlatButton from '../../Buttons/FlatButton/FlatButton';
import styles from './style.module.css'
import { ModalActions } from '../../../store/Features/Modal';

const Modal = () => {

    const modalData = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    return (
        <div className={[styles.Modal, modalData.open ? styles.open : null].join(" ")}>
            <h2>{modalData.content}</h2>
            <div className={styles.Actions}>
                <FlatButton name="Cancel" style={{backgroundColor:"#28A745"}} onClick={() => {dispatch(ModalActions.closeModal())}}/>
                <FlatButton name="Delete" style={{backgroundColor:"#DC3545"}} onClick={() => {
                    modalData.callBack();
                    dispatch(ModalActions.closeModal());
                }}/>
            </div>
        </div>
    )
}

export default Modal;