export type QuotesCreateParamsType = {
    text: string;
    author: string;
    genre: string[];
};

export type QuotesType = {
    text: string;
    author: string;
    genre: string[];
    id: string;
    createdAt: string;
    updatedAt: string;
};
