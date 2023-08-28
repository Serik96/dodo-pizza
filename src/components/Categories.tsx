import { memo } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

type CategoriesProps = {
  categoryId: number;
  onChangeCategoryId: (idx: number) => void;
};

export const Categories: React.FC<CategoriesProps> = memo(
  ({ categoryId, onChangeCategoryId }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((value, index) => (
            <li
              key={index}
              onClick={() => onChangeCategoryId(index)}
              className={categoryId === index ? "active" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
