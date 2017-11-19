import { AsyncStorage } from "react-native";
import { CALENDAR_STORAGE_KEY } from "./_calendar";

export const submitEntry = ({ entry, key }) => {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
};

export const removeEntry = key => {
  return AsyncStorage.getItem(key).then(results => {
    const data = JSON.parse(results);

    Object.keys(data).reduce((accumulator, currentKey) => {
      if (key !== currentKey) {
        accumulator[currentKey] = data[currentKey];
      }

      return accumulator;
    }, {});
    // data[key] = undefined;
    // delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
};
