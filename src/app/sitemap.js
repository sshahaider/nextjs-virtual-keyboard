import { keyboardslist } from "./utails";


export const revalidate = '360000';

export default async function sitemap() {

    const date = new Date().toISOString();

    const pages = [
        {
            slug: '/',
            priority: 1,
        },
        {
            slug: '/contact',
            priority: 0.5,
        },
        {
            slug: '/policy',
            priority: 0.5,
        },
        {
            slug: '/terms-of-use',
            priority: 0.5,
        }
    ]
    const routes = pages.map((route) => ({
        url: `https://keyboardos.com${route.slug}`,
        lastModified: date,
        priority: route.priority
    }))


    const KeyboardsRouts = keyboardslist.map(({t}) => ({
        url: `https://keyboardos.com/${t.toLowerCase()}`,
        lastModified: date,
        priority: 0.8
    }))

    return [...routes, ...KeyboardsRouts];
}