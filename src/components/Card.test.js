import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Card from "./Card";

describe("Card", () => {
  it("renders image and a p element", () => {
    const id = 1;
    const name = "Foo";
    const imgUrl = "http://example.com/foo.jpg";
    const handleClick = jest.fn();

    const { getByAltText, getByText } = render(
      <Card id={id} name={name} imgUrl={imgUrl} handleClick={handleClick} />
    );
    const image = getByAltText(name);
    const para = getByText(name);

    expect(image).toBeInTheDocument();
    expect(image.src).toBe(imgUrl);
    expect(para).toBeInTheDocument();
  });
});
