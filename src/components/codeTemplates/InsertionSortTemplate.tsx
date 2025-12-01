import type { FC } from "react";

interface IInsertionSortTemplateProps {
  highlightIds: string[];
}

const InsertionSortTemplate: FC<IInsertionSortTemplateProps> = ({
  highlightIds,
}) => {
  const insertionCode = [
    { text: "def insertionSort(numbers: list[int]) -> None:", id: "start" },
    { text: "    n: int = len(numbers)" },
    { text: "    for i in range(1, n):" },
    { text: "        element: int = numbers[i]", id: "elementToInsert" },
    { text: "        j: int = i - 1" },
    { text: "        while j >= 0 and element < numbers[j]:", id: "compare" },
    {
      text: "            numbers[j + 1] = numbers[j]",
      id: "shift",
    },
    {
      text: "            j -= 1",
    },
    {
      text: "        numbers[j + 1] = element",
      id: "insert",
    },
  ];

  return (
    <pre className="code-block">
      {insertionCode.map((line, index) => {
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

export default InsertionSortTemplate;
