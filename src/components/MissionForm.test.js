import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";
import MissionForm from './MissionForm';

test("missionForm renders correctly",()=> {
    rtl.render(<MissionForm/>)
})

test("renders the message when isFetchingData is true",()=> {
    rtl.render(<MissionForm isFetchingData = {true}/>);
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
})

test("renders button when isFetchingData is false",()=> {
    rtl.render(<MissionForm isFetchingData ={false}/>);
    const button = screen.getByRole("button"); 
    expect(button).not.toBeNull;
})

test("calls getData when button is pressed",()=> {
    const mockGetData = jest.fn(()=>{}); //* spies 
    rtl.render(<MissionForm getData = {mockGetData}/>);
    const button = screen.getByRole("button"); 
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockGetData.mock.calls).toHaveLength(2); //*this is saying to expect an api call once, because calls returns an array with every call
})