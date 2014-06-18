/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics</code> library contains all analytics component classes and utilities.
 * @static
 * @class CQ_Analytics
 */

if( !window.CQ_Analytics ) {
    window.CQ_Analytics = {};
}

//global variable to test if UI is available or not
window.CQ_Analytics.isUIAvailable = true;
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

if( CQ_Analytics.OperatorActions ) {
    //set i18n translations

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.EQUALS, CQ.I18n.getMessage("equals"));
    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.IS, CQ.I18n.getMessage("is"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.NOT_EQUAL, CQ.I18n.getMessage("is not equal to"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.GREATER, CQ.I18n.getMessage("is greater than"));
    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.GREATER_OR_EQUAL, CQ.I18n.getMessage("is equal to or greater than"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.OLDER, CQ.I18n.getMessage("is older than"));
    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.OLDER_OR_EQUAL, CQ.I18n.getMessage("is equal to or older than"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.LESS, CQ.I18n.getMessage("is less than"));
    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.LESS_OR_EQUAL, CQ.I18n.getMessage("is equal to or less than"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.YOUNGER, CQ.I18n.getMessage("is younger than"));
    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.YOUNGER_OR_EQUAL, CQ.I18n.getMessage("is equal to or younger than"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.CONTAINS, CQ.I18n.getMessage("contains", null, "Ex: language contains french, Ex: gender contains female"));

    CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.BEGINS_WITH, CQ.I18n.getMessage("begins with", null, "Ex: title begins with News"));
}
/**
 * RUZEE.ShadedBorder 0.6.1
 * (c) 2006 Steffen Rusitschka
 *
 * RUZEE.ShadedBorder is freely distributable under the terms of an MIT-style license.
 * For details, see http://www.ruzee.com/
 */

var RUZEE = window.RUZEE || {};

RUZEE.ShadedBorder = {

create: function(opts) {
  var isie = /msie/i.test(navigator.userAgent) && !window.opera;
  var isie6 = isie && !window.XMLHttpRequest;
  function sty(el, h) {
    for(k in h) {
      if (/ie_/.test(k)) {
        if (isie) el.style[k.substr(3)]=h[k];
      } else el.style[k]=h[k];
    }
  }
  function crdiv(h) {
    var el=document.createElement("div");
    el.className = "sb-gen";
    sty(el, h);
    return el;
  }
  function op(v) {
    v = v<0 ? 0 : v;
    if (v>0.99999) return "";
    return isie ? " filter:alpha(opacity=" + (v*100) + ");" : " opacity:" + v + ';';
  }

  var sr = opts.shadow || 0;
  var r = opts.corner || 0;
  var bor = 0;
  var bow = opts.border || 0;
  var boo = opts.borderOpacity || 1;
  var shadow = sr != 0;
  var lw = r > sr ? r : sr;
  var rw = lw;
  var th = lw;
  var bh = lw;
  if (bow > 0) {
    bor = r;
    r = r - bow;
  }
  var cx = r != 0 && shadow ? Math.round(lw/3) : 0;
  var cy = cx;
  var cs = Math.round(cx/2);
  var iclass = r > 0 ? "sb-inner" : "sb-shadow";
  var sclass = "sb-shadow";
  var bclass = "sb-border";
  var edges = opts.edges || "trlb";
  if (!/t/i.test(edges)) th=0;
  if (!/b/i.test(edges)) bh=0;
  if (!/l/i.test(edges)) lw=0;
  if (!/r/i.test(edges)) rw=0;

  var p = { position:"absolute", left:"0", top:"0", width:lw + "px", height:th + "px",
            ie_fontSize:"1px", overflow:"hidden", margin:"0", padding:"0" }; var tl = crdiv(p);
  delete p.left; p.right="0"; p.width=rw + "px"; var tr = crdiv(p);
  delete p.top; p.bottom="0"; p.height=bh + "px"; var br = crdiv(p);
  delete p.right; p.left="0"; p.width=lw + "px"; var bl = crdiv(p);

  var tw = crdiv({ position:"absolute", width:"100%", height:th + "px", ie_fontSize:"1px",
                   top:"0", left:"0", overflow:"hidden", margin:"0", padding:"0" });
  var t = crdiv({ position:"relative", height:th + "px", ie_fontSize:"1px",
                  margin:"0 "+ rw + "px 0 " + lw + "px", overflow:"hidden", padding:"0" });
  tw.appendChild(t);

  var bw = crdiv({ position:"absolute", left:"0", bottom:"0", width:"100%", height:bh + "px",
                   ie_fontSize:"1px", overflow:"hidden", margin:"0", padding:"0" });

  var b = crdiv({ position:"relative", height:bh + "px", ie_fontSize:"1px",
                  margin:"0 "+ rw + "px 0 " + lw + "px", overflow:"hidden", padding:"0" });

  bw.appendChild(b);

  var mw = crdiv({ position:"absolute", top:(-bh)+"px", left:"0", width:"100%", height:"100%",
                   overflow:"hidden", ie_fontSize:"1px", padding:"0", margin:"0" });

  function corner(el,t,l) {
    var w = l ? lw : rw;
    var h = t ? th : bh;
    var s = t ? cs : -cs;
    var dsb = []; var dsi = []; var dss = [];

    var xp=0; var xd=1; if (l) { xp=w-1; xd=-1; }
    for (var x=0; x<w; ++x) {
      var yp=h-1; var yd=-1; if (t) { yp=0; yd=1; }
      var finished=false;
      for (var y=h-1; y>=0 && !finished; --y) {
        var div = '<div style="position:absolute; top:' + yp + 'px; left:' + xp + 'px; ' +
                  'width:1px; height:1px; overflow:hidden; margin:0; padding:0;';

        var xc = x - cx; var yc = y - cy - s;
        var d = Math.sqrt(xc*xc+yc*yc);
        var doShadow = false;

        if (r > 0) {
          // draw border
          if (xc < 0 && yc < bor && yc >= r || yc < 0 && xc < bor && xc >= r) {
            dsb.push(div + op(boo) + '" class="' + bclass + '"></div>');
          } else
          if (d<bor && d>=r-1 && xc>=0 && yc>=0) {
            var dd = div;
            if (d>=bor-1) {
              dd += op((bor-d)*boo);
              doShadow = true;
            } else dd += op(boo);
            dsb.push(dd + '" class="' + bclass + '"></div>');
          }

          // draw inner
          var dd = div + ' z-index:2;' + (t ? 'background-position:0 -' + (r-yc-1) + 'px;' : 'background-image:none;');
          var finish = function() {
            if (!t) dd = dd.replace(/top\:\d+px/, "top:0px");
            dd = dd.replace(/height\:1px/, "height:" + (y+1) + "px");
            dsi.push(dd + '" class="' + iclass + '"></div>');
            finished = true;
          };
          if (xc < 0 && yc < r || yc < 0 && xc < r) {
            finish();
          } else
          if (d<r && xc>=0 && yc>=0) {
            if (d>=r-1) {
              dd += op(r-d);
              doShadow = true;
              dsi.push(dd + '" class="' + iclass + '"></div>');
            } else {
              finish();
            }
          } else doShadow = true;
        } else doShadow = true;

        // draw shadow
        if (sr > 0 && doShadow) {
          d = Math.sqrt(x*x+y*y);
          if (d<sr) {
            dss.push(div + ' z-index:0; ' + op(1-(d/sr)) + '" class="' + sclass + '"></div>');
          }
        }
        yp += yd;
      }
      xp += xd;
    }
    el.innerHTML = dss.concat(dsb.concat(dsi)).join('');
  }

  function mid(mw) {
    var ds = [];

    ds.push('<div style="position:relative; top:' + (th+bh) + 'px; height:2048px; ' +
            ' margin:0 ' + (rw-r-cx) + 'px 0 ' + (lw-r-cx) + 'px; ' +
            ' padding:0; overflow:hidden;' +
            ' background-position:0 ' + (th > 0 ? -(r+cy+cs) : '0') + 'px;"' +
            ' class="' + iclass + '"></div>');

    var dd = '<div style="position:absolute; width:1px;' +
        ' top:' + (th+bh) + 'px; height:2048px; padding:0; margin:0;';
    if (sr>0) {
      for (var x=0; x<lw-r-cx; ++x) {
        ds.push(dd + ' left:' + x + 'px;' + op((x+1.0)/lw) +
            '" class="' + sclass + '"></div>');
      }

      for (var x=0; x<rw-r-cx; ++x) {
        ds.push(dd + ' right:' + x + 'px;' + op((x+1.0)/rw) +
            '" class="' + sclass + '"></div>');
      }
    }

    if (bow > 0) {
      var su = ' width:' + bow + 'px;' + op(boo) + '" class="' + bclass + '"></div>';
      ds.push(dd + ' left:' + (lw-bor-cx) + 'px;' + su);
      ds.push(dd + ' right:' + (rw-bor-cx) + 'px;' + su);
    }

    mw.innerHTML = ds.join('');
  }

  function tb(el, t) {
    var ds = [];
    var h = t ? th : bh;
    var dd = '<div style="height:1px; overflow:hidden; position:absolute; margin:0; padding:0;' +
        ' width:100%; left:0px; ';
    var s = t ? cs : -cs;
    for (var y=0; y<h-s-cy-r; ++y) {
      if (sr>0) ds.push(dd + (t ? 'top:' : 'bottom:') + y + 'px;' + op((y+1)*1.0/h) +
          '" class="' + sclass + '"></div>');
    }
    if (y >= bow) {
      ds.push(dd + (t ? 'top:' : 'bottom:') + (y - bow) + 'px;' + op(boo) +
          ' height:' + bow + 'px;" class="' + bclass + '"></div>');
    }

    ds.push(dd + (t ? 'background-position-y:0; top:' :
                      'background-image:none; bottom:') + y + 'px;' +
        ' height:' + (r+cy+s) + 'px;" class="' + iclass + '"></div>');

    el.innerHTML = ds.join('');
  }

  corner(tl, true, true); corner(tr, true, false);
  corner(bl, false, true); corner(br, false, false);
  mid(mw); tb(t, true); tb(b, false);

  return {
    render: function(el) {
      if (typeof el == 'string') el = document.getElementById(el);
      if (el.length != undefined) {
        for (var i=0; i<el.length; ++i) this.render(el[i]);
        return;
      }
      el.className += " sb";
      sty(el, { position:"relative", background:"transparent" });

      // remove generated children
      var node = el.firstChild;
      while (node) {
        var nextNode = node.nextSibling;
        if (node.nodeType == 1 && node.className == 'sb-gen')
          el.removeChild(node);
        node = nextNode;
      }

      var iel = el.firstChild;

      var twc = tw.cloneNode(true);
      var mwc = mw.cloneNode(true);
      var bwc = bw.cloneNode(true);

      el.insertBefore(tl.cloneNode(true), iel); el.insertBefore(tr.cloneNode(true), iel);
      el.insertBefore(bl.cloneNode(true), iel); el.insertBefore(br.cloneNode(true), iel);
      el.insertBefore(twc, iel); el.insertBefore(mwc, iel);
      el.insertBefore(bwc, iel);

      if (isie6) {
        el.onmouseover=function() { this.className+=" hover"; }
        el.onmouseout=function() { this.className=this.className.replace(/ hover/,""); }
          window.setTimeout(function() {
            el.className+=" hover";
            el.className = el.className.replace(/ hover/,"");
          },100);
      }
      if (isie) {
        function resize() {
          twc.style.width = bwc.style.width = mwc.style.width = el.offsetWidth + "px";
          mwc.firstChild.style.height = el.offsetHeight + "px";
        }
        el.onresize=resize;
        resize();
      }
    }
  };
}
};

/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

// utility functions for resizing images on the client side

if ( typeof CQ_Analytics == "undefined" ) CQ_Analytics = {};

/** Run callback when image given as url is loaded.
 *  Used to get the real size of an image. Callback gets passed an Image object. */
CQ_Analytics.onImageLoad = function(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img);
    } else {
        img.onload = function() { callback(this); };
        // we need to call the callback even if the image is not loaded due to an error
        // todo: separate onload, onerror callbacks would make more sense
        img.onerror = function() { callback(this); };
    }
};

/** Scales an image in portrait or landscape (width/height) properly
 *  for centered display in a box with targetWidth/targetHeight. Use letterBox=true
 *  the image should fit in completely, and letterBox=false if the image
 *  should be "zoomed" and only a part in the center displayed in the box.
 */
CQ_Analytics.scaleImage = function (width, height, targetWidth, targetHeight, letterBox) {
    var result = {
        width: 0,
        height: 0,
        left: 0,
        top: 0
    };

    if ((width <= 0) || (height <= 0) || (targetWidth <= 0) || (targetHeight <= 0)) {
        return result;
    }

    var resultWidth = width / height * targetHeight;

    // portrait/landscape vs. zoom/letterbox
    var scaleOnWidth = (resultWidth > targetWidth) ? letterBox : !letterBox;

    if (scaleOnWidth) {
        result.width = targetWidth;
        result.height = Math.floor(height / width * targetWidth);
    } else {
        result.width = Math.floor(resultWidth);
        result.height = targetHeight;
    }

    // center image
    result.left = Math.floor((targetWidth - result.width) / 2);
    result.top = Math.floor((targetHeight - result.height) / 2);

    return result;
};
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.ClickstreamcloudUI</code> object is a singleton providing utility methods to
 * display the clickstreamcloud and its session stores.
 * @deprecated since 5.5, use {@link CQ_Analytics.ClientContextUI} instead
 * @singleton
 * @class CQ_Analytics.ClickstreamcloudUI
 */
