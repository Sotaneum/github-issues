import Store from "../lib/Store";
import LabelList from "../core/LabelList";
import LabelCreateUI from "../core/LabelCreator";

import { CLASS_NAME } from "../constants";
import { toFetch } from "../utils/helper";

const DATA_SOURCE_LABEL = "/labels";

const initializeLabel = async (target) => {
  const items = await toFetch(DATA_SOURCE_LABEL);
  const label = new Store(items);

  const listUI = new LabelList(label, target, () => {
    const itemUI = new LabelCreateUI(CLASS_NAME["label"].ADD_FORM, label);
    listUI.addEvent(() => itemUI.toggle());
  });

  listUI.updateItems();
  label.subscribe(() => listUI.updateItems());
};

export default initializeLabel;
