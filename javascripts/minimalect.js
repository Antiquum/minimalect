/************************************
             MINIMALECT
  A minimalistic select replacement
        http://git.io/Xedg9w
************************************/
(function(e,t,n,r){function o(t,n){this.element=e(t);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="minimalect",s={class_container:"minict_wrapper",class_group:"minict_group",class_empty:"minict_empty",class_active:"active",class_selected:"selected",class_hidden:"hidden",class_highlighted:"highlighted",class_first:"minict_first",class_last:"minict_last",placeholder:"Select a choice",empty:"No results match your keyword.",theme:""};o.prototype={init:function(){var t=this;this.wrapper=e('<div class="'+this.options.class_container+'"></div>');this.element.hide().after(this.wrapper);if(this.options.theme)this.wrapper.addClass(this.options.theme);this.wrapper.append('<input type="text" value="'+(this.element.find("option[selected]").html()||"")+'" placeholder="'+this.options.placeholder+'" />');var r="";if(this.element.find("optgroup").length==0){r=this.parseElements(this.element.html())}else{this.element.find("optgroup").each(function(){r+='<li class="'+t.options.class_group+'">'+e(this).attr("label")+"</li>";r+=t.parseElements(e(this).html())})}this.wrapper.append("<ul>"+r+'<li class="'+t.options.class_empty+'">'+t.options.empty+"</li></ul>");e(n).on("click",function(){t.hideChoices(t.wrapper,t.options)});this.wrapper.on("click",function(e){e.stopPropagation();t.toggleChoices(t.wrapper,t.options)});this.wrapper.find("li:not(."+t.options.class_group+", ."+t.options.class_empty+")").on("click",function(){t.selectChoice(e(this),t.wrapper,t.element,t.options)});this.wrapper.find("li."+t.options.class_group+", li."+t.options.class_empty).on("click",function(e){e.stopPropagation()});this.wrapper.find("input").on("keyup",function(e){switch(e.keyCode){case 38:t.navigateChoices("up",t.wrapper,t.options);return false;break;case 40:t.navigateChoices("down",t.wrapper,t.options);return false;break;case 13:if(t.wrapper.find("li."+t.options.class_highlighted).length!=0)t.selectChoice(t.wrapper.find("li."+t.options.class_highlighted),t.wrapper,t.element,t.options);else t.selectChoice(t.wrapper.find("li:not(."+t.options.class_group+", ."+t.options.class_empty+")").first(),t.wrapper,t.element,t.options);t.hideChoices(t.wrapper,t.options);return false;break}t.filterChoices(t.wrapper,t.options)})},navigateChoices:function(e,t,n){ignored="."+n.class_hidden+", ."+n.class_empty+", ."+n.class_group;if(t.find("li."+n.class_highlighted).length==0){if(e=="up"){t.find("li:not("+ignored+")").last().addClass(n.class_highlighted)}else if(e=="down"){t.find("li:not("+ignored+")").first().addClass(n.class_highlighted)}return false}else{cur=t.find("li."+n.class_highlighted);cur.removeClass(n.class_highlighted);if(e=="up"){if(t.find("li:not("+ignored+")").first()[0]!=cur[0]){cur.prevAll("li").not(ignored).first().addClass(n.class_highlighted)}else{t.find("li:not("+ignored+")").last().addClass(n.class_highlighted)}}else if(e=="down"){if(t.find("li:not("+ignored+")").last()[0]!=cur[0]){cur.nextAll("li").not(ignored).first().addClass(n.class_highlighted)}else{console.log("first");t.find("li:not("+ignored+")").first().addClass(n.class_highlighted)}}}},parseElements:function(t){var n="";e(e.trim(t)).filter("option").each(function(){n+='<li data-value="'+e(this).val()+'">'+e(this).text()+"</li>"});return n},toggleChoices:function(e,t){!e.hasClass(t.class_active)?this.showChoices(e,t):this.hideChoices(e,t)},showChoices:function(e,t){this.updateFirstLast(false,e,t);e.addClass(t.class_active).children("ul").fadeIn(150);e.children("input").val("")},hideChoices:function(e,t){e.removeClass(t.class_active).children("ul").fadeOut(100,function(){e.find("li").removeClass(t.class_hidden);e.find("."+t.class_empty).hide();e.find("li."+t.class_highlighted).removeClass(t.class_highlighted)});e.children("input").blur();if(e.children("input").attr("placeholder")!=t.placeholder){e.children("input").val(e.children("input").attr("placeholder"))}else if(e.find("li."+t.class_selected).length==0){e.children("input").val("")}},filterChoices:function(t,n){var r=t.children("input").val();t.find("li."+n.class_highlighted).removeClass(n.class_highlighted);t.find("li:not("+n.class_group+")").each(function(){if(e(this).text().search(new RegExp(r,"i"))<0)e(this).addClass(n.class_hidden);else e(this).removeClass(n.class_hidden)});t.find("li."+n.class_group).removeClass(n.class_hidden).each(function(){nextlis=e(this).nextAll("li").not("."+n.class_hidden+", ."+n.class_empty);if(nextlis.first().hasClass(n.class_group)||nextlis.length==0)e(this).addClass(n.class_hidden)});t.find("."+n.class_empty).hide();if(t.find("li").not("."+n.class_hidden+", ."+n.class_empty).length==0)t.find("."+n.class_empty).show();this.updateFirstLast(true,t,n)},selectChoice:function(e,t,n,r){t.find("li").removeClass(r.class_selected);e.addClass(r.class_selected);t.children("input").val(e.text()).attr("placeholder",e.text());n.find("option[selected]").removeAttr("selected");n.find('option[value="'+e.attr("data-value")+'"]').attr("selected","selected")},updateFirstLast:function(e,t,n){t.find("."+n.class_first+", ."+n.class_last).removeClass(n.class_first+" "+n.class_last);if(e){t.find("li:visible").first().addClass(n.class_first);t.find("li:visible").last().addClass(n.class_last)}else{t.find("li").first().addClass(n.class_first);t.find("li").not("."+n.class_empty).last().addClass(n.class_last)}}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}})}})(jQuery,window,document)
