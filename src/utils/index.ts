import { getSystemInfoSync } from "@tarojs/taro";

export function isIPhoneX() {
  try {
    const res = getSystemInfoSync();
    return /^(iPhone X|iPhone 11|iPhone 12|iPhone 13)/.test(res.model);
  } catch (e) {
    return false;
  }
}
