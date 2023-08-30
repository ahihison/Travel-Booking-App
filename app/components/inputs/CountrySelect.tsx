"use client";
import useCountries from "@/app/hooks/useCountries";

import Select from "react-select";
export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};
interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
const handleFormatOptionLabel = (option: any) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div>{option.flag}</div>
      <div>
        {option.label}
        <span className="text-neutral-500 ml-1">{option.region}</span>
      </div>
    </div>
  );
};
const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Any where"
        options={getAll()}
        isClearable
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => handleFormatOptionLabel(option)}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