if(!CQ_Analytics.ClickstreamcloudUI) {
    CQ_Analytics.ClickstreamcloudUI = function() {
        this.SHOW_BOX_COOKIE = "show-clickstreamcloud";
        this.BOX_ID = "clickstreamcloud";

        this.box = null;
        this.top = null;
        this.sections = null;
        this.bottom = null;

        this.nbSection = 0;

        this.isRendered = false;
    };

    CQ_Analytics.ClickstreamcloudUI.prototype = new CQ_Analytics.Observable();

    /**
     * Creates the clickstreamcloud box and appends it to a DOM element.
     * @param {Element} parent Box will be appended to the given DOM element.
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.createBox = function(parent) {
        var currentObj = this;
        this.box = document.createElement("div");
        this.box.id = this.BOX_ID;
        this.box.style.display = "none";

        var div = document.createElement("div");
        this.box.appendChild(div);


        this.top = document.createElement("div");
        this.top.className = "ccl-header ccl-header-close";

        this.addListener("close",function() {
            currentObj.onVisibilityChange();
        });

        this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink("","#ccl",""));

        this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Close"),
                function() {
                    currentObj.box.style.display = "none";
                    currentObj.fireEvent("close");
                },
        { "className": "ccl-close" },"#ccl"));

        if( this.hideLoadLink === false) {
            this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Load"),
                function() {
                    currentObj.fireEvent("loadclick");
                },
        { "className": "ccl-load" },"#ccl"));
        }

        if( this.hideEditLink === false) {
            this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Edit"),
                function() {
                    currentObj.fireEvent("editclick");
                },
        { "className": "ccl-edit" },"#ccl"));
        }

        div.appendChild(this.top);

        this.sections = document.createElement("div");
        div.appendChild(this.sections);

        this.bottom = document.createElement("div");
        this.bottom.className = "ccl-spacer";
        div.appendChild(this.bottom);

        var border = RUZEE.ShadedBorder.create({ corner:10, border:2, shadow:21 });
        border.render(div);

        parent.appendChild(this.box);
        //#28337 - IE8: Clickstream Cloud unreadable
        // size in ie is 0px until visible: register and calc on show  
        if (div.onresize) {
            this.addListener("show",div.onresize, div);
        }
    };

    /**
     * Initializes the clickstreamcloud UI with the given config.
     * @param {Object} config Config object. Expected configs are: <ul>
     * <li>target: DOM element ID where the ClickstreamcloudUI will be inserted.</li>
     * <li>version: CQ_Analytics.ClickstreamcloudUI.VERSION_FULL or CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT (defaults to FULL).</li>
     * <li>hideEditLink: false to hide the edit link.</li>
     * <li>hideLoadLink: false to hide the load link.</li>
     * </ul>
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.init = function(config) {
        config = config || {};

        this.parentId = config.target;
        var parent = document.getElementById(this.parentId);
        if( parent ) {
            this.version = config.version || CQ_Analytics.ClickstreamcloudUI.VERSION_FULL;
            this.hideEditLink = config.hideEditLink !== false;
            this.hideLoadLink = config.hideLoadLink !== false;
            this.disableKeyShortcut = config.disableKeyShortcut !== false;

            if (CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE) == "true") {
                this.show();
            }

            if( !this.disableKeyShortcut) {
                var currentObj = this;
                CQ_Analytics.Utils.registerDocumentEventHandler("onkeydown", CQ_Analytics.Utils.eventWrapper(function(event, keyCode) {
                    if (event.ctrlKey && event.altKey && keyCode == "C".charCodeAt(0)) { // 84
                        currentObj.toggle();
                    }
                }));
            }
        }
    };

    /**
     * Handles the visibility change event.
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.onVisibilityChange = function() {
        CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE, this.isVisible() ? "true" : "false", 365 /* days */);
    };

    /**
     * Returns if ClickstreamcloudUI is visible.
     * @return {Boolean} true if visible, false otherwise.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.isVisible = function() {
        return (this.box != null && this.box.style.display != "none");
    };

    /**
     * Toggles the visibility.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.toggle = function() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    };

    /**
     * Registers a session store. Properties of the store will be displayed in a dedicated section.
     * @param {CQ_Analytics.SessionStore} sessionStore The session store.
     * @param {Object} config Config object. Expected configs are: <ul>
     * <li>title: section title.</li>
     * <li>mode: one of the following UI mode: CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD, CQ_Analytics.ClickstreamcloudUI.MODE_LINK
     * or CQ_Analytics.ClickstreamcloudUI.MODE_STATIC (default).</li>
     * </ul>
     * @param {Function} renderer (Optional) Customer section renderer.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.register = function(sessionStore, config, renderer) {
        var func = function() {
            var section = new CQ_Analytics.ClickstreamcloudUI.Section(sessionStore, this.version, config || {} , renderer);
            var storeConfig = CQ_Analytics.CCM.getUIConfig(sessionStore.getName()) || {};
            this.addSection(section, storeConfig.rank || null);
            sessionStore.addListener("update", section.reset, section);
        };
        if( this.isRendered ) {
            func.call(this);
        } else {
            this.addListener("render",func,this);
        }
    };

    /**
     * Adds the given section to the UI.
     * @param {Section} section Section to add
     * @param {Number} position Position number in the section list..
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.addSection = function(section, position) {
        if (position < this.nbSection && this.nbSection > 0) {
            //insert
            var i = this.nbSection;
            var n = this.sections.lastChild;
            while (i > position + 1) {
                i--;
                n = n.previousSibling;
            }
            this.sections.insertBefore(section.get(), n);
        } else {
            //to the end
            this.sections.appendChild(section.get());
        }
        this.nbSection++;
    };

    /**
     * Removes the given section from the UI.
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.removeSection = function(section) {
        this.sections.removeChild(section);
        this.nbSection--;
    };

    /**
     * Shows the ClickstreamcloudUI box.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.show = function() {
        if( !this.isRendered) {
            var parent = document.getElementById(this.parentId);
            if( parent ) {
                this.createBox(parent);
                this.isRendered = true;
                this.fireEvent("render");
            }
        }
        this.box.style.display = "block";
        this.onVisibilityChange();
        this.fireEvent("show");
    };

    /**
     * Hdes the ClickstreamcloudUI box.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.hide = function() {
        if ( this.box != null ) {
            this.box.style.display = "none";
        }
        this.onVisibilityChange();
    };

    /**
     * Textfield display mode: property value is displayed with pattern: property = value.
     * @static
     * @type String
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.MODE_TEXTFIELD = "textfield";

    /**
     * Link display mode: property value is displayed as a link.
     * @static
     * @type String
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.MODE_LINK = "link";

    /**
     * Static display mode: only property value is displayed as a simple text.
     * @static
     * @type String
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.MODE_STATIC = "static";

    /**
     * Full version display mode: displays a complete UI, session store properties/values are both shown.
     * @static
     * @type String
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_FULL = "full";

    /**
     * Light version display mode: displays a light UI, only session store values are shown.
     * @static
     * @type String
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_LIGHT = "light";

    /**
     * A section is a UI container of a session store. It contains HTML rendering of the properties/values of the store.
     * @param {CQ_Analytics.SessionStore} sessionStore The session store.
     * @param {String} version CQ_Analytics.ClickstreamcloudUI.VERSION_FULL or CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT
     * @param {Object} config Config object. Expected configs are: <ul>
     * <li>title: section title.</li>
     * <li>mode: one of the following UI mode: CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD , CQ_Analytics.ClickstreamcloudUI.MODE_LINK
     * or CQ_Analytics.ClickstreamcloudUI.MODE_STATIC (defaults to CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD).</li>
     * </ul>
     * @param {Function} renderer (Optional) Customer section renderer.
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section = function(sessionStore, version, config, renderer) {
        this.contentbox = null;
        this.section = null;
        this.sessionStore = sessionStore;
        this.version = version;
        this.title = config.title;
        this.mode = config.mode || CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD;
        this.renderer = renderer;

        this.sort = function(names, orderArray) {
            if( !orderArray || !names) return names;
            var res = [];

            for(var i=0;i<orderArray.length;i++) {
                var name = orderArray[i];
                var index = $CQ.inArray(name, names);
                if( index > -1 ) {
                    res.push(name);
                    names = $CQ.merge(names.slice(0,index - 1),names.slice(index + 1, names.length));
                }
            }
            res = $CQ.merge(res,names);
            return res;
        };

        this.buildContentBox = function() {
            if (this.renderer) {
                this.contentbox = this.renderer.call(this.sessionStore);
            } else {
                this.contentbox = document.createElement("p");
                this.contentbox.className = "ccl-sectioncontent";

                var storeConfig = CQ_Analytics.CCM.getStoreConfig(this.sessionStore.getName());
                var uiConfig = CQ_Analytics.CCM.getUIConfig(this.sessionStore.getName());
                var names = this.sessionStore.getPropertyNames(storeConfig["invisible"]);
                names = this.sort(names, uiConfig["order"]);

                var data = this.sessionStore.getData();
                if (this.version == CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT) {
                    //in light version, display only the filter values (as a single entry)

                    var filteredValues = new Array();
                    var filteredNames = new Array();
                    for (var i = 0; i < names.length; i++) {
                        var name = names[i];
                        var storeValue = this.sessionStore.getProperty(name);
                        //segment case, no value.
                        if( storeValue == name) {
                            filteredValues.push(name);
                            filteredNames.push(name);
                        } else {
                            var v = CQ.shared.XSS.getXSSTablePropertyValue(data, name);
                            v = CQ_Analytics.Variables.replaceVariables(v);
                            if (CQ_Analytics.Utils.indexOf(filteredValues, v) == -1) {
                                filteredValues.push(v);
                                name = CQ.shared.XSS.KEY_REGEXP.test(name) ? name.substring(0, name.length - 4) : name;
                                filteredNames.push(name);
                            }
                        }
                    }

                    for (var i = 0, currentNb = 0; i < filteredValues.length; i++) {
                        var name = filteredNames[i];
                        var value = filteredValues[i];
                        value = CQ_Analytics.Variables.replaceVariables(value);
                        if (this.mode == CQ_Analytics.ClickstreamcloudUI.MODE_LINK) {
                             var link = CQ_Analytics.Utils.externalize(this.sessionStore.getLink(name),true);
                            this.addLink(this.sessionStore.getLabel(name), link, "ccl-data-light", name);
                        } else {
                            this.addStaticText(value, "ccl-data-light", name);
                        }
                        currentNb++;
                        if (currentNb > 3) {
                            currentNb = 0;
                            this.addLineBreak();
                        }
                    }

                } else {
                    for (var i = 0; i < names.length; i++) {
                        var name = names[i];
                        var v = CQ.shared.XSS.getXSSTablePropertyValue(data, name);
                        name = CQ.shared.XSS.KEY_REGEXP.test(name) ? name.substring(0, name.length - 4) : name;
                        if (this.mode == CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD) {
                            this.addNameValueField(this.sessionStore.getLabel(name), v, name, "ccl-data", name);
                        } else {
                            if (this.mode == CQ_Analytics.ClickstreamcloudUI.MODE_LINK) {
                                var link = CQ_Analytics.Utils.externalize(this.sessionStore.getLink(name),true);
                                this.addLink(this.sessionStore.getLabel(name), link, "ccl-data", name);
                            } else {
                                this.addStaticText(this.sessionStore.getLabel(name), "ccl-data", name);
                            }
                        }
                        // for proper wrapping in IE
                        this.contentbox.appendChild(document.createTextNode(" "));
                    }
                }
            }
        };

        this.buildSection = function() {
            if (this.contentbox == null) {
                this.buildContentBox();
            }

            if (this.section == null) {
                this.section = document.createElement("div");
            }

            var header = document.createElement("div");
            header.className = "ccl-header";
            this.section.appendChild(header);

            var titleDiv = document.createElement("div");
            titleDiv.innerHTML = CQ.shared.I18n.getVarMessage(this.title);
            titleDiv.className = "ccl-title";
            header.appendChild(titleDiv);

            this.section.appendChild(this.contentbox);
        };
    };

    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype = new CQ_Analytics.Observable();

    /**
     * Returns the rendered section.
     * @return {Element} The DOM element
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.get = function() {
        if (this.section == null) {
            this.buildSection();
        }
        return this.section;
    };

    /**
     * Resets the section, i.e. rebuilds section based on the current session store state.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.reset = function() {
        if( !this.isReseting) {
            this.isReseting = true;
            if (this.section != null) {
                while (this.section.hasChildNodes()) {
                    this.section.removeChild(this.section.firstChild);
                }
                this.contentbox = null;
            }
            this.buildSection();
            this.isReseting = false;
        }
    };

    /**
     * Adds a name/value field to the section.
     * @param {String} label Field label.
     * @param {String} value Value.
     * @param {String} name Field label.
     * @param {String} cssClass CSS class added to the DOM element.
     * @param {String} title Element title
     * @private
     */
    //TODO fix wrong parameters: label is not used ?!
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addNameValueField = function(label, value, name, cssClass, title) {
        this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createNameValue(name, value, cssClass, title));
    };

    /**
     * Adds a link field to the section.
     * @param {String} text Link label.
     * @param {String} link Link HREF.
     * @param {String} cssClass CSS class added to the DOM element.
     * @param {String} title Element title
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLink = function(text, link, cssClass, title) {
        if (link) {
            var span = document.createElement("span");
            span.className = cssClass || "ccl-data";
            span.title = title;
            span.alt = title;
            span.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink(text, link, title));
            this.contentbox.appendChild(span);
        } else {
            this.addStaticText(text);
        }
    };

    /**
     * Adds a text to the section.
     * @param {String} text Text.
     * @param {String} cssClass CSS class added to the DOM element.
     * @param {String} title Element title
     * @private
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addStaticText = function(text, cssClass, title) {
        if (text) {
            this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createText(text, cssClass, title));
        }
    };

    /**
     * Adds a line break to the section.
     */
    CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLineBreak = function() {
        this.contentbox.appendChild(document.createElement("br"));
    };

    CQ_Analytics.ClickstreamcloudUI = new CQ_Analytics.ClickstreamcloudUI();

    CQ_Analytics.CCM.addListener("configloaded",function() {
        CQ_Analytics.ClickstreamcloudUI.init(CQ_Analytics.CCM.getConfig()["ui"]);
    });
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.EventDataMgr</code> object is a store providing page data information.
 * @class CQ_Analytics.EventDataMgr
 * @extends CQ_Analytics.SessionStore
 */
