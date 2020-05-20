import React from 'react';
import { useRecoilValue } from 'recoil';
import { fetchUserDetails } from './store/selector';

function DetailsWithSuspense() {
    const userDetails = useRecoilValue(fetchUserDetails);
    const { data } = userDetails;
    
    return (
        data.map(item => (
            <div key={item.id}>
                <p>{`Email: ${item.email} Name: ${item.first_name} ${item.last_name}`}</p>
            </div>
        ))
    );
}

export default DetailsWithSuspense;
