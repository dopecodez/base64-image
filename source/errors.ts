export class base64ImgError extends Error {
    code?: string;
    constructor(message: string, code?: string) {
        super(message);
        this.name = 'base64ImgError';
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

export class mimeError extends base64ImgError {
    constructor(message: string) {
        super(message);
        this.name = 'mimeTypeError';
    }
}

export class filePathError extends base64ImgError {
    constructor(message: string) {
        super(message);
        this.name = 'filePathError';
    }
}