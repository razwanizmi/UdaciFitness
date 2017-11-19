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
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    const newData = Object.keys(data).reduce((accumulator, currentKey) => {
      if (currentKey !== key) {
        accumulator[currentKey] = data[currentKey];
      }
      return accumulator;
    }, {});

    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(newData));
  });
};
