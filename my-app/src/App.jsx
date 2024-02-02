import React from "react";

import "./styles/App.css";

import articleImg from "./assets/images/gatinho1.png"
import articleImg2 from "./assets/images/gatinho2.png"

import { NavBar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <>
      <NavBar />
      {/* <Counter /> */}
      <section id="articles">
        <Article 
          title={'New title'}
          provider='Author'
          description='Morbi lobortis, purus a convallis cursus, augue eros finibus justo, at maximus erat lorem sed diam. Fusce molestie volutpat elit, non imperdiet risus finibus ut. Proin eget dapibus erat, et tempor nisi. Nullam non tempus lorem, id convallis velit. Donec scelerisque nisl sit amet semper hendrerit. Ut quis facilisis nisi, sed viverra quam. Donec gravida elit est, sed venenatis leo porta at. Fusce volutpat tellus quis euismod dapibus. Mauris in erat arcu. Duis nec sodales felis. Vestibulum at elit varius, elementum elit eu, rhoncus diam. Sed viverra gravida ex, sit amet pretium neque sodales eu. Suspendisse ornare, nisl vel porta convallis, velit leo volutpat nulla, at accumsan massa mauris eget sem. Sed sed ex scelerisque, facilisis nulla a, cursus lectus. In porta libero in viverra dignissim. Suspendisse bibendum dapibus velit, ut malesuada nisi tempus sed.'
          thumbnail={articleImg}
        />
        <Article 
          title={'Another another title'}
          provider='Author 2'
          description='Morbi lobortis, purus a convallis cursus, augue eros finibus justo, at maximus erat lorem sed diam. Fusce molestie volutpat elit, non imperdiet risus finibus ut. Proin eget dapibus erat, et tempor nisi. Nullam non tempus lorem, id convallis velit. Donec scelerisque nisl sit amet semper hendrerit. Ut quis facilisis nisi, sed viverra quam. Donec gravida elit est, sed venenatis leo porta at. Fusce volutpat tellus quis euismod dapibus. Mauris in erat arcu. Duis nec sodales felis. Vestibulum at elit varius, elementum elit eu, rhoncus diam. Sed viverra gravida ex, sit amet pretium neque sodales eu. Suspendisse ornare, nisl vel porta convallis, velit leo volutpat nulla, at accumsan massa mauris eget sem. Sed sed ex scelerisque, facilisis nulla a, cursus lectus. In porta libero in viverra dignissim. Suspendisse bibendum dapibus velit, ut malesuada nisi tempus sed.'
          thumbnail={articleImg2}
        />
      </section>
    </>
  );
}

export default App;
