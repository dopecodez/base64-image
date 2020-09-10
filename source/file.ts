import fs from 'fs';
import {promisify} from 'util';
import { filePathError } from './errors';
import { ERROR_MESSAGES } from './messages';
const writeFile = promisify(fs.writeFile);

export function checkValidDestination(destination: string) {
    if(fs.existsSync(destination)){
        return true;
    }
    throw new filePathError(ERROR_MESSAGES.FILE_PATH_DOES_NOT_EXIST)
}

export async function writeToMemory(filePath: string, data: string) {
    await writeFile(filePath, data, { encoding: 'base64' });
};