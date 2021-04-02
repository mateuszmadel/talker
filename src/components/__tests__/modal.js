import React from 'react';
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../Modal/Modal'

test('can be opened and closed', async ()=>{

    const buttonLabel='open';
    const title='this is modal'
    const modalContent=<h1>{title}</h1>;

    render(
        <Modal buttonLabel={buttonLabel}>
            {modalContent}
        </Modal>
    )

    userEvent.click(screen.getByRole('button',{name:'open'}));
    const inModal = within(screen.getByTestId('modal'))
    expect(inModal.getByRole('heading', {name: title})).toBeInTheDocument()
    userEvent.click(inModal.getByRole('button', {name: '×'}))
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()


})

