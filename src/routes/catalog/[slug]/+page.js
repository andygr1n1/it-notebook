export const load = ({ params }) => {
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        },
        params
    };
};
//# sourceMappingURL=+page.js.map