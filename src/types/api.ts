// Type cho lỗi API
export interface ApiError {
    message: string;
    code?: number;
    details?: string;
}

export interface ApiOne<T> {
    data: T;
    message?: string;
}

export interface ApiList<T> {
    data: T[];
    totalCount: number;
    message?: string;
}
