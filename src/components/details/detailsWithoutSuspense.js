import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { fetchUserDetails } from './store/selector';

function DetailsWithoutSuspense() {

    const userDetails = useRecoilValueLoadable(fetchUserDetails);
    const { state } = userDetails;
    
    if (state === 'hasError') {
        return <div> There is some problem! </div>
    }

    if(state === 'loading'){
        return <div>Its loading</div>
    }

    if(state === 'hasValue'){
        const { contents: { data }} = userDetails;
        return (
            data.map(item => (
                <div key={item.id}>
                    <p>{`Email: ${item.email} Name: ${item.first_name} ${item.last_name}`}</p>
                </div>
            ))
        );
                    
    }
}

export default DetailsWithoutSuspense;
