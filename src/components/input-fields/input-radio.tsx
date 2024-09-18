import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface InputRadioProps {
  label: string;
  id: string;
  error?: string;
  options: { value: string; label: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  label,
  options,
  error,
  onValueChange,
  value,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{label}</Label>
      <RadioGroup
        id={id}
        value={value}
        onValueChange={onValueChange}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`${id}-${option.value}`} />
            <Label htmlFor={`${id}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
