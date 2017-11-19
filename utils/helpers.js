import React from "react";
import { View } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { white } from "./colors";

export const getMetricMetaInfo = metric => {
  const info = {
    run: {
      displayName: "Run",
      max: 100,
      unit: "kilometers",
      step: 1,
      type: "steppers",
      getIcon() {
        return (
          <View>
            <MaterialIcons name="directions-run" color="black" size={35} />
          </View>
        );
      }
    },
    bike: {
      displayName: "Bike",
      max: 200,
      unit: "kilometers",
      step: 1,
      type: "steppers",
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="bike" color="black" size={35} />
          </View>
        );
      }
    },
    swim: {
      displayName: "Swim",
      max: 10000,
      unit: "meters",
      step: 100,
      type: "steppers",
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="swim" color="black" size={35} />
          </View>
        );
      }
    },
    sleep: {
      displayName: "Sleep",
      max: 24,
      unit: "hours",
      step: 100,
      type: "slider",
      getIcon() {
        return (
          <View>
            <FontAwesome name="bed" color="black" size={35} />
          </View>
        );
      }
    },
    eat: {
      displayName: "Eat",
      max: 10,
      unit: "rating",
      step: 1,
      type: "slider",
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="food" color="black" size={35} />
          </View>
        );
      }
    }
  };

  return !metric ? info : info[metric];
};

export const calculateDirection = heading => {
  let direction = "";

  if (isBetween(heading, 0, 22.5)) {
    direction = "North";
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = "North East";
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = "East";
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = "South East";
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = "South";
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = "South West";
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = "West";
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = "North West";
  } else if (isBetween(heading, 337.5, 360)) {
    direction = "North";
  } else {
    direction = "Calculating";
  }

  return direction;
};

export const timeToString = (time = Date.now()) => {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
};