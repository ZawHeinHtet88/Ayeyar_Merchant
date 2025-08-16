"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, PlusCircle } from "lucide-react";
import * as React from "react";

type Option = {
  _id: string;
  name: string;
};

interface CreatableSelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  createLabel?: string;
  notFoundText?: string;
  className?: string;
}

export function CreatableSelect({
  options,
  value,
  onChange,
  placeholder = "Select an delivery type",
  createLabel = "Create",
  notFoundText = "No options found.",
  className,
}: CreatableSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const showCreateOption =
    searchValue.length > 0 &&
    !options.some(
      (option) => option.name.toLowerCase() === searchValue.toLowerCase()
    );

  const displayValue =
    options.find((option) => option.name === value)?.name || value;
  const handleCreate = (newValue: string) => {
    onChange(newValue);
    setSearchValue("");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {displayValue || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandList>
            <CommandEmpty>{notFoundText}</CommandEmpty>
            {filteredOptions.length > 0 && (
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option._id}
                    value={option.name}
                    onSelect={() => handleCreate(option.name)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {showCreateOption && (
              <CommandGroup>
                <CommandItem
                  value={searchValue}
                  onSelect={() => {
                    onChange(searchValue);
                    setOpen(false);
                    setSearchValue("");
                  }}
                  className="text-muted-foreground"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  {`${createLabel} "${searchValue}"`}
                </CommandItem>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
