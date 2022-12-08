import { compact, uniq } from 'lodash-es';
import { v4 } from 'uuid';
export const createTagsFromString = (tag_string) => {
    console.log('tag_string', tag_string);
    const replaced = tag_string.replaceAll(/\,|\.|\;|;,/gm, ' ');
    const tags_titles = uniq(compact(replaced.split(' ')));
    return tags_titles.map((tag) => ({
        id: v4(),
        tag_title: tag
    }));
};
//# sourceMappingURL=NewArticle.helper.js.map