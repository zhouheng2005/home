$(window).load(function () {
    $('.navbar-toggle').on('click tap', function () {
        $(this).toggleClass('animated');
    });
});

//判读是否是PC
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}

//轮番处理
$(function() {
    //判断是否为pc
    if (!IsPC()) {
        $("#zh_carousel>.carousel-inner").swipe({
            swipeLeft: function() {
                $("#zh_carousel").carousel('next');
            },
            swipeRight: function() {
                $("#zh_carousel").carousel('prev');
            },
            click: function() {
                var dateurl = $("#zh_carousel>.carousel-inner>.active>img").attr("date1-url");
                if (dateurl != "");
                window.location.href = dateurl;
            }
        });
        $(".zh_carousel-control.left").swipe({
            click: function() {
                $("#zh_carousel").carousel('prev');
            }
        });
        $(".zh_carousel-control.right").swipe({
            click: function() {
                $("#zh_carousel").carousel('next');
            }
        });
    } else {
        $("#zh_carousel>.carousel-inner").hover(function() {
            $(this).css("cursor", "pointer");
        });
        $("#zh_carousel>.carousel-inner").click(function() {
            var dateurl = $("#zh_carousel>.carousel-inner>.active>img").attr("date1-url");
            if (dateurl != "");
            window.location.href = dateurl;
        });
        $(".zh_carousel-control.left").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".zh_carousel-control.left").click(function() {
            $("#zh_carousel").carousel('prev');
        });

        $(".zh_carousel-control.right").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".zh_carousel-control.right").click(function() {
            $("#zh_carousel").carousel('next');
        });
    }
    $('#zh_carousel').carousel({
        interval: 5000
    })
});
//留言

$(document).ready(function() {
        $('.defaultForm').bootstrapValidator({
            // live: 'disabled',
            // message: 'This value is not valid',
            // feedbackIcons: {
            //     valid: 'glyphicon glyphicon-ok',
            //     invalid: 'glyphicon glyphicon-remove',
            //     validating: 'glyphicon glyphicon-refresh'
            // },
            fields: {
                name: {
                    message: '联系人是必填，并且不能是空的',
                    validators: {
                        notEmpty: {
                            message: '联系人是必填，并且不能是空的'
                        },
                        stringLength: {
                            min: 2,
                            max: 4,
                            message: '联系人必须不能小于2，大于4个字符长'
                        }
                    }
                },
                tel: {
                    message: '手机号是必填，并且不能是空的',
                    validators: {
                        notEmpty: {
                            message: '手机号是必填，并且不能是空的'
                        },

                        regexp: {
                            regexp: /^0?1[3|4|5|8][0-9]\d{8}$/,
                            message: '请输入正确的手机号'
                        }
                    }
                },
                email: {
                    validators: {
                        emailAddress: {
                            message: '请输入有效的电子邮件地址'
                        }
                        //                    ,
                        //                    remote: {
                        //                        url: 'remote.php',
                        //                        message: '邮箱不可用'
                        //                    }
                    }
                },
                body: {
                    validators: {
                        stringLength: {
                            min: 80,
                            max: 400,
                            message: '留言内容不能少于80文字，超过400文字'
                        }
                    }
                },

                captcha: {
                    validators: {
                        callback: {
                            message: '错误的答案',
                            callback: function(value, validator) {
                                var items = $('.captchaOperation').html().split(' '),
                                    sum = parseInt(items[0]) + parseInt(items[2]);
                                return value == sum;
                            }
                        }
                    }
                }
            }
        });
        // Validate the form manually
        $('.validateBtn').click(function() {
            $('.defaultForm').bootstrapValidator('validate');
        });
    });
