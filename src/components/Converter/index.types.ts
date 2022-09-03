import { IOption } from "components/Select/index.types";

export type ChosenValue = Pick<IOption, "name" | "value">;

export type InputsValue = Record<string, string | number>;
