import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    // setFilter: string;
    options: OptionProps[];
}

export interface CustomManufacturerProps{
    selected: string;
    setSelected: (manufacturer: string) => void;
}

export interface CustomCarCardProps{
    city_mpg: number;
    class:string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    fuel_type: string;
    highway_mpg: string;
    make: string;
    model: string;
    transmission: string;
    drive: string;
    year: number;
}

export interface FilterProps{
    year: number;
    fuel: string;
    limit: number;
    manufacturer: string;
    model: string;
}
export interface HomeProps {
    searchParams: FilterProps;
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: Boolean;
    // setLimit: ;
  }