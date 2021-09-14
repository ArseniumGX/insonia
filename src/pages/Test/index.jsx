import React from 'react';
import Modal from '../../components/Modal'

export default () => {
    const [show, setShow] = React.useState(false)

    const modalOpen = () => setShow(true)
    const modalClose = () => setShow(false)

    return(
        <div className='container'>
            <button type="button" onClick={ modalOpen }>Modal teste</button>
            {console.log(show)}
            <Modal show={ show } onClose={ modalClose } />
        </div>
    )
}
