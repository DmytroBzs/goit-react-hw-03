import css from "./SearchBox.module.css";

export default function SearchBox  ({ value, onFilter }) {
  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Harry Potter"
      />
    </div>
  );
}