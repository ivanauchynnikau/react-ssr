const { Counter } = require( '../src/components/counter' );
const { Post } = require( '../src/components/post' );
const { Test } = require( '../src/components/test' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Counter,
    },
    {
        path: '/post',
        exact: true,
        component: Post,
    },
    {
        path: '/test',
        exact: true,
        component: Test,
    }
];