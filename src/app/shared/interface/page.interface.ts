export interface Paginado<T> {
    totalPages: number;
    totalElements: number;
    pageable: {
      unpaged: boolean;
      paged: boolean;
      pageNumber: number;
      pageSize: number;
      offset: number;
      sort: {
        unsorted: boolean;
        sorted: boolean;
        empty: boolean;
      };
    };
    numberOfElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: T[]; // <- Aqui o conteúdo é dinâmico
    number: number;
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    empty: boolean;
  }