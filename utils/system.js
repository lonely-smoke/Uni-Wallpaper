export function getStatusBarHeight(){
  return uni.getSystemInfoSync().statusBarHeight || 20;
}

export function getTitleBarHeight(){
  if(uni.getMenuButtonBoundingClientRect){
    let {top, height} = uni.getMenuButtonBoundingClientRect();
    return height + (top - getStatusBarHeight()) * 2;
  }else{
    return 40;
  }
  
}