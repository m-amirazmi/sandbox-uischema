import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { FieldCollapsibleSettings } from "@/types/schema.ui.types";

interface FormFieldCollapsibleProps {
  refFieldId: string;
  id: string;
  children: React.ReactNode;
  settings?: FieldCollapsibleSettings;
}

export const FormFieldCollapsible: React.FC<FormFieldCollapsibleProps> = ({
  children,
  settings,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-start gap-2">
        {settings && (
          <div className="w-[460px]">
            <h2 className="text-xl font-semibold">{settings.title}</h2>
            <p className="text-sm text-gray-600">{settings.description}</p>
          </div>
        )}
        <span className="ml-auto">
          {isExpanded
            ? settings?.checkboxCheckedLabel
            : settings?.checkboxUnCheckedLabel}
        </span>
        <Checkbox
          id="expandToggle"
          checked={isExpanded}
          onCheckedChange={handleExpandToggle}
        />
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-2 mt-4">
          <div>{children}</div>
          {settings && (
            <div>
              <p className="text-gray-500 text-sm">{settings.note}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
