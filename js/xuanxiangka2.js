 function $(id){
      return document.getElementById(id);
  }
// 教学文档
var sps=$("jxwd").getElementsByTagName("span");
var ulss=$("jxwd_ul").getElementsByTagName("ul");
for(var i=0;i<sps.length;i++){
	sps[i].index=i;
	sps[i].onclick=function(){
		for(var i=0;i<sps.length;i++){
			sps[i].className='';
		}
		this.className='active';
		for(var i=0;i<ulss.length;i++){
			ulss[i].className="";
		}
		ulss[this.index].className="ul_act";
	}
}