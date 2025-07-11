export interface PaginationResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  page_size: number;
  total_rows: number;
  total_pages: number;
}
