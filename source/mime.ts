import { mimeError } from "./errors";
import { ERROR_MESSAGES } from "./messages";

export function findMimeType(base64: string) {
    let mimeTypeArray = base64?.match(/[^:/]\w+(?=;|,)/);
    let mimeType = 'png';
    if (mimeTypeArray && mimeTypeArray[0]) {
        mimeType = mimeTypeArray[0];
    }
    validateMimeType(mimeType);
    return mimeType;
}

export function validateMimeType(mimeType: string) {
    if (supportedMimeTypes.includes(mimeType)) {
        return true;
    }
    throw new mimeError(`${ERROR_MESSAGES.UNSUPPORTED_MIME_TYPE}${mimeType}`);
}

const supportedMimeTypes = [
    'png',
    'jpg',
    'jpeg',
    'gif'
]