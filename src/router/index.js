import React from 'react';
import { 
    BrowserRouter,
    Route,
} from 'react-router-dom';

import Input from '../components/Input';
import Select from '../components/Select';
import Nav from '../components/Nav';
import ParentChildLifeCycle from '../components/ParentChildLifeCycle';
import Context from '../components/Context';
import TestState from '../components/TestState';
import TestState2 from '../components/TestState2';

export default function routerConfig() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Route path="/input" component={Input} />
                <Route path="/select" component={Select} />
                <Route path="/parent-child-lifeCycle" component={ParentChildLifeCycle} />
                <Route path="/context" component={Context} />
                <Route path="/testState" component={TestState} />
                <Route path="/testState2" component={TestState2} />
            </div>
        </BrowserRouter>
    );
}