import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";
import App from './App';
import mockFetchMissions from './api/fetchMissions';

jest.mock('./api/fetchMissions');

test("renders page", () => {
    rtl.render(<App />);
})

test("fetches and renders mission data", async () => {
    rtl.render(<App />);
    mockFetchMissions.mockResolvedValueOnce({
        data: [
            { mission_name: "Mission 1", mission_id: "mission 1" },
            { mission_name: "Mission 2", mission_id: "mission 2" },
        ]
    })
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await rtl.waitFor(() => {
        expect(screen.getAllByTestId("mission")).toHaveLength(2);
    })
})

