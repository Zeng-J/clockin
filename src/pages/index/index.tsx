import { useCallback, useState } from "react";
import { View, Text, Textarea, Button } from "@tarojs/components";
import TypeSelector from "@components/TypeSelector/index";
import "./index.scss";

const timelines = [
  {
    time: "03/21",
    left: {
      name: "pyy",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
        {
          id: 2,
          desc: "fitness for half an hour",
          score: 2,
        },
      ],
    },
    right: {
      name: "zdg",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
      ],
    },
  },
  {
    time: "03/21",
    left: {
      name: "pyy",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
        {
          id: 2,
          desc: "fitness for half an hour",
          score: 2,
        },
      ],
    },
    right: {
      name: "zdg",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
      ],
    },
  },
  {
    time: "03/21",
    left: {
      name: "pyy",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
        {
          id: 2,
          desc: "fitness for half an hour",
          score: 2,
        },
      ],
    },
    right: {
      name: "zdg",
      events: [
        {
          id: 1,
          desc: "read for an hour",
          score: 2,
        },
      ],
    },
  },
];

export default function Index() {
  const [typeVisible, setTypeVisible] = useState<boolean>(false);
  const handleCloseTypeVisible = useCallback(() => setTypeVisible(false), []);

  const personalRender = (data) => (
    <View className="index_personal">
      <View className="index_personal_name">
        <Text>{data.name}</Text>
        <Text className="index_personal_score">+2</Text>
      </View>
      <View className="index_personal_events">
        {data.events.map((item) => (
          <View className="index_personal_events_item" key={item.id}>
            {item.desc}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View className="index">
      <View className="index_header">
        <Text className="index_header_title">Hello world!</Text>
        <Text className="index_header_time">2022/03/25</Text>
      </View>
      <View className="index_timeline">
        {timelines.map((item) => (
          <View key={item.time} className="index_timeline_item">
            {personalRender(item.left)}
            <View className="index_timeline_item_time">
              <View>{item.time}</View>
              <View>周一</View>
            </View>
            {personalRender(item.right)}
          </View>
        ))}
      </View>
      <View className="index_pk">
        <View className="index_pk_title">PK</View>
        <View className="index_pk_list">
          <View className="index_pk_list_item">
            <Text>pyy:</Text>
            <Text className="index_pk_score">10</Text>
          </View>
          <View className="index_pk_list_item">
            <Text>zdg:</Text>
            <Text className="index_pk_score">9</Text>
          </View>
        </View>
      </View>
      <View className="index_check">
        <View className="index_check_btn" onClick={() => setTypeVisible(true)}>
          今日签到，快人一步
        </View>
      </View>
      <View className="index_comment">
        <View className="index_comment_title">留言</View>
        <Textarea
          className="index_comment_text"
          autoHeight
          placeholder="来分享你的快乐吧～"
        />
        <Button type="primary">发表</Button>
      </View>
      <TypeSelector visible={typeVisible} onClose={handleCloseTypeVisible} />
    </View>
  );
}
