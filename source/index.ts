import { findMimeType } from './mime';
import path from 'path';
import { checkValidDestination, writeToMemory, isImage, readFileAndConvert } from './file';
import { checkIfValidBase64, checkIfValidUrl, bufferToString } from './base64';
import fetch from 'node-fetch';

//The initial async convert function
const base64 = async (base64String: string, destPath: string, fileName: string) => {
    try {
        checkIfValidBase64(base64String);
        const mimeType = findMimeType(base64String);
        const data = base64String.replace(/^data:image\/\w+;base64,/, '');
        const filePath = path.join(__dirname, destPath);
        const fullPath = path.join(filePath, fileName + `.${mimeType}`);
        if (checkValidDestination(filePath)) {
            await writeToMemory(fullPath, data);
        }
        return fullPath;
    } catch (error) {
        throw error;
    }
}

base64.toBase64 = async (urlOrPath: string) => {
    if (checkIfValidUrl(urlOrPath)) {
        const response = await fetch(urlOrPath);
        const responseBuffer = await response.buffer();
        return bufferToString(responseBuffer);
    } else {
        isImage(urlOrPath);
        return await readFileAndConvert(urlOrPath);
    }
}

export default base64;
// For CommonJS default export support
module.exports = base64;
module.exports.default = base64;