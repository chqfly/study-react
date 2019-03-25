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
import ShowWindowWidth from '../components/ShowWindowWidth';
import UseSelect from '../components/UseSelect';
import UseMemoComponent from '../components/UseMemoComponent';

const { Fragment } = React

export default function routerConfig() {
    return (
        <BrowserRouter>
            <Fragment>
                <Nav />
                <Route path="/input" component={Input} />
                <Route path="/select" component={Select} />
                <Route path="/parent-child-lifeCycle" component={ParentChildLifeCycle} />
                <Route path="/context" component={Context} />
                <Route path="/testState" component={TestState} />
                <Route path="/testState2" component={TestState2} />
                <Route path="/showWindowWidth" component={ShowWindowWidth} />
                <Route path="/useSelect" component={UseSelect} />
                <Route path="/useMemo" component={UseMemoComponent} />
            </Fragment>
        </BrowserRouter>
    );
}