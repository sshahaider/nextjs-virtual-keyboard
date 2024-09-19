
import React from 'react';
import Similler from './Similler';
import { keyboardslist } from '@/app/utails';

const KeyBoards = ({ pathname }) => {

    const filteredConverters = keyboardslist.filter(item => item.link !== pathname);

    return <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4'>
        {filteredConverters.map((item) => <Similler key={item.link} item={item} />
        )}
    </div>
}

export default KeyBoards
