/* global xit, describe, expect, jest */

import React from 'react'; // eslint-disable-line no-unused-vars
import Datetime from '../DateTime.js';
import renderer from 'react-test-renderer';

// findDOMNode is not supported by the react-test-renderer,
// and even though this component is not using that method
// a dependency is probably using it. So we need to mock it
// to make the tests pass.
// https://github.com/facebook/react/issues/7371
jest.mock('react-dom', () => ({
    findDOMNode: () => {},
}));

// Mock date to get rid of time as a factor to make tests deterministic
Date.now = jest.fn(() => 1482363367071);

xit('everything default: renders correctly', () => {
    const tree = renderer.create(
        <Datetime />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

xit('value: set to arbitrary value', () => {
    const tree = renderer.create(
        <Datetime defaultValue={Date.now()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

xit('defaultValue: set to arbitrary value', () => {
    const tree = renderer.create(
        <Datetime defaultValue={Date.now()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('dateFormat', () => {
    xit('set to true', () => {
        const tree = renderer.create(
            <Datetime dateFormat={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to false', () => {
        const tree = renderer.create(
            <Datetime dateFormat={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('timeFormat', () => {
    xit('set to true', () => {
        const tree = renderer.create(
            <Datetime timeFormat={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to false', () => {
        const tree = renderer.create(
            <Datetime timeFormat={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('input', () => {
    xit('input: set to true', () => {
        const tree = renderer.create(
            <Datetime input={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('input: set to false', () => {
        const tree = renderer.create(
            <Datetime input={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('open', () => {
    xit('set to true', () => {
        const tree = renderer.create(
            <Datetime open={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to false', () => {
        const tree = renderer.create(
            <Datetime open={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('viewMode', () => {
    xit('set to days', () => {
        const tree = renderer.create(
            <Datetime viewMode={'days'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to months', () => {
        const tree = renderer.create(
            <Datetime viewMode={'months'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to years', () => {
        const tree = renderer.create(
            <Datetime viewMode={'years'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('set to time', () => {
        const tree = renderer.create(
            <Datetime viewMode={'time'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

xit('className: set to arbitraty value', () => {
    const tree = renderer.create(
        <Datetime className={'arbitrary-value'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('inputProps', () => {
    xit('with placeholder specified', () => {
        const tree = renderer.create(
            <Datetime inputProps={{ placeholder: 'arbitrary-placeholder' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('with disabled specified', () => {
        const tree = renderer.create(
            <Datetime inputProps={{ disabled: true }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('with required specified', () => {
        const tree = renderer.create(
            <Datetime inputProps={{ required: true }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('with name specified', () => {
        const tree = renderer.create(
            <Datetime inputProps={{ name: 'arbitrary-name' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit('with className specified', () => {
        const tree = renderer.create(
            <Datetime inputProps={{ className: 'arbitrary-className' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

xit('isValidDate: only valid if after yesterday', () => {
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = (current) => current.isAfter(yesterday);
    const tree = renderer.create(
        <Datetime isValidDate={ valid } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

xit('renderDay: specified', () => {
    const renderDay = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <Datetime renderDay={renderDay} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

xit('renderMonth: specified', () => {
    const renderMonth = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <Datetime renderMonth={renderMonth} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

xit('renderYear: specified', () => {
    const renderYear = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <Datetime renderYear={renderYear} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
