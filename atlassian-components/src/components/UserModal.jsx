import { useCallback, useState } from 'react';
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import TextField from '@atlaskit/textfield';
import Spinner from '@atlaskit/spinner';
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
} from '@atlaskit/form';
import { saveUser, fetchUser } from '../actions';
import { updateUsers, userModalObserver, usersObserver } from '../helpers/observer';
import { useEffect } from 'react';

export default function UserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    loading: false,
    data: {},
  });
  const openModal = useCallback(async (id) => {
    setIsOpen(true);
    if (id) {
      setState({ loading: true, data: {} });
      const data = await fetchUser(id);

      setTimeout(() => {
        if (data) setState({ loading: false, data });
      }, 1000);
    }
  }, []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSubmit = async (data) => {
    const res = await saveUser({ ...state.data, ...data });

    if (res) {
      closeModal();
      updateUsers();
    } else {
      // TODO add some error handling
    }
  };

  useEffect(() => {
    // to open modal to Edit
    userModalObserver.subscribe(openModal);
    return () => userModalObserver.subscribe(openModal);
  }, []);

  return (
    <div>
      <div className='flex justify-end'>
        <Button appearance='primary' onClick={() => openModal()}>
          New user
        </Button>
      </div>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal} width='medium'>
            <div className='p-6'>
              <Form onSubmit={handleSubmit}>
                {({ formProps, submitting }) => (
                  <form {...formProps}>
                    <FormHeader title='Create new user' />
                    <FormSection>
                      <Field
                        aria-required={true}
                        name='name'
                        label='Name'
                        isRequired
                        isDisabled={state.loading}
                        defaultValue={state.data?.name || ''}
                      >
                        {({ fieldProps }) => (
                          <TextField autoFocus {...fieldProps} />
                        )}
                      </Field>
                      <Field
                        aria-required={true}
                        name='email'
                        label='Email'
                        isRequired
                        isDisabled={state.loading}
                        defaultValue={state.data?.email || ''}
                      >
                        {({ fieldProps }) => (
                          <TextField type='email' {...fieldProps} />
                        )}
                      </Field>
                    </FormSection>

                    <FormFooter>
                      <ButtonGroup>
                        {state.loading && <div className='flex items-center mr-2'><Spinner size='small' /></div>}
                        <Button appearance='subtle' onClick={closeModal}>
                          Cancel
                        </Button>
                        <LoadingButton
                          type='submit'
                          appearance='primary'
                          isLoading={submitting}
                          isDisabled={state.loading}
                        >
                          Save
                        </LoadingButton>
                      </ButtonGroup>
                    </FormFooter>
                  </form>
                )}
              </Form>
            </div>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
}
