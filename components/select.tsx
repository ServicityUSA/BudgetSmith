"use client";

import { on } from "events";
import { useMemo } from "react";
import { SingleValue } from "react-select";
import CreateableSelect from "react-select/creatable";

type Props = {
  onChange: (value: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export default function Select({
  onChange,
  onCreate,
  options = [],
  value,
  disabled,
  placeholder,
}: Props) {
  const onSelect = (option: SingleValue<{ label: string; value: string }>) => {
    onChange(option?.value || "");
  };

  const formattedValue = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <CreateableSelect
      placeholder={placeholder}
      className="tex-sm h-10"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#e2e8f0",
          ":hover": { borderColor: "#e2e8f0" },
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  );
}
