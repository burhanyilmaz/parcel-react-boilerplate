import React from 'react';
import { shallow } from 'enzyme';
import ParcelHome from '../../container/ParcelHome/ParcelHome';


describe("ParcelHone Component Testing", () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<ParcelHome />)
        
    })

    it ('ParcelHome component snapshot testing', function() {
        expect(wrapper).toMatchSnapshot();
    });

    it ("ParcelHome'da bulunan string'lerin kontrolü.", () => {
        const wrapper = shallow(<ParcelHome />);

        expect(wrapper.text()).toContain("Parcel React Boilerplate");
        expect(wrapper.text()).toContain("+");
        expect(wrapper.text()).toContain("−");
    });
});
