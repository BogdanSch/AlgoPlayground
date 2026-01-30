import {
  useState,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { ArrayInput } from "../../types";
import { isNullOrWhitespace } from "../../utils/stringHelper";
import { numbersSequenceGenerator } from "../../utils/numbersGenerators";

interface IArrayInputFormProps {
  setCollection: Dispatch<SetStateAction<number[]>>;
}
const forbiddenPattern: RegExp = /[^0-9,\s-]/;

const ArrayInputForm: FC<IArrayInputFormProps> = ({ setCollection }) => {
  const [formData, setFormData] = useState<ArrayInput>({
    size: 10,
    elements: "",
  });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    const { value, name } = event.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValid = (): boolean => {
    const errors: Record<string, string> = {};

    if (formData.elements.length <= 0) {
      setValidationErrors(errors);
      return true;
    } else if (!formData.elements.includes(",")) {
      errors.elements = "Separate the elements using comma";
    } else if (forbiddenPattern.test(formData.elements)) {
      errors.elements =
        "Only numbers and commas are allowed (no special characters like ' ! _ : ;)";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!isValid()) return;

    let elements: number[];
    if (!isNullOrWhitespace(formData.elements)) {
      elements = formData.elements.split(",").map((str) => Number(str.trim()));
    } else {
      elements = numbersSequenceGenerator(formData.size);
    }

    setCollection(elements);
  };

  return (
    <form className="sorting-input-form card" onSubmit={handleSubmit}>
      <div className="card-body">
        <h2 className="heading text-center mb-4">Inputs</h2>
        <div className="mb-3">
          <label
            className="form-label sorting-input-form__label"
            htmlFor="sizeRange"
          >
            Array size*:
          </label>
          <input
            name="size"
            id="sizeRange"
            onInput={handleChange}
            type="range"
            className="form-range"
            min={2}
            max={30}
            value={formData.size}
            required
          />
          <output
            className="sorting-input-form__output"
            htmlFor="arraySizeRange"
            id="rangeValue"
            aria-hidden="true"
          >
            {formData.size}
          </output>
        </div>
        <div className="mb-3">
          <label
            className="form-label sorting-input-form__label"
            htmlFor="elementsInput"
          >
            Array elements (optional):
          </label>
          <input
            name="elements"
            id="elementsInput"
            className="form-control"
            type="text"
            placeholder="Type multiple values. Use comma to separate values: "
            onChange={handleChange}
            value={formData.elements}
          />
          {!isNullOrWhitespace(validationErrors.elements) && (
            <div className="alert alert-danger mt-3" role="alert">
              {validationErrors.elements}
            </div>
          )}
        </div>
        <div id="arrayInputFormHelp" className="form-text mb-3">
          All fields marked with (*) are required to be filled in
        </div>
        <div className="buttons">
          <button className="btn btn-primary btn-icon" type="submit">
            <i className="bi bi-activity"></i>
            <span>Process</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArrayInputForm;
