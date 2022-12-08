export interface ITag {
	id: string;
	tag_title: string;
}

export interface INewArticleStore {
	new_article_modal_is_open: boolean;
	new_article_title: string;
	new_article_description: string;
	new_article_content: string;
	tags: ITag[];
	new_article_tags_input: string;
}
