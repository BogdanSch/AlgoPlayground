import type { FC } from "react";
import { isNullOrWhitespace } from "../../utils/stringHelper";
import type { ISortTemplateProps } from "../../types";

const SelectionSortTemplate: FC<ISortTemplateProps> = ({
  className,
  highlightIds,
}) => {
  const selectionCode = [
    { text: "def selectionSort(numbers: list[int]) -> None:", id: "start" },
    { text: "    n: int = len(numbers)" },
    { text: "    for i in range(n):" },
    { text: "        minIndex: int = i", id: "minIndex" },
    { text: "        for j in range(i + 1, n):" },
    {
      text: "            if numbers[j] < numbers[minIndex]:",
      id: "compare",
    },
    {
      text: "                minIndex = j",
      id: "isLess",
    },
    {
      text: "        numbers[i], numbers[minIndex] = numbers[minIndex], numbers[i]",
      id: "swap",
    },
  ];

  return (
    <pre
      className={`code-block${isNullOrWhitespace(className) ? "" : ` ${className}`}`}
    >
      {selectionCode.map((line, index) => {
        const isHighlighted = line.id && highlightIds.includes(line.id);
        return (
          <div
            key={index}
            className={
              "code-block__line" +
              (isHighlighted ? " code-block__line--highlight" : "")
            }
          >
            {line.text}
          </div>
        );
      })}
    </pre>
  );
};

export default SelectionSortTemplate;
