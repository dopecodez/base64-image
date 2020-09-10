import { mimeError } from "./errors";
import { ERROR_MESSAGES } from "./messages";

export function findMimeType(base64: string) {
    const mimeType = base64?.match(/[^:/]\w+(?=;|,)/)![0];
    if(mimeType){
        validateMimeType(mimeType);
    }
}

function validateMimeType(base64: string) {
    const mimeType = base64?.match(/[^:/]\w+(?=;|,)/)![0];
    if(supportedMimeTypes.includes(mimeType)){
        return true;
    }
    throw new mimeError(`${ERROR_MESSAGES.UNSUPPORTED_MIME_TYPE}${mimeType}`);
}

const supportedMimeTypes = [
    'png',
    'jpg',
    'svg',
    'jpeg',
    'gif'
]