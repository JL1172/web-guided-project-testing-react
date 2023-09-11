import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";
import MissionsList from './MissionsList';


const missions = [
    { mission_name: 'Telstar', mission_id: 'F4F83DE' },
    { mission_name: 'Iridium NEXT', mission_id: 'F3364BF' },
];

test("missions list shows data when rerendered with new missions data",()=> {
    const {rerender} = rtl.render(<MissionsList errors = "" missions = {[]}/>)
    let missionsObject = screen.queryAllByTestId("mission");
    
    expect(missionsObject).toHaveLength(0); 

    rerender(<MissionsList errors = "" missions = {missions}/>)
    missionsObject = screen.queryAllByTestId('mission');
    expect(missionsObject).toHaveLength(2); 
})