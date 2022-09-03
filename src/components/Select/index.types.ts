export interface IOption {
  name: string;
  value: string | number;
  className?: string;
  id?: string;
}

export interface ISelect {
  value?: string;
  defaultValue?: string;
  label?: string;
  isOpen?: boolean;
  onChange: (value: string) => void;
  onClick?: () => void;
  items?: IOption[];
  style?: Record<string, string | number>;
}
