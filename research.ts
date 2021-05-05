window.addEventListener("load",((ev)=>{
    var ResearchButton = document.getElementById("StartResearch") as HTMLButtonElement;
    var ResearchInput  = document.getElementById("researchinput") as HTMLInputElement ;

    ResearchButton.onclick = ((ev)=>{
        if(ResearchInput.value){
            window.location.replace(`research.html?res=${ResearchInput.value}`)
        }else{
            alert("请输入搜索内容!")
        }
    });
}));