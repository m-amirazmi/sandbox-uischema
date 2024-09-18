import { ContainerSettings } from "@/types/schema.ui.types";

interface FormContainerProps {
  id: string;
  children: React.ReactNode;
  settings?: ContainerSettings;
}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="bg-white p-4">
      <div>{children}</div>
    </div>
  );
};
