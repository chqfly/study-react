import React from 'react';
import { Link } from 'react-router-dom';

const navConfig = [
    {
        to: 'input',
        name: 'input'
    },
    {
        to: 'select',
        name: 'select'
    },
    {
        to: 'parent-child-lifeCycle',
        name: 'parent-child-lifeCycle'
    },
    {
        to: 'context',
        name: 'context'
    },
    {
        to: 'testState',
        name: 'testState'
    },
    {
        to: 'testState2',
        name: 'testState2'
    },
    {
        to: 'showWindowWidth',
        name: 'showWindowWidth'
    },
    {
        to: 'useSelect',
        name: 'useSelect'
    },
    {
        to: 'useMemo',
        name: 'useMemo'
    },
]
export default function Nav() {
    return (
        <ul>
        {
            navConfig.map((navItem, key) => {
                return (
                    <li key={key}>
                        <Link to={navItem.to}>{navItem.name}</Link>
                    </li>
                )
            })
        }
        </ul>
    )
}