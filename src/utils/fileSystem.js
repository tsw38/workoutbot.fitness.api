import path from 'path';
import fs from 'fs';

export const cwd = process.cwd();

export const getCacheFile = (file, extension = 'json') => {
    return JSON.parse(fs.readFileSync(path.resolve(cwd, 'cache', `${file}.${extension}`), 'utf-8'));
}

export const saveCacheFile = (file, extension = 'json', data) => {
    fs.writeFileSync(path.resolve(cwd, 'cache', `${file}.${extension}`), JSON.stringify(data));
}