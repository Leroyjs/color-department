export const BASE_URL = 'http://45.11.27.63/api/v1'

const arrayOfImages = [
    "https://i.postimg.cc/0rMRdbBC/img-01.jpg",
    "https://i.postimg.cc/RJnkMDHY/img-02.jpg",
    "https://i.postimg.cc/G8N0nCHY/img-03.jpg",
    "https://i.postimg.cc/WFtRy3bT/img-04.jpg",
];

export async function getContent(params = '', props = {}) {
    try {
        const res = await fetch(`${BASE_URL}/${params}`, props);
        return res.json();
    } catch (e) {
        console.log(e);
    }
}

export function getCasesPreviews(data = []) {
    return data?.map(({preview}) => preview || '') || [];
}

export function getsColourists(data = []) {
    const uniqValues = [];

    data.reduce((acc, item) => {
        if (!item?.credentials?.colorist) return acc;
        if (acc.indexOf(item?.credentials?.colorist) === -1) {
            acc.push(item['credentials']['colorist']);
            uniqValues.push({ label: item['credentials']['colorist'], value: item['credentials']['colorist'] });
        }
        return acc;
    }, []);

    return uniqValues;
}
