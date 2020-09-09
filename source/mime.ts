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
    return false;
}

const supportedMimeTypes = [
    'png',
    'jpg',
    'jpeg',
    'gif'
]