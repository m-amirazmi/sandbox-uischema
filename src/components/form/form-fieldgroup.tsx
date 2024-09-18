import { FieldGroupSettings } from "@/types/schema.ui.types";

interface FormFieldGroupProps {
  id: string;
  children: React.ReactNode;
  settings?: FieldGroupSettings;
}

export const FormFieldGroup: React.FC<FormFieldGroupProps> = ({
  children,
  settings,
}) => {
  return (
    <div>
      {settings && (
        <div>
          <h2 className="text-xl font-semibold">{settings.title}</h2>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
