import React, { useCallback, useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import { useEffect } from 'react';
import { updateUsers, userDeleteModal } from '../helpers/observer';
import { deleteUser } from '../actions';

let idDelete;

export default function UserDeleteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleDelete = async () => {
    const res = await deleteUser(idDelete);
    if (res) {
      closeModal();
      updateUsers();
      // set a toast notification: delete successfully
    } else {
      // set a toast notification: failed on delete the user
    }
  };

  const setIdDelete = (id) => {
    if (id) {
      idDelete = id;
      openModal();
    }
  };

  useEffect(() => {
    userDeleteModal.subscribe(setIdDelete);
    return () => userDeleteModal.unsubscribe(setIdDelete);
  }, []);

  return (
    <ModalTransition>
      {isOpen && (
        <Modal onClose={closeModal}>
          <ModalHeader>
            <ModalTitle appearance='danger'>
              You're about to delete this user
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this user?</p>
          </ModalBody>
          <ModalFooter>
            <Button appearance='subtle' onClick={closeModal} autoFocus>
              Cancel
            </Button>
            <Button appearance='danger' onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
}
