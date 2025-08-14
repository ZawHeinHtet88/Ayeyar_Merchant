export interface BaseApiResponse {
 status : string;
 isSuccess: boolean;
 message ?:string;
}


export interface BasePagination {
  page: number;
  limit: number;
}

export interface Pagination {
  entriesPerPage: number;
  page: number;
  totalResult: number;
  foundResult: number;
}


