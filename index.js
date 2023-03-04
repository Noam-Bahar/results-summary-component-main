'use strict';

import data from './data.json' assert { type: 'json' };

const colors = {
  Reaction: 'lightRed',
  Memory: 'orangeyYellow',
  Verbal: 'greenTeal',
  Visual: 'cobaltBlue',
};

const getColor = (color, opacity) => `${color}${opacity ? `/${opacity}` : ''}`;
const bgColor = (color, opacity) => `bg-${getColor(color, opacity)}`;
const textColor = (color, opacity) => `text-${getColor(color, opacity)}`;

const categoryElement = ({ category, score, icon }) => `
<div
  class="p-4 flex justify-between ${bgColor(
    colors[category],
    5
  )} rounded-xl font-bold"
>
  <div class="${textColor(colors[category])}">
    <img src="${icon}" class="inline" />
    <span class="m-2">${category}</span>
  </div>
  <div class="text-darkGrayBlue">
    ${score}
    <span class="text-darkGrayBlue/50"> / 100</span>
  </div>
</div>
`;

const generateSummary = (data) =>
  data.map((category) => categoryElement(category)).join('');

window.onload = () => {
  const summaryCategoriesDiv = document.querySelector('#summaryCategoriesDiv');
  summaryCategoriesDiv.innerHTML = generateSummary(data);
};
