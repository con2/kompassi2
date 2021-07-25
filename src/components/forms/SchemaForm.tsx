import React from "react";

import { FormikConfig, useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { defaultLayout, Field, Layout } from "./models";
import { fieldsToYup, getInitialValues } from "./validation";
import SchemaFormInput from "./SchemaFormInput";
import SchemaFormField from "./SchemaFormField";
import { T } from "../../translations";

interface SchemaFormConfig {
  fields: Field[];
  layout?: Layout;
  showSubmitButton?: boolean;
}

export function useSchemaForm(
  schemaFormConfig: SchemaFormConfig,
  formikConfig: Partial<FormikConfig<any>> = {}
) {
  const { fields } = schemaFormConfig;
  const initialValues = formikConfig.initialValues ?? getInitialValues(fields);
  const onSubmit = formikConfig.onSubmit ?? (() => {});
  const validationSchema = React.useMemo(() => fieldsToYup(fields), [fields]);

  const updatedFormikConfig: FormikConfig<any> = {
    ...formikConfig,
    onSubmit,
    initialValues,
    validationSchema,
  };

  const formik = useFormik(updatedFormikConfig);
  return { formik, schemaFormConfig };
}

type SchemaFormProps = ReturnType<typeof useSchemaForm>;

export const SchemaForm = ({ formik, schemaFormConfig }: SchemaFormProps) => {
  const { fields, showSubmitButton } = schemaFormConfig;
  const layout = schemaFormConfig.layout ?? defaultLayout;
  const { handleSubmit, handleChange, isSubmitting, errors, values } = formik;
  const t = T((r) => r.Common);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      {fields.map((field) => (
        <SchemaFormField
          layout={layout}
          key={field.name}
          field={field}
          error={errors[field.name]}
        >
          <SchemaFormInput
            field={field}
            value={values[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        </SchemaFormField>
      ))}
      <Button
        type="submit"
        disabled={isSubmitting}
        className={showSubmitButton ?? true ? "" : "sr-only"}
      >
        {(isSubmitting && (
          <>
            <Spinner animation="border" size="sm" /> Submitting...
          </>
        )) ||
          t((r) => r.submit)}
      </Button>
    </Form>
  );
};
export default SchemaForm;
