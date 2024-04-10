import { useId } from "react";
export default function SearchBox({ value, onChange }) {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
