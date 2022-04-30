import React, { useCallback, useState, useEffect, memo } from "react";

import { View, Icon, ScrollView, Text, Button } from "@tarojs/components";

import { isIPhoneX } from "@src/utils";

import "./index.scss";

export interface TypeSelectorLabeledValue {
  value: number;
  label: string;
}

interface TypeSelectorProps {
  visible: boolean;
  onClose?: () => void;
  onChange?: (v: TypeSelectorLabeledValue) => void;
  initialValue?: TypeSelectorLabeledValue;
  value?: TypeSelectorLabeledValue;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({
  visible,
  onClose = () => {},
  onChange = () => {},
  initialValue,
  value,
}) => {
  const [isIPX] = useState<boolean>(isIPhoneX);

  const [selected, setSelected] = useState<
    TypeSelectorLabeledValue | undefined
  >(value || initialValue);

  useEffect(() => {
    // 保持组件的选中值，和父组件的value一致
    if (typeof value !== "undefined" && value.value !== selected?.value) {
      setSelected(value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, value]);

  const handleConfirm = useCallback(() => {
    if (selected) {
      onChange(selected);
      onClose();
    }
  }, [selected, onChange, onClose]);

  return (
    <View className="ts-container">
      {/* 蒙层 */}
      {visible && <View className="ts-mask" onClick={onClose} />}
      {visible && (
        <View className={`ts-wrap ${isIPX ? "ts-wrap-IPX" : ""}`}>
          <View
            className="iconfont icon-CloseOutlined ts-close"
            onClick={onClose}
          />
          <View className="ts-head">
            <View className="ts-head-title">选择打卡类型</View>
          </View>
          <ScrollView scrollY className="ts-scroll">
            <View className="ts-options">
              {[].map((item) => (
                <View
                  key={item.value}
                  onClick={() => setSelected(item)}
                  className="ts-option"
                >
                  <Text className="ts-option_label">{item.label}</Text>
                  <Icon
                    className="ts-option_icon"
                    {...(selected?.value === item.value
                      ? {
                          type: "success",
                          color: "#3098ff",
                        }
                      : {
                          type: "circle",
                        })}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <View className="ts-footer">
            <Button type="primary" onClick={handleConfirm}>
              确定
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(TypeSelector);
