import { uuid } from 'uuidv4';

import {UNAUTHORIZED} from '../../errors';
import {cacheExercise} from './cacheExercises';
import {getCacheFile, saveCacheFile} from '../../utils/fileSystem';
import {sameString} from '../../utils/string';

//TODO: Instead of always caching from DB, only cache the inserted exercise 
//TODO: Build a task to clear the exercise cache due to stale data
export const addExercise = (admin) => async ({exercise, idtoken}) => {
    // if (!idtoken) {
    //     return UNAUTHORIZED
    // }

    try {
        // const token = await admin.auth().verifyIdToken(idtoken);        

        // if (token.admin) {
            const {exercises} = await getCacheFile('exercises');
        
            // exercise already exists in the cache
            if (Array.isArray(exercises) && exercises.some(({name}) => sameString(name, exercise.name))) {
                return {
                    status: 409,
                    message: `${exercise.name} - already exists`
                }
            } else {
                // exercise doesnt exist in the cache
                const exerciseId = uuid().replace(/\-/g, '');
                const id = await admin.firestore().collection('exercises').doc(exerciseId).set(exercise);

                // ONLY CACHE THIS EXERCISE
                // await cacheExercise({
                //     id: exerciseId,
                //     ...exercise
                // })

                return {
                    status: 201,
                    message: `${exercise.name} - was successfully added`
                }
            }
        // }

        return UNAUTHORIZED
    } catch (error) {
        return {
            error: error.code,
            message: error.message
        };
    }       
}