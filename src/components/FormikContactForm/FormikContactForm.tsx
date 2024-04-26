import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { Form, Formik, Field, FieldProps } from "formik";

export const FormikContactForm = () => {
  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value === "King Kong") {
      error = "What the heck 😱";
    }
    return error;
  }

  function validateEmail(value: string) {
    let error;
    const reg = /\S+@\S+\.\S+/;
    if (!value) {
      error = "Email is required";
    } else if (!reg.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePhoneNumber(value: string) {
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (!/^\d+$/.test(value)) {
      error = "Phone number must be digits only";
    }
    return error;
  }

  function validateMessage(value: string) {
    let error;
    if (!value) {
      error = "Please provide a short message 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.name && form.touched?.name)}
              >
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                  {...field}
                  placeholder='name'
                  id='name'
                  autoComplete='off'
                />
                <FormErrorMessage>
                  {typeof form.errors?.name === "string"
                    ? form.errors.name
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='email' validate={validateEmail}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.email && form.touched?.email)}
              >
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  {...field}
                  id='email'
                  placeholder='email'
                  autoComplete='off'
                />
                <FormErrorMessage>
                  {typeof form.errors?.email === "string"
                    ? form.errors.email
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='phoneNumber' validate={validatePhoneNumber}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={
                  !!(form.errors?.phoneNumber && form.touched?.phoneNumber)
                }
              >
                <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                <Input
                  {...field}
                  id='phoneNumber'
                  placeholder='phone number'
                  autoComplete='off'
                  type='number'
                />
                <FormErrorMessage>
                  {typeof form.errors?.phoneNumber === "string"
                    ? form.errors.phoneNumber
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='message' validate={validateMessage}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.message && form.touched?.message)}
              >
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea {...field} id='message' placeholder='message' />
                <FormErrorMessage>
                  {typeof form.errors?.message === "string"
                    ? form.errors.message
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
