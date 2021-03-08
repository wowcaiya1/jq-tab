;(function($){
    $.fn.tab = function(option){
        var defaults = {
            parent:'#tab1',
            MouseEvent:"click",
            active:'active'
        }
        var setting = $.extend({},defaults,option)
        $(this).find("li").bind(setting.MouseEvent,function(){
            $(this).addClass(setting.active).siblings().removeClass(setting.active)
            var index = $(this).index()
            $(setting.parent).find('p').eq(index).show().siblings().hide()
        })
        return this
    }
})(jQuery);