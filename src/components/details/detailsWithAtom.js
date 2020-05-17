import React from 'react';
import { useRecoilValueLoadable} from 'recoil';
import { fetchUserDetailsWithAtom } from './store/selector';

function DetailsWithAtom() {

    const userDetailsWithAtom = useRecoilValueLoadable(fetchUserDetailsWithAtom);

    const { state } = userDetailsWithAtom;

    if(state === 'loading'){
        return <div>Its loading</div>
    }

    if(state === 'hasValue'){
        const { contents: { data }} = userDetailsWithAtom;
        return (
            data.map(item => (
                <div key={item.id}>
                    <p>{`Email: ${item.email} Name: ${item.first_name} ${item.last_name}`}</p>
                </div>
            ))
        );
                    
    }

    if(state === 'hasError'){
        return <div> There is some problem! </div>
    }
}

export default DetailsWithAtom;
