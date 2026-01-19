import type { FC } from "react";
import { isNullOrWhitespace } from "../../utils/stringHelper";
import type { ISortTemplateProps } from "../../types";

const MergeSortTemplate: FC<ISortTemplateProps> = ({
  className,
  highlightIds,
}) => {
  const mergeSortCode = [
    { text: "def mergeSort(numbers: list[int]) -> None:", id: "start" },
    { text: "    n = len(numbers)" },
    { text: "    if n <= 1:", id: "baseCase" },
    {
      text: "        return",
      id: "baseCase",
    },
    { text: "" },
    { text: "    mid: int = n // 2", id: "splittingHalves" },
    { text: "    leftHalf: list[int] = numbers[0:mid]", id: "splittingHalves" },
    {
      text: "    rightHalf: list[int] = numbers[mid:n]",
      id: "splittingHalves",
    },
    { text: "" },
    { text: "    mergeSort(leftHalf)" },
    { text: "    mergeSort(rightHalf)" },
    { text: "" },
    { text: "    merge(leftHalf, rightHalf, numbers)", id: "mergeCall" },
    { text: "" },
    {
      text: "def merge(leftHalf: list[int], rightHalf: list[int], numbers: list[int]) -> None:",
    },
    { text: "    i: int = 0" },
    { text: "    j: int = 0" },
    { text: "    k: int = 0" },
    { text: "" },
    {
      text: "    while i < len(leftHalf) and j < len(rightHalf):",
    },
    {
      text: "        if leftHalf[i] > rightHalf[j]:",
      id: "takeRight",
    },
    { text: "            numbers[k] = rightHalf[j]" },
    { text: "            j += 1" },
    { text: "        else:", id: "takeLeft" },
    { text: "            numbers[k] = leftHalf[i]" },
    { text: "            i += 1" },
    { text: "        k += 1" },
    { text: "" },
    { text: "    while i < len(leftHalf):", id: "pasteRemainingLeft" },
    { text: "        numbers[k] = leftHalf[i]" },
    { text: "        i += 1" },
    { text: "        k += 1" },
    { text: "" },
    { text: "    while j < len(rightHalf):", id: "pasteRemainingRight" },
    { text: "        numbers[k] = rightHalf[j]" },
    { text: "        j += 1" },
    { text: "        k += 1" },
    { text: "" },
    { text: "    return", id: "mergeCompleted" },
  ];

  return (
    <pre
      className={`code-block${isNullOrWhitespace(className) ? "" : ` ${className}`}`}
    >
      {mergeSortCode.map((line, index) => {
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

export default MergeSortTemplate;
