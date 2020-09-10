import { base64InvalidError } from "./errors";
import { ERROR_MESSAGES } from "./messages";

export function checkIfValidBase64(base64: string) {
    if((/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/).test(base64)){
        return;
    }
    throw new base64InvalidError(ERROR_MESSAGES.INVALID_BASE_64_STRING);
}

export function checkIfValidUrl(urlOrPath: string) {
    if(/http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(urlOrPath)){
        return true;
    } else
    return false;
}

export function bufferToString(buffer: Buffer) {
    return buffer.toString('base64');
}