import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
// import './index.css';
import { Tree, Switch } from "antd";
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: (
              <span
                style={{
                  color: "#1890ff",
                }}
              >
                sss
              </span>
            ),
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];
//doc
// https://ant.design/docs/react/introduce
//https://ant.design/components/tree/
const TreeView = ({ nodes }) => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div>
      
      <Tree
        checkable
        defaultExpandedKeys={["0-0-0", "0-0-1"]}
        defaultSelectedKeys={["0-0-0", "0-0-1"]}
        defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={nodes}
        showLine={{ showLeafIcon: false }}
        showIcon={false}
      />
    </div>
  );
};
export default TreeView;
// ReactDOM.render(<Demo />, document.getElementById('container'));
