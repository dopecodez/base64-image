export class base64ImageError extends Error {
    code?: string;
    constructor(message: string, code?: string) {
        super(message);
        this.name = 'base64ImageError';
        this.code = code;
    }
}

export class base64InvalidError extends Error {
    code?: string;
    constructor(message: string, code?: string) {
        super(message);
        this.name = 'base64StringInalid';
        this.code = code;
    }
}

export class mimeError extends base64ImageError {
    constructor(message: string) {
        super(message);
        this.name = 'mimeTypeError';
    }
}

export class filePathError extends base64ImageError {
    constructor(message: string) {
        super(message);
        this.name = 'filePathError';
    }
}