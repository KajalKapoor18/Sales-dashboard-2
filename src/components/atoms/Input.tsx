interface InputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export default function Input({ value, onChange }: InputProps) {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter sales threshold"
        className="border p-2 rounded-lg w-48"
      />
    );
  }
  