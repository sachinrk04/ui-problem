export const pastels = [
    '#AFF8D8',
    '#FFCBC1',
    '#FBE4FF',
    '#D8FFD8',
    '#C4FAF8',
    '#E7FFAC',
    '#ACE7FF',
    '#FFABAB',
    '#FFB5E8',
  ];
  
  export const getPastelIndexFor = (idx) => idx % pastels.length;
  
  export const getPastelForIndex = (idx) => pastels[getPastelIndexFor(idx)];
  