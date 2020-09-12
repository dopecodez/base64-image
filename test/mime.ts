import { findMimeType, validateMimeType } from '../source/mime';
import test from 'ava';
import fs from 'fs';

test('Returns png for base64 without type', t => {
    let mime = findMimeType('xxij@@');
    t.is(mime, 'png');
});

test('Finds and returns valid type from supplied base64', t => {
    const base64Buffer = fs.readFileSync(__dirname + '/sampleBase64WithType.txt');
    const base64String = base64Buffer.toString();
    let mime = findMimeType(base64String);
    t.is(mime, 'jpeg');
});

test('Returns true for supported mimeType', t => {
    let mime = validateMimeType('png');
    t.is(mime, true);
});

test('Throws error on invalid base64', async t => {
    t.throws(() => {
        validateMimeType('svg')
    });
})
