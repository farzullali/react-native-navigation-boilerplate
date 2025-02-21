export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    meta: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  }