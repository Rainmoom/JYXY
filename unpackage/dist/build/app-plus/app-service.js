var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8ca43ec6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62e4aeb8'])
Z([3,'_view 62e4aeb8 m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'handleProxy'])
Z([3,'#666666'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'62e4aeb8-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'62e4aeb8-1'])
Z([3,'8ca43ec6'])
Z([3,'20'])
Z([3,'clear'])
Z([[7],[3,'displayable_']])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'62e4aeb8-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'62e4aeb8-2'])
Z(z[8])
Z(z[9])
Z([3,'eye'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1a97bd13'])
Z([[7],[3,'show']])
Z([[2,'==='],[[7],[3,'loadingType']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3ad2884e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'18e8edc6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'18e8edc6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'497962f6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'497962f6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7d57575e'])
Z([3,'handleProxy'])
Z([3,'_form 7d57575e'])
Z([[7],[3,'$k']])
Z([1,'7d57575e-3'])
Z(z[1])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7d57575e-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[3])
Z([1,'7d57575e-2'])
Z([3,'62e4aeb8'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7d57575e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3cdbe3dd'])
Z([[7],[3,'attrIsShow']])
Z(z[1])
Z([3,'handleProxy'])
Z([3,'_form 3cdbe3dd grace-form'])
Z([[7],[3,'$k']])
Z([1,'3cdbe3dd-9'])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3cdbe3dd-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([1,'3cdbe3dd-8'])
Z([3,'3ad2884e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3cdbe3dd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'668dc91d'])
Z([3,'handleProxy'])
Z([3,'_form 668dc91d'])
Z([[7],[3,'$k']])
Z([1,'668dc91d-4'])
Z([3,'_view 668dc91d inputView'])
Z(z[1])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'668dc91d-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[3])
Z([1,'668dc91d-2'])
Z([3,'62e4aeb8'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password1']])
Z(z[1])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'668dc91d-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[3])
Z([1,'668dc91d-3'])
Z(z[10])
Z([3,'请再次输入密码'])
Z(z[12])
Z([[7],[3,'password2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'668dc91d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3062bc86'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3062bc86'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62ece513'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'62ece513-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a97bd13'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'62ece513'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62ece514'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'62ece514'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62ece515'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'62ece515'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62ece516'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'62ece516'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62ece517'])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'orderTypeLise']])
Z([3,'row.name'])
Z([3,'handleProxy'])
Z([3,'_view 62ece517 label'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'62ece517-2-'],[[7],[3,'index']]])
Z([3,'hover'])
Z([[6],[[7],[3,'row']],[3,'name']])
Z([[2,'>'],[[6],[[7],[3,'row']],[3,'badge']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'62ece517'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cdb3853a'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'cdb3853a-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a97bd13'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'cdb3853a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/graceUI/components/graceLoading.vue.wxml','/graceUI/components/graceNumberBox.vue.wxml','/components/m-input.vue.wxml','/components/m-icon/m-icon.vue.wxml','./components/m-icon/m-icon.vue.wxml','./components/m-input.vue.wxml','./graceUI/components/graceLoading.vue.wxml','./graceUI/components/graceNumberBox.vue.wxml','./pages/chaizhai/chaizhai.vue.wxml','./pages/chaizhai/chaizhai.wxml','./chaizhai.vue.wxml','./pages/checkId/checkId.vue.wxml','./pages/checkId/checkId.wxml','./checkId.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/product/product.vue.wxml','./pages/product/product.wxml','./product.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','./register.vue.wxml','./pages/serach/serach.vue.wxml','./pages/serach/serach.wxml','./serach.vue.wxml','./pages/tabbar/tabbar0.vue.wxml','./pages/tabbar/tabbar0.wxml','./tabbar0.vue.wxml','./pages/tabbar/tabbar1.vue.wxml','./pages/tabbar/tabbar1.wxml','./tabbar1.vue.wxml','./pages/tabbar/tabbar2.vue.wxml','./pages/tabbar/tabbar2.wxml','./tabbar2.vue.wxml','./pages/tabbar/tabbar3.vue.wxml','./pages/tabbar/tabbar3.wxml','./tabbar3.vue.wxml','./pages/tabbar/tabbar4.vue.wxml','./pages/tabbar/tabbar4.wxml','./tabbar4.vue.wxml','./pages/waterfall/waterfall.vue.wxml','./pages/waterfall/waterfall.wxml','./waterfall.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4]],ic:[]}
d_[x[5]]={}
d_[x[5]]["8ca43ec6"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[5]+':8ca43ec6'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-icon/m-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[5]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["62e4aeb8"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[6]+':62e4aeb8'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-input.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./components/m-input.vue.wxml:view:1:78")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:1:427")
var fE=_v()
_(xC,fE)
cs.push("./components/m-input.vue.wxml:template:1:521")
var cF=_oz(z,8,e,s,gg)
var hG=_gd(x[6],cF,e_,d_)
if(hG){
var oH=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[6],1,706)
cs.pop()
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:1:736")
var cI=_v()
_(oD,cI)
cs.push("./components/m-input.vue.wxml:template:1:803")
var oJ=_oz(z,16,e,s,gg)
var lK=_gd(x[6],oJ,e_,d_)
if(lK){
var aL=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[6],1,970)
cs.pop()
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[6]].i
_ai(fE,x[4],e_,x[6],1,1)
fE.pop()
return r
}
e_[x[6]]={f:m2,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[7]]={}
d_[x[7]]["1a97bd13"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[7]+':1a97bd13'
r.wxVkey=b
gg.f=$gdc(f_["./graceUI/components/graceLoading.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./graceUI/components/graceLoading.vue.wxml:view:1:27")
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./graceUI/components/graceLoading.vue.wxml:view:1:102")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[7]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["3ad2884e"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[8]+':3ad2884e'
r.wxVkey=b
gg.f=$gdc(f_["./graceUI/components/graceNumberBox.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[8]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["18e8edc6"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[9]+':18e8edc6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chaizhai/chaizhai.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oJ=e_[x[10]].i
_ai(oJ,x[11],e_,x[10],1,1)
var lK=_v()
_(r,lK)
cs.push("./pages/chaizhai/chaizhai.wxml:template:2:6")
var aL=_oz(z,1,e,s,gg)
var tM=_gd(x[10],aL,e_,d_)
if(tM){
var eN=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[10],2,18)
cs.pop()
oJ.pop()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["497962f6"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[12]+':497962f6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/checkId/checkId.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xQ=e_[x[13]].i
_ai(xQ,x[14],e_,x[13],1,1)
var oR=_v()
_(r,oR)
cs.push("./pages/checkId/checkId.wxml:template:2:6")
var fS=_oz(z,1,e,s,gg)
var cT=_gd(x[13],fS,e_,d_)
if(cT){
var hU=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[13],2,18)
cs.pop()
xQ.pop()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["7d57575e"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[15]+':7d57575e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./pages/login/login.vue.wxml:form:1:207")
var oB=_mz(z,'form',['bindsubmit',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/login/login.vue.wxml:template:1:1048")
var oD=_oz(z,9,e,s,gg)
var fE=_gd(x[15],oD,e_,d_)
if(fE){
var cF=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[15],1,1277)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cW=e_[x[15]].i
_ai(cW,x[3],e_,x[15],1,1)
cW.pop()
return r
}
e_[x[15]]={f:m9,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[16]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lY=e_[x[16]].i
_ai(lY,x[17],e_,x[16],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/login/login.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[16],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[16],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[16]]={f:m10,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["3cdbe3dd"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[18]+':3cdbe3dd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/product.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/product/product.vue.wxml:view:1:3568")
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/product/product.vue.wxml:view:1:3650")
cs.push("./pages/product/product.vue.wxml:form:1:3721")
var oD=_mz(z,'form',['bindsubmit',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/product/product.vue.wxml:template:1:5774")
var cF=_oz(z,11,e,s,gg)
var hG=_gd(x[18],cF,e_,d_)
if(hG){
var oH=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[18],1,5923)
cs.pop()
cs.pop()
_(xC,oD)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var x5=e_[x[18]].i
_ai(x5,x[2],e_,x[18],1,1)
x5.pop()
return r
}
e_[x[18]]={f:m11,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[19]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var f7=e_[x[19]].i
_ai(f7,x[20],e_,x[19],1,1)
var c8=_v()
_(r,c8)
cs.push("./pages/product/product.wxml:template:2:6")
var h9=_oz(z,1,e,s,gg)
var o0=_gd(x[19],h9,e_,d_)
if(o0){
var cAB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c8.wxXCkey=3
o0(cAB,cAB,c8,gg)
gg.f=cur_globalf
}
else _w(h9,x[19],2,18)
cs.pop()
f7.pop()
return r
}
e_[x[19]]={f:m12,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[21]]={}
d_[x[21]]["668dc91d"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[21]+':668dc91d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
cs.push("./pages/register/register.vue.wxml:form:1:207")
var oB=_mz(z,'form',['bindsubmit',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:314")
var xC=_n('view')
_rz(z,xC,'class',5,e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/register/register.vue.wxml:template:1:1048")
var fE=_oz(z,10,e,s,gg)
var cF=_gd(x[21],fE,e_,d_)
if(cF){
var hG=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[21],1,1277)
cs.pop()
var oH=_v()
_(xC,oH)
cs.push("./pages/register/register.vue.wxml:template:1:1496")
var cI=_oz(z,18,e,s,gg)
var oJ=_gd(x[21],cI,e_,d_)
if(oJ){
var lK=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[21],1,1731)
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lCB=e_[x[21]].i
_ai(lCB,x[3],e_,x[21],1,1)
lCB.pop()
return r
}
e_[x[21]]={f:m13,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[22]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tEB=e_[x[22]].i
_ai(tEB,x[23],e_,x[22],1,1)
var eFB=_v()
_(r,eFB)
cs.push("./pages/register/register.wxml:template:2:6")
var bGB=_oz(z,1,e,s,gg)
var oHB=_gd(x[22],bGB,e_,d_)
if(oHB){
var xIB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[22],2,18)
cs.pop()
tEB.pop()
return r
}
e_[x[22]]={f:m14,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
d_[x[24]]["3062bc86"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[24]+':3062bc86'
r.wxVkey=b
gg.f=$gdc(f_["./pages/serach/serach.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[24]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cLB=e_[x[25]].i
_ai(cLB,x[26],e_,x[25],1,1)
var hMB=_v()
_(r,hMB)
cs.push("./pages/serach/serach.wxml:template:2:6")
var oNB=_oz(z,1,e,s,gg)
var cOB=_gd(x[25],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[25],2,18)
cs.pop()
cLB.pop()
return r
}
e_[x[25]]={f:m16,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["62ece513"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[27]+':62ece513'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/tabbar0.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabbar/tabbar0.vue.wxml:template:1:6266")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[27],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[27],1,6337)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var aRB=e_[x[27]].i
_ai(aRB,x[1],e_,x[27],1,1)
aRB.pop()
return r
}
e_[x[27]]={f:m17,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[28]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var eTB=e_[x[28]].i
_ai(eTB,x[29],e_,x[28],1,1)
var bUB=_v()
_(r,bUB)
cs.push("./pages/tabbar/tabbar0.wxml:template:2:6")
var oVB=_oz(z,1,e,s,gg)
var xWB=_gd(x[28],oVB,e_,d_)
if(xWB){
var oXB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[28],2,18)
cs.pop()
eTB.pop()
return r
}
e_[x[28]]={f:m18,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["62ece514"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[30]+':62ece514'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/tabbar1.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[30]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var h1B=e_[x[31]].i
_ai(h1B,x[32],e_,x[31],1,1)
var o2B=_v()
_(r,o2B)
cs.push("./pages/tabbar/tabbar1.wxml:template:2:6")
var c3B=_oz(z,1,e,s,gg)
var o4B=_gd(x[31],c3B,e_,d_)
if(o4B){
var l5B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[31],2,18)
cs.pop()
h1B.pop()
return r
}
e_[x[31]]={f:m20,j:[],i:[],ti:[x[32]],ic:[]}
d_[x[33]]={}
d_[x[33]]["62ece515"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[33]+':62ece515'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/tabbar2.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[33]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var e8B=e_[x[34]].i
_ai(e8B,x[35],e_,x[34],1,1)
var b9B=_v()
_(r,b9B)
cs.push("./pages/tabbar/tabbar2.wxml:template:2:6")
var o0B=_oz(z,1,e,s,gg)
var xAC=_gd(x[34],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[34],2,18)
cs.pop()
e8B.pop()
return r
}
e_[x[34]]={f:m22,j:[],i:[],ti:[x[35]],ic:[]}
d_[x[36]]={}
d_[x[36]]["62ece516"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[36]+':62ece516'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/tabbar3.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[36]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var hEC=e_[x[37]].i
_ai(hEC,x[38],e_,x[37],1,1)
var oFC=_v()
_(r,oFC)
cs.push("./pages/tabbar/tabbar3.wxml:template:2:6")
var cGC=_oz(z,1,e,s,gg)
var oHC=_gd(x[37],cGC,e_,d_)
if(oHC){
var lIC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oFC.wxXCkey=3
oHC(lIC,lIC,oFC,gg)
gg.f=cur_globalf
}
else _w(cGC,x[37],2,18)
cs.pop()
hEC.pop()
return r
}
e_[x[37]]={f:m24,j:[],i:[],ti:[x[38]],ic:[]}
d_[x[39]]={}
d_[x[39]]["62ece517"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[39]+':62ece517'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/tabbar4.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[39]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabbar/tabbar4.vue.wxml:view:1:1183")
var xC=function(fE,oD,cF,gg){
cs.push("./pages/tabbar/tabbar4.vue.wxml:view:1:1183")
var oH=_mz(z,'view',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3,'hoverClass',4,'key',5],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,11,fE,oD,gg)){cI.wxVkey=1
cs.push("./pages/tabbar/tabbar4.vue.wxml:view:1:1457")
cs.pop()
}
cI.wxXCkey=1
cs.pop()
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'row','index','row.name')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[39]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var eLC=e_[x[40]].i
_ai(eLC,x[41],e_,x[40],1,1)
var bMC=_v()
_(r,bMC)
cs.push("./pages/tabbar/tabbar4.wxml:template:2:6")
var oNC=_oz(z,1,e,s,gg)
var xOC=_gd(x[40],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[40],2,18)
cs.pop()
eLC.pop()
return r
}
e_[x[40]]={f:m26,j:[],i:[],ti:[x[41]],ic:[]}
d_[x[42]]={}
d_[x[42]]["cdb3853a"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[42]+':cdb3853a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/waterfall/waterfall.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[42]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/waterfall/waterfall.vue.wxml:template:1:1155")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[42],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[42],1,1226)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var cRC=e_[x[42]].i
_ai(cRC,x[1],e_,x[42],1,1)
cRC.pop()
return r
}
e_[x[42]]={f:m27,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[43]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var oTC=e_[x[43]].i
_ai(oTC,x[44],e_,x[43],1,1)
var cUC=_v()
_(r,cUC)
cs.push("./pages/waterfall/waterfall.wxml:template:2:6")
var oVC=_oz(z,1,e,s,gg)
var lWC=_gd(x[43],oVC,e_,d_)
if(lWC){
var aXC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cUC.wxXCkey=3
lWC(aXC,aXC,cUC,gg)
gg.f=cur_globalf
}
else _w(oVC,x[43],2,18)
cs.pop()
oTC.pop()
return r
}
e_[x[43]]={f:m28,j:[],i:[],ti:[x[44]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabbar/tabbar0","pages/tabbar/tabbar3","pages/product/product","pages/waterfall/waterfall","pages/tabbar/tabbar1","pages/serach/serach","pages/chaizhai/chaizhai","pages/checkId/checkId","pages/register/register","pages/login/login","pages/tabbar/tabbar2","pages/tabbar/tabbar4"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"usingComponents":{},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabbar/tabbar0","text":"商城","iconPath":"static/img/maichu.png","selectedIconPath":"static/img/maichuHL.png"},{"pagePath":"pages/tabbar/tabbar1","text":"农场","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/tabbar/tabbar3","text":"体验店","iconPath":"static/img/liaotian.png","selectedIconPath":"static/img/liaotianHL.png"},{"pagePath":"pages/tabbar/tabbar4","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"记忆小院","compilerVersion":"1.9.4"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/chaizhai/chaizhai.json']={"usingComponents":{},"navigationBarTitleText":"采摘园"};
__wxAppCode__['pages/chaizhai/chaizhai.wxml']=$gwx('./pages/chaizhai/chaizhai.wxml');

__wxAppCode__['pages/checkId/checkId.json']={"usingComponents":{},"navigationBarTitleText":"用户身份"};
__wxAppCode__['pages/checkId/checkId.wxml']=$gwx('./pages/checkId/checkId.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{},"navigationBarTitleText":"登录"};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/product/product.json']={"usingComponents":{},"navigationBarTitleText":"商品"};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{},"navigationBarTitleText":"注册"};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/serach/serach.json']={"usingComponents":{},"navigationBarTitleText":"搜索结果"};
__wxAppCode__['pages/serach/serach.wxml']=$gwx('./pages/serach/serach.wxml');

__wxAppCode__['pages/tabbar/tabbar0.json']={"usingComponents":{},"titleNView":false};
__wxAppCode__['pages/tabbar/tabbar0.wxml']=$gwx('./pages/tabbar/tabbar0.wxml');

__wxAppCode__['pages/tabbar/tabbar1.json']={"usingComponents":{},"navigationBarTitleText":"农场"};
__wxAppCode__['pages/tabbar/tabbar1.wxml']=$gwx('./pages/tabbar/tabbar1.wxml');

__wxAppCode__['pages/tabbar/tabbar2.json']={"usingComponents":{},"navigationBarTitleText":"发布"};
__wxAppCode__['pages/tabbar/tabbar2.wxml']=$gwx('./pages/tabbar/tabbar2.wxml');

__wxAppCode__['pages/tabbar/tabbar3.json']={"usingComponents":{},"navigationBarTitleText":"体验店"};
__wxAppCode__['pages/tabbar/tabbar3.wxml']=$gwx('./pages/tabbar/tabbar3.wxml');

__wxAppCode__['pages/tabbar/tabbar4.json']={"usingComponents":{},"navigationBarTitleText":"我的"};
__wxAppCode__['pages/tabbar/tabbar4.wxml']=$gwx('./pages/tabbar/tabbar4.wxml');

__wxAppCode__['pages/waterfall/waterfall.json']={"usingComponents":{},"navigationBarTitleText":"商品"};
__wxAppCode__['pages/waterfall/waterfall.wxml']=$gwx('./pages/waterfall/waterfall.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"23f5":function(n,e,t){"use strict";t.r(e);var u=t("e719");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("a176");var r,a,c=t("2877"),f=Object(c["a"])(u["default"],r,a,!1,null,null,null);e["default"]=f.exports},7343:function(n,e,t){"use strict";t("64b0");var u=r(t("f3d3")),o=r(t("23f5"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},u=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),u.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}u.default.config.productionTip=!1,o.default.mpType="app";var f=new u.default(a({},o.default));f.$mount()},a176:function(n,e,t){"use strict";var u=t("e942"),o=t.n(u);o.a},a97d:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={onLaunch:function(){},onShow:function(){},onHide:function(){}};e.default=u},e719:function(n,e,t){"use strict";t.r(e);var u=t("a97d"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},e942:function(n,e,t){}},[["7343","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"096b":function(t,e,n){"use strict";n.r(e);var r=n("a261"),o=n("972a");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("2a5b");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"166c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-icon",class:["m-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"8ca43ec6-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},1943:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var t=Number(this.size);return t=isNaN(t)?24:t,"".concat(t,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2a5b":function(t,e,n){"use strict";var r=n("eb1f"),o=n.n(r);o.a},4538:function(t,e,n){"use strict";var r=n("70fe"),o=n.n(r);o.a},"4ca5":function(t,e,n){"use strict";n.r(e);var r=n("1943"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"64b0":function(t,e,n){},"65c7":function(t,e,n){"use strict";n.r(e);var r=n("166c"),o=n("4ca5");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("4538");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=gt,e.createPage=wt,e.createComponent=At,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function f(t){return"[object Object]"===a.call(t)}function l(t,e){return s.call(t,e)}function p(){}function d(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var h=/-(\w)/g,v=d(function(t){return t.replace(h,function(t,e){return e?e.toUpperCase():""})}),y=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,_=/^create|Manager$/,m=/^on/;function g(t){return _.test(t)}function b(t){return y.test(t)}function $(t){return m.test(t)}function w(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function x(t){return!(g(t)||b(t)||$(t))}function A(t,e){return x(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(r)):w(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var O=1e-4,k=750,C=!1,S=0,P=0;function j(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;S=r,P=n,C="ios"===e}function E(t,e){if(0===S&&j(),t=Number(t),0===t)return 0;var n=t/k*(e||S);return n<0&&(n=-n),n=Math.floor(n+O),0===n?1!==P&&C?.5:1:t<0?-n:n}var T={},I=["success","fail","cancel","complete"];function N(t,e,n){return function(r){return e(D(t,r,n))}}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(e)){var i=!0===o?e:{};for(var a in c(n)&&(n=n(e,i)||{}),e)if(l(n,a)){var s=n[a];c(s)&&(s=s(e[a],e,i)),s?u(s)?i[s]=e[a]:f(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==I.indexOf(a)?i[a]=N(t,e[a],r):o||(i[a]=e[a]);return i}return c(e)&&(e=N(t,e,r)),e}function D(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(T.returnValue)&&(e=T.returnValue(t,e)),M(t,e,n,{},r)}function R(t,e){if(l(T,t)){var n=T[t];return n?function(e,r){var o=n;c(n)&&(o=n(e)),e=M(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return b(t)?D(t,i,o.returnValue,g(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var B=Object.create(null),V=["subscribePush","unsubscribePush","onPush","offPush","share"];function U(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(o),c(r)&&r(o)}}function L(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}V.forEach(function(t){B[t]=U(t)});var F=Object.freeze({requireNativePlugin:L}),W=Page,z=Component,H=/:/g,J=d(function(t){return v(t.replace(H,"-"))});function q(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[J(n)].concat(o))}}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="onLoad",n=t[e];return t[e]=n?function(){q(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){q(this)},W(t)};var K=Behavior({created:function(){q(this)}});Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.behaviors||(t.behaviors=[])).unshift(K),z(t)};var G=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function X(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function Z(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function Q(t){Y(t)}function Y(t){t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))}}function tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){l(n,e)&&(t[e]=n[e])})}function et(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function nt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return f(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||l(n,t)||(n[t]=r[t])}),n}var rt=[String,Number,Boolean,Object,Array,null];function ot(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function it(t){var e=t["behaviors"],n=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var i=[];return Array.isArray(e)&&e.forEach(function(t){i.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),f(n)&&n.props&&i.push(Behavior({properties:st(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){f(t)&&t.props&&i.push(Behavior({properties:st(t.props,!0)}))}),i}function at(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function st(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:ot(t)}}):f(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(f(o)){var i=o["default"];c(i)&&(i=i()),o.type=at(e,o.type,i,n),r[e]={type:-1!==rt.indexOf(o.type)?o.type:null,value:i,observer:ot(e)}}else{var a=at(e,o,null,n);r[e]={type:-1!==rt.indexOf(a)?a:null,observer:ot(e)}}}),r}function ct(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=p,t.preventDefault=p,t.target=t.target||{},l(t,"detail")||(t.detail={}),f(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function ut(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):f(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function ft(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=ut(t,e)}),r}function lt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=ft(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(lt(t)):"string"===typeof t&&l(s,t)?c.push(s[t]):c.push(t)}),c}var dt="~",ht="^";function vt(t){var e=this;t=ct(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===ht;o=a?o.slice(1):o;var s=o.charAt(0)===dt;o=s?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!c(o))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,pt(e.$vm,t,n[1],n[2],a,r))}})})}function yt(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}var _t=["onHide","onError","onPageNotFound","onUniNViewMessage"];function mt(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function gt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(yt(this),tt(this,G)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){mt.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){mt.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},et(e,_t),App(e),t}var bt=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $t(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function wt(t){var e;t=t.default||t,c(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),lifetimes:{attached:function(){$t.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){$t.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:vt,__l:Z}};return et(n.methods,bt),Q(n),Component(n)}function xt(t){if(!this.$vm){var e={mpType:"component",mpInstance:this,propsData:this.properties};this.$vm=new t(e);var n=this.properties.vueSlots;if(Array.isArray(n)&&n.length){var r=Object.create(null);n.forEach(function(t){r[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=r}this.$vm.$mount()}}function At(t){t=t.default||t;var e=it(t),n=st(t.props,!1,t.__file),o=r.default.extend(t),i={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),behaviors:e,properties:n,lifetimes:{attached:function(){xt.call(this,o)},ready:function(){xt.call(this,o),X(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:vt,__l:Z}};return Y(i),Component(i)}var Ot={};"undefined"!==typeof Proxy?Ot=new Proxy({},{get:function(t,e){return"upx2px"===e?E:F[e]?A(e,F[e]):l(wx,e)||l(T,e)?A(e,R(e,wx[e])):void 0}}):(Ot.upx2px=E,Object.keys(F).forEach(function(t){Ot[t]=A(t,F[t])}),Object.keys(wx).forEach(function(t){(l(wx,t)||l(T,t))&&(Ot[t]=A(t,R(t,wx[t])))}));var kt=Ot,Ct=kt;e.default=Ct},"70fe":function(t,e,n){},"7c75":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"graceLoading",props:{loadingType:{type:Number,default:0},loadingText:{type:Array,default:function(){return["上拉加载更多","加载中...","已经加载全部数据"]}},show:{type:Boolean,default:!0}}};e.default=r},"892f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-input-view"},[n("input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword,eventid:"62e4aeb8-0"},on:{input:t.onInput,focus:t.onFocus,blur:t.onBlur}}),t.clearable_&&!t.displayable_&&t.value.length?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20",eventid:"62e4aeb8-1",mpcomid:"62e4aeb8-0"},on:{click:t.clear}})],1):t._e(),t.displayable_?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20",eventid:"62e4aeb8-2",mpcomid:"62e4aeb8-1"},on:{click:t.display}})],1):t._e()])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"951a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("65c7"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{mIcon:r.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick(function(){t.isFocus=!1})},onInput:function(t){this.$emit("input",t.target.value)}}};e.default=i},"972a":function(t,e,n){"use strict";n.r(e);var r=n("7c75"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"9c64":function(t,e,n){"use strict";var r=n("fe22"),o=n.n(r);o.a},a261:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("view",{staticClass:"grace-loading grace-ellipsis"},[1===t.loadingType?n("view",{staticClass:"grace-loading-icon"}):t._e(),n("text",[t._v(t._s(t.loadingText[t.loadingType]))])]):t._e()},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d465:function(t,e,n){"use strict";n.r(e);var r=n("892f"),o=n("f28f");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9c64");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},eb1f:function(t,e,n){},f28f:function(t,e,n){"use strict";n.r(e);var r=n("951a"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,l=c.length;f<l&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function l(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function b(t,e){return g.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=$(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function E(t,e,n){}var T=function(t,e,n){return!1},I=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function M(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:E,parsePlatformTagName:I,mustUseProp:T,_lifecycleHooks:V},L=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=/[^\w.$]/;function H(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=E;function q(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var K,G="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===K&&(K=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),K},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(E)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function lt(t){ut.target&&ft.push(ut.target),ut.target=t}function pt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},_t=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=G?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof _t?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new _t(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}_t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},_t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var Ot=U.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?l(r)&&l(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Pt(t,e){var n=Object.create(t||null);return e?P(n,e):n}Ot.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},V.forEach(function(t){Ot[t]=St}),B.forEach(function(t){Ot[t+"s"]=Pt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in P(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return P(n,t),P(n,e),n},Ot.provide=Ct;var jt=function(t,e){return void 0===e?t:e};function Et(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(l(e))for(var a in e)r=e[a],o=x(a),i[o]=l(r)?r:{type:r};t.props=i}}function Tt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function It(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),Et(e),Tt(e),It(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=Ot[r]||jt;s[r]=o(t[r],e[r],n,r)}return s}function Mt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Dt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Vt(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Vt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Rt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Rt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ut=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Lt={child:{}};Lt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,Lt);var Ft=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ut(void 0,void 0,void 0,String(t))}function zt(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Ht(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=zt(t[r]);return n}var Jt,qt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Kt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Gt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Kt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ft();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=D(function(n){t.resolved=ne(n,e),s||c()}),l=D(function(e){i(t.errorComp)&&(t.error=!0,c())}),p=t(f,l);return u(p)&&("function"===typeof p.then?o(t.resolved)&&p.then(f,l):i(p.component)&&"function"===typeof p.component.then&&(p.component.then(f,l),i(p.error)&&(t.errorComp=ne(p.error,e)),i(p.loading)&&(t.loadingComp=ne(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},p.delay||200)),i(p.timeout)&&setTimeout(function(){o(t.resolved)&&l(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Gt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?S(r):r;for(var o=S(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function le(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(pe)||(n.default=r),n}function pe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function _e(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new De(t,r,E),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==L);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Dt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=le(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ce=!1,Se=0;function Pe(){Se=xe.length=Ae.length=0,Oe={},ke=Ce=!1}function je(){var t,e;for(Ce=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();Pe(),Ie(n),Ee(r),rt&&U.devtools&&rt.emit("flush")}function Ee(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Te(t){t._inactive=!1,Ae.push(t)}function Ie(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Ne(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ce){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(je))}}var Me=0,De=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Me,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=H(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};De.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),pt(),this.cleanupDeps()}return t},De.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},De.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},De.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},De.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},De.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},De.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},De.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new it;function Be(t){Re.clear(),Ve(t,Re)}function Ve(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ve(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:E,set:E};function Le(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?ze(t):bt(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Dt(i,e,n,t);$t(r,i,a),i in t||Le(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function ze(t){var e=t.$options.data;e=t._data="function"===typeof e?He(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||F(i)||Le(t,"_data",i)}bt(e,!0)}function He(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Je={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new De(t,i,E,Je),r in t||Ke(t,r,o)}}function Ke(t,e,n){"function"===typeof n?(Ue.get=Ge(e),Ue.set=E):(Ue.get=n.get?!1!==n.cache?Ge(e):n.get:E,Ue.set=n.set?n.set:E),Object.defineProperty(t,e,Ue)}function Ge(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?E:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new De(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Dt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},l=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return le(o,r)}});return l instanceof Ut&&(l.functionalContext=r,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Te(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},In(t),i(e.model)&&pn(t.options,e);var l=Xt(e,t,s);if(a(t.options.functional))return rn(t,l,e,n,r);var p=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Ut("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?ln(o,r):o}}function ln(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function pn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ft();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ft();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Mt(t.$options,"components",e))?cn(c,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&_n(a,s),a):Ft()}function _n(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&_n(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=P(P({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Mt(this.$options,"filters",t,!0)||I}function $n(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Ht(n):zt(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(l(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=le(t.$options._renderChildren,n),t.$scopedSlots=L,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function Pn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Ht(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||L,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Ft()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=N,t.prototype._i=M,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Ft,t.prototype._u=de,t.prototype._g=Cn}var jn=0;function En(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?Tn(e,t):e.$options=Nt(In(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),we(e,"beforeCreate"),en(e),Fe(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Tn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function In(t){var e=t.options;if(t.super){var n=In(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&P(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Mn(n[i],r[i],o[i]));return e}function Mn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Dn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&Ln(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)Le(t.prototype,"_props",n)}function Ln(t){var e=t.options.computed;for(var n in e)Ke(t.prototype,n,e[n])}function Fn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}En(Dn),Ye(Dn),fe(Dn),ye(Dn),Pn(Dn);var Wn=[String,RegExp,Array];function zn(t){return t&&(t.Ctor.options.name||t.tag)}function Hn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=zn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Kn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return Hn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!Hn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=zn(e);if(n&&(this.include&&!Hn(this.include,n)||this.exclude&&Hn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Gn={KeepAlive:Kn};function Xn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:P,mergeOptions:Nt,defineReactive:$t},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,Gn),Rn(t),Bn(t),Vn(t),Fn(t)}Xn(Dn),Object.defineProperty(Dn.prototype,"$isServer",{get:nt}),Object.defineProperty(Dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Dn.version="2.4.1",Dn.mpvueVersion="1.0.12";var Zn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function lr(t,e){}function pr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var _r=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:lr,parentNode:pr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new Ut("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new Ut(u.tagName(t).toLowerCase(),{},[],void 0,t)}function l(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),g(t,c,e),i(s)&&$(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&_(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(gr(t),e.push(t))}function _(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):p(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=l(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function C(t,e,n,r,a){var s,c,f,l,p=0,h=0,v=e.length-1,y=e[0],_=e[v],m=n.length-1,g=n[0],b=n[m],$=!a;while(p<=v&&h<=m)o(y)?y=e[++p]:o(_)?_=e[--v]:wr(y,g)?(S(y,g,r),y=e[++p],g=n[++h]):wr(_,b)?(S(_,b,r),_=e[--v],b=n[--m]):wr(y,b)?(S(y,b,r),$&&u.insertBefore(t,y.elm,u.nextSibling(_.elm)),y=e[++p],b=n[--m]):wr(_,g)?(S(_,g,r),$&&u.insertBefore(t,_.elm,y.elm),_=e[--v],g=n[++h]):(o(s)&&(s=Ar(e,p,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,y.elm),g=n[++h]):(f=e[c],wr(f,g)?(S(f,g,r),e[c]=void 0,$&&u.insertBefore(t,f.elm,y.elm),g=n[++h]):(d(g,r,t,y.elm),g=n[++h])));p>v?(l=o(n[m+1])?null:n[m+1].elm,x(t,l,n,h,m,r)):h>m&&O(t,e,p,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?E(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;i(l)&&i(f=l.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,d=e.children;if(i(l)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=l.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(p)&&i(d)?p!==d&&C(c,p,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(p)?O(c,p,0,p.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(l)&&i(f=l.hook)&&i(f=f.postpatch)&&f(t,e)}}}function P(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=y("attrs,style,class,staticClass,staticStyle,key");function E(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,l=0;l<c.length;l++){if(!f||!E(f,c[l],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var p in s)if(!j(p)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,l){if(!o(e)){var p=!1,h=[];if(o(t))p=!0,d(e,h,c,l);else{var v=i(t.nodeType);if(!v&&wr(t,e))S(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&E(t,e,h))return P(e,h,!0),t;t=f(t)}var y=t.elm,_=u.parentNode(y);if(d(e,h,y._leaveCb?null:_,u.nextSibling(y)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(b(e))for(var g=0;g<r.create.length;++g)r.create[g](br,e.parent)}i(_)?O(_,[t],0,0):i(t.tag)&&A(t)}}return P(e,h,p),e.elm}i(t)&&A(t)}}var kr=[mr],Cr=Or({nodeOps:_r,modules:kr});function Sr(){Cr.apply(this,arguments),this.$updateDataToMP()}function Pr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Pr(t,e,r)}),o}function jr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Er(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(l(t))for(var a in t)o=t[a],i=x(a),e[i]=l(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Tr(t){var e=t.$options.properties,n=t.$options.props,r={};return Er(e,r,t),Er(n,r,t),r}function Ir(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Le(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Pr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Pr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Pr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Pr(r,"onShow",t)},onHide:function(){o.status="hide",Pr(r,"onHide")},onError:function(t){Pr(r,"onError",t)},onUniNViewMessage:function(t){Pr(r,"onUniNViewMessage",t)}});else if("component"===t)Ir(r),e.Component({properties:Tr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Pr(r,"attached")},ready:function(){o.status="ready",Pr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Pr(r,"moved")},detached:function(){o.status="detached",Pr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",jr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Pr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Pr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Pr(r,"onReady"),n()},onHide:function(){o.status="hide",Pr(r,"onHide")},onUnload:function(){o.status="unload",Pr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Pr(r,"onPullDownRefresh")},onReachBottom:function(){Pr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Pr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Pr(r,"onPageScroll",t)},onTabItemTap:function(t){Pr(r,"onTabItemTap",t)}})}}function Mr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Dr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Dr(r,e):e):e}function Rr(t){var e=Dr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Mr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Vr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var l=Date.now();s||!1!==n.leading||(s=l);var p=e-(l-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],p<=0||p>e?(clearTimeout(a),a=null,s=l,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}var Ur=Vr(function(t,e){t&&t(e)},50);function Lr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Fr(){var t=Lr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Lr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function zr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Hr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Hr(t,e,n))})}):a.forEach(function(t){r=r.concat(Hr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:E,preventDefault:E};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=zr(e,s.split(","));if(u){var f=rr[n]||[n],l=Hr(u._vnode,c,f);if(l.length){var p=Jr(t);if(1===l.length){var d=l[0](p);return d}l.forEach(function(t){return t(p)})}}}return Dn.config.mustUseProp=Yn,Dn.config.isReservedTag=Zn,Dn.config.isReservedAttr=Qn,Dn.config.getTagNamespace=tr,Dn.config.isUnknownElement=er,Dn.prototype.__patch__=Sr,Dn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return _e(n,void 0,void 0)})}return _e(this,void 0,void 0)},Dn.prototype._initMP=Nr,Dn.prototype.$updateDataToMP=Fr,Dn.prototype._initDataToMP=Wr,Dn.prototype.$handleProxyWithVue=qr,Dn})}).call(this,n("c8ba"))},fe22:function(t,e,n){},fe77:function(t,e,n){"use strict";t.exports={error:"",check:function(t,e){for(var n=0;n<e.length;n++){if(!e[n].checkType)return!0;if(!e[n].name)return!0;if(!e[n].errorMsg)return!0;if(!t[e[n].name])return this.error=e[n].errorMsg,!1;switch(e[n].checkType){case"string":var r=new RegExp(".{"+e[n].checkRule+"}");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[n].checkRule+"}$");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[n].name]))return this.error=e[n].errorMsg,!1;var o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"same":if(t[e[n].name]!=e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"notsame":if(t[e[n].name]==e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"reg":r=new RegExp(e[n].checkRule);if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"in":if(-1==e[n].checkRule.indexOf(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"notnull":if(null==t[e[n].name]||t[e[n].name].length<1)return this.error=e[n].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/tabbar/tabbar0';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar0.js';

define('pages/tabbar/tabbar0.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar0"],{"1f7b":function(t,e,i){},3194:function(t,e,i){"use strict";i.r(e);var a=i("4d7e"),n=i("f784");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("3e01");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"3e01":function(t,e,i){"use strict";var a=i("1f7b"),n=i.n(a);n.a},"4d7e":function(t,e,i){"use strict";var a=function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("view",{staticClass:"page"},[a("view",{staticClass:"navigateBar"},[e._m(0),a("view",{staticClass:"serach"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"serach-input",attrs:{"confirm-type":"search",placeholder:e.placeholder,eventid:"62ece513-0"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),a("view",{staticClass:"grace-iconfont icon-search",attrs:{eventid:"62ece513-1"},on:{tap:function(t){e.searchData()}}})]),e._m(1)]),a("view",{staticClass:"page-section-spacing"},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"3000",duration:"100",circular:"true"}},[a("swiper-item",{attrs:{mpcomid:"62ece513-0"}},[a("image",{attrs:{src:"../../static/img/banner1.jpg"}})]),a("swiper-item",{attrs:{mpcomid:"62ece513-1"}},[a("image",{attrs:{src:"../../static/img/banner2.jpg"}})])],1)],1),a("view",{staticClass:"tuijian"},[a("view",{staticClass:"title"},[e._v("农产品推荐")]),a("view",{staticClass:"list"},[a("view",{staticClass:"item",attrs:{eventid:"62ece513-2"},on:{tap:function(t){e.chaizhai()}}},[a("image",{attrs:{src:"../../static/img/caizhai.jpg"}}),a("text",[e._v("草莓")])]),e._m(2),e._m(3)])]),a("view",{staticClass:"title-view"},[a("text",{staticClass:"title-text1",class:"1"==e.check?"active":"",attrs:{eventid:"62ece513-3"},on:{tap:function(){t.check="1"}}},[e._v("购买")]),a("text",{staticClass:"title-text2",class:"2"==e.check?"active":"",attrs:{eventid:"62ece513-4"},on:{tap:function(){t.check="2"}}},[e._v("出售")])]),a("view",{directives:[{name:"show",rawName:"v-show",value:"1"==e.check,expression:"check == '1'"}],staticClass:"refreshDmo"},e._l(e.demoDate,function(t,i){return a("view",{key:i,staticClass:"item",attrs:{"data-index":t,eventid:"62ece513-5-"+i},on:{tap:e.details}},[a("view",[a("image",{staticStyle:{width:"180rpx",height:"180rpx","border-radius":"10rpx","margin-left":"10rpx"},attrs:{src:t.img}})]),a("view",{staticClass:"info",staticStyle:{width:"500rpx",display:"flex","flex-direction":"column","align-items":"flex-start"}},[a("text",{staticStyle:{"text-align":"left","font-size":"1rem","font-weight":"600"}},[a("text",{directives:[{name:"show",rawName:"v-show",value:t.youxuan,expression:"item.youxuan"}],staticStyle:{color:"#FFFFFF","background-color":"#FF0036","border-radius":"20rpx","font-size":"0.8rem",margin:"10rpx",padding:"2rpx 10rpx"}},[e._v("优选")]),e._v(e._s(t.title))]),a("view",{staticStyle:{margin:"10rpx"}},e._l(t.arr,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[a("text",{staticStyle:{"font-size":"1.3rem",color:"#FF0036",display:"block",margin:"0 10rpx"}},[e._v(e._s(t.jiage))]),a("text",{staticStyle:{color:"#FF0036",margin:"0 10rpx"}},[e._v("元/"+e._s(t.danwei))]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v("已成交"+e._s(t.chengjiao)+"单")]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v(e._s(t.zuijin)+"小时前")])]),a("view",{staticStyle:{color:"#888888",display:"flex","flex-direction":"row","justify-content":"flex-end"}},[a("text",{staticStyle:{margin:"0 15rpx","margin-left":"200rpx"}},[e._v(e._s(t.place1))]),a("text",[e._v(e._s(t.place2))])])])])})),a("view",{directives:[{name:"show",rawName:"v-show",value:"2"==e.check,expression:"check == '2'"}]},[e._m(4),a("view",{staticClass:"check"},e._l(e.checkData,function(t,i){return a("view",{key:t,attrs:{"data-index":t.index,eventid:"62ece513-6-"+i},on:{click:e.change}},[a("text",{class:t.checkitem?"checkitem2":"checkitem1"},[e._v(e._s(t.text))])])})),a("view",{staticClass:"list"},e._l(e.data,function(t,i){return a("view",{key:t,staticClass:"item",staticStyle:{"border-bottom":"5rpx rgb(230,230,230) solid"}},[a("view",{staticClass:"title",staticStyle:{"text-align":"left"}},[e._v(e._s(t.name))]),a("view",{staticStyle:{display:"flex","flex-direction":"row","margin-left":"10rpx"}},e._l(t.tips,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[e._v("期望货源地："+e._s(t.huoyuan))]),a("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[e._v("采购收货地："+e._s(t.shouhuo))]),a("view",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},[a("text",{staticStyle:{"font-size":"1.2rem",color:"#E2231A","margin-left":"20rpx","margin-bottom":"20rpx"}},[e._v(e._s(t.shuliang))]),a("text",{staticStyle:{"border-radius":"50rpx",border:"1rpx #E2231A solid","background-color":"#FFFFFF","font-size":"0.9rem",color:"#E2231A","margin-right":"50rpx","margin-bottom":"20rpx",padding:"10rpx 20rpx"}},[e._v("详谈")])])])}))]),a("graceLoading",{attrs:{loadingType:e.loadingType,mpcomid:"62ece513-2"}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"menu"},[i("image",{staticClass:"menu-icno",attrs:{src:"../../static/img/menu.png"}}),i("text",[t._v("分类")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"notice"},[i("view",{staticClass:"grace-iconfont icon-pinglun"}),i("text",[t._v("通知")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item"},[i("image",{attrs:{src:"../../static/img/zhixiao.jpg"}}),i("text",[t._v("苹果")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item"},[i("image",{attrs:{src:"../../static/img/yushou.jpg"}}),i("text",[t._v("小麦")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("text",[t._v("采购需求")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d37a:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("096b"));function n(t){return t&&t.__esModule?t:{default:t}}var s=1,r={data:function(){return{placeholder:"土豆",search:"",loadingType:0,isEnd:!1,loading:"",check:"1",demoDate:[{img:"../../static/img/pingguo1.jpg",title:"好看又好吃的烟台苹果5.0斤一箱",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"39.5",danwei:"箱",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tuji.jpg",title:"放养土鸡，绿色无公害养殖！",youxuan:!1,arr:["准时发货"],jiage:"56",danwei:"只",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou2.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/pingguo2.jpg",title:"特价包邮正宗红富士苹果",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"5.00",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/lajiao.jpg",title:"超辣干辣椒，5斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"12.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}],checkData:[{index:0,text:"辣椒",checkitem:!1},{index:1,text:"苹果",checkitem:!1},{index:2,text:"鸡",checkitem:!1},{index:3,text:"羊",checkitem:!1},{index:4,text:"土豆",checkitem:!1},{index:5,text:"草莓",checkitem:!1},{index:6,text:"柑橘",checkitem:!1},{index:7,text:"大豆",checkitem:!1}],data:[{name:"辣椒",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"辣椒",tips:["每天采购","认证"],huoyuan:"全国",shouhuo:"山东省济南市天桥区",shuliang:"1000斤"},{name:"土豆",tips:["按月采购","认证"],huoyuan:"山东省",shouhuo:"山东省济宁市邹城区",shuliang:"1200斤"},{name:"大豆",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"1000斤"},{name:"鸡",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"600只"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"4000斤"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"柑橘",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"羊",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"200头"}]}},onShow:function(){s=1,this.loading=!1,this.loadingType=0,this.isEnd=!1},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},onLoad:function(){var e=t.getStorageSync("LOGIN_FLAG");0==e.length&&t.navigateTo({url:"../login/login"})},components:{graceLoading:a.default},methods:{details:function(e){var i=e.currentTarget.dataset.index,a=JSON.stringify(i);t.navigateTo({url:"../product/product?data="+a})},searchData:function(){if(0!=this.search.length){console.log(this.search);var e={serach:this.search};e=JSON.stringify(e),t.navigateTo({url:"../serach/serach?serach="+e})}else{var i=this.placeholder;e={serach:i};e=JSON.stringify(e);plus.nativeObj.View.getViewById("icon");t.navigateTo({url:"../serach/serach?serach="+e})}},chaizhai:function(){t.navigateTo({url:"../chaizhai/chaizhai"})},loadMoreFunc:function(){if(s>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var t=this;setTimeout(function(){t.loading=!1;var e=t.getArrRandomly(t.demoDate);t.demoDate=t.demoDate.concat(e),s++,t.loadingType=0},1e3)},getArrRandomly:function(t){for(var e=t.length,i=0;i<e;i++){var a=Math.floor(Math.random()*(e-i)),n=t[a];t[a]=t[i],t[i]=n}return t},change:function(t){this.checkData.forEach(function(t){t.checkitem=!1});var e=t.currentTarget.dataset.index;this.checkData[e].checkitem=!0}}};e.default=r}).call(this,i("6e42")["default"])},f003:function(t,e,i){"use strict";i("64b0");var a=s(i("b0ce")),n=s(i("3194"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},f784:function(t,e,i){"use strict";i.r(e);var a=i("d37a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}},[["f003","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar0.js');
__wxRoute = 'pages/tabbar/tabbar3';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar3.js';

define('pages/tabbar/tabbar3.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar3"],{"014b":function(e,a,t){},"18a8":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"view"},[t("view",{staticClass:"caigou"},[t("view",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"搜索",eventid:"62ece516-0"},domProps:{value:e.value},on:{input:function(a){a.target.composing||(e.value=a.target.value)}}}),t("view",{staticClass:"grace-iconfont icon-search"})]),t("view",{staticClass:"list"},e._l(e.dianData,function(a,n){return t("view",{key:a,staticClass:"item",attrs:{"data-item":n,eventid:"62ece516-3-"+n},on:{click:e.toShangPin}},[t("view",{staticClass:"title"},[t("text",{staticClass:"name"},[e._v(e._s(a.name))]),t("text",{staticClass:"guanzu",staticStyle:{"font-size":"0.5rem",color:"#888888","margin-left":"20rpx"}},[e._v(e._s(a.guanzu)+"人关注")])]),t("view",{staticClass:"img"},[t("swiper",{staticClass:"swiper",attrs:{"indicator-dots":"false",autoplay:"true",interval:a.interval,duration:"1000",circular:"true"}},[t("swiper-item",{attrs:{mpcomid:"62ece516-0-"+n}},[t("image",{attrs:{src:"../../static/img/banner1.jpg"}})]),t("swiper-item",{attrs:{mpcomid:"62ece516-1-"+n}},[t("image",{attrs:{src:"../../static/img/banner2.jpg"}})])],1)],1),t("view",{staticClass:"buttonview"},[t("button",{attrs:{type:"primary","data-index":n,eventid:"62ece516-1-"+n},on:{tap:function(a){a.stopPropagation(),e.jiameng(a)}}},[e._v("加盟合作")]),t("button",{attrs:{type:"warn",eventid:"62ece516-2-"+n},on:{tap:function(a){a.stopPropagation(),e.guanzu()}}},[e._v("关注")])],1),t("view",{directives:[{name:"show",rawName:"v-show",value:a.jiameng,expression:"item.jiameng"}],staticClass:"jiameng"},[t("view",[e._v("电话:"+e._s(a.phone))]),t("view",[e._v("地址:"+e._s(a.place))])])])}))])])},i=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i})},"7ebd":function(e,a,t){"use strict";t("64b0");var n=s(t("b0ce")),i=s(t("efc8"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))},c2c4:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{check:"1",dianData:[{name:"体验店1",guanzu:2e3,image:[],interval:8e3,phone:"15552123897",place:"山东省聊城市东昌府区",jiameng:!1},{name:"体验店2",guanzu:1200,image:[],interval:5e3,phone:"17852261511",place:"山东省济南市",jiameng:!1},{name:"体验店3",guanzu:800,image:[],interval:6e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1},{name:"体验店4",guanzu:800,image:[],interval:9e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1},{name:"体验店5",guanzu:800,image:[],interval:4e3,phone:"1506970825",place:"山东省青岛市"},{name:"体验店6",guanzu:800,image:[],interval:7e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1}]}},methods:{jiameng:function(e){var a=e.currentTarget.dataset.index;this.dianData[a].jiameng=!this.dianData[a].jiameng},guanzu:function(){e.showToast({title:"关注成功"})},toShangPin:function(a){console.log(a);var t=a.currentTarget.dataset.item,n=JSON.stringify(this.dianData[t]);e.navigateTo({url:"../waterfall/waterfall?data="+n})}}};a.default=t}).call(this,t("6e42")["default"])},cb33:function(e,a,t){"use strict";var n=t("014b"),i=t.n(n);i.a},dc46:function(e,a,t){"use strict";t.r(a);var n=t("c2c4"),i=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(a,e,function(){return n[e]})}(s);a["default"]=i.a},efc8:function(e,a,t){"use strict";t.r(a);var n=t("18a8"),i=t("dc46");for(var s in i)"default"!==s&&function(e){t.d(a,e,function(){return i[e]})}(s);t("cb33");var r=t("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports}},[["7ebd","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar3.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{2594:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"grace-number-box"},[a("view",{staticClass:"doBtn",attrs:{eventid:"3ad2884e-0"},on:{tap:t.reduce}},[t._v("-")]),a("input",{attrs:{type:"number",value:t.inputNumber,disabled:t.disabled,eventid:"3ad2884e-1"},on:{blur:t.blur}}),a("view",{staticClass:"doBtn",attrs:{eventid:"3ad2884e-2"},on:{tap:t.add}},[t._v("+")])])},c=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})},2873:function(t,e,a){"use strict";a.r(e);var i=a("94db"),c=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=c.a},"2afd":function(t,e,a){"use strict";a("64b0");var i=s(a("b0ce")),c=s(a("94e7"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(c.default))},"410b":function(t,e,a){},"441f":function(t,e,a){"use strict";var i=a("410b"),c=a.n(i);c.a},4882:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[a("swiper",{staticClass:"grace-swiper",staticStyle:{height:"290rpx"},attrs:{autoplay:"true","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 1)","indicator-active-color":"#00B26A",interval:"3000"}},t._l(t.product.imgs,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"3cdbe3dd-0-"+e}},[a("navigator",{attrs:{url:t.path,"open-type":t.openType}},[a("image",{attrs:{src:t.imgUrl,mode:"widthFix"}})])],1)})),a("view",{staticClass:"garce-padding grace-nowrap",staticStyle:{background:"#FFF",padding:"30rpx 2%"}},[a("view",{staticClass:"grace-product-title"},[t._v(t._s(t.product.name))]),a("view",{staticClass:"grace-product-share grace-iconfont icon-share3",attrs:{eventid:"3cdbe3dd-0"},on:{tap:t.share}})]),a("view",{staticClass:"grace-product-price garce-padding"},[t._v("￥"+t._s(t.product.price)),a("text",[t._v("￥"+t._s(t.product.priceMarket))])]),t._m(0),a("view",{staticClass:"grace-product-menu"},[a("view",{class:[1==t.active?"active":""],attrs:{eventid:"3cdbe3dd-1"},on:{tap:t.showInfo}},[t._v("商品详情")]),a("view",{class:[2==t.active?"active":""],attrs:{eventid:"3cdbe3dd-2"},on:{tap:t.showComments}},[t._v("商品评论")])]),a("view",{staticClass:"grace-product-info",attrs:{hidden:2==t.active}},[a("image",{attrs:{src:t.product.image,mode:"widthFix"}})]),a("view",{staticClass:"grace-product-info",attrs:{hidden:1==t.active}},[t._m(1)]),a("view",{staticStyle:{height:"60rpx"}}),a("view",{staticClass:"grace-footer"},[a("view",{staticClass:"grace-nowrap",staticStyle:{width:"40%"}},[a("view",{staticClass:"icons grace-iconfont icon-home",attrs:{eventid:"3cdbe3dd-3"},on:{tap:t.home}}),a("view",{staticClass:"icons grace-iconfont icon-star"})]),a("view",{staticClass:"grace-product-btn",staticStyle:{background:"#FFAA21"}},[t._v("加入购物车")]),a("view",{staticClass:"grace-product-btn",attrs:{eventid:"3cdbe3dd-4"},on:{click:t.buyNow}},[t._v("立即购买")])]),t.attrIsShow?a("view",{staticClass:"grace-mask",staticStyle:{"z-index":"5"}},[t.attrIsShow?a("view",{staticClass:"grace-product-attr"},[a("form",{staticClass:"grace-form",attrs:{eventid:"3cdbe3dd-9"},on:{submit:t.attrSubmit}},[a("view",{staticClass:"grace-product-attr-close",attrs:{eventid:"3cdbe3dd-5"},on:{click:t.closeAttr}},[a("text",{staticClass:"grace-iconfont icon-close2"})]),a("view",{staticClass:"grace-product-attr-info"},[a("image",{attrs:{src:"../../static/imgs/logo.png",mode:"widthFix"}}),a("view",{staticClass:"title"},[t._v(t._s(t.product.name)),a("text",[t._v("\\n库存 : 1999件")])])]),a("view",{staticStyle:{height:"calc(100% - 155rpx)","overflow-y":"auto"}},[a("view",{staticClass:"grace-product-attr-list"},[a("view",{staticClass:"title"},[t._v("品种")]),a("view",{staticClass:"grace-select-tips"},[a("radio-group",{attrs:{name:"color",eventid:"3cdbe3dd-6",mpcomid:"3cdbe3dd-1"},on:{change:t.colorChange}},t._l(t.colorTips,function(e,i){return a("label",{key:i,class:[e.checked?"grace-checked":""]},[a("radio",{attrs:{value:e.value,checked:e.checked}}),t._v(t._s(e.name))],1)}))],1)]),a("view",{staticClass:"grace-product-attr-list"},[a("view",{staticClass:"title"},[t._v("套餐类型")]),a("view",{staticClass:"grace-select-tips"},[a("radio-group",{attrs:{name:"type",eventid:"3cdbe3dd-7",mpcomid:"3cdbe3dd-2"},on:{change:t.typeChange}},t._l(t.typeTips,function(e,i){return a("label",{key:i,class:[e.checked?"grace-checked":""]},[a("radio",{attrs:{value:e.value,checked:e.checked}}),t._v(t._s(e.name))],1)}))],1)]),a("view",{staticClass:"grace-items",staticStyle:{"margin-top":"8rpx"}},[a("view",{staticClass:"grace-label"},[t._v("购买数量")]),a("input",{staticStyle:{display:"none"},attrs:{type:"number",name:"buynum",value:t.buyNum}}),a("graceNumberBox",{attrs:{value:t.buyNum,eventid:"3cdbe3dd-8",mpcomid:"3cdbe3dd-3"},on:{change:t.buyNumChange}})],1)]),a("view",{staticClass:"grace-product-attr-btn"},[a("button",{attrs:{type:"warn",formType:"submit"}},[t._v("确定")])],1)])],1):t._e()]):t._e()],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"grace-product-desc"},[a("text",[t._v("运费 ￥0.00")]),a("text",[t._v("已售 21008 件")]),a("text",[t._v("浏览 36万次")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"grace-comment"},[a("view",{staticClass:"grace-comment-list"},[a("view",{staticClass:"grace-comment-face"}),a("view",{staticClass:"grace-comment-body"},[a("view",{staticClass:"grace-comment-top"},[a("text",[t._v("用户1")])]),a("view",{staticClass:"grace-comment-content"},[t._v("非常好的，速度很快！")]),a("view",{staticClass:"grace-comment-date"},[a("text",[t._v("08/10 07:55")])])])]),a("view",{staticClass:"grace-comment-list"},[a("view",{staticClass:"grace-comment-face"}),a("view",{staticClass:"grace-comment-body"},[a("view",{staticClass:"grace-comment-top"},[a("text",[t._v("客户002")])]),a("view",{staticClass:"grace-comment-imgs"}),a("view",{staticClass:"grace-comment-content"},[t._v("非常好")]),a("view",{staticClass:"grace-comment-date"},[a("text",[t._v("08/10 07:55")])])])])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})},"67f2":function(t,e,a){"use strict";a.r(e);var i=a("e261"),c=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=c.a},7079:function(t,e,a){},"94db":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(a("bfc3"));function c(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{product:{name:"",logo:"../../static/logo.png",imgs:[{imgUrl:"../../static/img/banner1.jpg"},{imgUrl:"../../static/img/banner2.jpg"},{imgUrl:"../../static/img/banner3.jpg"}],price:3188,priceMarket:3200,image:""},active:1,attrIsShow:!1,attrData:null,colorTips:[{name:"品种1",value:"灰色",checked:!1},{name:"品种2",value:"银色",checked:!1}],typeTips:[{name:"10斤",value:"10斤",checked:!1},{name:"20斤",value:"20斤",checked:!1},{name:"30斤",value:"30斤",checked:!1}],buyNum:1}},onLoad:function(t){var e=JSON.parse(t.data);console.log(e),this.product.name=e.title,this.product.price=e.jiage,this.product.image=e.img},methods:{share:function(){t.showToast({title:"分享",icon:"none"})},showComments:function(){this.active=2},showInfo:function(){this.active=1},home:function(){t.switchTab({url:"../index/index"})},buyNow:function(){this.attrIsShow=!0},attrSubmit:function(e){this.attrData=e.detail.value,console.log(this.attrData),this.attrIsShow=!1,t.showToast({title:"购买",icon:"none"})},closeAttr:function(){this.attrIsShow=!1},colorChange:function(t){for(var e=t.detail.value,a=0;a<this.colorTips.length;a++)-1!=e.indexOf(this.colorTips[a].value+"")?this.colorTips[a].checked=!0:this.colorTips[a].checked=!1;this.colorTips=this.colorTips},typeChange:function(t){for(var e=t.detail.value,a=0;a<this.typeTips.length;a++)-1!=e.indexOf(this.typeTips[a].value+"")?this.typeTips[a].checked=!0:this.typeTips[a].checked=!1;this.typeTips=this.typeTips},buyNumChange:function(t){this.buyNum=t[0]}},components:{graceNumberBox:i.default}};e.default=s}).call(this,a("6e42")["default"])},"94e7":function(t,e,a){"use strict";a.r(e);var i=a("4882"),c=a("2873");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("e14e");var n=a("2877"),r=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},bfc3:function(t,e,a){"use strict";a.r(e);var i=a("2594"),c=a("67f2");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("441f");var n=a("2877"),r=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},e14e:function(t,e,a){"use strict";var i=a("7079"),c=a.n(i);c.a},e261:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"graceNumberBox",props:{disabled:{type:Boolean,default:!1},value:{type:Number,default:0},index:{type:Number,default:0},maxNum:{type:Number,default:20},minNum:{type:Number,default:1}},data:function(){return{inputNumber:this.value}},watch:{value:function(t){this.inputNumber=t},inputNumber:function(t){t>this.maxNum&&(t=this.maxNum,this.inputNumber=t),t<this.minNum&&(t=this.minNum,this.inputNumber=t,console.log(11)),this.$emit("change",[t,this.index])}},methods:{add:function(){var t=this.inputNumber+1;this.inputNumber=Number(t)},reduce:function(){var t=this.inputNumber-1;this.inputNumber=t},blur:function(t){this.inputNumber=Number(t.detail.value)}}};e.default=i}},[["2afd","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/waterfall/waterfall';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/waterfall/waterfall.js';

define('pages/waterfall/waterfall.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waterfall/waterfall"],{"185b":function(t,i,e){"use strict";e.r(i);var a=e("c0dd"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},"494d":function(t,i,e){},"51f2":function(t,i,e){"use strict";e.r(i);var a=e("c9f3"),n=e("185b");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("5f1c");var c=e("2877"),o=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);i["default"]=o.exports},"5f1c":function(t,i,e){"use strict";var a=e("494d"),n=e.n(a);n.a},c0dd:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("096b"));function n(t){return t&&t.__esModule?t:{default:t}}var s,c=1,o=e("d54f"),u=o.products,r={data:function(){return{loading:!1,loadingType:0,isEnd:!1,dianData:{name:"体验店",phone:"1234567899"},productList:[[],[]]}},onLoad:function(t){s=this,this.getList(),this.dianData=JSON.parse(t.data)},onReachBottom:function(){this.getList()},onBackPress:function(){this.loadingType=0,this.isEnd=!1,c=1},methods:{guanzu:function(){t.showToast({title:"关注成功"})},getList:function(){if(c>3)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1,setTimeout(function(){var t=s.productList[0],i=s.productList[1];u=o.getArrRandomly(u);for(var e=0;e<u.length;e++)e%2==0?t.push(u[e]):i.push(u[e]);s.productList=[t,i],s.loadingType=0,c++},1e3)}},components:{graceLoading:a.default}};i.default=r}).call(this,e("6e42")["default"])},c9f3:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("view",{staticClass:"diantitle"},[e("view",{staticClass:"dianinfo"},[e("text",[t._v(t._s(t.dianData.name))]),e("text",[t._v("联系方式:"+t._s(t.dianData.phone))]),e("text",[t._v("地址:"+t._s(t.dianData.place))])]),e("view",[e("text",{staticClass:"guanzhu",attrs:{eventid:"cdb3853a-0"},on:{click:function(i){t.guanzu()}}},[t._v("+关注")])])]),e("view",{staticClass:"grace-waterfall"},t._l(t.productList,function(i,a){return e("view",{key:a,staticClass:"list"},t._l(i,function(i,a){return e("navigator",{key:a,staticClass:"items"},[e("image",{staticClass:"imgs",attrs:{src:i.img,mode:"widthFix"}}),e("view",{staticClass:"title"},[t._v(t._s(i.title))]),e("view",{staticClass:"price"},[t._v(t._s(i.price)),e("view",{staticClass:"tips"},[t._v(t._s(i.tip))])])])}))})),e("graceLoading",{attrs:{loadingType:t.loadingType,mpcomid:"cdb3853a-0"}})],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},d54f:function(t,i,e){"use strict";var a=[{img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3464618996,877399674&fm=15&gp=0.jpg",title:"猕猴桃",price:"￥28.88",tip:"HOT"},{img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=183812707,2982802556&fm=15&gp=0.jpg",title:"水果2",price:"￥16.99",tip:"超甜"},{img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4270116792,2373548192&fm=26&gp=0.jpg",title:"玉米",price:"￥99.99",tip:"推荐"},{img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2809245894,4249480497&fm=26&gp=0.jpg",title:"蔬菜",price:"￥8.99",tip:"进口"},{img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3357117896,1879907153&fm=26&gp=0.jpg",title:"苹果",price:"￥12.99",tip:"nike"},{img:"https://img.alicdn.com/tfs/TB13FixCeuSBuNjy1XcXXcYjFXa-468-1236.jpg",title:"好吃坚果",price:"￥55.99",tip:"吃货"},{img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1253884304,2771755403&fm=26&gp=0.jpg",title:"南瓜",price:"￥22.99",tip:"热卖"}],n=function(t){for(var i=t.length,e=0;e<i;e++){var a=Math.floor(Math.random()*(i-e)),n=t[a];t[a]=t[e],t[e]=n}return t};t.exports={products:a,getArrRandomly:n}},efc2:function(t,i,e){"use strict";e("64b0");var a=s(e("b0ce")),n=s(e("51f2"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))}},[["efc2","common/runtime","common/vendor"]]]);
});
require('pages/waterfall/waterfall.js');
__wxRoute = 'pages/tabbar/tabbar1';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar1.js';

define('pages/tabbar/tabbar1.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar1"],{"0dff":function(t,e,i){},"10ad":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{checkData:[{index:0,text:"辣椒",checkitem:!1},{index:1,text:"苹果",checkitem:!1},{index:2,text:"鸡",checkitem:!1},{index:3,text:"羊",checkitem:!1},{index:4,text:"土豆",checkitem:!1},{index:5,text:"草莓",checkitem:!1},{index:6,text:"柑橘",checkitem:!1},{index:7,text:"大豆",checkitem:!1}],data:[{name:"辣椒",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"辣椒",tips:["每天采购","认证"],huoyuan:"全国",shouhuo:"山东省济南市天桥区",shuliang:"1000斤"},{name:"土豆",tips:["按月采购","认证"],huoyuan:"山东省",shouhuo:"山东省济宁市邹城区",shuliang:"1200斤"},{name:"大豆",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"1000斤"},{name:"鸡",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"600只"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"4000斤"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"柑橘",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"羊",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"200头"}]}},onShow:function(){},methods:{change:function(t){this.checkData.forEach(function(t){t.checkitem=!1});var e=t.currentTarget.dataset.index;this.checkData[e].checkitem=!0}}};e.default=a},8870:function(t,e,i){"use strict";i("64b0");var a=c(i("b0ce")),n=c(i("b110"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},b110:function(t,e,i){"use strict";i.r(e);var a=i("f16e"),n=i("e89c");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("d157");var u=i("2877"),r=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},d157:function(t,e,i){"use strict";var a=i("0dff"),n=i.n(a);n.a},e89c:function(t,e,i){"use strict";i.r(e);var a=i("10ad"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a},f16e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"view"},[i("view",{staticClass:"caigou"},[i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:"搜索",eventid:"62ece514-0"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),i("view",{staticClass:"grace-iconfont icon-search"})]),t._m(0),i("view",{staticClass:"check"},t._l(t.checkData,function(e,a){return i("view",{key:e,attrs:{"data-index":e.index,eventid:"62ece514-1-"+a},on:{click:t.change}},[i("text",{class:e.checkitem?"checkitem2":"checkitem1"},[t._v(t._s(e.text))])])})),i("view",{staticClass:"list"},t._l(t.data,function(e,a){return i("view",{key:e,staticClass:"item",staticStyle:{"border-bottom":"5rpx rgb(230,230,230) solid"}},[i("view",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v(t._s(e.name))]),i("view",{staticStyle:{display:"flex","flex-direction":"row","margin-left":"10rpx"}},t._l(e.tips,function(e,a){return i("text",{key:e,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[t._v(t._s(e))])})),i("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[t._v("期望货源地："+t._s(e.huoyuan))]),i("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[t._v("采购收货地："+t._s(e.shouhuo))]),i("view",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},[i("text",{staticStyle:{"font-size":"1.2rem",color:"#E2231A","margin-left":"20rpx","margin-bottom":"20rpx"}},[t._v(t._s(e.shuliang))]),i("text",{staticStyle:{"border-radius":"50rpx",border:"1rpx #E2231A solid","background-color":"#FFFFFF","font-size":"0.9rem",color:"#E2231A","margin-right":"50rpx","margin-bottom":"20rpx",padding:"10rpx 20rpx"}},[t._v("详谈")])])])}))])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("text",[t._v("采购需求")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}},[["8870","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar1.js');
__wxRoute = 'pages/serach/serach';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/serach/serach.js';

define('pages/serach/serach.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serach/serach"],{1660:function(e,t,a){"use strict";var i=a("f420"),n=a.n(i);n.a},2304:function(e,t,a){"use strict";a.r(t);var i=a("cf45"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},8616:function(e,t,a){"use strict";a("64b0");var i=r(a("b0ce")),n=r(a("cbf5"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},c7ae:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"page"},[a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"搜索",eventid:"3062bc86-0"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),a("view",{staticClass:"grace-iconfont icon-search",attrs:{eventid:"3062bc86-1"},on:{tap:function(t){e.search()}}})]),a("view",{directives:[{name:"show",rawName:"v-show",value:"土豆"==e.value,expression:"value == '土豆'"}],staticClass:"refreshDmo"},e._l(e.demoDate,function(t,i){return a("view",{key:i,staticClass:"item"},[a("view",[a("image",{staticStyle:{width:"180rpx",height:"180rpx","border-radius":"10rpx","margin-left":"10rpx"},attrs:{src:t.img}})]),a("view",{staticClass:"info",staticStyle:{width:"500rpx",display:"flex","flex-direction":"column","align-items":"flex-start"}},[a("text",{staticStyle:{"text-align":"left","font-size":"1rem","font-weight":"600"}},[a("text",{directives:[{name:"show",rawName:"v-show",value:t.youxuan,expression:"item.youxuan"}],staticStyle:{color:"#FFFFFF","background-color":"#FF0036","border-radius":"20rpx","font-size":"0.8rem",margin:"10rpx",padding:"2rpx 10rpx"}},[e._v("优选")]),e._v(e._s(t.title))]),a("view",{staticStyle:{margin:"10rpx"}},e._l(t.arr,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[a("text",{staticStyle:{"font-size":"1.3rem",color:"#FF0036",display:"block",margin:"0 10rpx"}},[e._v(e._s(t.jiage))]),a("text",{staticStyle:{color:"#FF0036",margin:"0 10rpx"}},[e._v("元/"+e._s(t.danwei))]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v("已成交"+e._s(t.chengjiao)+"单")]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v(e._s(t.zuijin)+"小时前")])]),a("view",{staticStyle:{color:"#888888",display:"flex","flex-direction":"row","justify-content":"flex-end"}},[a("text",{staticStyle:{margin:"0 15rpx","margin-left":"200rpx"}},[e._v(e._s(t.place1))]),a("text",[e._v(e._s(t.place2))])])])])})),a("view",{directives:[{name:"show",rawName:"v-show",value:"土豆"!=e.value,expression:"value != '土豆'"}],staticClass:"nodata"},[e._v("暂无数据")])])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},cbf5:function(e,t,a){"use strict";a.r(t);var i=a("c7ae"),n=a("2304");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("1660");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},cf45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a("096b"));function i(e){return e&&e.__esModule?e:{default:e}}var n=1,r={data:function(){return{value:"",demoDate:[{img:"../../static/img/tudou1.jpg",title:"新鲜小土豆农家自种",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"22.8",danwei:"10斤",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tudou2.jpg",title:"新鲜大土豆",youxuan:!1,arr:["准时发货"],jiage:"2.00",danwei:"斤",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou3.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/tudou4.jpg",title:"农家自种土豆，非转基因",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"2.50",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/tudou5.jpg",title:"大土豆新鲜，10斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"20.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}]}},onLoad:function(e){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.close()},250),e=JSON.parse(e.serach),this.value=e.serach},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},methods:{search:function(){},loadMoreFunc:function(){if(n>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var e=this;setTimeout(function(){e.loading=!1;var t=e.getArrRandomly(e.demoDate);e.demoDate=e.demoDate.concat(t),n++,e.loadingType=0},1e3)},getArrRandomly:function(e){for(var t=e.length,a=0;a<t;a++){var i=Math.floor(Math.random()*(t-a)),n=e[i];e[i]=e[a],e[a]=n}return e}}};t.default=r},f420:function(e,t,a){}},[["8616","common/runtime","common/vendor"]]]);
});
require('pages/serach/serach.js');
__wxRoute = 'pages/chaizhai/chaizhai';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chaizhai/chaizhai.js';

define('pages/chaizhai/chaizhai.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chaizhai/chaizhai"],{"0a78":function(t,e,i){},"0ad8":function(t,e,i){"use strict";i.r(e);var a=i("96f6"),n=i("a336");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("906e");var s=i("2877"),o=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"2a4f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{value:"草莓",listShow:"true",listData:[{icon:"../../static/img/caomei1.jpg",name:"**采摘园",place:"山东省聊城市东昌府区",time1:"2019年5月11日",time2:"2019年6月1日"},{icon:"../../static/img/caomei2.jpg",name:"***采摘园",place:"山东省济南市长清区",time1:"2019年5月21日",time2:"2019年6月11日"},{icon:"../../static/img/caomei3.jpg",name:"**采摘园",place:"山东省青岛市黄岛区",time1:"2019年6月17日",time2:"2019年6月30日"},{icon:"../../static/img/caomei4.jpg",name:"**采摘园",place:"山东省聊城市阳谷县",time1:"2019年6月10日",time2:"2019年6月15日"},{icon:"../../static/img/caomei5.jpg",name:"**采摘园",place:"山东省聊城市东昌府区",time1:"2019年5月13日",time2:"2019年5月21日"},{icon:"../../static/img/caomei6.jpg",name:"**采摘园",place:"山东省青岛市黄岛区",time1:"2019年5月18日",time2:"2019年6月1日"},{icon:"../../static/img/caomei2.jpg",name:"***采摘园",place:"山东省济南市长清区",time1:"2019年5月17日",time2:"2019年5月21日"},{icon:"../../static/img/caomei1.jpg",name:"**采摘园",place:"山东省聊城市阳谷县",time1:"2019年5月19日",time2:"2019年5月28日"}]}},onLoad:function(){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.close()},250)},methods:{search:function(){"草莓"==this.value?this.listShow=!0:this.listShow=!1}}};e.default=a},"5bae":function(t,e,i){"use strict";i("64b0");var a=c(i("b0ce")),n=c(i("0ad8"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},"906e":function(t,e,i){"use strict";var a=i("0a78"),n=i.n(a);n.a},"96f6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:"搜索",eventid:"18e8edc6-0"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),i("view",{staticClass:"grace-iconfont icon-search",attrs:{eventid:"18e8edc6-1"},on:{tap:function(e){t.search()}}})]),i("view",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list"},t._l(t.listData,function(e,a){return i("view",{key:e,staticClass:"item"},[i("image",{attrs:{src:e.icon,mode:""}}),i("view",{staticClass:"text"},[i("text",{staticStyle:{"font-siza":"0.6rem"}},[t._v(t._s(e.name))]),i("text",{staticClass:"grace-iconfont icon-position"},[i("text",[t._v(t._s(e.place))])]),i("text",{staticStyle:{"font-siza":"0.6rem"}},[t._v("预售期："+t._s(e.time1))]),i("text",{staticStyle:{"font-siza":"0.6rem"}},[t._v("采摘期："+t._s(e.time2))])])])})),i("view",{directives:[{name:"show",rawName:"v-show",value:!t.listShow,expression:"!listShow"}],staticClass:"nodata"},[t._v("暂无数据")])])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},a336:function(t,e,i){"use strict";i.r(e);var a=i("2a4f"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a}},[["5bae","common/runtime","common/vendor"]]]);
});
require('pages/chaizhai/chaizhai.js');
__wxRoute = 'pages/checkId/checkId';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/checkId/checkId.js';

define('pages/checkId/checkId.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/checkId/checkId"],{"1e30":function(t,e,n){"use strict";n.r(e);var a=n("e4d9"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"5a8f":function(t,e,n){"use strict";n("64b0");var a=c(n("b0ce")),i=c(n("780b"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"5e87":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"list"},[n("view",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"输入昵称",eventid:"497962f6-0"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("view",{class:t.active[0]?"active":"item",attrs:{"data-index":"0",eventid:"497962f6-1"},on:{tap:t.change}},[n("image",{attrs:{src:"../../static/img/yonghu.png"}}),n("text",[t._v("普通用户")])]),n("view",{class:t.active[1]?"active":"item",attrs:{"data-index":"1",eventid:"497962f6-2"},on:{tap:t.change}},[n("image",{attrs:{src:"../../static/img/nongmin.png"}}),n("text",[t._v("农民")])]),n("view",{class:t.active[2]?"active":"item",attrs:{"data-index":"2",eventid:"497962f6-3"},on:{tap:t.change}},[n("image",{attrs:{src:"../../static/img/shop.png"}}),n("text",[t._v("经销商")])]),n("view",[n("button",{attrs:{type:"primary",eventid:"497962f6-4"},on:{click:t.submit}},[t._v("确定")])],1)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"780b":function(t,e,n){"use strict";n.r(e);var a=n("5e87"),i=n("1e30");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("9325");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},9325:function(t,e,n){"use strict";var a=n("ce13"),i=n.n(a);i.a},ce13:function(t,e,n){},e4d9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{active:[!1,!1,!1],index:null,identity:["普通用户","农民","经销商"],name:""}},methods:{change:function(t){var e=t.currentTarget.dataset.index;this.active=[!1,!1,!1],this.active[e]=!0,this.index=e},submit:function(){if(null==this.index)t.showToast({title:"请选择用户",icon:"none",duration:1500});else{var e=t.getStorageSync("USER_INFO");e.identity=this.identity[this.index],e.name=this.name,console.log(JSON.stringify(e)),t.setStorageSync("USER_INFO",e),t.switchTab({url:"../tabbar/tabbar0"})}}}};e.default=n}).call(this,n("6e42")["default"])}},[["5a8f","common/runtime","common/vendor"]]]);
});
require('pages/checkId/checkId.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1e98":function(t,e,n){"use strict";var a=n("ea6d"),s=n.n(a);s.a},"40f5":function(t,e,n){"use strict";n("64b0");var a=i(n("b0ce")),s=i(n("5404"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"4b7c":function(t,e,n){"use strict";n.r(e);var a=n("c333"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},5404:function(t,e,n){"use strict";n.r(e);var a=n("e8f6"),s=n("4b7c");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("1e98");var o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},c333:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("d465"));function s(t){return t&&t.__esModule?t:{default:t}}var i=n("fe77"),o={data:function(){return{pnpre:"86",pnpres:["86","01","11","26","520"],phoneno:"",password1:"",password2:""}},components:{mInput:a.default},onLoad:function(){},methods:{loginWithWx:function(){t.showToast({title:"请完善登录功能",icon:"none"})},changePre:function(t){this.pnpre=this.pnpres[t.detail.value]},loginNow:function(e){var n=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;if(!n.test(this.phoneno))return t.showToast({title:"请正确填写手机号码",icon:"none"}),!1;var a=[{name:"pn",checkType:"phoneno",errorMsg:"请填写正确的手机号"}],s=e.detail.value;i.check(s,a);0!=this.password1.length&&0!=this.password2?this.password1==this.password2?this.reg():t.showToast({title:"两次密码不一致",icon:"none",duration:1500}):t.showToast({title:"请输入密码",icon:"none",duration:1500})},getVCode:function(){"获取验证码"!=this.vcodeBtnName&&"重新发送"!=this.vcodeBtnName||(this.vcodeBtnName="发送中...",t.showToast({title:"短信已发送，请注意查收",icon:"none"}),this.countNum=120,this.countDownTimer=setInterval(function(){this.countDown()}.bind(this),1e3))},countDown:function(){if(this.countNum<1)return clearInterval(this.countDownTimer),void(this.vcodeBtnName="重新发送");this.countNum--,this.vcodeBtnName=this.countNum+"秒重发"},reg:function(){var e={phone:this.phoneno,password:this.password1,userId:0};t.setStorageSync("LOGIN_FLAG","true"),t.setStorageSync("USER_INFO",e),t.navigateTo({url:"../checkId/checkId"})}}};e.default=o}).call(this,n("6e42")["default"])},e8f6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"grace-padding",staticStyle:{padding:"0 40rpx"}},[n("view",{staticClass:"grace-form",staticStyle:{"margin-top":"50rpx"}},[n("form",{attrs:{eventid:"668dc91d-4"},on:{submit:t.loginNow}},[n("view",{staticClass:"inputView"},[n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("picker",{attrs:{value:t.pnpre,range:t.pnpres,name:"pn_pre",eventid:"668dc91d-0"},on:{change:t.changePre}},[n("text",[t._v("+"+t._s(t.pnpre))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneno,expression:"phoneno"}],staticClass:"input",attrs:{type:"number",name:"pn",placeholder:"请输入手机号",eventid:"668dc91d-1"},domProps:{value:t.phoneno},on:{input:function(e){e.target.composing||(t.phoneno=e.target.value)}}})]),n("view",{staticClass:"grace-space-between"},[n("view",{staticClass:"grace-items",staticStyle:{width:"90%"}},[n("view",{staticClass:"grace-label grace-center"},[t._v("密码")]),n("m-input",{staticClass:"is-input1",attrs:{type:"password",displayable:"",name:"yzm",placeholder:"请输入密码",eventid:"668dc91d-2",mpcomid:"668dc91d-0"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}})],1)]),n("view",{staticClass:"grace-space-between"},[n("view",{staticClass:"grace-items",staticStyle:{width:"90%"}},[n("view",{staticClass:"grace-label grace-center"},[t._v("确认密码")]),n("m-input",{staticClass:"is-input1",attrs:{type:"password",displayable:"",name:"yzm",placeholder:"请再次输入密码",eventid:"668dc91d-3",mpcomid:"668dc91d-1"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)])]),n("button",{staticStyle:{background:"#00C777","margin-top":"100rpx"},attrs:{"form-type":"submit",type:"primary"}},[t._v("注册"),n("text",{staticClass:"grace-iconfont icon-arrow-right"})])],1)],1)])},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},ea6d:function(t,e,n){}},[["40f5","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"294b":function(e,t,n){"use strict";var a=n("5dd1"),i=n.n(a);i.a},3065:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("d465"));function i(e){return e&&e.__esModule?e:{default:e}}var r=n("fe77"),s={data:function(){return{pnpre:"86",pnpres:["86","01","11","26","520"],phoneno:"",password1:""}},components:{mInput:a.default},onShow:function(){},methods:{changePre:function(e){this.pnpre=this.pnpres[e.detail.value]},loginNow:function(t){var n=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;if(!n.test(this.phoneno))return e.showToast({title:"请正确填写手机号码",icon:"none"}),!1;if(0!=this.password1.length){var a=[{name:"pn",checkType:"phoneno",errorMsg:"请填写正确的手机号"}],i=t.detail.value,s=r.check(i,a);if(s){var o=e.getStorageSync("USER_INFO");this.password1==o.password?(e.setStorageSync("LOGIN_FLAG","true"),e.showToast({title:"登录成功",icon:"success",duration:1500}),setTimeout(function(){var t=e.getStorageSync("USER_INFO");0!=t.identity.length?e.switchTab({url:"../tabbar/tabbar0"}):e.navigateTo({url:"../checkId/checkId"})},1500)):e.showToast({title:"密码错误",icon:"none",duration:1500})}else e.showToast({title:r.error,icon:"none"})}else e.showToast({title:"请输入密码",icon:"none",duration:1500})},reg:function(){e.navigateTo({url:"../register/register"})}}};t.default=s}).call(this,n("6e42")["default"])},"58e0":function(e,t,n){"use strict";n.r(t);var a=n("3065"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},"5dd1":function(e,t,n){},"728d":function(e,t,n){"use strict";n.r(t);var a=n("a5a8"),i=n("58e0");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("294b");var s=n("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},a5a8:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"grace-padding",staticStyle:{padding:"0 40rpx"}},[n("view",{staticClass:"grace-form",staticStyle:{"margin-top":"50rpx"}},[n("form",{attrs:{eventid:"7d57575e-3"},on:{submit:e.loginNow}},[n("view",{staticClass:"inputView"},[n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("picker",{attrs:{value:e.pnpre,range:e.pnpres,name:"pn_pre",eventid:"7d57575e-0"},on:{change:e.changePre}},[n("text",[e._v("+"+e._s(e.pnpre))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneno,expression:"phoneno"}],staticClass:"input",attrs:{type:"number",name:"pn",placeholder:"请输入手机号",eventid:"7d57575e-1"},domProps:{value:e.phoneno},on:{input:function(t){t.target.composing||(e.phoneno=t.target.value)}}})]),n("view",{staticClass:"grace-space-between"},[n("view",{staticClass:"grace-items",staticStyle:{width:"90%"}},[n("view",{staticClass:"grace-label grace-center"},[e._v("密码")]),n("m-input",{staticClass:"is-input1",attrs:{type:"password",displayable:"",name:"yzm",placeholder:"请输入密码",eventid:"7d57575e-2",mpcomid:"7d57575e-0"},model:{value:e.password1,callback:function(t){e.password1=t},expression:"password1"}})],1)])]),n("button",{staticStyle:{background:"#00C777","margin-top":"100rpx"},attrs:{"form-type":"submit",type:"primary"}},[e._v("登录"),n("text",{staticClass:"grace-iconfont icon-arrow-right"})])],1)],1),n("view",{staticClass:"grace-center",staticStyle:{"margin-top":"20rpx","line-height":"50rpx"},attrs:{eventid:"7d57575e-4"},on:{tap:e.reg}},[e._v("还没有账号？点击注册")]),e._m(0),e._m(1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"grace-title",staticStyle:{"margin-top":"300rpx"}},[n("view",{staticClass:"grace-h5 grace-blod grace-center",staticStyle:{color:"#00C777"}},[e._v("第三方登录")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"grace-login-three",staticStyle:{"margin-top":"8rpx"}},[n("view",{staticClass:"grace-iconfont icon-weixin"}),n("view",{staticClass:"grace-iconfont icon-qq"}),n("view",{staticClass:"grace-iconfont icon-weibo"})])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},c745:function(e,t,n){"use strict";n("64b0");var a=r(n("b0ce")),i=r(n("728d"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(i.default))}},[["c745","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/tabbar/tabbar2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar2.js';

define('pages/tabbar/tabbar2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar2"],{"0102":function(t,a,e){"use strict";var i=e("81be"),n=e.n(i);n.a},7201:function(t,a,e){"use strict";e.r(a);var i=e("993e"),n=e("a299");for(var c in n)"default"!==c&&function(t){e.d(a,t,function(){return n[t]})}(c);e("0102");var s=e("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"24d7197e",null);a["default"]=o.exports},"81be":function(t,a,e){},"96a3":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(a){a&&t.navigateTo({url:a})}}};a.default=e}).call(this,e("6e42")["default"])},"993e":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content",class:{active:t.active}},[e("image",{staticClass:"logo",class:{active:t.active},attrs:{src:"../../../static/logo.png",mode:"aspectFit"}}),e("view",{staticClass:"tabbar-box-wrap"},[e("view",{staticClass:"tabbar-box"},[e("view",{staticClass:"tabbar-box-item",attrs:{eventid:"62ece515-0"},on:{click:function(a){t.goToPage()}}},[e("image",{staticClass:"box-image",attrs:{src:"../../../static/img/caigou.png",mode:"aspectFit"}}),e("text",{staticClass:"explain"},[t._v("发采购")])]),e("view",{staticClass:"tabbar-box-item",attrs:{eventid:"62ece515-1"},on:{click:function(a){t.goToPage()}}},[e("image",{staticClass:"box-image",attrs:{src:"../../../static/img/gongying.png",mode:"aspectFit"}}),e("text",{staticClass:"explain"},[t._v("发供应")])])])])])},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},a299:function(t,a,e){"use strict";e.r(a);var i=e("96a3"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(a,t,function(){return i[t]})}(c);a["default"]=n.a},ba2d:function(t,a,e){"use strict";e("64b0");var i=c(e("b0ce")),n=c(e("7201"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))}},[["ba2d","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar2.js');
__wxRoute = 'pages/tabbar/tabbar4';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar4.js';

define('pages/tabbar/tabbar4.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar4"],{"2bd5":function(e,t,n){"use strict";var i=n("cdf2"),a=n.n(i);a.a},"2cdc":function(e,t,n){"use strict";n("64b0");var i=s(n("b0ce")),a=s(n("420d"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(a.default))},"420d":function(e,t,n){"use strict";n.r(t);var i=n("c11b"),a=n("8d66");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("2bd5");var o=n("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"8d66":function(e,t,n){"use strict";n.r(t);var i=n("cc58"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},c11b:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticStyle:{width:"100vw"}},[n("view",{staticClass:"header"},[n("view",{staticClass:"userinfo"},[e._m(0),n("view",{staticClass:"info"},[n("view",{directives:[{name:"show",rawName:"v-show",value:e.haslogin,expression:"haslogin"}],staticClass:"username"},[e._v(e._s(e.userinfo.phone))]),n("view",{directives:[{name:"show",rawName:"v-show",value:e.haslogin,expression:"haslogin"}],staticClass:"username"},[e._v(e._s(e.userinfo.name))]),n("view",{directives:[{name:"show",rawName:"v-show",value:e.haslogin,expression:"haslogin"}],staticClass:"username"},[e._v(e._s(e.userinfo.identity))])]),n("view",{staticClass:"login-view"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!e.haslogin,expression:"!haslogin"}],staticClass:"login",staticStyle:{"background-color":"#2FBF79"},attrs:{eventid:"62ece517-0"},on:{tap:function(t){e.login()}}},[e._v("登录")]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.haslogin,expression:"!haslogin"}],staticClass:"login",attrs:{eventid:"62ece517-1"},on:{tap:function(t){e.register()}}},[e._v("注册")])],1)]),e._m(1)]),n("view",{staticClass:"orders"},[n("view",{staticClass:"box"},e._l(e.orderTypeLise,function(t,i){return n("view",{key:t.name,staticClass:"label",attrs:{"hover-class":"hover",eventid:"62ece517-2-"+i},on:{tap:function(t){e.toOrderType(i)}}},[n("view",{staticClass:"icon"},[t.badge>0?n("view",{staticClass:"badge"},[e._v(e._s(t.badge))]):e._e(),n("image",{attrs:{src:"../../../static/wode/"+t.icon}})]),e._v(e._s(t.name))])}))]),e._l(e.severList,function(t,i){return n("view",{key:i,staticClass:"list"},e._l(t,function(a,s){return n("view",{key:a.name,staticClass:"li",class:{noborder:s==t.length-1},attrs:{"hover-class":"hover",eventid:"62ece517-3-"+i+"-"+s},on:{tap:function(t){e.toPage(i,s)}}},[n("view",{staticClass:"icon"},[n("image",{attrs:{src:"../../../static/wode/sever/"+a.icon}})]),n("view",{staticClass:"text"},[e._v(e._s(a.name))]),n("image",{staticClass:"to",attrs:{src:"../../../static/wode/to.png"}})])}))}),n("view",{staticStyle:{width:"70%",margin:"60rpx auto"}},[n("button",{attrs:{type:"warn",eventid:"62ece517-4"},on:{tap:function(t){e.exit()}}},[e._v("退出登录")])],1)],2)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"face"},[n("image",{staticClass:"userFace",attrs:{src:"../../static/img/user.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"setting"},[n("image",{attrs:{src:"../../../static/wode/setting.png"}})])}];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},cc58:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{haslogin:!1,userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:0},{name:"待发货",icon:"l2.png",badge:0},{name:"待收货",icon:"l3.png",badge:0},{name:"待评价",icon:"l4.png",badge:0},{name:"我的认养",icon:"l5.png",badge:0}],severList:[[{name:"账户积分",icon:"quan.png"},{name:"我的认养",icon:"renw.png"},{name:"我的收藏",icon:"point.png"}],[{name:"意见反馈",icon:"mingxi.png"},{name:"申诉",icon:"choujiang.png"},{name:"收货地址",icon:"addr.png"},{name:"银行卡",icon:"bank.png"},{name:"设置",icon:"security.png"},{name:"在线客服",icon:"kefu.png"}]]}},onShow:function(){var t=e.getStorageSync("LOGIN_FLAG");if(0!=t.length){var n=e.getStorageSync("USER_INFO");this.userinfo=n,this.haslogin=!0}else this.haslogin=!1},methods:{init:function(){},toOrderType:function(t){e.showToast({title:this.orderTypeLise[t].name})},toPage:function(t,n){e.showToast({title:this.severList[t][n].name})},login:function(){e.navigateTo({url:"../login/login"})},register:function(){e.navigateTo({url:"../register/register"})},exit:function(){e.navigateTo({url:"../login/login"})}}};t.default=n}).call(this,n("6e42")["default"])},cdf2:function(e,t,n){}},[["2cdc","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar4.js');


