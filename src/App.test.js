import React from 'react';
//import { render } from '@testing-library/react';
import App from './App';
import CategoriesSelect from "./components/Select";
import { shallow } from 'enzyme/build'
import {Spinner} from "./components/Spinner"
import {Error} from "./components/Error"


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/ruidos/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.mock("./components/UseGetData", () => jest.fn())

describe("Test App component", () => {
  it("should render Spinner while isloading and not render error", () => {
    const UseGetData = require('./components/UseGetData')
    UseGetData.mockImplementation(() => ({ tipusincidencies: [], incidencies: [], error: null, loading: true }))
    const wrapper = shallow(<App />)
    expect(wrapper.find(Spinner)).toHaveLength(1)
    expect(wrapper.find(Error)).toHaveLength(0)

  })

  it("should render Error if error is not null and not render loading", () => {
    const UseGetData = require('./components/UseGetData')
    UseGetData.mockImplementation(() => ({ tipusincidencies: [], incidencies: [], error: "anything", loading: false }))
    const wrapper = shallow(<App />)
    expect(wrapper.find(Spinner)).toHaveLength(0)
    expect(wrapper.find(Error)).toHaveLength(1)
  })


})


