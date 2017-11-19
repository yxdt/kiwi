# HeehApp 开发记录

## [瑞科特科技](http://www.rekete.com)

> ***
> ### 瑞科特科技(北京)有限公司 版权所有 2007-2017
> #### 作者： *T.Y.X.D*
> #### 版本号：Ver 1.0.0  最后更新 2017-11-19
> ***
> 更新说明：

## 系统初始化步骤：

1. 下载 [Pepperoni](https://github.com/futurice/pepperoni-app-kit),并解压缩。
1. 执行 `yarn install` 安装必要的文件。
1. 在git bash下执行./support/rename.sh 将系统改名为**HeehApp**
1. 删除.git 目录，并执行命令 "`git init`" 进行初始化

    `git init`

1. 转到[Github](https://github.com/blueterry) 创建新的Repository **kiwi**
1. 按要求拷贝下述命令并执行:

    ```Shell
    git remote add origin https://github.com/blueterry/kiwi.git
    git push -u origin master
    ```

1. 可以通过[kiwi](https://github.com/blueterry/kiwi)访问当前项目源码。

## 系统功能

1. 初始启动页面

## 系统更新说明

1. 添加系统启动页面功能：
    ```Shell
    npm install react-native-splash-screen -–save
    react-native link react-native-splash-screen
    ```
