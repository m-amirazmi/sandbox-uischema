import { StepSettings } from "@/types/schema.ui.types";

interface FormStepProps {
  id: string;
  children: React.ReactNode;
  settings?: StepSettings;
}

export const FormStep: React.FC<FormStepProps> = ({ children }) => {
  return (
    <div className="border border-gray-500 p-4 bg-transparent">
      <div>{children}</div>
    </div>
  );
};
