import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface Ratingprops extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}