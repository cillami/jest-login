import React from "react";
import { mount } from "enzyme";
import Login from "../components/Login";

it("simulate login failed", () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: "bu", password: "hu" });
  wrapper.find('[data-test="form"]').simulate("submit");
  expect(wrapper.find(".error").text()).toEqual("Wrong password or email");
});

it("simulate login success", () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: "cilla@cilla.se", password: "Cillami1" });
  wrapper.find('[data-test="form"]').simulate("submit");
  expect(wrapper.find(".success").text()).toEqual("Logged in");
});

// handleChange = ({ target }) => this.setState({ [target.name]: target.value });

it.skip("handle change, target", () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const value = "hejhej";
  // const target = {
  //   name: "email",
  //   value: "hejhej"
  //   };
  wrapper.setState({ email: value });
  wrapper.instance().handleChange(value);
});
