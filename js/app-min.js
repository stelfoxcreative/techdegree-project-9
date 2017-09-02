var ctx=document.getElementById("areaChart").getContext("2d"),areaChart=new Chart(ctx,{type:"line",data:{labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],datasets:[{label:"traffic",data:[0,500,1e3,750,1250,1750,1250,1500,1e3,1350,1500,2e3],backgroundColor:"rgba(116,119,190, 0.28)",borderWidth:2,borderColor:"rgb(116,119,190)",pointRadius:6,pointBackgroundColor:"#fff"}]},options:{maintainAspectRatio:!1,elements:{line:{tension:0}},showLines:!0,legend:{display:!1},scales:{xAxes:[{gridLines:{offsetGridLines:!0},ticks:{fontColor:"#b5b5b5"}}],yAxes:[{ticks:{stepsize:500,suggestedMin:0,suggestedMax:2500,fontColor:"#b5b5b5"}}]}}}),ctx=document.getElementById("barChart").getContext("2d"),barChart=new Chart(ctx,{type:"bar",data:{labels:["S","M","T","W","T","F","S"],datasets:[{label:"traffic",data:[50,75,150,100,200,180,75],backgroundColor:"rgb(116,119,190)"}]},options:{legend:{display:!1},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{offsetGridLines:!0},ticks:{fontColor:"#b5b5b5"}}],yAxes:[{ticks:{suggestedMin:0,suggestedMax:250,fontColor:"#b5b5b5"}}]}}}),ctx=document.getElementById("chartDonut").getContext("2d"),chartDonut=new Chart(ctx,{type:"doughnut",options:{legend:{position:"right"},maintainAspectRatio:!1,cutoutPercentage:55,rotation:4.3},data:{labels:["Phones","Tablets","Desktop"],datasets:[{data:[15,17,71],backgroundColor:["#81c98f","#74b1bf","#7477be"],borderWidth:0}]}});const USERNAME=getElementById("username"),MESSAGE=getElementById("message"),SEND=getElementById("send");