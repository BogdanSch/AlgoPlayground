import type { FC } from "react";

interface IBubbleSortTemplateProps {
  highlightIds: string[];
}

const BubbleSortTemplate: FC<IBubbleSortTemplateProps> = ({ highlightIds }) => {
  const bubbleCode = [
    { text: "def bubbleSort(numbers: list[int]) -> None:" },
    { text: "    n: int = len(numbers)" },
    { text: "    for i in range(n - 1):", id: "begin" },
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
    <pre className="code-block">
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
