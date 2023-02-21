import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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
    expect(para).toBeInTheDocument();
  });

  it("triggers handleClick with correct id on div click", () => {
    const id = 1;
    const name = "Some name";
    const imgUrl = "https://example.com/image.jpg";
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Card id={id} name={name} imgUrl={imgUrl} handleClick={handleClick} />
    );

    const div = getByRole("img");
    fireEvent.click(div);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(id);
  });
});
