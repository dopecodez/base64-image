import fs from 'fs';
import {promisify} from 'util';
import { filePathError, mimeError } from './errors';
import { ERROR_MESSAGES } from './messages';
import path from 'path';
import { bufferToString } from './base64';
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

export function checkValidDestination(destination: string) {
    if(fs.existsSync(destination)){
        return true;
    }
    throw new filePathError(`${ERROR_MESSAGES.FILE_PATH_DOES_NOT_EXIST}${destination}`)
}

export async function writeToMemory(filePath: string, data: string) {
    await writeFile(filePath, data, { encoding: 'base64' });
};

export function isImage(path: string) {
    checkValidDestination(path);
    if (validTypeImage(path)) {
        if(fs.statSync(path).isFile()) {
            return true;
        }
        throw new filePathError(`${ERROR_MESSAGES.FILE_PATH_DOES_NOT_EXIST}${path}`)
    }
    throw new mimeError(ERROR_MESSAGES.UNSUPPORTED_MIME_TYPE);
}

function validTypeImage(image: string) {
    return /(?<=\S+)\.(jpg|png|jpeg|gif)/gi.test(image);
}

export async function readFileAndConvert(fileName: string) {
    return bufferToString(await readFile(path.resolve(fileName)));
}