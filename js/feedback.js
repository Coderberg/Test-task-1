"use strict";$(document).ready(function(){function e(e,a,r,t){$.ajax({type:"POST",url:"/",data:{name:e,email:a,text:r,_csrf_token:t},success:function(){$("#alert").html('<div class="alert alert-success">Feedback was successfully added. Thank you!</div>'),$("#name").val(""),$("#email").val(""),$("#text").val("")}})}$("#submit").click(function(){let a=$("#name").val(),r=$("#email").val(),t=$("#text").val(),l=$("#_csrf_token").val();return $(".error").removeClass("error"),function(e,a,r,t){return e.length<1?($("#name").addClass("error").focus(),!1):a.length<1?($("#email").addClass("error").focus(),!1):0!==a.search(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i)?($("#email").addClass("error").focus(),!1):r.length<1?($("#text").addClass("error").focus(),!1):!(t.length<1&&(alert("Invalid csrf token"),1))}(a,r,t,l)&&e(a,r,t,l),!1})});