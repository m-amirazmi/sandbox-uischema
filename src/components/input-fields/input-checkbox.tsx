import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface CheckboxInputProps {
  label: string;
  id: string;
  error?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const InputCheckbox: React.FC<CheckboxInputProps> = ({
  id,
  label,
  checked,
  error,
  onCheckedChange,
}) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <Label htmlFor={id}>{label}</Label>
      </div>
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