if (CQ_Analytics.CCM && CQ_Analytics.EventDataMgr) {
    CQ_Analytics.CCM.addListener("configloaded", function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.EventDataMgr);
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.PageDataMgr</code> object is a store providing page data information.
 * @class CQ_Analytics.PageDataMgr
 * @extends CQ_Analytics.SessionStore
 */
if (CQ_Analytics.CCM && CQ_Analytics.PageDataMgr) {

    CQ_Analytics.CCM.addListener("configloaded", function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.PageDataMgr);
}

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>BrowserInfoInstance</code> object is a singleton providing utility methods to retrieve client browser information.
 * @class CQ_Analytics.BrowserInfoInstance
 * @singleton
 */
if( CQ_Analytics.BrowserInfoInstance ) {
    //mapping between a browser version text and its translation. Note that not all version text needs to be translated
    CQ_Analytics.BrowserInfoInstance.versionI18nMapping = {
        "7 or higher": CQ.I18n.getMessage("{0} or higher", 7, "{0} is a placeholder for browser version, ex: 7 or higher"),
        "10 or higher": CQ.I18n.getMessage("{0} or higher", 10, "{0} is a placeholder for browser version, ex: 7 or higher"),
        "11 or higher": CQ.I18n.getMessage("{0} or higher", 11, "{0} is a placeholder for browser version, ex: 7 or higher"),
        "Unresolved": CQ.I18n.getMessage("Unresolved", null, "Browser version unresolved")
    };

    //mapping between a browser family text and its translation. Note that not all version text needs to be translated
    CQ_Analytics.BrowserInfoInstance.familyI18nMapping = {
        "Unresolved": CQ.I18n.getMessage("Unresolved", null, "Browser family unresolved")
    };

    //mapping between an OS text and its translation. Note that not all version text needs to be translated
    CQ_Analytics.BrowserInfoInstance.osI18nMapping = {
        "Unresolved": CQ.I18n.getMessage("Unresolved", null, "Operating system unresolved")
    };

    /**
     * Returns the browser version. I18n of the possible parts.
     * @return {String} Browser version.
     */
    CQ_Analytics.BrowserInfoInstance.getBrowserVersionI18n = function() {
        return CQ_Analytics.BrowserInfoInstance.versionI18nMapping[this.getBrowserVersion()]
            || this.getBrowserVersion();
    };

    /**
     * Returns the browser family. I18n of the possible parts.
     * @return {String} Browser family.
     */
    CQ_Analytics.BrowserInfoInstance.getBrowserFamilyI18n = function() {
        return CQ_Analytics.BrowserInfoInstance.familyI18nMapping[this.getBrowserFamily()]
            || this.getBrowserFamily();
    };

    /**
     * Returns the operating system name. I18n of the possible parts.
     * @return {String} OS name.
     */
    CQ_Analytics.BrowserInfoInstance.getOSNameI18n = function() {
        return CQ_Analytics.BrowserInfoInstance.osI18nMapping[this.getOSName()]
            || this.getOSName();
    };

    /**
     * Returns the browser name. I18n of the possible parts.
     * @return {String} Browser name.
     */
    CQ_Analytics.BrowserInfoInstance.getBrowserNameI18n = function() {
        return this.getBrowserFamilyI18n() + " " + this.getBrowserVersionI18n();
    };
}
$CQ(function() {

    /**
     * A helper class providing utility methods to create a jcarousel object.<br>
     * See <code>/etc/clientlibs/foundation/personalization/jcarousel/jquery.jcarousel.js</code>
     * <br>
     * Construction options:<ul>
     *     <li>vertical: true to create a vertical slider (defaults to false).</li>
     *     <li>clazz: custom css class to append to top container</li>
     *     <li>parent: HTMLElement to append slider to</li>
     *</ul>
     * @class CQ_Analytics.Slider
     */
    CQ_Analytics.Slider = function(options) {
        return {
            /**
             * Initializes the slider
             */
            init: function() {
                // undefined and false have different meanings in jcarousel 0.3, but have
                // the same meaning for CQ_Analytics.Slider; therefore we need to normalize
                // everyrthing to avoid IE > 8 issues with jcarousel
                this.vertical = !!options.vertical;
                options.vertical = this.vertical;
                this.clazz = options.clazz;
                this.parent = options.parent;
                var dir = (this.vertical ? "vertical" : "horizontal");
                this.container = $CQ("<div>")
                    .addClass("cq-cc-slider")
                    .addClass("cq-cc-slider-" + dir)
                    .addClass(this.clazz)
                    .appendTo(this.parent);
                this.container.hide();

                // rebuilding additional DOM structure required for jcarousel 0.3
                // (which is derivated from the older jcarousel version we were previously
                // using)
                var skinContainer = $CQ("<div>")
                        .addClass("jcarousel-skin-cq-cc")
                        .appendTo(this.container);
                this.carouselContainer = $CQ("<div>")
                        .addClass("jcarousel-container")
                        .addClass("jcarousel-container-" + dir)
                        .appendTo(skinContainer);
                $CQ("<div>")
                        .addClass("jcarousel-prev")
                        .addClass("jcarousel-prev-horizontal")
                        .appendTo(skinContainer);
                $CQ("<div>")
                        .addClass("jcarousel-next")
                        .addClass("jcarousel-next-horizontal")
                        .appendTo(skinContainer);

                this.carousel = $CQ("<ul>")
                    .appendTo(this.carouselContainer);
            },

            /**
             * Shows the slider
             */
            show: function() {
                if( !this.isWidget ) {
                    options.list = options.list || "ul";
                    options.items = options.items || "li";
                    this.carouselContainer.jcarousel(options);
                    $CQ(".jcarousel-prev", this.container).jcarouselControl({
                        target: '-=3'
                    });
                    $CQ(".jcarousel-next", this.container).jcarouselControl({
                        target: '+=3'
                    });
                    this.isWidget = true;
                }

                var slider = $CQ(".cq-cc-slider", this.parent);
                var currentObj = this;
                // show parent temporarily to ensure the preselected image is scrolled as
                // expected (jcarousel can't compute the offsets otherwise)
                slider.show();
                currentObj.select(currentObj.computeSelectedIndex(), true, true);
                slider.hide();

                if (this.vertical) {
                    this.container.slideDown("fast");
                } else {
                    slider.css("top",(this.parent.position().top - 7) + "px");
                    slider.css("left",(this.parent.position().left - 25) + "px");
                    $CQ(".jcarousel-container-horizontal", currentObj.parent).css("width", "90px");
                    slider.fadeIn(1000, function() {
                        $CQ(".jcarousel-container-horizontal", currentObj.parent).animate({width: "268px"}, "fast", function() {
                            //refresh needed for size computations
                            currentObj.carousel.jcarousel();
                        });
                    });
                }

                currentObj.container.bind("click", this.stopPropagation);
                $CQ(document).bind("click", { scope: this }, this.handleDocClick);
            },

            /**
             * Handles the document click: hides the slider.
             * @private
             */
            handleDocClick: function(event) {
                event.data.scope.hide();
            },

            /**
             * Stops the event propagation.
             * @private
             */
            stopPropagation: function(event) {
                event.stopPropagation();
            },

            /**
             * Hides the slider.
             */
            hide: function() {
                $CQ(document).unbind("click", this.handleDocClick);
                this.container.unbind("click", this.stopPropagation);
                if (this.vertical) {
                    this.container.slideUp("fast");
                } else {
                    var currentObj = this;
                    // $CQ(".jcarousel-skin-cq-cc", this.parent).animate({width: "90px"}, "fast");
                    $CQ(".jcarousel-container-horizontal", this.parent).animate({width: "90px"}, "fast", function() {
                        $CQ(".cq-cc-slider", currentObj.parent).fadeOut(1000);
                    });
                }
            },

            /**
             * Handles selection inside the slider
             * @private
             */
            select: function(num, force, noAnimation) {
                var selected = this.getSelected();
                var index = this.getIndex(selected);
                if (force || selected.length == 0 || (index != num)) {
                    var toSelect = this.getItem(num);
                    selected.removeClass("jcarousel-item-selected");
                    toSelect.addClass("jcarousel-item-selected");

                    //because jcarousel duplicates elements
                    $CQ(this.container).find(".jcarousel-item-selected-marker").removeClass("jcarousel-item-selected-marker");

                    var currentId = this.getCurrentValue();
                    var id = toSelect.children().attr("data-id");
                    $CQ(this.container).find("[data-id='" + id + "']").addClass("jcarousel-item-selected-marker");
                    if (currentId != id) {
                        this.onSelect(id);
                    }
                    var scrollIndex = Math.max(this.getIndex(toSelect), 0);
                    this.carouselContainer.jcarousel("scroll", scrollIndex, !noAnimation);
                }
            },

            /**
             * Returns the selected item.
             * @private
             */
            getSelected: function() {
                return $CQ(this.container).find(".jcarousel-item-selected");
            },

            /**
             * Computes the selected item based on the current value.
             * @private
             */
            computeSelectedIndex: function() {
                var id = this.getCurrentValue();
                return this.getIndex($CQ(this.container).find("[data-id='" + id + "']"));

            },

            /**
             * Returns an item.
             * @private
             */
            getItem: function(num) {
                if (num < 0) {
                    return $CQ([]);
                }
                var dom = $CQ(this.container).find("li").get(num);
                return (dom ? $CQ(dom) : $CQ([]));
            },

            /**
             * Gets the item index of the specified dom element
             * @param dom The DOM element
             * @return The item index; -1 if invalid
             */
            getIndex: function(dom) {
                var toCheck = $CQ(dom);
                var items = toCheck.closest("ul").find("li");
                var item = (toCheck.is("li") ? toCheck : toCheck.closest("li"));
                return items.index(item);
            },

            /**
             * Method called when an item gets selected. To get the item, use: [data-id='" + id + "'].
             * To override.
             * @param {String} id Id of the selected item
             */
            onSelect: function(id) {
                //to override
            },

            /**
             * Method called to get the current value of the slider. Returned value must match the id.
             * To override.
             */
            getCurrentValue: function() {
                //to override
            }
        }
    };
});
/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

if (!CQ_Analytics.ClientContextUI) {
    /**
     * Client Context UI object: manages rendering, show / hide...
     * <br>
     * @static
     * @singleton
     * @class CQ_Analytics.ClientContextUI
     * @since 5.5
     */
    CQ_Analytics.ClientContextUI = function() {
        //true if CC is loaded
        this.loaded = false;

        //URL to the Client Context
        this.ccUrl = null;

        //true if UI is visible
        this.visible = false;

        //true if UI is rendered
        this.rendered = false;

        //id of the container div
        this.containerId = null;

        //id of the UI box
        this.boxId = null;

        //id of the placeholder for the CC content
        this.contentPlaceholderId = null;

        //true if edit mode
        this.editMode = false;
    };

    CQ_Analytics.ClientContextUI.prototype = new CQ_Analytics.Observable();

    /**
     * Name of the cookie that stores if CC should be displayed or not on page load
     * @static
     * @type String
     */
    CQ_Analytics.ClientContextUI.prototype.SHOW_BOX_COOKIE = "cq-show-clientcontext";

    /**
     * Inits the UI.
     * @param {String} url URL to the Client Context
     * @param {String} containerId Id of the container div
     * @param {String} boxId Id of the UI box
     * @param {String} contentPlaceholderId Id of the placeholder for the CC content
     * @param {Boolean} editMode True if edit mode, false otherwise
     */
    CQ_Analytics.ClientContextUI.prototype.init = function(url, containerId, boxId, contentPlaceholderId, editMode) {
        this.ccUrl = url;
        this.containerId = containerId;
        this.boxId = boxId;
        this.contentPlaceholderId = contentPlaceholderId;
        this.editMode = editMode;

        $CQ(document).bind("keydown", CQ_Analytics.Utils.eventWrapper(function(event, keyCode) {
            if (event.ctrlKey && event.altKey && keyCode == "C".charCodeAt(0)) { // 84
                CQ_Analytics.ClientContextUI.toggle();
            }
        }));

        if (CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE) == "true") {
            this.show();
        }
    };

    /**
     * Renders the UI.
     * Fires "beforerender" and "render" events.
     */
    CQ_Analytics.ClientContextUI.prototype.render = function() {
        if(!this.rendered && this.fireEvent("beforerender") !== false) {
            this.rendered = true;
            this.fireEvent("render");
        }
    };

    /**
     *  Loads the Client Context content. If already loaded, will not be loaded again until <code>force</code> is set
     *  to true.
     * Fires "beforeload" and "load" events.
     * @param {Boolean} force True to force the loading
     */
    CQ_Analytics.ClientContextUI.prototype.load = function(force) {
        if( this.ccUrl && (! this.loaded || force) && this.fireEvent("beforeload") !== false) {
            var url = CQ.shared.HTTP.addParameter(this.ccUrl, "wcmmode",this.editMode ? "preview" : "disabled");
            var response = CQ.shared.HTTP.get(url);
            $CQ("#" + this.contentPlaceholderId).html(response.responseText);
            this.loaded = true;
            this.fireEvent("load");
        }
    };

    /**
     * Shows the UI. Loads the Client Context and renders the UI if not already done.
     * Fires "beforeshow" and "show" events.
     */
    CQ_Analytics.ClientContextUI.prototype.show = function() {
        this.load();
        this.render();
        if( this.fireEvent("beforeshow") !== false) {
            if( $CQ.support.opacity) {
                $CQ("#" + this.containerId).show("normal");
            } else {
                $CQ("#" + this.containerId).show();
            }
            this.visible = true;
            CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE, "true", 365 /* days */);
            this.fireEvent("show");
        }
    };

    /**
     * Hides the UI.
     * Fires "beforehide" and "hide" events.
     */
    CQ_Analytics.ClientContextUI.prototype.hide = function() {
        if( this.fireEvent("beforehide") !== false) {
            if( $CQ.support.opacity) {
                $CQ("#" + this.containerId).hide("fast");
            } else {
                $CQ("#" + this.containerId).hide();
            }
            this.visible = false;
            CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE, "false", 365 /* days */);
            this.fireEvent("hide");
        }
    };

    /**
     * Toggles the UI.
     */
    CQ_Analytics.ClientContextUI.prototype.toggle = function() {
        if( this.visible ) {
            this.hide();
        } else {
            this.show();
        }
    };

    /**
     * Helper method to register an on load event. Checks if the Client Context has already been loaded.
     * @param {Function} callback Function to execute on load
     * @param {Object} scope Execution scope
     */
    CQ_Analytics.ClientContextUI.prototype.onLoad = function(callback, scope) {
        if( callback ) {
            if( this.loaded) {
                callback.call(scope || this);
            } else {
                this.addListener("load", callback, scope);
            }
        }
    };

    /**
     * Returns if UI is available: true if some content is load into the UI box.
     * @return {Boolean} True if available, false otherwise
     */
    CQ_Analytics.ClientContextUI.prototype.isAvailable = function() {
        return this.boxId && $CQ("#" + this.boxId).length > 0;
    };

    /**
     * Returns the box id.
     * @return {String} The id of the box
     */
    CQ_Analytics.ClientContextUI.prototype.getBoxId = function() {
        return this.boxId;
    };

    CQ_Analytics.ClientContextUI = new CQ_Analytics.ClientContextUI();

    /**
     * UI default container id
     * @static
     */
    CQ_Analytics.ClientContextUI.CONTAINER_ID = "cq-clientcontext-container";

    /**
     * UI default box id
     * @static
     */
    CQ_Analytics.ClientContextUI.BOX_ID = "cq-clientcontext-box";

    /**
     * UI default class
     * @static
     */
    CQ_Analytics.ClientContextUI.BOX_CLASS = "cq-clientcontext";

    /**
     * UI default actions header id
     * @static
     */
    CQ_Analytics.ClientContextUI.ACTIONS_ID = "cq-clientcontext-box-actions";

    /**
     * UI default actions container id
     * @static
     */
    CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID = "cq-clientcontext-box-actions-container";

    /**
     * UI default Client Context content id
     * @static
     */
    CQ_Analytics.ClientContextUI.CONTENT_ID = "cq-clientcontext-box-content";

    /**
     * Creates the required placeholders to display the Client Context.
     * @static
     * @private
     */
    CQ_Analytics.ClientContextUI.createPlaceholders = function() {
        var cc = $CQ("<div>")
            .attr("id", CQ_Analytics.ClientContextUI.BOX_ID)
            .addClass(CQ_Analytics.ClientContextUI.BOX_CLASS);

        cc.append(
            $CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_ID).append(
                $CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)));
        cc.append(
            $CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.CONTENT_ID));

        var container = $CQ("<div>")
            .attr("id", CQ_Analytics.ClientContextUI.CONTAINER_ID);

        container.append(cc);

        $CQ("body").append(container);
    };

    /**
     * Creates and inits the Client Context UI.
     * @param {String} ccPath Path to the Client Context
     * @param {String} pagePath Path the the current page
     * @static
     */
    CQ_Analytics.ClientContextUI.create = function(ccPath, pagePath, editMode) {
        CQ_Analytics.ClientContextUI.createPlaceholders();

        CQ_Analytics.ClientContextUI.addListener("beforerender", function() {
            //<% if(WCMMode.fromRequest(request) != WCMMode.DISABLED) { %>

                $CQ("<div>")
                        .addClass("cq-clientcontext-box-action")
                        .addClass("cq-clientcontext-design")
                        .attr("title", CQ.I18n.getMessage("Open the ClientContext design page"))
                        .appendTo("#" + CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)
                        .bind("click",function() {
                            CQ.shared.Util.open(CQ.shared.HTTP.externalize(ccPath + "/content.html"));
                        });

                if (CQ && CQ.personalization && CQ.personalization.ProfileLoader) {
                    $CQ("<div>")
                        .addClass("cq-clientcontext-box-action")
                        .addClass("cq-clientcontext-load")
                        .attr("title", CQ.I18n.getMessage("Load a profile in the ClientContext"))
                        .appendTo("#" + CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)
                        .bind("click",function() {
                            var dlg = new CQ.personalization.ProfileLoader({});
                            dlg.show();
                        });
                }

            //<% } %>
            $CQ("<div>")
                    .addClass("cq-clientcontext-box-action")
                    .addClass("cq-clientcontext-reset")
                    .attr("title", CQ.I18n.getMessage("Reset the ClientContext"))
                    .appendTo("#" + CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)
                    .bind("click",function() {
                        CQ_Analytics.ClientContext.reset();
                    });
            $CQ("<div>")
                    .addClass("cq-clientcontext-box-action")
                    .addClass("cq-clientcontext-close")
                    .attr("title", CQ.I18n.getMessage("Close the ClientContext"))
                    .appendTo("#" + CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)
                    .bind("click",function() {
                        CQ_Analytics.ClientContextUI.hide();
                    });

            var offset = $CQ("#" + CQ_Analytics.ClientContextUI.BOX_ID).offset();
            $CQ("#" + CQ_Analytics.ClientContextUI.BOX_ID).draggable({
                "handle": "#" + CQ_Analytics.ClientContextUI.ACTIONS_ID,
                "revert": false,
                "stop": function() {
                    offset = $CQ("#" + CQ_Analytics.ClientContextUI.BOX_ID).offset();
                }
            });
            $CQ("#" + CQ_Analytics.ClientContextUI.BOX_ID).addClass("CQjquery").resizable();

            if( window.CQ &&
                CQ.wcm &&
                CQ.wcm.emulator &&
                CQ.wcm.emulator.EmulatorManager &&
                CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS) {
                CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS.push(CQ_Analytics.ClientContextUI.CONTAINER_ID);

            }

        });

        var clientContextURL = CQ.shared.HTTP.addParameter(ccPath + "/content/jcr:content/stores.html", "path", pagePath);
        CQ_Analytics.ClientContextUI.init(
            clientContextURL,
            CQ_Analytics.ClientContextUI.CONTAINER_ID,
            CQ_Analytics.ClientContextUI.BOX_ID,
            CQ_Analytics.ClientContextUI.CONTENT_ID,
            editMode !== false
        );
    }
}
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * 2448US01 - Patent Application - US - 13/648,856
 **************************************************************************/
