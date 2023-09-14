import { FunctionComponent } from "react";
export declare type PaginationProps = {
    page: number;
    pageCount: number;
    onClick: (page: number) => void;
};
declare const Pagination: FunctionComponent<PaginationProps>;
export default Pagination;
