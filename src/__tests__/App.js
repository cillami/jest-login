import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
    const rapper = shallow(<App user='' />);
    expect(rapper.find(".user")).not.toEqual('');
});

it('should render <App /> with user', () => {
    const user = "snoopdogg";
    const rapper = shallow(<App user={user} />)
    expect(rapper.find(".user").text()).toContain(user);
});

it('call the internal method loginSuccessful', () => {

});

it('call the internal method logout', () => {

});