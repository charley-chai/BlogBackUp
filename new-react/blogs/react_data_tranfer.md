# React与Redux
## React中的数据传递
React中的数据有两种：prop和state。其中prop负责对外的数据交互，state负责内部的数据管理。
### React中的prop
prop是*property*的简写，一个React组件通过定义prop来确定自己对外的数据接口，外部环境就通过prop来与组件进行交流。
#### 1. 组件通过prop与外界交互
假如说有一个我们自定义的组件`<MyComp>`，那么我们在使用这个组件的时候就可以按照如下的方式来通过prop向该组件传入数据：
```html
<MyComp name="charley" class="btn" onClick={onBtnClick}></MyComp>
```
其中的*name*、*class*、*onClick*就是prop。可以看到prop的类型还可以是函数，组件可以通过调用类型为函数的prop来将一些信息反馈给外界。

这里还需要注意一点，prop应该由外部组建设置，本组件并不能对其进行修改。
#### 2. 组件使用prop
`<MyComp>`组件内部如下对prop进行使用
```js
class MyComp extends Component {
  constructor () {
    super()
    // ...
  }
  // ...
  render () {
    return (
      <div onClick={ this.props.onClick.bind(this) }>
        <span>{ this.props.name }</span>
      </div>
    )
  }
}
```
### React中的State
state代表的是内部的状态，例如我们开发一个有计数器的组件，其所记的数就可以作为一个state。在使用state的时候，我们首先要对其进行初始化，在对其进行更新的时候，使用setSate函数进行。
#### 1. 初始化state
state的初始化在constructor()函数中完成。
```js
constructor() {
  super()
  this.state = {
    count : this.props.count
  }
}
```
#### 2. state更新
假如说我们这个组件中有一个"+"按钮，每次我们按这个按钮的时候，count就需要加1，其更新的方式为：
```js
handleClick () {
  this.setState({
    count : this.state.count + 1
  })
}
```
## 一个完整的例子
```js
class MyCount extends Component {
  constructor () {
    super()
    this.state = {
      count : this.props.initNumber || 0
    }
  }

  handleAddClick () {
    this.setState({
      count : this.state.count + 1
    }) 
  }

  render () {
    return (
      <div>
        { this.state.count }
        <button onClick={this.handleAddClick.bind(this)}>+</button>
        <button>-</button>
      </div>
    )
  }
}
```