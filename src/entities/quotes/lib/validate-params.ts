const lettersLatin = /^[a-zA-Z]*$/;
const lettersCyrillic = /^[ЁёА-я]*$/;

export class ValidateQuoteParams {
    static author(value: string) {
        return {
            error: !value
                ? true
                : !(lettersLatin.test(value) || lettersCyrillic.test(value)),
            message:
                'Поле автор не может быть пустым, и могут использоваться только буквы',
        };
    }

    static text(value: string) {
        return {
            error: !value.trim(),
            message: 'Поле текст не может быть пустым',
        };
    }

    static genre(value: string[]) {
        return {
            error: Array.isArray(value) && value.length === 0,
            message: 'Поле жанр не может быть пустым',
        };
    }
}
