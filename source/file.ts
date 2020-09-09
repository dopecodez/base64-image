import fs from 'fs';
import {promisify} from 'util';
const writeFile = promisify(fs.writeFile);

export function checkValidDestination(destination: string) {
    return fs.existsSync(destination) ? true : false;
}

export async function writeToMemory(filePath: string, data: string) {
    await writeFile(filePath, data, { encoding: 'base64' });
};