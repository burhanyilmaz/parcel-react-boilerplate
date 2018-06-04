import React from 'react';
import { shallow } from 'enzyme';
import CounterHome from '../../container/CounterHome/CounterHome';


describe("ParcelHone Component Testing", () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<CounterHome />)
        
    })

    it ('ParcelHome component snapshot testing', function() {
        expect(wrapper).toMatchSnapshot();
    });

    it ("ParcelHome'da bulunan string'lerin kontrolü.", () => {
        const wrapper = shallow(<CounterHome />);

        expect(wrapper.text()).toContain("Parcel React Boilerplate");
        expect(wrapper.text()).toContain("+");
        expect(wrapper.text()).toContain("−");
    });
});
