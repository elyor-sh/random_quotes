export type QuotesCreateParamsType = {
    text: string;
    author: string;
    genre: string[];
};

export type QuotesType = {
    text: string;
    author: string;
    genre: string[];
    _uuid: string;
    _created: string;
    _modified: string;
};
