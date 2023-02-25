import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigateHelper(name, params = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBackHelper() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function resetHelper(name) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: name }],
    });
  }
}
