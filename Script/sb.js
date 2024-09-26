/*

应用名称：SB 软件

[rewrite_local]

https://pro-status-service-prod.azurewebsites.net/api/item url script-response-body https://raw.githubusercontent.com/warcns/QX/master/Script/sb.js

[mitm] 

hostname=pro-status-service-prod.azurewebsites.net

*/



var ddgksf2013 = JSON.parse($response.body);
ddgksf2013.FilmsProStatus = 1
ddgksf2013.AeroProStatus = 1
$done({body: JSON.stringify(ddgksf2013)});
