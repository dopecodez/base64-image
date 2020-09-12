import { checkIfValidBase64, checkIfValidUrl, bufferToString } from '../source/base64';
import test from 'ava';
import fs from 'fs';

test('Throws error on invalid base64', async t => {
    t.throws(() => {
        checkIfValidBase64('$#FF&******')
    });
})

test('Does not throw error on valid base64', t => {
    const base64Buffer = fs.readFileSync(__dirname + '/sampleBase64.txt');
    const base64String = base64Buffer.toString();
    t.notThrows(() => {
        checkIfValidBase64(base64String)
    });
})

test('return false on invalid url', t => {
    let isValid = checkIfValidUrl('asasd');
    t.is(isValid, false);
})

test('return true on valid url', t => {
    let isValid = checkIfValidUrl('https://upload.wikimedia.org/wikipedia/en/f/f3/Dilbert-20050910.png');
    t.is(isValid, true);
})

test('returns string from buffer', t => {
    let result = bufferToString(Buffer.from('asdasd'));
    t.is(typeof result, "string")
})