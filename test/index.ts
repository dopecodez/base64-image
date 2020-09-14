import base64Img from '../source/index';
import test from 'ava';
import fs from 'fs';

test('Creates file and returns', async t => {
    const base64Buffer = fs.readFileSync(__dirname + '/sampleBase64.txt');
    const base64String = base64Buffer.toString();
    await base64Img(base64String, __dirname, 'test', { type: 'jpg' });
    t.is(fs.existsSync(__dirname + '/test.jpg'), true)
});

test('Returns base64 string from image', async t => {
    const base64Buffer = fs.readFileSync(__dirname + '/sampleBase64.txt');
    const base64String = base64Buffer.toString();
    let base64 = await base64Img.toBase64(__dirname + '/test.jpg');
    t.is(base64, base64String);
});
