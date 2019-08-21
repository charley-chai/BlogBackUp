# 代码文件的组织

## 按角色组织

在之前的MVC框架下，通常的代码组织方式为：
```
.
+-- controllers
|   +-- todoController.js
|   +-- filterController.js
+-- models
|   +-- todoModel.js
|   +-- filterModel.js
+-- views
|   +-- todo.js
|   +-- todoItem.js
|   +-- filter.js
```

这种按照MVC的角色来组织的方式就是"按角色组织”。但是由于React并不是一个MVC框架，所以我们不使用这种方式。

## 按功能组织

