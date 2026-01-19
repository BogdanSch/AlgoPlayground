import type { FC } from "react";
import { isNullOrWhitespace } from "../../utils/stringHelper";
import type { ISortTemplateProps } from "../../types";

const BubbleSortTemplate: FC<ISortTemplateProps> = ({
  className,
  highlightIds,
}) => {
  const bubbleCode = [
    { text: "def bubbleSort(numbers: list[int]) -> None:", id: "start" },
    { text: "    n: int = len(numbers)" },
    { text: "    for i in range(n - 1):" },
    { text: "        swapped: bool = False" },
    { text: "        for j in range(n - i - 1):" },
    {
      text: "            if numbers[j] > numbers[j + 1]:",
      id: "compare",
    },
    {
      text: "                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]",
      id: "swap",
    },
    { text: "                swapped = True" },
    {
      text: "        if not swapped:",
      id: "notSwapped",
    },
    { text: "            break" },
  ];

  return (
    <pre
      className={`code-block${isNullOrWhitespace(className) ? "" : ` ${className}`}`}
    >
      {bubbleCode.map((line, index) => {
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

export default BubbleSortTemplate;
