import React, { lazy, Suspense } from 'react';
import './TabLoader.css'

function TabLoader({ path }) {
    const TabComponent = lazy(() => import(`../../tabs/${path}`));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={'component'}>
                <TabComponent />
            </div>
        </Suspense>
    );
}

export default TabLoader;
