import React from "react";
import { Formik, Form, Field } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPet } from "../utils/apis/pets";
import { useNavigate } from "react-router-dom";
const CreatePet = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createPet } = useMutation(
    (values) => {
      return addPet(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("pets");
        navigate("/pets");
      },
    }
  );
  const initialValues = {
    name: "",
    image: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // Handle submit logic here, such as sending the form data to an API
    createPet(values);
    resetForm(initialValues);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Pet Name:
            </h2>
            <Field type="text" name="name" className="form-control" />
          </div>

          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Image URL:
            </h2>
            <Field type="text" name="image" className="form-control" />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Add Pet
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePet;
