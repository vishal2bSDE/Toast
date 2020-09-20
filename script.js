const btn = document.getElementById("btn");
const container =document.getElementById("container");
    btn.addEventListener("click", () => {
        createNotification();
    })
function createNotification() {
        const notif = document.createElement("div");
        notif.classList.add("toast");
        let color=pick();
        notif.style.background=color;
        container.appendChild(notif);
        notif.innerHTML = "Hi i am a "+color+" toast";
        setTimeout(()=>{
            notif.remove();
        },3000);
    }
function pick(){
    let color=["blue","black","green","purple","cyan","darkgreen","red","pink","olive","peru","mediumpurple","salmon","maroon"];
    // console.log(color[Math.floor(Math.random() * color.length)]);
    return color[Math.floor(Math.random() * color.length)];
}