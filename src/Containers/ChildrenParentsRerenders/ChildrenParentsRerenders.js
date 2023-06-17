import React, { useCallback, useState } from 'react';
import "./ChildrenParentsRerenders.scss";
import ChildComponent from '../../Components/ChildrenParentsRerenders/ChildComponent';
import MovingComponent from '../../Components/ChildrenParentsRerenders/MovingComponent';

const MovingComponentMemo = React.memo(MovingComponent);
const ChildComponentMemo = React.memo(ChildComponent);

export default function ChildrenParentsRerenders() {
    const [state, setState] = useState(1);

    const child = useCallback(() => 
        <ChildComponent source="In useCallback" />,
        []
    );

    return (
        <div className='cp-re-renders-page'>
            <div className="container">
                <button onClick={() => setState(state + 1)}>
                    re-render parent on click {state}
                </button>

                <div className="column">
                    <MovingComponentMemo>{child}</MovingComponentMemo>
                </div>
                <div className="column">
                    <MovingComponent>
                    {() => <ChildComponentMemo source="Memoized child" />}
                    </MovingComponent>
                </div>
            </div>
        </div>
    )
}
