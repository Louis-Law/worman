$(function(){
    initInfos();
});
function initInfos(){
    $("#preloadDiv").mypop();
    $.get('sysMan/getDepartmentList.do?msg=' + new Date().getTime(),function(data){
        $("#preloadDiv").mypopClose();
        if(data && data.length>0){
            if(data == '401'){
                goLoginPage();
            }else{
                $("#slDep").append('<option value="-1">--请选择--</option>');
                for(var i=0,len=data.length;i<len;i++){
                    var res = '<option value="'+data[i].code+'">'+data[i].name+'</option>';
                    $("#slDep").append(res);
                }
            }
        }else{
            $("#slDep").append("<option value='-1'>暂无数据</option>");
        }
    });
    $("#slDep").change(function(){
        var depCode = $(this).val();
        if(depCode != -1){
            $.get('account/getAccountInfos.do?msg=' + new Date().getTime(),
            {depCode : depCode},function(data){
                if(data && data.length>0){
                    if(data == '401'){
                        goLoginPage();
                    }else{
                        
                    }
                }else{
                    $("#slPeo").append("<option value='-1'>暂无数据</option>");
                }
            });
        }
    });
}