 function $(id){
      return document.getElementById(id);
  }
  // 优秀案例
  var sp=$("xk").getElementsByTagName("span");
  var uls=$("xk").getElementsByTagName("ul");
  for(var i=0;i<sp.length;i++){
     sp[i].index=i;
     sp[i].onclick=function(){
        for(var i=0;i<sp.length;i++){
           sp[i].className='';
        }
        this.className="act";
        for(var i=0;i<uls.length;i++){
           uls[i].className='';
        }
        uls[this.index].className='show';
     }
  }
