import { findMimeType, validateMimeType } from './mime';
import path from 'path';
import { checkValidDestination, writeToMemory, isImage, readFileAndConvert } from './file';
import { checkIfValidUrl, bufferToString, checkIfValidBase64 } from './base64';
import fetch from 'node-fetch';
import { base64ImageOptions } from './types';

//The initial async convert function
const base64Image = async (base64String: string, destPath: string, fileName: string, options?: base64ImageOptions) => {
    try {
        let mimeType;
        if (!options?.type) {
            mimeType = findMimeType(base64String);
        } else {
            mimeType = options.type;
            validateMimeType(mimeType)
        }
        const data = base64String.replace(/^data:image\/\w+;base64,/, '');
        checkIfValidBase64(data);
        const filePath = path.join(destPath);
        const fullPath = path.join(filePath, fileName + `.${mimeType}`);
        if (checkValidDestination(filePath)) {
            await writeToMemory(fullPath, data);
        }
        return fullPath;
    } catch (error) {
        throw error;
    }
}

base64Image.toBase64 = async (urlOrPath: string) => {
    if (checkIfValidUrl(urlOrPath)) {
        const response = await fetch(urlOrPath);
        const responseBuffer = await response.buffer();
        return bufferToString(responseBuffer);
    } else {
        isImage(urlOrPath);
        return await readFileAndConvert(urlOrPath);
    }
}

export default base64Image;
// For CommonJS default export support
module.exports = base64Image;
module.exports.default = base64Image;

// Export types
export {
    base64ImageOptions
} from './types';