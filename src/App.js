import React from "react";
import styles from "./App.module.css";

window.title = "沙箱内的标题";

// eslint-disable-next-line no-undef
let gTitle = globalTitle || "未定义全局title";

function App(props) {
  const onClick = () => {
    props.testFun();
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h3>微组件名称 {props.microComponentName}</h3>
        <p>微组件属性传值 {props.value}</p>

        <p>沙箱： {window.title}</p>
        <p>全局变量注入: {gTitle}</p>

        <button className={styles.AppButton} onClick={onClick}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