/**
 * The <code>CQ_Analytics.TwitterProfileDataMgr</code> object is a store providing user's twitter profile information.
 */
if (CQ_Analytics && CQ_Analytics.TwitterProfileDataMgr) {

    CQ_Analytics.CCM.addListener("configloaded", function() {

        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
            this.getSessionStore(),
            CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.TwitterProfileDataMgr);
    
    CQ_Analytics.TwitterProfileDataMgr.storePropertiesOptionsProvider = function() {
        var properties = {
            "created_at"              : CQ.I18n.getMessage("Created At"),
            "description"             : CQ.I18n.getMessage("Description"),
            "favourites_count"        : CQ.I18n.getMessage("Favourites Count"),
            "followers_count"         : CQ.I18n.getMessage("Followers Count"),
            "friends_count"           : CQ.I18n.getMessage("Friends Count"),
            "last_status_coordinates" : CQ.I18n.getMessage("Last Status Coordinates"),
            "last_status_place"       : CQ.I18n.getMessage("Last Status Place"),
            "last_status_text"        : CQ.I18n.getMessage("Last Status Text"),
            "location"                : CQ.I18n.getMessage("Location"),
            "screen_name"             : CQ.I18n.getMessage("Screen Name"),
            "statuses_count"          : CQ.I18n.getMessage("Statuses Count")
        };
        
        var options = [];

        for (var name in properties) {
            if (properties.hasOwnProperty(name)) {
                options.push({
                    value: name,
                    text: properties[name]
                });
            }
        }
        
        return options;
    };
}

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * 2448US01 - Patent Application - US - 13/648,856
 **************************************************************************/
/**
 * The <code>CQ_Analytics.FacebookProfileDataMgr</code> object is a store providing user's facebook profile information.
 */
if (CQ_Analytics.CCM && CQ_Analytics.FacebookProfileDataMgr) {

    CQ_Analytics.CCM.addListener("configloaded", function() {

        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
            this.getSessionStore(),
            CQ_Analytics.CCM.getUIConfig(this.getName()));

        //Check if today == birthday. If yes display special icon
        this.addListener("checkBirthday", function(event, property) {
            $CQ(".cq-cc-facebookprofile-birthday").removeClass("cq-cc-facebookprofile-birthday-today");
            var birthday = this.data['birthday'];
            if(birthday){
                var dob = new Date(Date.parse(birthday));
                if (!isNaN(dob.getTime())) {
                    var today = new Date();
                    if (dob.getDate() == today.getDate()&&
                        dob.getMonth() == today.getMonth()) {
                        $CQ(".cq-cc-facebookprofile-birthday").addClass("cq-cc-facebookprofile-birthday-today");
                    }
                 }
            }
        });
    }, CQ_Analytics.FacebookProfileDataMgr);

    CQ_Analytics.FacebookProfileDataMgr.storePropertiesOptionsProvider = function() {
        var options = [];
        var properties = new Array("birthday","avatar","bio","gender","link","name","quotes","timezone","updated_time","verified","work","education");
        properties.sort();
        for (var i = 0; i < properties.length; i++) {
            var value = properties[i];
            var displayName = CQ_Analytics.FacebookProfileDataMgr.getFacebookPropertyName(value);
            var o = {
                    value: value,
                    text: displayName
                };
            options.push(o);
        }
        return options;
    }
    CQ_Analytics.FacebookProfileDataMgr.getFacebookPropertyName = function(facebookPropertyvalue) {
        var facebookPropertyName = "";
        var facebookPropertyNameArray = facebookPropertyvalue.split( "_" );
        for ( var i = 0; i < facebookPropertyNameArray.length; i++ )
        {
            facebookPropertyName = facebookPropertyName + facebookPropertyNameArray[ i ].charAt(0).toUpperCase() + facebookPropertyNameArray[ i ].slice(1);
            if( i != facebookPropertyNameArray.length -1 ) {
                facebookPropertyName = facebookPropertyName + " " ;
            }
        }
        return facebookPropertyName;
    }
}

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * 2448US01 - Patent Application - US - 13/648,856
 **************************************************************************/

if (CQ_Analytics.CCM && CQ_Analytics.FacebookInterestsMgr) {

    /**
     * Loads and renders the Facebook Interests.
     * @param {String} divId Id of the div to render to
     * @static
     */
    CQ_Analytics.FacebookInterestsMgr.internalRenderer = function(divId) {
        var selectedInterest = CQ.Ext.fly(divId).parent().getAttribute("data-selectedInterest");
        var uid = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");

        CQ_Analytics.FacebookInterestsMgr.lastselectedInterest = selectedInterest;
        var profilePath = CQ_Analytics.ProfileDataMgr.getProperty("path");
        $CQ("#" + divId).children().remove();

        var name = CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
        var div = $CQ("<div>").addClass("cq-cc-fbinterests-content");
        var selectedInterestName = CQ.Ext.fly(divId).parent().getAttribute("data-selectedInterestName");

        if(this.data != null && this.data[selectedInterest]){
            $CQ("<div>")
                .addClass("cq-fbinterests-text")
                .html(name + "'s " + selectedInterestName +":")
                .appendTo(div);

            var thumbnailDiv = $CQ("<div>")
                                .addClass("cq-fbinterests-thumbnails")
                                .appendTo(div);

            var jsonData = JSON.parse(this.data[selectedInterest]);
            //Apply scroll bar if more than 12 items.
            if(jsonData.length>12) {
                thumbnailDiv.css("overflow-y","scroll");
                thumbnailDiv.css("height","120px");
            }
            for(var j=0; j<jsonData.length; j++) {
                var thumbnailSrc = jsonData[j]['url'];
                if(!thumbnailSrc) {
                    thumbnailSrc = "http://graph.facebook.com/"+jsonData[j]['id']+"/picture?type=small";
                }
                $CQ("<img>")
                .addClass("cq-cc-thumbnail-fbinterests")
                .attr("title",jsonData[j]['name'])
                .attr("src", thumbnailSrc)
                .appendTo(thumbnailDiv);
            }
        } else {
            $CQ("<div>")
                .addClass("cq-fbinterests-text")
                .html(name + " does not like any " + selectedInterestName)
                .appendTo(div);
        }

        div.hide();
        $CQ("#" + divId).append(div);
        div.fadeIn("fast");
    };

    /**
     * Delegates the rendering to
     * {@link CQ_Analytics.FacebookInterestsMgr#internalRenderer}.
     * @param {String} store The store to render
     * @param {String} divId Id of the div to render to
     * @static
     */
    CQ_Analytics.FacebookInterestsMgr.renderer = function(store, divId) {
        //Creating Array for all divID's associated with this component.
        if(!CQ_Analytics.FacebookInterestsMgr.divIdsArray){
            CQ_Analytics.FacebookInterestsMgr.divIdsArray = new Array();
        }
        if(CQ_Analytics.FacebookInterestsMgr.divIdsArray.indexOf(divId) == -1){
            CQ_Analytics.FacebookInterestsMgr.divIdsArray.push(divId);
        }
        // TO DO :- Iterate over all the IDs only on reset
        for ( var i=0; i<CQ_Analytics.FacebookInterestsMgr.divIdsArray.length; i++ )
        {
            var current_divId = CQ_Analytics.FacebookInterestsMgr.divIdsArray[i];
            var uid = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
            if(uid){
                if (uid != CQ_Analytics.FacebookInterestsMgr.lastUid) {
                    CQ_Analytics.FacebookInterestsMgr.loadProfile(uid);
                }
                CQ_Analytics.FacebookInterestsMgr.internalRenderer(current_divId);
            }
        }
    }

    CQ_Analytics.FacebookInterestsMgr.propertyNameComparator = function(a,b) {
        return a.text.localeCompare(b.text);
    };

    CQ_Analytics.FacebookInterestsMgr.storePropertiesOptionsProvider = function(path) {
        var response = CQ.HTTP.get(path+".fbinterestsoptions.json");
        if(CQ.utils.HTTP.isOk(response)){
            var responseBody = response.body;
            var jsonData = JSON.parse(responseBody);
            jsonData.sort(CQ_Analytics.FacebookInterestsMgr.propertyNameComparator);
            return jsonData;
        }

        console.log("request for provider options was not ok: "+response.status+" - "+response.body);
        return [];
    };
}

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
/**
 * The <code>CQ_Analytics.SalesforceProfileDataMgr</code> object is a store providing user's salesforce profile information.
 */
