// Standar API Response

export type TStandarSuccessApiResponse<T> = {
    data: T,
    message: string,
    code: string,
    metadata: {
        total?: number,
        timeStamp: string,
        toPage?: string,

        responseTime: string,
        endPoint: string,
        method: string,

        dbQueryTime: response,
        cacheHit?: boolean
    };
};

export type TStandarErrorApiResponse = {
    details?: string,
    message: string,
    code: string,
    metadata: {
        timeStamp: string
    };
};