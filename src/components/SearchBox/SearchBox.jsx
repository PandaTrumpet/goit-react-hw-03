import css from "./SearchBox.module.css";
import { useId } from "react";
export default function SearchBox({ value, onChange }) {
  const searchId = useId();
  return (
    <div className={css.searchContainer}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id={searchId}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
