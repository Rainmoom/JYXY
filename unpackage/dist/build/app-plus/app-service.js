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
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#666666'],[1,'#cccccc']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[2,'==='],[[7],[3,'loadingType']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'loginNow']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[0])
Z([3,'is-input1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password1']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'yzm'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password1']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'attrIsShow']])
Z(z[0])
Z([3,'__e'])
Z([3,'grace-form'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'attrSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'buyNumChange']]]]]]]]])
Z([[7],[3,'buyNum']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'loginNow']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'inputView'])
Z([3,'__l'])
Z(z[0])
Z([3,'is-input1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password1']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'yzm'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password1']])
Z([3,'1'])
Z(z[3])
Z(z[0])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password2']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[7])
Z([3,'请再次输入密码'])
Z(z[9])
Z([[7],[3,'password2']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'orderTypeLise']])
Z([3,'name'])
Z([3,'__e'])
Z([3,'label'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toOrderType']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'hover'])
Z([[2,'>'],[[6],[[7],[3,'row']],[3,'badge']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/m-icon/m-icon.wxml','./components/m-input.wxml','./graceUI/components/graceLoading.wxml','./graceUI/components/graceNumberBox.wxml','./pages/chaizhai/chaizhai.wxml','./pages/checkId/checkId.wxml','./pages/login/login.wxml','./pages/product/product.wxml','./pages/register/register.wxml','./pages/serach/serach.wxml','./pages/tabbar/tabbar0.wxml','./pages/tabbar/tabbar1.wxml','./pages/tabbar/tabbar2.wxml','./pages/tabbar/tabbar3.wxml','./pages/tabbar/tabbar4.wxml','./pages/waterfall/waterfall.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
var cF=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oD,cF)
}
var fE=_v()
_(xC,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
var hG=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(fE,hG)
}
oD.wxXCkey=1
oD.wxXCkey=3
fE.wxXCkey=1
fE.wxXCkey=3
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
var oJ=_v()
_(cI,oJ)
if(_oz(z,1,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
}
cI.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var bO=_mz(z,'form',['bindsubmit',0,'data-event-opts',1],[],e,s,gg)
var oP=_mz(z,'m-input',['displayable',-1,'bind:__l',2,'bind:input',1,'class',2,'data-event-opts',3,'name',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(bO,oP)
_(r,bO)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
var fS=_v()
_(oR,fS)
if(_oz(z,1,e,s,gg)){fS.wxVkey=1
var cT=_mz(z,'form',['bindsubmit',2,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_mz(z,'grace-number-box',['bind:__l',5,'bind:change',1,'data-event-opts',2,'value',3,'vueId',4],[],e,s,gg)
_(cT,hU)
_(fS,cT)
}
fS.wxXCkey=1
fS.wxXCkey=3
}
oR.wxXCkey=1
oR.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cW=_mz(z,'form',['bindsubmit',0,'data-event-opts',1],[],e,s,gg)
var oX=_n('view')
_rz(z,oX,'class',2,e,s,gg)
var lY=_mz(z,'m-input',['displayable',-1,'bind:__l',3,'bind:input',1,'class',2,'data-event-opts',3,'name',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(oX,lY)
var aZ=_mz(z,'m-input',['displayable',-1,'bind:__l',12,'bind:input',1,'class',2,'data-event-opts',3,'name',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(oX,aZ)
_(cW,oX)
_(r,cW)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var b3=_mz(z,'grace-loading',['bind:__l',0,'loadingType',1,'vueId',1],[],e,s,gg)
_(r,b3)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var c8=_v()
_(r,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'hoverClass',3],[],cAB,o0,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,8,cAB,o0,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,2,h9,e,s,gg,c8,'row','index','name')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var bGB=_mz(z,'grace-loading',['bind:__l',0,'loadingType',1,'vueId',1],[],e,s,gg)
_(r,bGB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabbar/tabbar0","pages/tabbar/tabbar3","pages/product/product","pages/waterfall/waterfall","pages/tabbar/tabbar1","pages/serach/serach","pages/chaizhai/chaizhai","pages/checkId/checkId","pages/register/register","pages/login/login","pages/tabbar/tabbar2","pages/tabbar/tabbar4"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabbar/tabbar0","text":"商城","iconPath":"static/img/maichu.png","selectedIconPath":"static/img/maichuHL.png"},{"pagePath":"pages/tabbar/tabbar1","text":"农场","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/tabbar/tabbar3","text":"体验店","iconPath":"static/img/liaotian.png","selectedIconPath":"static/img/liaotianHL.png"},{"pagePath":"pages/tabbar/tabbar4","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"记忆小院","compilerVersion":"2.1.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['graceUI/components/graceLoading.json']={"usingComponents":{},"component":true};
__wxAppCode__['graceUI/components/graceLoading.wxml']=$gwx('./graceUI/components/graceLoading.wxml');

__wxAppCode__['graceUI/components/graceNumberBox.json']={"usingComponents":{},"component":true};
__wxAppCode__['graceUI/components/graceNumberBox.wxml']=$gwx('./graceUI/components/graceNumberBox.wxml');

__wxAppCode__['pages/chaizhai/chaizhai.json']={"navigationBarTitleText":"采摘园","usingComponents":{}};
__wxAppCode__['pages/chaizhai/chaizhai.wxml']=$gwx('./pages/chaizhai/chaizhai.wxml');

__wxAppCode__['pages/checkId/checkId.json']={"navigationBarTitleText":"用户身份","usingComponents":{}};
__wxAppCode__['pages/checkId/checkId.wxml']=$gwx('./pages/checkId/checkId.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/product/product.json']={"navigationBarTitleText":"商品","usingComponents":{"grace-number-box":"/graceUI/components/graceNumberBox"}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/register/register.json']={"navigationBarTitleText":"注册","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/serach/serach.json']={"navigationBarTitleText":"搜索结果","usingComponents":{}};
__wxAppCode__['pages/serach/serach.wxml']=$gwx('./pages/serach/serach.wxml');

__wxAppCode__['pages/tabbar/tabbar0.json']={"titleNView":false,"usingComponents":{"grace-loading":"/graceUI/components/graceLoading"}};
__wxAppCode__['pages/tabbar/tabbar0.wxml']=$gwx('./pages/tabbar/tabbar0.wxml');

__wxAppCode__['pages/tabbar/tabbar1.json']={"navigationBarTitleText":"农场","usingComponents":{}};
__wxAppCode__['pages/tabbar/tabbar1.wxml']=$gwx('./pages/tabbar/tabbar1.wxml');

__wxAppCode__['pages/tabbar/tabbar2.json']={"navigationBarTitleText":"发布","usingComponents":{}};
__wxAppCode__['pages/tabbar/tabbar2.wxml']=$gwx('./pages/tabbar/tabbar2.wxml');

__wxAppCode__['pages/tabbar/tabbar3.json']={"navigationBarTitleText":"体验店","usingComponents":{}};
__wxAppCode__['pages/tabbar/tabbar3.wxml']=$gwx('./pages/tabbar/tabbar3.wxml');

__wxAppCode__['pages/tabbar/tabbar4.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/tabbar/tabbar4.wxml']=$gwx('./pages/tabbar/tabbar4.wxml');

__wxAppCode__['pages/waterfall/waterfall.json']={"navigationBarTitleText":"商品","usingComponents":{"grace-loading":"/graceUI/components/graceLoading"}};
__wxAppCode__['pages/waterfall/waterfall.wxml']=$gwx('./pages/waterfall/waterfall.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2098:function(n,t,o){},"20ef":function(n,t,o){"use strict";var u=o("2098"),e=o.n(u);e.a},"38c4":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLaunch:function(){},onShow:function(){},onHide:function(){}};t.default=u},"3d8b":function(n,t,o){"use strict";o.r(t);var u=o("38c4"),e=o.n(u);for(var c in u)"default"!==c&&function(n){o.d(t,n,function(){return u[n]})}(c);t["default"]=e.a},e77f:function(n,t,o){"use strict";o.r(t);var u=o("3d8b");for(var e in u)"default"!==e&&function(n){o.d(t,n,function(){return u[n]})}(e);o("20ef");var c,f,a=o("2877"),r=Object(a["a"])(u["default"],c,f,!1,null,null,null);t["default"]=r.exports}},[["d3cc","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, u = t[0], i = t[1], l = t[2], s = 0, p = []; s < u.length; s++) {
      o = u[s], a[o] && p.push(a[o][0]), a[o] = 0;
    }

    for (r in i) {
      Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }

    m && m(t);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== a[u] && (r = !1);
      }

      r && (c.splice(t--, 1), e = i(i.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      c = [];

  function u(e) {
    return i.p + "" + e + ".js";
  }

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.e = function (e) {
    var t = [],
        n = {
      "graceUI/components/graceLoading": 1,
      "graceUI/components/graceNumberBox": 1,
      "components/m-input": 1,
      "components/m-icon/m-icon": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "graceUI/components/graceLoading": "graceUI/components/graceLoading",
        "graceUI/components/graceNumberBox": "graceUI/components/graceNumberBox",
        "components/m-input": "components/m-input",
        "components/m-icon/m-icon": "components/m-icon/m-icon"
      }[e] || e) + ".wxss", a = i.p + r, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
        var l = c[u],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === a)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (u = 0; u < p.length; u++) {
        l = p[u], s = l.getAttribute("data-href");
        if (s === r || s === a) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var r = t && t.target && t.target.src || a,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        c.request = r, delete o[e], m.parentNode.removeChild(m), n(c);
      }, m.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var c = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push(r[2] = c);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.src = u(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(p);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            c.type = r, c.request = o, n[1](c);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, i.m = e, i.c = r, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var p = 0; p < l.length; p++) {
    t(l[p]);
  }

  var m = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"04d8":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("1aeb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"12aa":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("5d3f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2d3a":function(t,e,n){"use strict";var r=[{img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3464618996,877399674&fm=15&gp=0.jpg",title:"猕猴桃",price:"￥28.88",tip:"HOT"},{img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=183812707,2982802556&fm=15&gp=0.jpg",title:"水果2",price:"￥16.99",tip:"超甜"},{img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4270116792,2373548192&fm=26&gp=0.jpg",title:"玉米",price:"￥99.99",tip:"推荐"},{img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2809245894,4249480497&fm=26&gp=0.jpg",title:"蔬菜",price:"￥8.99",tip:"进口"},{img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3357117896,1879907153&fm=26&gp=0.jpg",title:"苹果",price:"￥12.99",tip:"nike"},{img:"https://img.alicdn.com/tfs/TB13FixCeuSBuNjy1XcXXcYjFXa-468-1236.jpg",title:"好吃坚果",price:"￥55.99",tip:"吃货"},{img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1253884304,2771755403&fm=26&gp=0.jpg",title:"南瓜",price:"￥22.99",tip:"热卖"}],o=function(t){for(var e=t.length,n=0;n<e;n++){var r=Math.floor(Math.random()*(e-n)),o=t[r];t[r]=t[n],t[n]=o}return t};t.exports={products:r,getArrRandomly:o}},"337b":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("2652"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"558c":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("1505"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5c34":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("e42f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,x=$(function(t){return t.replace(k,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){return t.bind(e)}var S=Function.prototype.bind?P:j;function E(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function C(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function D(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function N(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return N(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return N(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:D,parsePlatformTagName:T,mustUseProp:I,async:!0,_lifecycleHooks:B},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function z(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+L.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=Q&&WXEnvironment.platform.toLowerCase(),q=J&&window.navigator.userAgent.toLowerCase(),Z=q&&/msie|trident/.test(q),tt=(q&&q.indexOf("msie 9.0"),q&&q.indexOf("edge/")>0),et=(q&&q.indexOf("android"),q&&/iphone|ipad|ipod|ios/.test(q)||"ios"===Y),nt=(q&&/chrome\/\d+/.test(q),q&&/phantomjs/.test(q),q&&q.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===G&&(G=!J&&!Q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},it=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=D,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var pt=[];function ht(t){pt.push(t),lt.target=t}function dt(){pt.pop(),lt.target=pt[pt.length-1]}var vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,_t);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function gt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,$t=Object.create(bt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=bt[t];z($t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames($t),At=!0;function kt(t){At=t}var xt=function(t){this.value=t,this.dep=new lt,this.vmCount=0,z(t,"__ob__",this),Array.isArray(t)?(X?jt(t,$t):Pt(t,$t,Ot),this.observeArray(t)):this.walk(t)};function jt(t,e){t.__proto__=e}function Pt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];z(t,i,e[i])}}function St(t,e){var n;if(u(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:At&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&St(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Dt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&St(e),i.notify())}})}}function Ct(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Dt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Dt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)St(t[e])};var It=V.optionMergeStrategies;function Tt(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Tt(r,o):Ct(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Tt(r,o):o}:e?t?function(){return Tt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ft(n):n}function Ft(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var o=Object.create(t||null);return e?C(o,e):o}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},B.forEach(function(t){It[t]=Rt}),U.forEach(function(t){It[t+"s"]=Ut}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in C(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return C(o,t),e&&C(o,e),o},It.provide=Nt;var Bt=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Lt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?C({from:i},a):{from:a}}else 0}}function Ht(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function zt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),Lt(e,n),Ht(e),!e._base&&(e.extends&&(t=zt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=zt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=It[r]||Bt;a[r]=o(t[r],e[r],n,r)}return a}function Wt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Kt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Qt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===x(t)){var u=Qt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Gt(r,o,t);var c=At;kt(!0),St(a),kt(c)}return a}function Gt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Xt(e.type)?r.call(t):r}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Xt(t)===Xt(e)}function Qt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Jt(e[n],t))return n;return-1}function Yt(t,e,n){ht();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Zt(no,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{dt()}}function qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Yt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Yt(no,r,o)}return i}function Zt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!J&&!Q||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(D)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,se=new MutationObserver(oe),ue=document.createTextNode(String(ae));se.observe(ue,{characterData:!0}),ee=function(){ae=(ae+1)%2,ue.data=String(ae)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Yt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new st;function le(t){pe(t,fe),fe.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var he=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=he(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=de(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=he(u),o(l.name,e[u],l.capture))}function _e(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=x(c);ye(a,u,c,f,!0)||ye(a,s,c,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[gt(t)]:Array.isArray(t)?$e(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function $e(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=$e(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(f[u]=gt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?be(c)?f[u]=gt(c.text+a):""!==a&&f.push(gt(a)):be(a)&&be(c)?f[u]=gt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Ae(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),kt(!0))}function Ae(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(xe)&&delete n[c];return n}function xe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function je(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Pe(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=Se(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),z(o,"$stable",a),z(o,"$key",s),z(o,"$hasNormal",i),o}function Pe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Se(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Ce(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=C(C({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Me(t){return Wt(this.$options,"filters",t,!0)||T}function De(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=V.keyCodes[e]||n;return o&&r&&!V.keyCodes[e]?De(o,r):i?De(i,t):r?x(r)!==e:void 0}function Te(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=M(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=x(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Fe(r,"__static__"+t,!1),r)}function Re(t,e,n){return Fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Fe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(f(e)){var n=t.on=t.on?C({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Le(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function ze(t){t._o=Re,t._n=v,t._s=d,t._l=Ee,t._t=Ce,t._q=N,t._i=R,t._m=Ne,t._f=Me,t._k=Ie,t._b=Te,t._v=gt,t._e=yt,t._u=Ve,t._g=Be,t._d=Le,t._p=He}function We(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Ae(c.inject,o),this.slots=function(){return u.$slots||je(t.scopedSlots,u.$slots=ke(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return je(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=je(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,l)}}function Ke(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=Kt(f,c,e||n);else o(r.attrs)&&Xe(u,r.attrs),o(r.props)&&Xe(u,r.props);var l=new We(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof vt)return Ge(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Ge(h[v],r,l.parent,s,l);return d}}function Ge(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Xe(t,e){for(var n in e)t[O(n)]=e[n]}ze(We.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var r=t.componentInstance=qe(t,An);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Pn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Cn(e,!0):e.$destroy())}},Qe=Object.keys(Je);function Ye(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return dn(f,e,n,a,s);e=e||{},hr(t),o(e.model)&&en(t.options,e);var l=_e(e,t,s);if(i(t.options.functional))return Ke(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Qe.length;n++){var r=Qe[n],o=e[r],i=Je[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Wt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Ye(u,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&un(n),a):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=ke(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function pn(t){ze(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=je(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Yt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=F(function(n){t.resolved=hn(n,e),s?a.length=0:l(!0)}),d=F(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=hn(v.error,e)),o(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function _n(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||_n(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function $n(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){fn=t,ve(e,n||{},mn,bn,$n,t),fn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?E(n):n;for(var r=E(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)qt(n[i],e,r,e,o)}return e}}var An=null;function kn(t){var e=An;return An=t,function(){An=e}}function xn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function jn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=kn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Kt(h,d,e,t)}kt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=ke(i,o.context),t.$forceUpdate())}function Sn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,Sn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Mn(t,"activated")}}function Cn(t,e){if((!e||(t._directInactive=!0,!Sn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Dn=[],In=[],Tn={},Nn=!1,Rn=!1,Fn=0;function Un(){Fn=Dn.length=In.length=0,Tn={},Nn=Rn=!1}var Bn=Date.now;if(J&&!Z){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Vn.now()})}function Ln(){var t,e;for(Bn(),Rn=!0,Dn.sort(function(t,e){return t.id-e.id}),Fn=0;Fn<Dn.length;Fn++)t=Dn[Fn],t.before&&t.before(),e=t.id,Tn[e]=null,t.run();var n=In.slice(),r=Dn.slice();Un(),Wn(n),Hn(r),it&&V.devtools&&it.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function zn(t){t._inactive=!1,In.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Kn(t){var e=t.id;if(null==Tn[e]){if(Tn[e]=!0,Rn){var n=Dn.length-1;while(n>Fn&&Dn[n].id>t.id)n--;Dn.splice(n+1,0,t)}else Dn.push(t);Nn||(Nn=!0,ce(Ln))}}var Gn=0,Xn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Yt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Yt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:D,set:D};function Qn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):St(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||kt(!1);var a=function(i){o.push(i);var a=Kt(i,e,n,t);Et(r,i,a),i in t||Qn(t,"_props",i)};for(var s in e)a(s);kt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||H(i)||Qn(t,"_data",i)}St(e,!0)}function tr(t,e){ht();try{return t.call(e,e)}catch(no){return Yt(no,e,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Xn(t,a||D,D,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Jn.get=r?or(e):ir(n),Jn.set=D):(Jn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):D,Jn.set=n.set||D),Object.defineProperty(t,e,Jn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:S(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ur(t,n,r[o]);else ur(t,n,r)}}function ur(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ct,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return ur(r,t,e,n);n=n||{},n.user=!0;var o=new Xn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Yt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=zt(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,xn(e),gn(e),cn(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Yn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&C(t.extendOptions,o),e=t.options=zt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function _r(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=zt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=zt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,U.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Qn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function $r(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Ar(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&kr(n,i,r,o)}}}function kr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(vr),cr(vr),On(vr),jn(vr),pn(vr);var xr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:xr,exclude:xr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)kr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Ar(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){Ar(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&kr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Pr={KeepAlive:jr};function Sr(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:C,mergeOptions:zt,defineReactive:Et},t.set=Ct,t.delete=Mt,t.nextTick=ce,t.observable=function(t){return St(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Pr),_r(t),yr(t),gr(t),$r(t)}Sr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:We}),vr.version="2.6.10";var Er="[object Array]",Cr="[object Object]";function Mr(t,e){var n={};return Dr(t,e),Ir(t,e,"",n),n}function Dr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Cr&&r==Cr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Dr(i,e[o])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Dr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Cr)if(i!=Cr||Object.keys(t).length<Object.keys(e).length)Tr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Er&&s!=Cr)i!=e[o]&&Tr(r,(""==n?"":n+".")+o,i);else if(s==Er)u!=Er?Tr(r,(""==n?"":n+".")+o,i):i.length<a.length?Tr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Cr)if(u!=Cr||Object.keys(i).length<Object.keys(a).length)Tr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Er?i!=Er?Tr(r,n,t):t.length<e.length?Tr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Tr(r,n,t)}}function Tr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Fr(t){return Dn.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!Fr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Yt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Br(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Br(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Mr(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function Lr(){}function Hr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Lr),t.$options.render||(t.$options.render=Lr),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Xn(t,r,D,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function zr(t,e){return o(t)||o(e)?Wr(t,Kr(e)):""}function Wr(t,e){return t?e?t+" "+e:t:e||""}function Kr(t){return Array.isArray(t)?Gr(t):u(t)?Xr(t):"string"===typeof t?t:""}function Gr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Kr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Jr=$(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Qr(t){return Array.isArray(t)?M(t):"string"===typeof t?Jr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:E(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return qr(e||this,t)},t.prototype.__get_class=function(t,e){return zr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Qr(t),r=e?C(e,n):n;return Object.keys(r).map(function(t){return x(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Vr,vr.prototype.$mount=function(t,e){return Hr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6b15":function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("877e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=zt,e.createPage=Zt,e.createComponent=te,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function p(t){return"function"===typeof t}function h(t){return"string"===typeof t}function d(t){return"[object Object]"===f.call(t)}function v(t,e){return l.call(t,e)}function _(){}function y(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var g=/-(\w)/g,m=y(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),b=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,$=/^create|Manager$/,w=/^on/;function O(t){return $.test(t)}function A(t){return b.test(t)}function k(t){return w.test(t)}function x(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function j(t){return!(O(t)||A(t)||k(t))}function P(t,e){return j(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return p(t.success)||p(t.fail)||p(t.complete)?e.apply(void 0,[t].concat(r)):x(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var S=1e-4,E=750,C=!1,M=0,D=0;function I(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;M=r,D=n,C="ios"===e}function T(t,e){if(0===M&&I(),t=Number(t),0===t)return 0;var n=t/E*(e||M);return n<0&&(n=-n),n=Math.floor(n+S),0===n?1!==D&&C?.5:1:t<0?-n:n}var N={},R=[],F=[],U=["success","fail","cancel","complete"];function B(t,e,n){return function(r){return e(L(t,r,n))}}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(d(e)){var i=!0===o?e:{};for(var a in p(n)&&(n=n(e,i)||{}),e)if(v(n,a)){var s=n[a];p(s)&&(s=s(e[a],e,i)),s?h(s)?i[s]=e[a]:d(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==U.indexOf(a)?i[a]=B(t,e[a],r):o||(i[a]=e[a]);return i}return p(e)&&(e=B(t,e,r)),e}function L(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(N.returnValue)&&(e=N.returnValue(t,e)),V(t,e,n,{},r)}function H(t,e){if(v(N,t)){var n=N[t];return n?function(e,r){var o=n;p(n)&&(o=n(e)),e=V(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return A(t)?L(t,a,o.returnValue,O(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var z=Object.create(null),W=["subscribePush","unsubscribePush","onPush","offPush","share"];function K(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};p(n)&&n(o),p(r)&&r(o)}}W.forEach(function(t){z[t]=K(t)});var G=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function X(t,e,n){return t[e].apply(t,n)}function J(){return X(G(),"$on",Array.prototype.slice.call(arguments))}function Q(){return X(G(),"$off",Array.prototype.slice.call(arguments))}function Y(){return X(G(),"$once",Array.prototype.slice.call(arguments))}function q(){return X(G(),"$emit",Array.prototype.slice.call(arguments))}var Z=Object.freeze({$on:J,$off:Q,$once:Y,$emit:q});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var rt=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,it=Component,at=/:/g,st=y(function(t){return m(t.replace(at,"-"))});function ut(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[st(n)].concat(o))}}}function ct(t,e){var n=e[t];e[t]=n?function(){ut(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){ut(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ct("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ct("created",t),it(t)};var ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function lt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function pt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,p(e))return!!p(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(p(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return pt(t,e)}):void 0}function ht(t,e,n){e.forEach(function(e){pt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function dt(t,e){var n;return e=e.default||e,p(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function vt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function _t(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function yt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return d(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var gt=[String,Number,Boolean,Object,Array,null];function mt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function bt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),d(r)&&r.props&&a.push(e({properties:wt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){d(t)&&t.props&&a.push(e({properties:wt(t.props,!0)}))}),a}function $t(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:mt(t)}}):d(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(d(o)){var i=o["default"];p(i)&&(i=i()),o.type=$t(e,o.type,i,n),r[e]={type:-1!==gt.indexOf(o.type)?o.type:null,value:i,observer:mt(e)}}else{var a=$t(e,o,null,n);r[e]={type:-1!==gt.indexOf(a)?a:null,observer:mt(e)}}}),r}function Ot(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},v(t,"detail")||(t.detail={}),d(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function At(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):d(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=At(t,e)}),r}function xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function jt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(xt(t)):"string"===typeof t&&v(s,t)?u.push(s[t]):u.push(t)}),u}var Pt="~",St="^";function Et(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function Ct(t){var e=this;t=Ot(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type;r.forEach(function(n){var r=n[0],i=n[1],a=r.charAt(0)===St;r=a?r.slice(1):r;var s=r.charAt(0)===Pt;r=s?r.slice(1):r,i&&Et(o,r)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!p(i))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(i.once)return;i.once=!0}i.apply(o,jt(e.$vm,t,n[1],n[2],a,r))}})})}var Mt=["onShow","onHide","onError","onPageNotFound"];function Dt(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),lt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},ht(i,Mt),i}var It=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Tt(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=Tt(n[o],e),r)return r}function Nt(t){return Behavior(t)}function Rt(){return!!this.route}function Ft(t){this.triggerEvent("__l",t)}function Ut(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Bt(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=Tt(this.$vm,r)),e||(e=this.$vm),o.parent=e}function Vt(t){return Dt(t,{mocks:It,initRefs:Ut})}var Lt=["onUniNViewMessage"];function Ht(t){var e=Vt(t);return ht(e,Lt),e}function zt(t){return App(Ht(t)),t}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=dt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:yt(c,r.default.prototype),behaviors:bt(c,Nt),properties:wt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};_t(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),vt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Bt,__e:Ct}};return n?f:[f,u]}function Kt(t){return Wt(t,{isPage:Rt,initRelation:Ft})}function Gt(t){var e=Kt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Xt=["onShow","onHide","onUnload"];function Jt(t,e){var n=e.isPage,r=e.initRelation,o=Gt(t,{isPage:n,initRelation:r});return ht(o.methods,Xt,t),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Qt(t){return Jt(t,{isPage:Rt,initRelation:Ft})}Xt.push.apply(Xt,ft);var Yt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function qt(t){var e=Qt(t);return ht(e.methods,Yt),e}function Zt(t){return Component(qt(t))}function te(t){return Component(Gt(t))}R.forEach(function(t){N[t]=!1}),F.forEach(function(t){var e=N[t]&&N[t].name?N[t].name:t;wx.canIUse(e)||(N[t]=!1)});var ee={};ee.upx2px=T,Object.keys(Z).forEach(function(t){ee[t]=Z[t]}),Object.keys(rt).forEach(function(t){ee[t]=P(t,rt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(N,t))&&(ee[t]=P(t,H(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ee,t.UniEmitter=Z),wx.createApp=zt,wx.createPage=Zt,wx.createComponent=te;var ne=ee,re=ne;e.default=re}).call(this,n("c8ba"))},7886:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("5a0a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d3cc:function(t,e,n){"use strict";(function(t){n("ff35");var e=o(n("66fd")),r=o(n("e77f"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,r.default.mpType="app";var s=new e.default(i({},r.default));t(s).$mount()}).call(this,n("6e42")["createApp"])},e55f:function(t,e,n){"use strict";t.exports={error:"",check:function(t,e){for(var n=0;n<e.length;n++){if(!e[n].checkType)return!0;if(!e[n].name)return!0;if(!e[n].errorMsg)return!0;if(!t[e[n].name])return this.error=e[n].errorMsg,!1;switch(e[n].checkType){case"string":var r=new RegExp(".{"+e[n].checkRule+"}");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[n].checkRule+"}$");if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[n].name]))return this.error=e[n].errorMsg,!1;var o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;o=e[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),t[e[n].name]>o[1]||t[e[n].name]<o[0])return this.error=e[n].errorMsg,!1;break;case"same":if(t[e[n].name]!=e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"notsame":if(t[e[n].name]==e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"reg":r=new RegExp(e[n].checkRule);if(!r.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"in":if(-1==e[n].checkRule.indexOf(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"notnull":if(null==t[e[n].name]||t[e[n].name].length<1)return this.error=e[n].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}},e9f6:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("931e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f35c:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("ddaa"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f56f:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("06de"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fa49:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("1fa1"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fbe8:function(t,e,n){"use strict";(function(t){n("ff35");r(n("66fd"));var e=r(n("b175"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ff35:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "3a1a": function a1a(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "50d1": function d1(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  "597b": function b(t, n, e) {},
  "5dd0": function dd0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("50d1"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = r.a;
  },
  8500: function _(t, n, e) {
    "use strict";

    var u = e("597b"),
        r = e.n(u);
    r.a;
  },
  c727: function c727(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("3a1a"),
        r = e("5dd0");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("8500");
    var c = e("2877"),
        o = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c727"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "14d0": function d0(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "c727"));
    },
        o = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.value = "";
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = o;
  },
  "6a55": function a55(t, n, e) {
    "use strict";

    var u = e("c741"),
        o = e.n(u);
    o.a;
  },
  "72b4": function b4(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("ba83"),
        o = e("8b6e");

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    e("6a55");
    var a = e("2877"),
        r = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  "8b6e": function b6e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("14d0"),
        o = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = o.a;
  },
  ba83: function ba83(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  c741: function c741(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("72b4"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'graceUI/components/graceLoading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'graceUI/components/graceLoading.js';

define('graceUI/components/graceLoading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["graceUI/components/graceLoading"], {
  "051d": function d(e, n, t) {
    "use strict";

    var a = function a() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        u = [];

    t.d(n, "a", function () {
      return a;
    }), t.d(n, "b", function () {
      return u;
    });
  },
  "0a79": function a79(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("051d"),
        u = t("3cde");

    for (var r in u) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(r);
    }

    t("f485");
    var o = t("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "3cde": function cde(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("727e"),
        u = t.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "727e": function e(_e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      name: "graceLoading",
      props: {
        loadingType: {
          type: Number,
          default: 0
        },
        loadingText: {
          type: Array,
          default: function _default() {
            return ["上拉加载更多", "加载中...", "已经加载全部数据"];
          }
        },
        show: {
          type: Boolean,
          default: !0
        }
      }
    };
    n.default = a;
  },
  8968: function _(e, n, t) {},
  f485: function f485(e, n, t) {
    "use strict";

    var a = t("8968"),
        u = t.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['graceUI/components/graceLoading-create-component', {
  'graceUI/components/graceLoading-create-component': function graceUIComponentsGraceLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0a79"));
  }
}, [['graceUI/components/graceLoading-create-component']]]);
});
require('graceUI/components/graceLoading.js');
__wxRoute = 'graceUI/components/graceNumberBox';__wxRouteBegin = true;__wxAppCurrentFile__ = 'graceUI/components/graceNumberBox.js';

define('graceUI/components/graceNumberBox.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["graceUI/components/graceNumberBox"], {
  2531: function _(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("45e7"),
        i = u.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        u.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  "45e7": function e7(t, e, u) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = {
      name: "graceNumberBox",
      props: {
        disabled: {
          type: Boolean,
          default: !1
        },
        value: {
          type: Number,
          default: 0
        },
        index: {
          type: Number,
          default: 0
        },
        maxNum: {
          type: Number,
          default: 20
        },
        minNum: {
          type: Number,
          default: 1
        }
      },
      data: function data() {
        return {
          inputNumber: this.value
        };
      },
      watch: {
        value: function value(t) {
          this.inputNumber = t;
        },
        inputNumber: function inputNumber(t) {
          t > this.maxNum && (t = this.maxNum, this.inputNumber = t), t < this.minNum && (t = this.minNum, this.inputNumber = t, console.log(11, " at graceUI\\components\\graceNumberBox.vue:44")), this.$emit("change", [t, this.index]);
        }
      },
      methods: {
        add: function add() {
          var t = this.inputNumber + 1;
          this.inputNumber = Number(t);
        },
        reduce: function reduce() {
          var t = this.inputNumber - 1;
          this.inputNumber = t;
        },
        blur: function blur(t) {
          this.inputNumber = Number(t.detail.value);
        }
      }
    };
    e.default = n;
  },
  4706: function _(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("96f9"),
        i = u("2531");

    for (var r in i) {
      "default" !== r && function (t) {
        u.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    u("b447");
    var a = u("2877"),
        c = Object(a["a"])(i["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "96f9": function f9(t, e, u) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    u.d(e, "a", function () {
      return n;
    }), u.d(e, "b", function () {
      return i;
    });
  },
  b447: function b447(t, e, u) {
    "use strict";

    var n = u("e77c"),
        i = u.n(n);
    i.a;
  },
  e77c: function e77c(t, e, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['graceUI/components/graceNumberBox-create-component', {
  'graceUI/components/graceNumberBox-create-component': function graceUIComponentsGraceNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4706"));
  }
}, [['graceUI/components/graceNumberBox-create-component']]]);
});
require('graceUI/components/graceNumberBox.js');

__wxRoute = 'pages/tabbar/tabbar0';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar0.js';

define('pages/tabbar/tabbar0.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar0"],{2511:function(a,e,t){"use strict";var n=t("c5e2"),i=t.n(n);i.a},"4fce":function(a,e,t){"use strict";(function(a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return t.e("graceUI/components/graceLoading").then(t.bind(null,"0a79"))},i=1,o={data:function(){return{placeholder:"土豆",search:"",loadingType:0,isEnd:!1,loading:"",check:"1",demoDate:[{img:"../../static/img/pingguo1.jpg",title:"好看又好吃的烟台苹果5.0斤一箱",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"39.5",danwei:"箱",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tuji.jpg",title:"放养土鸡，绿色无公害养殖！",youxuan:!1,arr:["准时发货"],jiage:"56",danwei:"只",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou2.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/pingguo2.jpg",title:"特价包邮正宗红富士苹果",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"5.00",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/lajiao.jpg",title:"超辣干辣椒，5斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"12.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}],checkData:[{index:0,text:"辣椒",checkitem:!1},{index:1,text:"苹果",checkitem:!1},{index:2,text:"鸡",checkitem:!1},{index:3,text:"羊",checkitem:!1},{index:4,text:"土豆",checkitem:!1},{index:5,text:"草莓",checkitem:!1},{index:6,text:"柑橘",checkitem:!1},{index:7,text:"大豆",checkitem:!1}],data:[{name:"辣椒",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"辣椒",tips:["每天采购","认证"],huoyuan:"全国",shouhuo:"山东省济南市天桥区",shuliang:"1000斤"},{name:"土豆",tips:["按月采购","认证"],huoyuan:"山东省",shouhuo:"山东省济宁市邹城区",shuliang:"1200斤"},{name:"大豆",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"1000斤"},{name:"鸡",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"600只"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"4000斤"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"柑橘",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"羊",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"200头"}]}},onShow:function(){i=1,this.loading=!1,this.loadingType=0,this.isEnd=!1},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},onLoad:function(){var e=a.getStorageSync("LOGIN_FLAG");0==e.length&&a.navigateTo({url:"../login/login"})},components:{graceLoading:n},methods:{details:function(e){var t=e.currentTarget.dataset.index,n=JSON.stringify(t);a.navigateTo({url:"../product/product?data="+n})},searchData:function(){if(0!=this.search.length){console.log(this.search," at pages\\tabbar\\tabbar0.vue:350");var e={serach:this.search};e=JSON.stringify(e),a.navigateTo({url:"../serach/serach?serach="+e})}else{var t=this.placeholder;e={serach:t};e=JSON.stringify(e);plus.nativeObj.View.getViewById("icon");a.navigateTo({url:"../serach/serach?serach="+e})}},chaizhai:function(){a.navigateTo({url:"../chaizhai/chaizhai"})},loadMoreFunc:function(){if(i>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var a=this;setTimeout(function(){a.loading=!1;var e=a.getArrRandomly(a.demoDate);a.demoDate=a.demoDate.concat(e),i++,a.loadingType=0},1e3)},getArrRandomly:function(a){for(var e=a.length,t=0;t<e;t++){var n=Math.floor(Math.random()*(e-t)),i=a[n];a[n]=a[t],a[t]=i}return a},change:function(a){this.checkData.forEach(function(a){a.checkitem=!1});var e=a.currentTarget.dataset.index;this.checkData[e].checkitem=!0}}};e.default=o}).call(this,t("6e42")["default"])},"844b":function(a,e,t){"use strict";var n=function(){var a=this,e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(){a.check="1"},e.e1=function(){a.check="2"})},i=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return i})},c5e2:function(a,e,t){},dda7:function(a,e,t){"use strict";t.r(e);var n=t("4fce"),i=t.n(n);for(var o in n)"default"!==o&&function(a){t.d(e,a,function(){return n[a]})}(o);e["default"]=i.a},ddaa:function(a,e,t){"use strict";t.r(e);var n=t("844b"),i=t("dda7");for(var o in i)"default"!==o&&function(a){t.d(e,a,function(){return i[a]})}(o);t("2511");var u=t("2877"),c=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["f35c","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar0.js');
__wxRoute = 'pages/tabbar/tabbar3';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar3.js';

define('pages/tabbar/tabbar3.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar3"],{1058:function(a,e,n){},6847:function(a,e,n){"use strict";(function(a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{check:"1",dianData:[{name:"体验店1",guanzu:2e3,image:[],interval:8e3,phone:"15552123897",place:"山东省聊城市东昌府区",jiameng:!1},{name:"体验店2",guanzu:1200,image:[],interval:5e3,phone:"17852261511",place:"山东省济南市",jiameng:!1},{name:"体验店3",guanzu:800,image:[],interval:6e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1},{name:"体验店4",guanzu:800,image:[],interval:9e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1},{name:"体验店5",guanzu:800,image:[],interval:4e3,phone:"1506970825",place:"山东省青岛市"},{name:"体验店6",guanzu:800,image:[],interval:7e3,phone:"1506970825",place:"山东省青岛市",jiameng:!1}]}},methods:{jiameng:function(a){var e=a.currentTarget.dataset.index;this.dianData[e].jiameng=!this.dianData[e].jiameng},guanzu:function(){a.showToast({title:"关注成功"})},toShangPin:function(e){console.log(e," at pages\\tabbar\\tabbar3.vue:112");var n=e.currentTarget.dataset.item,t=JSON.stringify(this.dianData[n]);a.navigateTo({url:"../waterfall/waterfall?data="+t})}}};e.default=n}).call(this,n("6e42")["default"])},"763e":function(a,e,n){"use strict";var t=function(){var a=this,e=a.$createElement;a._self._c},i=[];n.d(e,"a",function(){return t}),n.d(e,"b",function(){return i})},"877e":function(a,e,n){"use strict";n.r(e);var t=n("763e"),i=n("a172");for(var u in i)"default"!==u&&function(a){n.d(e,a,function(){return i[a]})}(u);n("e140");var r=n("2877"),o=Object(r["a"])(i["default"],t["a"],t["b"],!1,null,null,null);e["default"]=o.exports},a172:function(a,e,n){"use strict";n.r(e);var t=n("6847"),i=n.n(t);for(var u in t)"default"!==u&&function(a){n.d(e,a,function(){return t[a]})}(u);e["default"]=i.a},e140:function(a,e,n){"use strict";var t=n("1058"),i=n.n(t);i.a}},[["6b15","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar3.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"1fa1":function(t,e,n){"use strict";n.r(e);var i=n("9fbe"),o=n("b270");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("5ac9");var c=n("2877"),u=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"5ac9":function(t,e,n){"use strict";var i=n("bc31"),o=n.n(i);o.a},"9fbe":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b270:function(t,e,n){"use strict";n.r(e);var i=n("fd67"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},bc31:function(t,e,n){},fd67:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("graceUI/components/graceNumberBox").then(n.bind(null,"4706"))},o={data:function(){return{product:{name:"",logo:"../../static/logo.png",imgs:[{imgUrl:"../../static/img/banner1.jpg"},{imgUrl:"../../static/img/banner2.jpg"},{imgUrl:"../../static/img/banner3.jpg"}],price:3188,priceMarket:3200,image:""},active:1,attrIsShow:!1,attrData:null,colorTips:[{name:"品种1",value:"灰色",checked:!1},{name:"品种2",value:"银色",checked:!1}],typeTips:[{name:"10斤",value:"10斤",checked:!1},{name:"20斤",value:"20斤",checked:!1},{name:"30斤",value:"30斤",checked:!1}],buyNum:1}},onLoad:function(t){var e=JSON.parse(t.data);console.log(e," at pages\\product\\product.vue:162"),this.product.name=e.title,this.product.price=e.jiage,this.product.image=e.img},methods:{share:function(){t.showToast({title:"分享",icon:"none"})},showComments:function(){this.active=2},showInfo:function(){this.active=1},home:function(){t.switchTab({url:"../index/index"})},buyNow:function(){this.attrIsShow=!0},attrSubmit:function(e){this.attrData=e.detail.value,console.log(this.attrData," at pages\\product\\product.vue:193"),this.attrIsShow=!1,t.showToast({title:"购买",icon:"none"})},closeAttr:function(){this.attrIsShow=!1},colorChange:function(t){for(var e=t.detail.value,n=0;n<this.colorTips.length;n++)-1!=e.indexOf(this.colorTips[n].value+"")?this.colorTips[n].checked=!0:this.colorTips[n].checked=!1;this.colorTips=this.colorTips},typeChange:function(t){for(var e=t.detail.value,n=0;n<this.typeTips.length;n++)-1!=e.indexOf(this.typeTips[n].value+"")?this.typeTips[n].checked=!0:this.typeTips[n].checked=!1;this.typeTips=this.typeTips},buyNumChange:function(t){this.buyNum=t[0]}},components:{graceNumberBox:i}};e.default=o}).call(this,n("6e42")["default"])}},[["fa49","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/waterfall/waterfall';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/waterfall/waterfall.js';

define('pages/waterfall/waterfall.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waterfall/waterfall"],{"5d3f":function(t,n,e){"use strict";e.r(n);var a=e("5de1"),i=e("bc6f");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("d756");var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"5de1":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},bc6f:function(t,n,e){"use strict";e.r(n);var a=e("dd38"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},d756:function(t,n,e){"use strict";var a=e("ea5c"),i=e.n(a);i.a},dd38:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i=1,o=e("2d3a"),u=o.products,r=function(){return e.e("graceUI/components/graceLoading").then(e.bind(null,"0a79"))},c={data:function(){return{loading:!1,loadingType:0,isEnd:!1,dianData:{name:"体验店",phone:"1234567899"},productList:[[],[]]}},onLoad:function(t){a=this,this.getList(),this.dianData=JSON.parse(t.data)},onReachBottom:function(){this.getList()},onBackPress:function(){this.loadingType=0,this.isEnd=!1,i=1},methods:{guanzu:function(){t.showToast({title:"关注成功"})},getList:function(){if(i>3)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1,setTimeout(function(){var t=a.productList[0],n=a.productList[1];u=o.getArrRandomly(u);for(var e=0;e<u.length;e++)e%2==0?t.push(u[e]):n.push(u[e]);a.productList=[t,n],a.loadingType=0,i++},1e3)}},components:{graceLoading:r}};n.default=c}).call(this,e("6e42")["default"])},ea5c:function(t,n,e){}},[["12aa","common/runtime","common/vendor"]]]);
});
require('pages/waterfall/waterfall.js');
__wxRoute = 'pages/tabbar/tabbar1';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar1.js';

define('pages/tabbar/tabbar1.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar1"],{2652:function(e,t,a){"use strict";a.r(t);var n=a("a876"),u=a("7a3b");for(var o in u)"default"!==o&&function(e){a.d(t,e,function(){return u[e]})}(o);a("da2b");var i=a("2877"),c=Object(i["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"7a3b":function(e,t,a){"use strict";a.r(t);var n=a("e715"),u=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=u.a},"7ab4":function(e,t,a){},a876:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return u})},da2b:function(e,t,a){"use strict";var n=a("7ab4"),u=a.n(n);u.a},e715:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{checkData:[{index:0,text:"辣椒",checkitem:!1},{index:1,text:"苹果",checkitem:!1},{index:2,text:"鸡",checkitem:!1},{index:3,text:"羊",checkitem:!1},{index:4,text:"土豆",checkitem:!1},{index:5,text:"草莓",checkitem:!1},{index:6,text:"柑橘",checkitem:!1},{index:7,text:"大豆",checkitem:!1}],data:[{name:"辣椒",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"辣椒",tips:["每天采购","认证"],huoyuan:"全国",shouhuo:"山东省济南市天桥区",shuliang:"1000斤"},{name:"土豆",tips:["按月采购","认证"],huoyuan:"山东省",shouhuo:"山东省济宁市邹城区",shuliang:"1200斤"},{name:"大豆",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"1000斤"},{name:"鸡",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"600只"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"4000斤"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"柑橘",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"羊",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"200头"}]}},onShow:function(){},methods:{statechange:function(e){console.log("live-player code:",e.detail.code," at pages\\tabbar\\tabbar1.vue:205")},error:function(e){console.error("live-player error:",e.detail.errMsg," at pages\\tabbar\\tabbar1.vue:208")},change:function(e){this.checkData.forEach(function(e){e.checkitem=!1});var t=e.currentTarget.dataset.index;this.checkData[t].checkitem=!0}}};t.default=n}},[["337b","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar1.js');
__wxRoute = 'pages/serach/serach';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/serach/serach.js';

define('pages/serach/serach.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serach/serach","graceUI/components/graceLoading"],{"051d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"0530":function(e,t,n){"use strict";var a=n("e5ee"),i=n.n(a);i.a},"0a48":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"0a79":function(e,t,n){"use strict";n.r(t);var a=n("051d"),i=n("3cde");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("f485");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"207f":function(e,t,n){"use strict";n.r(t);var a=n("f929"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},"3cde":function(e,t,n){"use strict";n.r(t);var a=n("727e"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},"727e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"graceLoading",props:{loadingType:{type:Number,default:0},loadingText:{type:Array,default:function(){return["上拉加载更多","加载中...","已经加载全部数据"]}},show:{type:Boolean,default:!0}}};t.default=a},8968:function(e,t,n){},b175:function(e,t,n){"use strict";n.r(t);var a=n("0a48"),i=n("207f");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("0530");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},e5ee:function(e,t,n){},f485:function(e,t,n){"use strict";var a=n("8968"),i=n.n(a);i.a},f929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("0a79"));function a(e){return e&&e.__esModule?e:{default:e}}var i=1,u={data:function(){return{value:"",demoDate:[{img:"../../static/img/tudou1.jpg",title:"新鲜小土豆农家自种",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"22.8",danwei:"10斤",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tudou2.jpg",title:"新鲜大土豆",youxuan:!1,arr:["准时发货"],jiage:"2.00",danwei:"斤",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou3.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/tudou4.jpg",title:"农家自种土豆，非转基因",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"2.50",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/tudou5.jpg",title:"大土豆新鲜，10斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"20.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}]}},onLoad:function(e){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.close()},250),e=JSON.parse(e.serach),this.value=e.serach},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},methods:{search:function(){},loadMoreFunc:function(){if(i>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var e=this;setTimeout(function(){e.loading=!1;var t=e.getArrRandomly(e.demoDate);e.demoDate=e.demoDate.concat(t),i++,e.loadingType=0},1e3)},getArrRandomly:function(e){for(var t=e.length,n=0;n<t;n++){var a=Math.floor(Math.random()*(t-n)),i=e[a];e[a]=e[n],e[n]=i}return e}}};t.default=u}},[["fbe8","common/runtime","common/vendor"]]]);
});
require('pages/serach/serach.js');
__wxRoute = 'pages/chaizhai/chaizhai';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chaizhai/chaizhai.js';

define('pages/chaizhai/chaizhai.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chaizhai/chaizhai"],{1505:function(t,e,i){"use strict";i.r(e);var a=i("ecfa"),n=i("7ad1");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("98d0");var o=i("2877"),m=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=m.exports},4049:function(t,e,i){},"7ad1":function(t,e,i){"use strict";i.r(e);var a=i("eb00"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a},"98d0":function(t,e,i){"use strict";var a=i("4049"),n=i.n(a);n.a},eb00:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{value:"草莓",listShow:"true",listData:[{icon:"../../static/img/caomei1.jpg",name:"**采摘园",place:"山东省聊城市东昌府区",time1:"2019年5月11日",time2:"2019年6月1日"},{icon:"../../static/img/caomei2.jpg",name:"***采摘园",place:"山东省济南市长清区",time1:"2019年5月21日",time2:"2019年6月11日"},{icon:"../../static/img/caomei3.jpg",name:"**采摘园",place:"山东省青岛市黄岛区",time1:"2019年6月17日",time2:"2019年6月30日"},{icon:"../../static/img/caomei4.jpg",name:"**采摘园",place:"山东省聊城市阳谷县",time1:"2019年6月10日",time2:"2019年6月15日"},{icon:"../../static/img/caomei5.jpg",name:"**采摘园",place:"山东省聊城市东昌府区",time1:"2019年5月13日",time2:"2019年5月21日"},{icon:"../../static/img/caomei6.jpg",name:"**采摘园",place:"山东省青岛市黄岛区",time1:"2019年5月18日",time2:"2019年6月1日"},{icon:"../../static/img/caomei2.jpg",name:"***采摘园",place:"山东省济南市长清区",time1:"2019年5月17日",time2:"2019年5月21日"},{icon:"../../static/img/caomei1.jpg",name:"**采摘园",place:"山东省聊城市阳谷县",time1:"2019年5月19日",time2:"2019年5月28日"}]}},onLoad:function(){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.close()},250)},methods:{search:function(){"草莓"==this.value?this.listShow=!0:this.listShow=!1}}};e.default=a},ecfa:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}},[["558c","common/runtime","common/vendor"]]]);
});
require('pages/chaizhai/chaizhai.js');
__wxRoute = 'pages/checkId/checkId';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/checkId/checkId.js';

define('pages/checkId/checkId.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/checkId/checkId"],{"06de":function(t,e,n){"use strict";n.r(e);var a=n("7315"),i=n("e7eb");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("de0f");var u=n("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"12ae":function(t,e,n){},7315:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},bf2a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{active:[!1,!1,!1],index:null,identity:["普通用户","农民","经销商"],name:""}},methods:{change:function(t){var e=t.currentTarget.dataset.index;this.active=[!1,!1,!1],this.active[e]=!0,this.index=e},submit:function(){if(null==this.index)t.showToast({title:"请选择用户",icon:"none",duration:1500});else{var e=t.getStorageSync("USER_INFO");e.identity=this.identity[this.index],e.name=this.name,console.log(JSON.stringify(e)," at pages\\checkId\\checkId.vue:50"),t.setStorageSync("USER_INFO",e),t.switchTab({url:"../tabbar/tabbar0"})}}}};e.default=n}).call(this,n("6e42")["default"])},de0f:function(t,e,n){"use strict";var a=n("12ae"),i=n.n(a);i.a},e7eb:function(t,e,n){"use strict";n.r(e);var a=n("bf2a"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a}},[["f56f","common/runtime","common/vendor"]]]);
});
require('pages/checkId/checkId.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1589:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"52fe":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("e55f"),i=function(){return e.e("components/m-input").then(e.bind(null,"72b4"))},s={data:function(){return{pnpre:"86",pnpres:["86","01","11","26","520"],phoneno:"",password1:"",password2:""}},components:{mInput:i},onLoad:function(){},methods:{loginWithWx:function(){n.showToast({title:"请完善登录功能",icon:"none"})},changePre:function(n){this.pnpre=this.pnpres[n.detail.value]},loginNow:function(t){var e=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;if(!e.test(this.phoneno))return n.showToast({title:"请正确填写手机号码",icon:"none"}),!1;var i=[{name:"pn",checkType:"phoneno",errorMsg:"请填写正确的手机号"}],s=t.detail.value;o.check(s,i);0!=this.password1.length&&0!=this.password2?this.password1==this.password2?this.reg():n.showToast({title:"两次密码不一致",icon:"none",duration:1500}):n.showToast({title:"请输入密码",icon:"none",duration:1500})},getVCode:function(){"获取验证码"!=this.vcodeBtnName&&"重新发送"!=this.vcodeBtnName||(this.vcodeBtnName="发送中...",n.showToast({title:"短信已发送，请注意查收",icon:"none"}),this.countNum=120,this.countDownTimer=setInterval(function(){this.countDown()}.bind(this),1e3))},countDown:function(){if(this.countNum<1)return clearInterval(this.countDownTimer),void(this.vcodeBtnName="重新发送");this.countNum--,this.vcodeBtnName=this.countNum+"秒重发"},reg:function(){var t={phone:this.phoneno,password:this.password1,userId:0};n.setStorageSync("LOGIN_FLAG","true"),n.setStorageSync("USER_INFO",t),n.navigateTo({url:"../checkId/checkId"})}}};t.default=s}).call(this,e("6e42")["default"])},"5b0f":function(n,t,e){"use strict";e.r(t);var o=e("52fe"),i=e.n(o);for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);t["default"]=i.a},9501:function(n,t,e){"use strict";var o=e("d4d4"),i=e.n(o);i.a},d4d4:function(n,t,e){},e42f:function(n,t,e){"use strict";e.r(t);var o=e("1589"),i=e("5b0f");for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);e("9501");var r=e("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports}},[["5c34","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"11c7":function(n,t,e){"use strict";var o=e("c3f1"),r=e.n(o);r.a},2772:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/m-input").then(e.bind(null,"72b4"))},r=e("e55f"),i={data:function(){return{pnpre:"86",pnpres:["86","01","11","26","520"],phoneno:"",password1:""}},components:{mInput:o},onShow:function(){},methods:{changePre:function(n){this.pnpre=this.pnpres[n.detail.value]},loginNow:function(t){var e=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;if(!e.test(this.phoneno))return n.showToast({title:"请正确填写手机号码",icon:"none"}),!1;if(0!=this.password1.length){var o=[{name:"pn",checkType:"phoneno",errorMsg:"请填写正确的手机号"}],i=t.detail.value,a=r.check(i,o);if(a){var c=n.getStorageSync("USER_INFO");this.password1==c.password?(n.setStorageSync("LOGIN_FLAG","true"),n.showToast({title:"登录成功",icon:"success",duration:1500}),setTimeout(function(){var t=n.getStorageSync("USER_INFO");0!=t.identity.length?n.switchTab({url:"../tabbar/tabbar0"}):n.navigateTo({url:"../checkId/checkId"})},1500)):n.showToast({title:"密码错误",icon:"none",duration:1500})}else n.showToast({title:r.error,icon:"none"})}else n.showToast({title:"请输入密码",icon:"none",duration:1500})},reg:function(){n.navigateTo({url:"../register/register"})}}};t.default=i}).call(this,e("6e42")["default"])},"5a0a":function(n,t,e){"use strict";e.r(t);var o=e("ce98"),r=e("bb11");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("11c7");var a=e("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},bb11:function(n,t,e){"use strict";e.r(t);var o=e("2772"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=r.a},c3f1:function(n,t,e){},ce98:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r})}},[["7886","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/tabbar/tabbar2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar2.js';

define('pages/tabbar/tabbar2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar2"],{"3f68":function(n,t,e){"use strict";var a=e("df2f"),u=e.n(a);u.a},"6ae1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(t){t&&n.navigateTo({url:t})}}};t.default=e}).call(this,e("6e42")["default"])},"6f9c":function(n,t,e){"use strict";e.r(t);var a=e("6ae1"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},"7c2f":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"931e":function(n,t,e){"use strict";e.r(t);var a=e("7c2f"),u=e("6f9c");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("3f68");var f=e("2877"),c=Object(f["a"])(u["default"],a["a"],a["b"],!1,null,"49116202",null);t["default"]=c.exports},df2f:function(n,t,e){}},[["e9f6","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar2.js');
__wxRoute = 'pages/tabbar/tabbar4';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/tabbar4.js';

define('pages/tabbar/tabbar4.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar4"],{"04a2":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{haslogin:!1,userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:0},{name:"待发货",icon:"l2.png",badge:0},{name:"待收货",icon:"l3.png",badge:0},{name:"待评价",icon:"l4.png",badge:0},{name:"我的认养",icon:"l5.png",badge:0}],severList:[[{name:"账户积分",icon:"quan.png"},{name:"我的认养",icon:"renw.png"},{name:"我的收藏",icon:"point.png"}],[{name:"意见反馈",icon:"mingxi.png"},{name:"申诉",icon:"choujiang.png"},{name:"收货地址",icon:"addr.png"},{name:"银行卡",icon:"bank.png"},{name:"设置",icon:"security.png"},{name:"在线客服",icon:"kefu.png"}]]}},onShow:function(){var e=n.getStorageSync("LOGIN_FLAG");if(0!=e.length){var t=n.getStorageSync("USER_INFO");this.userinfo=t,this.haslogin=!0}else this.haslogin=!1},methods:{init:function(){},toOrderType:function(e){n.showToast({title:this.orderTypeLise[e].name})},toPage:function(e,t){n.showToast({title:this.severList[e][t].name})},login:function(){n.navigateTo({url:"../login/login"})},register:function(){n.navigateTo({url:"../register/register"})},exit:function(){n.navigateTo({url:"../login/login"})}}};e.default=t}).call(this,t("6e42")["default"])},"1aeb":function(n,e,t){"use strict";t.r(e);var i=t("7b8f"),a=t("90db");for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);t("e635");var r=t("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"72cc":function(n,e,t){},"7b8f":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})},"90db":function(n,e,t){"use strict";t.r(e);var i=t("04a2"),a=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e["default"]=a.a},e635:function(n,e,t){"use strict";var i=t("72cc"),a=t.n(i);a.a}},[["04d8","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/tabbar4.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

