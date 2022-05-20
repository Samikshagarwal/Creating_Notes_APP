console.log("Hello!")
shownotes();
let addbtn=document.getElementById('addbtn')
addbtn.addEventListener('click',function(e){
    let addtxt =document.getElementById('addtxt')
    let addtitle =document.getElementById('addtitle')
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let myobj={
        title: addtitle.value,
        text: addtxt.value
    }
    notesobj.push(myobj)
    localStorage.setItem("notes",JSON.stringify(notesobj))
    addtxt.value='';
    addtitle.value='';
    console.log(notesobj);
    shownotes();
})
function shownotes(){
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let html='';
    notesobj.forEach(function(element,index){
        html+=`<div id="sam" class="samiksha card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${index+1}. ${element.title}</h5>
          <p class="card-text"> ${element.text}</p>
          <button id="${index}" onclick="delenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    })
    let noteselem=document.getElementById('notes');
    if(notesobj.length!=0){
        noteselem.innerHTML=html;
    }
    else{
        noteselem.innerHTML=`No Notes Here!`
    }
}
function delenote(index){
    console.log("deleting!")
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj))
    shownotes()
}
let searchtxt=document.getElementById("searchtxt")
searchtxt.addEventListener("input",function(){
    console.log("Searching!");
    let inputval=searchtxt.value.toLowerCase();
    let notecard=document.getElementsByClassName('samiksha');
    Array.from(notecard).forEach(function(element) {
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display='block'
        }
        else{
            element.style.display='none';
        }
    })
})