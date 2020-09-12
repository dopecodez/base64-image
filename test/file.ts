import { checkValidDestination, isImage } from '../source/file';
import test from 'ava';

test('Throws error on invalid destination', t => {
    t.throws(() => {
        checkValidDestination(__dirname + '/doesNotExist')
    });
});

test('Returns true on valid destination', t => {
    let doesExist = checkValidDestination(__dirname);
    t.is(doesExist, true);
});

test('Throws error on invalid type', t => {
    t.throws(() => {
        isImage(__dirname + '/sampleBase64.txt')
    });
});

test('Returns true on invalid Type', t => {
    t.throws(() => {
        isImage(__dirname + '/sampleBase64.png')
    });
});

test('Returns true for images which exist', t => {
    let doesExist = isImage(__dirname + '/test.jpg');
    t.is(doesExist, true);
});


