import React from "react";
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import EightBall from "./EightBall";
// import { exportAllDeclaration } from "@babel/types";
// import toJson from "enzyme-to-json";

it("renders without crashing", function () {
  const div = document.createElement("div");
  ReactDOM.render(<EightBall />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders initial message", function () {
  let wrapper = mount(<EightBall />);
  expect(wrapper.html()).toContain("Think of a Question.");
});

it("it renders correct message", function () {
  let wrapper = mount(<EightBall />);
  wrapper.setState({ msg: "This is a test", color: "green" });
  expect(wrapper.html()).toContain("This is a test");
});

it("it changes default message on click", function () {
  let wrapper = mount(<EightBall />);
  wrapper.simulate("click");
  expect(wrapper.html()).not.toContain("Think of a Question.");
});

it("it works with random messages", function () {
  let answerList = [
    { msg: "hello", color: "red" },
    { msg: "i am hungry", color: "blue" },
    { msg: "whiskey was here", color: "white" }
  ];

  let wrapper = mount(<EightBall answers={answerList} />);
  // wrapper.setProps({answers: answerList});
  // both ways work, they're just different ways to set prop
  wrapper.simulate("click");
  let ball = wrapper.find('span').first();
  let html = ball.html();

  expect(html === "<span>hello</span>" ||
    html === "<span>i am hungry</span>" ||
    html === "<span>whiskey was here</span>").toEqual(true);
});