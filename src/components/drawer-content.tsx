import React, { useEffect, useRef } from 'react';

interface DrawerContentProps{
    mode: string;
}

const DrawerContent = function({mode}: DrawerContentProps) {
    if (mode === 'Education') {
        return <>
            Education Drawer
        </>
    }else if(mode ==='Skills'){
        return <>
            Skills Drawer
        </>
    }else{
        return <>
            Default drawer
        </>
    }
}

export default DrawerContent;