import React from 'react';
import renderer from 'react-test-renderer';
import ImageItem from './ImageItem.js';

const testObject = {
  url:
  "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
  title: "UniWhal",
  description: "A unicorn and a narwhal nuzzling their horns",
  keyword: "narwhal",
  horns: 1
}

it('ImageItem renders a UniWhal', () => {
  const tree = renderer
    .create(<ImageItem creature={testObject} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});