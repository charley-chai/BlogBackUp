## React的prop和state在数据管理上的局限性
### 局限性分析
#### 数据的一致性问题
假如说我们现在开发一个组件`<CountBoard>`，他所要进行的工作就是维护三个子组件`<Counter>`，同时显示这三个组件的count之和。这个时候，父组件`<CountBoard>`就需要使用state来维护其三个子组件`<Counter>`的计数和，但是这个时候，如果某一个`<Counter>`的由于除了差错而忘记通知父组件计数改变了，那么就会造成错误。同时这种情况先还会有数据的冗余记载(父组件和子组件其实同时都在维护同样的计数)。

另一个问题就是关于style，例如说我们的组件有light和dark两种模式，我们如果仅仅依赖于state和prop来对整个UI进行style的调整的时候就需要很繁复的操作。
#### 参数的跨级传递问题
有的时候，还会遇到某个父组件需要和其子组件的子组件之间进行数据通信，如果只有state和prop的话，该父组件就必须通过其子组件当做中间人才能达到这种通信需求，但是这个中间人并不对这些数据感兴趣，这其实不仅增加了工作量而且也增加了出错的概率。

### MVC框架
在介绍React的数据管理框架之前，可以简单无了解一下MVC。见另一篇博文
[浅谈MVC，MVVM](https://www.google.com)

## React中的数据管理框架
经过上面的分析，显然仅仅使用React的state和prop来管理数据是不太合适的。其实早在2013年Facebook发布React的时候，就同时推出了Flux数据管理框架，来弥补React中数据管理的缺陷。而之后又出现了基于Flux的Redux。
### 1. Flux框架
回想MVC，其中的C(Controller)接受请求(用户输入等)，并根据这些请求调用M(Model)来产生数据，并将产生的数据交给V(View)来显示。

而Flux则有四部分构成：
- Dispatcher：动作分发
- Store：数据存储和处理数据逻辑
- View：视图部分
- Action：驱动Dispatcher

其数据传输图如下所示，注意他是一个单向的数据流。

和MVC进行对比，Dispatcher就相当于Controller，Store就相当于Model，View就是View，而Action就相当于用户请求。在MVC的框架之下，当我们需要增加一个功能是，就需要更新Controller，这样当功能很多的时候，它就会显得很复杂；而在使用Flux时，并不需要改变Dispatcher，只需要增加一个Action就可以了。

下面就来试着用一下它吧。

#### 下载安装
```
npm install --save flux
```
