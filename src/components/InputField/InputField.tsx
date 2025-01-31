import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TInputFieldProps } from "@/utils/Type";


const InputField = ({
  id,
  label,
  type,
  placeholder,
  icon: Icon,
  register,
  validation,
  error,
}: TInputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="pl-10"
          {...register(id, validation)}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
