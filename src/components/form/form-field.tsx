interface FormFieldProps {
  id: string;
  refFieldId: string;
}

export const FormField: React.FC<FormFieldProps> = ({ id, refFieldId }) => {
  return (
    <div>
      FormField {id} {refFieldId}
    </div>
  );
};
