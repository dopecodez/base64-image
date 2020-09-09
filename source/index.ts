import { findMimeType } from './mime';
import path from 'path';
import { checkValidDestination, writeToMemory } from './file';

//The initial async convert function
const base64 = async (base64String: string, destPath: string, fileName: string) => {
    try{
        const mimeType = findMimeType(base64String);
        const data = base64String.replace(/^data:image\/\w+;base64,/, '');
        const filePath = path.join(__dirname, destPath);
        if (checkValidDestination(filePath)) {
            const fullPath = path.join(filePath, fileName + `.${mimeType}`);
            await writeToMemory(fullPath, data);
        }
    } catch (error) {
        throw error;
    }
}

export default base64;
// For CommonJS default export support
module.exports = base64;
module.exports.default = base64;