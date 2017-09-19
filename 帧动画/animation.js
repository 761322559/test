
const stateInital = 0;
const stateStart = 1;
const stateStop = 2;


// 创建帧动画类
function Animation(){
    this.task = [];
    this.index = 0;
    this.state = stateInital;
};

// 1.图片预加载(同步任务)
// imgList 图片数组
Animation.prototype.loadImg = funciton(imgList){
    

};

// 2.添加异步定时任务，作用：通过定时改变图片背景位置，实现帧动画
// element   DOM元素
// positions  背景位置数组
// imgUrl   图片地址
Animation.prototype.changePosition = funciton(element,positions,imgUrl){
    
};

// 2.添加异步定时任务，作用：通过定时改变图片地址，实现帧动画
// element  img标签
// imgList  图片数组
Animation.prototype.changeSrc = funciton(element,imgList){
    
};

// 2.添加异步定时任务,高级用法;自定义动画每帧执行的任务函数
// taskFn 自定义每帧执行的回调函数
Animation.prototype.enterFram = funciton(taskFn){
    
};

// 3. 添加一个同步任务，可以在上个任务完成后执行回调函数
// taskFn 回调函数
Animation.prototype.then = funciton(taskFn){
    
};

// 4. 添加一个异步执行任务的间隔，开始执行任务
// taskFn 回调函数
Animation.prototype.start = funciton(interval){
    
};

// 5. 添加一个同步任务，可以在回退到上一个任务中
// 实现重复上一个任务的效果，可以定义重复次数
// times 重复次数
Animation.prototype.repeat = funciton(times){
    
};

// 6. 添加一个同步任务，相当于repeat(),无限循环上一次任务
Animation.prototype.repeatForever = funciton(){
    
};

// 7. 设置当前任务结束执行下一个任务开始前的等待时间
// time  等待时间
Animation.prototype.wait = funciton(time){
    
};

// 8. 暂停当前异步定时任务
Animation.prototype.pause= funciton(){
    
};
// 9.重新执行上一次的异步任务
Animation.prototype.restart= funciton(){
    
};
// 10.释放对象
Animation.prototype.dispose = funciton(){
    
};


