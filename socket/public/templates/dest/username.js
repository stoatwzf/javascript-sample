this["JST"] = this["JST"] || {};

this["JST"]["public/templates/src/username"] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (name, text, timestamp) {pug_html = pug_html + "\u003Cstrong\u003E" + (null == (pug_interp = name) ? "" : pug_interp) + "\u003C\u002Fstrong\u003E\u003Cstrong\u003E" + (null == (pug_interp = '['+timestamp+']：') ? "" : pug_interp) + "\u003C\u002Fstrong\u003E\u003Cspan\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"timestamp" in locals_for_with?locals_for_with.timestamp:typeof timestamp!=="undefined"?timestamp:undefined));;return pug_html;};