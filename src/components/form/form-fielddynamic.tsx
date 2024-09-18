interface FormFieldDynamicProps {
  children: React.ReactNode;
}

export const FormFieldDynamic: React.FC<FormFieldDynamicProps> = ({
  children,
}) => {
  return (
    <div>
      <div>FormFieldDynamic</div>
      <div>{children}</div>
    </div>
  );
};