if (CQ_Analytics && CQ_Analytics.SalesforceProfileDataMgr) {

    CQ_Analytics.CCM.addListener("configloaded", function() {

        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
            this.getSessionStore(),
            CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.SalesforceProfileDataMgr);

}
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/**
 * The <code>CQ_Analytics.CampaignSeedDataMgr</code> object is a store providing user's campaign profile information.
 */
if (CQ_Analytics && CQ_Analytics.CampaignSeedMgr) {
    CQ_Analytics.CampaignSeedMgr.formatPropertyName = function(propertyName) {
        var p = propertyName;
        var split = p ? p.split("/") : [];
        if(split.length > 2 ) {
            //more than one /, last one must be replace by .
            p = split.shift() + "/" + split.shift() + "." + split.join("/");
        }
        return p;
    }

    CQ_Analytics.CampaignSeedMgr.getPropertyLabel = function(propertyName) {
        var path = "content/" + this.formatPropertyName(propertyName) + "/label";
        var label = CQ_Analytics.CampaignMetadataMgr.getProperty(path);
        return CQ.I18n.getMessage(label) || propertyName;
    };

    CQ_Analytics.CampaignSeedMgr.getDisplayValue = function(propertyName) {
        var value = this.getProperty(propertyName);

        var type = CQ_Analytics.CampaignMetadataMgr.getProperty("content/" + this.formatPropertyName(propertyName) + "/type");
        // console.log("type",type);
        if( type && type == "boolean" ) {
            if( value && "1" == "" + value ) {
                return this.getPropertyLabel(propertyName) + CQ.I18n.getMessage(": true");
            }
            return this.getPropertyLabel(propertyName) + CQ.I18n.getMessage(": false");
        }

        var path = "content/" + this.formatPropertyName(propertyName) + "/values/" + value + "/label";
        var dp = CQ_Analytics.CampaignMetadataMgr.getProperty(path);
        // console.log("getDisplayValue", path , dp);
        return dp || value;
    };

    CQ_Analytics.CampaignSeedMgr.getPropertyNames = function(startsWith, excluded) {
        if (this.data == null) {
            this.init();
        }

        excluded = excluded ? excluded : [];
        startsWith = startsWith || "";

        var res = new Array();
        for (var p in this.data) {
            if (CQ_Analytics.Utils.indexOf(excluded, p) == -1) {
                // console.log("getPropertyNames", p, startsWith, p.indexOf(startsWith) != 0);
                if(p.indexOf(startsWith) == 0){
                    res.push(p);
                }
            }
        }
        return res;
    };


    CQ_Analytics.CampaignSeedMgr.renderStoreProperty = function(parent, propertyName) {
        if (CQ_Analytics && CQ_Analytics.CCM) {
            CQ_Analytics.CCM.onReady(function() {
                var init = function() {
                    var store = CQ_Analytics.CampaignSeedMgr;
                    if (store) {
                        var renderer = function() {
                            var value = store.getDisplayValue(propertyName) || "";
                            var id = parent.attr("id");

                            if (parent.attr("contenteditable") &&
                                /* test needed for IE7 */
                                parent.attr("contenteditable") != "inherit") return;

                            parent.attr("title","/" + propertyName);

                            value = CQ_Analytics.Variables.replaceVariables(value);
                            if( CQ_Analytics.isUIAvailable) {
                                value = (!value || value == "") ?
                                    CQ.I18n.getMessage("No", null, "Ex: No address, No keywords") + " " + store.getPropertyLabel(propertyName) :
                                    value;
                            } else {
                                value = (!value || value == "") ?
                                    "No " + store.getPropertyLabel(propertyName) :
                                    value;
                            }
                            if (parent.html() != value) {
                                if (store.fireEvent("beforepropertyrender", store, id) !== false) {
                                    parent.html(value);
                                    store.fireEvent("propertyrender", store, id);
                                }
                            }

                        };

                        if (store.fireEvent("beforeinitialpropertyrender", store, id) !== false) {
                            renderer();

                            if (store.addListener) {
                                store.addListener('update', function() {
                                    renderer();
                                });
                            }

                            store.fireEvent("initialpropertyrender", store, id);
                        }
                    }
                };

                CQ_Analytics.ClientContextUtils.onStoreRegistered(CQ_Analytics.CampaignSeedMgr.getName(), init);
            });
        }
    };


    CQ_Analytics.CampaignSeedMgr.internalRenderer = function(store, divId, acSeedId) {
        CQ_Analytics.CampaignSeedMgr.lastSeedId = acSeedId;

        var storeDiv = $CQ("#" + divId);
        storeDiv.children().remove();

        if( acSeedId && CQ_Analytics.CampaignMetadataMgr &&
            CQ_Analytics.CampaignMetadataMgr.baseURL) {
            var url = CQ_Analytics.CampaignMetadataMgr.baseURL;
            url += CQ_Analytics.CampaignSeedMgr.SERVICE_PATH;
            url = url.replace(/{seed}/g, encodeURIComponent(acSeedId));

            function processSeedData(data) {

                CQ_Analytics.CampaignSeedMgr.initJSON(data);

                var div = $CQ("<div/>").addClass("cq-cc-content");
                var divClear = $CQ("<div/>").addClass("cq-cc-clear");

                storeDiv.append(div);
                storeDiv.append(divClear);

                CQ_Analytics.CampaignSeedMgr.reset();

                var json = CQ_Analytics.CampaignSeedMgr.getJSON();
                // console.log("json",json);

                for(var o in json) {
                    var props = CQ_Analytics.CampaignSeedMgr.getPropertyNames(o);
                    if( props ) {
                        var toDisplay = new Array(props.length);
                        for(var i=0;i<props.length;i++) {
                            var propertyName = props[i];
                            var path = "content/" + CQ_Analytics.CampaignSeedMgr.formatPropertyName(propertyName) + "/order";
                            var order = CQ_Analytics.CampaignMetadataMgr.getProperty(path);
                            if( order && order < props.length) {
                                // console.log("order",order);
                                toDisplay[order] = propertyName;
                            }
                        }

                        for(var i=0;i<toDisplay.length;i++) {
                            var propertyName = toDisplay[i];
                            if( propertyName ) {
                                var value = CQ_Analytics.CampaignSeedMgr.getProperty(propertyName, true);
                                if( typeof value != "function") {
                                    var id = store.getName() + "-" + propertyName.replace(new RegExp("/", "ig"),"-");
                                    var propCont = $CQ("<div/>").addClass("cq-cc-store-property cq-cc-store-property-level" + i).appendTo(div);
                                    var propDiv = $CQ("<div/>").attr("id",id).appendTo(propCont);
                                    CQ_Analytics.CampaignSeedMgr.renderStoreProperty(propDiv,propertyName);
                                }
                            }
                        }
                    }
                }
            }

            $CQ.getJSON(CQ.shared.HTTP.noCaching(url), function(data) {
                CQ_Analytics.CampaignMetadataMgr.whenDataAvailable(processSeedData, data);
            });

        } else {
            if( !acSeedId ) {
                storeDiv.append("<div>" + CQ.I18n.getMessage("No Adobe Campaign seed id provided for the current profile")
                        + "</div>");
            } else {
                storeDiv.append("<div>" + CQ.I18n.getMessage("No valid configuration to Adobe Campaign service")
                        + "</div>");
            }
        }
    };

    CQ_Analytics.CampaignSeedMgr.renderer = function(store, divId) {

        function render() {
            if (acSeedId != CQ_Analytics.CampaignSeedMgr.lastSeedId) {
                CQ_Analytics.ClientContextUtils.onStoreRegistered("campaignmetadata", function() {
                    CQ_Analytics.CampaignSeedMgr.internalRenderer(store, divId, acSeedId);
                });
            }
        }

        var acSeedId = CQ_Analytics.ProfileDataMgr.getProperty("acSeedId");
        var acNoSeedId = null;
        if (!acSeedId) {
            acSeedId = CQ_Analytics.ProfileDataMgr.getProperty("campaign/seedId");
            acNoSeedId = CQ_Analytics.ProfileDataMgr.getProperty("campaign/noSeedId");
        }
        if (!acSeedId && (acNoSeedId != "true")) {
            var path = CQ_Analytics.ProfileDataMgr.getProperty("path");
            $CQ.ajax(CQ.shared.HTTP.noCaching(path + "/campaign.json"), {
                dataType: "json",
                async: false,
                success: function(data) {
                    if (data) {
                        if (data.seedId) {
                            acSeedId = data.seedId;
                            CQ_Analytics.ProfileDataMgr.setProperty("campaign/seedId", acSeedId);
                        } else {
                            CQ_Analytics.ProfileDataMgr.setProperty("campaign/noSeedId", "true");
                        }
                    }
                    render();
                },
                error: function() {
                    CQ_Analytics.ProfileDataMgr.setProperty("campaign/noSeedId", "true");
                    render();
                }
            });
        } else {
            render();
        }
    };

}

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.TagCloudMgr</code> object is a store providing tag cloud information.
 * @class CQ_Analytics.TagCloudMgr
 * @singleton
 * @extends CQ_Analytics.PersistedSessionStore
 */
if (CQ_Analytics.CCM && CQ_Analytics.TagCloudMgr) {
    /**
     * Renders the tagcloud as a section of the clickstreamcloud UI
     * @return {Element} DOM element
     * @private
     */
    CQ_Analytics.TagCloudMgr.createHTMLElement = function() {
        var div = document.createElement("div");
        var cloud = document.createElement("div");
        var currentTagCloud = this;
        cloud.className = "cloud";
        var nbTags = 0;
        this.each(function(tag, count) {
            var li = document.createElement("div");
            var dectil = currentTagCloud.calculateNtile(count, 10);
            var namespaceSplit = tag.split(":");
            var pathSplit = namespaceSplit[namespaceSplit.length - 1].split("/");
            li.innerHTML = pathSplit[pathSplit.length - 1];// + "<div class='count tag" + dectil + "'>&nbsp;(" + count + ")</div>";
            li.className = "tag";
            if (currentTagCloud.addedTags[tag]) {
                li.className += " new";
            }
            li.className += " tag" + dectil;
            li.title = tag + " (" + count + ")";
            li.setAttribute("data-property", tag);
            li.setAttribute("data-store", currentTagCloud.STORENAME);
            cloud.appendChild(li);
            // for proper wrapping in IE
            cloud.appendChild(document.createTextNode(" "));
            nbTags ++;
        });

        if( nbTags == 0 ) {
            var li = document.createElement("div");
            li.className = "tag notag";
            li.innerHTML = CQ.I18n.getMessage("No interest", null, "Tag cloud is empty");
            cloud.appendChild(li);
        }

        div.appendChild(cloud);

        return div;
    };

    CQ_Analytics.TagCloudMgr.renderer = function(store, targetId) {
        if( store && store.STORENAME == CQ_Analytics.TagCloudMgr.STORENAME ) {
            $CQ("#" + targetId).children().remove();
            $CQ("#" + targetId).append(store.createHTMLElement());
        }
    };

    CQ_Analytics.CCM.addListener("configloaded",function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()),
                this.createHTMLElement);
    },CQ_Analytics.TagCloudMgr);
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.ProfileDataMgr</code> object is a store providing surfer information, like referral keywords,
 * mouse position and browser details.
 * @class CQ_Analytics.SurferInfoMgr
 * @singleton
 * @extends CQ_Analytics.SessionStore
 */
if (CQ_Analytics.CCM && CQ_Analytics.SurferInfoMgr) {
    CQ_Analytics.CCM.addListener("configloaded", function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()));
    }, CQ_Analytics.SurferInfoMgr);

    var setI18nProperties = function() {
        var bi = CQ_Analytics.BrowserInfoInstance;
        var browserFamily = bi.getBrowserFamilyI18n();
        var browserVersion = bi.getBrowserVersionI18n();
        var osName = bi.getOSNameI18n();
        var browserName = "${/surferinfo/browserFamily_i18n} ${/surferinfo/browserVersion_i18n}";

        this.addInitProperty("browserFamily_i18n", browserFamily);
        this.addInitProperty("browserVersion_i18n", browserVersion);
        this.addInitProperty("browser_i18n", browserName);
        this.addInitProperty("OS_i18n", osName);

        /* required, as initial properties are not always reapplied to the store, due to race condition */
        this.setProperty("browserFamily_i18n", browserFamily);
        this.setProperty("browserVersion_i18n", browserVersion);
        this.setProperty("browser_i18n", browserName);
        this.setProperty("OS_i18n", osName);
    };

    setI18nProperties.call(CQ_Analytics.SurferInfoMgr);

}
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2011 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

if( !CQ_Analytics.MobileSliderUtils ) {
    /**
     * A helper class providing a set of utility methods for the mobile slider.
     * <br>
     * @static
     * @singleton
     * @class CQ_Analytics.MobileSliderUtils
     * @since 5.5
     */
    CQ_Analytics.MobileSliderUtils = function() {
        return {
            /**
             * Injects a CSS into the DOM.
             * @param {String} url CSS URL
             */
            injectCss: function(url) {
                $CQ("head").append("<link>");
                var css = $CQ("head").children(":last");
                css.attr({
                    rel:  "stylesheet",
                    type: "text/css",
                    href: CQ.shared.HTTP.externalize(url)
                });
            },

            /**
             * Removes a CSS from the DOM.
             * @param {String} url CSS URL
             */
            removeCss: function(url) {
                $CQ("[href='"+CQ.shared.HTTP.externalize(url)+"']").remove();
            },

            /**
             * Switches the UI to the mobile version: injects mobile CSS/classes and removes desktop CSS/classes.
             * @param {String} app Name of the application (used to find config).
             */
            switchToMobile: function(app) {
                this.injectMobileBodyClass(app);
                this.injectMobileCss(app);
            },

            /**
             * Switches the UI to the desktop version: injects desktop CSS/classes and removes mobile CSS/classes.
             * @param {String} app Name of the application (used to find config).
             */
            switchToDesktop: function(app) {
                this.injectDesktopBodyClass(app);
                this.injectDesktopCss(app);
            },

            /**
             * Injects desktop CSS and removes mobile CSS.
             * @param {String} app Name of the application (used to find config).
             */
            injectDesktopCss: function(app) {
                var cssList = this.getConfig(app, "DESKTOP_CSS");
                if( cssList ) {
                    for(var i=0;i<cssList.length;i++) {
                        var css = cssList[i];
                        CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(css, "app", app));
                    }
                }

                cssList = this.getConfig(app, "MOBILE_CSS");
                if( cssList ) {
                    for(var i=0;i<cssList.length;i++) {
                        var css = cssList[i];
                        CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(css, "app", app));
                    }
                }
            },

            /**
             * Injects mobile CSS and removes mobile CSS.
             * @param {String} app Name of the application (used to find config).
             */
            injectMobileCss: function(app) {
                var cssList = this.getConfig(app, "MOBILE_CSS");
                if( cssList ) {
                    for(var i=0;i<cssList.length;i++) {
                        var css = cssList[i];
                        CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(css, "app", app));
                    }
                }

                cssList = this.getConfig(app, "DESKTOP_CSS");
                if( cssList ) {
                    for(var i=0;i<cssList.length;i++) {
                        var css = cssList[i];
                        CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(css, "app", app));
                    }
                }
            },

            /**
             * Injects mobile classes on the body and removes desktop classes from the body.
             * @param {String} app Name of the application (used to find config).
             */
            injectMobileBodyClass: function(app) {
                var classList = this.getConfig(app, "MOBILE_BODY_CLASS");
                if( classList ) {
                    for(var i=0;i<classList.length;i++) {
                        var c = classList[i];
                        $CQ(document.body).addClass(c);
                    }
                }

                classList = this.getConfig(app, "DESKTOP_BODY_CLASS");
                if( classList ) {
                    for(var i=0;i<classList.length;i++) {
                        var c = classList[i];
                        $CQ(document.body).removeClass(c);
                    }
                }
            },

            /**
             * Injects desktop classes on the body and removes mobile classes from the body.
             * @param {String} app Name of the application (used to find config).
             */
            injectDesktopBodyClass: function(app) {
                var classList = this.getConfig(app, "DESKTOP_BODY_CLASS");
                if( classList ) {
                    for(var i=0;i<classList.length;i++) {
                        var c = classList[i];
                        $CQ(document.body).addClass(c);
                    }
                }

                classList = this.getConfig(app, "MOBILE_BODY_CLASS");
                if( classList ) {
                    for(var i=0;i<classList.length;i++) {
                        var c = classList[i];
                        $CQ(document.body).removeClass(c);
                    }
                }
            },

            /**
             * Returns a mobile slider config property. See {@link #MobileSliderUtils.CONFIG CONFIG}.
             * @param {String} app Name of the application (used to find config)
             * @param {String} property Name of the property
             */
            getConfig: function(app, property) {
                var config = CQ_Analytics.MobileSliderUtils.CONFIG[app];
                if( !config ) return null;

                return CQ_Analytics.MobileSliderUtils.CONFIG[app][property];
            }
        }
    }();

    /**
     * Mobile slider config per application. Sample config:
     * <pre><code>
window.CQMobileSlider["geometrixx-outdoors"] = {
    //CSS used by desktop that need to be removed when mobile
    DESKTOP_CSS: [
        "/etc/designs/${app}/clientlibs_desktop_v1.css"
    ],

    //CSS used by mobile that need to be removed when desktop
    MOBILE_CSS: [
        "/etc/designs/${app}/clientlibs_mobile_v1.css"
    ],

    //id of the content that needs to be removed when mobile
    DESKTOP_MAIN_ID: "main",

    //id of the content that needs to be removed when desktop
    MOBILE_MAIN_ID: "main",

    //body classes used by desktop that need to be removed when mobile
    DESKTOP_BODY_CLASS: [
        "page"
    ],

    //body classes used by mobile that need to be removed when desktop
    MOBILE_BODY_CLASS: [
        "page-mobile"
    ]
};
     * </code></pre>
     * @static
     * @type Object
     */
    CQ_Analytics.MobileSliderUtils.CONFIG = window.CQMobileSlider || {};
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

