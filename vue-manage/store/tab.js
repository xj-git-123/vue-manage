export default{
  state:{
    isCollapse:false,
    //设置默认的tab显示
    tabsList:[
      {
        path: '/homeIndex',
        name: 'homeIndex',
        label: '首页',
        icon: 's-home',
      }
    ],
    currentMenu:null
  },
  mutations:{
collapseMenu(state){
  state.isCollapse=!state.isCollapse
},
//tab菜单
selectMenu(state,val){
  if(val.name!=='homeIndex'){
    state.currentMenu=val
    const result=state.tabsList.findIndex(item=>item.name===val.name)
    if(result===-1){
      state.tabsList.push(val)
    }
    
    console.log('state.tabsList',state.tabsList)
  }else{
    state.currentMenu=null
  }
},
closeTag(state,val){
const result =state.tabsList.findIndex(item=>item.name===val.name)
state.tabsList.splice(result,1)
}
  }
}