import React from 'react';
import { Button, Input, Textarea } from '@/shared/ui';
import { useAppSelector } from '@/store';
import { useQuoteDetails } from '@/entities/quotes';

export type QuotesDetailsProps = {
    isCreate: boolean;
};

const QuotesDetails = ({ isCreate }: QuotesDetailsProps) => {
    const { quote } = useAppSelector((state) => state.activeQuote);

    const {
        handleChange,
        genreState,
        setGenreState,
        handleBack,
        handleSetGenre,
        handleRemoveFromGenre,
        handleSubmit,
        valid,
    } = useQuoteDetails();

    return (
        <>
            <form
                onSubmit={(e) => handleSubmit(e, isCreate)}
                className="flex justify-between flex-wrap"
            >
                <div className="pr-2 w-1/2">
                    <Input
                        required
                        name="author"
                        placeholder="Автор"
                        value={quote.author}
                        onChange={handleChange}
                        error={valid.author.error}
                        errorText={valid.author.message}
                    />
                </div>
                <div className="pl-2 w-1/2 flex justify-between">
                    <Input
                        name="genre"
                        placeholder="Жанры"
                        value={genreState}
                        onChange={(e) => setGenreState(e.currentTarget.value)}
                        error={valid.genre.error}
                        errorText={valid.genre.message}
                    />
                    <Button
                        variant="circle"
                        className="ml-2"
                        disabled={!genreState}
                        onClick={handleSetGenre}
                    >
                        +
                    </Button>
                </div>
                <div className="pt-2 w-full flex flex-wrap items-center">
                    <p className="text-black text-xs mt-2">
                        Добавленные жанры:
                    </p>
                    {quote.genre.map((genre) => (
                        <span
                            key={genre}
                            className="px-3.5 py-1.5 ml-2 mt-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                        >
                            {genre}
                            <button
                                className="bg-transparent hover focus:outline-none"
                                onClick={(e) => handleRemoveFromGenre(e, genre)}
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="times"
                                    className="w-2 ml-3"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 352 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                    />
                                </svg>
                            </button>
                        </span>
                    ))}
                </div>
                <div className="pt-4 w-full">
                    <Textarea
                        required
                        name="text"
                        placeholder="Текст цитаты"
                        value={quote.text}
                        onChange={handleChange}
                        error={valid.text.error}
                        errorText={valid.text.message}
                    />
                </div>
                <div className="pt-4 w-full flex">
                    <Button variant="dark" onClick={handleBack}>
                        Назад
                    </Button>
                    <Button
                        variant="success"
                        type="submit"
                        className="ml-2"
                        disabled={
                            valid.text.error ||
                            valid.genre.error ||
                            valid.author.error
                        }
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
        </>
    );
};

export { QuotesDetails };
