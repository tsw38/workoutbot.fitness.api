import lunr from 'lunr';
import stemmer from 'stemmer';
import stopword from 'stopword';

import {getCacheFile, saveCacheFile} from '../utils/fileSystem';

const generateSearchIndex = ({documents = [], searchOn = []}) => {
    var index = lunr(function() {
        searchOn.forEach(toSearchOn => {
            this.field(toSearchOn);
        })

        documents.forEach(document => {
            this.add(document);
        })
    });

    return index;
}

const doSearch = (query, documents, searchOn = ['name']) => {
    const searchIndex = generateSearchIndex({
        documents,
        searchOn
    });

    const results = searchIndex.search(query).map(({ref, score}) => ({
        score,
        ...documents.find(({id}) => id === ref)
    }));

    return results;
}

export default async (query) => {
    // stop and stem the query so overly redundant querys dont bog down the results
    const cleanedQuery = stemmer(stopword.removeStopwords(query.split(' ')).join(' '))
    if (!cleanedQuery.length) {
        return [];
    }

    const settings = getCacheFile('settings');
    const rankings = getCacheFile('searchRankings');
    const {exercises} = getCacheFile('exercises');

    const results = doSearch(cleanedQuery, exercises);   

    /**
     * If the number of exercises in ranks and search dont match:
     * Generate new index
     */
    if (settings.exercises !== rankings.exercises) {
        const newResults = {
            exercises: settings.exercises,
            rankings: {
                [cleanedQuery]: results
            }
        };

        saveCacheFile('searchRankings', 'json', newResults);

        return newResults.rankings[cleanedQuery];
    }

    /**
     * The number of exercises in ranks and search DO match:
     *    If ranking does not include the query
     *    save a new cache with previous cache and new search term
     */
    if (settings.exercises === rankings.exercises && !rankings?.rankings?.[cleanedQuery]) {
        const nextResults = {
            ...rankings,
            rankings: {
                ...rankings.rankings,
                [cleanedQuery]: results
            }
        };

        saveCacheFile('searchRankings', 'json', nextResults);

        return nextResults.rankings[cleanedQuery];
    }
    
    return results || [];
}
