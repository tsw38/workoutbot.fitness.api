import {getCacheFile, saveCacheFile} from '../../utils/fileSystem';

const getExercises = async (admin) => {
    const snapshot = await admin.firestore().collection('exercises').get();

    const data = Array.from(snapshot.docs).map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return data;
}

export default async (admin) => {
    const exercises = await getExercises(admin);
    const settings = getCacheFile('settings');

    saveCacheFile('settings', 'json', {
        ...settings,
        exercises: exercises.length
    })

    saveCacheFile('exercises', 'json', {
        exercises
    });
}

export const cacheExercise = async (exercise) => {
    // console.warn('hello world', exercise);

    const {exercises} = getCacheFile('exercises');
    // console.warn('still works');
    const settings = getCacheFile('settings');
    // console.warn('still works', settings);

    // console.warn('caching this?', {
    //     exercises: [
    //         ...(exercises || []),
    //         exercise
    //     ]
    // });

    saveCacheFile('exercises', 'json', {
        exercises: [
            ...(exercises || []),
            exercise
        ]
    });

    saveCacheFile('settings', 'json', {
        exercises: ++settings.exercises || 1
    });
}