if (CQ_Analytics.SocialGraphMgr) {

    /**
     * Loads and renders the social graph.
     * @param {String} divId Id of the div to render to
     * @static
     */
    CQ_Analytics.SocialGraphMgr.internalRenderer = function(divId) {
        var uid = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
        CQ_Analytics.SocialGraphMgr.lastUid = uid;

        var profilePath = CQ_Analytics.ProfileDataMgr.getProperty("path");

        var url = profilePath + ".form.html";
        url += CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/socialgraph.js");
        url += "?limit=10";
        url += "&callback=${callback}";

        CQ_Analytics.SocialGraphMgr.load(CQ.shared.HTTP.externalize(url), {}, function() {
            $CQ("#" + divId).children().remove();

            CQ_Analytics.SocialGraphMgr.reset();

            var name = CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
            var div = $CQ("<div>").addClass("cq-socialgraph");
            $CQ("<div>")
                .addClass("cq-socialgraph-text")
                .html(CQ.I18n.getMessage("{0}'s friends and followers (social graph):", name, "{0} is a placeholder for a person's name") + " ")
                .appendTo(div);

            var toDisplay = {};

            var data = this.getJSON();

            var friends = data["friends"];
            if (friends) {
                for (var i in friends) {
                    if (friends[i]["authorizableId"]) {
                        toDisplay[friends[i]["authorizableId"]] = friends[i];
                    }
                }
            }
            var followers = data["followers"];
            if (followers) {
                for (var i in followers) {
                    if (followers[i]["authorizableId"]) {
                        toDisplay[followers[i]["authorizableId"]] = followers[i];
                    }
                }
            }

            var count = 0;
            for (var tod in toDisplay) {
                var f = toDisplay[tod];
                $CQ("<img>")
                    .attr("title", f["formattedName"] || f["authorizableId"])
                    .attr("src", CQ.shared.HTTP.externalize(f["avatar"]))
                    .appendTo(div);
                count++;
                if (count >= 9) break;
            }

            div.hide();
            $CQ("#" + divId).append(div);
            div.fadeIn("fast");
        });
    };

    /**
     * Delegates the rendering to {@link #SocialGraphMgr.internalRenderer}.
     * @param {String} store The store to render
     * @param {String} divId Id of the div to render to
     * @static
     */
    CQ_Analytics.SocialGraphMgr.renderer = function(store, divId) {
        var uid = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
        if (uid != CQ_Analytics.SocialGraphMgr.lastUid) {
            CQ_Analytics.SocialGraphMgr.internalRenderer(divId);
        }
    };
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
if( CQ_Analytics.CCM && CQ_Analytics.SegmentMgr) {
    CQ_Analytics.CCM.addListener("configloaded", function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.SegmentMgr);
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.ProfileDataMgr</code> object is a store providing user profile information.
 * @class CQ_Analytics.ProfileDataMgr
 * @singleton
 * @extends CQ_Analytics.PersistedSessionStore
 * @since 5.5
 */
if (CQ_Analytics.CCM && CQ_Analytics.ProfileDataMgr) {

    var initProfileDataMgr = function() {
        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
            this.getSessionStore(),
            CQ_Analytics.CCM.getUIConfig(this.getName()));

        /* event handler (called when setting/updating data in ClientSidePersistence) */
        $CQ(CQ.shared.ClientSidePersistence).bind(CQ.shared.ClientSidePersistence.EVENT_NAME, function(event, data) {
            if (!data) {
                return;
            }
            /* we want to replicate CLIENTCONTEXT and PROFILEDATA to the cookie */
            if (((data.key === 'CLIENTCONTEXT') || (data.key === 'PROFILEDATA')) && (data.mode != CQ.shared.ClientSidePersistence.MODE_COOKIE.name)) {

                var replicate = new CQ.shared.ClientSidePersistence({'container': '', 'mode': CQ.shared.ClientSidePersistence.MODE_COOKIE});
                var value = replicate.get(data.key);
                if( data.key === 'PROFILEDATA' && (!value || value == "") && data.action != "set") {
                    //case if no cookie was set -> force a delete of the local storage or any data storage
                    CQ.shared.ClientSidePersistence.clearAllMaps();
                }

                var key = data.key;
                var finalValue = "";
                var map = null;
                if( data.value && data.value != "") {
                    //parse persistence to extract and store only authorizableId
                    var psstore = new CQ_Analytics.PersistedSessionStore();
                    psstore.init = function() {
                        this.data = {};
                    };
                    psstore.persist = function() {};

                    map = psstore.parse(data.value);

                    if( map["authorizableId"]) {
                        psstore.setProperty("authorizableId",map["authorizableId"]);
                    }
                    if( map["visitorId"]) {
                        psstore.setProperty("visitorId",map["visitorId"]);
                    }
                    finalValue = psstore.toString();

                }

                replicate.set(key, finalValue);
            }
        });

    };

    if (CQ_Analytics.CCM.isConfigLoaded) {
        initProfileDataMgr.call(CQ_Analytics.ProfileDataMgr);
    } else {
        CQ_Analytics.CCM.addListener("configloaded", initProfileDataMgr, CQ_Analytics.ProfileDataMgr);
    }
}
/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 * AdobePatentID="2884US01"
 */

if (CQ_Analytics.OrderHistoryMgr) {
    CQ_Analytics.OrderHistoryMgr.renderer = function(store, divId) {
        CQ_Analytics.OrderHistoryMgr.internalRenderer(store, divId);
    };

    CQ_Analytics.OrderHistoryMgr.internalRenderer = function(store, divId) {
        var storeDiv = $CQ("#" + divId);
        storeDiv.children().remove();

        if (!store.data["traits"]) {
            storeDiv.append($CQ("<div/>").text(CQ.I18n.getMessage("Not on an eCommerce page.")));
            return;
        }

        var div = $CQ("<div/>");
        var divClear = $CQ("<div/>").addClass("cq-cc-clear");
        var traits = store.data.traits;
        if (traits) {			
            for (var trait in traits) {
                var traitValue = traits[trait];
				var tra = $CQ("<div/>").addClass("cq-cc-orderhistory-trait").append(traitValue.name + ":");                    
                if (!traitValue.data)
                    continue;

                if(traitValue.data instanceof Array) {
					for (var i = 0; i < traitValue.data.length; i++) {
                        var pr = $CQ("<span/>").addClass("cq-cc-orderhistory-property").append(traitValue.data[i]);                      	
                        tra.append(" ");
                    	tra.append(pr);
                    }                    
                } else if(typeof traitValue.data === 'object') {
                    for (var prop in traitValue.data) {
                      	var pr = $CQ("<span/>").addClass("cq-cc-orderhistory-property").text(prop + "=" + traitValue.data[prop]);
                      	tra.append(" ");    
					  	tra.append(pr);
                    }
                } else {
                    var pr = $CQ("<span/>").addClass("cq-cc-orderhistory-property").text(traitValue.data);
					tra.append(" ");    
					tra.append(pr);
                }
                div.append(tra);                
            }

        }

        storeDiv.append(div);
        storeDiv.append(divClear);
    };
}
/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 * AdobePatentID="2884US01"
 */

if (CQ_Analytics.CartMgr) {
    CQ_Analytics.CartMgr.renderer = function(store, divId) {
        CQ_Analytics.CartMgr.internalRenderer(store, divId);
    };

    CQ_Analytics.CartMgr.internalRenderer = function(store, divId) {
        var storeDiv = $CQ("#" + divId);
        storeDiv.children().remove();

        if (!store.data["entries"]) {
            storeDiv.append($CQ("<div/>").text(CQ.I18n.getMessage("Not on an eCommerce page.")));
            return;
        }

        storeDiv.off(".cart");

        storeDiv.on("click.cart", "a[data-voucher]", function(event) {
            var code = $CQ(this).attr("data-voucher");

            for (var i = 0; i < store.data.vouchers.length; i++) {
                if (store.data.vouchers[i].code == code) {
                    store.data.vouchers.splice(i, 1);  // remove
                    break;
                }
            }

            if (event && event.preventDefault) event.preventDefault();

            store.fireEvent("update", "vouchers");

            return false;
        });

        var div = $CQ("<div/>").addClass("cq-cc-content");
        var divClear = $CQ("<div/>").addClass("cq-cc-clear");

        if (store.data["entries"] && store.data["entries"].length > 0) {
            var products = $CQ("<ol/>")
                .addClass("cq-cc-cart-items");
            for (var i = 0; i < store.data["entries"].length; i++) {
                var entry = store.data["entries"][i];
                var productTag = $CQ("<a/>")
                    .attr("href", CQ.shared.HTTP.externalize(entry["page"]))
                    .text(entry["title"]);
                var quantity = $CQ("<span/>")
                    .addClass("cq-cc-store-property")
                    .addClass("cq-cc-cart-item-quantity")
                    .append($CQ("<span/>")
                        .attr("data-store", "cart")
                        .attr("data-property", "entries[" + i + "].quantity")
                        .text(entry["quantity"])
                    );
                var price = $CQ("<span/>")
                    .addClass("cq-cc-cart-item-price")
                    .text(entry["priceFormatted"]);
                var entryTag = $CQ("<li/>")
                    .prepend(quantity)
                    .prepend(price)
                    .prepend(productTag)
                    .prepend($CQ("<img/>")
                        .attr("src", CQ.shared.HTTP.externalize(entry["thumbnail"]))
                    );
                products.append(entryTag);
            }
            div.append(products);
        }

        var divTotal = $CQ("<div/>")
            .addClass("cq-cc-cart-totalprice")
            .append($CQ("<span/>")
                .addClass("cq-cc-store-property")
                .attr("data-store", "cart")
                .attr("data-property", "totalPriceFloat")
                .attr("title", "/cart/totalPrice").text(store.data["totalPrice"])
        );
        div.append(divTotal);

        if (store.data["promotions"] && store.data["promotions"].length > 0) {
            var promotions = $CQ("<div/>")
                .addClass("cq-cc-cart-promotions");
            for (var i = 0; i < store.data.promotions.length; i++) {
                var promo = store.data.promotions[i];
                if (promo["description"]) {
                    var promoTag = $CQ("<a/>");
                    if(promo["status"] == "POTENTIAL") {
                        promoTag.text(promo["title"] + " (" + CQ.I18n.getMessage("potential") + ")");
                    } else {
                        promoTag.text(promo["title"]);
                    }
                    if (promo["path"] && promo["path"].length > 0 && promo["path"][0] == "/") {
                        promoTag.attr("href", CQ.shared.HTTP.externalize(promo["path"] + ".html"));
                    }
                    promoTag.addClass("cq-html-tooltip")
                        .attr("data-tooltip", promo["description"])
                        .hover(
                            function (event) {
                                if (!this.htmltooltip) {
                                    this.htmltooltip = new CQ.Ext.Tip({
                                        cls: "cq-cc-cart-tooltip",
                                        html: $CQ(this).attr("data-tooltip")
                                    });
                                }
                                this.htmltooltip.setPosition(event.pageX, event.pageY + 20);
                                this.htmltooltip.show();
                            },
                            function () {
                                if (this.htmltooltip) {
                                    this.htmltooltip.hide();
                                }
                            }
                        );
                    promotions.append(promoTag);
                }
            }
            div.append(promotions);
        }

        if (store.data["vouchers"] && store.data["vouchers"].length > 0) {
            var vouchers = $CQ("<div/>")
                .addClass("cq-cc-cart-vouchers")
                .attr("title", "/cart/vouchers");
            for (var i = 0; i < store.data["vouchers"].length; i++) {
                var voucher = store.data["vouchers"][i];

                var deleteButton = $CQ("<a/>").attr("href", "#").attr("data-voucher", voucher["code"]);
                vouchers.append(deleteButton);

                var voucherTag = $CQ("<span/>")
                    .attr("title", voucher["description"] || CQ.I18n.getMessage("Voucher"))
                    .text(voucher["code"]);
                if (voucher["path"]) {
                    voucherTag = $CQ("<a/>")
                        .attr("href", CQ.shared.HTTP.externalize(voucher["path"] + ".html"))
                        .append(voucherTag);
                }
                vouchers.append(voucherTag);
            }
            div.append(vouchers);
        }

        storeDiv.append(div);
        storeDiv.append(divClear);
    };
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
if (CQ_Analytics.CampaignMgr) {

    /**
     * Refreshes the experiences according to the currently selected campaign
     * 
     * @private
     */
    CQ_Analytics.CampaignMgr.refreshExperiences = function() {
        if (!this.data) {
            return;
        }

        var campaign = this.getCampaignByPath(this.data.path);

        var experienceSelector = $CQ("#cq-cc-campaign-experience-selector");
        experienceSelector.children().remove();

        if ( !campaign ) {
            experienceSelector.append($CQ("<option>").text(CQ.I18n.getMessage("(simulation)")));
            experienceSelector.select2('val', CQ.I18n.getMessage("(simulation)"));
            return;
        }

        var attributes = { value: CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE };
        if (this.data["recipe/path"] === CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE) {
            attributes.selected = "selected";
        }
        
        experienceSelector.append($CQ("<option>", attributes).text(CQ.I18n.getMessage("(default)")));
        if ( attributes.selected === 'selected' ) {
            experienceSelector.select2('val', attributes.value);
        }

        var that = this;

        var hasExperiences = false;

        $CQ.each(campaign.experiences, function(index, experience) {

            hasExperiences = true;

            var experiencePath = experience.path;
            var attributes = { value: experiencePath };

            if ( that.data["recipe/path"] === experiencePath ) {
                attributes.selected = 'selected';
            }

            experienceSelector.append(
                $CQ("<option>", attributes).text(experience.title)
            );
            
            if ( attributes.selected === 'selected' ) {
                experienceSelector.select2('val', experiencePath);
            }
        });
    };

    /**
     * @private
     */
    CQ_Analytics.CampaignMgr.getCampaignByPath = function(path) {
        return this.getCampaignBy("path", path);
    };

    /**
     * Reloads this store's data from the server side
     * 
     * <p>Maintains the currently selected properties and does not fire any events.</p>
     */
    CQ_Analytics.CampaignMgr.reload = function(experienceToSelect) {

        this.setSuppressEvents(true);

        var that = this;

        var url = CQ_Analytics.ClientContextMgr.getClientContextURL('/content/jcr:content/stores/' + this.STORENAME + '.init.js');
        url = CQ.shared.HTTP.externalize(url);

        $CQ.ajax(url).done(function(result) {
            that.refreshExperiences();
            if (experienceToSelect) {
                that.setProperty("recipe/path", experienceToSelect);
            }
            that.setSuppressEvents(false);
            that.fireEvent("update");

        }).always(function() {
            // make sure events are always enabled again, even on failure
            that.setSuppressEvents(false);
        });
    };

    CQ_Analytics.CampaignMgr.getExperienceByPath = function(path) {
        if (path === CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE) {
            return {
                title:  CQ.I18n.getMessage("(default)"),
                path :  CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE,
                id   :  CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE
            };
        }
        return this.getExperienceBy("path", path);
    };

    CQ_Analytics.CampaignMgr.displayWarning = function(warning) {

        var warningIcon = $CQ('<span>').attr('class','cq-cc-store-warning-sign').text('!');

        $CQ('<div>').attr('class', 'cq-cc-store-warning').text(warning)
            .appendTo($CQ('#cq-cc-store-warnings')).prepend(warningIcon);
    };

    CQ_Analytics.CampaignMgr.renderer = function(store, divId) {

        var campaign, i;

        var that = this;

        $CQ("#" + divId).children().remove();

        var container = "<div class='cq-cc-store'>";
        container += "<div id='cq-cc-store-warnings'></div>";

        if ( this.data.campaigns) {

            // render the campaign selector
            container += "<div class='cq-cc-campaign-prop'><a class='label' target='_blank' id='cq-cc-campaign-selector-label'>" + CQ.I18n.get("Active campaign:") +  " </a> <select id='cq-cc-campaign-selector'>";
            container += '<option value="">' + CQ.I18n.getMessage("(simulation)") +'</option>';
            for ( i = 0 ; i < this.data.campaigns.length ; i++ ) {
                campaign = this.data.campaigns[i];
                var selected = false;
                if ( this.data.path && this.data.path === campaign.path ) {
                    selected = true;
                }
                var selectedAttribute = selected ? ' selected="selected" ' : '';
                container += '<option value="' + campaign.path + '" ' + selectedAttribute + '>' + campaign.title+ '</option>';
            }
            container += "</select></div>";

            // render the campaign experience selector
            container += "<div class='cq-cc-campaign-prop'>";
            container += "<a class='label' target='_blank' id='cq-cc-campaign-experience-selector-label'>";
            container += CQ.I18n.getMessage("Active experience:") + " </a> <select id='cq-cc-campaign-experience-selector'>";
            container += "</select></div>";
        } else {
            container += CQ.I18n.getMessage("No campaigns found");
        }

        container += "</div>";

        var select2Opts = {
                'width': '180px',
                'dropdownCssClass': 'cq-cc-campaign-store-dropdown'
        }
        
        $CQ("#" + divId).append(container);
        $CQ('#cq-cc-campaign-selector').select2(select2Opts);
        $CQ('#cq-cc-campaign-experience-selector').select2(select2Opts);

        that.refreshExperiences();

        // enable/disable links to campaign and experience pages
        var campaignPath = this.getProperty("path");
        $CQ('#cq-cc-campaign-selector-label')
            .toggleClass('cq-cc-campaign-prop-button', !!(campaignPath))
            .attr('href', campaignPath ? campaignPath + '.html' : null);

        var experiencePath = this.getProperty("recipe/path");
        if ( experiencePath === CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE ) {
            experiencePath = null;
        }
            
        $CQ('#cq-cc-campaign-experience-selector-label')
            .toggleClass('cq-cc-campaign-prop-button', !!(experiencePath))
            .attr('href', experiencePath ? experiencePath + '.html' : null);

        campaign = this.getCampaignByPath(campaignPath);

        if ( campaign && campaign.experiences.length === 0) {
            this.displayWarning(CQ.I18n.getMessage("The selected campaign does not have any experience pages."));
        }

        // when a campaign is selected for simulation, change the relevant properties and fire an update event 
        $CQ('#cq-cc-campaign-selector').change(function() {

            var selected = $CQ(this).find(':selected');

            that.setCampaign( that.getCampaignByPath(selected.val()) );

            that.refreshExperiences();
        });

        // when a campaign experience is selected for simulation, ( you guessed it ) change the relevant properties
        // and fire an update event
        $CQ('#cq-cc-campaign-experience-selector').change(function() {

            var path = $CQ(this).find(":selected").val();

            that.setExperience( that.getExperienceByPath(path) );
        });
    };
    
    CQ_Analytics.CCM.addListener("configloaded", function() {

        //add to std clickstream cloud ui
        CQ_Analytics.ClickstreamcloudUI.register(
                this.getSessionStore(),
                CQ_Analytics.CCM.getUIConfig(this.getName()));

    }, CQ_Analytics.CampaignMgr);
}
/*
This patch is only for IE7 and other browsers that do not support JSON.
If supporting these browsers is not required, then this file can be removed.

IE7 Does not contain support for JSON.stringify and JSON.parse.
This code provides support.
JSON is only defiend if it does not already exist.
It was retrieved from http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js on 20 May 2013
*/

/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

JSON = window.JSON || {};

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*******************************************************************************
 *
 * ADOBE CONFIDENTIAL __________________
 *
 * Copyright 2013 Adobe Systems Incorporated All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * Adobe Systems Incorporated and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Adobe Systems
 * Incorporated and its suppliers and are protected by trade secret or copyright
 * law. Dissemination of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from Adobe
 * Systems Incorporated.
 ******************************************************************************/
CQ_Analytics = CQ_Analytics || {};
CQ_Analytics.AAM = CQ_Analytics.AAM || {};
/**
 * This class shims between the code that loads the dialog, and the LookupDialog enabling
 * sharing. See the beforerender listener in dialog.xml
 */
CQ_Analytics.AAM.LookupDialogCtl = CQ_Analytics.AAM.LookupDialogCtl || function(traitsManager, config) {


    var traitLookupUrl = config.configPath  || "/etc/cloudservices/audiencemanager/geometrixx";
    traitLookupUrl = traitLookupUrl + ".traits.json";

    return {
        init : function(component) {
            return new CQ_Analytics.AAM.LookupDialog(traitsManager, {
                container : component,
                traitLookupUrl : traitLookupUrl
            });

        }
    };
};
/**
 * Lookup dialog manages lookups of traits during client context configuration.
 * It exposes show and hide methods to allow the caller to manage show and hide.
 * It allows the caller to change the callback function as well as setting it in configuration.
 */
CQ_Analytics.AAM.LookupDialog = CQ_Analytics.AAM.LookupDialog || function(traitsManagerInstance, config) {
    "use strict";



    config = config || {};
    // callback which will be replaced when show is called
    var callback = config.callback || function() {};
    var debugMessages = config.debug || false;
    // url where traits are looked up.
    var traitLookupUrl = config.traitLookupUrl;
    // can accept a container to configure rather than creating one.
    var container = config.container;
    // the traitsManager being used, only if invoked from a dialog.xml
    var traitsManager = traitsManagerInstance;


    // traits when show is called.
    var originalTraits = {};
    // traits as the evolve when the dialog is showing.
    var availableTraits = {};
    // map of traits found by the user before they are added to available traits.
    var newOptionsMap = {};


    // traits selection controlls.
    var newTraitsList = null;
    var selectedTraitsList = null;


    var debug = function() {};
    if ( debugMessages ) {
        debug = function(msg) {
            console.log(msg);
        };
    }

    /**
     * Sets the traits at the start of the dialog.
     * @param newOriginalTraits new traits a map of trait objects keyed by traitID.
     * @private
     */
    function setTraits(newOriginalTraits) {
        originalTraits = newOriginalTraits || {};
        availableTraits = {};
        $.each(originalTraits, function(key, val) {
            availableTraits[key] = val;
        });
    }

    setTraits(config.availableTraits);

    /**
     * Set the traits and force a refresh
     * @param new set of original traits.
     * @private
     */
    function setTraitsWithRefresh(newOriginalTraits) {
        setTraits(newOriginalTraits);
        updateListComponent(selectedTraitsList, availableTraits);
    }
    /**
     * Sets the callback.
     * @param oncompleteCallback callback function.
     *  @private
     */
    function setCallback(oncompleteCallback) {
        callback = oncompleteCallback || function() {};
    }

    /**
     * Update the options map with a new set of options, deleting old options.
     * @param newOptions an array of options.
     * @returns the new option map keyed by object id.
     * @private
     */
    function updateOptionsMap(newOptions) {
        var newOptionsMap = {};
        $.each(newOptions, function(index, val) {
            // some feeds use name instead of title.
            if ( val.name && !val.title ) {
                val.title = val.name;
            }
            newOptionsMap[val.id] = val;
        });
        return newOptionsMap;
    }

    /**
     * Update a list component.
     * @param listComponent the list component that has a setOptions function.
     * @param optionsMap map of options to add.
     * @returns the array of option objects as consumed by the list.
     * @private
     */
    function updateListComponent(listComponent, optionsMap) {
        var newOptions = [];
        $.each(optionsMap, function(key, val) {
            if (val) {
                // some feeds use name instead of title.
                if ( val.name && !val.title ) {
                    val.title = val.name;
                }
                newOptions.push({
                    value : key,
                    text : val.title,
                    qtip : key
                });
            }
        });
        listComponent.setOptions(newOptions);
        return newOptions;
    }

    /**
     * Using the CQ  server search for traits. This will after asynchronously calling the server.
     * @param field the field containing the search value.
     * @param newV the new value
     * @param oldV the old value before this update.
     * @param the list to update with results.
     * @private
     */
    function searchForTraits(field, newV, oldV, listToUpdate) {
        if (newV !== oldV) {
            listToUpdate.hide();
            CQ.Ext.Msg.wait(CQ.I18n.getMessage("Searching...."));
            $.getJSON(traitLookupUrl, {
                q : newV
            }, function(result) {
                CQ.Ext.Msg.wait(CQ.I18n.getMessage("Searching....")).hide();
                if (result.traits) {
                    debug("Value set to " + JSON.stringify(result.traits));
                    listToUpdate.options = [];
                    newOptionsMap = updateOptionsMap(result.traits);
                    updateListComponent(listToUpdate, newOptionsMap);
                    listToUpdate.show();

                }
            }).error(function() {
                CQ.Ext.Msg.wait(CQ.I18n.getMessage("Search Failed, please contact support")).hide();
                CQ.Ext.Msg.alert(CQ.I18n.getMessage('Error'), CQ.I18n.getMessage('Search Failed, please contact support'));
            });
        }
    }

    /**
     * Create a lookup dialog. Constructor.
     */
    function newLookupDialog() {

        // build the list of possible traits to add with a listener on selection.
        newTraitsList = CQ.Util.build({
            allowBlank : true,
            fieldLabel : CQ.I18n.getMessage('Traits to add'),
            fieldSubLabel : CQ.I18n.getMessage('select to add'),
            xtype : 'selection',
            type : 'checkbox',
            listeners : {
                selectionchanged : function(list, value, checked) {
                    debug("Adding Trait " + value + " " + checked);
                    if ( checked && value && newOptionsMap[value] ) {
                        // add the new trait to the availableTraits
                        availableTraits[value] = newOptionsMap[value];
                        newOptionsMap[value] = false;
                        // remove from the newTraitsList
                        updateListComponent(newTraitsList, newOptionsMap);
                        // add to the current traits
                        updateListComponent(selectedTraitsList, availableTraits);
                    }
                }
            }
        });
        // hide it till it has some contents.
        newTraitsList.hide();

        // build a list of selected traits, and bind a to the checkbox click to allow removal.
        selectedTraitsList = CQ.Util.build({
            allowBlank : true,
            fieldLabel : CQ.I18n.getMessage('Current traits'),
            fieldSubLabel : CQ.I18n.getMessage('select to remove'),
            xtype : 'selection',
            type : 'checkbox',
            listeners : {
                selectionchanged : function(list, value, checked) {
                    debug("Removeing Trait " + value + " " + checked);
                    if ( checked && value && availableTraits[value] ) {
                        // add the new trait to the availableTraits
                        newOptionsMap[value] = availableTraits[value];
                        availableTraits[value] = false;
                        // remove from the newTraitsList
                        updateListComponent(newTraitsList, newOptionsMap);
                        // add to the current traits
                        updateListComponent(selectedTraitsList, availableTraits);
                    }
                }
            }

        });

        // populate the list with the currently available traits (ie the original traits).
        updateListComponent(selectedTraitsList, availableTraits);

        var trait = null;
        var traitValue = null;

        // build a search box and bind blur and enter to performing the search.
        // we cant use a suggests box because the search is too slow to be usable, taking between 1s and 30s to respond.
        trait = CQ.Util.build({
            allowBlank : true,
            fieldLabel : CQ.I18n.getMessage('Trait'),
            fieldSubLabel : CQ.I18n.getMessage('enter search'),
            url : traitLookupUrl,
            name : 'q',
            xtype : 'textfield',
            listeners : {
                change : function(field, newV, oldV) {
                    searchForTraits(field, newV, oldV, newTraitsList);
                    traitValue = newV;
                },
                specialkey : function(field, e) {
                    debug("Special key ");
                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                    if (e.getKey() == e.ENTER) {
                        var newV = trait.getValue();
                        searchForTraits(trait, newV, traitValue, newTraitsList);
                        traitValue = newV;
                    }
                }
            }
        });

        var panels = CQ.Util.build({
            "xtype" : 'panel',
            "layout" : 'column',
            "items" : [
                {
                    "xtype" : 'panel',
                    bodyBorder : false,
                    border : false,
                    title : CQ.I18n.getMessage("Search Traits"),
                    columnWidth: 0.5,
                    items : [{
                        "xtype" : 'panel',
                        layout : 'form',
                        bodyBorder : false,
                        border : false,
                        items : [trait, newTraitsList]
                    }]
                },
                {
                    "xtype" : 'panel',
                    bodyBorder : false,
                    border : false,
                    title : CQ.I18n.getMessage("Selected Traits"),
                    columnWidth: 0.5,
                    items : [{
                        "xtype" : 'panel',
                        layout : 'form',
                        bodyBorder : false,
                        border : false,
                        items : [selectedTraitsList]
                    }]
                }
            ]
        });

        // wrap the components up in a dialog
        if ( container ) {
            // invoked by the client context, so insert ourselves into that panel
            // as there are no other hooks.
            container.removeAll();
            container.add(panels);
            // add hooks in
            container.mon(container,{
                'beforesubmit' : function() {
                    // save the state including full trait objects to the
                    // traitsmanager.
                    traitsManager.setAvailableTraits(availableTraits);
                    // stop the container performing  a reload, since we have already
                    // saved and there is no need to reconfigure the control.
                    // normally this would result in reloading all the js files and
                    // the data from the server. This component doesnt need that.
                    container.hide();
                    return false;
                 }
            });
            container.mon(container,{
                 'loadcontent' : function() {
                     // can't use the information from the dialog since that will
                     // not contain all the information needed, so have to use
                     // the data from the traitsManager.
                     traitsManager.getAvailableTraits(setTraitsWithRefresh);
                 }
            });

            return {
                // empty
            };
        } else {
            var searchDialog = new CQ.Dialog({
                "height" : 200,
                "width" : 600,
                "title" : CQ.I18n.getMessage("Manage Traits"),
                "buttons" : [ {
                    "text" : CQ.I18n.getMessage("OK"),
                    "handler" : function() {
                        debug("Saving "+JSON.stringify(availableTraits));
                        callback(availableTraits);
                    }
                }, {
                    "text" : CQ.I18n.getMessage("Cancel"),
                    "handler" : function() {
                        debug("Cancel "+JSON.stringify(originalTraits));
                        callback(originalTraits);
                    }
                } ],
                items : [panels]
            });
            // expose only the functions we want to.
            return {
                /**
                 * Show the dialog.
                 * @param currentAvailableTraits the available traits.
                 * @param oncompleteCallback a callback function to save the selected traits.
                 *           called with a map of traits keyed by id callback(availableTraits)
                 * @returns nothing.
                 */
                show : function(currentAvailableTraits, oncompleteCallback) {
                    setTraits(currentAvailableTraits);
                    setCallback(oncompleteCallback);
                    searchDialog.show();
                },
                /**
                 * hide the dialog, but dont dispose.
                 * @returns
                 */
                hide : function() {
                    searchDialog.hide();
                }
            };
        }



    } // end of constructor function.

    // create an instance using the constructor function.
    return newLookupDialog();

};

/*******************************************************************************
 *
 * ADOBE CONFIDENTIAL __________________
 *
 * Copyright 2013 Adobe Systems Incorporated All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * Adobe Systems Incorporated and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Adobe Systems
 * Incorporated and its suppliers and are protected by trade secret or copyright
 * law. Dissemination of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from Adobe
 * Systems Incorporated.
 ******************************************************************************/
CQ_Analytics = window.CQ_Analytics || {};
CQ_Analytics.AAM = CQ_Analytics.AAM || {};

/**
 * The segment manager manages segments and their refresh after traits have been
 * updated on the Audience Manager.
 */
CQ_Analytics.AAM.SegmentsMgr = CQ_Analytics.AAM.SegmentsMgr ||
        function(audienceManagerInstance, config) {
            "use strict";

            // using jQuery/closure code style rather than prototype to hide internal private methods.
            // see http://javascript.crockford.com/private.html

            function newAAMSegmentsMgr() {


                // save configuration
                var storename = config.store_name || "aamsegments";
                var debugMessages = config.debug || false;
                var segmentationUrl = "/etc/segmentation/aam.infinity.json";
                var audienceManager = audienceManagerInstance;

                /**
                 * Contains the segments for aam.
                 */
                var cachedSegmentInfo = null;

                /**
                 * When the control needs re-rendering, set to true.
                 */
                var needsUpdate = true;



                /**
                 * Template for the chooser
                 */
                var displayTemplate = function(key, label) {
                    return "<span class='aamsegments-name' >" + label + "</span>";
                };

                // create a new instance from the "factory". (this is the super() call).
                var newStore = CQ_Analytics.JSONStore.getInstance(storename, null, null, function() {
                    this.init();
                    this.reset();
                });

                var debug = function() {};
                if ( debugMessages ) {
                    debug = function(msg) {
                        console.log("DEBUG: aamsegments.js "+msg);
                    };
                }
                var error = function(msg) {
                    console.log("ERROR: aamsegments.js "+msg);
                };

                debug("Created newStore as " + newStore);

                /**
                 * Recursively add segments to the segment info cache, indexed
                 * by segment ID.
                 * @private
                 * @param segmentFolder an object that could be a segment or segment folder.
                 * @return map of segments by ID, each value containing an object with title, key and content.
                 */
                function addSegments(segmentFolder) {
                    var segments = {};
                    if (segmentFolder['jcr:content']) {
                        if (segmentFolder['jcr:content'].aam_sid) {
                            debug("Got segment " + segmentFolder['jcr:content'].aam_sid);
                            // segment
                            segments[segmentFolder['jcr:content'].aam_sid] = {
                                title : segmentFolder['jcr:content']['jcr:title'],
                                key : segmentFolder['jcr:content'].aam_sid,
                                content : segmentFolder['jcr:content']
                            };
                        } else {
                            debug("In Folder " + segmentFolder['jcr:content'].aam_path);
                        }
                    }
                    if ("object" === typeof segmentFolder) {
                        // recurse into anything that is not jcr:content
                        $.each(segmentFolder, function(k, v) {
                            if (k !== "jcr:content") {
                                // use underscore.js to merge the maps.
                                segments = $.extend(segments, addSegments(v));
                            }
                        });
                    }
                    return segments;
                }




                /**
                 * render the controls
                 * @param store the store being rendered.
                 * @param divId. The ID of the div where the store should be rendered.
                 * @returns void
                 */
                function internalRenderer(store, divId) {
                    if (needsUpdate) {
                        needsUpdate = false;
                        var segmentDiv = $("#" + divId);
                        // its possible that div might not exist, if the user has chosen not to add a Segments display.
                        // the ClientContext store will still be updated.
                        if (segmentDiv) {
                            segmentDiv.children().remove();
                            $.each(audienceManager.getUserSegments(), function(key, value) {
                                if (value && cachedSegmentInfo[key]) {
                                    var segInfo = cachedSegmentInfo[key];
                                    segmentDiv.prepend(displayTemplate(key, segInfo.title));
                                }
                            });
                        }
                    }
                }

                /**
                 * Get a copy of all segments known to CQ for this partner. This
                 * could be big, but should not be an issue.
                 * @param callback a callback function, no params.
                 * @returns void.
                 * @private
                 */
                function loadSegmentInfo(callback) {
                    debug("Loading Segment Info " + newStore + " with callback " + callback);
                    if (cachedSegmentInfo) {
                        callback();
                    } else {
                        debug("Get segment info from " + segmentationUrl);
                        cachedSegmentInfo = cachedSegmentInfo || {};
                        // this could be a lot of data and might need to
                        // replace it with a service.
                        $.getJSON(segmentationUrl, function(data) {
                            cachedSegmentInfo = $.extend(cachedSegmentInfo, addSegments(data));
                            callback();
                        }).fail(function(jqXHR, textStatus, errorThrown){
                            error("failed to load segment info from "+segmentationUrl+" cause "+textStatus);
                            callback();
                        });
                    }
                }

                // connect to audience manager to be notified when its updated.
                audienceManager.addListener("update", function() {
                    needsUpdate = true;
                    newStore.fireEvent("update");
                });


                // bind the public methods to new store.
                newStore.renderer = internalRenderer;


                loadSegmentInfo(function() {
                    // register the store once its fully loaded and configured
                    // Wait for configuration to complete

                    CQ_Analytics.CCM.register(newStore);
                });
                debug("New Segment Manager created " + newStore);

                return newStore;

            } // end of constructor.



            return newAAMSegmentsMgr();

        };


/*******************************************************************************
 *
 * ADOBE CONFIDENTIAL __________________
 *
 * Copyright 2013 Adobe Systems Incorporated All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * Adobe Systems Incorporated and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Adobe Systems
 * Incorporated and its suppliers and are protected by trade secret or copyright
 * law. Dissemination of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from Adobe
 * Systems Incorporated.
 ******************************************************************************/
CQ_Analytics = window.CQ_Analytics || {};
CQ_Analytics.AAM = CQ_Analytics.AAM || {};

/**
 * The trait manager manages traits and their refresh after traits have been
 * updated on the Audience Manager.
 */
CQ_Analytics.AAM.TraitsMgr = CQ_Analytics.AAM.TraitsMgr ||
        function(audienceManagerInstance, config) {
            "use strict";

            // using jQuery/closure code style rather than prototype to hide internal private methods.
            // see http://javascript.crockford.com/private.html

            function newAAMTraitsMgr() {


                // save configuration
                // store name for traits
                var storename = config.store_name || "aamtraits";
                // the url where traits are looked up, returns an array of trait objects, query specified in q param.
                var traitLookupUrl = config.configPath  || "/etc/cloudservices/audiencemanager/geometrixx";
                traitLookupUrl = traitLookupUrl + ".traits.json";
                // server url of this configuration where the traits config is saved.
                var availableTraitsUrl = config.pagePath || false;
                var debugMessages = config.debug || false;
                // if set to true, mockup the traits not requiring a server connection.
                var mockup = false;

                var audienceManager = audienceManagerInstance;



                /**
                 * When the control needs re-rendering, set to true.
                 */
                var needsUpdate = true;

                /**
                 * map of traits keyed by ID.
                 */
                var availableTraits = false;

                var currentUserId = false;

                var userTraits = {};

                /**
                 * Template for the chooser
                 */
                var chooserTemplate = function(key, label, checkedClass) {
                    return "<label data-key='" + key + "' class='" + checkedClass + "' >" +
                        "<div class='toggle'><div class='green'></div><div class='red'></div></div>" +
                        label + "</label>";
                };

                // create a new instance from the "factory". (this is the super() call).
                var newStore = CQ_Analytics.PersistedJSONStore.getInstance(storename, null, null, function() {
                    this.init();
                    this.reset();
                });

                var debug = function() {};
                if ( debugMessages ) {
                    debug = function(msg) {
                        console.log("DEBUG aamtraits.js: "+msg);
                    };
                }
                var error = function(msg) {
                    console.log("ERROR aamtraits.js: "+msg);
                };


                debug("Created newStore as " + newStore);

                /**
                 * Get the context store loader url for audience manager.
                 */
                function getLoaderUrl() {
                    return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/audiencemanager/loader.json");
                }

                /**
                 * Load the traits selected for the user.
                 */
                function loadUserTraits(userId, callback) {

                    // need to reload from http://localhost:4502/etc/clientcontext/default/contextstores/profiledata/loader.json?authorizableId=aparker%40geometrixx.info
                    // suitable for this store

                    var loaderUrl = getLoaderUrl();
                    $.getJSON(loaderUrl, {
                            authorizableId : userId
                        },
                        function(response) {
                            currentUserId = userId;
                            userTraits = {};
                            if ( response.selectedTraits ) {
                                debug("Loaded User Triats for user "+currentUserId+" as "+response.selectedTraits);
                                userTraits = $.parseJSON(response.selectedTraits);
                            } else {
                                debug("Loaded User Triats for user "+currentUserId+" as "+response.selectedTraits);
                            }
                            callback();
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        error("Loaded User Triats for user "+currentUserId+" gave error "+textStatus);
                        currentUserId = userId;
                        userTraits = {};
                        callback();
                    });
                }

                /**
                 * save the currently selected traits.
                 */
                function saveUserTraits() {
                    if ( !currentUserId ) {
                        currentUserId = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
                    }
                    var loaderUrl = getLoaderUrl();
                    debug("Saving User Triats for user "+currentUserId);
                    $.post(loaderUrl, {
                            authorizableId : currentUserId,
                            selectedTraits : JSON.stringify(userTraits)
                        }, function(data, textStatus, jqXHR) {
                            if ( jqXHR.status !== 200 ) {
                                error("Unable to update saved traits for user, "+textStatus+" please investigate, POST was to "+loaderUrl+" "+errorThrown);
                            }
                        }, "json").fail(function(jqXHR, textStatus, errorThrown) {
                            error("Unable to update saved traits for user, "+textStatus+" please investigate, POST was to "+loaderUrl+" "+errorThrown);
                        });
                }

                /**
                 * Change the context based on a profile change. Resets the
                 * cookie and latitude and longitude.
                 */
                function changeProfile() {
                    var userId = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
                    debug("User id "+userId+" currentUser id "+currentUserId);
                    if (currentUserId !== userId) {
                        // set while performing load to avoid race.
                        currentUserId = userId;
                        userTraits = {};
                        debug("Perforing Load User traits");
                        loadUserTraits(userId, function() {
                            needsUpdate = true;
                            newStore.fireEvent("update");
                            resolveSegments();
                            debug("Done resolving segments after change of profile.");
                        });
                    }
                }

                /**
                 * Allow the user to edit the aviable traits (or mockup the operation).
                 * @param callback a function(availableTraits) where avaialbeTraits is a map of trait objects keyed by id.
                 */
                function selectAvailableTraits(callback) {
                    if (mockup) {
                        availableTraits = {
                                73801 : {
                                    title : "Trait 73801"
                                },
                                73802 : {
                                    title : "Trait 73801"
                                },
                                73803 : {
                                    title : "Trait 73801"
                                },
                                73804 : {
                                    title : "Trait 73801"
                                }
                        };
                        callback();
                    } else {
                        if ( false ) {
                            // enable this if you want the add traits dialog to appear
                            // when there are no traits.
                            // this could be per instance.
                            var dialog = CQ_Analytics.AAM.LookupDialog({
                                traitLookupUrl : traitLookupUrl
                            });
                            dialog.show(availableTraits, function(newtraits) {
                                    dialog.hide();
                                    availableTraits = newtraits;
                                    saveAvailableTraits(callback);
                            });
                        } else {
                            availableTraits = {};
                            callback();
                        }
                    }

                }
                /**
                 * Save the to the config as a json encoded block. No need to have this as separate values.
                 * @param callback function(availableTraits) called once save is posted (async).
                 */
                function saveAvailableTraits(callback) {
                    if ( availableTraitsUrl ) {
                        $.post(availableTraitsUrl, {
                            availableTraits : JSON.stringify(availableTraits)
                        }, function() {
                            debug("Saved Traits");
                        }).error(function(){
                            debug("Failed to save trats");
                        });
                    } else {
                        debug("Not saving traits config, no url to save to.");
                    }
                    callback();
                }

                /**
                 * Load available traits and call the callback.
                 * @param callback function(availableTraits)
                 */
                function loadTraitsList(callback) {
                    // set available traits to nothing while we load.
                    // this prevents a race when multiple events are triggering load.
                    availableTraits = {};
                    // load from the config url.
                    if ( availableTraitsUrl ) {
                        debug("Loading traits from "+availableTraitsUrl);

                        $.getJSON(availableTraitsUrl + ".json", function(response) {
                            if ( response.availableTraits ) {
                                try {
                                    // save what was loaded and callback.
                                    availableTraits = $.parseJSON(response.availableTraits);
                                    callback();
                                } catch (e) {
                                    error(" Avaialable Traits were invalid, error, reloading "+e.stack);
                                    // loading failed, give the user an option to try and load
                                    selectAvailableTraits(callback);
                                }
                            } else {
                                error(" No traits found  "+JSON.stringify(response));
                                selectAvailableTraits(callback);
                            }
                        }).error(function() {
                            error("Error Loading traits. ");
                            // loading failed, give the user an option to try and load
                            selectAvailableTraits(callback);
                        });
                    } else {
                        error(" No traits url  ");

                        // loading failed, give the user an option to try and load
                        selectAvailableTraits(callback);
                    }
                }


                /**
                 * converts the current set of enabled traits into a set of segments and updates the segment manager.
                 */
                function resolveSegments() {
                    var traitIds = [];
                    debug("Resolving segments for user traits ");



                    $.each(userTraits, function(key, value){
                        if (value && availableTraits[key]) {
                            traitIds.push(key);
                        }
                    });
                    if ( traitIds.length === 0 ) {
                        traitIds.push(-1);
                    }
                    var signals = {
                          sid : traitIds
                    };

                    // signal the audience manager with new trait ids
                    audienceManager.invoke(signals);
                }

                /**
                 * render the controls
                 * @param store the store being rendered.
                 * @param divId. The ID of the div where the store should be rendered.
                 * @returns void
                 */
                function internalRenderer(store, divId) {
                    if (needsUpdate) {
                        debug("Performing internal render");
                        needsUpdate = false;
                        var traitDiv = $("#" + divId);
                        traitDiv.children().remove();
                        debug("Starting to render Traits "+JSON.stringify(availableTraits));
                        $.each(availableTraits, function(key, value) {
                            if (value) {
                                debug("Info " + JSON.stringify(value));
                                var checked = (userTraits[key]);
                                traitDiv.prepend(chooserTemplate(key, value.title, checked?'checked':'' ));
                            }
                        });
                        // attach an event handler to all the traits to
                        // manage
                        // selection and deselection.
                        $("label", traitDiv).each(function() {
                            debug("Binding to "+this.id);
                        });
                        $("label", traitDiv).click(function() {
                            var key = $(this).data("key");
                            debug("Clicked "+key+" current state "+$(this).hasClass("checked"));
                            if ($(this).hasClass("checked")) {
                                $(this).removeClass('checked');
                                delete userTraits[key];
                                debug("Trait " + key + " Off ");
                            } else {
                                $(this).addClass('checked');
                                userTraits[key] = true;
                                debug("Trait " + key + " On ");
                            }
                            saveUserTraits();
                            resolveSegments();
                            // IE7 will bubble event and cause double click.
                            return false;
                        });
                        debug("Done render Traits ");
                    }
                }


                // bind the public methods to new store.
                /**
                 * Render function.
                 */
                newStore.renderer = internalRenderer;

                /**
                 * Save new Set of traits
                 * @param newAvailableTraits new map of available traits keyed by id.
                 * @public
                 */
                newStore.setAvailableTraits = function(newAvailableTraits) {
                    availableTraits = newAvailableTraits;
                    debug("Saving Traits "+JSON.stringify(availableTraits));
                    saveAvailableTraits(function(){
                        needsUpdate = true;
                        newStore.fireEvent("update");
                        debug("Fired update");
                    });
                };

                /**
                 * Load traits
                 * @param a callback to call when the traits are loaded.
                 * @public
                 */
                newStore.getAvailableTraits = function(callback) {
                    callback(availableTraits);
                };



                // Load the traits and once loaded register handlers and register the store.
                loadTraitsList(function() {
                    // don't register the store until we have loaded available traits.
                    // or else rendering will happen before ready.
                    debug("Available traits loaded "+JSON.stringify(availableTraits)+" registering this store");
                    CQ_Analytics.ClientContextUtils.onStoreRegistered("profile", function(profileStore) {
                        changeProfile();
                        profileStore.addListener("update", changeProfile);
                        debug("Registered this agains profile store, and loaded current");
                    });
                    CQ_Analytics.CCM.register(newStore);
                });
                // make certain the profile is loaded.
                debug("New Trait Manager created " + newStore);

                return newStore;

            } // end of constructor.


            // create a new Traits Manager using the constructor.
            return newAAMTraitsMgr(config);

        };


