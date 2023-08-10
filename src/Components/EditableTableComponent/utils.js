import Handsontable from "handsontable";

export const addClassWhenNeeded = (props) => {
  const className = props.cellProperties.className;

  if (className !== 0) {
    Handsontable.dom.addClass(props.TD, className);
  }
};
