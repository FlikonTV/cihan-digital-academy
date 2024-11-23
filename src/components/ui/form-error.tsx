import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function FormError({ message }: { message: string }) {
  if (!message) return null;
  
  return (
    <div className="flex items-center gap-2 text-sm text-destructive mt-1">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}