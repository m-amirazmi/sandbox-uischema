import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { FieldCombinedSettings } from "@/types/schema.ui.types";

interface FormFieldCombinedProps {
  refFieldId: string;
  id: string;
  children: React.ReactNode;
  settings?: FieldCombinedSettings;
}

export const FormFieldCombined: React.FC<FormFieldCombinedProps> = ({
  children,
  settings,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-start space-x-3">
        <Checkbox
          className="mt-1"
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
        />
        {settings && (
          <div>
            <Label
              htmlFor="smartKeyReplacement"
              className="text-lg font-semibold"
            >
              {settings.title}
            </Label>
            <p className="text-sm text-gray-600 mt-1">{settings.description}</p>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2 ml-7">{children}</div>
    </div>
  );
};
