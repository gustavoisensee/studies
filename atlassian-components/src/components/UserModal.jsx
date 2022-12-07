import { Fragment, useCallback, useState } from 'react';
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import TextField from '@atlaskit/textfield';
import Calendar from '@atlaskit/calendar';
import Spinner from '@atlaskit/spinner';
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  ErrorMessage,
} from '@atlaskit/form';
import Select from '@atlaskit/select';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { saveUser, fetchUser } from '../actions';
import { updateUsers, userModalObserver } from '../helpers/observer';
import { useEffect } from 'react';

// const defaultPreviouslySelected = ['2020-12-06'];
const defaultSelected = ['2020-12-08'];

export default function UserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    loading: false,
    data: {},
  });
  const [toggleCalendar, setToggleCalendar] = useState(false);

  const openModal = useCallback(async (id) => {
    setIsOpen(true);
    if (id) {
      setState({ loading: true, data: {} });
      const data = await fetchUser(id);

      setTimeout(() => {
        if (data) setState({ loading: false, data });
      }, 1000);
    } else {
      setState({ data: {}, loading: false });
    }
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSubmit = async (data) => {
    const _data = {
      ...state.data,
      ...data,
      role: data?.role?.value || '',
    };
    const res = await saveUser(_data);

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
  // console.log(toggleCalendar);

  return (
    <div>
      <div className='flex justify-end'>
        <Button appearance='primary' onClick={() => openModal('')}>
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
                        validate={(val) =>
                          !!val ? '' : 'Please enter the user name!'
                        }
                      >
                        {({ fieldProps, error }) => (
                          <Fragment>
                            <TextField autoFocus {...fieldProps} />
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        )}
                      </Field>
                      <Field
                        aria-required={true}
                        name='email'
                        label='Email'
                        isRequired
                        isDisabled={state.loading}
                        defaultValue={state.data?.email || ''}
                        validate={(val) =>
                          !!val ? '' : 'Please enter an email!'
                        }
                      >
                        {({ fieldProps, error }) => (
                          <Fragment>
                            <TextField type='email' {...fieldProps} />
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        )}
                      </Field>
                      <Field
                        aria-required={true}
                        name='role'
                        label='Choose a role'
                        isRequired
                        isDisabled={state.loading}
                        defaultValue={state.data?.role || ''}
                        validate={(val) =>
                          !!val ? '' : 'Please select a role!'
                        }
                      >
                        {({ fieldProps, error }) => (
                          <Fragment>
                            <Select
                              inputId='role'
                              className='single-select'
                              classNamePrefix='react-select'
                              isClearable={true}
                              options={[
                                { label: 'Admin', value: 'admin' },
                                { label: 'Developer', value: 'developer' },
                                { label: 'Designer', value: 'designer' },
                                { label: 'Manager', value: 'manager' },
                              ]}
                              {...fieldProps}
                            />
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        )}
                      </Field>
                      <Field
                        aria-required={true}
                        name='dateOfBirth'
                        label='Date of birth'
                        isRequired
                        isDisabled={state.loading}
                        defaultValue={state.data?.dateOfBirth || ''}
                        validate={(val) =>
                          !!val ? '' : 'Please enter the date of birth!'
                        }
                      >
                        {({ fieldProps, error }) => (
                          <div>
                            <TextField
                              type='text'
                              elemAfterInput={<CalendarIcon />}
                              defaultValue={state.data?.dateOfBirth || ''}
                              readOnly={true}
                              {...fieldProps}
                              onFocus={() => setToggleCalendar(true)}
                              onBlur={() =>
                                setTimeout(() => setToggleCalendar(false), 200)
                              }
                            />
                            {toggleCalendar && (
                              <div className='absolute'>
                                <Calendar
                                  defaultSelected={
                                    state.data?.dateOfBirth || ''
                                  }
                                  defaultMonth={12}
                                  defaultYear={2022}
                                  testId={'calendar'}
                                  style={{ maxWidth: 100 }}
                                  onSelect={(event) =>
                                    setState((prev) => ({
                                      ...prev,
                                      data: {
                                        ...prev.data,
                                        dateOfBirth: event.iso,
                                      },
                                    }))
                                  }
                                />
                              </div>
                            )}
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </div>
                        )}
                      </Field>
                    </FormSection>

                    <FormFooter>
                      <ButtonGroup>
                        {state.loading && (
                          <div className='flex items-center mr-2'>
                            <Spinner size='small' />
                          </div>
                        )}
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
