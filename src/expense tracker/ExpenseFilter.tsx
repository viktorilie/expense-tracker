import { categories } from "../App";

interface Props {
  onSelectCategrory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategrory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategrory(event.target.value)}>
        <option>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
