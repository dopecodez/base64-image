import { findMimeType } from './mime';
import path from 'path';
import { checkValidDestination, writeToMemory } from './file';
import { checkIfValidBase64 } from './base64';

//The initial async convert function
const base64 = async (base64String: string, destPath: string, fileName: string) => {
    try{
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

base64.toBase = () => {
    
}

export default base64;
// For CommonJS default export support
module.exports = base64;
module.exports.default = base64;