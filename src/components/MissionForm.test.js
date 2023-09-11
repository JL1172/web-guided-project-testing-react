import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";
import MissionForm from './MissionForm';

test("missionForm renders correctly",()=> {
    rtl.render(<MissionForm/>)
})