import { Fragment, useCallback, useState } from 'react';
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import TextField from '@atlaskit/textfield';
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
} from '@atlaskit/form';
import { createUser } from '../actions';

export default function UserModal({ refreshData }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSubmit = async (data) => {
    const res = await createUser(data);

    if (res) {
      refreshData();
      closeModal();
    } else {
      // TODO add some error handling
    }
  };

  return (
    <div>
      <div className='flex justify-end'>
        <Button appearance='primary' onClick={openModal}>
          New user
        </Button>
      </div>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal} width='medium'>
            <div className='p-6'>
              <Form
                onSubmit={handleSubmit}
              >
                {({ formProps, submitting }) => (
                  <form {...formProps}>
                    <FormHeader title='Create new user' />
                    <FormSection>
                      <Field
                        aria-required={true}
                        name='name'
                        label='Name'
                        isRequired
                      >
                        {({ fieldProps }) => (
                          <Fragment>
                            <TextField
                              name='asd'
                              autoComplete='off'
                              {...fieldProps}
                            />
                          </Fragment>
                        )}
                      </Field>
                      <Field
                        aria-required={true}
                        name='email'
                        label='Email'
                        isRequired
                      >
                        {({ fieldProps }) => (
                          <Fragment>
                            <TextField
                              autoComplete='off'
                              type='email'
                              {...fieldProps}
                            />
                          </Fragment>
                        )}
                      </Field>
                    </FormSection>

                    <FormFooter>
                      <ButtonGroup>
                        <Button appearance='subtle' onClick={closeModal}>
                          Cancel
                        </Button>
                        <LoadingButton
                          type='submit'
                          appearance='primary'
                          isLoading={submitting}
                        >
                          Sign up
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
