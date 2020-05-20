import { selector } from 'recoil';

const url = `https://reqres.in/api/users?page=1`;

export const fetchUserDetails = selector({
    key: 'userDetailsSelector',
    get: async ({ get }) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    }
});