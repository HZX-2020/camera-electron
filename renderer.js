// 渲染进程向主进程传递参数
window.addEventListener('DOMContentLoaded',()=>{
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', ()=>{
    // new Notification('后盾人通知', {
    //   body: '记得每天早8点签到',
    // })
    // const title = document.querySelector('input').value
    // window.api.changeTitle(title)
    // Notification.requestPermission()
    // new Notification('通知',{
    //   body: '标题修改了,看见了吗'
    // })
  })

})
// 调用用户摄像头拍摄视频
const video = document.querySelector('video')
const btn = document.querySelector('#openVideo')
const closeBtn = document.querySelector('#closeVideo')
btn.addEventListener('click', ()=>{
  console.log('点击了');
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  }).then(stream=>{
    video.srcObject = stream
    video.play()
  })
})
closeBtn.addEventListener('click', ()=>{
  video.srcObject.getTracks().forEach(track=>{
    track.stop()
  })
})








