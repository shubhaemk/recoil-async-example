import { selector } from 'recoil';
import { pageId } from './atom';

const url = `https://reqres.in/api/users?page=`;

export const fetchUserDetailsWithAtom = selector({
    key: 'userDetailsSelector',
    get: async ({ get }) => {
        try {
            const pageIdValue = get(pageId);
            const response = await fetch(`${url}${pageIdValue}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return []
        }
    }
});

//export const fetchUserDetailsWithParameter = 