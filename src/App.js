import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
/*
class App extends React.Component{

  state = {
    count: 0,
  }

  add = () => {
    this.setState(current => ({count: this.state.count + 1} ));
  };
  minus = () => {
    this.setState(current => ({count: this.state.count - 1} ));
  };

  componentDidMount(){
    console.log("Component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye, cruel World");
  }

  render() {

    console.log("I'm rendering");

    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

}
*/
export default App;

//js파일을 생성하고
//해당 js파일에서 import React from 'react'; 선언
//component를 return 하는 함수 작성
//해당함수를 export default (함수명);
//App의 function App()안에 태그 작성
//component는 대문자로 시작해야한다

//App에 직접작성하는것도 가능
//component의 props는 배열, String등 여러정보를 작성할 수있다
//component를 return하는 함수의 첫번째 argument로 삽입한다
//return문 안에서 중괄호로 묶어서 사용한다
//첫번째 인자로 바로 {props명}을 쓸 수있고
//이 경우 return문에서는 똑같이 적어줘야한다

/* 2-2
JSX에선 {}안에 JS를 넣는다
array를 JS에서 생성하고 JS에서 map으로 반복해서 태그를 반환할 수 있다
태그 내부에서 다시 {}로 JS를 사용한다 이 과정에서
태그와 동명의 함수에서 argument로 적용될 props를 전달해준다.
*/

/* 2-3
외부 함수로 제작해서 map에 넣을 수도 있다
모든 react의 요소는 고유해야하고, id(key)를 넣어주는것으로 에러를 해결할 수 있다
이미지엔 alt옵션이 시각장에인을 위해 존재해야한다(?)
*/

/* 2-4
npm i prop-types설치
type과 isRequired 체크 가능
확인용 플러그인
*/

/* 3-0
class components는
class App extends React.Component{}와 같이 생성
class App은 React.Component를 상속한 내가아는 그 클래스가 맞다
React.Component엔 render method가 있다
React는 자동적으로 모든 class component의 render method를 실행하고자 한다
state는 component의 동적 데이터를 담을 객체다
button에는 onClick이란 prop가 기본적으로 있다(React)
}
*/

/* 3-1
state는 직접변경해서는 안되고, setState를 써야한다
react의 render function의 refresh와 관련있다
react의 외부상태에 의존하지 않는방법으로 current화살표함수가 있다(?) 나중에 뭔소린지 알아보자 state를 set할 때의 기준이다
setState를 호출할 때마다
react는 새로운 state로
render function을 호출한다
*/

/* 3-2
component의 lifecycle에는 관련된 함수가 있다
Mounting은 태어나는것이다
Updating은 업데이트다
Unmounting은 component의 죽음을 의미한다

componentDidMount method는 최초 렌더링 때 사용
componentDidUpdate method는 업데이트 할 때
*/

/* 4-0
async는 비동기선언
await대기선언
async가 있어야 await사용가능
function을 javascript더러 기다리라고 해야함
*/

/* 4-1
class component안에 function component를 불러왔다
외부파일로 영화관련된 JSX를 빼놨다.
여전히 props엔 key가 필요하더라.
*/

/* 4-2
img에 props에 alt와 title을 넣어주는 이유는
마우스를 위에 올렸을 때에 제목이 뜨게 하기 위해서이다
import "./파일명.css"를 통해 css를 삽입가능
JSX에서 style prop을 이용해 style={{내용}}으로 직접사용가능
*/

/* 4-3
map에게는 iten number에 해당하는 index argument가 존재
*/

/* 6-1
라우터는
/이하에 같은 경로의 모든 컴포넌트를 같이 랜더링해버린다
exact는 정확한 경로가 아니면 렌더링 하지 않는다는 뜻으로
위의 문제를 해결해준다
*/

/* 6-2
href로 이동시 강제로 리액트를 죽이고 새로고침한다
react-route-dom에서 {Link}를 import하고
Link tag를 사용해야한다 href대신 to를 쓴다
Link는 route밖에서 쓸 수 없다
BrowserRouter는 해시태그가 없다 깃에넣기 힘들다
노마드코더는 Link를 쓰기전에 Navigation tag를 js로 따로빼줬다
*/

/* 6-3
react의 모든 route들은 props를 가진다(기본옵션)
Link의 to는 string으로 대체가능하다
object로도 가능하며, 더 많은 정보를 담을 수 있다(pathname, state...)

*/

/* 6-4
state Link로 안보내고 그냥 url로 가면 undefined가 된다
이걸 if문으로 잡아서 history.push("/");를 적어둔다
적어두면 자동으로 리다이렉트가 된다
*/
