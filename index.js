import data from './data.json' assert { type: 'json' };

const categoryElement = ({ category, score, icon }) => `
<div>
  <span>
    <img src="${icon}"/>
    ${category}
  </span>
  <span>${score} / 100</span>
</div>
`;

const generateSummary = (data) =>
  data.map((category) => categoryElement(category)).join('');

window.onload = () => {
  const summaryCategoriesDiv = document.querySelector('#summaryCategoriesDiv');
  summaryCategoriesDiv.innerHTML = generateSummary(data);
};
