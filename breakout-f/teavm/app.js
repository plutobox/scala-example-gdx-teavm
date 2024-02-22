"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cn=f;}
function $rt_cls(cls){return Pb(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return KB(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.C.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_stecls(){return D;}
function $rt_throwableMessage(t){return AIL(t);}
function $rt_throwableCause(t){return AIQ(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ANz());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return C3();}
function $rt_setThread(t){return DX(t);}
function $rt_createException(message){return ANA(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ANB());}
function $rt_throwCCE(){$rt_throw(ANC());}
var A=Object.create(null);
var K=$rt_throw;var CP=$rt_compare;var C=$rt_nullCheck;var H=$rt_cls;var J=$rt_createArray;var AJw=$rt_isInstance;var Qo=$rt_nativeThread;var GN=$rt_suspending;var AEU=$rt_resuming;var AA3=$rt_invalidPointer;var E=$rt_s;var T=$rt_eraseClinit;var DS=$rt_imul;var By=$rt_wrapException;var B=$rt_checkBounds;var AND=$rt_checkUpperBound;var DZ=$rt_checkLowerBound;var ANE=$rt_wrapFunction0;var ANF=$rt_wrapFunction1;var ANG=$rt_wrapFunction2;var ANH=$rt_wrapFunction3;var ANI=$rt_wrapFunction4;var G=$rt_classWithoutFields;var ANJ
=$rt_createArrayFromData;var ANK=$rt_createCharArrayFromData;var ANL=$rt_createByteArrayFromData;var ANM=$rt_createShortArrayFromData;var ANN=$rt_createIntArrayFromData;var ANO=$rt_createBooleanArrayFromData;var ANP=$rt_createFloatArrayFromData;var ANQ=$rt_createDoubleArrayFromData;var ANR=$rt_createLongArrayFromData;var RP=$rt_createBooleanArray;var Fn=$rt_createByteArray;var AD1=$rt_createShortArray;var Ce=$rt_createCharArray;var Bl=$rt_createIntArray;var ZB=$rt_createLongArray;var C4=$rt_createFloatArray;var ANS
=$rt_createDoubleArray;var CP=$rt_compare;var Z=$rt_castToClass;var Dc=$rt_castToInterface;var ANT=$rt_equalDoubles;var AMe=Long_toNumber;var Ba=Long_fromInt;var ANU=Long_fromNumber;var F=Long_create;var Cb=Long_ZERO;var ANV=Long_hi;var EI=Long_lo;
function D(){this.K=null;this.$id$=0;}
function E4(b){var c,d;c=C(b);if(c.K===null)Oz(c);b=C(c.K);d=b.V;if(d===null)b.V=C3();else if(d!==C3()){d=new De;Y(d,E(0));K(d);}b=C(c.K);b.bc=b.bc+1|0;}
function CE(b){var c,d;b=C(b);if(!Fr(b)&&C(b.K).V===C3()){c=C(b.K);d=c.bc-1|0;c.bc=d;if(!d)c.V=null;Fr(b);return;}b=new GQ;Be(b);K(b);}
function AMH(b){var c,d;c=C(b);if(c.K===null)Oz(c);d=C(c.K);if(d.V===null)d.V=C3();if(C(c.K).V!==C3())ABo(c,1);else{b=C(c.K);b.bc=b.bc+1|0;}}
function Oz(b){var c;c=new Mv;c.V=C3();C(b).K=c;}
function AMn(b,c,d){var e,f,g;e=C3();f=C(b);g=f.K;if(g===null){Oz(f);DX(e);b=C(f.K);b.bc=b.bc+c|0;G2(C(d),null);return;}if(g.V===null){g.V=e;DX(e);b=C(f.K);b.bc=b.bc+c|0;G2(C(d),null);return;}if(g.b4===null)g.b4=AFI();b=g.b4;g=new OR;g.ki=e;g.kj=f;g.kg=c;g.kh=d;e=g;b.push(e);}
function AMK(b){var c,d;c=C(b);if(!Fr(c)&&C(c.K).V===C3()){b=C(c.K);d=b.bc-1|0;b.bc=d;if(d<=0){b.V=null;b=b.b4;if(b!==null&&!Hr(b)){b=new RD;b.kT=c;Wu(b);}else Fr(c);}return;}b=new GQ;Be(b);K(b);}
function Fr(a){var b,c;b=a.K;if(b===null)return 1;a:{if(b.V===null){c=b.b4;if(!(c!==null&&!Hr(c))){b=b.h$;if(b===null)break a;if(Hr(b))break a;}}return 0;}a.K=null;return 1;}
function DW(a){return Pb(a.constructor);}
function ADr(a){return Gt(a);}
function OM(a,b){return a!==b?0:1;}
function ACw(a){var b,c,d;b=Eh(C(DW(a)));c=Kn(Gt(a));d=new Q;S(d);b=C(M(d,b));Bs(b,64);M(b,c);return R(d);}
function Gt(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AFZ(a){var b,c,d;if(!AJw(a,D0)&&a.constructor.$meta.item===null){b=new Qq;Be(b);K(b);}b=AA2(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function J_(a){var b,c;b=a.K;if(!(b!==null&&b.V===C3()?1:0)){b=new GQ;Be(b);K(b);}b=C(a.K).h$;if(b===null)return;while(!Hr(b)){c=C(Dc(Xr(b),PT));if(!c.zz())Wu(c);}c=a.K;b=null;C(c).h$=b;}
function ABo(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.rr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.rX=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AMq(callback);thread.suspend(function(){try{AMn(b,c,callback);}catch($e){callback.rX($rt_exception($e));}});return null;}
var Sb=G();
function AL5(b){var c,d,e;T6();XG();VB();YI();Ui();UW();SB();Tp();Vu();ZT();Uv();V$();Z8();Yv();Zk();AAa();Zt();Tl();Sm();Z4();ZH();Su();Wf();TD();TU();XW();Us();V6();U7();Z9();AAe();XS();AAy();To();UY();Ua();AAf();c=C(ANW);c=new Nz;c.i5=0;c.m5=1;c.l9=0;c.mW=1;c.t6=E(1);c.jo=0;c.eU=(-1);c.c5=(-1);c.gT=0;c.i$=0;c.k2=0;c.kn=0;c.mq=0;c.lI=0;c.lS=0;c.iM=0;c.fu=1;c.nf=E(2);c.eU=0;c.c5=0;d=new IQ;e=new MO;d.eJ=AH_(4);GO();d.dp=ANX;d.gp=(-1);d.iO=1;d.ig=1;d.oT=DN();d.ek=E9();d.ja=E9();d.cb=Hv();d.bJ=c;d.e0=e;Yr(d);}
var Ex=G(0);
var T9=G();
var I_=G();
var SV=G();
var W_=G();
var R9=G();
var Vq=G();
var J8=G(0);
var HH=G();
var ANY=null;var ANZ=null;function ANl(){ANl=T(HH);AEu();}
function AEu(){var b,c,d,e;b=new HH;ANl();ANY=b;c=new N9;AMT();d=Z(Ig(C(AN0),H(I_)),F5);if(d===null){d=new F5;e=AN1;AN1=e+1|0;d.p_=e;DC(C(AN0),H(I_),d);}c.rc=d;ANZ=c;}
var YH=G();
var FR=G();
var LA=G(0);
var Jv=G(FR);
var Wk=G(Jv);
var FN=G(FR);
var Uf=G(FN);
var X1=G(FN);
var Ez=G();
var AN2=0;var AN3=0;var AN4=0;var AN5=0;var AN6=0;function AN7(){AN7=T(Ez);AFo();}
function AFo(){AN2=B8(C($rt_str($rt_globals.navigator.platform)),E(3));AN3=B8(C($rt_str($rt_globals.navigator.platform)),E(4));AN4=B8(C($rt_str($rt_globals.navigator.platform)),E(5));AN5=!B8(C($rt_str($rt_globals.navigator.platform)),E(6))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(7))?0:1;AN6=!B8(C($rt_str($rt_globals.navigator.platform)),E(8))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(9))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(10))?0:1;}
var KD=G(0);
var Jl=G();
var Cx=G(0);
var Y5=G(Jl);
var DH=G(0);
var Ek=G();
var Ck=G(0);
var Bx=G(0);
function Bz(){var a=this;D.call(a);a.jN=null;a.v=0;}
function Cq(a,b,c){a.jN=b;a.v=c;}
function YZ(a){return a.v;}
function AEV(a){return C(a.jN);}
var EJ=G(Bz);
var AN8=null;var AN9=null;var AN$=null;var AN_=null;function AL1(){AL1=T(EJ);AI5();}
function R5(a,b){var c=new EJ();Y1(c,a,b);return c;}
function Y1(a,b,c){AL1();Cq(a,b,c);}
function AI5(){var b,c,d,e;AN8=R5(E(11),0);AN9=R5(E(12),1);b=R5(E(13),2);AN$=b;c=J(EJ,3);d=c.data;e=AN8;d[AND(0,d)]=e;e=AN9;d[AND(1,d)]=e;d[AND(2,d)]=b;AN_=c;}
var Eq=G();
var Jn=G(0);
var GR=G(Eq);
var AOa=null;function Vu(){AOa=new Bt;}
var EQ=G(0);
var CS=G(0);
var Fc=G();
var E0=G(0);
var Br=G();
var AOb=null;function ZT(){AOb=new Bt;}
var Fu=G(Br);
var XB=G(Fu);
var F_=G(Bz);
var AOc=null;var AOd=null;var AOe=null;function AKb(){AKb=T(F_);ABA();}
function AAH(a,b){var c=new F_();Xz(c,a,b);return c;}
function Xz(a,b,c){AKb();Cq(a,b,c);}
function ABA(){var b,c,d,e;AOc=AAH(E(14),0);b=AAH(E(15),1);AOd=b;c=J(F_,2);d=c.data;e=AOc;d[AND(0,d)]=e;d[AND(1,d)]=b;AOe=c;}
var JU=G(0);
var GZ=G(0);
var En=G(0);
var Cu=G();
var YQ=G(Cu);
var JJ=G(Fc);
var FZ=G();
var AOf=null;var AOg=null;function Uv(){AOf=new Bt;AOg=new Bt;}
var T3=G();
var Sa=G();
var Rw=G(0);
var IN=G();
var Xl=G(IN);
var Vw=G(Ek);
var ND=G();
var AOh=null;function AOi(){AOi=T(ND);AGg();}
function AGg(){var b,c;AKb();b=Bl(C(C(AOe).cn()).data.length);c=b.data;AOh=b;c[B(C(AOc).v,c)]=1;c[B(C(AOd).v,c)]=2;}
var Wy=G();
var Pi=G();
var AOj=null;function AOk(){AOk=T(Pi);AC3();}
function AC3(){var b,c;b=Bl(C(Lo()).data.length);c=b.data;AOj=b;c[B(C(AOl).v,c)]=1;c[B(C(AOm).v,c)]=2;c[B(C(AOn).v,c)]=3;}
var YP=G(Cu);
var D4=G();
var Pe=G(D4);
var E$=G();
var AOo=0;var AOp=0;var AOq=0;var AOr=0;var AOs=0;function AOt(){AOt=T(E$);AKw();}
function AKw(){AOo=B8(C($rt_str($rt_globals.navigator.platform)),E(3));AOp=B8(C($rt_str($rt_globals.navigator.platform)),E(4));AOq=B8(C($rt_str($rt_globals.navigator.platform)),E(5));AOr=!B8(C($rt_str($rt_globals.navigator.platform)),E(6))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(7))?0:1;AOs=!B8(C($rt_str($rt_globals.navigator.platform)),E(8))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(9))&&!B8(C($rt_str($rt_globals.navigator.platform)),E(10))?0:1;}
var I1=G();
var Rq=G(Fu);
var AOu=null;function V$(){AOu=new Bt;}
var M$=G();
var AOv=null;function Z8(){AOv=new Bt;}
var Hu=G();
var AOw=null;var AOx=null;var AOy=null;function AOz(){AOz=T(Hu);AIT();}
function AIT(){AOw=E9();AOx=Bi();AOy=new DU;}
var JM=G();
var GE=G(D4);
var Rr=G(D4);
var CO=G(Br);
var AOA=0.0;function Zk(){AOA=0.10000000149011612;}
var Rh=G(GE);
var Tq=G(Ek);
var H6=G(0);
var Wh=G(Ek);
var U1=G();
var Kt=G();
var AOB=null;function AOC(){AOC=T(Kt);AJ0();}
function AJ0(){var b,c;b=Bl(C(Lo()).data.length);c=b.data;AOB=b;c[B(C(AOD).v,c)]=1;c[B(C(AOE).v,c)]=2;c[B(C(AOF).v,c)]=3;c[B(C(AOl).v,c)]=4;c[B(C(AOm).v,c)]=5;c[B(C(AOn).v,c)]=6;c[B(C(AOG).v,c)]=7;c[B(C(AOH).v,c)]=8;c[B(C(AOI).v,c)]=9;c[B(C(AOJ).v,c)]=10;}
var Cs=G(Bz);
var AOl=null;var AOm=null;var AOn=null;var AOG=null;var AOI=null;var AOJ=null;var AOH=null;var AOD=null;var AOE=null;var AOF=null;var AOK=null;function AGM(){AGM=T(Cs);ACY();}
function DV(a,b){var c=new Cs();WP(c,a,b);return c;}
function Lo(){AGM();return C(AOK).cn();}
function WP(a,b,c){AGM();Cq(a,b,c);}
function ACY(){var b,c,d,e;AOl=DV(E(16),0);AOm=DV(E(17),1);AOn=DV(E(18),2);AOG=DV(E(19),3);AOI=DV(E(20),4);AOJ=DV(E(21),5);AOH=DV(E(22),6);AOD=DV(E(23),7);AOE=DV(E(24),8);b=DV(E(25),9);AOF=b;c=J(Cs,10);d=c.data;e=AOl;d[AND(0,d)]=e;e=AOm;d[AND(1,d)]=e;e=AOn;d[AND(2,d)]=e;e=AOG;d[AND(3,d)]=e;e=AOI;d[AND(4,d)]=e;e=AOJ;d[AND(5,d)]=e;e=AOH;d[AND(6,d)]=e;e=AOD;d[AND(7,d)]=e;e=AOE;d[AND(8,d)]=e;d[AND(9,d)]=b;AOK=c;}
var BH=G();
var DF=G(BH);
var Vl=G(DF);
var Xd=G(DF);
var B5=G(BH);
var Dz=G(B5);
var Sg=G(Dz);
var S5=G();
var Ke=G(BH);
var Tv=G(Ke);
var Ut=G(BH);
var Wc=G(BH);
var X0=G(BH);
var Yn=G();
var IT=G(BH);
var V3=G(IT);
var TM=G(B5);
var YK=G(B5);
var Y6=G(Dz);
var Xx=G(BH);
var XE=G(Dz);
var ZN=G(B5);
var Zs=G(B5);
var UH=G(BH);
var VT=G(B5);
var VY=G(BH);
var UR=G(BH);
var V5=G(DF);
var SD=G(B5);
var ZO=G(BH);
var Xj=G(Dz);
var UL=G(DF);
var W4=G(BH);
var S6=G(B5);
var VA=G(B5);
var Mo=G();
var AOL=null;function AAa(){var b,c;b=J(Ga,24);c=b.data;c[AND(0,c)]=H(Nq);c[AND(1,c)]=H(Bo);c[AND(2,c)]=H(OJ);c[AND(3,c)]=H(Pe);c[AND(4,c)]=H(Rr);c[AND(5,c)]=H(GE);c[AND(6,c)]=H(Rh);c[AND(7,c)]=H(ER);c[AND(8,c)]=H(Oc);c[AND(9,c)]=H(Qx);c[AND(10,c)]=H(P$);c[AND(11,c)]=H(NE);c[AND(12,c)]=H(Q7);c[AND(13,c)]=H(HF);c[AND(14,c)]=H(Rg);c[AND(15,c)]=H(Pf);c[AND(16,c)]=H(Lk);c[AND(17,c)]=H(QZ);c[AND(18,c)]=H(E7);c[AND(19,c)]=H(OA);c[AND(20,c)]=H(Qu);c[AND(21,c)]=H(Ox);c[AND(22,c)]=H(NQ);c[AND(23,c)]=H(LL);AOL=b;}
var B9=G(GR);
var Cg=G(B9);
var AOM=null;var AON=null;var AOO=null;var AOP=null;var AOQ=null;var AOR=null;var AOS=null;var AOT=null;function AOU(){AOU=T(Cg);AI$();}
function AI$(){var b;AOM=C8(0.0,0.0,1.0,1.0);AON=C8(1.0,0.0,0.0,1.0);AOO=C8(0.0,1.0,0.0,1.0);b=new Rm;Qw(b);AOP=b;b=new Rl;CN(b);AOQ=b;b=new Rk;CN(b);AOR=b;b=new Rj;CN(b);AOS=b;b=new Ri;CN(b);AOT=b;}
var Ew=G(Cg);
var IH=G(Ew);
var TI=G(IH);
var YM=G(Br);
var Ju=G(B9);
var Oj=G(0);
var Du=G();
var UC=G(Du);
var Cj=G(Eq);
var SI=G(Cj);
var YL=G(Br);
var Bn=G();
var AOV=null;var AOW=null;var AOX=null;var AOY=null;var AOZ=null;var AO0=null;var AO1=null;function ALo(){ALo=T(Bn);AB0();}
function CN(a){ALo();}
function AB0(){var b;b=new G$;CN(b);b.qL=0.0;AOV=b;b=new Po;CN(b);AOW=b;b=new Pl;CN(b);AOX=b;b=new Pk;CN(b);AOY=b;b=new Pn;CN(b);AOZ=b;b=new Pm;CN(b);AO0=b;b=new Pj;CN(b);AO1=b;}
var Pn=G(Bn);
var Xm=G(Bn);
var HV=G(CO);
var V0=G(HV);
var Rk=G(Bn);
var ZF=G(Br);
var FP=G(Cg);
var AO2=null;var AO3=null;function Tl(){AO2=new Bt;AO3=new Bt;}
var Xn=G(Bn);
var EN=G(0);
var DU=G();
var AO4=null;var AO5=null;function Yv(){AO4=new DU;AO5=new DU;}
var It=G(DU);
var AO6=null;function AO7(){AO7=T(It);ABu();}
function ABu(){AO6=PM(H(It));}
var UF=G(Du);
var DY=G(Cj);
var AO8=null;var AO9=null;var AO$=null;var AO_=0.0;var APa=0.0;function Z4(){AO8=new Bt;AO9=new Bt;AO$=new Bt;AO_=0.4000000059604645;APa=0.10000000149011612;}
var TT=G(DY);
var VE=G(Br);
var MS=G(0);
var X4=G();
var ER=G();
var E7=G(ER);
var P$=G(E7);
var JH=G(Cj);
var U$=G(JH);
var AAi=G(Ju);
var H7=G(B9);
var AAA=G(Ew);
var JW=G(Cj);
var Ri=G(Bn);
var Qu=G();
var UP=G();
var V1=G(Br);
var WC=G(Cu);
var Vm=G();
var XQ=G(Br);
var Z$=G(CO);
var VC=G(FZ);
var Pj=G(Bn);
var Pm=G(Bn);
var OU=G(0);
var HF=G();
var Lk=G(HF);
var UD=G(Du);
var YJ=G(I1);
var YN=G(JM);
var ZG=G(Br);
var ZI=G(CO);
var Rj=G(Bn);
var C6=G();
var APb=null;var APc=null;var APd=null;var APe=null;var APf=null;var APg=null;var APh=null;var APi=null;var APj=null;function APk(){APk=T(C6);AC$();}
function AC$(){var b;APb=Oh(0.0);APc=Oh(1.0);APd=DI(0);b=DI(1);APe=b;APf=b;APg=DI(2);APh=DI(4);APi=DI(8);APj=DI(16);}
var Oc=G(E7);
var VN=G(Br);
var SQ=G(Cu);
var Po=G(Bn);
var T5=G(B9);
var VD=G(Br);
var Ox=G();
function G$(){Bn.call(this);this.qL=0.0;}
var APl=null;function Zt(){APl=J(G$,111);}
var UQ=G(H7);
var Pk=G(Bn);
var Or=G(Cj);
var APm=null;function ZH(){APm=new Bt;}
var VJ=G(JJ);
var QZ=G();
var Id=G(Cj);
var APn=null;var APo=null;function APp(){APp=T(Id);ABx();}
function ABx(){var b;APn=ACc();b=new Gx;AMA();b.qg=AH_(1);b.nQ=AE$(2);APo=b;}
var LL=G();
var Xo=G(Bn);
var Rl=G(Bn);
var Ys=G(FP);
var Pl=G(Bn);
var NE=G();
var Z7=G();
var DM=G(Bz);
var APq=null;var APr=null;var APs=null;var APt=null;var APu=null;var APv=null;function ANg(){ANg=T(DM);AHV();}
function IM(a,b){var c=new DM();X_(c,a,b);return c;}
function X_(a,b,c){ANg();Cq(a,b,c);}
function AHV(){var b,c,d,e;APq=IM(E(26),0);APr=IM(E(27),1);APs=IM(E(28),2);APt=IM(E(29),3);b=IM(E(30),4);APu=b;c=J(DM,5);d=c.data;e=APq;d[AND(0,d)]=e;e=APr;d[AND(1,d)]=e;e=APs;d[AND(2,d)]=e;e=APt;d[AND(3,d)]=e;d[AND(4,d)]=b;APv=c;}
var AAc=G(Bn);
var Vx=G(Cu);
function Cf(){var a=this;D.call(a);a.rh=0;a.qz=null;}
function Qw(a){RT(a,16,2147483647);}
function RT(a,b,c){a.qz=ALJ(0,b);a.rh=c;}
var Rm=G(Cf);
var SM=G();
var Q7=G();
var OJ=G();
var Pf=G();
var Hw=G(Br);
var APw=null;function Su(){APw=new Bt;}
var SP=G(Cu);
var ZJ=G(JW);
var SN=G(0);
var VO=G(Br);
var AAt=G(B9);
var Xc=G(B9);
var VK=G(CO);
var JL=G();
var UB=G(JL);
var Zv=G(Eq);
var Sq=G(Br);
var Yz=G(Ew);
var WQ=G(Br);
var Z0=G(CO);
var Qx=G(ER);
var Xe=G(B9);
var OA=G();
var NQ=G();
var WE=G(Cj);
var Z_=G(Fc);
var Sr=G(Br);
var PO=G(B9);
var APx=null;function Wf(){APx=new Bt;}
var AAh=G(Hw);
var Ss=G(Cg);
var UE=G(Du);
var RX=G();
var Rg=G();
var CT=G();
var APy=null;var APz=null;var APA=null;var APB=null;var APC=null;var APD=null;var APE=null;var APF=null;var APG=null;var APH=null;var API=null;function APJ(){APJ=T(CT);AGq();}
function AGq(){APy=C4(16);APz=H4();APA=H4();APB=Bi();APC=Bi();APD=Bi();APE=Bi();APF=Gk();APG=Bi();APH=Bi();API=Bi();}
var V=G();
var APK=null;var APL=null;var APM=null;var APN=null;var APO=null;var APP=null;var APQ=null;var APR=null;var APS=null;var APT=null;var APU=null;var APV=null;var APW=null;var APX=null;var APY=null;var APZ=null;var AP0=null;var AP1=null;var AP2=null;var AP3=null;var AP4=null;var AP5=null;var AP6=null;var AP7=null;var AP8=null;var AP9=null;var AP$=null;var AP_=null;var AQa=null;var AQb=null;var AQc=null;var AQd=null;var AQe=null;var AQf=null;var AQg=null;var AQh=null;var AQi=null;var AQj=null;var AQk=null;var AQl
=null;var AQm=null;var AQn=null;var AQo=null;var AQp=null;function ANb(){ANb=T(V);ACd();}
function BY(a){ANb();}
function ACd(){var b;b=new P5;BY(b);APK=b;b=new PW;BY(b);APL=b;b=new PV;BY(b);APM=b;b=new PY;BY(b);APN=b;APO=b;APP=Ky(2);b=new F4;DP(b,2);APQ=b;APR=b;b=new FS;DP(b,2);APS=b;APT=b;b=new PX;BY(b);APU=b;b=new P0;BY(b);APV=b;APW=Ky(3);b=new F4;DP(b,3);APX=b;b=new FS;DP(b,3);APY=b;b=new PZ;BY(b);APZ=b;b=new P2;BY(b);AP0=b;AP1=Ky(4);b=new F4;DP(b,4);AP2=b;b=new FS;DP(b,4);AP3=b;AP4=Ky(5);b=new F4;DP(b,5);AP5=b;b=new FS;DP(b,5);AP6=b;b=new P1;BY(b);AP7=b;b=new O7;BY(b);AP8=b;b=new O9;BY(b);AP9=b;AP$=AC0(2.0,10.0);b
=new I9;Hf(b,2.0,10.0);AP_=b;b=new Kb;Hf(b,2.0,10.0);AQa=b;AQb=AC0(2.0,5.0);b=new I9;Hf(b,2.0,5.0);AQc=b;b=new Kb;Hf(b,2.0,5.0);AQd=b;b=new O$;BY(b);AQe=b;b=new O_;BY(b);AQf=b;b=new Pa;BY(b);AQg=b;AQh=AMY(2.0,10.0,7,1.0);b=new Ls;Ob(b,2.0,10.0,6,1.0);AQi=b;b=new NH;Ob(b,2.0,10.0,7,1.0);AQj=b;b=new NJ;BY(b);b.oI=3.0;AQk=b;b=new L4;BY(b);b.tN=2.0;AQl=b;b=new Q8;BY(b);b.qA=2.0;AQm=b;b=new Ni;Nh(b,4);AQn=b;b=new N6;Nh(b,4);AQo=b;AQp=ALN(4);}
function L4(){V.call(this);this.tN=0.0;}
var Vz=G();
var PZ=G(V);
var ZU=G();
function FT(){V.call(this);this.ud=0;}
function Ky(a){var b=new FT();DP(b,a);return b;}
function DP(a,b){BY(a);a.ud=b;}
var F4=G(FT);
var FS=G(FT);
var Hl=G(0);
var Tx=G();
var P2=G(V);
var YX=G();
var PY=G(V);
function FV(){var a=this;V.call(a);a.tZ=0.0;a.oa=0.0;a.ot=0.0;a.p9=0.0;}
function AMY(a,b,c,d){var e=new FV();Ob(e,a,b,c,d);return e;}
function Ob(a,b,c,d,e){BY(a);a.tZ=b;a.oa=c;a.ot=e;a.p9=d*3.1415927410125732*(d%2|0?(-1):1);}
var PX=G(V);
var PW=G(V);
var Hg=G();
var AQq=null;var AQr=null;var AQs=null;function TD(){AQq=new Bt;AQr=new Bt;AQs=new Bt;}
var R_=G(Cf);
var G6=G(0);
function Bt(){var a=this;D.call(a);a.n1=0.0;a.n0=0.0;}
var AQt=null;var AQu=null;var AQv=null;function SS(a,b){var c=new Bt();Yp(c,a,b);return c;}
function Yp(a,b,c){a.n1=b;a.n0=c;}
function Tp(){AQt=SS(1.0,0.0);AQu=SS(0.0,1.0);AQv=SS(0.0,0.0);}
var O_=G(V);
function Gb(){var a=this;V.call(a);a.qb=0.0;a.rU=0.0;a.ua=0.0;a.r5=0.0;}
function AC0(a,b){var c=new Gb();Hf(c,a,b);return c;}
function Hf(a,b,c){BY(a);a.qb=b;a.rU=c;c=AAw(b, -c);a.ua=c;a.r5=1.0/(1.0-c);}
var WD=G();
var P5=G(V);
var Kb=G(Gb);
var UN=G();
var EM=G(Bz);
var AQw=null;var AQx=null;var AQy=null;var AQz=null;function AMV(){AMV=T(EM);AKa();}
function SL(a,b){var c=new EM();SF(c,a,b);return c;}
function SF(a,b,c){AMV();Cq(a,b,c);}
function AKa(){var b,c,d,e;AQw=SL(E(31),0);AQx=SL(E(32),1);b=SL(E(33),2);AQy=b;c=J(EM,3);d=c.data;e=AQw;d[AND(0,d)]=e;e=AQx;d[AND(1,d)]=e;d[AND(2,d)]=b;AQz=c;}
var OH=G();
var AQA=null;function AQB(){AQB=T(OH);AFQ();}
function AFQ(){AQA=Bi();}
function Gn(){var a=this;V.call(a);a.pL=null;a.oq=null;}
function ALN(a){var b=new Gn();Nh(b,a);return b;}
function Nh(a,b){var c,d,e,f,g;BY(a);if(b>=2&&b<=5){a:{c=C4(b);a.pL=c;d=C4(b);e=d.data;a.oq=d;e[AND(0,e)]=1.0;switch(b){case 2:break;case 3:d=c.data;d[AND(0,d)]=0.4000000059604645;d[AND(1,d)]=0.4000000059604645;d[AND(2,d)]=0.20000000298023224;e[AND(1,e)]=0.33000001311302185;e[AND(2,e)]=0.10000000149011612;break a;case 4:d=c.data;d[AND(0,d)]=0.3400000035762787;d[AND(1,d)]=0.3400000035762787;d[AND(2,d)]=0.20000000298023224;d[AND(3,d)]=0.15000000596046448;e[AND(1,e)]=0.25999999046325684;e[AND(2,e)]=0.10999999940395355;e[AND(3,
e)]=0.029999999329447746;break a;case 5:d=c.data;d[AND(0,d)]=0.30000001192092896;d[AND(1,d)]=0.30000001192092896;d[AND(2,d)]=0.20000000298023224;d[AND(3,d)]=0.10000000149011612;d[AND(4,d)]=0.10000000149011612;e[AND(1,e)]=0.44999998807907104;e[AND(2,e)]=0.30000001192092896;e[AND(3,e)]=0.15000000596046448;e[AND(4,e)]=0.05999999865889549;break a;default:break a;}d=c.data;d[AND(0,d)]=0.6000000238418579;d[AND(1,d)]=0.4000000059604645;e[AND(1,e)]=0.33000001311302185;}c=c.data;b=AND(0,c);c[b]=c[b]*2.0;return;}f=new Bu;g
=new Q;S(g);Y(f,R(C(Bc(C(U(g,E(34))),b))));K(f);}
var N6=G(Gn);
var O7=G(V);
var WY=G();
var PV=G(V);
function ED(){var a=this;D.call(a);a.pX=0.0;a.pW=0.0;a.pY=0.0;a.pU=0.0;}
var AQC=null;var AQD=null;var AQE=null;var AQF=null;var AQG=null;function AMJ(){AMJ=T(ED);AKX();}
function II(a,b,c,d){var e=new ED();WJ(e,a,b,c,d);return e;}
function WJ(a,b,c,d,e){AMJ();a.pX=b;a.pW=c;a.pY=d;a.pU=e;}
function AKX(){AQC=II(1.0,0.0,0.0,0.0);AQD=II(0.0,1.0,0.0,0.0);AQE=II(0.0,0.0,1.0,0.0);AQF=II(0.0,0.0,0.0,1.0);AQG=II(0.0,0.0,0.0,0.0);}
var Ls=G(FV);
function NJ(){V.call(this);this.oI=0.0;}
var Tr=G();
var AAn=G();
var P0=G(V);
function Q8(){V.call(this);this.qA=0.0;}
var Pa=G(V);
var NH=G(FV);
var HJ=G();
var AQH=null;var AQI=null;var AQJ=null;function AQK(){AQK=T(HJ);ABe();}
function ABe(){var b,c,d;AQH=J(C7,15);AQI=J(C7,8);AQJ=J(C7,9);b=0;while(true){c=C(AQJ).data;if(b>=c.length)break;d=Bi();b=B(b,c);c[b]=d;b=b+1|0;}b=0;while(true){c=C(AQI).data;if(b>=c.length)break;d=Bi();b=B(b,c);c[b]=d;b=b+1|0;}}
function H3(){var a=this;D.call(a);a.d_=null;a.ee=null;a.li=null;a.lX=null;}
var AQL=null;function ANy(){ANy=T(H3);AIX();}
function AIX(){AQL=Bi();}
var N1=G();
var AQM=null;function AQN(){AQN=T(N1);AI8();}
function AI8(){AQM=Bi();}
var TA=G();
var Sj=G();
var XN=G();
var Vg=G();
var PB=G();
var AQO=null;function AHq(){AHq=T(PB);AFx();}
function AFx(){var b,c,d,e;b=new O0;c=new Hb;d=AD6(EP(Ba(ML(c)),32),Ba(ML(c)));if(C_(d,Cb))d=F(0, 2147483648);e=Zd(d);d=Zd(e);b.nz=e;b.nA=d;AQO=b;}
var BP=G();
var AQP=null;var AQQ=null;var AQR=null;var AQS=null;var AQT=null;var AQU=null;var AQV=null;var AQW=null;var AQX=null;var AQY=null;var AQZ=null;var AQ0=null;var AQ1=null;var AQ2=null;var AQ3=null;var AQ4=null;var AQ5=null;var AQ6=null;var AQ7=null;var AQ8=null;var AQ9=null;var AQ$=null;var AQ_=null;var ARa=null;function ARb(){ARb=T(BP);ADn();}
function ADn(){var b,c,d,e,f;AQP=Bi();AQQ=Bi();AQR=Bi();AQS=AHo();AQT=AHo();AQU=new Bt;AQV=new Bt;AQW=new Bt;AQX=new Bt;AQY=new Bt;AQZ=new Bt;AQ0=new Bt;AQ1=new Bt;AQ2=new Bt;b=new Q1;c=Bi();d=Bi();b.of=d;b.jD=0.0;c=C(Iv(d,c));e=c.bf;e=e*e;f=c.bh;e=e+f*f;f=c.bg;f=e+f*f;if(f!==0.0&&f!==1.0)Qr(c,1.0/AK2(f));b.jD=0.0;AQ3=b;AQ4=Bi();AQ5=Bi();AQ6=Bi();AQ7=Bi();AQ8=Bi();AQ9=Bi();AQ$=Bi();AQ_=Bi();ARa=Bi();}
var SU=G();
var Ni=G(Gn);
function CL(){D.call(this);this.cH=null;}
var ARc=null;var ARd=null;var ARe=null;var ARf=null;var ARg=null;var ARh=null;var ARi=null;var ARj=null;var ARk=null;var ARl=null;var ARm=null;function AGi(){AGi=T(CL);ABt();}
function Gk(){var a=new CL();X$(a);return a;}
function X$(a){var b,c;AGi();b=C4(16);c=b.data;a.cH=b;c[AND(0,c)]=1.0;c[AND(5,c)]=1.0;c[AND(10,c)]=1.0;c[AND(15,c)]=1.0;}
function RN(a,b){return S$(a,C(b).cH);}
function S$(a,b){var c,d;c=a.cH;b=C(b).data;d=b[AND(0,b)];c=C(c).data;c[AND(0,c)]=d;d=b[AND(1,b)];c[AND(1,c)]=d;d=b[AND(2,b)];c[AND(2,c)]=d;d=b[AND(3,b)];c[AND(3,c)]=d;d=b[AND(4,b)];c[AND(4,c)]=d;d=b[AND(5,b)];c[AND(5,c)]=d;d=b[AND(6,b)];c[AND(6,c)]=d;d=b[AND(7,b)];c[AND(7,c)]=d;d=b[AND(8,b)];c[AND(8,c)]=d;d=b[AND(9,b)];c[AND(9,c)]=d;d=b[AND(10,b)];c[AND(10,c)]=d;d=b[AND(11,b)];c[AND(11,c)]=d;d=b[AND(12,b)];c[AND(12,c)]=d;d=b[AND(13,b)];c[AND(13,c)]=d;d=b[AND(14,b)];c[AND(14,c)]=d;d=b[AND(15,b)];c[AND(15,c)]
=d;return a;}
function W3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=C(a.cH).data;h[AND(0,h)]=1.0;h[AND(4,h)]=0.0;h[AND(8,h)]=0.0;h[AND(12,h)]=0.0;h[AND(1,h)]=0.0;h[AND(5,h)]=1.0;h[AND(9,h)]=0.0;h[AND(13,h)]=0.0;h[AND(2,h)]=0.0;h[AND(6,h)]=0.0;h[AND(10,h)]=1.0;h[AND(14,h)]=0.0;h[AND(3,h)]=0.0;h[AND(7,h)]=0.0;h[AND(11,h)]=0.0;h[AND(15,h)]=1.0;i=c-b;j=2.0/i;k=e-d;l=2.0/k;m=g-f;n=(-2.0)/m;i= -(c+b)/i;k= -(e+d)/k;m= -(g+f)/m;h[AND(0,h)]=j;h[AND(1,h)]=0.0;h[AND(2,h)]=0.0;h[AND(3,h)]=0.0;h[AND(4,h)]=0.0;h[AND(5,h)]=l;h[AND(6,h)]=0.0;h[AND(7,
h)]=0.0;h[AND(8,h)]=0.0;h[AND(9,h)]=0.0;h[AND(10,h)]=n;h[AND(11,h)]=0.0;h[AND(12,h)]=i;h[AND(13,h)]=k;h[AND(14,h)]=m;h[AND(15,h)]=1.0;return a;}
function Sf(b,c){var d,e,f,g;AGi();d=C4(16);e=d.data;f=C(b);b=f.data;g=b[AND(0,b)];c=C(c).data;g=g*c[AND(0,c)]+b[AND(4,b)]*c[AND(1,c)]+b[AND(8,b)]*c[AND(2,c)]+b[AND(12,b)]*c[AND(3,c)];e[AND(0,e)]=g;g=b[AND(0,b)]*c[AND(4,c)]+b[AND(4,b)]*c[AND(5,c)]+b[AND(8,b)]*c[AND(6,c)]+b[AND(12,b)]*c[AND(7,c)];e[AND(4,e)]=g;g=b[AND(0,b)]*c[AND(8,c)]+b[AND(4,b)]*c[AND(9,c)]+b[AND(8,b)]*c[AND(10,c)]+b[AND(12,b)]*c[AND(11,c)];e[AND(8,e)]=g;g=b[AND(0,b)]*c[AND(12,c)]+b[AND(4,b)]*c[AND(13,c)]+b[AND(8,b)]*c[AND(14,c)]+b[AND(12,
b)]*c[AND(15,c)];e[AND(12,e)]=g;g=b[AND(1,b)]*c[AND(0,c)]+b[AND(5,b)]*c[AND(1,c)]+b[AND(9,b)]*c[AND(2,c)]+b[AND(13,b)]*c[AND(3,c)];e[AND(1,e)]=g;g=b[AND(1,b)]*c[AND(4,c)]+b[AND(5,b)]*c[AND(5,c)]+b[AND(9,b)]*c[AND(6,c)]+b[AND(13,b)]*c[AND(7,c)];e[AND(5,e)]=g;g=b[AND(1,b)]*c[AND(8,c)]+b[AND(5,b)]*c[AND(9,c)]+b[AND(9,b)]*c[AND(10,c)]+b[AND(13,b)]*c[AND(11,c)];e[AND(9,e)]=g;g=b[AND(1,b)]*c[AND(12,c)]+b[AND(5,b)]*c[AND(13,c)]+b[AND(9,b)]*c[AND(14,c)]+b[AND(13,b)]*c[AND(15,c)];e[AND(13,e)]=g;g=b[AND(2,b)]*c[AND(0,
c)]+b[AND(6,b)]*c[AND(1,c)]+b[AND(10,b)]*c[AND(2,c)]+b[AND(14,b)]*c[AND(3,c)];e[AND(2,e)]=g;g=b[AND(2,b)]*c[AND(4,c)]+b[AND(6,b)]*c[AND(5,c)]+b[AND(10,b)]*c[AND(6,c)]+b[AND(14,b)]*c[AND(7,c)];e[AND(6,e)]=g;g=b[AND(2,b)]*c[AND(8,c)]+b[AND(6,b)]*c[AND(9,c)]+b[AND(10,b)]*c[AND(10,c)]+b[AND(14,b)]*c[AND(11,c)];e[AND(10,e)]=g;g=b[AND(2,b)]*c[AND(12,c)]+b[AND(6,b)]*c[AND(13,c)]+b[AND(10,b)]*c[AND(14,c)]+b[AND(14,b)]*c[AND(15,c)];e[AND(14,e)]=g;g=b[AND(3,b)]*c[AND(0,c)]+b[AND(7,b)]*c[AND(1,c)]+b[AND(11,b)]*c[AND(2,
c)]+b[AND(15,b)]*c[AND(3,c)];e[AND(3,e)]=g;g=b[AND(3,b)]*c[AND(4,c)]+b[AND(7,b)]*c[AND(5,c)]+b[AND(11,b)]*c[AND(6,c)]+b[AND(15,b)]*c[AND(7,c)];e[AND(7,e)]=g;g=b[AND(3,b)]*c[AND(8,c)]+b[AND(7,b)]*c[AND(9,c)]+b[AND(11,b)]*c[AND(10,c)]+b[AND(15,b)]*c[AND(11,c)];e[AND(11,e)]=g;g=b[AND(3,b)]*c[AND(12,c)]+b[AND(7,b)]*c[AND(13,c)]+b[AND(11,b)]*c[AND(14,c)]+b[AND(15,b)]*c[AND(15,c)];e[AND(15,e)]=g;Fg(d,0,f,0,16);}
function ABt(){ARc=C4(16);ARd=H4();ARe=H4();ARf=Bi();ARg=Bi();ARh=Bi();ARi=Bi();ARj=Gk();ARk=Bi();ARl=Bi();ARm=Bi();}
var Mc=G(0);
var Hb=G();
function ML(a){return 4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0;}
function O0(){var a=this;Hb.call(a);a.nz=Cb;a.nA=Cb;}
function Zd(b){b=BB(Zg(b,B4(b,33)),F(3981806797, 4283543511));b=BB(Zg(b,B4(b,33)),F(444984403, 3301882366));return Zg(b,B4(b,33));}
var O$=G(V);
var P1=G(V);
var Hp=G();
var ARn=null;var ARo=null;var ARp=null;function ARq(){ARq=T(Hp);AFT();}
function AFT(){var b,c,d,e,f,g,h,i,j,k;b=J(C7,8);c=b.data;d=Dl((-1.0),(-1.0),(-1.0));c[AND(0,c)]=d;d=Dl(1.0,(-1.0),(-1.0));c[AND(1,c)]=d;d=Dl(1.0,1.0,(-1.0));c[AND(2,c)]=d;d=Dl((-1.0),1.0,(-1.0));c[AND(3,c)]=d;d=Dl((-1.0),(-1.0),1.0);c[AND(4,c)]=d;d=Dl(1.0,(-1.0),1.0);c[AND(5,c)]=d;d=Dl(1.0,1.0,1.0);c[AND(6,c)]=d;d=Dl((-1.0),1.0,1.0);c[AND(7,c)]=d;ARn=b;b=C4(24);e=b.data;ARo=b;f=0;g=c.length;h=0;while(h<g){i=DZ(h);d=c[i];h=f+1|0;d=C(d);j=d.bf;e[B(f,e)]=j;k=h+1|0;j=d.bh;e[B(h,e)]=j;f=k+1|0;j=d.bg;e[B(k,e)]=j;h
=i+1|0;}ARp=Bi();}
function Kj(){var a=this;D.call(a);a.sm=0.0;a.si=0.0;a.sj=0.0;a.sl=0.0;}
var ARr=null;var ARs=null;function AIB(){AIB=T(Kj);AE5();}
function AIs(a,b,c,d){var e=new Kj();Un(e,a,b,c,d);return e;}
function H4(){var a=new Kj();Vp(a);return a;}
function Un(a,b,c,d,e){AIB();M0(a,b,c,d,e);}
function Vp(a){AIB();M0(a,0.0,0.0,0.0,1.0);}
function M0(a,b,c,d,e){a.sm=b;a.si=c;a.sj=d;a.sl=e;return a;}
function AE5(){ARr=AIs(0.0,0.0,0.0,0.0);ARs=AIs(0.0,0.0,0.0,0.0);}
var R8=G();
var Xb=G();
function C7(){var a=this;D.call(a);a.bf=0.0;a.bh=0.0;a.bg=0.0;}
var ARt=null;var ARu=null;var ARv=null;var ARw=null;var ARx=null;function AHT(){AHT=T(C7);ABK();}
function Bi(){var a=new C7();WF(a);return a;}
function Dl(a,b,c){var d=new C7();Vr(d,a,b,c);return d;}
function WF(a){AHT();}
function Vr(a,b,c,d){AHT();Dt(a,b,c,d);}
function Dt(a,b,c,d){a.bf=b;a.bh=c;a.bg=d;return a;}
function Iv(a,b){b=C(b);return Dt(a,b.bf,b.bh,b.bg);}
function Qr(a,b){return Dt(a,a.bf*b,a.bh*b,a.bg*b);}
function ABK(){ARt=Dl(1.0,0.0,0.0);ARu=Dl(0.0,1.0,0.0);ARv=Dl(0.0,0.0,1.0);ARw=Dl(0.0,0.0,0.0);ARx=Gk();}
var UO=G();
var T7=G(Cf);
var I9=G(Gb);
var Xp=G();
var S3=G();
var Y8=G();
function Q1(){var a=this;D.call(a);a.of=null;a.jD=0.0;}
var O9=G(V);
var Y9=G();
var S4=G();
var XM=G();
var Y7=G();
var WV=G(0);
var UT=G();
var P_=G();
var ARy=null;function TU(){var b,c,d,e;ARy=C4(16384);b=0;while(b<16384){c=ARy;d=AJx((b+0.5)/16384.0*6.2831854820251465);c=C(c).data;e=B(b,c);c[e]=d;b=e+1|0;}c=C(ARy).data;c[AND(0,c)]=0.0;c[AND(4096,c)]=1.0;c[AND(8192,c)]=0.0;c[AND(12288,c)]=(-1.0);}
function Gx(){var a=this;D.call(a);a.qg=null;a.nQ=null;}
var ARz=null;var ARA=null;function AMA(){AMA=T(Gx);ADu();}
function ADu(){ARz=PM(H(LM));ARA=AE$(4);}
var J1=G();
var W9=G(J1);
var Nq=G();
var PE=G();
var ARB=null;function ARC(){ARC=T(PE);AKf();}
function AKf(){ARB=ACc();}
function Bo(){var a=this;D.call(a);a.cx=0.0;a.cw=0.0;a.cv=0.0;a.cu=0.0;}
var ARD=null;var ARE=null;var ARF=null;var ARG=null;var ARH=null;var ARI=0.0;var ARJ=null;var ARK=null;var ARL=null;var ARM=null;var ARN=null;var ARO=null;var ARP=null;var ARQ=null;var ARR=null;var ARS=null;var ART=null;var ARU=null;var ARV=null;var ARW=null;var ARX=null;var ARY=null;var ARZ=null;var AR0=null;var AR1=null;var AR2=null;var AR3=null;var AR4=null;var AR5=null;var AR6=null;var AR7=null;var AR8=null;var AR9=null;var AR$=null;var AR_=null;function LP(){LP=T(Bo);AAR();}
function ACc(){var a=new Bo();AAo(a);return a;}
function BT(a){var b=new Bo();Zl(b,a);return b;}
function C8(a,b,c,d){var e=new Bo();XA(e,a,b,c,d);return e;}
function AAo(a){LP();}
function Zl(a,b){LP();a.cx=((b&(-16777216))>>>24|0)/255.0;a.cw=((b&16711680)>>>16|0)/255.0;a.cv=((b&65280)>>>8|0)/255.0;a.cu=(b&255)/255.0;}
function XA(a,b,c,d,e){LP();a.cx=b;a.cw=c;a.cv=d;a.cu=e;if(b<0.0)a.cx=0.0;else if(b>1.0)a.cx=1.0;if(c<0.0)a.cw=0.0;else if(c>1.0)a.cw=1.0;if(d<0.0)a.cv=0.0;else if(d>1.0)a.cv=1.0;if(e<0.0)a.cu=0.0;else if(e>1.0)a.cu=1.0;}
function Q0(a){return $rt_intBitsToFloat(((255.0*a.cu|0)<<24|(255.0*a.cv|0)<<16|(255.0*a.cw|0)<<8|255.0*a.cx|0)&(-16777217));}
function AAR(){ARD=C8(1.0,1.0,1.0,1.0);ARE=BT((-1077952513));ARF=BT(2139062271);ARG=BT(1061109759);ARH=C8(0.0,0.0,0.0,1.0);ARI=Q0(C(ARD));ARJ=C8(0.0,0.0,0.0,0.0);ARK=C8(0.0,0.0,1.0,1.0);ARL=C8(0.0,0.0,0.5,1.0);ARM=BT(1097458175);ARN=BT(1887473919);ARO=BT((-2016482305));ARP=C8(0.0,1.0,1.0,1.0);ARQ=C8(0.0,0.5,0.5,1.0);ARR=BT(16711935);ARS=BT(2147418367);ART=BT(852308735);ARU=BT(579543807);ARV=BT(1804477439);ARW=BT((-65281));ARX=BT((-2686721));ARY=BT((-626712321));ARZ=BT((-5963521));AR0=BT((-1958407169));AR1=BT((-759919361));AR2
=BT((-1306385665));AR3=BT((-16776961));AR4=BT((-13361921));AR5=BT((-8433409));AR6=BT((-92245249));AR7=BT((-9849601));AR8=C8(1.0,0.0,1.0,1.0);AR9=BT((-1608453889));AR$=BT((-293409025));AR_=BT((-1339006721));}
var Ko=G();
var Qn=G(Ko);
var ASa=null;function XW(){ASa=AF9();}
function Jt(){var a=this;D.call(a);a.bu=null;a.H=0;a.sL=0;a.gt=null;}
function E9(){var a=new Jt();ACs(a);return a;}
function AH_(a){var b=new Jt();AKk(b,a);return b;}
function ALJ(a,b){var c=new Jt();Mm(c,a,b);return c;}
function ACs(a){Mm(a,1,16);}
function AKk(a,b){Mm(a,1,b);}
function Mm(a,b,c){a.sL=b;a.bu=J(D,c);}
function Di(a,b){var c,d,e,f;c=a.bu;d=a.H;e=C(c);if(d==e.data.length)e=MP(a,B7(8,d*1.75|0));f=a.H;a.H=f+1|0;c=C(e).data;c[B(f,c)]=b;}
function J3(a,b){var c,d,e;if(b<a.H){c=C(a.bu).data;return c[B(b,c)];}d=new Bp;e=new Q;S(e);Y(d,R(C(Bc(C(U(C(Bc(C(U(e,E(35))),b)),E(36))),a.H))));K(d);}
function Iz(a){var b,c,d,e,f,g;b=a.bu;c=0;d=a.H;e=null;if(c>d){e=new Bu;Be(e);K(e);}while(c<d){f=c+1|0;b=C(b);g=b.data;g[B(c,g)]=e;c=f;}a.H=0;}
function MP(a,b){var c,d,e;c=C(a.bu);d=JC(ET(C(DW(c))),b);e=a.H;d=C(d);Wo(c,0,d,0,B$(e,d.data.length));a.bu=d;return d;}
function NW(a){var b,c,d,e;b=ASb;if(b)return OI(a,1);if(a.gt===null){c=new LH;c.fe=a;c.fW=1;a.gt=c;}c=C(a.gt);if(b)d=OI(c.fe,c.fW);else{if(c.h4===null){c.h4=OI(c.fe,c.fW);c.h5=OI(c.fe,c.fW);}d=c.h4;e=C(d);if(e.b0){d=c.h5;c=C(d);c.dG=0;c.b0=1;e.b0=0;}else{e.dG=0;e.b0=1;C(c.h5).b0=0;}}return d;}
function HI(){var a=this;D.call(a);a.h6=0;a.c4=null;a.cE=null;a.k7=0.0;a.i_=0;a.iE=0;a.fI=0;}
var ASc=null;function DN(){var a=new HI();Y2(a);return a;}
function Y2(a){var b,c;a.k7=0.800000011920929;b=JP(51,0.800000011920929);a.i_=b*0.800000011920929|0;c=b-1|0;a.fI=c;a.iE=DT(Ba(c));a.c4=J(D,b);a.cE=J(D,b);}
function Md(a,b){return EI(B4(BB(Ba(C(b).iw()),F(2135587861, 2654435769)),a.iE));}
function IJ(a,b){var c,d,e,f,g;if(b===null){c=new Bu;Y(c,E(37));K(c);}d=a.c4;e=Md(a,b);while(true){d=C(d);f=d.data;g=B(e,f);c=f[g];if(c===null)return  -(g+1|0)|0;if(c.eR(b))break;e=(g+1|0)&a.fI;}return g;}
function DC(a,b,c){var d,e,f,g,h,i,j,k,l;d=IJ(a,b);if(d>=0){e=C(a.cE).data;d=B(d,e);f=e[d];e[AND(d,e)]=c;return f;}d= -(d+1|0)|0;e=C(a.c4).data;d=B(d,e);e[d]=b;g=C(a.cE).data;g[AND(d,g)]=c;d=a.h6+1|0;a.h6=d;if(d>=a.i_)a:{d=e.length;h=d<<1;a.i_=h*a.k7|0;i=h-1|0;a.fI=i;a.iE=DT(Ba(i));e=a.c4;g=a.cE;a.c4=J(D,h);a.cE=J(D,h);if(a.h6>0){h=0;while(true){if(h>=d)break a;e=C(e);j=e.data;k=B(h,j);b=j[k];if(b!==null){g=C(g);j=g.data;k=AND(k,j);c=j[k];j=a.c4;h=Md(a,b);while(true){j=C(j);l=j.data;i=B(h,l);if(l[i]===null)break;h
=(i+1|0)&a.fI;}l[i]=b;j=C(a.cE).data;j[AND(i,j)]=c;}h=k+1|0;}}}return null;}
function Ig(a,b){var c,d;c=IJ(a,b);if(c<0)b=null;else{d=C(a.cE).data;b=d[B(c,d)];}return b;}
function Gj(a,b){return IJ(a,b)<0?0:1;}
function T6(){ASc=new D;}
var U6=G(HI);
var Z6=G();
function F9(){var a=this;D.call(a);a.lu=0;a.cR=0;a.eI=0;a.d1=0;a.cz=0;a.es=null;a.sN=0;a.rW=0;}
function X7(a,b,c){var d=new F9();WZ(d,a,b,c);return d;}
function WZ(a,b,c,d){var e,f;e=CP(b,4);f=e?5126:5121;e=e?0:1;a.lu=b;a.cR=c;a.d1=f;a.eI=e;a.es=d;a.sN=0;a.rW=FY(b);}
var AAb=G();
var VV=G();
var W$=G();
var Wr=G();
var NS=G();
var ASd=null;function ASe(){ASe=T(NS);AFH();}
function AFH(){var b,c,d,e,f,g,h,i,j;b=new H3;ANy();b.d_=Bi();b.ee=Bi();b.li=Bi();b.lX=Bi();c=Dt(C(b.d_),0.0,0.0,0.0);d=Dt(C(b.ee),0.0,0.0,0.0);e=b.d_;f=C(c);g=f.bf;d=C(d);h=d.bf;if(g<h)h=g;g=f.bh;i=d.bh;if(g<i)i=g;g=f.bg;j=d.bg;if(g<j)j=g;Dt(C(e),h,i,j);c=b.ee;g=f.bf;h=d.bf;if(g>h)h=g;g=f.bh;i=d.bh;if(g>i)i=g;j=f.bg;g=d.bg;if(j>g)g=j;Dt(C(c),h,i,g);c=b.li;d=b.d_;c=Iv(C(c),d);d=b.ee;c=C(c);d=C(d);g=d.bf;h=d.bh;i=d.bg;Qr(C(Dt(c,c.bf+g,c.bh+h,c.bg+i)),0.5);c=b.lX;d=b.ee;c=Iv(C(c),d);d=b.d_;c=C(c);d=C(d);g=d.bf;h
=d.bh;i=d.bg;Dt(c,c.bf-g,c.bh-h,c.bg-i);ASd=b;}
var Sn=G();
var WI=G();
var Wd=G();
var Ww=G();
var YV=G();
var US=G();
var Zy=G();
var VG=G();
var S8=G();
var Tt=G();
var Gg=G(Bz);
var ASf=null;var ASg=null;var ASh=null;function AMx(){AMx=T(Gg);AE3();}
function ABP(a,b){var c=new Gg();XP(c,a,b);return c;}
function XP(a,b,c){AMx();Cq(a,b,c);}
function AE3(){var b,c,d,e;ASf=ABP(E(38),0);b=ABP(E(39),1);ASg=b;c=J(Gg,2);d=c.data;e=ASf;d[AND(0,d)]=e;d[AND(1,d)]=b;ASh=c;}
var WL=G();
var PI=G(0);
var Ct=G();
var Sw=G(Ct);
var Sv=G(Ct);
var V7=G(Ct);
var T4=G(Ct);
var XO=G(Ct);
var I3=G(Ct);
var TX=G(I3);
var FK=G(0);
var Up=G();
var D3=G(0);
var XL=G();
var Zw=G();
var Tj=G();
var DA=G();
var Xs=G(DA);
var FH=G(DA);
var CJ=G(FH);
var ASi=null;function ASj(){ASj=T(CJ);ABI();}
function ABI(){ASi=Bi();}
var XF=G();
var YU=G(CJ);
var VQ=G(CJ);
var Rn=G(DA);
var ASk=null;function Us(){ASk=C4(3);}
var IC=G(DA);
var Sl=G(IC);
var TW=G(CJ);
var Fd=G(FH);
var Wn=G(Fd);
var VP=G(CJ);
var Wx=G(CJ);
var Wl=G(Fd);
var EO=G(Bz);
var ASl=null;var ASm=null;var ASn=null;var ASo=null;function AL6(){AL6=T(EO);AG9();}
function Vb(a,b){var c=new EO();TQ(c,a,b);return c;}
function TQ(a,b,c){AL6();Cq(a,b,c);}
function AG9(){var b,c,d,e;ASl=Vb(E(40),0);ASm=Vb(E(41),1);b=Vb(E(42),2);ASn=b;c=J(EO,3);d=c.data;e=ASl;d[AND(0,d)]=e;e=ASm;d[AND(1,d)]=e;d[AND(2,d)]=b;ASo=c;}
var Es=G();
var JG=G(Es);
var R0=G(JG);
var EV=G(Bz);
var ASp=null;var ASq=null;var ASr=null;var ASs=null;function AMj(){AMj=T(EV);AFk();}
function YY(a,b){var c=new EV();TN(c,a,b);return c;}
function TN(a,b,c){AMj();Cq(a,b,c);}
function AFk(){var b,c,d,e;ASp=YY(E(43),0);ASq=YY(E(44),1);b=YY(E(45),2);ASr=b;c=J(EV,3);d=c.data;e=ASp;d[AND(0,d)]=e;e=ASq;d[AND(1,d)]=e;d[AND(2,d)]=b;ASs=c;}
var B3=G(Es);
var Gl=G(B3);
var Tg=G();
var DB=G(B3);
var ASt=null;var ASu=null;var ASv=null;var ASw=null;function ASx(){ASx=T(DB);AF0();}
function AF0(){ASt=Bi();ASu=Bi();ASv=Bi();ASw=H4();}
var Dr=G(DB);
var Ey=G(Dr);
var Uo=G(Ey);
var FQ=G(B3);
var AAp=G(FQ);
var YS=G(B3);
var Ea=G(B3);
var Sp=G(Ea);
var Ft=G(B3);
var Um=G(Dr);
var Vf=G(Dr);
var Ih=G(B3);
var Xt=G(Ih);
var S0=G(Ea);
var VU=G(Ey);
var Xq=G(B3);
var WB=G(Ea);
var Xw=G(B3);
var X5=G(DB);
var Vh=G(Cf);
var Ta=G(Cf);
var Te=G(Dr);
var XD=G(Ft);
var ZS=G(Gl);
var W2=G(Gl);
var XV=G(Ft);
var Wa=G(Ey);
var Z2=G(FQ);
var Dy=G(Es);
var Wp=G(Dy);
var Ei=G();
var XJ=G(Ei);
var Yg=G(Dy);
var YR=G(Dy);
var Zi=G(Ei);
var Ug=G(Dy);
var YW=G(Ei);
var HT=G(0);
var KA=G(0);
function Ga(){var a=this;D.call(a);a.gW=null;a.b3=null;a.dd=null;}
var ASy=0;function Pb(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ga;c.b3=b;d=c;b.classObject=d;}return c;}
function Eh(a){if(a.gW===null)a.gW=$rt_str(a.b3.$meta.name);return a.gW;}
function Fy(a){return a.b3.$meta.primitive?1:0;}
function ET(a){return Pb(Z1(a.b3));}
function AFP(){It.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];LM.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[LM],returnType:$rt_voidcls(),callable:null},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:
[],returnType:$rt_voidcls(),callable:null},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BA,callable:null}];}
function Km(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Fy(a)&&!(Z1(a.b3)===null?0:1)){if(a.dd===null){if(!ASy){ASy=1;AFP();}b=a.b3.$meta.methods;a.dd=J(Eg,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof $rt_objcls())?e:BV(e);if(Bh(C($rt_str(f.name)),E(46))){g=f.parameterTypes;h=J(Ga,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;e=Pb(g[i]);i=DZ(i);j[i]=e;i=i+1|0;}j=a.dd;k=c+1|0;l=new Eg;e=$rt_str(f.name);i=f.modifiers;m=f.accessLevel;g=Cz(f.callable,"call");l.pO=a;l.pE=e;l.lW=i;l.kZ
=m;l.lE=h;l.s_=g;h=C(j).data;h[B(c,h)]=l;c=k;}d=d+1|0;}a.dd=Dc(IS(a.dd,c),$rt_arraycls(Eg));}return C(a.dd).cn();}return J(Eg,0);}
function YF(a,b){var c,d,e,f,g;c=C(Km(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Fx;Be(f);K(f);}g=DZ(e);f=C(c[g]);if(YE(Nw(f),b))break;e=g+1|0;}return f;}
function YD(a,b){var c,d,e,f,g;c=C(Km(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Fx;Be(f);K(f);}g=DZ(e);f=C(c[g]);if(MH(PA(f))&&YE(Nw(f),b))break;e=g+1|0;}return f;}
var Tw=G();
function BF(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Tc=G();
function AA2(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Xf(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Xf(d[e],c))return 1;e=e+1|0;}return 0;}
function AIb(b){return setTimeout(function(){$rt_threadStarter(ALy)(b);},0);}
function ALy(b){C(b).cW();}
function Wu(b){YG(b,0);}
function YG(b,c){return setTimeout(function(){ALy(b);},c);}
function Z1(b){return b.$meta.item;}
function AFI(){return [];}
function Cv(){var a=this;D.call(a);a.im=null;a.d4=null;a.fB=0;a.f5=0;a.oW=null;}
function ASz(a){var b=new Cv();Y(b,a);return b;}
function Y(a,b){a.fB=1;a.f5=1;a.im=b;}
function AEh(a){return a;}
function AIL(a){return a.im;}
function AEH(a){return a.gb();}
function AIQ(a){var b;b=a.d4;if(b===a)b=null;return b;}
function NA(a){RI(a,Yx());}
function RI(a,b){var c,d,e,f,g,h,i,j;c=Eh(C(DW(a)));d=C(b);G0(d,c);e=a.gb();if(e!==null){b=new Q;S(b);M(C(M(b,E(47))),e);G0(d,R(b));}a:{f=d.gS;g=C(f).data;g[AND(0,g)]=10;LE(d,f,0,1);f=a.oW;if(f!==null){f=f.data;h=f.length;i=0;while(true){if(i>=h)break a;j=DZ(i);c=f[j];G0(d,E(48));Bs(C(M(C(d.da),c)),10);H1(d);i=j+1|0;}}}b=a.d4;if(b!==null&&b!==a){G0(d,E(49));RI(C(a.d4),d);}}
var Cp=G(Cv);
function ASA(){var a=new Cp();Be(a);return a;}
function Be(a){a.fB=1;a.f5=1;}
var Bq=G(Cp);
function ANA(a){var b=new Bq();AKe(b,a);return b;}
function AKe(a,b){Y(a,b);}
var VM=G(Bq);
function ANC(){var a=new VM();AB3(a);return a;}
function AB3(a){Be(a);}
var HC=G(0);
function BA(){var a=this;D.call(a);a.C=null;a.eH=0;}
var ASB=null;var ASC=null;var ASD=null;function I8(){I8=T(BA);AJS();}
function KB(a){var b=new BA();K$(b,a);return b;}
function Mf(a,b,c){var d=new BA();RS(d,a,b,c);return d;}
function K$(a,b){var c;I8();c=C(b);RS(a,c,0,c.data.length);}
function RS(a,b,c,d){var e;I8();e=Ce(d);a.C=e;Fg(b,c,e,0,d);}
function O(a,b){var c,d;if(b>=0){c=C(a.C).data;if(b<c.length)return c[B(b,c)];}d=new Gm;Be(d);K(d);}
function X(a){return C(a.C).data.length;}
function IY(a){return C(a.C).data.length?0:1;}
function PJ(a,b,c){var d,e,f;b=C(b);if((c+X(b)|0)>X(a))return 0;d=0;while(d<X(b)){e=O(b,d);f=c+1|0;if(e!=O(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Oa(a,b){if(a===b)return 1;return PJ(a,b,0);}
function FU(a,b,c){var d,e,f,g,h;d=B7(0,c);if(b<65536){e=b&65535;while(true){f=C(a.C).data;if(d>=f.length)return (-1);d=B(d,f);if(f[d]==e)break;d=d+1|0;}return d;}g=G5(b);h=Hx(b);while(true){f=C(a.C).data;if(d>=(f.length-1|0))return (-1);d=B(d,f);if(f[d]==g&&f[B(d+1|0,f)]==h)break;d=d+1|0;}return d;}
function Fh(a,b,c){var d,e,f,g,h;d=B$(c,X(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);f=C(a.C).data;d=B(d,f);if(f[d]==e)break;d=d+(-1)|0;}return d;}g=G5(b);h=Hx(b);while(true){if(d<1)return (-1);f=C(a.C).data;d=AND(d,f);if(f[d]==h){c=B(d-1|0,f);if(f[c]==g)break;}d=d+(-1)|0;}return c;}
function T0(a,b,c){var d,e,f;d=B7(0,c);c=X(a);b=C(b);e=c-X(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=X(b))break a;if(O(a,d+f|0)!=O(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Cl(a,b,c){var d,e;d=CP(b,c);if(d>0){e=new Bp;Be(e);K(e);}if(!d){I8();return ASC;}if(!b&&c==X(a))return a;return Mf(a.C,b,c-b|0);}
function IR(a,b){return Cl(a,b,X(a));}
function B8(a,b){var c,d,e;c=X(a);b=C(b);c=c-X(b)|0;d=0;while(d<=c){e=0;while(true){if(e>=X(b))return 1;if(O(a,d+e|0)!=O(b,e))break;e=e+1|0;}d=d+1|0;}return 0;}
function Qb(a,b,c){var d,e,f,g,h;d=new Q;S(d);e=X(a);b=C(b);f=e-X(b)|0;g=0;while(g<=f){h=0;a:{while(true){if(h>=X(b)){M(d,c);g=g+(X(b)-1|0)|0;break a;}if(O(a,g+h|0)!=O(b,h))break;h=h+1|0;}Bs(d,O(a,g));}g=g+1|0;}M(d,IR(a,g));return R(d);}
function ACv(a){return a;}
function IZ(a){var b,c,d,e,f;b=C(a.C).data;c=Ce(b.length);d=0;while(true){e=c.data;if(d>=e.length)break;f=B(d,b);e[f]=b[f];d=f+1|0;}return c;}
function Jp(b){var c;I8();c=new Q;S(c);return R(C(Bc(c,b)));}
function Bh(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=C(Z(b,BA));if(X(c)!=X(a))return 0;d=0;while(d<X(c)){if(O(a,d)!=O(c,d))return 0;d=d+1|0;}return 1;}
function Hc(a){var b,c,d,e;a:{if(!a.eH){b=C(a.C).data;c=b.length;d=0;while(true){if(d>=c)break a;e=DZ(d);d=b[e];a.eH=(31*a.eH|0)+d|0;d=e+1|0;}}}return a.eH;}
function I7(a,b){var c,d,e,f,g,h,i,j;b=C(TH(b));c=AHF();b=Np(b,a);d=0;e=0;if(!X(a)){f=J(BA,1);g=f.data;g[AND(0,g)]=E(1);}else{while(true){b=C(b);if(!Nk(b))break;d=d+1|0;HB(c,C(Cl(a,e,GD(C(b.bd),0))));e=I4(C(b.bd),0);}HB(c,C(Cl(a,e,X(a))));h=d+1|0;a:{while(true){h=h+(-1)|0;if(h<0)break;if(X(C(Z(C1(c,h),BA))))break a;Qh(c,h);}}if(h<0)h=0;b=J(BA,h);i=b.data;e=c.P;h=i.length;if(h<e)b=JC(ET(C(DW(b))),e);else while(e<h){j=null;e=DZ(e);i[e]=j;e=e+1|0;}h=0;c=M3(c);while(true){c=C(c);if(!OW(c))break;d=h+1|0;j=QW(c);b
=C(b);i=b.data;i[B(h,i)]=j;h=d;}f=Dc(b,$rt_arraycls(BA));}return f;}
function AJS(){var b,c;b=Ce(0);ASB=b;c=new BA;I8();c.C=b;ASC=c;ASD=new Qk;}
var FF=G(Cv);
var Gs=G(FF);
var U9=G(Gs);
var Dq=G();
function Ds(){Dq.call(this);this.f1=0;}
var ASE=null;var ASF=null;function AJI(a){var b=new Ds();TV(b,a);return b;}
function TV(a,b){a.f1=b;}
function Kn(b){var c,d,e,f,g,h;if(!b)c=E(50);else{d=(((32-Lr(b)|0)+4|0)-1|0)/4|0;e=Ce(d);f=(d-1|0)*4|0;d=0;while(f>=0){g=e.data;h=d+1|0;g[B(d,g)]=Kf((b>>>f|0)&15,16);f=f-4|0;d=h;}c=KB(e);}return c;}
function Jx(b){return C(Li(ANq(20),b,10)).bs();}
function Gz(b,c){if(b!==null)return ZL(b,0,X(b),c);b=new B6;Y(b,E(51));K(b);}
function ZL(b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d){b=new B6;Y(b,E(52));K(b);}if(e>=2&&e<=36){a:{f=0;g=C(b);switch(O(g,c)){case 43:h=c+1|0;break a;case 45:f=1;h=c+1|0;break a;default:}h=c;}i=0;if(h==d){b=new B6;Be(b);K(b);}while(h<d){j=h+1|0;k=Iq(O(g,h));if(k<0){b=new B6;l=Cl(g,c,d);g=new Q;S(g);M(C(M(g,E(53))),l);Y(b,R(g));K(b);}if(k>=e){b=new B6;m=Cl(g,c,d);l=new Q;S(l);M(C(M(C(Bc(C(M(l,E(54))),e)),E(47))),m);Y(b,R(l));K(b);}i=DS(e,i)+k|0;if(i<0){if(j==d&&i==(-2147483648)&&f)return (-2147483648);b=new B6;l=
Cl(g,c,d);g=new Q;S(g);M(C(M(g,E(55))),l);Y(b,R(g));K(b);}h=j;}if(f)i= -i|0;return i;}b=new B6;g=new Q;S(g);Bc(C(M(g,E(56))),e);Y(b,R(g));K(b);}
function TK(b){return Gz(b,10);}
function DI(b){var c,d,e;if(b>=(-128)&&b<=127){a:{if(ASF===null){ASF=J(Ds,256);c=0;while(true){d=C(ASF).data;if(c>=d.length)break a;e=AJI(c-128|0);c=B(c,d);d[c]=e;c=c+1|0;}}}d=ASF;b=b+128|0;d=C(d).data;return d[B(b,d)];}return AJI(b);}
function H2(a){return a.f1;}
function RB(a,b){if(a===b)return 1;return b instanceof Ds&&C(Z(b,Ds)).f1==a.f1?1:0;}
function Lr(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function FY(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function YI(){ASE=H($rt_intcls());}
function Fz(){var a=this;D.call(a);a.m=null;a.w=0;}
function ASG(){var a=new Fz();S(a);return a;}
function ANq(a){var b=new Fz();Ff(b,a);return b;}
function S(a){Ff(a,16);}
function Ff(a,b){a.m=Ce(b);}
function Li(a,b,c){return Vs(a,a.w,b,c);}
function Vs(a,b,c,d){var e,f,g,h,i,j;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B_(a,b,b+1|0);else{B_(a,b,b+2|0);f=a.m;g=b+1|0;f=C(f).data;f[B(b,f)]=45;b=g;}f=a.m;c=Kf(c,d);f=C(f).data;f[B(b,f)]=c;}else{g=1;h=1;i=$rt_udiv((-1),d);b:{while(true){j=DS(g,d);if($rt_ucmp(j,c)>0){j=g;break b;}h=h+1|0;if($rt_ucmp(j,i)>0)break;g=j;}}if(!e)h=h+1|0;B_(a,b,b+h|0);if(e)e=b;else{f=a.m;e=b+1|0;f=C(f).data;f[B(b,f)]=45;}while(true){if(!j)break a;f=a.m;g=e+1|0;h=Kf($rt_udiv(c,j),d);f=C(f).data;f[B(e,f)]=h;c=$rt_umod(c,
j);j=$rt_udiv(j,d);e=g;}}}return a;}
function W5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=CP(c,0.0);if(!d){if(1.0/c===Infinity){B_(a,b,b+3|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=48;b=d+1|0;e[B(d,e)]=46;e[B(b,e)]=48;return a;}B_(a,b,b+4|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=45;b=d+1|0;e[B(d,e)]=48;d=b+1|0;e[B(b,e)]=46;e[B(d,e)]=48;return a;}if($rt_globals.isNaN(c)?1:0){B_(a,b,b+3|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=78;b=d+1|0;e[B(d,e)]=97;e[B(b,e)]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B_(a,b,b+8|0);d=b;}else{B_(a,b,b+9|0);e
=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=45;}e=a.m;b=d+1|0;e=C(e).data;e[B(d,e)]=73;d=b+1|0;e[B(b,e)]=110;b=d+1|0;e[B(d,e)]=102;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=110;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=116;e[B(b,e)]=121;return a;}f=ASH;WR(c,f);f=C(f);d=f.g_;g=f.gR;h=f.jT;i=1;j=1;if(h)j=2;k=9;l=AJu(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=B7(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B_(a,b,b+(j+
(k+m|0)|0)|0);if(!h)h=b;else{e=a.m;h=b+1|0;e=C(e).data;e[B(b,e)]=45;}o=100000000;if(n){e=a.m;b=h+1|0;e=C(e).data;e[B(h,e)]=48;h=b+1|0;e[B(b,e)]=46;while(true){b=m+(-1)|0;if(m<=0)break;l=h+1|0;e[B(h,e)]=48;m=b;h=l;}}p=0;while(p<k){if(o<=0)q=0;else{q=d/o|0;d=d%o|0;}e=a.m;m=h+1|0;b=(48+q|0)&65535;e=C(e).data;e[B(h,e)]=b;i=i+(-1)|0;if(i)h=m;else{h=m+1|0;e[B(m,e)]=46;}o=o/10|0;p=p+1|0;}if(g){e=a.m;d=h+1|0;e=C(e).data;e[B(h,e)]=69;if(g>=0)p=d;else{g= -g|0;p=d+1|0;e[B(d,e)]=45;}if(g<10)d=p;else{d=p+1|0;e[B(p,e)]=(48
+(g/10|0)|0)&65535;}e[B(d,e)]=(48+(g%10|0)|0)&65535;}return a;}
function TR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=CP(c,0.0);if(!d){if(1.0/c===Infinity){B_(a,b,b+3|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=48;b=d+1|0;e[B(d,e)]=46;e[B(b,e)]=48;return a;}B_(a,b,b+4|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=45;b=d+1|0;e[B(d,e)]=48;d=b+1|0;e[B(b,e)]=46;e[B(d,e)]=48;return a;}if($rt_globals.isNaN(c)?1:0){B_(a,b,b+3|0);e=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=78;b=d+1|0;e[B(d,e)]=97;e[B(b,e)]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B_(a,b,b+8|0);d=b;}else{B_(a,b,b+9|0);e
=a.m;d=b+1|0;e=C(e).data;e[B(b,e)]=45;}e=a.m;b=d+1|0;e=C(e).data;e[B(d,e)]=73;d=b+1|0;e[B(b,e)]=110;b=d+1|0;e[B(d,e)]=102;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=110;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=116;e[B(b,e)]=121;return a;}f=ASI;Vv(c,f);f=C(f);g=f.hU;h=f.gD;i=f.jC;j=1;k=1;if(i)k=2;l=18;m=AH0(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=B7(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if
(h&&l==j)l=l+1|0;B_(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.m;i=b+1|0;e=C(e).data;e[B(b,e)]=45;}p=F(1569325056, 23283064);if(o){e=a.m;b=i+1|0;e=C(e).data;e[B(i,e)]=48;i=b+1|0;e[B(b,e)]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[B(i,e)]=48;n=b;i=d;}}q=0;while(q<l){if(ADS(p,Cb))d=0;else{d=EI(X3(g,p));g=AA5(g,p);}e=a.m;b=i+1|0;d=(48+d|0)&65535;e=C(e).data;e[B(i,e)]=d;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[B(b,e)]=46;}p=X3(p,Ba(10));q=q+1|0;}if(h){e=a.m;d=i+1|0;e=C(e).data;e[B(i,e)]=69;if(h>=0)o=d;else{h= -h
|0;o=d+1|0;e[B(d,e)]=45;}if(h>=100){q=o+1|0;e[B(o,e)]=(48+(h/100|0)|0)&65535;h=h%100|0;d=q+1|0;e[B(q,e)]=(48+(h/10|0)|0)&65535;}else if(h<10)d=o;else{d=o+1|0;e[B(o,e)]=(48+(h/10|0)|0)&65535;}e[B(d,e)]=(48+(h%10|0)|0)&65535;}return a;}
function AJu(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AH0(b){var c,d,e,f,g,h;c=Ba(1);d=0;e=16;f=C(ASJ).data;g=f.length-1|0;while(g>=0){h=B(g,f);if(C_(AA5(b,BB(c,f[h])),Cb)){d=d|e;h=AND(h,f);c=BB(c,f[h]);}e=e>>>1|0;g=h+(-1)|0;}return d;}
function Bs(a,b){return a.iL(a.w,b);}
function Rv(a,b,c){var d;B_(a,b,b+1|0);d=C(a.m).data;d[B(b,d)]=c;return a;}
function Ib(a,b){var c,d;c=C(a.m).data.length;if(c>=b)return;d=c>=1073741823?2147483647:B7(b,B7(c*2|0,5));a.m=SJ(a.m,d);}
function R(a){return Mf(a.m,0,a.w);}
function Ro(a,b,c,d){return a.ic(a.w,b,c,d);}
function K4(a,b,c,d,e){var f,g,h,i;B_(a,b,b+e|0);f=e+d|0;while(d<f){g=a.m;e=b+1|0;h=d+1|0;c=C(c);i=c.data;d=i[B(d,i)];g=C(g).data;g[B(b,g)]=d;b=e;d=h;}return a;}
function Hh(a,b){var c;c=C(b);return a.hh(c,0,c.data.length);}
function B_(a,b,c){var d,e,f,g;d=a.w;e=d-b|0;a.ex((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.m;d=c+f|0;e=b+f|0;g=C(g).data;e=g[B(e,g)];g[B(d,g)]=e;f=f+(-1)|0;}a.w=a.w+(c-b|0)|0;}
var GU=G(0);
var Q=G(Fz);
function ANa(){var a=new Q();AKC(a);return a;}
function AKC(a){S(a);}
function M(a,b){RM(a,a.w,b===null?E(57):b.bs());return a;}
function U(a,b){RM(a,a.w,b);return a;}
function Bc(a,b){Li(a,b,10);return a;}
function UX(a,b){W5(a,a.w,b);return a;}
function MG(a,b){TR(a,a.w,b);return a;}
function R$(a,b){Bs(a,b);return a;}
function ZM(a,b,c){var d,e,f,g,h,i;if(b>=0){d=CP(b,c);if(d<=0){e=a.w;if(b<=e){if(d){if(c>e)c=e;f=e-c|0;a.w=e-(c-b|0)|0;g=0;while(g<f){h=a.m;d=b+1|0;e=c+1|0;h=C(h).data;h[B(b,h)]=h[B(c,h)];g=g+1|0;b=d;c=e;}}return a;}}}i=new Gm;Be(i);K(i);}
function QL(a,b){var c,d,e,f,g;if(b>=0){c=a.w;if(b<c){c=c-1|0;a.w=c;while(b<c){d=a.m;e=b+1|0;d=C(d).data;f=B(e,d);d[B(b,d)]=d[f];b=f;}return a;}}g=new Gm;Be(g);K(g);}
function AFO(a,b,c,d,e){K4(a,b,c,d,e);return a;}
function ADH(a,b,c,d){Ro(a,b,c,d);return a;}
function SY(a){return a.w;}
function GB(a){return R(a);}
function AFV(a,b){Ib(a,b);}
function AGj(a,b,c){Rv(a,b,c);return a;}
function RM(a,b,c){var d,e,f,g,h;if(b>=0&&b<=a.w){a:{if(c===null)c=E(57);else if(IY(c))break a;Ib(a,a.w+X(c)|0);d=a.w-1|0;while(d>=b){e=a.m;f=d+X(c)|0;g=C(a.m).data;h=B(d,g);d=g[h];e=C(e).data;e[B(f,e)]=d;d=h+(-1)|0;}a.w=a.w+X(c)|0;f=0;while(f<X(c)){e=a.m;d=b+1|0;h=O(c,f);e=C(e).data;e[B(b,e)]=h;f=f+1|0;b=d;}}return a;}c=new Gm;Be(c);K(c);}
var Gc=G(Gs);
var Xk=G(Gc);
function ASK(a){var b=new Xk();ACE(b,a);return b;}
function ACE(a,b){Y(a,b);}
var UJ=G(Gc);
function ASL(a){var b=new UJ();AC2(b,a);return b;}
function AC2(a,b){Y(a,b);}
var Bp=G(Bq);
var Zm=G(Bp);
function ANB(){var a=new Zm();AEi(a);return a;}
function AEi(a){Be(a);}
var FO=G(Bq);
function ANz(){var a=new FO();ACX(a);return a;}
function ACX(a){Be(a);}
var Ik=G();
var ANW=null;function V6(){ANW=new Ik;}
var Hj=G();
var ASM=null;var ASN=null;var ASO=null;function D9(){if(ASM===null)ASM=AGT(ASP,0);return ASM;}
function Yx(){if(ASN===null)ASN=AGT(ASQ,0);return ASN;}
function Wo(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jz(b)&&(e+f|0)<=Jz(d)){a:{if(b!==d){b=C(b);g=ET(C(DW(b)));d=C(d);h=ET(C(DW(d)));if(!(g!==null&&h!==null)){b=new Hy;Be(b);K(b);}else if(g!==h){g=C(g);if(!Fy(g)){h=C(h);if(!Fy(h)){i=Dc(b,$rt_arraycls(D));j=0;k=c;while(j<f){l=k+1|0;i=C(i);m=i.data;n=m[B(k,m)];o=h.b3;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&Xf(n.constructor,o)?1:0)){I2(b,c,d,e,j);b=new Hy;Be(b);K(b);}j=j+1|0;k=l;}I2(b,c,d,e,f);return;}}if
(!Fy(g))break a;if(!Fy(C(h)))break a;}}I2(b,c,d,e,f);return;}b=new Hy;Be(b);K(b);}b=new Bp;Be(b);K(b);}d=new FO;Y(d,E(58));K(d);}
function Fg(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jz(b)&&(e+f|0)<=Jz(d)){I2(b,c,d,e,f);return;}b=new Bp;Be(b);K(b);}
function I2(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Qp(){return Long_fromNumber(new Date().getTime());}
function F2(b,c){var d,e;if(ASO===null){d=new JF;IV(d);Dx(d,E(59),E(60));Dx(d,E(61),E(62));Dx(d,E(63),E(64));Dx(d,E(65),E(66));Dx(d,E(67),E(68));Dx(d,E(69),E(70));Dx(d,E(71),E(60));Dx(d,E(72),E(64));e=new JF;IV(e);e.rZ=d;ASO=e;}return Z(Dx(C(ASO),b,c),BA);}
var Ym=G();
function N9(){D.call(this);this.rc=null;}
var Xy=G();
var Nt=G();
var ASR=null;function AL2(){AL2=T(Nt);AG8();}
function PM(b){var c,d,$$je;AL2();c=Z(Ig(C(ASR),b),Cf);if(c===null){c=new Mr;RT(c,4,100);a:{try{d=AG0(b,null);break a;}catch($$e){$$je=By($$e);if($$je instanceof Cp){}else{throw $$e;}}try{d=C(ADW(b,null));XZ(d,1);break a;}catch($$e){$$je=By($$e);if($$je instanceof EE){}else{throw $$e;}}d=null;}c.nI=d;if(d===null){c=new Bq;d=new Q;S(d);Y(c,R(C(U(C(U(d,E(73))),Eh(C(b))))));K(c);}DC(C(ASR),b,c);}return c;}
function AG8(){ASR=DN();}
function J7(){Dq.call(this);this.nJ=0.0;}
var ASS=null;function Oh(b){var c;c=new J7;c.nJ=b;return c;}
function JY(b){if($rt_globals.isNaN(b)?1:0)return 2143289344;return $rt_floatToRawIntBits(b);}
function XG(){ASS=H($rt_floatcls());}
function YT(){var a=this;D.call(a);a.uo=null;a.t2=0;}
function AHo(){var a=new YT();AH6(a);return a;}
function AH6(a){a.t2=1;a.uo=C4(16);}
var Vj=G();
function AJx(b){return Math.sin(b);}
function AK2(b){return Math.sqrt(b);}
function ADB(b){return Math.ceil(b);}
function AAw(b,c){return AGz(b,c);}
function AGz(b,c){return Math.pow(b,c);}
function JQ(b){return b+AIn(b)*0.5|0;}
function B$(b,c){if(b<c)c=b;return c;}
function B7(b,c){if(b>c)c=b;return c;}
function ABU(b){return Math.abs(b);}
function AIn(b){return Math.sign(b);}
var LM=G();
function Xv(){var a=this;D.call(a);a.d3=null;a.bx=0;a.oC=0;}
function AE$(a){var b=new Xv();ALc(b,a);return b;}
function ALs(a,b){var c=new Xv();Zz(c,a,b);return c;}
function ALc(a,b){Zz(a,1,b);}
function Zz(a,b,c){a.oC=b;a.d3=Bl(c);}
function N8(a,b){var c,d,e,f,g;c=a.d3;d=a.bx;e=C(c);if(d==e.data.length){e=Bl(B7(8,d*1.75|0));f=e.data;Fg(a.d3,0,e,0,B$(a.bx,f.length));a.d3=e;}c=e.data;g=a.bx;a.bx=g+1|0;c[B(g,c)]=b;}
function Ht(a,b){var c,d,e;if(b<a.bx){c=C(a.d3).data;return c[B(b,c)];}d=new Bp;e=new Q;S(e);Y(d,R(C(Bc(C(U(C(Bc(C(U(e,E(35))),b)),E(36))),a.bx))));K(d);}
var Jk=G(0);
var Io=G();
var D0=G(0);
function VR(){var a=this;Io.call(a);a.dD=0;a.bD=null;a.f3=0;a.nb=0.0;a.hp=0;}
function AF9(){var a=new VR();ADO(a);return a;}
function ALH(a){var b=new VR();R2(b,a);return b;}
function ADO(a){R2(a,16);}
function R2(a,b){var c;if(b<0){c=new Bu;Be(c);K(c);}b=ZR(b);a.dD=0;a.bD=J(G_,b);a.nb=0.75;P6(a);}
function ZR(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function P6(a){a.hp=C(a.bD).data.length*a.nb|0;}
function M8(a,b,c,d){var e,f,g;e=C(a.bD).data;f=e[B(c,e)];a:{while(f!==null){if(f.h1==d){g=f.dP;if(b!==g&&!OM(C(b),g)?0:1)break a;}f=f.ei;}}return f;}
function Ot(a){var b,c;b=C(a.bD).data;c=b[AND(0,b)];a:{while(c!==null){if(c.dP===null)break a;c=c.ei;}}return c;}
function PR(a,b,c,d){var e,f;e=new G_;RK(e,b,null);e.h1=d;f=C(a.bD).data;c=B(c,f);e.ei=f[c];f[AND(c,f)]=e;return e;}
function P9(a){var b,c,d,e,f,g,h;b=C(a.bD).data.length;b=ZR(!b?1:b<<1);c=J(G_,b);d=0;e=b-1|0;while(true){f=C(a.bD).data;if(d>=f.length)break;b=B(d,f);g=f[b];h=null;d=AND(b,f);f[d]=h;while(g!==null){b=g.h1&e;h=g.ei;c=C(c);f=c.data;b=B(b,f);g.ei=f[b];f[b]=g;g=h;}d=d+1|0;}a.bD=c;P6(a);}
var Qk=G();
var W1=G();
function Jz(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AST());}return b.data.length;}
function JC(b,c){if(b===null){b=new FO;Be(b);K(b);}if(b===H($rt_voidcls())){b=new Bu;Be(b);K(b);}if(c>=0)return AKl(C(b).b3,c);b=new RU;Be(b);K(b);}
function AKl(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Hy=G(Bq);
var CQ=G();
var ASU=null;var ASV=null;var ASW=null;var ASX=null;var ASY=null;var ASZ=null;var AS0=null;var AS1=null;var AS2=null;var AS3=null;function Rc(b){var c,d,e;c=new BA;d=Ce(1);e=d.data;e[AND(0,e)]=b;K$(c,d);return c;}
function J2(b){return b>=65536&&b<=1114111?1:0;}
function Ch(b){return (b&64512)!=55296?0:1;}
function Cy(b){return (b&64512)!=56320?0:1;}
function J5(b){return !Ch(b)&&!Cy(b)?0:1;}
function Gu(b,c){return Ch(b)&&Cy(c)?1:0;}
function DE(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function G5(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Hx(b){return (56320|b&1023)&65535;}
function Dj(b){return EU(b)&65535;}
function EU(b){if(ASX===null){if(AS0===null)AS0=XK();ASX=R6(U3((AS0.value!==null?$rt_str(AS0.value):null)));}return M5(ASX,b);}
function D5(b){return FM(b)&65535;}
function FM(b){if(ASW===null){if(AS1===null)AS1=YO();ASW=R6(U3((AS1.value!==null?$rt_str(AS1.value):null)));}return M5(ASW,b);}
function M5(b,c){var d,e,f,g,h,i;b=C(b);d=C(b.lH).data;if(c<d.length){e=B(c,d);return e+d[e]|0;}d=b.lr;e=0;d=C(d).data;f=d.length;g=(f/2|0)-1|0;a:{while(true){h=(e+g|0)/2|0;i=CP(d[B(h*2|0,d)],c);if(!i)break;if(i<=0){e=h+1|0;if(e>g)break a;}else{h=h-1|0;if(h<e)break a;g=h;}}}if(h>=0){h=h*2|0;if(h<f)return c+d[B(h+1|0,d)]|0;}return 0;}
function P3(b,c){if(c>=2&&c<=36){b=Iq(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Iq(b){var c,d,e,f,g,h,i,j,k,l;if(ASV===null){if(AS2===null)AS2=Vc();c=(AS2.value!==null?$rt_str(AS2.value):null);d=AIS(IZ(C(c)));e=Ij(d);f=Bl(e*2|0);g=0;h=0;i=0;j=0;while(j<e){k=f.data;h=h+K8(d)|0;i=i+K8(d)|0;l=g+1|0;k[B(g,k)]=h;g=l+1|0;k[B(l,k)]=i;j=j+1|0;}ASV=f;}k=ASV;l=0;k=C(k).data;g=(k.length/2|0)-1|0;while(g>=l){h=(l+g|0)/2|0;i=B(h*2|0,k);e=CP(b,k[i]);if(e>0)l=h+1|0;else{if(e>=0)return k[B(i+1|0,k)];g=h-1|0;}}return (-1);}
function Kf(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FG(b){var c,d,e;if(b<65536){c=Ce(1);d=c.data;d[AND(0,d)]=b&65535;return c;}c=Ce(2);d=c.data;e=G5(b);d[AND(0,d)]=e;b=Hx(b);d[AND(1,d)]=b;return c;}
function Ca(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&J5(b&65535))return 19;if(ASY===null){if(AS3===null)AS3=AAm();ASY=ALh((AS3.value!==null?$rt_str(AS3.value):null));}d=ASY;e=0;d=C(d).data;c=d.length-1|0;while(e<=c){f=B((e+c|0)/2|0,d);g=C(d[f]);if(b>=g.lC)e=f+1|0;else{c=g.kx;if(b>=c){d=g.kD;b=b-c|0;d=C(d).data;return d[B(b,d)];}c=f-1|0;}}return 0;}
function H5(b){a:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FC(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ca(b)!=16?0:1;}
function MM(b){switch(Ca(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function NI(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return MM(b);}return 1;}
function SB(){ASU=H($rt_charcls());ASZ=J(CQ,128);}
function XK(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function YO(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Vc(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AAm(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var Bu=G(Bq);
function F5(){D.call(this);this.p_=0;}
var AN0=null;var AN1=0;function AMT(){AMT=T(F5);AHs();}
function AHs(){AN0=DN();AN1=0;}
var Qq=G(Cp);
function Mr(){Cf.call(this);this.nI=null;}
var S1=G();
function JP(b,c){var d,e,f,g;if(b<0){d=new Bu;e=new Q;S(e);Y(d,R(C(Bc(C(U(e,E(74))),b))));K(d);}f=B7(2,ADB(b/c)|0);AHq();if(!f)f=1;else{g=f+(-1)|0;f=g|g>>1;f=f|f>>2;f=f|f>>4;f=f|f>>8;f=(f|f>>16)+1|0;}if(f<=1073741824)return f;d=new Bu;e=new Q;S(e);Y(d,R(C(Bc(C(U(e,E(75))),b))));K(d);}
var Op=G(Dq);
var AS4=null;function Y$(b,c,d,e){var f,g,h,i,j,k,l,m,n;if(e>=2&&e<=36){if(c==d){b=new B6;Y(b,E(52));K(b);}a:{f=0;b=C(b);switch(O(b,c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Cb;i=Ba(e);while(g<d){j=g+1|0;k=Iq(O(b,g));if(k<0){l=new B6;m=Cl(b,c,d);b=new Q;S(b);M(C(M(b,E(53))),m);Y(l,R(b));K(l);}if(k>=e){l=new B6;n=Cl(b,c,d);b=new Q;S(b);M(C(M(C(Bc(C(M(b,E(54))),e)),E(47))),n);Y(l,R(b));K(l);}h=Cd(BB(i,h),Ba(k));if(ALR(h,Cb)){if(j==d&&C_(h,F(0, 2147483648))&&f)return F(0, 2147483648);l
=new B6;m=Cl(b,c,d);b=new Q;S(b);M(C(M(b,E(55))),m);Y(l,R(b));K(l);}g=j;}if(f)h=AMy(h);return h;}b=new B6;l=new Q;S(l);Bc(C(M(l,E(56))),e);Y(b,R(l));K(b);}
function DT(b){var c,d;if(C_(b,Cb))return 64;c=0;d=B4(b,32);if(AD7(d,Cb))c=32;else d=b;b=B4(d,16);if(C_(b,Cb))b=d;else c=c|16;d=B4(b,8);if(C_(d,Cb))d=b;else c=c|8;b=B4(d,4);if(C_(b,Cb))b=d;else c=c|4;d=B4(b,2);if(C_(d,Cb))d=b;else c=c|2;if(AD7(B4(d,1),Cb))c=c|1;return (64-c|0)-1|0;}
function DD(b,c){return Long_udiv(b, c);}
function DR(b,c){return Long_ucompare(b, c);}
function UW(){AS4=H($rt_longcls());}
var S7=G();
function AG0(b,c){var d,e,f,g,h,i,j,k,l,$$je;if(c!==null&&c.data.length){a:{b:{try{d=C(b);b=S_(YD(d,c));}catch($$e){$$je=By($$e);if($$je instanceof H_){e=$$je;break a;}else if($$je instanceof Fx){e=$$je;break b;}else{throw $$e;}}return b;}b=new EE;f=Eh(d);d=new Q;S(d);M(C(M(d,E(76))),f);Hs(b,R(d),e);K(b);}b=new EE;f=Eh(d);d=new Q;S(d);M(C(M(C(M(d,E(77))),f)),E(78));Hs(b,R(d),e);K(b);}c=C(Km(C(b))).data;g=c.length;h=J(Eg,g);i=0;j=0;while(j<g){k=B(j,c);b=C(c[k]);if(MH(PA(b))){j=i+1|0;h=C(h);l=h.data;l[B(i,l)]
=b;i=j;}j=k+1|0;}h=C(h);if(i<h.data.length)h=Dc(IS(h,i),$rt_arraycls(Eg));c=C(h).data;return c.length<=0?null:S_(c[AND(0,c)]);}
function ADW(b,c){var d,e,f,$$je;a:{try{d=C(b);b=S_(YF(d,c));}catch($$e){$$je=By($$e);if($$je instanceof H_){e=$$je;break a;}else if($$je instanceof Fx){e=$$je;b=new EE;f=Eh(d);d=new Q;S(d);M(C(M(d,E(76))),f);Hs(b,R(d),e);K(b);}else{throw $$e;}}return b;}b=new EE;f=Eh(d);d=new Q;S(d);M(C(M(d,E(79))),f);Hs(b,R(d),e);K(b);}
var EE=G(Cp);
function AS5(a,b){var c=new EE();Hs(c,a,b);return c;}
function Hs(a,b,c){a.fB=1;a.f5=1;a.im=b;a.d4=c;}
function Th(){D.call(this);this.lY=null;}
function S_(a){var b=new Th();AJ1(b,a);return b;}
function AJ1(a,b){a.lY=b;}
function XZ(a,b){var c;c=C(a.lY);}
var H_=G(Bq);
var IX=G(Cp);
var Fx=G(IX);
function Nz(){var a=this;D.call(a);a.i5=0;a.m5=0;a.l9=0;a.j4=null;a.mW=0;a.t6=null;a.jo=0;a.nf=null;a.eU=0;a.c5=0;a.gT=0;a.i$=0;a.k2=0;a.kn=0;a.mq=0;a.lI=0;a.lS=0;a.iM=0;a.fu=0;}
function X8(a){return !a.eU&&!a.c5?1:0;}
var Mx=G(0);
function IQ(){var a=this;D.call(a);a.bH=null;a.d6=null;a.k0=null;a.lM=null;a.qH=null;a.bJ=null;a.e0=null;a.c8=null;a.eJ=null;a.cb=null;a.dp=null;a.gp=0;a.iO=0;a.gu=null;a.ig=0;a.eO=null;a.oT=null;a.oh=null;a.ek=null;a.ja=null;a.cm=null;}
var AS6=null;function Yr(a){var b,c,d,e,f,g,h;AS6=AGQ();F2(E(80),E(1));F2(E(81),$rt_str(AS6.userAgent));if(AS6.windows?1:0)F2(E(61),E(82));else if(AS6.macOS?1:0)F2(E(61),E(83));else if(!(AS6.linux?1:0))F2(E(61),E(84));else F2(E(61),E(6));b=new Lv;c=C(a.bJ).jo;b.mt=0;b.nc=0;b.ck=1;b.ck=c;AS7=b;d=$rt_str(C(Hv()).db.location.href);a.cm=d;if(B8(C(d),E(85))){b=Qb(C(a.cm),E(86),E(1));a.cm=b;a.cm=Qb(C(b),E(87),E(1));}e=FU(C(a.cm),63,0);if(e>=0)a.cm=Cl(C(a.cm),0,e);b=a.bJ;AS8=C(b).m5;d=AMP(b);a.bH=d;b=new KO;f=a.cm;d
=d.bA;b.h7=DN();b.hB=DN();b.h0=DN();b.il=DN();b.it=DN();b.kC=DN();b.e2=E9();b.hx=(-1);b.kt=f;Yy(b,d,a);a.eO=b;c=C(a.bJ).mW;g=AS7;f=IK(b);h=new Q;S(h);M(C(M(h,f)),E(88));h=R(h);f=new Nc;f.c1=b;f.j1=E(88);f.jZ=c;Gw(C(g),1,h,f);a.d6=ALF(C(a.bH).bA);b=new Qe;b.ta=a.eO;a.k0=b;b=new PD;b.qo=ALH(16);a.lM=b;a.gu=new Ny;b=new Pz;b.qq=0;b.fg=1;b.oD=AMi(b);b.hT=E(1);a.oh=b;if(C(a.bJ).l9)Wq(a);AS9=a;b=a.bH;AS$=b;AS_=PF(C(b));ATa=PF(C(a.bH));ATb=SH(C(a.bH));ATc=a.d6;ATd=a.k0;ATe=a.lM;b=ANt();a.qH=b;ATf=b;b=GW(C(a.cb));f
=AM3(a);b.addEventListener("visibilitychange",BF(f,"handleEvent"));Qy(C(a.cb),a);if(X8(C(a.bJ)))Ts(C(a.cb),E(89),ALK(a));}
function Vo(a){var b,c,d,e,f,g,h,i,$$je;b=a.dp;a:{try{AME();c=ATg;d=YZ(C(b));c=C(c).data;switch(c[B(d,c)]){case 1:d=Vy(C(AAV()));if(!d){GO();a.dp=ATh;e=$rt_globals.window.document.getElementById("progress");if(e!==null)e.style.setProperty("display","none");break a;}f=C(a.eO).hx;if(f>0){g=25+((75*(f-d|0)|0)/f|0)|0;h=$rt_globals.window.document.getElementById("progress-bar");if(h!==null){e=h.style;h=ANa();R$(C(Bc(h,g)),37);i=GB(h);e.setProperty("width",$rt_ustr(i));}}break a;case 2:break;default:break a;}if(a.e0
!==null){b=a.c8;if(b!==null){OO(b);Xu(C(a.c8));}Ud(C(a.d6),null);NV(C(a.d6));Iz(C(a.ek));a.c8=a.e0;a.e0=null;GO();a.dp=ATi;C(a.bH).fT=Cb;}Sz(a,a.c8);break a;}catch($$e){$$je=By($$e);if($$je instanceof Cv){i=$$je;}else{throw $$e;}}NA(i);K(i);}Qy(C(a.cb),a);}
function Sz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=C(a.bH);d=Qp();e=AMe(AFa(d,c.ga))/1000.0;c.ly=e;c.ga=d;e=c.fO+e;c.fO=e;f=c.i4+1|0;c.i4=f;if(e>1.0){c.ng=f;c.fO=0.0;c.i4=0;}g=J6(C(AS$));h=Kq(C(AS$));f=0;i=a.dp;GO();if(i===ATi){a.dp=ATh;b=C(b);N0(b);f=1;}if(!(g==a.gp&&h==a.iO&&!f)){a.gp=g;a.iO=h;C(AS_).gs(0,0,g,h);b=C(b);c=b.fQ;if(c!==null)c.zS(g,h);}c=a.ja;i=a.ek;c=C(c);i=C(i);j=i.bu;g=i.H;k=c.bu;h=c.H+g|0;l=C(k);if(h>l.data.length)l=MP(c,B7(B7(8,h),c.H*1.75|0));Fg(j,0,l,c.H,g);c.H=h;Iz(C(a.ek));m=0;while(true)
{c=C(a.ja);if(m>=c.H)break;i=C(Dc(J3(c,m),En));n=C(C(i.hM).eX);c=JC(ET(C(DW(C(n.bu)))),n.H);Wo(n.bu,0,c,0,n.H);j=Dc(c,$rt_arraycls(BA));C(C(C(C(i.hM).fF).js).j4).zH(j);m=m+1|0;}Iz(c);c=C(a.bH);d=Cd(c.fT,Ba(1));c.fT=d;if(ALP(d,Ba(60))){b=C(b);C(AS_).ix(16384);c=GM(b);So();HE(C(c),ATj);c=GM(b);LP();i=ARK;c=C(C(c).iB);i=C(i);c.cx=i.cx;c.cw=i.cw;c.cv=i.cv;c.cu=i.cu;T2(C(GM(b)),50.0,50.0,50.0,B7(1,6.0*AAw(50.0,0.3333333333333333)|0));G9(C(GM(b)));}NV(C(a.d6));}
function Pd(a,b,c){var d,e;if(a.ig>=2){d=C(a.gu);d=D9();e=new Q;S(e);M(C(M(C(M(e,b)),E(47))),c);Dp(C(d),R(e));}}
function Wq(a){var b,c,d,e;b=a.eO;c=new KP;c.nG=a;b=C(b);d=AS7;b=IK(b);e=new Q;S(e);M(C(M(e,b)),E(90));b=R(e);Kl(C(d),1,b,c);}
var Rd=G(0);
function Jr(){D.call(this);this.fQ=null;}
function Xu(a){var b;b=a.fQ;if(b!==null)b.xD();}
function OO(a){var b;b=a.fQ;if(b!==null)b.jK();}
function N0(a){var b;b=a.fQ;if(b!==null)b.my();}
function MO(){var a=this;Jr.call(a);a.gq=null;a.eT=0;}
function GM(a){var b,$$je;if((a.eT&2)<<24>>24)return a.gq;E4(a);a:{try{if((a.eT&2)<<24>>24)break a;a.gq=ALv();a.eT=(a.eT|2)<<24>>24;break a;}catch($$e){$$je=By($$e);b=$$je;}CE(a);K(b);}CE(a);return a.gq;}
var Gm=G(Bp);
var Yo=G();
var Kv=G(0);
function FI(){var a=this;D.call(a);a.dP=null;a.dU=null;}
function ATk(a,b){var c=new FI();RK(c,a,b);return c;}
function RK(a,b,c){a.dP=b;a.dU=c;}
function G_(){var a=this;FI.call(a);a.h1=0;a.ei=null;}
var NU=G();
var ATl=null;function MH(b){return !(b&1)?0:1;}
function Sm(){var b,c;b=Bl(12);c=b.data;c[AND(0,c)]=1;c[AND(1,c)]=4;c[AND(2,c)]=2;c[AND(3,c)]=1024;c[AND(4,c)]=8;c[AND(5,c)]=16;c[AND(6,c)]=128;c[AND(7,c)]=64;c[AND(8,c)]=32;c[AND(9,c)]=256;c[AND(10,c)]=2048;c[AND(11,c)]=512;ATl=b;}
var SR=G();
function SJ(b,c){var d,e,f,g;d=Ce(c);b=C(b).data;e=B$(c,b.length);f=0;while(f<e){g=d.data;f=B(f,b);c=b[f];f=AND(f,g);g[f]=c;f=f+1|0;}return d;}
function ZA(b,c){var d,e,f,g;d=Fn(c);b=C(b).data;e=B$(c,b.length);f=0;while(f<e){g=d.data;f=B(f,b);c=b[f];f=AND(f,g);g[f]=c;f=f+1|0;}return d;}
function IS(b,c){var d,e,f,g,h,i;d=C(b);b=d.data;e=JC(ET(C(DW(d))),c);f=B$(c,b.length);g=0;while(g<f){g=B(g,b);h=b[g];e=C(e);i=e.data;g=AND(g,i);i[g]=h;g=g+1|0;}return e;}
function Uh(b,c,d,e){var f,g,h;if(c>d){f=new Bu;Be(f);K(f);}while(c<d){g=c+1|0;b=C(b);h=b.data;h[B(c,h)]=e;c=g;}}
function If(b,c){var d;d=C(b);Uh(d,0,d.data.length,c);}
function YE(b,c){var d,e,f,g,h,i,j;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data.length;if(e==d.length){f=0;a:{while(true){if(f>=e){f=(-1);break a;}d=c.data;g=b.data;h=f+0|0;i=g[B(h,g)];j=d[B(h,d)];if(!(i===j?1:i!==null?OM(i,j):j!==null?0:1))break;f=f+1|0;}}return f>=0?0:1;}}return 0;}
var JA=G();
var NZ=G(0);
function Eg(){var a=this;JA.call(a);a.pO=null;a.pE=null;a.lW=0;a.kZ=0;a.lE=null;a.s_=null;}
function PA(a){var b,c,d;a:{b=a.lW;c=a.kZ;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function Nw(a){return C(a.lE).cn();}
var E5=G(Bz);
var ANX=null;var ATi=null;var ATh=null;var ATm=null;function GO(){GO=T(E5);AGd();}
function Sx(a,b){var c=new E5();AAk(c,a,b);return c;}
function AAk(a,b,c){GO();Cq(a,b,c);}
function AGd(){var b,c,d,e;ANX=Sx(E(91),0);ATi=Sx(E(92),1);b=Sx(E(93),2);ATh=b;c=J(E5,3);d=c.data;e=ANX;d[AND(0,d)]=e;e=ATi;d[AND(1,d)]=e;d[AND(2,d)]=b;ATm=c;}
var KV=G(0);
var BS=G(0);
var NR=G(0);
function O4(){var a=this;D.call(a);a.db=null;a.gI=null;}
var ATn=null;function AEX(){AEX=T(O4);AEJ();}
function ADY(){var a=new O4();U2(a);return a;}
function Hv(){AEX();return ATn;}
function U2(a){AEX();a.db=$rt_globals.window;}
function GW(a){return a.db.document;}
function Qy(a,b){a.gI=b;$rt_globals.requestAnimationFrame(BF(a,"onAnimationFrame"));}
function MW(a){return a.db.document.documentElement.clientWidth;}
function LZ(a){return a.db.document.documentElement.clientHeight;}
function Ts(a,b,c){var d;d=Cz(c,"handleEvent");a.db.addEventListener($rt_ustr(b),BF(d,"handleEvent"));}
function AEJ(){ATn=ADY();}
function AHQ(a,b){var c;b;c=a.gI;a.gI=null;Vo(C(c));}
var TP=G();
function AGQ(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
var Ks=G(0);
function Lv(){var a=this;D.call(a);a.et=0;a.mt=0;a.nc=0;a.ck=0;}
function Vy(a){return a.et;}
function Er(a){a.et=a.et-1|0;}
function G8(a){a.et=a.et+1|0;}
function Gw(a,b,c,d){var e,f,g;if(a.ck){e=D9();f=new Q;S(f);M(C(M(f,E(94))),c);Dp(C(e),R(f));}G8(a);g=new KW;g.cJ=a;g.eK=b;g.cB=c;g.cZ=d;Kh(g);KX(g);}
function Kl(a,b,c,d){var e,f;if(a.ck){e=D9();f=new Q;S(f);M(C(M(f,E(95))),c);Dp(C(e),R(f));}G8(a);e=new $rt_globals.XMLHttpRequest();f=new KY;f.dn=a;f.cA=e;f.hv=b;f.fh=c;f.em=d;f=BF(f,"handleEvent");e.onreadystatechange=f;Ki(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function UV(a,b,c,d){var e;e=new KZ;e.sQ=a;e.fp=d;Fo(a,b,c,e);}
function Fo(a,b,c,d){var e,f,g;if(a.ck){e=D9();f=new Q;S(f);M(C(M(f,E(94))),c);Dp(C(e),R(f));}G8(a);g=new K0;g.cC=a;g.en=b;g.ct=c;g.dc=d;Kh(g);KX(g);}
function Ki(a,b,c){var d;d=new K2;d.tp=a;d.j3=c;c=BF(d,"handleEvent");b.onprogress=c;}
var MB=G();
var AS7=null;function AAV(){return AS7;}
var IF=G();
var ATo=0;var AS8=0;function U7(){ATo=1;}
var Pt=G(0);
function H8(){var a=this;D.call(a);a.gG=null;a.bA=null;a.mH=null;a.df=null;a.lO=null;a.oG=null;a.ng=0.0;a.ga=Cb;a.fT=Cb;a.ly=0.0;a.fO=0.0;a.i4=0;}
var ATp=0;var ATq=null;function AMM(){AMM=T(H8);ABZ();}
function AMP(a){var b=new H8();Wj(b,a);return b;}
function Wj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AMM();a.ng=0.0;a.ga=Qp();a.fT=Ba(-1);a.ly=0.0;a.fO=0.0;a.mH=b;c=GW(ADY());d=C(b);b=d.nf;a.bA=c.getElementById($rt_ustr(b));e=ADM();b=!!d.mq;e.alpha=b;b=!!d.kn;e.antialias=b;b=!!d.k2;e.stencil=b;b=!!d.lI;e.premultipliedAlpha=b;b=!!d.lS;e.preserveDrawingBuffer=b;f=a.bA;if(d.i5)a.gG=f.getContext("webgl2",e);a:{if(d.i5){b=a.gG;if(b!==null){if(!d.iM)g=ANn(b);else{g=new Lw;R1(g,b);}a.lO=g;a.df=g;break a;}}g=f.getContext("webgl",e);a.gG=g;if(!d.iM)b=ANe(g);else{b=new Q_;O3(b,
g);}a.df=b;}h=C(a.df).dZ(7938);i=C(a.df).dZ(7936);j=C(a.df).dZ(7937);b=new M2;AAT();g=ATr;b.nk=E(96);if(g===ATs){EB();b.cp=ATt;}else if(g===ATu){EB();b.cp=ATt;}else if(g===ATv){EB();b.cp=ATw;}else if(g===ATx){EB();b.cp=ATw;}else if(g!==g){EB();b.cp=ATy;}else{EB();b.cp=ATz;}g=b.cp;EB();if(g===ATt)IE(b,E(97),h);else if(g===ATz)IE(b,E(98),h);else if(g===ATw)IE(b,E(99),h);else{b.i8=(-1);b.h9=(-1);b.ip=(-1);i=E(1);j=E(1);}b.nO=i;b.qj=j;a.oG=b;k=d.eU;if(!(k<0&&d.c5<0)){if(k&&d.c5?1:0)HO(a,k,d.c5);else{l=C(Hv());k
=MW(l)-d.gT|0;m=LZ(l)-d.i$|0;n=!d.fu?1.0:JR(a);HO(a,n*k|0,n*m|0);}}b=a.bA;g=new Pv;g.nV=a;Sk(b,BF(g,"fullscreenChanged"));}
function PF(a){return a.df;}
function SH(a){return a.lO;}
function J6(a){return a.bA.width;}
function Kq(a){return a.bA.height;}
function HO(a,b,c){var d,e,f,g,h,i;d=a.bA;e=b;d.width=e;d=a.bA;e=c;d.height=e;if(C(a.mH).fu){f=JR(a);e=a.bA.style;g=b/f;ACN();h=C(ATA);i=new Q;S(i);M(C(MG(i,g)),E(100));h=R(i);e.setProperty("width",$rt_ustr(h));f=c/f;d=C(ATA);d=new Q;S(d);M(C(MG(d,f)),E(100));d=R(d);e.setProperty("height",$rt_ustr(d));}}
function JR(a){return $rt_globals.devicePixelRatio||1;}
function ABZ(){ATp=0;ATq=CW();}
function Sk(b,c){if(b.requestFullscreen){$rt_globals.document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){$rt_globals.document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){$rt_globals.document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){$rt_globals.document.addEventListener("msfullscreenchange",c,false);}}
function KO(){var a=this;D.call(a);a.h7=null;a.hB=null;a.h0=null;a.il=null;a.it=null;a.kC=null;a.e2=null;a.hx=0;a.kt=null;}
function Yy(a,b,c){var d,e,f;d=C(c);e=C(d.bJ);if(e.j4!==null){f=b.ownerDocument;c=new Nf;c.rb=a;f.addEventListener("dragenter",BF(c,"handleEvent"),!!0);c=new Ng;c.tm=a;f.addEventListener("dragover",BF(c,"handleEvent"),!!0);c=new Nb;c.ka=a;c.jM=d;c.js=e;f.addEventListener("drop",BF(c,"handleEvent"));}}
function IK(a){var b,c;b=a.kt;c=new Q;S(c);M(C(M(c,b)),E(101));return R(c);}
function KT(a,b,c,d){var e,f;a:{ANk();e=ATB;f=C(b).v;e=C(e).data;switch(e[B(f,e)]){case 1:break;case 2:DC(C(a.hB),c,Z(d,Gv));break a;case 3:DC(C(a.it),c,Z(d,Gv));break a;case 4:DC(C(a.h0),c,Z(d,Gv));break a;case 5:DC(C(a.h7),c,null);break a;default:break a;}DC(C(a.il),c,Z(d,BA));}}
var CB=G();
function AGB(a,b){}
var Pc=G(0);
var Dm=G(0);
function WN(){var a=this;D.call(a);a.z=null;a.dA=0;a.b5=null;a.bM=null;a.J=null;a.I=null;a.e5=null;a.e6=null;a.fC=null;a.dT=0;a.gv=null;a.fz=0;a.hE=null;a.iT=null;a.k_=null;a.ba=null;a.ci=Cb;a.dk=0;}
function ALF(a){var b=new WN();AHY(b,a);return b;}
function AKU(b){var c,d,e,f;c=AS6;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(ABU(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
function AHY(a,b){a.dA=0;a.b5=ANw(20,0.800000011920929);a.bM=RP(20);a.J=Bl(20);a.I=Bl(20);a.e5=Bl(20);a.e6=Bl(20);a.fC=AJM();a.dT=0;a.gv=RP(256);a.fz=0;a.hE=RP(256);a.iT=RP(5);a.k_=AJM();a.dk=1;a.z=b;WH(a);}
function WH(a){var b;b=a.z.ownerDocument;b.addEventListener("mousedown",BF(a,"handleEvent"),!!0);b.addEventListener("mouseup",BF(a,"handleEvent"),!!0);b.addEventListener("mousemove",BF(a,"handleEvent"),!!0);b.addEventListener("wheel",BF(a,"handleEvent"),!!0);b.addEventListener("keydown",BF(a,"handleEvent"),!!0);b.addEventListener("keyup",BF(a,"handleEvent"),!!0);b.addEventListener("keypress",BF(a,"handleEvent"),!!0);a.z.addEventListener("touchstart",BF(a,"handleEvent"),!!1);a.z.addEventListener("touchmove",
BF(a,"handleEvent"),!!1);a.z.addEventListener("touchcancel",BF(a,"handleEvent"),!!1);a.z.addEventListener("touchend",BF(a,"handleEvent"),!!1);}
function WU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a:{c=C($rt_str(b.type));if(Bh(c,E(102))){$rt_globals.window.focus();d=b.target;e=a.z;if(d!==e?0:1){f=C(a.bM).data;if(!f[AND(0,f)]){a.dk=1;a.dA=1;f[AND(0,f)]=1;g=JN(b.button);TC(C(a.fC),g);f=C(a.iT).data;f[B(g,f)]=1;f=C(a.e5).data;f[AND(0,f)]=0;f=C(a.e6).data;f[AND(0,f)]=0;if(!Jq(a)){h=FL(a,b,a.z);i=F8(a,b,a.z);f=C(a.J).data;f[AND(0,f)]=h;f=C(a.I).data;f[AND(0,f)]=i;}else{f=C(a.J).data;j=AND(0,f);f[j]=f[j]+b.movementX|0;f=C(a.I).data;j=AND(0,f);f[j]
=f[j]+b.movementY|0;}a.ci=D8();k=a.ba;if(k!==null){f=C(a.J).data;l=f[AND(0,f)];f=C(a.I).data;k.nT(l,f[AND(0,f)],0,JN(b.button));}b.preventDefault();b.stopPropagation();break a;}}m=FL(a,b,e);n=F8(a,b,a.z);if(!(m>=0.0&&m<=J6(C(AS$))&&n>=0.0&&n<=Kq(C(AS$))))a.dk=0;return;}if(Bh(c,E(103))){f=C(a.bM).data;if(!f[AND(0,f)])return;Zu(C(a.fC),JN(b.button));f=a.bM;j=C(a.fC).bz<=0?0:1;f=C(f).data;f[AND(0,f)]=j;if(!Jq(a)){j=FL(a,b,a.z);f=C(a.J).data;j=j-f[AND(0,f)]|0;h=F8(a,b,a.z);f=C(a.I).data;Ed(a,0,j,h-f[AND(0,f)]|0);f
=a.J;j=FL(a,b,a.z);f=C(f).data;f[AND(0,f)]=j;f=a.I;j=F8(a,b,a.z);f=C(f).data;f[AND(0,f)]=j;}else{Ed(a,0,b.movementX|0,b.movementY|0);f=C(a.J).data;j=AND(0,f);f[j]=f[j]+b.movementX|0;f=C(a.I).data;j=AND(0,f);f[j]=f[j]+b.movementY|0;}a.ci=D8();f=C(a.bM).data;f[AND(0,f)]=0;k=a.ba;if(k!==null){f=C(a.J).data;l=f[AND(0,f)];f=C(a.I).data;k.kO(l,f[AND(0,f)],0,JN(b.button));}}else if(!Bh(c,E(104))){if(Bh(c,E(105))){if(a.ba!==null){o=AKU(b);C(a.ba).vd(0.0,o|0);}a.ci=D8();}else if(Bh(c,E(106))){a.dA=1;p=b.changedTouches;l
=0;q=p.length;while(l<q){k=p.item(l);j=k.identifier;e=a.b5;h=Zo(a);Eb(C(e),j,DI(h));f=C(a.bM).data;j=B(h,f);f[j]=1;f=a.J;h=FA(a,k,a.z);f=C(f).data;j=AND(j,f);f[j]=h;f=a.I;i=F6(a,k,a.z);f=C(f).data;h=AND(j,f);f[h]=i;f=C(a.e5).data;h=AND(h,f);f[h]=0;f=C(a.e6).data;h=AND(h,f);f[h]=0;k=a.ba;if(k!==null){f=C(a.J).data;h=AND(h,f);j=f[h];f=C(a.I).data;r=AND(h,f);k.nT(j,f[r],r,0);}l=l+1|0;}a.ci=D8();b.preventDefault();}}else{if(!Jq(a)){h=FL(a,b,a.z);i=F8(a,b,a.z);f=C(a.J).data;q=h-f[AND(0,f)]|0;f=C(a.I).data;Ed(a,0,
q,i-f[AND(0,f)]|0);f=C(a.J).data;f[AND(0,f)]=h;f=C(a.I).data;f[AND(0,f)]=i;}else{Ed(a,0,b.movementX|0,b.movementY|0);f=C(a.J).data;j=AND(0,f);f[j]=f[j]+b.movementX|0;f=C(a.I).data;j=AND(0,f);f[j]=f[j]+b.movementY|0;}a.ci=D8();k=a.ba;if(k!==null){f=C(a.bM).data;if(!f[AND(0,f)]){f=C(a.J).data;l=f[AND(0,f)];f=C(a.I).data;k.vD(l,f[AND(0,f)]);}else{f=C(a.J).data;l=f[AND(0,f)];f=C(a.I).data;k.tA(l,f[AND(0,f)],0);}}}}if(Bh(c,E(107))){p=b.changedTouches;l=0;q=p.length;while(l<q){s=p.item(l);j=s.identifier;t=H2(C(Z(BU(C(a.b5),
j),Ds)));j=FA(a,s,a.z);f=C(a.J).data;t=B(t,f);j=j-f[t]|0;h=F6(a,s,a.z);f=C(a.I).data;t=AND(t,f);Ed(a,t,j,h-f[t]|0);f=a.J;j=FA(a,s,a.z);f=C(f).data;t=AND(t,f);f[t]=j;f=a.I;j=F6(a,s,a.z);f=C(f).data;t=AND(t,f);f[t]=j;k=a.ba;if(k!==null){f=C(a.J).data;t=AND(t,f);j=f[t];f=C(a.I).data;t=AND(t,f);k.tA(j,f[t],t);}l=l+1|0;}a.ci=D8();b.preventDefault();}if(Bh(c,E(108))){p=b.changedTouches;l=0;u=p.length;while(l<u){s=p.item(l);j=s.identifier;t=H2(C(Z(BU(C(a.b5),j),Ds)));Ra(C(a.b5),j);f=C(a.bM).data;t=B(t,f);f[t]=0;h=
FA(a,s,a.z);i=F6(a,s,a.z);f=C(a.J).data;t=AND(t,f);j=h-f[t]|0;f=C(a.I).data;t=AND(t,f);Ed(a,t,j,i-f[t]|0);f=C(a.J).data;t=AND(t,f);f[t]=h;v=C(a.I).data;t=AND(t,v);v[t]=i;k=a.ba;if(k!==null){t=AND(t,f);j=f[t];t=AND(t,v);k.kO(j,v[t],t,0);}l=l+1|0;}a.ci=D8();b.preventDefault();}if(Bh(c,E(109))){p=b.changedTouches;l=0;u=p.length;while(l<u){s=p.item(l);j=s.identifier;t=H2(C(Z(BU(C(a.b5),j),Ds)));Ra(C(a.b5),j);f=C(a.bM).data;t=B(t,f);f[t]=0;h=FA(a,s,a.z);i=F6(a,s,a.z);f=C(a.J).data;t=AND(t,f);j=h-f[t]|0;f=C(a.I).data;t
=AND(t,f);Ed(a,t,j,i-f[t]|0);f=C(a.J).data;t=AND(t,f);f[t]=h;v=C(a.I).data;t=AND(t,v);v[t]=i;k=a.ba;if(k!==null){t=AND(t,f);j=f[t];t=AND(t,v);k.kO(j,v[t],t,0);}l=l+1|0;}a.ci=D8();b.preventDefault();}}
function Sc(a,b){var c,d,e,f,g,h,i;c=C($rt_str(b.type));if(!(Bh(c,E(110))&&a.dk)){if(Bh(c,E(111))&&a.dk){d=b.charCode&65535;e=a.ba;if(e!==null)e.np(d);if(d==9){b.preventDefault();b.stopPropagation();}}else if(Bh(c,E(112))&&a.dk){f=V_(b.keyCode);if(Qj(a,f))b.preventDefault();g=C(a.gv).data;h=B(f,g);if(g[h]){a.dT=a.dT-1|0;h=AND(h,g);g[h]=0;}e=a.ba;if(e!==null)e.u6(h);if(h==61){b.preventDefault();b.stopPropagation();}}}else{a:{f=V_(b.keyCode);i=0;switch(f){case 67:i=8;break a;case 112:i=127;break a;default:}}if
(Qj(a,f))b.preventDefault();if(f!=67&&f!=112){g=C(a.gv).data;f=B(f,g);if(!g[f]){a.dT=a.dT+1|0;f=AND(f,g);g[f]=1;a.fz=1;g=C(a.hE).data;f=AND(f,g);g[f]=1;e=a.ba;if(e!==null)e.n7(f);}}else{b.preventDefault();e=a.ba;if(e!==null){e.n7(f);C(a.ba).np(i);}}if(f==61){b.preventDefault();b.stopPropagation();}}}
function Zo(a){var b,c,d,e,f,g,h,i;b=0;while(true){if(b>=20)return (-1);a:{b:{c=a.b5;d=DI(b);c=C(c);e=c.bR;if(d!==null){if(c.cY&&RB(d,c.cT)){f=1;break a;}e=C(e).data;f=e.length-1|0;while(true){if(f<0)break b;g=B(f,e);if(RB(d,e[g]))break;f=g+(-1)|0;}f=1;break a;}if(c.cY&&c.cT===null){f=1;break a;}h=c.cd;e=C(e).data;f=e.length-1|0;while(true){if(f<0)break b;h=C(h);i=h.data;g=B(f,i);if(i[g]){g=AND(g,e);if(e[g]===null)break;}f=g+(-1)|0;}f=1;break a;}f=0;}if(!f)break;b=b+1|0;}return b;}
function NV(a){var b,c,d,e;a:{if(a.dA){a.dA=0;b=0;while(true){c=C(a.iT).data;if(b>=c.length)break a;d=B(b,c);c[d]=0;b=d+1|0;}}}b:{if(a.fz){a.fz=0;e=0;while(true){c=C(a.hE).data;if(e>=c.length)break b;e=B(e,c);c[e]=0;e=e+1|0;}}}}
function Ed(a,b,c,d){var e;e=C(a.e5).data;b=B(b,e);e[b]=c;e=C(a.e6).data;e[AND(b,e)]=d;}
function MV(a,b){if(Bh(C($rt_str(b.compatMode)),E(113)))b=b.documentElement;return b;}
function In(a,b){return b.scrollTop|0;}
function PH(a,b){return In(a,MV(a,b));}
function HW(a,b){return b.scrollLeft|0;}
function Ns(a,b){return HW(a,MV(a,b));}
function FL(a,b,c){return JQ(c.width*1.0/Mi(a,c)*(((b.clientX-Ph(a,c)|0)+HW(a,c)|0)+Ns(a,c.ownerDocument)|0));}
function F8(a,b,c){return JQ(c.height*1.0/QP(a,c)*(((b.clientY-RF(a,c)|0)+In(a,c)|0)+PH(a,c.ownerDocument)|0));}
function FA(a,b,c){return JQ(c.width*1.0/Mi(a,c)*(((b.clientX-Ph(a,c)|0)+HW(a,c)|0)+Ns(a,c.ownerDocument)|0));}
function F6(a,b,c){return JQ(c.height*1.0/QP(a,c)*(((b.clientY-RF(a,c)|0)+In(a,c)|0)+PH(a,c.ownerDocument)|0));}
function Mi(a,b){return b.clientWidth;}
function QP(a,b){return b.clientHeight;}
function RF(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c|0;}
function Ph(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c|0;}
function Qj(a,b){var c;c=C(a.k_);return !b?c.ed:Iy(c,b)<0?0:1;}
function Ud(a,b){a.ba=b;}
function Jq(a){return AJE(a.z)?1:0;}
function AJE(b){if($rt_globals.document.pointerLockElement===$rt_globals.canvas||$rt_globals.document.mozPointerLockElement===$rt_globals.canvas){return true;}return false;}
function ABr(a,b){WU(a,b);Sc(a,b);}
var OC=G(0);
function Qe(){D.call(this);this.ta=null;}
function PD(){D.call(this);this.qo=null;}
var Pu=G(0);
var Ny=G();
var L_=G(0);
function Pz(){var a=this;D.call(a);a.qq=0;a.fg=0;a.oD=null;a.hT=null;}
function Yu(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var Df=G();
var AS9=null;var AS$=null;var ATf=null;var ATc=null;var ATd=null;var ATe=null;var AS_=null;var ATa=null;var ATb=null;var Qi=G(0);
var PG=G(0);
function Ur(){D.call(this);this.mn=null;}
function ANt(){var a=new Ur();AB7(a);return a;}
function AB7(a){var b,c,d,e,$$je;a.mn=null;b=new Ka;c=ACz();b.dm=c;d=AHi(c);b.iH=d;c=new Os;e=b.dm;Qw(c);c.oH=e;c.o7=d;b.sK=c;c=C(C(AS9).eJ);E4(c);a:{try{Di(c,b);CE(c);break a;}catch($$e){$$je=By($$e);b=$$je;}CE(c);K(b);}if(!(b.dm.state!=='running'?1:0))LC(b);else{c=new Lb;c.mi=b;ACM(b.dm,BF(c,"unlockFunction"));}a.mn=b;}
function Sd(){D.call(this);this.dv=null;}
function AM3(a){var b=new Sd();ACU(b,a);return b;}
function ACU(a,b){a.dv=b;}
function AIe(a,b){var c,$$je;if(!Bh(E(114),$rt_str((GW(C(C(a.dv).cb))).visibilityState))){c=C(C(a.dv).eJ);E4(c);a:{try{b=NW(c);while(true){b=C(b);if(!N$(b))break;WW(C(Dc(Mq(b),HD)));}CE(c);break a;}catch($$e){$$je=By($$e);b=$$je;}CE(c);K(b);}N0(C(C(a.dv).c8));}else{c=C(C(a.dv).eJ);E4(c);b:{try{b=NW(c);while(true){b=C(b);if(!N$(b))break;YB(C(Dc(Mq(b),HD)));}CE(c);break b;}catch($$e){$$je=By($$e);b=$$je;}CE(c);K(b);}OO(C(C(a.dv).c8));}}
function Se(){D.call(this);this.dS=null;}
function ALK(a){var b=new Se();ABX(b,a);return b;}
function ABX(a,b){a.dS=b;}
function AKx(a,b){var c,d,e,f,g;c=MW(C(C(a.dS).cb));d=C(a.dS);c=c-C(d.bJ).gT|0;e=LZ(C(d.cb));d=C(a.dS);f=C(d.bJ);e=e-f.i$|0;if(c>0&&e>0){b=d.bH;if(b!==null){if(f.fu){g=JR(b);c=c*g|0;e=e*g|0;}HO(C(C(a.dS).bH),c,e);}}}
var Zb=G();
var RU=G(Bq);
var V2=G();
function ADM(){return {};}
var Jf=G(0);
function Gr(){var a=this;D.call(a);a.n=null;a.gU=0;a.gg=0;a.gh=0;a.oK=0;a.o4=0;a.pd=0;a.hO=0;a.bm=null;a.co=null;a.gi=null;a.rq=null;a.pk=null;a.oe=null;a.fk=null;a.gA=0;a.ep=null;a.dW=null;a.dF=null;a.eE=null;a.nZ=null;}
function ANe(a){var b=new Gr();O3(b,a);return b;}
function O3(a,b){a.gU=1;a.gg=1;a.gh=1;a.oK=1;a.o4=1;a.pd=1;a.hO=1;a.bm=CW();a.co=CW();a.gi=CW();a.rq=CW();a.pk=CW();a.oe=CW();a.fk=CW();a.gA=0;a.ep=new $rt_globals.Float32Array(40000);a.dW=new $rt_globals.Int32Array(12000);a.dF=new $rt_globals.Int16Array(12000);a.eE=new $rt_globals.Int8Array(12000);a.nZ=new $rt_globals.Uint8Array(240000);a.n=b;b.pixelStorei(37441,0);}
function AAj(a,b){var c,d,e,f,g,h;if(AS8){c=(HZ(b)).buffer;b=C(b);d=b.i;e=BN(b);return new $rt_globals.Float32Array(c,d,e);}f=C(b);if(BN(f)>a.ep.length)a.ep=new $rt_globals.Float32Array(BN(f));g=C(b);d=g.i;e=0;while(d<g.l){b=a.ep;h=VL(g,d);e;b[e]=h;d=d+1|0;e=e+1|0;}b=a.ep;d=BN(g);return b.subarray(0,d);}
function Wb(a,b){var c,d,e,f,g,h;if(AS8){c=(HZ(b)).buffer;b=C(b);d=b.i;e=BN(b);return new $rt_globals.Int16Array(c,d,e);}f=C(b);if(BN(f)>a.dF.length)a.dF=new $rt_globals.Int16Array(BN(f));g=C(b);d=g.i;e=0;while(d<g.l){b=a.dF;h=XY(g,d);e;b[e]=h;d=d+1|0;e=e+1|0;}b=a.dF;d=BN(g);return b.subarray(0,d);}
function ZE(a,b){var c,d,e,f,g;if(AS8){c=(HZ(b)).buffer;b=C(b);d=b.i;e=BN(b);return new $rt_globals.Int32Array(c,d,e);}ZK(a,b);f=C(b);d=f.i;e=0;while(d<f.l){b=a.dW;g=f.fP(d);e;b[e]=g;d=d+1|0;e=e+1|0;}b=a.dW;d=BN(f);return b.subarray(0,d);}
function WT(a,b){var c,d,e,f;if(AS8)return HZ(b);c=C(b);if(BN(c)>a.eE.length)a.eE=new $rt_globals.Int8Array(BN(c));d=c.i;e=0;while(d<c.l){b=a.eE;f=c.yZ(d);e;b[e]=f;d=d+1|0;e=e+1|0;}b=a.eE;d=BN(c);return b.subarray(0,d);}
function ZK(a,b){var c;c=C(b);if(BN(c)>a.dW.length)a.dW=new $rt_globals.Int32Array(BN(c));}
function Kz(a,b){return BV(BU(C(Z(BU(C(a.fk),a.gA),JD)),b));}
function Nv(a,b,c){var d,e;d=BV(BU(C(a.bm),b));e=BV(BU(C(a.co),c));a.n.attachShader(d,e);}
function Rs(a,b,c){var d,e;d=a.n;e=BV(BU(C(a.gi),c));d.bindBuffer(b,e);}
function M4(a,b,c,d,e){var f,g;if(d instanceof E1){f=a.n;d=AAj(a,Z(d,E1));f.bufferData(b,d,e);}else if(d instanceof Fm){f=a.n;d=ZE(a,Z(d,Fm));f.bufferData(b,d,e);}else if(d instanceof Fp){f=a.n;g=Wb(a,Z(d,Fp));f.bufferData(b,g,e);}else if(d instanceof DK){f=a.n;d=WT(a,Z(d,DK));f.bufferData(b,d,e);}else{if(d!==null){f=new CM;Y(f,E(115));K(f);}a.n.bufferData(b,c,e);}}
function QD(a,b){a.n.clear(b);}
function NT(a,b){var c;c=BV(BU(C(a.co),b));a.n.compileShader(c);}
function RE(a){var b,c,d;b=a.n.createProgram();c=a.gU;a.gU=c+1|0;d=a.bm;b=Ef(b);Eb(C(d),c,b);return c;}
function Px(a,b){var c,d,e;c=a.n.createShader(b);d=a.gg;a.gg=d+1|0;e=a.co;c=Ef(c);Eb(C(e),d,c);return d;}
function OZ(a,b){a.n.disableVertexAttribArray(b);}
function Mw(a,b,c,d){a.n.drawArrays(b,c,d);}
function N_(a,b,c,d,e){var f,g;f=a.n;g=C(e).i;f.drawElements(b,c,d,g);}
function OP(a,b,c,d,e){a.n.drawElements(b,c,d,e);}
function QT(a,b){a.n.enableVertexAttribArray(b);}
function IU(a){var b,c,d;b=a.n.createBuffer();c=a.gh;a.gh=c+1|0;d=a.gi;b=Ef(b);Eb(C(d),c,b);return c;}
function Lg(a,b,c,d,e){var f,g;f=a.n;g=BV(BU(C(a.bm),b));f=f.getActiveAttrib(g,c);b=f.size;g=C(d);Dw(g,b);b=f.type;e=C(e);Dw(e,b);B1(g);B1(e);return $rt_str(f.name);}
function Og(a,b,c,d,e){var f,g;f=a.n;g=BV(BU(C(a.bm),b));f=f.getActiveUniform(g,c);b=f.size;g=C(d);Dw(g,b);b=f.type;e=C(e);Dw(e,b);B1(g);B1(e);return $rt_str(f.name);}
function M1(a,b,c){var d;d=BV(BU(C(a.bm),b));return a.n.getAttribLocation(d,$rt_ustr(c));}
function Rz(a,b){var c,d;c=a.n;d=BV(BU(C(a.bm),b));return $rt_str(c.getProgramInfoLog(d));}
function OY(a,b,c,d){var e,f,g,h;if(c!=35712&&c!=35714&&c!=35715){e=a.n;f=BV(BU(C(a.bm),b));b=e.getProgramParameter(f,c);d=C(d);Dw(d,b);}else{g=a.n;h=BV(BU(C(a.bm),b));b=!(g.getProgramParameter(h,c)?1:0)?0:1;d=C(d);Dw(d,b);}B1(d);}
function Om(a,b){var c,d;c=a.n;d=BV(BU(C(a.co),b));return $rt_str(c.getShaderInfoLog(d));}
function Mu(a,b,c,d){var e,f,g;if(c!=35713&&c!=35712){e=a.n;f=BV(BU(C(a.co),b));g=e.getShaderParameter(f,c);d=C(d);Dw(d,g);}else{e=a.n;f=BV(BU(C(a.co),b));b=!(e.getShaderParameter(f,c)?1:0)?0:1;d=C(d);Dw(d,b);}B1(d);}
function M9(a,b){return $rt_str(a.n.getParameter(b));}
function M7(a,b,c){var d,e,f;d=a.n;e=BV(BU(C(a.bm),b));d=d.getUniformLocation(e,$rt_ustr(c));if(d===null)return (-1);c=Z(BU(C(a.fk),b),JD);if(c===null){c=CW();Eb(C(a.fk),b,c);}f=a.hO;a.hO=f+1|0;Eb(c,f,Ef(d));return f;}
function Lu(a,b){var c,d;c=a.n;d=BV(BU(C(a.bm),b));c.linkProgram(d);}
function Kw(a,b,c){var d,e;d=a.n;e=BV(BU(C(a.co),b));d.shaderSource(e,$rt_ustr(c));}
function Ps(a,b,c){var d;d=Kz(a,b);a.n.uniform1i(d,c);}
function Uu(a,b,c,d,e,f){var g,h,i,j,k,l;g=Kz(a,b);h=a.n;i="uniformMatrix4fv";j=!!d;if(e===null)k=null;else{e=e.data;c=e.length;k=new $rt_globals.Array(c);b=0;while(b<c){b=DZ(b);l=e[b];b;k[b]=l;b=b+1|0;}}h[i](g,j,k);}
function Lx(a,b){var c,d;a.gA=b;c=a.n;d=BV(BU(C(a.bm),b));c.useProgram(d);}
function Ov(a,b,c,d,e,f,g){a.n.vertexAttribPointer(b,c,d,!!e,f,g);}
function KJ(a,b,c,d,e){a.n.viewport(b,c,d,e);}
var OB=G(0);
function Kd(){var a=this;Gr.call(a);a.c6=null;a.tz=null;a.sz=0;a.oi=null;a.oV=0;a.qh=null;a.nv=0;a.is=null;a.h3=0;a.rJ=null;}
function ANn(a){var b=new Kd();R1(b,a);return b;}
function R1(a,b){O3(a,b);a.tz=CW();a.sz=1;a.oi=CW();a.oV=1;a.qh=CW();a.nv=1;a.is=CW();a.h3=1;a.rJ=new $rt_globals.Uint32Array(12000);a.c6=b;}
function UM(a,b){var c,d;c=a.c6;d=BV(BU(C(a.is),b));c.bindVertexArray(d);}
function WS(a,b,c,d,e){a.c6.drawArraysInstanced(b,c,d,e);}
function AAl(a,b,c,d,e,f){a.c6.drawElementsInstanced(b,c,d,e,f);}
function W7(a,b,c){var d,e,f,g,h;c=C(c);d=c.i;e=0;while(e<b){f=a.c6.createVertexArray();g=a.h3;a.h3=g+1|0;h=a.is;f=Ef(f);Eb(C(h),g,f);Dw(c,g);e=e+1|0;}Cm(c,d);}
var Lw=G(Kd);
function Bv(a){var b,c,d,e;b=a.c6.getError();if(!b)return;c=new CM;d=Kn(b);e=new Q;S(e);M(C(M(C(Bc(C(M(e,E(116))),b)),E(117))),d);Y(c,R(e));K(c);}
function AD5(a,b){UM(a,b);Bv(a);}
function ACi(a,b,c,d,e){WS(a,b,c,d,e);Bv(a);}
function AKo(a,b,c,d,e,f){AAl(a,b,c,d,e,f);Bv(a);}
function ABL(a,b,c){W7(a,b,c);Bv(a);}
function AJq(a,b){QD(a,b);Bv(a);}
function ADF(a,b,c,d){Mw(a,b,c,d);Bv(a);}
function AHW(a,b,c,d,e){N_(a,b,c,d,e);Bv(a);}
function AAE(a,b){return M9(a,b);}
function AED(a,b,c,d,e){KJ(a,b,c,d,e);Bv(a);}
function AFW(a,b,c){Nv(a,b,c);Bv(a);}
function AJ9(a,b,c){Rs(a,b,c);Bv(a);}
function AGt(a,b,c,d,e){M4(a,b,c,d,e);Bv(a);}
function AG2(a,b){NT(a,b);Bv(a);}
function AKT(a){var b;b=RE(a);Bv(a);return b;}
function AH5(a,b){var c;c=Px(a,b);Bv(a);return c;}
function AKM(a,b){OZ(a,b);Bv(a);}
function AB1(a,b,c,d,e){OP(a,b,c,d,e);Bv(a);}
function AH8(a,b){QT(a,b);Bv(a);}
function AE9(a,b,c,d,e){var f;f=Lg(a,b,c,d,e);Bv(a);return f;}
function AJo(a,b,c,d,e){var f;f=Og(a,b,c,d,e);Bv(a);return f;}
function AGJ(a,b,c){var d;d=M1(a,b,c);Bv(a);return d;}
function ACZ(a,b,c,d){OY(a,b,c,d);Bv(a);}
function ABf(a,b){var c;c=Rz(a,b);Bv(a);return c;}
function AKR(a,b,c,d){Mu(a,b,c,d);Bv(a);}
function ABC(a,b){var c;c=Om(a,b);Bv(a);return c;}
function ABh(a,b,c){var d;d=M7(a,b,c);Bv(a);return d;}
function AKi(a,b){Lu(a,b);Bv(a);}
function ABd(a,b,c){Kw(a,b,c);Bv(a);}
function ACr(a,b,c){Ps(a,b,c);Bv(a);}
function ALa(a,b){Lx(a,b);Bv(a);}
function AIu(a,b,c,d,e,f,g){Ov(a,b,c,d,e,f,g);Bv(a);}
function M2(){var a=this;D.call(a);a.i8=0;a.h9=0;a.ip=0;a.nO=null;a.qj=null;a.cp=null;a.nk=E(96);}
function IE(a,b,c){var d,e,f,g;d=C(Np(C(TH(b)),c));if(!Nk(d)){e=AS9;b=new Q;S(b);Pd(C(e),E(96),R(C(U(C(U(b,E(118))),c))));a.i8=2;a.h9=0;a.ip=0;}else{b=C(d.bd);f=C(I7(C(GD(b,1)<0?null:C(Cl(C(b.fn),GD(b,1),I4(b,1)))),E(119))).data;a.i8=IA(a,f[AND(0,f)],2);g=f.length;a.h9=g<2?0:IA(a,f[AND(1,f)],0);a.ip=g<3?0:IA(a,f[AND(2,f)],0);}}
function IA(a,b,c){var d,e,f,$$je;a:{try{d=TK(b);}catch($$e){$$je=By($$e);if($$je instanceof B6){break a;}else{throw $$e;}}return d;}e=AS9;f=new Q;S(f);f=R(C(Bc(C(U(C(U(C(U(f,E(120))),b)),E(121))),c)));b=C(e);if(b.ig>=1){b=C(b.gu);b=Yx();e=new Q;S(e);M(C(M(C(M(e,E(122))),E(47))),f);Dp(C(b),R(e));}return c;}
var Dn=G(Bz);
var ATs=null;var ATv=null;var ATC=null;var ATx=null;var ATr=null;var ATu=null;var ATD=null;function AAT(){AAT=T(Dn);ADc();}
function Hi(a,b){var c=new Dn();SX(c,a,b);return c;}
function SX(a,b,c){AAT();Cq(a,b,c);}
function ADc(){var b,c,d,e;ATs=Hi(E(3),0);ATv=Hi(E(123),1);ATC=Hi(E(124),2);ATx=Hi(E(125),3);ATr=Hi(E(126),4);b=Hi(E(127),5);ATu=b;c=J(Dn,6);d=c.data;e=ATs;d[AND(0,d)]=e;e=ATv;d[AND(1,d)]=e;e=ATC;d[AND(2,d)]=e;e=ATx;d[AND(3,d)]=e;e=ATr;d[AND(4,d)]=e;d[AND(5,d)]=b;ATD=c;}
var PP=G(0);
function Pv(){D.call(this);this.nV=null;}
function ADy(a){}
var Q_=G(Gr);
function BM(a){var b,c,d,e;b=a.n.getError();if(!b)return;c=new CM;d=Kn(b);e=new Q;S(e);M(C(M(C(Bc(C(M(e,E(116))),b)),E(117))),d);Y(c,R(e));K(c);}
function AC5(a,b){QD(a,b);BM(a);}
function AFd(a,b,c,d){Mw(a,b,c,d);BM(a);}
function AKI(a,b,c,d,e){N_(a,b,c,d,e);BM(a);}
function AFR(a,b){return M9(a,b);}
function AKP(a,b,c,d,e){KJ(a,b,c,d,e);BM(a);}
function ABb(a,b,c){Nv(a,b,c);BM(a);}
function AAD(a,b,c){Rs(a,b,c);BM(a);}
function AFz(a,b,c,d,e){M4(a,b,c,d,e);BM(a);}
function AK3(a,b){NT(a,b);BM(a);}
function AHm(a){var b;b=RE(a);BM(a);return b;}
function AKV(a,b){var c;c=Px(a,b);BM(a);return c;}
function AHk(a,b){OZ(a,b);BM(a);}
function AEK(a,b,c,d,e){OP(a,b,c,d,e);BM(a);}
function AKZ(a,b){QT(a,b);BM(a);}
function AFC(a,b,c,d,e){var f;f=Lg(a,b,c,d,e);BM(a);return f;}
function ACh(a,b,c,d,e){var f;f=Og(a,b,c,d,e);BM(a);return f;}
function AEP(a,b,c){var d;d=M1(a,b,c);BM(a);return d;}
function AEc(a,b,c,d){OY(a,b,c,d);BM(a);}
function AEg(a,b){var c;c=Rz(a,b);BM(a);return c;}
function ABl(a,b,c,d){Mu(a,b,c,d);BM(a);}
function AIx(a,b){var c;c=Om(a,b);BM(a);return c;}
function AJz(a,b,c){var d;d=M7(a,b,c);BM(a);return d;}
function AGa(a,b){Lu(a,b);BM(a);}
function AKE(a,b,c){Kw(a,b,c);BM(a);}
function AKS(a,b,c){Ps(a,b,c);BM(a);}
function ABm(a,b){Lx(a,b);BM(a);}
function ACQ(a,b,c,d,e,f,g){Ov(a,b,c,d,e,f,g);BM(a);}
function JD(){var a=this;D.call(a);a.bP=0;a.cd=null;a.bR=null;a.cT=null;a.cY=0;a.kE=0.0;a.gf=0;a.g0=0;a.eb=0;}
function CW(){var a=new JD();AKO(a);return a;}
function ANw(a,b){var c=new JD();UK(c,a,b);return c;}
function AKO(a){UK(a,51,0.800000011920929);}
function UK(a,b,c){var d,e,f;if(c>0.0&&c<1.0){a.kE=c;d=JP(b,c);a.gf=d*c|0;b=d-1|0;a.eb=b;a.g0=DT(Ba(b));a.cd=Bl(d);a.bR=J(D,d);return;}e=new Bu;f=new Q;S(f);Y(e,R(C(UX(C(U(f,E(128))),c))));K(e);}
function IG(a,b){return EI(B4(BB(Ba(b),F(2135587861, 2654435769)),a.g0));}
function Is(a,b){var c,d,e,f,g;c=a.cd;d=IG(a,b);while(true){c=C(c);e=c.data;f=B(d,e);g=e[f];if(!g)return  -(f+1|0)|0;if(g==b)break;d=(f+1|0)&a.eb;}return f;}
function Eb(a,b,c){var d,e,f,g,h,i,j,k,l;if(!b){d=a.cT;a.cT=c;if(!a.cY){a.cY=1;a.bP=a.bP+1|0;}return d;}e=Is(a,b);if(e>=0){f=C(a.bR).data;e=B(e,f);d=f[e];f[AND(e,f)]=c;return d;}e= -(e+1|0)|0;f=C(a.cd).data;e=B(e,f);f[e]=b;g=C(a.bR).data;g[AND(e,g)]=c;b=a.bP+1|0;a.bP=b;if(b>=a.gf)a:{b=f.length;e=b<<1;a.gf=e*a.kE|0;h=e-1|0;a.eb=h;a.g0=DT(Ba(h));f=a.cd;g=a.bR;a.cd=Bl(e);a.bR=J(D,e);if(a.bP>0){e=0;while(true){if(e>=b)break a;f=C(f);i=f.data;j=B(e,i);h=i[j];if(h){g=C(g);i=g.data;j=AND(j,i);c=i[j];i=a.cd;e=IG(a,
h);while(true){i=C(i);k=i.data;l=B(e,k);if(!k[l])break;e=(l+1|0)&a.eb;}k[l]=h;i=C(a.bR).data;i[AND(l,i)]=c;}e=j+1|0;}}}return null;}
function BU(a,b){var c,d,e;if(!b)return !a.cY?null:a.cT;c=Is(a,b);if(c<0)d=null;else{e=C(a.bR).data;d=e[B(c,e)];}return d;}
function Ra(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.cY)return null;a.cY=0;c=a.cT;a.cT=null;a.bP=a.bP-1|0;return c;}d=Is(a,b);if(d<0)return null;e=a.cd;f=C(a.bR).data;g=B(d,f);c=f[g];h=a.eb;i=(g+1|0)&h;while(true){e=C(e);j=e.data;i=B(i,j);d=j[i];if(!d)break;k=IG(a,d);if(((i-k|0)&h)>((g-k|0)&h)){b=B(g,j);j[b]=d;g=AND(i,f);f[AND(b,f)]=f[g];}i=(i+1|0)&h;}d=B(g,j);j[d]=0;l=null;f[AND(d,f)]=l;a.bP=a.bP-1|0;return c;}
function V8(){var a=this;D.call(a);a.bz=0;a.cG=null;a.ed=0;a.m9=0.0;a.gE=0;a.gX=0;a.dV=0;}
function AJM(){var a=new V8();ADG(a);return a;}
function ADG(a){var b,c;a.m9=0.800000011920929;b=JP(51,0.800000011920929);a.gE=b*0.800000011920929|0;c=b-1|0;a.dV=c;a.gX=DT(Ba(c));a.cG=Bl(b);}
function JZ(a,b){return EI(B4(BB(Ba(b),F(2135587861, 2654435769)),a.gX));}
function Iy(a,b){var c,d,e,f,g;c=a.cG;d=JZ(a,b);while(true){c=C(c);e=c.data;f=B(d,e);g=e[f];if(!g)return  -(f+1|0)|0;if(g==b)break;d=(f+1|0)&a.dV;}return f;}
function TC(a,b){var c,d,e,f,g,h,i;if(!b){if(a.ed)return 0;a.ed=1;a.bz=a.bz+1|0;return 1;}c=Iy(a,b);if(c>=0)return 0;c= -(c+1|0)|0;d=C(a.cG).data;d[B(c,d)]=b;b=a.bz+1|0;a.bz=b;if(b>=a.gE)a:{b=d.length;c=b<<1;a.gE=c*a.m9|0;e=c-1|0;a.dV=e;a.gX=DT(Ba(e));d=a.cG;a.cG=Bl(c);if(a.bz>0){c=0;while(true){if(c>=b)break a;d=C(d);f=d.data;g=B(c,f);c=f[g];if(c){f=a.cG;e=JZ(a,c);while(true){f=C(f);h=f.data;i=B(e,h);if(!h[i])break;e=(i+1|0)&a.dV;}h[i]=c;}c=g+1|0;}}}return 1;}
function Zu(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.ed)return 0;a.ed=0;a.bz=a.bz-1|0;return 1;}c=Iy(a,b);if(c<0)return 0;d=a.cG;e=a.dV;f=(c+1|0)&e;while(true){d=C(d);g=d.data;f=B(f,g);h=g[f];if(!h)break;i=JZ(a,h);if(((f-i|0)&e)>((c-i|0)&e)){g[B(c,g)]=h;c=f;}f=(f+1|0)&e;}g[B(c,g)]=0;a.bz=a.bz-1|0;return 1;}
var Qs=G(0);
function Wv(){D.call(this);this.e7=null;}
function AMi(a){var b=new Wv();AKv(b,a);return b;}
function AKv(a,b){a.e7=b;}
function AA$(a){var b;b=C(a.e7);b.fg=1;Yu($rt_ustr(b.hT));}
function ADm(a){var b;b=C(a.e7);b.fg=1;Yu($rt_ustr(b.hT));}
function AA1(a){C(a.e7).fg=0;}
var HD=G(0);
function Ka(){var a=this;D.call(a);a.dm=null;a.iH=null;a.sK=null;}
var ATE=0;function LC(a){if(!ATE)Pd(C(AS9),E(129),E(130));ATE=1;}
function YB(a){a.iH.disconnect(a.dm.destination);}
function WW(a){a.iH.connect(a.dm.destination);}
function ACM(b,c){var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){$rt_globals.document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){$rt_globals.document.addEventListener(eventName,unlock);});}
function ACz(){var AudioContext=$rt_globals.window.AudioContext||$rt_globals.window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
function AHi(b){var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function KP(){CB.call(this);this.nG=null;}
var DQ=G(0);
var ME=G(0);
var NX=G(0);
var NM=G(0);
var O8=G(0);
var Rp=G(0);
var P4=G(0);
var Ma=G(0);
var Ip=G(0);
var SE=G();
function AHC(a,b){return QM(a.fv(b));}
function AJf(a,b,c){a.rw($rt_str(b),Cz(c,"handleEvent"));}
function AIU(a,b,c){a.px($rt_str(b),Cz(c,"handleEvent"));}
function AHx(a,b,c,d){a.nY($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
function AKc(a,b){return !!a.rC(b);}
function ACS(a){return a.sn();}
function AA0(a,b,c,d){a.qC($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
var IP=G();
function Gi(){var a=this;IP.call(a);a.go=0;a.b1=null;a.lz=0.0;a.jY=0;a.eD=0;a.d7=0;a.m_=0;}
var ATF=null;var ATG=null;function ATH(){var a=new Gi();IV(a);return a;}
function IV(a){var b,c;a.d7=(-1);a.go=0;b=J(GH,11);c=b.data;a.b1=b;a.eD=c.length;a.lz=0.75;Lp(a);}
function Lp(a){a.jY=C(a.b1).data.length*a.lz|0;}
function Dx(a,b,c){var d,e,f,g,h,i,j,k,l,m;E4(a);try{if(b!==null&&c!==null){d=Hc(b)&2147483647;e=C(a.b1).data;f=B(d%e.length|0,e);g=e[f];a:{while(g!==null){if(g.lZ==Hc(b)&&C(g.dP).eR(b)?1:0)break a;g=g.fA;}}if(g!==null){h=g.dU;g.dU=c;return h;}a.m_=a.m_+1|0;i=a.go+1|0;a.go=i;if(i>a.jY){i=(C(a.b1).data.length<<1)+1|0;if(!i)i=1;j=(-1);k=J(GH,i);f=a.d7+1|0;l=i;while(true){f=f+(-1)|0;if(f<a.eD)break;e=C(a.b1).data;f=B(f,e);g=e[f];while(g!==null){m=(C(g.dP).iw()&2147483647)%i|0;if(m<l)l=m;if(m>j)j=m;h=g.fA;k=C(k);e
=k.data;m=B(m,e);g.fA=e[m];e[m]=g;g=h;}}a.eD=l;a.d7=j;a.b1=k;Lp(a);f=d%C(a.b1).data.length|0;}if(f<a.eD)a.eD=f;if(f>a.d7)a.d7=f;g=new GH;RK(g,b,c);g.lZ=Hc(b);e=C(a.b1).data;i=B(f,e);g.fA=e[i];e[AND(i,e)]=g;return null;}b=new FO;Be(b);K(b);}finally{CE(a);}}
function Z9(){ATF=new K6;ATG=new K5;}
function JF(){Gi.call(this);this.rZ=null;}
var U0=G();
var Ep=G(Bz);
var ATw=null;var ATt=null;var ATz=null;var ATy=null;var ATI=null;function EB(){EB=T(Ep);AGv();}
function Nl(a,b){var c=new Ep();AAs(c,a,b);return c;}
function AAs(a,b,c){EB();Cq(a,b,c);}
function AGv(){var b,c,d,e;ATw=Nl(E(131),0);ATt=Nl(E(132),1);ATz=Nl(E(126),2);b=Nl(E(133),3);ATy=b;c=J(Ep,4);d=c.data;e=ATw;d[AND(0,d)]=e;e=ATt;d[AND(1,d)]=e;e=ATz;d[AND(2,d)]=e;d[AND(3,d)]=b;ATI=c;}
var CC=G();
var TZ=G(CC);
var TB=G(CC);
var VX=G(CC);
var W6=G(CC);
var Vd=G(CC);
function Nf(){D.call(this);this.rb=null;}
function AFp(a,b){b.preventDefault();}
function Ng(){D.call(this);this.tm=null;}
function AKJ(a,b){b.preventDefault();}
function Nb(){var a=this;D.call(a);a.jM=null;a.js=null;a.ka=null;}
function AH1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=E9();f=0;while(true){if(f>=d)break a;g=c[f];h=$rt_str(g.name);b=C(h);i=Fh(b,46,X(b)-1|0);b=C(i==(-1)?E(1):IR(b,i+1|0));if(!IY(b)){j=0;i=0;k=C(b.C).data;l=k.length;m=0;b:{while(m<l){n=B(m,k);m=k[n];if(Dj(m)!=m){j=1;break b;}if(J5(m))i=1;m=n+1|0;}}if(j){if(!i){k=Ce(C(b.C).data.length);j=0;while(true){o=C(b.C).data;if(j>=o.length)break;p=k.data;i=B(j,o);j=Dj(o[i]);i=AND(i,p);p[i]=j;j=i+1|
0;}b=KB(k);}else{o=Bl(C(b.C).data.length);q=0;j=0;while(true){k=C(b.C).data;i=k.length;if(j>=i)break;c:{if(j!=(i-1|0)){j=B(j,k);if(Ch(k[j])){k=b.C;i=j+1|0;k=C(k).data;l=B(i,k);if(Cy(k[l])){k=o.data;m=q+1|0;p=C(b.C).data;j=p[AND(j,p)];l=AND(l,p);k[B(q,k)]=EU(DE(j,p[l]));break c;}}}p=o.data;m=q+1|0;k=C(b.C).data;l=B(j,k);p[B(q,p)]=Dj(k[l]);}j=l+1|0;q=m;}b=new BA;m=0;b.C=Ce(q*2|0);j=0;i=0;while(i<q){k=o.data;l=m+1|0;m=k[B(m,k)];if(m<65536){k=b.C;r=j+1|0;m=m&65535;k=C(k).data;k[B(j,k)]=m;}else{k=b.C;n=j+1|0;r=G5(m);k
=C(k).data;k[B(j,k)]=r;k=b.C;r=n+1|0;j=Hx(m);k=C(k).data;k[B(n,k)]=j;}i=i+1|0;m=l;j=r;}k=b.C;if(j<C(k).data.length)b.C=SJ(k,j);}}}if(ACj(b)){D7();s=ATJ;}else if(AF1(b)){D7();s=ATK;}else if(!AE_(b)){D7();s=ATL;}else{D7();s=ATM;}t=new $rt_globals.FileReader();b=new Pq;b.fF=a;b.g4=s;b.i9=h;b.eX=e;b.jf=d;t.addEventListener("load",BF(b,"handleEvent"));D7();if(s!==ATL&&s!==ATK){if(s===ATJ)t.readAsDataURL(g);else if(s===ATM)t.readAsText(g);}else t.readAsArrayBuffer(g);f=f+1|0;}}}}
function Os(){var a=this;Cf.call(a);a.oH=null;a.o7=null;}
var Qv=G(0);
function Lb(){D.call(this);this.mi=null;}
function ADX(a){LC(C(a.mi));}
var Tu=G(CC);
function NG(){var a=this;D.call(a);a.c=null;a.bv=0;a.gL=null;a.jF=0;a.di=0;a.cc=0;a.G=0;a.hR=null;}
function Np(a,b){var c,d,e,f,g,h,i,j,k;c=new OD;c.e9=(-1);c.g3=(-1);c.oM=a;c.mF=a.hR;c.fj=b;c.e9=0;d=X(C(b));c.g3=d;e=new Qc;f=c.e9;g=a.di;h=a.cc+1|0;i=a.G+1|0;e.eo=(-1);j=g+1|0;e.j_=j;e.bC=Bl(j*2|0);k=Bl(i);e.fZ=k;If(k,(-1));if(h>0)e.hz=Bl(h);If(e.bC,(-1));RA(e,b,f,d);c.bd=e;e.cF=1;return c;}
function Iu(a){return C(a.c).T;}
function RH(a,b,c,d){var e,f,g,h,i,j,k;e=AHF();f=a.bv;g=0;if(c!=f)a.bv=c;a:{switch(b){case -1073741784:h=new Od;c=a.G+1|0;a.G=c;EL(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new MY;c=a.G+1|0;a.G=c;EL(h,c);break a;case -33554392:h=new Jj;c=a.G+1|0;a.G=c;EL(h,c);break a;default:c=a.di+1|0;a.di=c;if(d!==null)h=AMX(c);else{h=new EW;EL(h,0);g=1;}c=a.di;if(c<=(-1))break a;if(c>=10)break a;i=C(a.gL).data;i[B(c,i)]=h;break a;}h=new RC;EL(h,(-1));}while(true){if(Et(C(a.c))&&C(a.c).e
==(-536870788)){d=AJ2(BZ(a,2),BZ(a,64));while(!CX(C(a.c))&&Et(C(a.c))){j=C(a.c);k=j.e;if(k&&k!=(-536870788)&&k!=(-536870871))break;Cc(d,Bf(j));j=C(a.c);if(j.D!=(-536870788))continue;Bf(j);}j=C(I$(a,d));j.u(h);}else if(C(a.c).D==(-536870788)){j=F1(h);Bf(C(a.c));}else{j=Mp(a,h);d=C(a.c);if(d.D==(-536870788))Bf(d);}if(j!==null)HB(e,j);if(CX(C(a.c)))break;if(C(a.c).D==(-536870871))break;}if(C(a.c).g6==(-536870788))HB(e,F1(h));if(a.bv!=f&&!g){a.bv=f;d=C(a.c);d.c$=f;d.e=d.D;d.b9=d.cN;k=d.bV;d.g=k+1|0;d.d0=k;EA(d);}switch
(b){case -1073741784:break;case -536870872:d=new KF;EY(d,e,h);return d;case -268435416:d=new QK;EY(d,e,h);return d;case -134217688:d=new NK;EY(d,e,h);return d;case -67108824:d=new O6;EY(d,e,h);return d;case -33554392:d=new Dk;EY(d,e,h);return d;default:switch(e.P){case 0:break;case 1:return AMI(Z(C1(e,0),Bj),h);default:return AMm(e,h);}return F1(h);}d=new HG;EY(d,e,h);return d;}
function Yj(a){var b,c,d,e,f,g,h;b=new LJ;S(b);while(!CX(C(a.c))&&Et(C(a.c))&&!LI(C(a.c))&&!Qd(C(a.c))){if(!(!Ii(C(a.c))&&!C(a.c).e)&&!(!Ii(C(a.c))&&IL(C(a.c).e))){c=C(a.c).e;if(c!=(-536870871)&&(c&(-2147418113))!=(-2147483608)&&c!=(-536870788)&&c!=(-536870876))break;}d=Bf(C(a.c));if(!J2(d))Bs(b,d&65535);else Hh(b,FG(d));}if(!BZ(a,2)){e=new N7;C$(e);e.Z=R(b);d=b.w;e.O=d;e.gZ=AHa(d);e.hV=AHa(e.O);d=0;while(d<(e.O-1|0)){NO(C(e.gZ),O(C(e.Z),d),(e.O-d|0)-1|0);NO(C(e.hV),O(C(e.Z),(e.O-d|0)-1|0),(e.O-d|0)-1|0);d=
d+1|0;}return e;}if(!BZ(a,64)){e=new Lc;C$(e);e.d2=R(b);e.O=b.w;return e;}e=new KC;C$(e);f=new Q;S(f);d=0;while(true){g=CP(d,b.w);if(g>=0){e.fr=R(f);e.O=f.w;return e;}if(d<0)break;if(g>=0)break;h=C(b.m).data;g=B(d,h);Bs(f,Dj(D5(h[g])));d=g+1|0;}b=new Bp;Be(b);K(b);}
function Yq(a){var b,c,d,e,f,g,h;b=Bl(4);c=0;d=(-1);e=(-1);if(!CX(C(a.c))&&Et(C(a.c))){f=b.data;d=Bf(C(a.c));c=AND(c,f);f[c]=d;e=d-4352|0;}if(e>=0&&e<19){f=Ce(3);b=f.data;b[AND(c,b)]=d&65535;g=C(a.c);e=g.D;c=e-4449|0;if(c>=0&&c<21){b[AND(1,b)]=e&65535;Bf(g);g=C(a.c);h=g.D;c=h-4519|0;if(c>=0&&c<28){b[AND(2,b)]=h&65535;Bf(g);return AJO(f,3);}return AJO(f,2);}if(!BZ(a,2))return TO(b[AND(0,b)]);if(BZ(a,64))return AIp(b[AND(0,b)]);return ACK(b[AND(0,b)]);}d=1;while(d<4&&!CX(C(a.c))&&Et(C(a.c))){f=b.data;c=d+1|0;e
=Bf(C(a.c));f[B(d,f)]=e;d=c;}if(d==1){f=b.data;c=f[AND(0,f)];if(!(C(ATN).fP(c)==ATO?0:1))return Ry(a,f[AND(0,f)]);}if(!BZ(a,2))return ANx(b,d);if(BZ(a,64)){g=new Ru;LD(g,b,d);return g;}g=new Pp;LD(g,b,d);return g;}
function Mp(a,b){var c,d,e,f;if(Et(C(a.c))&&!Ii(C(a.c))&&IL(C(a.c).e)){if(!BZ(a,128))c=!LI(C(a.c))&&!Qd(C(a.c))?Yj(a):J9(a,b,Rt(a,b));else{c=Yq(a);if(!CX(C(a.c))){d=C(a.c);e=d.D;if(!(e==(-536870871)&&!(b instanceof EW))&&e!=(-536870788)&&!Et(d))c=J9(a,b,c);}}}else{d=C(a.c);if(d.D!=(-536870871))c=J9(a,b,Rt(a,b));else{if(b instanceof EW)K(BW(E(1),d.T,d.bV));c=F1(b);}}a:{if(!CX(C(a.c))){e=C(a.c).D;if(!(e==(-536870871)&&!(b instanceof EW))&&e!=(-536870788)){f=Mp(a,b);if(c instanceof Cn&&!(c instanceof EC)&&!(c instanceof CA)
&&!(c instanceof D6)){b=C(Z(c,Cn));d=b.q;f=C(f);if(!f.Q(d)){c=new QS;Eo(c,Z(b.q,BK),b.b,b.ej);C(c.q).u(c);}}f=C(f);if((f.er()&65535)!=43){c=C(c);c.u(f);}else{b=C(Z(f,Cn)).q;c=C(c);c.u(b);}break a;}}if(c===null)return null;c.u(b);}if((c.er()&65535)!=43)return c;return C(Z(c,Dg)).q;}
function J9(a,b,c){var d,e,f,g,h;d=C(a.c);e=d.D;if(c!==null&&!(c instanceof BK)){switch(e){case -2147483606:Bf(d);f=new RV;CV(f,c,b,e);Kg();c.u(ATP);return f;case -2147483605:Bf(d);f=new MR;CV(f,c,b,(-2147483606));Kg();c.u(ATP);return f;case -2147483585:Bf(d);f=new MC;CV(f,c,b,(-536870849));Kg();c.u(ATP);return f;case -2147483525:f=new K9;d=Z(EG(d),DG);g=a.cc+1|0;a.cc=g;HN(f,d,c,b,(-536870849),g);Kg();c.u(ATP);return f;case -1073741782:case -1073741781:Bf(d);d=new N2;CV(d,c,b,e);c.u(d);return d;case -1073741761:Bf(d);d
=new Nm;CV(d,c,b,(-536870849));c.u(b);return d;case -1073741701:h=new P7;f=Z(EG(d),DG);e=a.cc+1|0;a.cc=e;HN(h,f,c,b,(-536870849),e);c.u(h);return h;case -536870870:case -536870869:Bf(d);if(c.er()!=(-2147483602)){d=new CA;CV(d,c,b,e);}else if(BZ(a,32)){d=new N5;CV(d,c,b,e);}else{d=new LQ;f=MD(a.bv);CV(d,c,b,e);d.g5=f;}c.u(d);return d;case -536870849:Bf(d);d=new E_;CV(d,c,b,(-536870849));c.u(b);return d;case -536870789:h=new EH;f=Z(EG(d),DG);e=a.cc+1|0;a.cc=e;HN(h,f,c,b,(-536870849),e);c.u(h);return h;default:}return c;}f
=null;if(c!==null)f=Z(c,BK);switch(e){case -2147483606:case -2147483605:Bf(d);d=new RW;Eo(d,f,b,e);C(f).b=d;return d;case -2147483585:Bf(d);c=new QN;Eo(c,f,b,(-2147483585));return c;case -2147483525:c=new Mn;Oq(c,Z(EG(d),DG),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Nj;Eo(d,f,b,e);C(f).b=d;return d;case -1073741761:Bf(d);c=new Pw;Eo(c,f,b,(-1073741761));return c;case -1073741701:c=new NL;Oq(c,Z(EG(d),DG),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AMO(f,
b,e);C(f).b=d;return d;case -536870849:Bf(d);c=new D6;Eo(c,f,b,(-536870849));return c;case -536870789:return ALT(Z(EG(d),DG),f,b,(-536870789));default:}return c;}
function Rt(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof EW;while(true){a:{e=G3(C(a.c));if((e&(-2147418113))==(-2147483608)){Bf(C(a.c));f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.bv=f;else{if(e!=(-1073741784))f=a.bv;c=RH(a,e,f,b);if(G3(C(a.c))!=(-536870871))K(BW(E(1),Db(C(a.c)),Fj(C(a.c))));Bf(C(a.c));}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(C(a.c));c
=AJF(0);break a;case -2147483577:Bf(C(a.c));c=ALU();break a;case -2147483558:Bf(C(a.c));c=new Rf;g=a.G+1|0;a.G=g;Y3(c,g);break a;case -2147483550:Bf(C(a.c));c=AJF(1);break a;case -2147483526:Bf(C(a.c));c=AM_();break a;case -536870876:Bf(C(a.c));a.G=a.G+1|0;if(BZ(a,8)){if(BZ(a,1)){c=AMa(a.G);break a;}c=ALt(a.G);break a;}if(BZ(a,1)){c=AMs(a.G);break a;}c=AM5(a.G);break a;case -536870866:Bf(C(a.c));if(BZ(a,32)){c=ANp();break a;}c=AMS(MD(a.bv));break a;case -536870821:Bf(C(a.c));h=0;if(G3(C(a.c))==(-536870818))
{h=1;Bf(C(a.c));}c=W8(a,h,b);if(G3(C(a.c))!=(-536870819))K(BW(E(1),Db(C(a.c)),Fj(C(a.c))));Me(C(a.c),1);Bf(C(a.c));break a;case -536870818:Bf(C(a.c));a.G=a.G+1|0;if(!BZ(a,8)){c=AJL();break a;}c=ANd(MD(a.bv));break a;case 0:i=Z(MI(C(a.c)),W);if(i!==null)c=I$(a,i);else{if(CX(C(a.c))){c=F1(b);break a;}c=TO(e&65535);}Bf(C(a.c));break a;default:break b;}Bf(C(a.c));c=AJL();break a;}g=(e&2147483647)-48|0;if(a.di<g)K(BW(E(1),Db(C(a.c)),Fj(C(a.c))));Bf(C(a.c));a.G=a.G+1|0;c=!BZ(a,2)?ALx(g,a.G):BZ(a,64)?AMb(g,a.G):ANu(g,
a.G);j=C(a.gL).data;C(j[B(g,j)]).gK=1;a.jF=1;break a;}if(e>=0&&!F3(C(a.c))){c=Ry(a,e);Bf(C(a.c));}else if(e==(-536870788))c=F1(b);else{if(e!=(-536870871))K(BW(!F3(C(a.c))?Rc(e&65535):C(MI(C(a.c))).bs(),Db(C(a.c)),Fj(C(a.c))));if(d)K(BW(E(1),Db(C(a.c)),Fj(C(a.c))));c=F1(b);}}}if(e!=(-16777176))break;}return c;}
function W8(a,b,c){var d;d=C(I$(a,Fi(a,b)));d.u(c);return d;}
function Fi(a,b){var c,d,e,f,g,h,i,j,$$je;c=AJ2(BZ(a,2),BZ(a,64));D2(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CX(C(a.c)))break a;h=C(a.c);b=h.D;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0){c=C(c);Cc(c,d);}d=Bf(C(a.c));h=C(a.c);if(h.D!=(-536870874)){d=38;break d;}if(h.e==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=Fi(a,0);break d;}if(C(a.c).D==(-536870819))break d;h=Fi(a,0);c=C(c);Q4(c,h);break d;case -536870867:if(!g){b=h.e;if(b!=(-536870819)&&b!=(-536870821)
&&d>=0){Bf(h);h=C(a.c);i=h.D;if(F3(h))break c;if(i<0){b=C(a.c).e;if(b!=(-536870819)&&b!=(-536870821)&&d>=0)break c;}e:{try{if(IL(i))break e;i=i&65535;break e;}catch($$e){$$je=By($$e);if($$je instanceof Cp){break b;}else{throw $$e;}}}try{c=C(c);BQ(c,d,i);}catch($$e){$$je=By($$e);if($$je instanceof Cp){break b;}else{throw $$e;}}Bf(C(a.c));d=(-1);break d;}}if(d>=0){c=C(c);Cc(c,d);}d=45;Bf(C(a.c));break d;case -536870821:if(d>=0){c=C(c);Cc(c,d);d=(-1);}Bf(C(a.c));j=0;h=C(a.c);if(h.D==(-536870818)){Bf(h);j=1;}if
(!e){h=Fi(a,j);c=C(c);R4(c,h);}else{h=Fi(a,j);c=C(c);Q4(c,h);}e=0;Bf(C(a.c));break d;case -536870819:if(d>=0){c=C(c);Cc(c,d);}d=93;Bf(C(a.c));break d;case -536870818:if(d>=0){c=C(c);Cc(c,d);}d=94;Bf(C(a.c));break d;case 0:if(d>=0){c=C(c);Cc(c,d);}h=Z(C(a.c).cN,W);if(h===null)d=0;else{c=C(c);AAr(c,h);d=(-1);}Bf(C(a.c));break d;default:}if(d>=0){c=C(c);Cc(c,d);}d=Bf(C(a.c));}g=0;}K(BW(E(1),Iu(a),C(a.c).bV));}K(BW(E(1),Iu(a),C(a.c).bV));}if(!f){if(d>=0){c=C(c);Cc(c,d);}return c;}K(BW(E(1),Iu(a),C(a.c).bV-1|0));}
function Ry(a,b){var c,d,e;c=J2(b);if(BZ(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ACK(b&65535);}if(BZ(a,64)&&b>128){if(c){d=new Kx;C$(d);d.O=2;d.k$=EU(FM(b));return d;}if(Mj(b))return AHe(b&65535);if(!OF(b))return AIp(b&65535);return AFg(b&65535);}}if(!c){if(Mj(b))return AHe(b&65535);if(!OF(b))return TO(b&65535);return AFg(b&65535);}d=new CH;C$(d);d.O=2;d.c3=b;e=C(FG(b)).data;d.f4=e[AND(0,e)];d.e4=e[AND(1,e)];return d;}
function I$(a,b){var c,d,e;c=C(b);if(!Wz(c)){if(!c.t){if(c.dN())return AEZ(c);return AJG(c);}if(!c.dN())return AFJ(c);b=new HP;PK(b,c);return b;}d=SK(c);e=new KK;BO(e);b=C(d);e.ky=b;e.nE=b.B;if(!c.t){if(c.dN())return XH(AEZ(GA(c)),e);return XH(AJG(GA(c)),e);}if(!c.dN())return XH(AFJ(GA(c)),e);b=new M_;d=new HP;PK(d,GA(c));Z3(b,d,e);return b;}
function TH(b){var c,d,e,f;if(b===null){b=new FO;Y(b,E(134));K(b);}ATQ=1;c=new NG;c.gL=J(Cw,10);c.di=(-1);c.cc=(-1);c.G=(-1);d=new FX;d.ca=1;d.T=b;d.A=Ce(X(b)+2|0);Fg(IZ(b),0,d.A,0,X(b));e=C(d.A).data;f=e.length;e[B(f-1|0,e)]=0;e[B(f-2|0,e)]=0;d.lJ=f;d.c$=0;EA(d);EA(d);c.c=d;c.bv=0;c.hR=RH(c,(-1),0,null);if(CX(C(c.c))){if(c.jF)C(c.hR).bS();return c;}b=new Q6;c=C(c.c);SA(b,E(1),c.T,c.bV);K(b);}
function GC(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BZ(a,b){return (a.bv&b)!=b?0:1;}
function Dh(){D.call(this);this.l3=null;}
var ATR=null;var ATS=null;var ATT=null;var ATU=null;var ATV=null;var ATW=null;var ATX=null;function GY(){GY=T(Dh);AC1();}
function HQ(a){var b=new Dh();WG(b,a);return b;}
function WG(a,b){GY();a.l3=b;}
function Ef(b){var c,d,e,f,g,h,i;GY();if(b===null)return null;c=b;d=C($rt_str(typeof c));e=!Bh(d,E(135))&&!Bh(d,E(136))?0:1;if(e&&b[ATY]===true)return b;b=ATS;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=HQ(c);ATS.set(c,new $rt_globals.WeakRef(h));return h;}if(Bh(d,E(137))){f=ATT.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=HQ(c);i=h;ATT.set(c,new $rt_globals.WeakRef(i));Ln(ATW,
i,c);return h;}if(Bh(d,E(138))){f=ATU.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=HQ(c);i=h;ATU.set(c,new $rt_globals.WeakRef(i));Ln(ATX,i,c);return h;}if(Bh(d,E(139))){f=ATV;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=HQ(c);ATV=new $rt_globals.WeakRef(h);return h;}}return HQ(c);}
function BV(b){GY();if(b===null)return null;return b[ATY]===true?b:C(Z(b,Dh)).l3;}
function QM(b){GY();if(b===null)return null;return b instanceof $rt_objcls()&&b instanceof Dh?BV(b):b;}
function ON(b){GY();if(b===null)return null;return b instanceof $rt_objcls()?b:Ef(b);}
function AC1(){ATR=new $rt_globals.WeakMap();ATS=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATT=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATU=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATW=ATT===null?null:new $rt_globals.FinalizationRegistry(BF(new OS,"accept"));ATX=ATU===null?null:new $rt_globals.FinalizationRegistry(BF(new OQ,"accept"));}
function Ln(b,c,d){return b.register(c,d);}
var Nu=G(0);
var K6=G();
var Hq=G(0);
var K5=G();
var JX=G(0);
function OD(){var a=this;D.call(a);a.oM=null;a.mF=null;a.fj=null;a.bd=null;a.e9=0;a.g3=0;}
function KG(a,b){var c,d,e,f;c=X(C(a.fj));if(b>=0&&b<=c){RA(C(a.bd),null,(-1),(-1));d=a.bd;e=C(d);e.fK=1;e.bQ=b;c=e.eo;if(c<0)c=b;e.eo=c;b=C(a.mF).W(b,a.fj,d);if(b==(-1))C(a.bd).br=1;if(b>=0){d=C(a.bd);if(d.fl){f=C(d.bC).data;if(f[AND(0,f)]==(-1)){c=d.bQ;f[AND(0,f)]=c;f[AND(1,f)]=c;}d.eo=HK(d);return 1;}}C(a.bd).bQ=(-1);return 0;}d=new Bp;Y(d,Jp(b));K(d);}
function Nk(a){var b,c,d;b=X(C(a.fj));c=C(a.bd);if(!c.fq)b=a.g3;if(c.bQ>=0&&c.fK==1){c.bQ=HK(c);if(HK(C(a.bd))==GD(C(a.bd),0)){c=C(a.bd);c.bQ=c.bQ+1|0;}d=C(a.bd).bQ;return d<=b&&KG(a,d)?1:0;}return KG(a,a.e9);}
var B6=G(Bu);
function Bj(){var a=this;D.call(a);a.b=null;a.U=0;a.kb=null;a.ej=0;}
var ATQ=0;function BO(a){var b;b=ATQ;ATQ=b+1|0;a.kb=Jx(b);}
function I6(a,b){var c;c=ATQ;ATQ=c+1|0;a.kb=Jx(c);a.b=b;}
function GG(a,b,c,d){var e;d=C(d);e=d.h;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function GS(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADe(a,b){a.ej=b;}
function ACq(a){return a.ej;}
function AJb(a){return a.b;}
function AJR(a,b){a.b=b;}
function AJQ(a,b){return 1;}
function AKB(a){return null;}
function HL(a){var b;a.U=1;b=a.b;if(b!==null){if(!b.U){b=b.cM();if(b!==null){C(a.b).U=1;a.b=b;}C(a.b).bS();}else if(b instanceof FJ&&C(C(Z(b,BI)).bU).gK)a.b=b.b;}}
function AAe(){ATQ=1;}
var ZX=G();
var Uz=G();
var AAu=G();
var Ir=G(0);
var OS=G();
function AJZ(a,b){var c;b=ON(b);c=ATT;b=BV(b);c.delete(b);}
var U8=G();
var OQ=G();
function ABG(a,b){var c;b=ON(b);c=ATU;b=BV(b);c.delete(b);}
function GH(){var a=this;FI.call(a);a.fA=null;a.lZ=0;}
function Cw(){var a=this;Bj.call(a);a.gK=0;a.by=0;}
var ATP=null;function Kg(){Kg=T(Cw);AD_();}
function AMX(a){var b=new Cw();EL(b,a);return b;}
function EL(a,b){Kg();BO(a);a.by=b;}
function ABR(a,b,c,d){var e,f;e=a.by;d=C(d);e=Ho(d,e);Ic(d,a.by,b);f=C(a.b).a(b,c,d);if(f<0)Ic(d,a.by,e);return f;}
function AGy(a){return a.by;}
function ACf(a,b){return 0;}
function AD_(){var b;b=new LK;BO(b);ATP=b;}
function FX(){var a=this;D.call(a);a.A=null;a.c$=0;a.ca=0;a.mL=0;a.g6=0;a.D=0;a.e=0;a.lJ=0;a.cN=null;a.b9=null;a.g=0;a.ey=0;a.bV=0;a.d0=0;a.T=null;}
var ATZ=null;var ATN=null;var ATO=0;function G3(a){return a.D;}
function Me(a,b){if(b>0&&b<3)a.ca=b;if(b==1){a.e=a.D;a.b9=a.cN;a.g=a.d0;a.d0=a.bV;EA(a);}}
function MI(a){return a.cN;}
function F3(a){return a.cN===null?0:1;}
function Ii(a){return a.b9===null?0:1;}
function Bf(a){EA(a);return a.g6;}
function EG(a){var b;b=a.cN;EA(a);return b;}
function EA(a){var b,c,d,e,f,g,h,$$je;a.g6=a.D;a.D=a.e;a.cN=a.b9;a.bV=a.d0;a.d0=a.g;while(true){b=0;c=a.g>=C(a.A).data.length?0:JK(a);a.e=c;a.b9=null;if(a.ca==4){if(c!=92)return;c=a.g;d=C(a.A).data;c=c>=d.length?0:d[B(BR(a),d)];a.e=c;switch(c){case 69:break;default:a.e=92;a.g=a.ey;return;}a.ca=a.mL;a.e=a.g>(C(a.A).data.length-2|0)?0:JK(a);}a:{c=a.e;if(c!=92){e=a.ca;if(e==1)switch(c){case 36:a.e=(-536870876);break a;case 40:d=a.A;c=a.g;d=C(d).data;if(d[B(c,d)]!=63){a.e=(-2147483608);break a;}BR(a);d=a.A;c=a.g;d
=C(d).data;c=d[B(c,d)];e=0;while(true){b:{if(e){e=0;switch(c){case 33:break;case 61:a.e=(-134217688);BR(a);break b;default:K(BW(E(1),Db(a),a.g));}a.e=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);d=a.A;c=a.g;d=C(d).data;c=d[B(c,d)];e=1;break b;case 61:a.e=(-536870872);BR(a);break b;case 62:a.e=(-33554392);BR(a);break b;default:f=AAg(a);a.e=f;if(f<256){a.c$=f;f=f<<16;a.e=f;a.e=(-1073741784)|f;break b;}f=f&255;a.e=f;a.c$=f;f=f<<16;a.e=f;a.e=(-16777176)|f;break b;}a.e=(-268435416);BR(a);}}if(!e)break;}break a;case 41:a.e
=(-536870871);break a;case 42:case 43:case 63:e=a.g;d=C(a.A).data;switch(e>=d.length?42:d[B(e,d)]){case 43:a.e=c|(-2147483648);BR(a);break a;case 63:a.e=c|(-1073741824);BR(a);break a;default:}a.e=c|(-536870912);break a;case 46:a.e=(-536870866);break a;case 91:a.e=(-536870821);Me(a,2);break a;case 93:if(e!=2)break a;a.e=(-536870819);break a;case 94:a.e=(-536870818);break a;case 123:a.b9=Zx(a,c);break a;case 124:a.e=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.e=(-536870874);break a;case 45:a.e
=(-536870867);break a;case 91:a.e=(-536870821);break a;case 93:a.e=(-536870819);break a;case 94:a.e=(-536870818);break a;default:}}else{c=a.g>=(C(a.A).data.length-2|0)?(-1):JK(a);c:{a.e=c;switch(c){case -1:K(BW(E(1),Db(a),a.g));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.e
=Xg(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ca!=1)break a;a.e=(-2147483648)|c;break a;case 65:a.e=(-2147483583);break a;case 66:a.e=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(BW(E(1),Db(a),a.g));case 68:case 83:case 87:case 100:case 115:case 119:a.b9=Oo(Mf(a.A,
a.ey,1),0);a.e=0;break a;case 71:a.e=(-2147483577);break a;case 80:case 112:break c;case 81:a.mL=a.ca;a.ca=4;b=1;break a;case 90:a.e=(-2147483558);break a;case 97:a.e=7;break a;case 98:a.e=(-2147483550);break a;case 99:c=a.g;d=C(a.A).data;if(c>=(d.length-2|0))K(BW(E(1),Db(a),a.g));a.e=d[B(BR(a),d)]&31;break a;case 101:a.e=27;break a;case 102:a.e=12;break a;case 110:a.e=10;break a;case 114:a.e=13;break a;case 116:a.e=9;break a;case 117:a.e=MU(a,4);break a;case 120:a.e=MU(a,2);break a;case 122:a.e=(-2147483526);break a;default:}break a;}g
=W0(a);h=0;if(a.e==80)h=1;try{a.b9=Oo(g,h);}catch($$e){$$je=By($$e);if($$je instanceof HR){K(BW(E(1),Db(a),a.g));}else{throw $$e;}}a.e=0;}}if(b)continue;else break;}}
function W0(a){var b,c,d,e,f,g;b=new Q;Ff(b,10);c=a.g;d=a.A;e=C(d).data;if(c<(e.length-2|0)){if(e[B(c,e)]!=123){b=Mf(d,BR(a),1);f=new Q;S(f);M(C(M(f,E(140))),b);return R(f);}BR(a);c=0;a:{while(true){g=a.g;d=C(a.A).data;if(g>=(d.length-2|0))break;c=d[B(BR(a),d)];if(c==125)break a;Bs(b,c);}}if(c!=125)K(BW(E(1),a.T,a.g));}if(!b.w)K(BW(E(1),a.T,a.g));f=C(R(b));if(X(f)==1){b=new Q;S(b);M(C(M(b,E(140))),f);return R(b);}b:{c:{if(X(f)>3){if(Oa(f,E(140)))break c;if(Oa(f,E(141)))break c;}break b;}f=IR(f,2);}return f;}
function Zx(a,b){var c,d,e,f,g,$$je;c=new Q;Ff(c,4);d=(-1);e=2147483647;a:{while(true){f=a.g;g=C(a.A).data;if(f>=g.length)break a;b=g[B(BR(a),g)];if(b==125)break a;if(b==44&&d<0)try{d=Gz(GB(c),10);ZM(c,0,SY(c));continue;}catch($$e){$$je=By($$e);if($$je instanceof B6){break;}else{throw $$e;}}Bs(c,b&65535);}K(BW(E(1),a.T,a.g));}if(b!=125)K(BW(E(1),a.T,a.g));if(c.w>0)b:{try{e=Gz(GB(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=By($$e);if($$je instanceof B6){}else{throw $$e;}}K(BW(E(1),a.T,a.g));}else if(d
<0)K(BW(E(1),a.T,a.g));if((d|e|(e-d|0))<0)K(BW(E(1),a.T,a.g));b=a.g;g=C(a.A).data;f=b>=g.length?42:g[B(b,g)];c:{switch(f){case 43:a.e=(-2147483525);BR(a);break c;case 63:a.e=(-1073741701);BR(a);break c;default:}a.e=(-536870789);}c=new DG;c.b_=d;c.b7=e;return c;}
function Db(a){return a.T;}
function CX(a){return !a.D&&!a.e&&a.g==a.lJ&&!F3(a)?1:0;}
function IL(b){return b<0?0:1;}
function Et(a){return !CX(a)&&!F3(a)&&IL(a.D)?1:0;}
function LI(a){var b;b=a.D;return b<=56319&&b>=55296?1:0;}
function Qd(a){var b;b=a.D;return b<=57343&&b>=56320?1:0;}
function OF(b){return b<=56319&&b>=55296?1:0;}
function Mj(b){return b<=57343&&b>=56320?1:0;}
function MU(a,b){var c,d,e,f,g,$$je;c=new Q;Ff(c,b);d=C(a.A).data.length-2|0;e=0;while(true){f=CP(e,b);if(f>=0)break;if(a.g>=d)break;g=a.A;f=BR(a);g=C(g).data;Bs(c,g[B(f,g)]);e=e+1|0;}if(!f)a:{try{b=Gz(GB(c),16);}catch($$e){$$je=By($$e);if($$je instanceof B6){break a;}else{throw $$e;}}return b;}K(BW(E(1),a.T,a.g));}
function Xg(a){var b,c,d,e,f,g;b=3;c=1;d=C(a.A).data;e=d.length-2|0;f=P3(d[B(a.g,d)],8);switch(f){case -1:break;default:if(f>3)b=2;BR(a);a:{while(true){if(c>=b)break a;g=a.g;if(g>=e)break a;d=C(a.A).data;g=P3(d[B(g,d)],8);if(g<0)break;f=(f*8|0)+g|0;BR(a);c=c+1|0;}}return f;}K(BW(E(1),a.T,a.g));}
function AAg(a){var b,c,d,e;b=1;c=a.c$;a:while(true){d=a.g;e=C(a.A).data;if(d>=e.length)K(BW(E(1),a.T,d));b:{c:{switch(e[B(d,e)]){case 41:BR(a);return c|256;case 45:if(!b)K(BW(E(1),a.T,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){var b,c,d,e,f;b=a.g;a.ey=b;if(!(a.c$&4))a.g=b+1|0;else{c=C(a.A).data.length-2|0;a.g=b+1|0;a:while(true){d=a.g;if(d<c){e=C(a.A).data;if(NI(e[B(d,e)])){a.g=a.g+1|0;continue;}}d=a.g;if(d>=c)break;e=C(a.A).data;if(e[B(d,e)]!=35)break;a.g=d+1|0;while(true){f=a.g;if(f>=c)continue a;d=e[B(f,e)];if(d!=10&&d!=13&&d!=133&&(d|1)!=8233?0:1)continue a;a.g=f+1|0;}}}return a.ey;}
function Zf(b){return C(ATZ).w0(b);}
function JK(a){var b,c,d,e;b=a.A;c=BR(a);b=C(b).data;c=b[B(c,b)];if(Ch(c)){d=a.ey+1|0;b=C(a.A).data;if(d<b.length){e=b[B(d,b)];if(Cy(e)){BR(a);return DE(c,e);}}}return c;}
function Fj(a){return a.bV;}
function Q6(){var a=this;Bu.call(a);a.md=null;a.hS=null;a.fd=0;}
function BW(a,b,c){var d=new Q6();SA(d,a,b,c);return d;}
function SA(a,b,c,d){Be(a);a.fd=(-1);a.md=b;a.hS=c;a.fd=d;}
function AKy(a){var b,c,d,e,f,g,h,i,j,k,l;b=E(1);c=a.fd;if(c>=1){d=Ce(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bu;Be(b);K(b);}e=d;while(c<f){g=e.data;h=c+1|0;g[B(c,g)]=32;c=h;}b=KB(d);}i=a.md;j=a.hS;if(j!==null&&X(j)){k=a.fd;j=a.hS;l=new Q;S(l);M(C(M(C(M(C(M(C(Bc(l,k)),E(117))),j)),E(117))),b);b=R(l);}else b=E(1);j=new Q;S(j);M(C(M(j,i)),b);return R(j);}
var H$=G(0);
var Jd=G();
var Oi=G(0);
var KM=G(0);
function Ie(){Jd.call(this);this.cg=0;}
function M3(a){var b;b=new Lj;b.jW=a;b.mR=a.cg;b.kP=a.P;b.lK=(-1);return b;}
var PC=G(0);
function SW(){var a=this;Ie.call(a);a.bL=null;a.P=0;}
function AHF(){var a=new SW();AEs(a);return a;}
function AEs(a){a.bL=J(D,10);}
function Lf(a,b){var c,d;c=C(a.bL).data.length;if(c<b){d=c>=1073741823?2147483647:B7(b,B7(c*2|0,5));a.bL=IS(a.bL,d);}}
function C1(a,b){var c;KL(a,b);c=C(a.bL).data;return c[B(b,c)];}
function HB(a,b){var c,d;Lf(a,a.P+1|0);c=a.bL;d=a.P;a.P=d+1|0;c=C(c).data;c[B(d,c)]=b;a.cg=a.cg+1|0;return 1;}
function Qh(a,b){var c,d,e,f,g,h;KL(a,b);c=C(a.bL).data;d=B(b,c);e=c[d];f=a.P-1|0;a.P=f;while(d<f){g=B(d+1|0,c);h=c[g];c[B(d,c)]=h;d=g;}h=null;c[B(f,c)]=h;a.cg=a.cg+1|0;return e;}
function KL(a,b){var c;if(b>=0&&b<a.P)return;c=new Bp;Be(c);K(c);}
var Od=G(Cw);
function ABj(a,b,c,d){var e;e=a.by;d=C(d);BD(d,e,b-CY(d,e)|0);return C(a.b).a(b,c,d);}
function AIP(a,b){return 0;}
var RC=G(Cw);
function ADb(a,b,c,d){return b;}
var MY=G(Cw);
function ACp(a,b,c,d){if(CY(C(d),a.by)!=b)b=(-1);return b;}
function Jj(){Cw.call(this);this.jx=0;}
function ABv(a,b,c,d){var e;e=a.by;d=C(d);BD(d,e,b-CY(d,e)|0);a.jx=b;return b;}
function AHS(a,b){return 0;}
var EW=G(Cw);
function AJ6(a,b,c,d){d=C(d);if(d.fK!=1&&b!=d.h)return (-1);d.fl=1;Ic(d,0,b);return b;}
function BK(){Bj.call(this);this.O=0;}
function C$(a){BO(a);a.O=1;}
function AK4(a,b,c,d){var e;e=b+a.R()|0;d=C(d);if(e>d.h){d.br=1;return (-1);}e=a.F(b,c);if(e<0)return (-1);return C(a.b).a(b+e|0,c,d);}
function AJr(a){return a.O;}
function AFq(a,b){return 1;}
var Y0=G(BK);
function F1(a){var b=new Y0();AGH(b,a);return b;}
function AGH(a,b){I6(a,b);a.O=1;a.ej=1;a.O=0;}
function AI9(a,b,c){return 0;}
function AEf(a,b,c,d){var e,f,g;d=C(d);e=d.h;f=d.be;while(true){g=CP(b,e);if(g>0)return (-1);if(g<0){c=C(c);if(Cy(O(c,b))&&b>f&&Ch(O(c,b-1|0))){b=b+1|0;continue;}}if(C(a.b).a(b,c,d)>=0)break;b=b+1|0;}return b;}
function AC4(a,b,c,d,e){var f,g;e=C(e);f=e.h;g=e.be;while(true){if(c<b)return (-1);if(c<f){d=C(d);if(Cy(O(d,c))&&c>g&&Ch(O(d,c-1|0))){c=c+(-1)|0;continue;}}if(C(a.b).a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ABq(a,b){return 0;}
function BI(){var a=this;Bj.call(a);a.N=null;a.bU=null;a.x=0;}
function AMm(a,b){var c=new BI();EY(c,a,b);return c;}
function EY(a,b,c){BO(a);a.N=b;a.bU=c;a.x=C(c).by;}
function AEL(a,b,c,d){var e,f,g,h;if(a.N===null)return (-1);e=a.x;d=C(d);f=E2(d,e);C9(d,a.x,b);g=C(a.N).P;h=0;while(true){if(h>=g){C9(d,a.x,f);return (-1);}e=C(Z(C1(C(a.N),h),Bj)).a(b,c,d);if(e>=0)break;h=h+1|0;}return e;}
function AHM(a,b){C(a.bU).b=b;}
function AF_(a,b){var c;a:{c=a.N;if(c!==null){c=M3(c);while(true){c=C(c);if(!OW(c))break a;if(C(Z(QW(c),Bj)).Q(b))return 1;}}}return 0;}
function AIg(a,b){var c;c=a.x;b=C(b);return Ho(b,c)>=0&&E2(b,a.x)==Ho(b,a.x)?0:1;}
function ACW(a){var b,c,d,e,f,g,h,i,j;a.U=1;b=a.bU;if(b!==null&&!b.U)HL(b);a:{b=a.N;if(b!==null){c=b.P;d=0;while(true){if(d>=c)break a;b=C(Z(C1(C(a.N),d),Bj));e=b.cM();if(e===null)e=b;else{b.U=1;Qh(C(a.N),d);f=C(a.N);if(d<0)break;g=f.P;if(d>g)break;Lf(f,g+1|0);h=f.P;i=h;while(i>d){j=f.bL;g=i-1|0;j=C(j).data;b=j[B(g,j)];i=B(i,j);j[i]=b;i=i+(-1)|0;}j=C(f.bL).data;d=B(d,j);j[d]=e;f.P=h+1|0;f.cg=f.cg+1|0;}if(!e.U)e.bS();d=d+1|0;}b=new Bp;Be(b);K(b);}}if(a.b!==null)HL(a);}
var HG=G(BI);
function AHA(a,b,c,d){var e,f,g,h;e=a.x;d=C(d);f=CY(d,e);BD(d,a.x,b);g=C(a.N).P;h=0;while(true){if(h>=g){BD(d,a.x,f);return (-1);}e=C(Z(C1(C(a.N),h),Bj)).a(b,c,d);if(e>=0)break;h=h+1|0;}return e;}
function AIy(a,b){return !CY(C(b),a.x)?0:1;}
var Dk=G(HG);
function ADz(a,b,c,d){var e,f,g,h;e=a.x;f=C(d);e=CY(f,e);BD(f,a.x,b);g=C(a.N).P;h=0;while(h<g){if(C(Z(C1(C(a.N),h),Bj)).a(b,c,f)>=0)return C(a.b).a(C(Z(a.bU,Jj)).jx,c,f);h=h+1|0;}BD(f,a.x,e);return (-1);}
function AIl(a,b){a.b=b;}
var KF=G(Dk);
function AHH(a,b,c,d){var e,f;e=C(a.N).P;f=0;while(f<e){if(C(Z(C1(C(a.N),f),Bj)).a(b,c,d)>=0)return C(a.b).a(b,c,d);f=f+1|0;}return (-1);}
function AJV(a,b){return 0;}
var QK=G(Dk);
function AB$(a,b,c,d){var e,f;e=C(a.N).P;f=0;while(true){if(f>=e)return C(a.b).a(b,c,d);if(C(Z(C1(C(a.N),f),Bj)).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AJy(a,b){return 0;}
var NK=G(Dk);
function ACT(a,b,c,d){var e,f,g,h;e=C(a.N).P;d=C(d);f=d.fq?0:d.be;a:{g=C(a.b).a(b,c,d);if(g>=0){BD(d,a.x,b);h=0;while(true){if(h>=e)break a;if(C(Z(C1(C(a.N),h),Bj)).X(f,b,c,d)>=0){BD(d,a.x,(-1));return g;}h=h+1|0;}}}return (-1);}
function ALg(a,b){return 0;}
var O6=G(Dk);
function AAW(a,b,c,d){var e,f,g;e=C(a.N).P;f=a.x;d=C(d);BD(d,f,b);g=0;while(true){if(g>=e)return C(a.b).a(b,c,d);if(C(Z(C1(C(a.N),g),Bj)).X(0,b,c,d)>=0)break;g=g+1|0;}return (-1);}
function AIJ(a,b){return 0;}
function FJ(){BI.call(this);this.bj=null;}
function AMI(a,b){var c=new FJ();Tz(c,a,b);return c;}
function Tz(a,b,c){BO(a);a.bj=b;a.bU=c;a.x=C(c).by;}
function AA_(a,b,c,d){var e,f;e=a.x;d=C(d);e=E2(d,e);C9(d,a.x,b);f=C(a.bj).a(b,c,d);if(f>=0)return f;C9(d,a.x,e);return (-1);}
function AGl(a,b,c,d){var e;e=C(a.bj).W(b,c,d);if(e>=0)C9(C(d),a.x,e);return e;}
function AIV(a,b,c,d,e){var f;f=C(a.bj).X(b,c,d,e);if(f>=0)C9(C(e),a.x,f);return f;}
function AF7(a,b){return C(a.bj).Q(b);}
function AHO(a){var b;b=new K7;Tz(b,a.bj,a.bU);a.b=b;return b;}
function AKF(a){var b;a.U=1;b=a.bU;if(b!==null&&!b.U)HL(b);b=a.bj;if(b!==null&&!b.U){b=b.cM();if(b!==null){C(a.bj).U=1;a.bj=b;}C(a.bj).bS();}}
var F0=G();
function W(){var a=this;F0.call(a);a.B=0;a.S=0;a.r=null;a.fX=null;a.gx=null;a.t=0;}
var AT0=null;function Mb(){Mb=T(W);ADp();}
function Bk(a){var b;Mb();b=new Rb;b.j=Bl(64);a.r=b;}
function ACb(a){return null;}
function ABB(a){return a.r;}
function Wz(a){var b,c,d,e,f,g;if(!a.S)b=Gp(C(a.r),0)>=2048?0:1;else{a:{c=a.r;b=0;c=C(c);d=c.E;if(b<d){e=C(c.j).data;f=AND(0,e);g=(e[f]^(-1))>>>0|0;if(g)b=FY(g)+b|0;else{b=(d+31|0)/32|0;g=f+1|0;while(g<b){f=B(g,e);if(e[f]!=(-1)){b=(f*32|0)+FY(e[AND(f,e)]^(-1))|0;break a;}g=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AEY(a){return a.t;}
function AJl(a){return a;}
function SK(a){var b,c;if(a.gx===null){b=a.ch();c=new QQ;c.td=a;c.jP=b;Bk(c);a.gx=c;D2(c,a.S);}return a.gx;}
function GA(a){var b,c;if(a.fX===null){b=a.ch();c=new QO;c.so=a;c.mw=b;c.mP=a;Bk(c);a.fX=c;D2(c,a.B);C(a.fX).t=a.t;}return a.fX;}
function AKA(a){return 0;}
function D2(a,b){var c;c=a.B;if(c^b){a.B=c?0:1;a.S=a.S?0:1;}if(!a.t)a.t=1;return a;}
function AEj(a){return a.B;}
function ID(b,c){Mb();return C(b).f(c);}
function Hd(b,c){var d,e,f,g,h,i;Mb();d=C(b);if(d.bp()!==null){c=C(c);if(c.bp()!==null){b=d.bp();c=c.bp();b=C(b);e=C(b.j).data.length;c=C(c);e=B$(e,C(c.j).data.length);f=0;a:{while(f<e){g=C(b.j).data;h=B(f,g);f=g[h];g=C(c.j).data;i=AND(h,g);if(f&g[i]){e=1;break a;}f=i+1|0;}e=0;}return e;}}return 1;}
function Oo(b,c){var d,e,f,g,h;Mb();d=C(AT0);e=0;while(true){AII();f=C(AT1).data;if(e>=f.length){g=new HR;Y(g,E(1));g.tU=E(1);g.tn=b;K(g);}h=B(e,f);f=C(f[h]).data;d=f[AND(0,f)];b=C(b);if(Bh(b,d))break;e=h+1|0;}return Yc(C(Z(f[AND(1,f)],Bb)),c);}
function ADp(){var b;b=new Ge;AII();AT0=b;}
function Tk(){var a=this;W.call(a);a.hY=0;a.jw=0;a.dj=0;a.hu=0;a.bE=0;a.cD=0;a.o=null;a.M=null;}
function CZ(){var a=new Tk();AK8(a);return a;}
function AJ2(a,b){var c=new Tk();ADd(c,a,b);return c;}
function AK8(a){Bk(a);a.o=ALi();}
function ADd(a,b,c){Bk(a);a.o=ALi();a.hY=b;a.jw=c;}
function Cc(a,b){var c,d;a:{if(a.hY){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bE){Kp(C(a.o),GC(b&65535));break a;}c=a.o;d=GC(b&65535);JE(C(c),d);break a;}if(a.jw&&b>128){a.dj=1;b=EU(FM(b));}}}if(!(!OF(b)&&!Mj(b))){if(a.hu)Kp(C(a.r),b-55296|0);else JE(C(a.r),b-55296|0);}if(a.bE)Kp(C(a.o),b);else JE(C(a.o),b);if(!a.t&&J2(b))a.t=1;return a;}
function AAr(a,b){var c,d,e;if(!a.t){b=C(b);if(b.t)a.t=1;}if(a.hu){c=C(b);if(!c.S)Fa(C(a.r),c.ch());else CU(C(a.r),c.ch());}else{c=C(b);if(!c.S)E8(C(a.r),c.ch());else{ES(C(a.r),c.ch());CU(C(a.r),c.ch());a.S=a.S?0:1;a.hu=1;}}if(!a.cD&&c.bp()!==null){if(a.bE){if(!c.B)Fa(C(a.o),c.bp());else CU(C(a.o),c.bp());}else if(!c.B)E8(C(a.o),c.bp());else{ES(C(a.o),c.bp());CU(C(a.o),c.bp());a.B=a.B?0:1;a.bE=1;}}else{d=a.B;e=a.M;if(e!==null){if(!d){b=new L7;b.oz=a;b.m1=d;b.mI=e;b.mC=c;Bk(b);a.M=b;}else{b=new L8;b.t7=a;b.ll
=d;b.la=e;b.kQ=c;Bk(b);a.M=b;}}else{if(d&&!a.bE&&J4(C(a.o))){b=new L3;b.q4=a;b.ld=c;Bk(b);a.M=b;}else if(!d){b=new L1;b.hc=a;b.f_=d;b.j8=c;Bk(b);a.M=b;}else{b=new L2;b.h_=a;b.gl=d;b.mE=c;Bk(b);a.M=b;}a.cD=1;}}return a;}
function BQ(a,b,c){var d,e,f,g;if(b>c){d=new Bu;Be(d);K(d);}a:{b:{if(!a.hY){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cc(a,b);b=b+1|0;}}if(!a.bE)GV(C(a.o),b,c+1|0);else{d=a.o;c=c+1|0;d=C(d);if(b>=0&&b<=c){e=d.E;if(b<e){e=B$(e,c);if(b!=e){c=b/32|0;f=e/32|0;if(c==f){g=C(d.j).data;f=B(c,g);g[f]=g[f]&(Ha(d,b)|GL(d,e));}else{g=C(d.j).data;c=B(c,g);g[c]=g[c]&Ha(d,b);b=c+1|0;while(b<f){g=C(d.j).data;c=B(b,g);g[c]=0;b=c+1|0;}if(e&31){g=C(d.j).data;b=B(f,g);g[b]=g[b]&GL(d,e);}}Gh(d);}}}
else{d=new Bp;Be(d);K(d);}}}return a;}
function R4(a,b){var c,d,e;if(!a.t){b=C(b);if(b.t)a.t=1;}c=C(b);if(c.dj)a.dj=1;d=a.S;if(!(d^c.S)){if(!d)E8(C(a.r),c.r);else CU(C(a.r),c.r);}else if(d)Fa(C(a.r),c.r);else{ES(C(a.r),c.r);CU(C(a.r),c.r);a.S=1;}if(!a.cD&&CF(c)!==null){d=a.B;if(!(d^c.B)){if(!d)E8(C(a.o),CF(c));else CU(C(a.o),CF(c));}else if(d)Fa(C(a.o),CF(c));else{ES(C(a.o),CF(c));CU(C(a.o),CF(c));a.B=1;}}else{d=a.B;e=a.M;if(e!==null){if(!d){b=new LU;b.nS=a;b.mh=d;b.mD=e;b.mT=c;Bk(b);a.M=b;}else{b=new Ms;b.oU=a;b.mS=d;b.jp=e;b.jz=c;Bk(b);a.M=b;}}
else{if(!a.bE&&J4(C(a.o))){if(!d){b=new L5;b.uf=a;b.kJ=c;Bk(b);a.M=b;}else{b=new L6;b.o6=a;b.mN=c;Bk(b);a.M=b;}}else if(!d){b=new L9;b.ml=a;b.lA=c;b.lc=d;Bk(b);a.M=b;}else{b=new L$;b.lL=a;b.lU=c;b.l0=d;Bk(b);a.M=b;}a.cD=1;}}}
function Q4(a,b){var c,d,e;if(!a.t){b=C(b);if(b.t)a.t=1;}c=C(b);if(c.dj)a.dj=1;d=a.S;if(!(d^c.S)){if(!d)CU(C(a.r),c.r);else E8(C(a.r),c.r);}else if(!d)Fa(C(a.r),c.r);else{ES(C(a.r),c.r);CU(C(a.r),c.r);a.S=0;}if(!a.cD&&CF(c)!==null){d=a.B;if(!(d^c.B)){if(!d)CU(C(a.o),CF(c));else E8(C(a.o),CF(c));}else if(!d)Fa(C(a.o),CF(c));else{ES(C(a.o),CF(c));CU(C(a.o),CF(c));a.B=0;}}else{d=a.B;e=a.M;if(e!==null){if(!d){b=new LW;b.ou=a;b.mm=d;b.jO=e;b.lj=c;Bk(b);a.M=b;}else{b=new LX;b.pm=a;b.l6=d;b.jk=e;b.mg=c;Bk(b);a.M=b;}}
else{if(!a.bE&&J4(C(a.o))){if(!d){b=new LS;b.ph=a;b.kq=c;Bk(b);a.M=b;}else{b=new LT;b.tY=a;b.kv=c;Bk(b);a.M=b;}}else if(!d){b=new LY;b.nh=a;b.mZ=c;b.lQ=d;Bk(b);a.M=b;}else{b=new LR;b.lP=a;b.mc=c;b.ln=d;Bk(b);a.M=b;}a.cD=1;}}}
function CI(a,b){var c;c=a.M;if(c!==null)return a.B^c.f(b);return a.B^C5(C(a.o),b);}
function CF(a){if(!a.cD)return a.o;return null;}
function AD$(a){return a.r;}
function AJK(a){var b,c;if(a.M!==null)return a;b=CF(a);c=new LV;c.nF=a;c.e8=b;Bk(c);return D2(c,a.B);}
function AGY(a){var b,c,d,e;b=new Q;S(b);c=Gp(C(a.o),0);while(c>=0){Hh(b,FG(c));Bs(b,124);d=a.o;c=c+1|0;c=Gp(C(d),c);}e=b.w;if(e>0)QL(b,e-1|0);return R(b);}
function AEk(a){return a.dj;}
function HR(){var a=this;Bq.call(a);a.tU=null;a.tn=null;}
function Dg(){Bj.call(this);this.q=null;}
function CV(a,b,c,d){I6(a,c);a.q=b;a.ej=d;}
function AK7(a){return a.q;}
function AIY(a,b){return !C(a.q).Q(b)&&!C(a.b).Q(b)?0:1;}
function AJ3(a,b){return 1;}
function AGF(a){var b;a.U=1;b=a.b;if(b!==null&&!b.U){b=b.cM();if(b!==null){C(a.b).U=1;a.b=b;}C(a.b).bS();}b=a.q;if(b!==null){if(!b.U){b=b.cM();if(b!==null){C(a.q).U=1;a.q=b;}C(a.q).bS();}else if(b instanceof FJ&&C(C(Z(b,BI)).bU).gK)a.q=b.b;}}
function Cn(){Dg.call(this);this.y=null;}
function AMO(a,b,c){var d=new Cn();Eo(d,a,b,c);return d;}
function Eo(a,b,c,d){CV(a,b,c,d);a.y=b;}
function AAY(a,b,c,d){var e,f,g;e=0;a:{while(true){f=b+C(a.y).R()|0;d=C(d);if(f>d.h)break;g=C(a.y).F(b,c);if(g<=0)break a;b=b+g|0;e=e+1|0;}}while(true){if(e<0)return (-1);g=C(a.b).a(b,c,d);if(g>=0)break;b=b-C(a.y).R()|0;e=e+(-1)|0;}return g;}
function EC(){Cn.call(this);this.fJ=null;}
function ALT(a,b,c,d){var e=new EC();Oq(e,a,b,c,d);return e;}
function Oq(a,b,c,d,e){Eo(a,c,d,e);a.fJ=b;}
function ABT(a,b,c,d){var e,f,g,h,i;e=C(a.fJ);f=e.b_;g=e.b7;h=0;while(true){if(h>=f){a:{while(h<g){i=b+C(a.y).R()|0;d=C(d);if(i>d.h)break a;i=C(a.y).F(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=C(a.b).a(b,c,d);if(i>=0)break;b=b-C(a.y).R()|0;h=h+(-1)|0;}return i;}i=b+C(a.y).R()|0;d=C(d);if(i>d.h){d.br=1;return (-1);}i=C(a.y).F(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CA=G(Dg);
function AA9(a,b,c,d){var e;if(!C(a.q).p(d))return C(a.b).a(b,c,d);e=C(a.q).a(b,c,d);if(e>=0)return e;return C(a.b).a(b,c,d);}
var D6=G(Cn);
function AGs(a,b,c,d){var e;e=C(a.q).a(b,c,d);if(e<0)e=C(a.b).a(b,c,d);return e;}
function ALj(a,b){a.b=b;C(a.q).u(b);}
var QS=G(Cn);
function AKY(a,b,c,d){var e;while(true){e=b+C(a.y).R()|0;d=C(d);if(e>d.h)break;if(C(a.y).F(b,c)<=0)break;b=b+C(a.y).R()|0;}return C(a.b).a(b,c,d);}
function AGW(a,b,c,d){var e,f,g;e=C(a.b).W(b,c,d);if(e<0)return (-1);f=e-C(a.y).R()|0;while(f>=b&&C(a.y).F(f,c)>0){g=f-C(a.y).R()|0;e=f;f=g;}return e;}
function Bb(){var a=this;D.call(a);a.ih=null;a.g8=null;}
function Yc(a,b){if(!b&&a.ih===null)a.ih=a.k();else if(b&&a.g8===null)a.g8=D2(C(a.k()),1);if(b)return a.g8;return a.ih;}
function DG(){var a=this;F0.call(a);a.b_=0;a.b7=0;}
function AG5(a){var b,c,d,e,f;b=a.b_;c=a.b7;d=c!=2147483647?Jx(c):E(1);e=new Q;S(e);Bs(e,123);f=C(Bc(e,b));Bs(f,44);Bs(C(M(f,d)),125);return R(e);}
var LK=G(Bj);
function AFL(a,b,c,d){return b;}
function AHL(a,b){return 0;}
function Rb(){var a=this;D.call(a);a.j=null;a.E=0;}
function ALi(){var a=new Rb();ACD(a);return a;}
function ACD(a){a.j=Bl(2);}
function JE(a,b){var c,d,e,f;if(b<0){c=new Bp;Be(c);K(c);}d=b/32|0;if(b>=a.E){Hk(a,d+1|0);a.E=b+1|0;}e=C(a.j).data;f=B(d,e);e[f]=e[f]|1<<(b%32|0);}
function GV(a,b,c){var d,e,f,g,h;if(b>=0){d=CP(b,c);if(d<=0){if(!d)return;e=b/32|0;d=c/32|0;if(c>a.E){Hk(a,d+1|0);a.E=c;}if(e==d){f=C(a.j).data;e=B(e,f);f[e]=f[e]|GL(a,b)&Ha(a,c);}else{f=C(a.j).data;e=B(e,f);f[e]=f[e]|GL(a,b);g=e+1|0;while(g<d){f=C(a.j).data;g=B(g,f);f[g]=(-1);g=g+1|0;}if(c&31){f=C(a.j).data;d=B(d,f);f[d]=f[d]|Ha(a,c);}}return;}}h=new Bp;Be(h);K(h);}
function GL(a,b){return (-1)<<(b%32|0);}
function Ha(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Kp(a,b){var c,d,e,f,g,h;if(b<0){c=new Bp;Be(c);K(c);}d=b/32|0;e=C(a.j).data;if(d<e.length){f=B(d,e);g=e[f];h=(b%32|0)&31;e[f]=g&((-2)<<h|((-2)>>>(32-h|0)|0));if(b==(a.E-1|0))Gh(a);}}
function C5(a,b){var c,d,e;if(b<0){c=new Bp;Be(c);K(c);}d=b/32|0;e=C(a.j).data;return d<e.length&&e[B(d,e)]&1<<(b%32|0)?1:0;}
function Gp(a,b){var c,d,e,f,g,h;if(b<0){c=new Bp;Be(c);K(c);}d=a.E;if(b>=d)return (-1);e=b/32|0;f=C(a.j).data;g=B(e,f);e=f[g]>>>(b%32|0)|0;if(e)return FY(e)+b|0;d=(d+31|0)/32|0;h=g+1|0;while(h<d){h=B(h,f);if(f[h])return (h*32|0)+FY(f[AND(h,f)])|0;h=h+1|0;}return (-1);}
function Hk(a,b){var c,d,e,f,g;c=C(a.j).data.length;if(c>=b)return;c=B7((b*3|0)/2|0,(c*2|0)+1|0);d=a.j;e=Bl(c);d=C(d).data;b=B$(c,d.length);c=0;while(c<b){f=e.data;g=B(c,d);c=d[g];g=AND(g,f);f[g]=c;c=g+1|0;}a.j=e;}
function Gh(a){var b,c,d,e,f;b=(a.E+31|0)/32|0;a.E=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=C(a.j).data;e=B(c,d);f=Lr(d[e]);if(f<32)break;c=e+(-1)|0;a.E=a.E-32|0;}a.E=a.E-f|0;}}
function CU(a,b){var c,d,e,f,g;c=C(a.j).data.length;b=C(b);c=B$(c,C(b.j).data.length);d=0;while(d<c){e=C(a.j).data;d=B(d,e);f=e[d];g=C(b.j).data;d=AND(d,g);e[d]=f&g[d];d=d+1|0;}while(true){e=C(a.j).data;if(c>=e.length)break;f=B(c,e);e[f]=0;c=f+1|0;}a.E=B$(a.E,b.E);Gh(a);}
function Fa(a,b){var c,d,e,f,g,h;c=C(a.j).data.length;b=C(b);c=B$(c,C(b.j).data.length);d=0;while(d<c){e=C(a.j).data;d=B(d,e);f=e[d];g=C(b.j).data;h=AND(d,g);e[h]=f&(g[h]^(-1));d=h+1|0;}Gh(a);}
function E8(a,b){var c,d,e,f,g,h;c=a.E;b=C(b);c=B7(c,b.E);a.E=c;Hk(a,(c+31|0)/32|0);c=B$(C(a.j).data.length,C(b.j).data.length);d=0;while(d<c){e=C(a.j).data;f=B(d,e);d=e[f];g=C(b.j).data;h=AND(f,g);e[h]=d|g[h];d=h+1|0;}}
function ES(a,b){var c,d,e,f,g,h;c=a.E;b=C(b);c=B7(c,b.E);a.E=c;Hk(a,(c+31|0)/32|0);c=B$(C(a.j).data.length,C(b.j).data.length);d=0;while(d<c){e=C(a.j).data;f=B(d,e);d=e[f];g=C(b.j).data;h=AND(f,g);e[h]=d^g[h];d=h+1|0;}Gh(a);}
function J4(a){return a.E?0:1;}
function KK(){var a=this;BI.call(a);a.ky=null;a.nE=0;}
function M_(){var a=this;BI.call(a);a.iF=null;a.ib=null;}
function XH(a,b){var c=new M_();Z3(c,a,b);return c;}
function Z3(a,b,c){BO(a);a.iF=b;a.ib=c;}
function ABM(a,b,c,d){var e,f,g,h,i,j;e=C(a.iF).a(b,c,d);if(e<0)a:{f=C(a.ib);d=C(d);g=d.be;h=d.h;i=b+1|0;e=CP(i,h);if(e>0){d.br=1;e=(-1);}else{j=C(c);h=O(j,b);if(!C(f.ky).f(h))e=(-1);else{if(Ch(h)){if(e<0&&Cy(O(j,i))){e=(-1);break a;}}else if(Cy(h)&&b>g&&Ch(O(j,b-1|0))){e=(-1);break a;}e=C(f.b).a(i,j,d);}}}if(e>=0)return e;return (-1);}
function AHy(a,b){a.b=b;C(a.ib).b=b;C(a.iF).u(b);}
function ACt(a,b){return 1;}
function ACa(a,b){return 1;}
function Ci(){var a=this;BI.call(a);a.bB=null;a.qN=0;}
function AFJ(a){var b=new Ci();PK(b,a);return b;}
function PK(a,b){var c;BO(a);c=C(b);a.bB=c.fs();a.qN=c.B;}
function AD0(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.h;if(b<f){g=b+1|0;c=C(c);h=O(c,b);if(a.f(h)){i=C(a.b).a(g,c,e);if(i>0)return i;}if(g<f){b=g+1|0;g=O(c,g);if(Gu(h,g)&&a.f(DE(h,g)))return C(a.b).a(b,c,e);}}return (-1);}
function AEt(a,b){return C(a.bB).f(b);}
function ABH(a,b){if(b instanceof CH)return ID(a.bB,C(Z(b,CH)).c3);if(b instanceof CR)return ID(a.bB,C(Z(b,CR)).bo);if(b instanceof Ci)return Hd(a.bB,C(Z(b,Ci)).bB);if(!(b instanceof CK))return 1;return Hd(a.bB,C(Z(b,CK)).cs);}
function AFE(a){return a.bB;}
function AJg(a,b){a.b=b;}
function AEa(a,b){return 1;}
var HP=G(Ci);
function AFr(a,b){return C(a.bB).f(EU(FM(b)));}
function Td(){var a=this;BK.call(a);a.kX=null;a.p$=0;}
function AEZ(a){var b=new Td();AHb(b,a);return b;}
function AHb(a,b){var c;C$(a);c=C(b);a.kX=c.fs();a.p$=c.B;}
function AFM(a,b,c){return !C(a.kX).f(Dj(D5(O(C(c),b))))?(-1):1;}
function CK(){var a=this;BK.call(a);a.cs=null;a.rB=0;}
function AJG(a){var b=new CK();AH7(b,a);return b;}
function AH7(a,b){var c;C$(a);c=C(b);a.cs=c.fs();a.rB=c.B;}
function Ku(a,b,c){return !C(a.cs).f(O(C(c),b))?(-1):1;}
function AHN(a,b){if(b instanceof CR)return ID(a.cs,C(Z(b,CR)).bo);if(b instanceof CK)return Hd(a.cs,C(Z(b,CK)).cs);if(!(b instanceof Ci)){if(!(b instanceof CH))return 1;return 0;}return Hd(a.cs,C(Z(b,Ci)).bB);}
function Im(){var a=this;BI.call(a);a.dw=null;a.iv=null;a.fH=0;}
function AJO(a,b){var c=new Im();ABa(c,a,b);return c;}
function ABa(a,b,c){BO(a);a.dw=b;a.fH=c;}
function AGr(a,b){a.b=b;}
function Nn(a){if(a.iv===null)a.iv=KB(a.dw);return a.iv;}
function AAO(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;d=C(d);e=d.h;f=Bl(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;c=C(c);j=O(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=Bl(2);n=m.data;n[AND(0,n)]=b;n[AND(1,n)]=l;}else{k=4519+k|0;m=Bl(3);n=m.data;n[AND(0,n)]=b;n[AND(1,n)]=l;n[AND(2,n)]=k;}}else m=null;if(m!==null){n=m.data;l=0;b=n.length;k=a.fH;if(b!=k)return (-1);while(true){if(l>=k)return C(a.b).a(i,c,d);b=B(l,n);o=n[b];f=C(a.dw).data;b=AND(b,f);if(o!=f[b])break;l
=b+1|0;}return (-1);}n=f.data;n[AND(0,n)]=j;p=j-4352|0;if(p>=0&&p<19){if(i<e){j=O(c,i);g=j-4449|0;}if(g>=0&&g<21){b=i+1|0;n[AND(1,n)]=j;if(b<e){j=O(c,b);h=j-4519|0;}if(h>=0&&h<28){a:{o=b+1|0;n[AND(2,n)]=j;if(a.fH==3){k=n[AND(0,n)];f=C(a.dw).data;if(k==f[AND(0,f)]&&n[AND(1,n)]==f[AND(1,f)]&&n[AND(2,n)]==f[AND(2,f)]){b=C(a.b).a(o,c,d);break a;}}b=(-1);}return b;}b:{if(a.fH==2){o=n[AND(0,n)];f=C(a.dw).data;if(o==f[AND(0,f)]&&n[AND(1,n)]==f[AND(1,f)]){b=C(a.b).a(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ACm(a,b){return b instanceof Im&&!Bh(C(Nn(C(Z(b,Im)))),Nn(a))?0:1;}
function AJN(a,b){return 1;}
function CR(){BK.call(this);this.bo=0;}
function TO(a){var b=new CR();AH9(b,a);return b;}
function AH9(a,b){C$(a);a.bo=b;}
function AFy(a){return 1;}
function AEW(a,b,c){return a.bo!=O(C(c),b)?(-1):1;}
function ADZ(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return GG(a,b,c,d);d=C(d);e=d.h;f=c;while(true){if(b>=e)return (-1);g=a.bo;f=C(f);g=FU(f,g,b);if(g<0)return (-1);h=a.b;b=g+1|0;if(C(h).a(b,c,d)>=0)break;}return g;}
function AFF(a,b,c,d,e){var f,g;if(!(d instanceof BA))return GS(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=a.bo;f=C(f);g=Fh(f,g,c);if(g<0)break a;if(g<b)break a;if(C(a.b).a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJJ(a,b){if(b instanceof CR)return C(Z(b,CR)).bo!=a.bo?0:1;if(!(b instanceof CK)){if(b instanceof Ci)return C(Z(b,Ci)).f(a.bo);if(!(b instanceof CH))return 1;return 0;}return Ku(C(Z(b,CK)),0,Rc(a.bo))<=0?0:1;}
function ZQ(){BK.call(this);this.je=0;}
function AIp(a){var b=new ZQ();AGS(b,a);return b;}
function AGS(a,b){C$(a);a.je=Dj(D5(b));}
function AAI(a,b,c){return a.je!=Dj(D5(O(C(c),b)))?(-1):1;}
function R7(){var a=this;BK.call(a);a.mV=0;a.jJ=0;}
function ACK(a){var b=new R7();AIF(b,a);return b;}
function AIF(a,b){C$(a);a.mV=b;a.jJ=GC(b);}
function AA6(a,b,c){var d;d=a.mV;c=C(c);return d!=O(c,b)&&a.jJ!=O(c,b)?(-1):1;}
function D_(){var a=this;BI.call(a);a.ec=0;a.gV=null;a.ge=null;a.f9=0;}
function ANx(a,b){var c=new D_();LD(c,a,b);return c;}
function LD(a,b,c){BO(a);a.ec=1;a.ge=b;a.f9=c;}
function AKD(a,b){a.b=b;}
function AHz(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bl(4);d=C(d);f=d.h;if(b>=f)return (-1);g=IW(a,b,c,f);h=b+a.ec|0;i=Zf(g);if(i===null){j=e.data;b=1;j[AND(0,j)]=g;}else{b=i.data.length;Fg(i,0,e,0,b);b=0+b|0;}a:{if(h<f){g=IW(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){j=e.data;k=b+1|0;j[B(b,j)]=g;}else{j=C(Zf(g)).data;if(j.length!=2){i=e.data;k=b+1|0;i[B(b,i)]=j[AND(0,j)];}else{i=e.data;g=b+1|0;i[B(b,i)]=j[AND(0,j)];k=g+1|0;i[B(g,i)]=j[AND(1,j)];}}h=h+a.ec|0;if(h>=f){b=k;break a;}g
=IW(a,h,c,f);b=k;}}}if(b!=a.f9)return (-1);g=0;while(true){if(g>=b)return C(a.b).a(h,c,d);j=e.data;k=B(g,j);g=j[k];j=C(a.ge).data;l=AND(k,j);if(g!=j[l])break;g=l+1|0;}return (-1);}
function Q3(a){var b,c,d,e;if(a.gV===null){b=new Q;S(b);c=0;while(c<a.f9){d=C(a.ge).data;e=B(c,d);Hh(b,FG(d[e]));c=e+1|0;}a.gV=R(b);}return a.gV;}
function IW(a,b,c,d){var e,f,g,h;a.ec=1;if(b>=(d-1|0))e=O(C(c),b);else{d=b+1|0;c=C(c);e=O(c,b);f=O(c,d);if(Gu(e,f)){a:{g=Ce(2);h=g.data;h[AND(0,h)]=e;h[AND(1,h)]=f;e=0;if(e<(h.length-1|0)){e=AND(e,h);if(Ch(h[e])){d=AND(e+1|0,h);if(Cy(h[d])){e=DE(h[e],h[d]);break a;}}}g=g.data;e=g[AND(e,g)];}a.ec=2;}}return e;}
function AFN(a,b){return b instanceof D_&&!Bh(C(Q3(C(Z(b,D_)))),Q3(a))?0:1;}
function AIo(a,b){return 1;}
var Ru=G(D_);
var Pp=G(D_);
var RV=G(CA);
function ADh(a,b,c,d){var e;while(true){e=C(a.q).a(b,c,d);if(e<=0)break;b=e;}return C(a.b).a(b,c,d);}
var MR=G(CA);
function AGN(a,b,c,d){var e;e=C(a.q).a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=C(a.q).a(e,c,d);if(b<=e)break;e=b;}b=e;}return C(a.b).a(b,c,d);}
var E_=G(CA);
function AJe(a,b,c,d){var e;if(!C(a.q).p(d))return C(a.b).a(b,c,d);e=C(a.q).a(b,c,d);if(e>=0)return e;return C(a.b).a(b,c,d);}
function AJ$(a,b){a.b=b;C(a.q).u(b);}
var MC=G(E_);
function AFD(a,b,c,d){var e;e=C(a.q).a(b,c,d);if(e<=0)e=b;return C(a.b).a(e,c,d);}
function AG6(a,b){a.b=b;}
function EH(){var a=this;CA.call(a);a.c9=null;a.bt=0;}
function AT2(a,b,c,d,e){var f=new EH();HN(f,a,b,c,d,e);return f;}
function HN(a,b,c,d,e,f){CV(a,c,d,e);a.c9=b;a.bt=f;}
function ALe(a,b,c,d){var e,f,g,h;e=a.bt;f=C(d);g=KN(f,e);if(!C(a.q).p(f))return C(a.b).a(b,c,f);if(g>=C(a.c9).b7)return C(a.b).a(b,c,f);h=a.bt;e=g+1|0;DJ(f,h,e);h=C(a.q).a(b,c,f);if(h>=0){DJ(f,a.bt,0);return h;}h=a.bt;g=e+(-1)|0;DJ(f,h,g);if(g>=C(a.c9).b_)return C(a.b).a(b,c,f);DJ(f,a.bt,0);return (-1);}
var K9=G(EH);
function AFb(a,b,c,d){var e,f,g;e=0;f=C(a.c9).b7;a:{while(true){g=C(a.q).a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<C(a.c9).b_)return (-1);return C(a.b).a(b,c,d);}
var N2=G(CA);
function AKN(a,b,c,d){var e;if(!C(a.q).p(d))return C(a.b).a(b,c,d);e=C(a.b).a(b,c,d);if(e>=0)return e;return C(a.q).a(b,c,d);}
var Nm=G(E_);
function ACu(a,b,c,d){var e;if(!C(a.q).p(d))return C(a.b).a(b,c,d);e=C(a.b).a(b,c,d);if(e<0)e=C(a.q).a(b,c,d);return e;}
var P7=G(EH);
function ABw(a,b,c,d){var e,f,g;e=a.bt;f=C(d);g=KN(f,e);if(!C(a.q).p(f))return C(a.b).a(b,c,f);d=C(a.c9);if(g>=d.b7){DJ(f,a.bt,0);return C(a.b).a(b,c,f);}if(g<d.b_){DJ(f,a.bt,g+1|0);e=C(a.q).a(b,c,f);}else{e=C(a.b).a(b,c,f);if(e>=0){DJ(f,a.bt,0);return e;}DJ(f,a.bt,g+1|0);e=C(a.q).a(b,c,f);}return e;}
var N5=G(Dg);
function AK6(a,b,c,d){var e;d=C(d);e=d.h;if(e>b)return C(a.b).X(b,e,c,d);return C(a.b).a(b,c,d);}
function AJm(a,b,c,d){var e;d=C(d);e=d.h;if(C(a.b).X(b,e,c,d)>=0)return b;return (-1);}
function LQ(){Dg.call(this);this.g5=null;}
function AHP(a,b,c,d){var e,f;d=C(d);e=d.h;f=P8(a,b,e,c);if(f>=0)e=f;if(e>b)return C(a.b).X(b,e,c,d);return C(a.b).a(b,c,d);}
function AAU(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.h;g=C(a.b).W(b,c,e);if(g<0)return (-1);h=P8(a,g,f,c);if(h>=0)f=h;f=B7(g,C(a.b).X(g,f,c,e));if(f<=0)i=f?(-1):0;else{i=f-1|0;a:{while(true){if(i<b){i=(-1);break a;}d=a.g5;c=C(c);if(C(d).eh(O(c,i)))break;i=i+(-1)|0;}}}if(i>=b)b=i>=f?i:i+1|0;return b;}
function P8(a,b,c,d){var e;while(true){if(b>=c)return (-1);e=a.g5;d=C(d);if(C(e).eh(O(d,b)))break;b=b+1|0;}return b;}
var Ej=G();
var AT3=null;var AT4=null;function MD(b){var c;if(!(b&1)){c=AT4;if(c!==null)return c;c=new Qg;AT4=c;return c;}c=AT3;if(c!==null)return c;c=new Qf;AT3=c;return c;}
var RW=G(Cn);
function ABy(a,b,c,d){var e;a:{while(true){e=b+C(a.y).R()|0;d=C(d);if(e>d.h)break a;e=C(a.y).F(b,c);if(e<1)break;b=b+e|0;}}return C(a.b).a(b,c,d);}
var QN=G(D6);
function AGL(a,b,c,d){var e;e=b+C(a.y).R()|0;d=C(d);if(e<=d.h){e=C(a.y).F(b,c);if(e>=1)b=b+e|0;}return C(a.b).a(b,c,d);}
var Mn=G(EC);
function AI1(a,b,c,d){var e,f,g,h,i,j;e=C(a.fJ);f=e.b_;g=e.b7;h=0;while(true){if(h>=f){a:{while(h<g){i=b+C(a.y).R()|0;d=C(d);if(i>d.h)break a;j=C(a.y).F(b,c);if(j<1)break a;b=b+j|0;h=h+1|0;}}return C(a.b).a(b,c,d);}j=b+C(a.y).R()|0;d=C(d);if(j>d.h){d.br=1;return (-1);}j=C(a.y).F(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Nj=G(Cn);
function AHJ(a,b,c,d){var e,f;while(true){e=C(a.b).a(b,c,d);if(e>=0)break;f=b+C(a.y).R()|0;d=C(d);if(f<=d.h){e=C(a.y).F(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Pw=G(D6);
function ABE(a,b,c,d){var e;e=C(a.b).a(b,c,d);if(e>=0)return e;return C(a.q).a(b,c,d);}
var NL=G(EC);
function AI_(a,b,c,d){var e,f,g,h,i,j;e=C(a.fJ);f=e.b_;g=e.b7;h=0;while(true){if(h>=f){a:{while(true){f=C(a.b).a(b,c,d);if(f>=0)break;i=b+C(a.y).R()|0;d=C(d);if(i<=d.h){f=C(a.y).F(b,c);b=b+f|0;h=h+1|0;}if(f<1)break a;if(h>g)break a;}return f;}return (-1);}j=b+C(a.y).R()|0;d=C(d);if(j>d.h){d.br=1;return (-1);}j=C(a.y).F(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Vk=G(Bj);
function AJL(){var a=new Vk();ADD(a);return a;}
function ADD(a){BO(a);}
function AF8(a,b,c,d){if(b){d=C(d);if(!(d.cF&&b==d.be))return (-1);}return C(a.b).a(b,c,d);}
function AFl(a,b){return 0;}
function T1(){Bj.call(this);this.mJ=0;}
function AJF(a){var b=new T1();AFu(b,a);return b;}
function AFu(a,b){BO(a);a.mJ=b;}
function AB9(a,b,c,d){var e,f,g,h,i;e=C(d);if(b>=e.h)f=32;else{c=C(c);f=O(c,b);}if(!b)g=32;else{h=b-1|0;c=C(c);g=O(c,h);}i=e.fq?0:e.be;return (f!=32&&!Nr(a,f,b,i,c)?0:1)^(g!=32&&!Nr(a,g,b-1|0,i,c)?0:1)^a.mJ?(-1):C(a.b).a(b,c,e);}
function ACl(a,b){return 0;}
function Nr(a,b,c,d,e){var f;if(!H5(b)&&b!=95){a:{if(Ca(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;e=C(e);f=O(e,c);if(H5(f))return 0;if(Ca(f)!=6)return 1;}}return 1;}return 0;}
var S9=G(Bj);
function ALU(){var a=new S9();AJi(a);return a;}
function AJi(a){BO(a);}
function AFt(a,b,c,d){d=C(d);if(b!=d.eo)return (-1);return C(a.b).a(b,c,d);}
function ALb(a,b){return 0;}
function Rf(){Bj.call(this);this.c_=0;}
function AM5(a){var b=new Rf();Y3(b,a);return b;}
function Y3(a,b){BO(a);a.c_=b;}
function AIa(a,b,c,d){var e,f,g,h;e=C(d);if(!e.cF){c=C(c);f=X(c);}else f=e.h;if(b>=f){BD(e,a.c_,0);return C(a.b).a(b,c,e);}f=f-b|0;if(f==2){c=C(c);if(O(c,b)==13&&O(c,b+1|0)==10){BD(e,a.c_,0);return C(a.b).a(b,c,e);}}a:{if(f==1){g=C(c);h=O(g,b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}BD(e,a.c_,0);return C(a.b).a(b,g,e);}
function AC8(a,b){var c;c=a.c_;b=C(b);c=!CY(b,c)?0:1;BD(b,a.c_,(-1));return c;}
var Zr=G(Bj);
function AM_(){var a=new Zr();AFm(a);return a;}
function AFm(a){BO(a);}
function AHw(a,b,c,d){var e;d=C(d);if(!d.fq)e=d.h;else{c=C(c);e=X(c);}if(b<e)return (-1);d.br=1;d.sU=1;return C(a.b).a(b,c,d);}
function AAF(a,b){return 0;}
function Sy(){Bj.call(this);this.lt=null;}
function ANd(a){var b=new Sy();AIc(b,a);return b;}
function AIc(a,b){BO(a);a.lt=b;}
function ACV(a,b,c,d){var e,f;a:{e=C(d);if(b!=e.h){if(!b)break a;if(e.cF&&b==e.be)break a;d=a.lt;f=b-1|0;c=C(c);if(C(d).l$(O(c,f),O(c,b)))break a;}return (-1);}return C(a.b).a(b,c,e);}
function AEF(a,b){return 0;}
var Zn=G(BI);
function ANp(){var a=new Zn();AHf(a);return a;}
function AHf(a){BO(a);}
function AKQ(a,b,c,d){var e,f,g;d=C(d);e=d.h;f=b+1|0;if(f>e){d.br=1;return (-1);}c=C(c);g=O(c,b);if(Ch(g)){b=b+2|0;if(b<=e&&Gu(g,O(c,f)))return C(a.b).a(b,c,d);}return C(a.b).a(f,c,d);}
function ACo(a,b){a.b=b;}
function AHc(a){return (-2147483602);}
function ACn(a,b){return 1;}
function Ti(){BI.call(this);this.hF=null;}
function AMS(a){var b=new Ti();AC6(b,a);return b;}
function AC6(a,b){BO(a);a.hF=b;}
function AHn(a,b,c,d){var e,f,g,h;d=C(d);e=d.h;f=b+1|0;if(f>e){d.br=1;return (-1);}c=C(c);g=O(c,b);if(Ch(g)){b=b+2|0;if(b<=e){h=O(c,f);if(Gu(g,h))return C(a.hF).eh(DE(g,h))?(-1):C(a.b).a(b,c,d);}}return C(a.hF).eh(g)?(-1):C(a.b).a(f,c,d);}
function AIM(a,b){a.b=b;}
function AAB(a){return (-2147483602);}
function AK1(a,b){return 1;}
function Zc(){Bj.call(this);this.d5=0;}
function AMs(a){var b=new Zc();AEA(b,a);return b;}
function AEA(a,b){BO(a);a.d5=b;}
function AFS(a,b,c,d){var e,f;d=C(d);if(!d.cF){c=C(c);e=X(c);}else e=d.h;if(b>=e){BD(d,a.d5,0);return C(a.b).a(b,c,d);}if((e-b|0)==1){f=C(c);if(O(f,b)==10){BD(d,a.d5,1);return C(a.b).a(b+1|0,f,d);}}return (-1);}
function AEy(a,b){var c;c=a.d5;b=C(b);c=!CY(b,c)?0:1;BD(b,a.d5,(-1));return c;}
function WK(){Bj.call(this);this.d$=0;}
function AMa(a){var b=new WK();AE0(b,a);return b;}
function AE0(a,b){BO(a);a.d$=b;}
function AHu(a,b,c,d){var e;d=C(d);if(!d.cF){c=C(c);e=X(c)-b|0;}else e=d.h-b|0;if(e<=0){BD(d,a.d$,0);return C(a.b).a(b,c,d);}c=C(c);if(O(c,b)!=10)return (-1);BD(d,a.d$,1);return C(a.b).a(b+1|0,c,d);}
function AEr(a,b){var c;c=a.d$;b=C(b);c=!CY(b,c)?0:1;BD(b,a.d$,(-1));return c;}
function R3(){Bj.call(this);this.cP=0;}
function ALt(a){var b=new R3();ALf(b,a);return b;}
function ALf(a,b){BO(a);a.cP=b;}
function AFe(a,b,c,d){var e,f,g,h;d=C(d);if(!d.cF){c=C(c);e=X(c)-b|0;}else e=d.h-b|0;if(!e){BD(d,a.cP,0);return C(a.b).a(b,c,d);}if(e<2){f=C(c);g=O(f,b);h=97;}else{f=C(c);g=O(f,b);h=O(f,b+1|0);}switch(g){case 10:case 133:case 8232:case 8233:BD(d,a.cP,0);return C(a.b).a(b,f,d);case 13:if(h!=10){BD(d,a.cP,0);return C(a.b).a(b,f,d);}BD(d,a.cP,0);return C(a.b).a(b,f,d);default:}return (-1);}
function ADa(a,b){var c;c=a.cP;b=C(b);c=!CY(b,c)?0:1;BD(b,a.cP,(-1));return c;}
function Gf(){var a=this;BI.call(a);a.ju=0;a.ds=0;}
function ANu(a,b){var c=new Gf();Mh(c,a,b);return c;}
function Mh(a,b,c){BO(a);a.ju=b;a.ds=c;}
function ABz(a,b,c,d){var e,f,g,h;e=Fq(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.h){g=0;while(true){if(g>=X(e)){BD(d,a.ds,X(e));return C(a.b).a(b+X(e)|0,c,d);}h=O(e,g);f=b+g|0;c=C(c);if(h!=O(c,f)&&GC(O(e,g))!=O(c,f))break;g=g+1|0;}return (-1);}}return (-1);}
function AIk(a,b){a.b=b;}
function Fq(a,b){var c,d;c=a.ju;b=C(b);d=E2(b,c);c=Ho(b,c);return (c|d|(c-d|0))>=0&&c<=X(C(b.fn))?C(Cl(C(b.fn),d,c)):null;}
function AIz(a,b){var c;c=a.ds;b=C(b);c=!CY(b,c)?0:1;BD(b,a.ds,(-1));return c;}
var Zj=G(Gf);
function ALx(a,b){var c=new Zj();AJ4(c,a,b);return c;}
function AJ4(a,b,c){Mh(a,b,c);}
function ADg(a,b,c,d){var e,f,g;e=Fq(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.h){g=C(c);f=!PJ(g,e,b)?(-1):X(e);if(f<0)return (-1);BD(d,a.ds,f);return C(a.b).a(b+f|0,g,d);}}return (-1);}
function AJT(a,b,c,d){var e,f,g,h;e=Fq(a,d);d=C(d);f=d.be;if(e!==null&&(b+X(e)|0)<=f){g=C(c);h=g;while(true){if(b>f)return (-1);b=T0(h,e,b);if(b<0)return (-1);if(C(a.b).a(b+X(e)|0,g,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ABn(a,b,c,d,e){var f,g,h,i;f=Fq(a,e);if(f===null)return (-1);g=C(d);h=g;a:{while(true){if(c<b)return (-1);c=B$(c,X(h)-X(f)|0);b:{c:while(true){if(c<0){c=(-1);break b;}i=0;while(true){if(i>=X(f))break c;if(O(h,c+i|0)!=O(f,i))break;i=i+1|0;}c=c+(-1)|0;}}if(c<0)break a;if(c<b)break a;if(C(a.b).a(c+X(f)|0,g,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AGI(a,b){return 1;}
var U_=G(Gf);
function AMb(a,b){var c=new U_();AEx(c,a,b);return c;}
function AEx(a,b,c){Mh(a,b,c);}
function AGh(a,b,c,d){var e,f,g,h;e=Fq(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.h){f=0;while(true){if(f>=X(e)){BD(d,a.ds,X(e));return C(a.b).a(b+X(e)|0,c,d);}g=Dj(D5(O(e,f)));h=b+f|0;c=C(c);if(g!=Dj(D5(O(c,h))))break;f=f+1|0;}return (-1);}}return (-1);}
var LJ=G(Fz);
function AEl(a,b,c,d,e){K4(a,b,c,d,e);return a;}
function ACe(a,b,c,d){Ro(a,b,c,d);return a;}
function ACC(a,b){Ib(a,b);}
function AJp(a,b,c){Rv(a,b,c);return a;}
function N7(){var a=this;BK.call(a);a.Z=null;a.gZ=null;a.hV=null;}
function ADw(a,b,c){return !IO(a,c,b)?(-1):a.O;}
function AB4(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.h;while(true){if(b>f)return (-1);g=O(C(a.Z),a.O-1|0);h=c;a:{while(true){i=a.O;if(b>(f-i|0)){b=(-1);break a;}i=(b+i|0)-1|0;h=C(h);i=O(h,i);if(i==g&&IO(a,h,b))break;b=b+OK(C(a.gZ),i)|0;}}if(b<0)return (-1);if(C(a.b).a(b+a.O|0,c,e)>=0)break;b=b+1|0;}return b;}
function AEC(a,b,c,d,e){var f,g,h;while(true){if(c<b)return (-1);f=O(C(a.Z),0);g=C(d);h=(X(g)-c|0)-a.O|0;if(h<=0)c=c+h|0;a:{while(true){if(c<b){c=(-1);break a;}h=O(g,c);if(h==f&&IO(a,g,c))break;c=c-OK(C(a.hV),h)|0;}}if(c<0)return (-1);if(C(a.b).a(c+a.O|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AE4(a,b){var c,d;if(b instanceof CR)return C(Z(b,CR)).bo!=O(C(a.Z),0)?0:1;if(b instanceof CK)return Ku(C(Z(b,CK)),0,Cl(C(a.Z),0,1))<=0?0:1;if(!(b instanceof Ci)){if(!(b instanceof CH))return 1;return X(C(a.Z))>1&&C(Z(b,CH)).c3==DE(O(C(a.Z),0),O(C(a.Z),1))?1:0;}a:{b:{b=Z(b,Ci);c=O(C(a.Z),0);d=C(b);if(!d.f(c)){if(X(C(a.Z))<=1)break b;if(!d.f(DE(O(C(a.Z),0),O(C(a.Z),1))))break b;}c=1;break a;}c=0;}return c;}
function IO(a,b,c){var d,e;d=0;while(d<a.O){e=d+c|0;b=C(b);if(O(b,e)!=O(C(a.Z),d))return 0;d=d+1|0;}return 1;}
function KC(){BK.call(this);this.fr=null;}
function AGn(a,b,c){var d,e,f;d=0;while(true){if(d>=X(C(a.fr)))return X(C(a.fr));e=O(C(a.fr),d);f=b+d|0;c=C(c);if(e!=Dj(D5(O(c,f))))break;d=d+1|0;}return (-1);}
function Lc(){BK.call(this);this.d2=null;}
function AI3(a,b,c){var d,e,f;d=0;while(true){if(d>=X(C(a.d2)))return X(C(a.d2));e=O(C(a.d2),d);f=b+d|0;c=C(c);if(e!=O(c,f)&&GC(O(C(a.d2),d))!=O(c,f))break;d=d+1|0;}return (-1);}
var AAx=G();
var Ge=G();
var AT5=null;var AT6=null;var AT1=null;function AII(){AII=T(Ge);ADN();}
function ADN(){var b,c,d,e,f;AT5=AM$();AT6=AMk();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[AND(0,e)]=E(142);f=ANv();e[AND(1,e)]=f;c[AND(0,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(143);f=ALr();e[AND(1,e)]=f;c[AND(1,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(144);f=AM9();e[AND(1,e)]=f;c[AND(2,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(145);f=ANj();e[AND(1,e)]=f;c[AND(3,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(146);f=AT6;e[AND(1,e)]=f;c[AND(4,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(147);f=AMv();e[AND(1,e)]=f;c[AND(5,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(148);f=AMf();e[AND(1,e)]=f;c[AND(6,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(149);f=ALz();e[AND(1,e)]=f;c[AND(7,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(150);f=ALw();e[AND(1,e)]=f;c[AND(8,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(151);f=ALE();e[AND(1,e)]=f;c[AND(9,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(152);f=ALX();e[AND(1,e)]=f;c[AND(10,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(153);f=ALC();e[AND(1,e)]=f;c[AND(11,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(154);f=AMN();e[AND(1,e)]=f;c[AND(12,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(155);f=ALn();e[AND(1,e)]=f;c[AND(13,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(156);f=ANf();e[AND(1,e)]=f;c[AND(14,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(157);f=ALV();e[AND(1,e)]=f;c[AND(15,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(158);f=AMt();e[AND(1,e)]=f;c[AND(16,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(159);f=ALS();e[AND(1,e)]=f;c[AND(17,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(160);f=AMu();e[AND(1,e)]=f;c[AND(18,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(161);f=ALI();e[AND(1,e)]=f;c[AND(19,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(162);f=ANo();e[AND(1,e)]=f;c[AND(20,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(163);f=ALM();e[AND(1,e)]=f;c[AND(21,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(164);f=AMz();e[AND(1,e)]=f;c[AND(22,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(165);f=AM7();e[AND(1,e)]=f;c[AND(23,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(166);f=AM6();e[AND(1,e)]=f;c[AND(24,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(167);f=ANm();e[AND(1,e)]=f;c[AND(25,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(168);f=ALG();e[AND(1,e)]=f;c[AND(26,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(169);f=AMQ();e[AND(1,e)]=f;c[AND(27,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(170);f=AT5;e[AND(1,e)]=f;c[AND(28,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(171);f=AMD();e[AND(1,e)]=f;c[AND(29,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(172);f=ALA();e[AND(1,e)]=f;c[AND(30,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(173);f=AT5;e[AND(1,e)]=f;c[AND(31,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(174);f=ALm();e[AND(1,e)]=f;c[AND(32,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(175);f=AT6;e[AND(1,e)]=f;c[AND(33,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(176);f=AL7();e[AND(1,e)]=f;c[AND(34,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(177);f=N(0,127);e[AND(1,e)]=f;c[AND(35,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(178);f=N(128,255);e[AND(1,e)]=f;c[AND(36,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(179);f=N(256,383);e[AND(1,e)]=f;c[AND(37,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(180);f=N(384,591);e[AND(1,e)]=f;c[AND(38,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(181);f=N(592,687);e[AND(1,e)]=f;c[AND(39,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(182);f=
N(688,767);e[AND(1,e)]=f;c[AND(40,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(183);f=N(768,879);e[AND(1,e)]=f;c[AND(41,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(184);f=N(880,1023);e[AND(1,e)]=f;c[AND(42,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(185);f=N(1024,1279);e[AND(1,e)]=f;c[AND(43,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(186);f=N(1280,1327);e[AND(1,e)]=f;c[AND(44,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(187);f=N(1328,1423);e[AND(1,e)]=f;c[AND(45,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(188);f=N(1424,1535);e[AND(1,e)]=f;c[AND(46,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(189);f=N(1536,1791);e[AND(1,e)]=f;c[AND(47,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(190);f=N(1792,1871);e[AND(1,e)]=f;c[AND(48,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(191);f=N(1872,1919);e[AND(1,e)]=f;c[AND(49,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(192);f=N(1920,1983);e[AND(1,e)]=f;c[AND(50,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(193);f=N(2304,2431);e[AND(1,e)]=f;c[AND(51,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(194);f=N(2432,2559);e[AND(1,e)]=f;c[AND(52,c)]=d;d=J(D,2);e=d.data;e[AND(0,
e)]=E(195);f=N(2560,2687);e[AND(1,e)]=f;c[AND(53,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(196);f=N(2688,2815);e[AND(1,e)]=f;c[AND(54,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(197);f=N(2816,2943);e[AND(1,e)]=f;c[AND(55,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(198);f=N(2944,3071);e[AND(1,e)]=f;c[AND(56,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(199);f=N(3072,3199);e[AND(1,e)]=f;c[AND(57,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(200);f=N(3200,3327);e[AND(1,e)]=f;c[AND(58,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(201);f=N(3328,3455);e[AND(1,
e)]=f;c[AND(59,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(202);f=N(3456,3583);e[AND(1,e)]=f;c[AND(60,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(203);f=N(3584,3711);e[AND(1,e)]=f;c[AND(61,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(204);f=N(3712,3839);e[AND(1,e)]=f;c[AND(62,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(205);f=N(3840,4095);e[AND(1,e)]=f;c[AND(63,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(206);f=N(4096,4255);e[AND(1,e)]=f;c[AND(64,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(207);f=N(4256,4351);e[AND(1,e)]=f;c[AND(65,c)]=d;d=J(D,
2);e=d.data;e[AND(0,e)]=E(208);f=N(4352,4607);e[AND(1,e)]=f;c[AND(66,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(209);f=N(4608,4991);e[AND(1,e)]=f;c[AND(67,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(210);f=N(4992,5023);e[AND(1,e)]=f;c[AND(68,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(211);f=N(5024,5119);e[AND(1,e)]=f;c[AND(69,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(212);f=N(5120,5759);e[AND(1,e)]=f;c[AND(70,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(213);f=N(5760,5791);e[AND(1,e)]=f;c[AND(71,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(214);f
=N(5792,5887);e[AND(1,e)]=f;c[AND(72,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(215);f=N(5888,5919);e[AND(1,e)]=f;c[AND(73,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(216);f=N(5920,5951);e[AND(1,e)]=f;c[AND(74,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(217);f=N(5952,5983);e[AND(1,e)]=f;c[AND(75,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(218);f=N(5984,6015);e[AND(1,e)]=f;c[AND(76,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(219);f=N(6016,6143);e[AND(1,e)]=f;c[AND(77,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(220);f=N(6144,6319);e[AND(1,e)]=
f;c[AND(78,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(221);f=N(6400,6479);e[AND(1,e)]=f;c[AND(79,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(222);f=N(6480,6527);e[AND(1,e)]=f;c[AND(80,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(223);f=N(6528,6623);e[AND(1,e)]=f;c[AND(81,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(224);f=N(6624,6655);e[AND(1,e)]=f;c[AND(82,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(225);f=N(6656,6687);e[AND(1,e)]=f;c[AND(83,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(226);f=N(7424,7551);e[AND(1,e)]=f;c[AND(84,c)]=d;d=J(D,2);e
=d.data;e[AND(0,e)]=E(227);f=N(7552,7615);e[AND(1,e)]=f;c[AND(85,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(228);f=N(7616,7679);e[AND(1,e)]=f;c[AND(86,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(229);f=N(7680,7935);e[AND(1,e)]=f;c[AND(87,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(230);f=N(7936,8191);e[AND(1,e)]=f;c[AND(88,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(231);f=N(8192,8303);e[AND(1,e)]=f;c[AND(89,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(232);f=N(8304,8351);e[AND(1,e)]=f;c[AND(90,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(233);f
=N(8352,8399);e[AND(1,e)]=f;c[AND(91,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(234);f=N(8400,8447);e[AND(1,e)]=f;c[AND(92,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(235);f=N(8448,8527);e[AND(1,e)]=f;c[AND(93,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(236);f=N(8528,8591);e[AND(1,e)]=f;c[AND(94,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(237);f=N(8592,8703);e[AND(1,e)]=f;c[AND(95,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(238);f=N(8704,8959);e[AND(1,e)]=f;c[AND(96,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(239);f=N(8960,9215);e[AND(1,e)]=
f;c[AND(97,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(240);f=N(9216,9279);e[AND(1,e)]=f;c[AND(98,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(241);f=N(9280,9311);e[AND(1,e)]=f;c[AND(99,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(242);f=N(9312,9471);e[AND(1,e)]=f;c[AND(100,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(243);f=N(9472,9599);e[AND(1,e)]=f;c[AND(101,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(244);f=N(9600,9631);e[AND(1,e)]=f;c[AND(102,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(245);f=N(9632,9727);e[AND(1,e)]=f;c[AND(103,c)]=d;d=J(D,
2);e=d.data;e[AND(0,e)]=E(246);f=N(9728,9983);e[AND(1,e)]=f;c[AND(104,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(247);f=N(9984,10175);e[AND(1,e)]=f;c[AND(105,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(248);f=N(10176,10223);e[AND(1,e)]=f;c[AND(106,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(249);f=N(10224,10239);e[AND(1,e)]=f;c[AND(107,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(250);f=N(10240,10495);e[AND(1,e)]=f;c[AND(108,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(251);f=N(10496,10623);e[AND(1,e)]=f;c[AND(109,c)]=d;d=J(D,2);e=d.data;e[AND(0,
e)]=E(252);f=N(10624,10751);e[AND(1,e)]=f;c[AND(110,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(253);f=N(10752,11007);e[AND(1,e)]=f;c[AND(111,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(254);f=N(11008,11263);e[AND(1,e)]=f;c[AND(112,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(255);f=N(11264,11359);e[AND(1,e)]=f;c[AND(113,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(256);f=N(11392,11519);e[AND(1,e)]=f;c[AND(114,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(257);f=N(11520,11567);e[AND(1,e)]=f;c[AND(115,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(258);f
=N(11568,11647);e[AND(1,e)]=f;c[AND(116,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(259);f=N(11648,11743);e[AND(1,e)]=f;c[AND(117,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(260);f=N(11776,11903);e[AND(1,e)]=f;c[AND(118,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(261);f=N(11904,12031);e[AND(1,e)]=f;c[AND(119,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(262);f=N(12032,12255);e[AND(1,e)]=f;c[AND(120,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(263);f=N(12272,12287);e[AND(1,e)]=f;c[AND(121,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(264);f=N(12288,
12351);e[AND(1,e)]=f;c[AND(122,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(265);f=N(12352,12447);e[AND(1,e)]=f;c[AND(123,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(266);f=N(12448,12543);e[AND(1,e)]=f;c[AND(124,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(267);f=N(12544,12591);e[AND(1,e)]=f;c[AND(125,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(268);f=N(12592,12687);e[AND(1,e)]=f;c[AND(126,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(269);f=N(12688,12703);e[AND(1,e)]=f;c[AND(127,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(270);f=N(12704,12735);e[AND(1,
e)]=f;c[AND(128,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(271);f=N(12736,12783);e[AND(1,e)]=f;c[AND(129,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(272);f=N(12784,12799);e[AND(1,e)]=f;c[AND(130,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(273);f=N(12800,13055);e[AND(1,e)]=f;c[AND(131,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(274);f=N(13056,13311);e[AND(1,e)]=f;c[AND(132,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(275);f=N(13312,19893);e[AND(1,e)]=f;c[AND(133,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(276);f=N(19904,19967);e[AND(1,e)]=f;c[AND(134,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(277);f=N(19968,40959);e[AND(1,e)]=f;c[AND(135,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(278);f=N(40960,42127);e[AND(1,e)]=f;c[AND(136,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(279);f=N(42128,42191);e[AND(1,e)]=f;c[AND(137,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(280);f=N(42752,42783);e[AND(1,e)]=f;c[AND(138,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(281);f=N(43008,43055);e[AND(1,e)]=f;c[AND(139,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(282);f=N(44032,55203);e[AND(1,e)]=f;c[AND(140,c)]=d;d=
J(D,2);e=d.data;e[AND(0,e)]=E(283);f=N(55296,56191);e[AND(1,e)]=f;c[AND(141,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(284);f=N(56192,56319);e[AND(1,e)]=f;c[AND(142,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(285);f=N(56320,57343);e[AND(1,e)]=f;c[AND(143,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(286);f=N(57344,63743);e[AND(1,e)]=f;c[AND(144,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(287);f=N(63744,64255);e[AND(1,e)]=f;c[AND(145,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(288);f=N(64256,64335);e[AND(1,e)]=f;c[AND(146,c)]=d;d=J(D,2);e
=d.data;e[AND(0,e)]=E(289);f=N(64336,65023);e[AND(1,e)]=f;c[AND(147,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(290);f=N(65024,65039);e[AND(1,e)]=f;c[AND(148,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(291);f=N(65040,65055);e[AND(1,e)]=f;c[AND(149,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(292);f=N(65056,65071);e[AND(1,e)]=f;c[AND(150,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(293);f=N(65072,65103);e[AND(1,e)]=f;c[AND(151,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(294);f=N(65104,65135);e[AND(1,e)]=f;c[AND(152,c)]=d;d=J(D,2);e=d.data;e[AND(0,
e)]=E(295);f=N(65136,65279);e[AND(1,e)]=f;c[AND(153,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(296);f=N(65280,65519);e[AND(1,e)]=f;c[AND(154,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(27);f=N(0,1114111);e[AND(1,e)]=f;c[AND(155,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(297);f=ALD();e[AND(1,e)]=f;c[AND(156,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(298);f=BG(0,1);e[AND(1,e)]=f;c[AND(157,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(299);f=HA(62,1);e[AND(1,e)]=f;c[AND(158,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(300);f=BG(1,1);e[AND(1,e)]=
f;c[AND(159,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(301);f=BG(2,1);e[AND(1,e)]=f;c[AND(160,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(302);f=BG(3,0);e[AND(1,e)]=f;c[AND(161,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(303);f=BG(4,0);e[AND(1,e)]=f;c[AND(162,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(304);f=BG(5,1);e[AND(1,e)]=f;c[AND(163,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(305);f=HA(448,1);e[AND(1,e)]=f;c[AND(164,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(306);f=BG(6,1);e[AND(1,e)]=f;c[AND(165,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=
E(307);f=BG(7,0);e[AND(1,e)]=f;c[AND(166,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(308);f=BG(8,1);e[AND(1,e)]=f;c[AND(167,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(309);f=HA(3584,1);e[AND(1,e)]=f;c[AND(168,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(310);f=BG(9,1);e[AND(1,e)]=f;c[AND(169,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(311);f=BG(10,1);e[AND(1,e)]=f;c[AND(170,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(312);f=BG(11,1);e[AND(1,e)]=f;c[AND(171,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(313);f=HA(28672,0);e[AND(1,e)]=f;c[AND(172,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(314);f=BG(12,0);e[AND(1,e)]=f;c[AND(173,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(315);f=BG(13,0);e[AND(1,e)]=f;c[AND(174,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(316);f=BG(14,0);e[AND(1,e)]=f;c[AND(175,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(317);f=AMc(983040,1,1);e[AND(1,e)]=f;c[AND(176,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(318);f=BG(15,0);e[AND(1,e)]=f;c[AND(177,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(319);f=BG(16,1);e[AND(1,e)]=f;c[AND(178,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(320);f
=BG(18,1);e[AND(1,e)]=f;c[AND(179,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(321);f=AMr(19,0,1);e[AND(1,e)]=f;c[AND(180,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(322);f=HA(1643118592,1);e[AND(1,e)]=f;c[AND(181,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(323);f=BG(20,0);e[AND(1,e)]=f;c[AND(182,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(324);f=BG(21,0);e[AND(1,e)]=f;c[AND(183,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(325);f=BG(22,0);e[AND(1,e)]=f;c[AND(184,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(326);f=BG(23,0);e[AND(1,e)]=f;c[AND(185,
c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(327);f=BG(24,1);e[AND(1,e)]=f;c[AND(186,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(328);f=HA(2113929216,1);e[AND(1,e)]=f;c[AND(187,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(329);f=BG(25,1);e[AND(1,e)]=f;c[AND(188,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(330);f=BG(26,0);e[AND(1,e)]=f;c[AND(189,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(331);f=BG(27,0);e[AND(1,e)]=f;c[AND(190,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(332);f=BG(28,1);e[AND(1,e)]=f;c[AND(191,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=
E(333);f=BG(29,0);e[AND(1,e)]=f;c[AND(192,c)]=d;d=J(D,2);e=d.data;e[AND(0,e)]=E(334);f=BG(30,0);e[AND(1,e)]=f;c[AND(193,c)]=d;AT1=b;}
function Kx(){BK.call(this);this.k$=0;}
function AI7(a,b,c){var d,e;d=b+1|0;c=C(c);e=O(c,b);d=O(c,d);return a.k$!=EU(FM(DE(e,d)))?(-1):2;}
function G7(){BI.call(this);this.dh=0;}
function AHe(a){var b=new G7();ACx(b,a);return b;}
function ACx(a,b){BO(a);a.dh=b;}
function AHG(a,b){a.b=b;}
function AC9(a,b,c,d){var e,f;e=b+1|0;d=C(d);if(e>d.h){d.br=1;return (-1);}c=C(c);f=O(c,b);if(b>d.be&&Ch(O(c,b-1|0)))return (-1);if(a.dh!=f)return (-1);return C(a.b).a(e,c,d);}
function AE2(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BA))return GG(a,b,c,d);e=C(d);f=e.be;g=e.h;h=c;while(true){if(b>=g)return (-1);i=a.dh;h=C(h);i=FU(h,i,b);if(i<0)return (-1);if(i>f&&Ch(O(h,i-1|0))){b=i+1|0;continue;}d=a.b;b=i+1|0;if(C(d).a(b,c,e)>=0)break;}return i;}
function ADE(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BA))return GS(a,b,c,d,e);f=C(e);g=f.be;h=d;a:{while(true){if(c<b)return (-1);i=a.dh;h=C(h);c=Fh(h,i,c);if(c<0)break a;if(c<b)break a;if(c>g&&Ch(O(h,c-1|0))){c=c+(-2)|0;continue;}if(C(a.b).a(c+1|0,d,f)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ABi(a,b){if(b instanceof CR)return 0;if(b instanceof CK)return 0;if(b instanceof Ci)return 0;if(b instanceof CH)return 0;if(b instanceof He)return 0;if(!(b instanceof G7))return 1;return C(Z(b,G7)).dh!=a.dh?0:1;}
function AJA(a,b){return 1;}
function He(){BI.call(this);this.c7=0;}
function AFg(a){var b=new He();AHp(b,a);return b;}
function AHp(a,b){BO(a);a.c7=b;}
function ACA(a,b){a.b=b;}
function AAX(a,b,c,d){var e,f,g,h,i;d=C(d);e=d.h;f=b+1|0;g=CP(f,e);if(g>0){d.br=1;return (-1);}h=C(c);i=O(h,b);if(g<0&&Cy(O(h,f)))return (-1);if(a.c7!=i)return (-1);return C(a.b).a(f,h,d);}
function AHZ(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return GG(a,b,c,d);e=C(d);f=e.h;g=c;while(true){if(b>=f)return (-1);h=a.c7;g=C(g);h=FU(g,h,b);if(h<0)return (-1);b=h+1|0;if(b<f&&Cy(O(g,b))){b=h+2|0;continue;}if(C(a.b).a(b,c,e)>=0)break;}return h;}
function AI2(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BA))return GS(a,b,c,d,e);f=C(e);g=f.h;h=d;a:{while(true){if(c<b)return (-1);i=a.c7;h=C(h);c=Fh(h,i,c);if(c<0)break a;if(c<b)break a;i=c+1|0;if(i<g&&Cy(O(h,i))){c=c+(-1)|0;continue;}if(C(a.b).a(i,d,f)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ADx(a,b){if(b instanceof CR)return 0;if(b instanceof CK)return 0;if(b instanceof Ci)return 0;if(b instanceof CH)return 0;if(b instanceof G7)return 0;if(!(b instanceof He))return 1;return C(Z(b,He)).c7!=a.c7?0:1;}
function AH4(a,b){return 1;}
function CH(){var a=this;BK.call(a);a.f4=0;a.e4=0;a.c3=0;}
function AIA(a,b,c){var d,e;d=b+1|0;c=C(c);e=O(c,b);d=O(c,d);return a.f4==e&&a.e4==d?2:(-1);}
function AG1(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return GG(a,b,c,d);e=C(d);f=e.h;g=c;while(b<f){h=a.f4;g=C(g);b=FU(g,h,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;h=O(g,b);if(a.e4==h&&C(a.b).a(b+1|0,c,e)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ACy(a,b,c,d,e){var f,g;if(!(d instanceof BA))return GS(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=a.e4;f=C(f);c=Fh(f,g,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.f4==O(f,c)&&C(a.b).a(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AIq(a,b){if(b instanceof CH)return C(Z(b,CH)).c3!=a.c3?0:1;if(b instanceof Ci)return C(Z(b,Ci)).f(a.c3);if(b instanceof CR)return 0;if(!(b instanceof CK))return 1;return 0;}
var Qf=G(Ej);
function ACL(a,b){return b!=10?0:1;}
function AIv(a,b,c){return b!=10?0:1;}
var Qg=G(Ej);
function AJa(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AKu(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function XT(){var a=this;D.call(a);a.i2=null;a.gk=null;a.dL=0;a.m$=0;}
function AHa(a){var b=new XT();AFs(b,a);return b;}
function AFs(a,b){var c,d;while(true){c=a.dL;if(b<c)break;a.dL=c<<1|1;}d=c<<1|1;a.dL=d;d=d+1|0;a.i2=Bl(d);a.gk=Bl(d);a.m$=b;}
function NO(a,b,c){var d,e,f,g;d=0;e=a.dL;f=b&e;a:{while(true){g=C(a.i2).data;f=B(f,g);if(!g[f])break;f=AND(f,g);if(g[f]==b)break a;d=(d+1|0)&e;f=(f+d|0)&e;}}f=AND(f,g);g[f]=b;g=C(a.gk).data;g[AND(f,g)]=c;}
function OK(a,b){var c,d,e,f,g,h;c=a.dL;d=b&c;e=0;while(true){f=C(a.i2).data;g=B(d,f);h=f[g];if(!h)break;if(h==b){f=C(a.gk).data;return f[AND(g,f)];}e=(e+1|0)&c;d=(g+e|0)&c;}return a.m$;}
var TJ=G();
var Tb=G();
function U3(b){var c,d,e,f,g,h,i,j;c=AIS(IZ(C(b)));d=Ij(c);e=Bl(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+Ij(c)|0;i=B(g*2|0,h);h[i]=f;j=i+1|0;i=K8(c);h[B(j,h)]=i;g=g+1|0;}return e;}
function R6(b){var c,d,e,f,g,h,i,j,k,l,m;c=Bl(65536);d=0;e=0;f=0;a:{while(true){b=C(b);g=b.data;if(f>=g.length)break;h=c.data;i=B(f,g);j=g[i];k=g[B(i+1|0,g)];l=h.length;if(j<l)l=j;else if(j==d)break a;Uh(c,d,l,e);f=i+2|0;d=l;e=k;}}m=new Qt;m.lr=b;m.lH=c;return m;}
function I0(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ALh(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=J(HX,16384);d=Fn(16384);e=0;f=0;g=0;h=0;while(true){b=C(b);if(h>=X(b))break;i=I0(O(b,h));if(i==64){h=h+1|0;i=I0(O(b,h));j=0;k=1;l=0;while(l<3){h=h+1|0;j=j|DS(k,I0(O(b,h)));k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=I0(O(b,h));}if(!i&&j>=128){if(e>0){k=f+1|0;m=AEm(g,g+e|0,ZA(d,e));c=C(c);n=c.data;n[B(f,n)]=m;f=k;}g=g+(e+j|0)|0;e=0;}else{k=e+j|0;d=C(d);n=d.data;if(k<n.length)l=f;else{l=f+1|0;m=AEm(g,g+e|0,ZA(d,e));c=C(c);o=c.data;o[B(f,
o)]=m;g=g+k|0;e=0;}while(true){p=j+(-1)|0;if(j<=0)break;j=e+1|0;n[B(e,n)]=i;e=j;j=p;}f=l;}h=h+1|0;}return Dc(IS(c,f),$rt_arraycls(HX));}
var St=G();
function Ya(){var a=this;D.call(a);a.j0=null;a.k6=0;}
function AIS(a){var b=new Ya();ADA(b,a);return b;}
function ADA(a,b){a.j0=b;}
var UZ=G();
function Ij(b){var c,d,e,f,g;c=0;d=1;while(true){b=C(b);e=b.j0;f=b.k6;b.k6=f+1|0;e=C(e).data;g=e[B(f,e)];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+DS(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function K8(b){var c,d;c=Ij(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Jg=G(Bb);
function AM$(){var a=new Jg();AFc(a);return a;}
function AFc(a){}
function Vi(a){return Cc(C(BQ(CZ(),9,13)),32);}
var Iw=G(Bb);
function AMk(){var a=new Iw();AJv(a);return a;}
function AJv(a){}
function Wt(a){return BQ(CZ(),48,57);}
var XR=G(Bb);
function ANv(){var a=new XR();AEM(a);return a;}
function AEM(a){}
function AIO(a){return BQ(CZ(),97,122);}
var Yt=G(Bb);
function ALr(){var a=new Yt();AFw(a);return a;}
function AFw(a){}
function AJC(a){return BQ(CZ(),65,90);}
var Yw=G(Bb);
function AM9(){var a=new Yw();AB5(a);return a;}
function AB5(a){}
function AD2(a){return BQ(CZ(),0,127);}
var Jb=G(Bb);
function ANj(){var a=new Jb();ADi(a);return a;}
function ADi(a){}
function Tn(a){return BQ(C(BQ(CZ(),97,122)),65,90);}
var JB=G(Jb);
function AMv(){var a=new JB();AFj(a);return a;}
function AFj(a){}
function Uw(a){return BQ(C(Tn(a)),48,57);}
var AAq=G(Bb);
function AMf(){var a=new AAq();AGO(a);return a;}
function AGO(a){}
function AE1(a){return BQ(C(BQ(C(BQ(CZ(),33,64)),91,96)),123,126);}
var Kr=G(JB);
function ALz(){var a=new Kr();AIf(a);return a;}
function AIf(a){}
function RZ(a){return BQ(C(BQ(C(BQ(C(Uw(a)),33,64)),91,96)),123,126);}
var VH=G(Kr);
function ALw(){var a=new VH();AJk(a);return a;}
function AJk(a){}
function AGG(a){return Cc(C(RZ(a)),32);}
var We=G(Bb);
function ALE(){var a=new We();AI4(a);return a;}
function AI4(a){}
function ADt(a){return Cc(C(Cc(CZ(),32)),9);}
var TS=G(Bb);
function ALX(){var a=new TS();AKn(a);return a;}
function AKn(a){}
function AGD(a){return Cc(C(BQ(CZ(),0,31)),127);}
var Ty=G(Bb);
function ALC(){var a=new Ty();ACk(a);return a;}
function ACk(a){}
function AKz(a){return BQ(C(BQ(C(BQ(CZ(),48,57)),97,102)),65,70);}
var YA=G(Bb);
function AMN(){var a=new YA();ABS(a);return a;}
function ABS(a){}
function AG$(a){var b;b=new OT;b.qM=a;Bk(b);b.t=1;return b;}
var AAz=G(Bb);
function ALn(){var a=new AAz();AIt(a);return a;}
function AIt(a){}
function AAP(a){var b;b=new KI;b.q9=a;Bk(b);b.t=1;return b;}
var XU=G(Bb);
function ANf(){var a=new XU();AB8(a);return a;}
function AB8(a){}
function AFh(a){var b;b=new Ol;b.pP=a;Bk(b);return b;}
var XI=G(Bb);
function ALV(){var a=new XI();AGE(a);return a;}
function AGE(a){}
function AID(a){var b;b=new Ok;b.pi=a;Bk(b);return b;}
var Y4=G(Bb);
function AMt(){var a=new Y4();ADf(a);return a;}
function ADf(a){}
function ADq(a){var b;b=new Q5;b.s$=a;Bk(b);GV(C(b.r),0,2048);b.t=1;return b;}
var SO=G(Bb);
function ALS(){var a=new SO();ACH(a);return a;}
function ACH(a){}
function ADI(a){var b;b=new Mk;b.rH=a;Bk(b);b.t=1;return b;}
var Sh=G(Bb);
function AMu(){var a=new Sh();AGk(a);return a;}
function AGk(a){}
function AKr(a){var b;b=new LF;b.tW=a;Bk(b);b.t=1;return b;}
var X6=G(Bb);
function ALI(){var a=new X6();AGP(a);return a;}
function AGP(a){}
function AAJ(a){var b;b=new Nx;b.qO=a;Bk(b);return b;}
var Yk=G(Bb);
function ANo(){var a=new Yk();AE7(a);return a;}
function AE7(a){}
function AFU(a){var b;b=new KE;b.no=a;Bk(b);b.t=1;return b;}
var Uk=G(Bb);
function ALM(){var a=new Uk();ABp(a);return a;}
function ABp(a){}
function ADP(a){var b;b=new KH;b.rR=a;Bk(b);b.t=1;return b;}
var Wi=G(Bb);
function AMz(){var a=new Wi();ACR(a);return a;}
function ACR(a){}
function AEG(a){var b;b=new Ly;b.s7=a;Bk(b);b.t=1;return b;}
var ZY=G(Bb);
function AM7(){var a=new ZY();AF3(a);return a;}
function AF3(a){}
function AFX(a){var b;b=new MF;b.tv=a;Bk(b);b.t=1;return b;}
var Yi=G(Bb);
function AM6(){var a=new Yi();AG4(a);return a;}
function AG4(a){}
function AJP(a){var b;b=new MK;b.p8=a;Bk(b);return b;}
var U5=G(Bb);
function ANm(){var a=new U5();ACI(a);return a;}
function ACI(a){}
function AH$(a){var b;b=new Pg;b.r9=a;Bk(b);return b;}
var Uj=G(Bb);
function ALG(){var a=new Uj();AIE(a);return a;}
function AIE(a){}
function AG3(a){var b;b=new OE;b.nw=a;Bk(b);b.t=1;return b;}
var AAv=G(Bb);
function AMQ(){var a=new AAv();AE6(a);return a;}
function AE6(a){}
function AIK(a){var b;b=new KQ;b.um=a;Bk(b);b.t=1;return b;}
var HY=G(Bb);
function AMD(){var a=new HY();ADV(a);return a;}
function ADV(a){}
function Wg(a){return Cc(C(BQ(C(BQ(C(BQ(CZ(),97,122)),65,90)),48,57)),95);}
var Y_=G(HY);
function ALA(){var a=new Y_();AE8(a);return a;}
function AE8(a){}
function AGR(a){var b;b=C(D2(C(Wg(a)),1));b.t=1;return b;}
var VS=G(Jg);
function ALm(){var a=new VS();AJ_(a);return a;}
function AJ_(a){}
function AB2(a){var b;b=C(D2(C(Vi(a)),1));b.t=1;return b;}
var Ue=G(Iw);
function AL7(){var a=new Ue();AFK(a);return a;}
function AFK(a){}
function AET(a){var b;b=C(D2(C(Wt(a)),1));b.t=1;return b;}
function TF(){var a=this;Bb.call(a);a.k3=0;a.lp=0;}
function N(a,b){var c=new TF();AKp(c,a,b);return c;}
function AKp(a,b,c){a.k3=b;a.lp=c;}
function AGc(a){return BQ(CZ(),a.k3,a.lp);}
var T_=G(Bb);
function ALD(){var a=new T_();AKG(a);return a;}
function AKG(a){}
function AKj(a){return BQ(C(BQ(CZ(),65279,65279)),65520,65533);}
function Vt(){var a=this;Bb.call(a);a.iz=0;a.f8=0;a.kd=0;}
function BG(a,b){var c=new Vt();AC_(c,a,b);return c;}
function AMr(a,b,c){var d=new Vt();AKq(d,a,b,c);return d;}
function AC_(a,b,c){a.f8=c;a.iz=b;}
function AKq(a,b,c,d){a.kd=d;a.f8=c;a.iz=b;}
function AEo(a){var b;b=ANs(a.iz);if(a.kd)GV(C(b.r),0,2048);b.t=a.f8;return b;}
function VI(){var a=this;Bb.call(a);a.iy=0;a.gm=0;a.jy=0;}
function HA(a,b){var c=new VI();ADQ(c,a,b);return c;}
function AMc(a,b,c){var d=new VI();AAL(d,a,b,c);return d;}
function ADQ(a,b,c){a.gm=c;a.iy=b;}
function AAL(a,b,c,d){a.jy=d;a.gm=c;a.iy=b;}
function AAK(a){var b;b=new Of;Xi(b,a.iy);if(a.jy)GV(C(b.r),0,2048);b.t=a.gm;return b;}
function Qt(){var a=this;D.call(a);a.lr=null;a.lH=null;}
function HX(){var a=this;D.call(a);a.kx=0;a.lC=0;a.kD=null;}
function AEm(a,b,c){var d=new HX();AJj(d,a,b,c);return d;}
function AJj(a,b,c,d){a.kx=b;a.lC=c;a.kD=d;}
function Nc(){var a=this;CB.call(a);a.j1=null;a.jZ=0;a.c1=null;}
function AJn(a,b){}
function ADR(a,b){var c,d;b=D9();c=a.j1;d=new Q;S(d);M(C(M(d,E(335))),c);c=R(d);Dp(C(b),c);}
function SC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=C(I7(C(c),E(68))).data;e=d.length;f=0;while(true){if(f>=e){a:{c=C(a.c1);c.hx=C(c.e2).H;if(a.jZ){e=0;while(true){b=C(C(a.c1).e2);if(e>=b.H)break a;g=Z(J3(b,e),Jh);c=C(a.c1);h=C(g);g=h.he;if(!Gj(C(c.il),g)&&!Gj(C(c.hB),g)&&!Gj(C(c.it),g)&&!Gj(C(c.h0),g)&&!Gj(C(c.h7),g)?0:1){h.kK=h.mO;h.id=1;h.g9=0;h.d8=0;}else if(!h.d8)b:{h.g9=0;h.id=0;h.d8=1;i=h.he;j=h.kk;k=h.j7;l=new Nd;l.tX=c;l.eV=h;b=AS7;g=IK(c);h=new Q;S(h);M(C(M(h,g)),i);g=R(h);h=new Na;h.lT=c;h.fV=l;h.mz
=j;h.k4=i;l=C(b);AM8();d=AT7;b=C(j);f=b.v;d=C(d).data;switch(d[B(f,d)]){case 1:break;case 2:b=null;c=new K1;c.eL=l;c.dC=h;c.kA=b;c.m3=k;Fo(l,1,g,c);break b;case 3:Fo(l,1,g,h);break b;case 4:UV(l,1,g,h);break b;case 5:Ji(h,g,null);break b;default:c=new CM;g=new Q;S(g);M(C(M(g,E(336))),b);Ub(c,R(g));K(c);}Gw(l,1,g,h);}e=e+1|0;}}}return 0;}f=DZ(f);m=C(I7(C(d[f]),E(66))).data;if(m.length!=4)break;k=m[AND(0,m)];b=C(m[AND(1,m)]);n=0;o=X(b)-1|0;c:{while(n<=o){if(O(b,n)>32)break c;n=n+1|0;}}while(n<=o&&O(b,o)<=32){o
=o+(-1)|0;}j=Cl(b,n,o+1|0);b=m[AND(2,m)];if(b===null){b=new B6;Y(b,E(51));K(b);}p=Y$(b,0,X(b),10);l=m[AND(3,m)];D7();i=ATM;k=C(k);if(Bh(k,E(337)))i=ATJ;if(Bh(k,E(338)))i=ATL;if(Bh(k,E(339)))i=ATK;if(Bh(k,E(175)))i=AT8;if(i===ATK&&!C(AS7).mt)p=Cb;g=new Jh;g.he=j;g.kk=i;g.mO=p;g.j7=l;DC(C(C(a.c1).kC),j,j);Di(C(C(a.c1).e2),g);f=f+1|0;}b=new CM;Y(b,E(340));K(b);}
function AGX(a,b,c){return SC(a,b,c);}
var Bw=G(Bz);
var ATA=null;var AT9=null;var AT$=null;var AT_=null;var AUa=null;var AUb=null;var AUc=null;var AUd=null;var AUe=null;var AUf=null;function ACN(){ACN=T(Bw);ABs();}
function Dd(a,b,c){ACN();Cq(a,b,c);}
function ABs(){var b,c,d,e;b=new QE;Dd(b,E(341),0);ATA=b;b=new QF;Dd(b,E(342),1);AT9=b;b=new QI;Dd(b,E(343),2);AT$=b;b=new QJ;Dd(b,E(344),3);AT_=b;b=new QG;Dd(b,E(345),4);AUa=b;b=new QH;Dd(b,E(346),5);AUb=b;b=new QA;Dd(b,E(347),6);AUc=b;b=new QB;Dd(b,E(348),7);AUd=b;b=new Qz;Dd(b,E(349),8);AUe=b;c=J(Bw,9);d=c.data;e=ATA;d[AND(0,d)]=e;e=AT9;d[AND(1,d)]=e;e=AT$;d[AND(2,d)]=e;e=AT_;d[AND(3,d)]=e;e=AUa;d[AND(4,d)]=e;e=AUb;d[AND(5,d)]=e;e=AUc;d[AND(6,d)]=e;e=AUd;d[AND(7,d)]=e;d[AND(8,d)]=b;AUf=c;}
var AAd=G(0);
function ACj(b){var c;c=C(b);return !Bh(c,E(350))&&!Bh(c,E(351))&&!Bh(c,E(352))&&!Bh(c,E(353))&&!Bh(c,E(354))?0:1;}
function AE_(b){var c,d;a:{b:{c=C(b);if(Bh(c,E(355)))break b;if(Bh(c,E(356)))break b;if(Bh(c,E(357)))break b;if(Bh(c,E(358)))break b;if(Bh(c,E(359)))break b;if(Bh(c,E(360)))break b;if(Bh(c,E(361)))break b;if(Bh(c,E(362)))break b;if(!Bh(c,E(363))){d=0;break a;}}d=1;}return d;}
function AF1(b){var c;c=C(b);return !Bh(c,E(364))&&!Bh(c,E(365))&&!Bh(c,E(366))?0:1;}
var PU=G(0);
var T8=G();
function AKm(a,b,c){a.uL($rt_str(b),Cz(c,"handleEvent"));}
function AHg(a,b){return !!a.w_(b);}
function ACB(a,b,c){a.r3($rt_str(b),Cz(c,"handleEvent"));}
function AFG(a,b,c,d){a.uR($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
function AJd(a,b,c,d){a.w7($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
function Pq(){var a=this;D.call(a);a.g4=null;a.i9=null;a.eX=null;a.jf=0;a.fF=null;}
function AGu(a,b){var c,d,e;c=b.target;d=null;e=a.g4;D7();if(e!==ATL&&e!==ATK){if(e===ATJ){b=$rt_globals.window.document.createElement("img");d=$rt_ustr($rt_str(c.result));b.src=d;e=c.result;d=UU(e,new $rt_globals.Int8Array(e));d.mb=b;}else if(e===ATM)d=$rt_str(c.result);}else{b=c.result;d=UU(b,new $rt_globals.Int8Array(b));}if(d!==null){KT(C(C(a.fF).ka),a.g4,a.i9,d);Di(C(a.eX),a.i9);if(C(a.eX).H==a.jf){b=C(a.fF).jM;d=new KU;d.hM=a;Di(C(C(b).ek),d);}}}
function DL(){Bz.call(this);this.sa=null;}
var ATJ=null;var ATK=null;var ATM=null;var ATL=null;var AT8=null;var AUg=null;function D7(){D7=T(DL);AHv();}
function IB(a,b,c){var d=new DL();Va(d,a,b,c);return d;}
function Mg(){D7();return C(AUg).cn();}
function Va(a,b,c,d){D7();Cq(a,b,c);a.sa=d;}
function AHv(){var b,c,d,e;ATJ=IB(E(367),0,E(337));ATK=IB(E(368),1,E(339));ATM=IB(E(369),2,E(370));ATL=IB(E(371),3,E(338));b=IB(E(372),4,E(175));AT8=b;c=J(DL,5);d=c.data;e=ATJ;d[AND(0,d)]=e;e=ATK;d[AND(1,d)]=e;e=ATM;d[AND(2,d)]=e;e=ATL;d[AND(3,d)]=e;d[AND(4,d)]=b;AUg=c;}
function QQ(){var a=this;W.call(a);a.jP=null;a.td=null;}
function AD8(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.S^C5(C(a.jP),c):0;}
function QO(){var a=this;W.call(a);a.mw=null;a.mP=null;a.so=null;}
function AA8(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.S^C5(C(a.mw),c):0;return C(a.mP).f(b)&&!d?1:0;}
function LV(){var a=this;W.call(a);a.e8=null;a.nF=null;}
function AF4(a,b){return a.B^C5(C(a.e8),b);}
function AEI(a){var b,c,d,e;b=new Q;S(b);c=Gp(C(a.e8),0);while(c>=0){Hh(b,FG(c));Bs(b,124);d=a.e8;c=c+1|0;c=Gp(C(d),c);}e=b.w;if(e>0)QL(b,e-1|0);return R(b);}
function L3(){var a=this;W.call(a);a.ld=null;a.q4=null;}
function AIC(a,b){return C(a.ld).f(b);}
function L1(){var a=this;W.call(a);a.f_=0;a.j8=null;a.hc=null;}
function AI6(a,b){return !(a.f_^C5(C(C(a.hc).o),b))&&!(a.f_^C(a.hc).bE^C(a.j8).f(b))?0:1;}
function L2(){var a=this;W.call(a);a.gl=0;a.mE=null;a.h_=null;}
function AGm(a,b){return !(a.gl^C5(C(C(a.h_).o),b))&&!(a.gl^C(a.h_).bE^C(a.mE).f(b))?1:0;}
function L7(){var a=this;W.call(a);a.m1=0;a.mI=null;a.mC=null;a.oz=null;}
function ADL(a,b){return a.m1^(!C(a.mI).f(b)&&!C(a.mC).f(b)?0:1);}
function L8(){var a=this;W.call(a);a.ll=0;a.la=null;a.kQ=null;a.t7=null;}
function AAC(a,b){return a.ll^(!C(a.la).f(b)&&!C(a.kQ).f(b)?0:1)?0:1;}
function L5(){var a=this;W.call(a);a.kJ=null;a.uf=null;}
function AEN(a,b){return CI(C(a.kJ),b);}
function L6(){var a=this;W.call(a);a.mN=null;a.o6=null;}
function AGo(a,b){return CI(C(a.mN),b)?0:1;}
function L9(){var a=this;W.call(a);a.lA=null;a.lc=0;a.ml=null;}
function AJW(a,b){return !CI(C(a.lA),b)&&!(a.lc^C5(C(C(a.ml).o),b))?0:1;}
function L$(){var a=this;W.call(a);a.lU=null;a.l0=0;a.lL=null;}
function ADl(a,b){return !CI(C(a.lU),b)&&!(a.l0^C5(C(C(a.lL).o),b))?1:0;}
function LU(){var a=this;W.call(a);a.mh=0;a.mD=null;a.mT=null;a.nS=null;}
function ALk(a,b){return !(a.mh^C(a.mD).f(b))&&!CI(C(a.mT),b)?0:1;}
function Ms(){var a=this;W.call(a);a.mS=0;a.jp=null;a.jz=null;a.oU=null;}
function AER(a,b){return !(a.mS^C(a.jp).f(b))&&!CI(C(a.jz),b)?1:0;}
function LS(){var a=this;W.call(a);a.kq=null;a.ph=null;}
function ADj(a,b){return CI(C(a.kq),b);}
function LT(){var a=this;W.call(a);a.kv=null;a.tY=null;}
function AEw(a,b){return CI(C(a.kv),b)?0:1;}
function LY(){var a=this;W.call(a);a.mZ=null;a.lQ=0;a.nh=null;}
function AFv(a,b){return CI(C(a.mZ),b)&&a.lQ^C5(C(C(a.nh).o),b)?1:0;}
function LR(){var a=this;W.call(a);a.mc=null;a.ln=0;a.lP=null;}
function AJH(a,b){return CI(C(a.mc),b)&&a.ln^C5(C(C(a.lP).o),b)?0:1;}
function LW(){var a=this;W.call(a);a.mm=0;a.jO=null;a.lj=null;a.ou=null;}
function ACg(a,b){return a.mm^C(a.jO).f(b)&&CI(C(a.lj),b)?1:0;}
function LX(){var a=this;W.call(a);a.l6=0;a.jk=null;a.mg=null;a.pm=null;}
function AH2(a,b){return a.l6^C(a.jk).f(b)&&CI(C(a.mg),b)?0:1;}
function Mv(){var a=this;D.call(a);a.b4=null;a.h$=null;a.V=null;a.bc=0;}
function C0(){var a=this;D.call(a);a.t9=null;a.tT=Cb;a.qV=Cb;a.eW=null;a.kl=null;a.pp=null;a.eN=0;a.ub=null;}
var AUh=null;var AUi=null;var AUj=0;var AUk=0;var AUl=null;function Ev(){Ev=T(C0);ABY();}
function AUm(){var a=new C0();Kh(a);return a;}
function AUn(a,b){var c=new C0();JI(c,a,b);return c;}
function Kh(a){Ev();JI(a,null,null);}
function JI(a,b,c){var d;Ev();a.eW=new D;a.eN=1;a.pp=c;a.ub=b;d=AUj;AUj=d+1|0;a.tT=Ba(d);}
function KX(a){var b;b=new Ql;b.kz=a;AIb(b);}
function DX(b){var c;Ev();if(AUi!==b)AUi=b;b=AUi;c=Qp();C(b).qV=c;}
function C3(){Ev();return AUi;}
function TY(b){var $p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Ev();$p=1;case 1:Zq(b);if(GN()){break _;}return;default:AA3();}}Qo().s(b,$p);}
function ADJ(b,c){var d,e;Ev();d=C3();e=new LG;e.nj=d;e.mB=c;e.tf=YG(e,ALQ(b,Ba(2147483647))?2147483647:EI(b));C(d).kl=e;}
function U4(a){var b;b=a.t9;if(b!==null)return b;Ev();return AUl;}
function ABY(){var b;b=new C0;Ev();JI(b,null,E(373));AUh=b;AUi=b;AUj=1;AUk=1;AUl=new On;}
function Zq(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.rr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.rX=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AMq(callback);thread.suspend(function(){try{ADJ(b,callback);}catch($e){callback.rX($rt_exception($e));}});return null;}
var De=G(Bq);
var GQ=G(Bq);
function Qc(){var a=this;D.call(a);a.bC=null;a.fZ=null;a.hz=null;a.fn=null;a.j_=0;a.fl=0;a.be=0;a.h=0;a.bQ=0;a.fq=0;a.cF=0;a.br=0;a.sU=0;a.eo=0;a.fK=0;}
function BD(a,b,c){var d;d=C(a.fZ).data;d[B(b,d)]=c;}
function CY(a,b){var c;c=C(a.fZ).data;return c[B(b,c)];}
function HK(a){return I4(a,0);}
function I4(a,b){var c;Oe(a,b);c=a.bC;b=(b*2|0)+1|0;c=C(c).data;return c[B(b,c)];}
function C9(a,b,c){var d;d=a.bC;b=b*2|0;d=C(d).data;d[B(b,d)]=c;}
function Ic(a,b,c){var d;d=a.bC;b=(b*2|0)+1|0;d=C(d).data;d[B(b,d)]=c;}
function E2(a,b){var c;c=a.bC;b=b*2|0;c=C(c).data;return c[B(b,c)];}
function Ho(a,b){var c;c=a.bC;b=(b*2|0)+1|0;c=C(c).data;return c[B(b,c)];}
function GD(a,b){var c;Oe(a,b);c=a.bC;b=b*2|0;c=C(c).data;return c[B(b,c)];}
function KN(a,b){var c;c=C(a.hz).data;return c[B(b,c)];}
function DJ(a,b,c){var d;d=C(a.hz).data;d[B(b,d)]=c;}
function Oe(a,b){var c;if(!a.fl){c=new De;Be(c);K(c);}if(b>=0&&b<a.j_)return;c=new Bp;Y(c,Jp(b));K(c);}
function RA(a,b,c,d){a.fl=0;a.fK=2;If(a.bC,(-1));If(a.fZ,(-1));if(b!==null)a.fn=b;if(c>=0){a.be=c;a.h=d;}a.bQ=a.be;}
var Yd=G();
function V_(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function JN(b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
var UA=G();
function D8(){return ANU($rt_globals.performance.now()*1000000.0);}
var Si=G();
function Hr(b){return b.length?0:1;}
function Xr(b){b=b.shift();GY();if(b!==null&&!(b instanceof $rt_objcls()))b=Ef(b);return b;}
var D$=G(0);
function RD(){D.call(this);this.kT=null;}
function AJY(a){var b,c,d,e;b=C(a.kT);if(!Fr(b)){c=C(b.K);if(c.V===null){b=c.b4;if(b!==null&&!Hr(b)){d=Dc(Xr(c.b4),D$);c.b4=null;b=C(d);d=b.ki;c=b.kj;e=b.kg;b=b.kh;DX(d);c=C(C(c).K);c.V=d;c.bc=c.bc+e|0;G2(C(b),null);}}}}
var QE=G(Bw);
var QF=G(Bw);
var QI=G(Bw);
var QJ=G(Bw);
var QG=G(Bw);
var QH=G(Bw);
var QA=G(Bw);
var QB=G(Bw);
var Qz=G(Bw);
var La=G(0);
var On=G();
function SG(a,b,c){NA(C(c));}
var UI=G();
var NY=G(0);
function NF(){D.call(this);this.i6=null;}
function AMq(b){var c;c=new NF;c.i6=b;return c;}
function G2(a,b){C(a.i6).rr(b);}
function AKL(a,b){C(a.i6).rX(b);}
function OR(){var a=this;D.call(a);a.ki=null;a.kj=null;a.kg=0;a.kh=null;}
var K7=G(FJ);
function AEq(a,b,c,d){var e,f,g,h;e=0;f=C(d);g=f.h;a:{while(true){if(b>g){b=e;break a;}h=E2(f,a.x);C9(f,a.x,b);e=C(a.bj).a(b,c,f);if(e>=0)break;C9(f,a.x,h);b=b+1|0;}}return b;}
function ALd(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.x;e=C(e);g=E2(e,g);C9(e,a.x,c);f=C(a.bj).a(c,d,e);if(f>=0)break;C9(e,a.x,g);c=c+(-1)|0;}}return c;}
function AC7(a){return null;}
var TL=G();
function Lj(){var a=this;D.call(a);a.iQ=0;a.mR=0;a.kP=0;a.lK=0;a.jW=null;}
function OW(a){return a.iQ>=a.kP?0:1;}
function QW(a){var b,c,d;b=a.mR;c=C(a.jW);if(b<c.cg){c=new QU;Be(c);K(c);}d=a.iQ;a.lK=d;a.iQ=d+1|0;return C1(c,d);}
function KW(){var a=this;C0.call(a);a.eK=0;a.cB=null;a.cZ=null;a.cJ=null;}
function AHK(a){var b,c,d,e;b=new $rt_globals.XMLHttpRequest();c=new Qa;c.bK=a;c.dg=b;c=BF(c,"handleEvent");b.onreadystatechange=c;c=a.cJ;d=a.cZ;Ki(C(c),b,d);d=a.cB;e=a.eK;b.open("GET",$rt_ustr(d),!!e);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
var KR=G();
var ATg=null;function AME(){AME=T(KR);AIZ();}
function AIZ(){var b,c;GO();b=Bl(C(C(ATm).cn()).data.length);c=b.data;ATg=b;c[B(C(ANX).v,c)]=1;c[B(C(ATh).v,c)]=2;}
var Za=G();
function AF$(a,b,c){a.rw($rt_str(b),Cz(c,"handleEvent"));}
function AGC(a,b,c){a.px($rt_str(b),Cz(c,"handleEvent"));}
function AAZ(a,b,c,d){a.nY($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
function AA4(a,b){return !!a.rC(b);}
function AEO(a,b,c,d){a.qC($rt_str(b),Cz(c,"handleEvent"),d?1:0);}
var Fe=G(0);
function KY(){var a=this;D.call(a);a.cA=null;a.hv=0;a.fh=null;a.em=null;a.dn=null;}
function Z5(a,b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cA.readyState==4){if(a.cA.status!=200){if(a.cA.status!=404&&a.cA.status!=403){try{c=Ba(100);$p=1;continue _;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}Kl(C(a.dn),a.hv,a.fh,a.em);}else b=C(a.em);}else{if(C(a.dn).ck){b=D9();d=a.fh;e=new Q;S(e);M(C(M(e,E(374))),d);Dp(C(b),R(e));}f=a.cA.response;e=GW(C(Hv()));g
=e.createElement("script");b=e.createTextNode(f);g.appendChild(b);e.body.appendChild(g);b=a.em;$rt_str(a.cA.responseText);b=C(b);}Er(C(a.dn));}return;case 1:a:{try{TY(c);if(GN()){break _;}break a;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}}b=a.dn;h=a.hv;d=a.fh;e=a.em;Kl(C(b),h,d,e);Er(C(a.dn));return;default:AA3();}}Qo().s(a,b,c,d,e,f,g,h,$p);}
function VF(a,b){var $p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Z5(a,b);if(GN()){break _;}return;default:AA3();}}Qo().s(a,b,$p);}
var OV=G();
var ASb=0;function Uc(){var a=this;D.call(a);a.iJ=null;a.qZ=0;a.dG=0;a.b0=0;}
function OI(a,b){var c=new Uc();AGU(c,a,b);return c;}
function AGU(a,b,c){a.b0=1;a.iJ=b;a.qZ=c;}
function N$(a){var b;if(!a.b0){b=new CM;Y(b,E(375));K(b);}return a.dG>=C(a.iJ).H?0:1;}
function Mq(a){var b,c,d;b=a.dG;c=C(a.iJ);if(b>=c.H){c=new RL;Y(c,Jp(b));K(c);}if(!a.b0){c=new CM;Y(c,E(375));K(c);}d=c.bu;a.dG=b+1|0;d=C(d).data;return d[B(b,d)];}
function LH(){var a=this;D.call(a);a.fe=null;a.fW=0;a.h4=null;a.h5=null;}
function Gv(){var a=this;D.call(a);a.ry=null;a.ce=null;a.mb=null;}
function UU(a,b){var c=new Gv();AFA(c,a,b);return c;}
function AFA(a,b,c){a.ce=c;a.ry=b;}
function Yb(a){var b,c,d,e,f;b=a.ce.length;c=new Q;Ff(c,((b*4|0)/3|0)+2|0);d=0;while(d<b){e=b-d|0;if(e>=3){f=(((a.ce[d]&255)<<16)+((a.ce[d+1|0]&255)<<8)|0)+(a.ce[d+2|0]&255)|0;Bs(c,O(E(376),f>>18&63));Bs(c,O(E(376),f>>12&63));Bs(c,O(E(376),f>>6&63));Bs(c,O(E(376),f&63));}else if(e<2){f=(a.ce[d]&255)<<16;Bs(c,O(E(376),f>>18&63));Bs(c,O(E(376),f>>12&63));U(c,E(377));}else{f=((a.ce[d]&255)<<16)+((a.ce[d+1|0]&255)<<8)|0;Bs(c,O(E(376),f>>18&63));Bs(c,O(E(376),f>>12&63));Bs(c,O(E(376),f>>6&63));U(c,E(378));}d=d+3
|0;}return R(c);}
function KU(){D.call(this);this.hM=null;}
var RG=G(0);
var O1=G(0);
var PS=G(0);
var FE=G();
function H0(){FE.call(this);this.ni=null;}
function UG(){var a=this;H0.call(a);a.r6=0;a.hs=0;a.da=null;a.gS=null;a.mk=null;}
function AGT(a,b){var c=new UG();AJU(c,a,b);return c;}
function AJU(a,b,c){a.ni=b;b=new Q;S(b);a.da=b;a.gS=Ce(32);a.r6=c;AEp();a.mk=AUo;}
function O5(a,b,c,d){var e,$$je;e=a.ni;if(e===null)a.hs=1;if(!(a.hs?0:1))return;a:{try{C(e).gM(b,c,d);break a;}catch($$e){$$je=By($$e);if($$je instanceof PN){}else{throw $$e;}}a.hs=1;}}
function LE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$$je;d=d-c|0;e=new NN;f=C(b);g=f.data.length;h=c+d|0;F$(e,g);e.i=c;e.l=h;e.mG=0;e.t_=0;e.lf=f;f=Fn(B7(16,B$(d,1024)));d=f.data.length;i=AEe(0,d,f,0,0+d|0,0,0);j=C(a.mk);k=new MJ;b=Fn(1);l=b.data;l[AND(0,l)]=63;AKd();m=AUp;k.ik=m;k.hy=m;c=l.length;if(c&&c>=k.jb){k.nX=j;k.kR=b.cn();k.rQ=2.0;k.jb=4.0;k.ku=Ce(512);k.jV=Fn(512);m=AUq;if(m===null){e=new Bu;Y(e,E(379));K(e);}k.ik=m;k.hy=m;while(k.fb!=3){k.fb=2;n=e;o=i;a:{while(true){try{m=ST(k,n,o);}catch($$e){$$je=
By($$e);if($$je instanceof Bq){m=$$je;e=new Pr;e.fB=1;e.f5=1;e.d4=m;K(e);}else{throw $$e;}}m=C(m);if(m.eu?0:1){c=BN(n);if(c<=0)break a;m=Js(c);}else if(J0(m))break a;m=C(m);j=!Q9(m)?k.ik:k.hy;if(j===AUq){o=C(o);c=BN(o);l=C(k.kR);d=l.data.length;if(c<d){m=AUr;break a;}Q$(o,l,0,d);}else if(j!==AUs)break;p=n.i;c=m.eu!=2?0:1;if(!(!c&&!Q9(m)?0:1)){m=new GP;Be(m);K(m);}Cm(n,p+m.jX|0);}}p=J0(C(m));O5(a,f,0,i.i);B1(i);if(!p){while(true){d=k.fb;if(d!=2&&d!=4){m=new De;Be(m);K(m);}m=AUt;if(m===m)k.fb=3;p=J0(C(m));O5(a,
f,0,i.i);B1(i);if(!p)break;}return;}}m=new De;Be(m);K(m);}e=new Bu;Y(e,E(380));K(e);}
function G0(a,b){U(C(a.da),b);H1(a);}
function Dp(a,b){Bs(C(U(C(a.da),b)),10);H1(a);}
function H1(a){var b,c,d,e,f,g,h,i,j;b=C(a.da);c=b.w;d=a.gS;if(c>C(d).data.length)d=Ce(c);e=0;f=0;if(e>c){b=new Bp;Y(b,E(381));K(b);}g=d;while(e<c){h=f+1|0;i=b.m;j=e+1|0;i=C(i).data;e=i[B(e,i)];g=C(g);i=g.data;i[B(f,i)]=e;f=h;e=j;}LE(a,d,0,c);C(a.da).w=0;}
function Fs(){FE.call(this);this.rt=null;}
function RO(a){a.rt=Fn(1);}
var Jw=G(Fs);
var ASP=null;function AFB(a,b,c,d){var e,f,g;e=0;while(e<d){f=e+c|0;b=C(b);g=b.data;$rt_putStdout(g[B(f,g)]&255);e=e+1|0;}}
function XS(){var b;b=new Jw;RO(b);ASP=b;}
function K2(){var a=this;D.call(a);a.j3=null;a.tp=null;}
function AHj(a,b){var c,d;c=a.j3;d=b.loaded;C(c).dX(d);}
function HU(){var a=this;D.call(a);a.nr=null;a.pM=null;}
function Ye(b){var c,d;b=C(b);if(IY(b))K(Ux(b));if(!Yf(O(b,0)))K(Ux(b));c=1;while(c<X(b)){a:{d=O(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Yf(d))break a;else K(Ux(b));}}c=c+1|0;}}
function Yf(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Kk=G(HU);
var AUo=null;function AEp(){AEp=T(Kk);AD3();}
function AD3(){var b,c,d,e,f,g;b=new Kk;AEp();c=J(BA,0);d=c.data;Ye(E(382));e=d.length;f=0;while(f<e){g=DZ(f);Ye(d[g]);f=g+1|0;}b.nr=E(382);b.pM=c.cn();AUo=b;}
function Yl(){Bu.call(this);this.n6=null;}
function Ux(a){var b=new Yl();AJB(b,a);return b;}
function AJB(a,b){Be(a);a.n6=b;}
function EF(){Bz.call(this);this.lw=0;}
var AUu=null;var AUv=null;var ATj=null;var AUw=null;function So(){So=T(EF);AHU();}
function Zp(a,b,c){var d=new EF();ZW(d,a,b,c);return d;}
function ZW(a,b,c,d){So();Cq(a,b,c);a.lw=d;}
function AHU(){var b,c,d,e;AUu=Zp(E(383),0,0);AUv=Zp(E(384),1,1);b=Zp(E(385),2,4);ATj=b;c=J(EF,3);d=c.data;e=AUu;d[AND(0,d)]=e;e=AUv;d[AND(1,d)]=e;d[AND(2,d)]=b;AUw=c;}
var RL=G(Bq);
var CM=G(Bq);
function AUx(a){var b=new CM();Ub(b,a);return b;}
function Ub(a,b){Y(a,b);}
function OT(){W.call(this);this.qM=null;}
function AJ5(a,b){return Ca(b)!=2?0:1;}
function KI(){W.call(this);this.q9=null;}
function ABW(a,b){return Ca(b)!=1?0:1;}
function Ol(){W.call(this);this.pP=null;}
function ABD(a,b){return NI(b);}
function Ok(){W.call(this);this.pi=null;}
function AEn(a,b){return 0;}
function Q5(){W.call(this);this.s$=null;}
function AFn(a,b){return !Ca(b)?0:1;}
function Mk(){W.call(this);this.rH=null;}
function AJ7(a,b){return Ca(b)!=9?0:1;}
function LF(){W.call(this);this.tW=null;}
function AHD(a,b){return FC(b);}
function Nx(){W.call(this);this.qO=null;}
function AIH(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function KE(){W.call(this);this.no=null;}
function AK0(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function KH(){W.call(this);this.rR=null;}
function ADC(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function Ly(){W.call(this);this.s7=null;}
function AKg(a,b){a:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function MF(){W.call(this);this.tv=null;}
function AGA(a,b){return H5(b);}
function MK(){W.call(this);this.p8=null;}
function AIh(a,b){return MM(b);}
function Pg(){W.call(this);this.r9=null;}
function AJX(a,b){return Ca(b)!=3?0:1;}
function OE(){W.call(this);this.nw=null;}
function AKK(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function KQ(){W.call(this);this.um=null;}
function ADs(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function J$(){W.call(this);this.h2=0;}
function ANs(a){var b=new J$();Xi(b,a);return b;}
function Xi(a,b){Bk(a);a.h2=b;}
function AHE(a,b){return a.B^(a.h2!=Ca(b&65535)?0:1);}
var Of=G(J$);
function AJh(a,b){return a.B^(!(a.h2>>Ca(b&65535)&1)?0:1);}
function Ql(){D.call(this);this.kz=null;}
function ABJ(a){var b,c,d,$$je;b=C(a.kz);a:{b:{c:{d:{try{Ev();AUk=AUk+1|0;DX(b);b.cW();}catch($$e){$$je=By($$e);if($$je instanceof Cv){c=$$je;break d;}else{c=$$je;break c;}}c=C(b.eW);E4(c);e:{try{J_(c);CE(c);break e;}catch($$e){$$je=By($$e);b=$$je;}CE(c);K(b);}b.eN=0;AUk=AUk-1|0;DX(AUh);break a;}try{SG(C(U4(b)),b,c);break b;}catch($$e){$$je=By($$e);c=$$je;}}d=C(b.eW);E4(d);f:{try{J_(d);CE(d);break f;}catch($$e){$$je=By($$e);b=$$je;}CE(d);K(b);}b.eN=0;AUk=AUk-1|0;DX(AUh);K(c);}c=C(b.eW);E4(c);g:{try{J_(c);CE(c);break g;}
catch($$e){$$je=By($$e);b=$$je;}CE(c);K(b);}b.eN=0;AUk=AUk-1|0;DX(AUh);}}
var Ul=G();
var Rx=G();
var ATB=null;function ANk(){ANk=T(Rx);AJc();}
function AJc(){var b,c;b=Bl(C(Mg()).data.length);c=b.data;ATB=b;c[B(C(ATM).v,c)]=1;c[B(C(ATJ).v,c)]=2;c[B(C(ATL).v,c)]=3;c[B(C(ATK).v,c)]=4;c[B(C(AT8).v,c)]=5;}
var QU=G(Bq);
function Yh(){var a=this;D.call(a);a.L=null;a.dB=0;a.i0=null;a.kV=null;a.fw=null;a.nu=null;a.iB=null;a.du=null;a.rm=0;a.qn=0.0;}
function ALv(){var a=new Yh();ACO(a);return a;}
function ACO(a){var b,c,d,e,f,g,h,i,j,k,l;a.dB=0;a.i0=Gk();a.kV=Gk();a.fw=Gk();a.nu=new Bt;a.iB=C8(1.0,1.0,1.0,1.0);a.qn=0.75;b=new NB;c=AAG(0,1,0);d=AGw(0,1,0);e=new El;AKW();e.b8=E(1);e.eG=Hn();e.k1=Hn();e.ma=Hn();e.eq=Hn();e.lq=Hn();e.mp=Hn();e.tb=0;e.Y=Hz(1);e.cr=Hz(1);if(c===null){b=new Bu;Y(b,E(386));K(b);}if(d===null){b=new Bu;Y(b,E(387));K(b);}f=AUy;if(f!==null&&X(f)>0){f=new Q;S(f);c=R(C(U(C(U(f,AUy)),c)));}f=AUz;if(f!==null&&X(f)>0){f=new Q;S(f);d=R(C(U(C(U(f,AUz)),d)));}e.jR=c;e.kc=d;e.tH=O2(16);MT(e,
c,d);if(e.cS){B1(C(e.Y));C(ATa).dE(e.bw,35721,e.Y);g=DO(C(e.Y),0);e.kp=J(BA,g);h=0;while(h<g){B1(C(e.Y));QY(C(e.Y),0,1);B1(C(e.cr));c=C(ATa).iu(e.bw,h,e.Y,e.cr);i=C(ATa).fo(e.bw,c);D1(C(e.eq),c,i);D1(C(e.lq),c,DO(C(e.cr),0));D1(C(e.mp),c,DO(C(e.Y),0));j=C(e.kp).data;i=B(h,j);j[i]=c;h=i+1|0;}WA(e);d=AS9;f=Z(Ig(C(AUA),d),Jt);if(f===null)f=E9();Di(f,e);DC(C(AUA),d,f);}if(!e.cS){b=new CM;c=new Q;S(c);Y(b,R(C(U(C(U(c,E(388))),QC(e)))));K(b);}Wm(b,5000,0,1,0,e);b.tq=1;a.L=b;b=a.i0;k=J6(C(AS$));l=Kq(C(AS$));W3(C(b),
0.0,0.0+k,0.0,0.0+l,0.0,1.0);a.dB=1;}
function HE(a,b){var c,d;if(a.du!==null){b=new De;Y(b,E(389));K(b);}a.du=b;if(a.dB){RN(C(a.fw),a.i0);Sf(C(a.fw).cH,C(a.kV).cH);a.dB=0;}b=a.L;c=a.fw;d=C(a.du).lw;b=C(b);RN(C(b.hJ),c);b.lR=d;}
function T2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;if(e<=0){f=new Bu;Y(f,E(390));K(f);}g=Q0(C(a.iB));h=6.2831854820251465/e;AHq();i=ARy;j=((h+1.5707963705062866)*2607.594482421875|0)&16383;i=C(i).data;k=i[B(j,i)];l=i[B((h*2607.594482421875|0)&16383,i)];m=0.0;f=a.du;So();n=AUv;if(f===n){NP(a,n,ATj,(e*2|0)+2|0);j=0;o=d;while(j<e){Do(C(a.L),g);Dv(C(a.L),b+o,c+m,0.0);p=k*o-l*m;m=l*o+k*m;Do(C(a.L),g);Dv(C(a.L),b+p,c+m,0.0);j=j+1|0;o=p;}Do(C(a.L),g);Dv(C(a.L),b+o,c+m,0.0);}else{NP(a,n,ATj,(e*3|0)+3|0);j=e+(-1)|0;q
=0;o=d;while(q<j){Do(C(a.L),g);Dv(C(a.L),b,c,0.0);Do(C(a.L),g);Dv(C(a.L),b+o,c+m,0.0);p=k*o-l*m;m=l*o+k*m;Do(C(a.L),g);Dv(C(a.L),b+p,c+m,0.0);q=q+1|0;o=p;}Do(C(a.L),g);Dv(C(a.L),b,c,0.0);Do(C(a.L),g);Dv(C(a.L),b+o,c+m,0.0);}Do(C(a.L),g);f=a.L;b=b+d;c=c+0.0;Dv(C(f),b,c,0.0);}
function NP(a,b,c,d){var e,f;e=a.du;if(e===null){b=new De;Y(b,E(391));K(b);}if(!(e!==b&&e!==c)){if(a.dB){G9(a);HE(a,e);}else{b=C(a.L);if((b.jU-b.dJ|0)<d){G9(a);HE(a,e);}}}else{if(!a.rm){if(c===null){c=new De;e=new Q;S(e);Y(c,R(C(U(C(M(C(U(e,E(392))),b)),E(393)))));K(c);}f=new De;e=new Q;S(e);Y(f,R(C(U(C(M(C(U(C(M(C(U(e,E(392))),b)),E(394))),c)),E(393)))));K(f);}G9(a);HE(a,b);}}
function G9(a){var b,c,d,e,f,g,h;b=C(a.L);if(b.dJ){c=C(b.d9);d=ATa;Ee(c);C(d).iA(c.bw);d=b.d9;e=b.hJ;d=C(d);f=Lm(d,E(395));c=ATa;Ee(d);Uu(C(c),f,1,0,C(e).cH,0);g=0;while(g<b.mM){c=b.d9;h=C(b.hw).data;g=B(g,h);d=h[g];c=C(c);e=ATa;Ee(c);C(e).hb(Lm(c,d),g);g=g+1|0;}c=b.bF;h=b.fm;f=b.dR;C(C(c).cU).lF(h,0,f);c=b.bF;d=b.d9;g=b.lR;c=C(c);WM(c,d,g,0,HS(C(c.bl))<=0?C(c.cU).jH():FB(C(c.bl)),c.j$);b.ms=0;b.dR=0;b.dJ=0;}a.du=null;}
var I5=G(Fs);
var ASQ=null;function AEd(a,b,c,d){var e,f,g;e=0;while(e<d){f=e+c|0;b=C(b);g=b.data;$rt_putStderr(g[B(f,g)]&255);e=e+1|0;}}
function AAy(){var b;b=new I5;RO(b);ASQ=b;}
var EZ=G();
var AUB=null;var AUC=null;var ASJ=null;var ASI=null;var ASH=null;function VB(){var b,c;b=Bl(10);c=b.data;c[AND(0,c)]=1;c[AND(1,c)]=10;c[AND(2,c)]=100;c[AND(3,c)]=1000;c[AND(4,c)]=10000;c[AND(5,c)]=100000;c[AND(6,c)]=1000000;c[AND(7,c)]=10000000;c[AND(8,c)]=100000000;c[AND(9,c)]=1000000000;AUB=b;b=ZB(19);c=b.data;c[AND(0,c)]=Ba(1);c[AND(1,c)]=Ba(10);c[AND(2,c)]=Ba(100);c[AND(3,c)]=Ba(1000);c[AND(4,c)]=Ba(10000);c[AND(5,c)]=Ba(100000);c[AND(6,c)]=Ba(1000000);c[AND(7,c)]=Ba(10000000);c[AND(8,c)]=Ba(100000000);c[AND(9,
c)]=Ba(1000000000);c[AND(10,c)]=F(1410065408, 2);c[AND(11,c)]=F(1215752192, 23);c[AND(12,c)]=F(3567587328, 232);c[AND(13,c)]=F(1316134912, 2328);c[AND(14,c)]=F(276447232, 23283);c[AND(15,c)]=F(2764472320, 232830);c[AND(16,c)]=F(1874919424, 2328306);c[AND(17,c)]=F(1569325056, 23283064);c[AND(18,c)]=F(2808348672, 232830643);AUC=b;b=ZB(6);c=b.data;c[AND(0,c)]=Ba(1);c[AND(1,c)]=Ba(10);c[AND(2,c)]=Ba(100);c[AND(3,c)]=Ba(10000);c[AND(4,c)]=Ba(100000000);c[AND(5,c)]=F(1874919424, 2328306);ASJ=b;ASI=new Py;ASH=new Qm;}
var GK=G();
var AUD=0;var AUE=null;var AUF=null;function WR(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=JY(b);e=!(d&(-2147483648))?0:1;c=C(c);c.jT=e;e=d&8388607;f=d>>23&255;if(!e&&!f){c.g_=0;c.gR=0;return;}if(f)d=e|8388608;else{d=e<<1;while(C_(CG(Ba(d),Ba(8388608)),Cb)){d=d<<1;f=f+(-1)|0;}}g=AUF;e=0;h=C(g);g=h.data;i=g.length;if(e>i){c=new Bu;Be(c);K(c);}j=i-1|0;a:{while(true){if(e>j){i=( -e|0)-1|0;break a;}k=h.data;i=B((e+j|0)/2|0,k);l=k[i];if(l==f)break;if(f>=l)e=i+1|0;else j=i-1|0;}}if(i<0)i= -i|0;e=B(i+1|0,g);m=9+(f
-g[e]|0)|0;g=C(AUE).data;n=GF(d,g[AND(e,g)],m);if(n<AUD){while($rt_ucmp(n,AUD)<=0){i=i+(-1)|0;n=(n*10|0)+9|0;}g=AUF;e=i+1|0;g=C(g).data;j=B(e,g);m=9+(f-g[j]|0)|0;g=C(AUE).data;n=GF(d,g[AND(j,g)],m);}d=d<<1;f=d+1|0;g=AUE;e=i+1|0;g=C(g).data;e=B(e,g);l=g[e];j=m-1|0;o=GF(f,l,j);d=d-1|0;g=C(AUE).data;p=GF(d,g[AND(e,g)],j);q=1;while(true){r=q*10|0;if($rt_ucmp($rt_udiv(n,r),$rt_udiv(p,r))<=0)break;q=r;}j=1;while(true){l=j*10|0;if($rt_ucmp($rt_udiv(n,l),$rt_udiv(o,l))>=0)break;j=l;}s=$rt_ucmp(q,j);d=s>0?DS($rt_udiv(n,
q),q):s<0?DS($rt_udiv(n,j),j)+j|0:DS($rt_udiv((n+(j/2|0)|0),j),j);if(DR(Ba(d),Ba(1000000000))>=0)while(true){i=i+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){i=i+(-1)|0;d=d*10|0;}c.g_=d;c.gR=i-50|0;}
function GF(b,c,d){return EI(B4(BB(CG(Ba(b),F(4294967295, 0)),CG(Ba(c),F(4294967295, 0))),32-d|0));}
function Ui(){var b,c;AUD=$rt_udiv((-1),10);b=Bl(100);c=b.data;c[AND(0,c)]=(-18543760);c[AND(1,c)]=(-873828468);c[AND(2,c)]=(-1558056233);c[AND(3,c)]=(-2105438446);c[AND(4,c)]=(-791721136);c[AND(5,c)]=(-1492370368);c[AND(6,c)]=(-2052889754);c[AND(7,c)]=(-707643228);c[AND(8,c)]=(-1425108042);c[AND(9,c)]=(-1999079893);c[AND(10,c)]=(-621547450);c[AND(11,c)]=(-1356231419);c[AND(12,c)]=(-1943978595);c[AND(13,c)]=(-533385374);c[AND(14,c)]=(-1285701758);c[AND(15,c)]=(-1887554866);c[AND(16,c)]=(-443107408);c[AND(17,
c)]=(-1213479385);c[AND(18,c)]=(-1829776968);c[AND(19,c)]=(-350662770);c[AND(20,c)]=(-1139523676);c[AND(21,c)]=(-1770612400);c[AND(22,c)]=(-255999462);c[AND(23,c)]=(-1063793029);c[AND(24,c)]=(-1710027882);c[AND(25,c)]=(-159064234);c[AND(26,c)]=(-986244846);c[AND(27,c)]=(-1647989336);c[AND(28,c)]=(-59802560);c[AND(29,c)]=(-906835507);c[AND(30,c)]=(-1584461865);c[AND(31,c)]=(-2126562952);c[AND(32,c)]=(-825520345);c[AND(33,c)]=(-1519409735);c[AND(34,c)]=(-2074521247);c[AND(35,c)]=(-742253618);c[AND(36,c)]=(-1452796353);c[AND(37,
c)]=(-2021230542);c[AND(38,c)]=(-656988489);c[AND(39,c)]=(-1384584251);c[AND(40,c)]=(-1966660860);c[AND(41,c)]=(-569676998);c[AND(42,c)]=(-1314735058);c[AND(43,c)]=(-1910781505);c[AND(44,c)]=(-480270031);c[AND(45,c)]=(-1243209484);c[AND(46,c)]=(-1853561046);c[AND(47,c)]=(-388717296);c[AND(48,c)]=(-1169967296);c[AND(49,c)]=(-1794967296);c[AND(50,c)]=(-294967296);c[AND(51,c)]=(-1094967296);c[AND(52,c)]=(-1734967296);c[AND(53,c)]=(-198967296);c[AND(54,c)]=(-1018167296);c[AND(55,c)]=(-1673527296);c[AND(56,c)]=(-100663296);c[AND(57,
c)]=(-939524096);c[AND(58,c)]=(-1610612736);c[AND(59,c)]=(-2147483648);c[AND(60,c)]=(-858993460);c[AND(61,c)]=(-1546188227);c[AND(62,c)]=(-2095944041);c[AND(63,c)]=(-776530088);c[AND(64,c)]=(-1480217529);c[AND(65,c)]=(-2043167483);c[AND(66,c)]=(-692087595);c[AND(67,c)]=(-1412663535);c[AND(68,c)]=(-1989124287);c[AND(69,c)]=(-605618482);c[AND(70,c)]=(-1343488245);c[AND(71,c)]=(-1933784055);c[AND(72,c)]=(-517074110);c[AND(73,c)]=(-1272652747);c[AND(74,c)]=(-1877115657);c[AND(75,c)]=(-426404674);c[AND(76,c)]=(-1200117198);c[AND(77,
c)]=(-1819087218);c[AND(78,c)]=(-333559171);c[AND(79,c)]=(-1125840796);c[AND(80,c)]=(-1759666096);c[AND(81,c)]=(-238485376);c[AND(82,c)]=(-1049781760);c[AND(83,c)]=(-1698818867);c[AND(84,c)]=(-141129810);c[AND(85,c)]=(-971897307);c[AND(86,c)]=(-1636511305);c[AND(87,c)]=(-41437710);c[AND(88,c)]=(-892143627);c[AND(89,c)]=(-1572708361);c[AND(90,c)]=(-2117160148);c[AND(91,c)]=(-810475859);c[AND(92,c)]=(-1507374147);c[AND(93,c)]=(-2064892777);c[AND(94,c)]=(-726848065);c[AND(95,c)]=(-1440471911);c[AND(96,c)]=(-2011370988);c[AND(97,
c)]=(-641213203);c[AND(98,c)]=(-1371964022);c[AND(99,c)]=(-1956564688);AUE=b;b=Bl(100);c=b.data;c[AND(0,c)]=(-37);c[AND(1,c)]=(-34);c[AND(2,c)]=(-31);c[AND(3,c)]=(-28);c[AND(4,c)]=(-24);c[AND(5,c)]=(-21);c[AND(6,c)]=(-18);c[AND(7,c)]=(-14);c[AND(8,c)]=(-11);c[AND(9,c)]=(-8);c[AND(10,c)]=(-4);c[AND(11,c)]=(-1);c[AND(12,c)]=2;c[AND(13,c)]=6;c[AND(14,c)]=9;c[AND(15,c)]=12;c[AND(16,c)]=16;c[AND(17,c)]=19;c[AND(18,c)]=22;c[AND(19,c)]=26;c[AND(20,c)]=29;c[AND(21,c)]=32;c[AND(22,c)]=36;c[AND(23,c)]=39;c[AND(24,c)]
=42;c[AND(25,c)]=46;c[AND(26,c)]=49;c[AND(27,c)]=52;c[AND(28,c)]=56;c[AND(29,c)]=59;c[AND(30,c)]=62;c[AND(31,c)]=65;c[AND(32,c)]=69;c[AND(33,c)]=72;c[AND(34,c)]=75;c[AND(35,c)]=79;c[AND(36,c)]=82;c[AND(37,c)]=85;c[AND(38,c)]=89;c[AND(39,c)]=92;c[AND(40,c)]=95;c[AND(41,c)]=99;c[AND(42,c)]=102;c[AND(43,c)]=105;c[AND(44,c)]=109;c[AND(45,c)]=112;c[AND(46,c)]=115;c[AND(47,c)]=119;c[AND(48,c)]=122;c[AND(49,c)]=125;c[AND(50,c)]=129;c[AND(51,c)]=132;c[AND(52,c)]=135;c[AND(53,c)]=139;c[AND(54,c)]=142;c[AND(55,c)]=145;c[AND(56,
c)]=149;c[AND(57,c)]=152;c[AND(58,c)]=155;c[AND(59,c)]=158;c[AND(60,c)]=162;c[AND(61,c)]=165;c[AND(62,c)]=168;c[AND(63,c)]=172;c[AND(64,c)]=175;c[AND(65,c)]=178;c[AND(66,c)]=182;c[AND(67,c)]=185;c[AND(68,c)]=188;c[AND(69,c)]=192;c[AND(70,c)]=195;c[AND(71,c)]=198;c[AND(72,c)]=202;c[AND(73,c)]=205;c[AND(74,c)]=208;c[AND(75,c)]=212;c[AND(76,c)]=215;c[AND(77,c)]=218;c[AND(78,c)]=222;c[AND(79,c)]=225;c[AND(80,c)]=228;c[AND(81,c)]=232;c[AND(82,c)]=235;c[AND(83,c)]=238;c[AND(84,c)]=242;c[AND(85,c)]=245;c[AND(86,c)]
=248;c[AND(87,c)]=252;c[AND(88,c)]=255;c[AND(89,c)]=258;c[AND(90,c)]=261;c[AND(91,c)]=265;c[AND(92,c)]=268;c[AND(93,c)]=271;c[AND(94,c)]=275;c[AND(95,c)]=278;c[AND(96,c)]=281;c[AND(97,c)]=285;c[AND(98,c)]=288;c[AND(99,c)]=291;AUF=b;}
function Qm(){var a=this;D.call(a);a.g_=0;a.gR=0;a.jT=0;}
var MQ=G(Dq);
var AUG=null;function To(){AUG=H($rt_doublecls());}
var Hm=G();
var AUH=Cb;var AUI=null;var AUJ=null;function Vv(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):F(0, 2146959360);e=C_(CG(d,F(0, 2147483648)),Cb)?0:1;c=C(c);c.jC=e;f=CG(d,F(4294967295, 1048575));e=EI(AMd(d,52))&2047;if(C_(f,Cb)&&!e){c.hU=Cb;c.gD=0;return;}if(e)f=AD6(f,F(0, 1048576));else{f=EP(f,1);while(C_(CG(f,F(0, 1048576)),Cb)){f=EP(f,1);e=e+(-1)|0;}}g=AUJ;h=e<<16>>16;i=0;j=C(g);g=j.data;k=g.length;if(i>k){c=new Bu;Be(c);K(c);}l=k-1|0;a:{while(true){if
(i>l){k=( -i|0)-1|0;break a;}m=j.data;k=B((i+l|0)/2|0,m);n=CP(m[k],h);if(!n)break;if(n<=0)i=k+1|0;else l=k-1|0;}}if(k<0)k= -k|0;h=B(k+1|0,g);l=12+(e-g[h]|0)|0;g=C(AUI).data;o=G1(f,g[AND(h,g)],l);if(ADS(o,AUH)){while(DR(o,AUH)<=0){k=k+(-1)|0;o=Cd(BB(o,Ba(10)),Ba(9));}g=AUJ;h=k+1|0;g=C(g).data;i=B(h,g);l=12+(e-g[i]|0)|0;g=C(AUI).data;o=G1(f,g[AND(i,g)],l);}f=EP(f,1);d=Cd(f,Ba(1));g=AUI;e=k+1|0;g=C(g).data;h=B(e,g);p=g[h];i=l-1|0;q=G1(d,p,i);d=AFa(f,Ba(1));g=C(AUI).data;p=G1(d,g[AND(h,g)],i);r=Ba(1);while(true)
{s=BB(r,Ba(10));if(DR(DD(o,s),DD(p,s))<=0)break;r=s;}t=Ba(1);while(true){u=BB(t,Ba(10));if(DR(DD(o,u),DD(q,u))>=0)break;t=u;}h=DR(r,t);f=h>0?BB(DD(o,r),r):h<0?Cd(BB(DD(o,t),t),t):BB(DD(Cd(o,X3(t,Ba(2))),t),t);if(DR(f,F(2808348672, 232830643))>=0)while(true){k=k+1|0;f=DD(f,Ba(10));if(DR(f,F(2808348672, 232830643))<0)break;}else if(DR(f,F(1569325056, 23283064))<0){k=k+(-1)|0;f=BB(f,Ba(10));}c.hU=f;c.gD=k-330|0;}
function G1(b,c,d){var e,f,g,h,i,j,k,l;e=CG(b,Ba(65535));f=CG(B4(b,16),Ba(65535));g=CG(B4(b,32),Ba(65535));h=CG(B4(b,48),Ba(65535));i=CG(c,Ba(65535));j=CG(B4(c,16),Ba(65535));k=CG(B4(c,32),Ba(65535));l=CG(B4(c,48),Ba(65535));return Cd(Cd(Cd(EP(BB(l,h),32+d|0),EP(Cd(BB(l,g),BB(k,h)),16+d|0)),EP(Cd(Cd(BB(l,f),BB(k,g)),BB(j,h)),d)),B4(Cd(Cd(Cd(BB(k,e),BB(j,f)),BB(i,g)),EP(Cd(Cd(Cd(BB(l,e),BB(k,f)),BB(j,g)),BB(i,h)),16)),32-d|0));}
function UY(){var b,c;AUH=DD(Ba(-1),Ba(10));b=ZB(660);c=b.data;c[AND(0,c)]=F(3251292512, 2194092222);c[AND(1,c)]=F(1766094183, 3510547556);c[AND(2,c)]=F(553881887, 2808438045);c[AND(3,c)]=F(443105509, 2246750436);c[AND(4,c)]=F(3285949193, 3594800697);c[AND(5,c)]=F(910772436, 2875840558);c[AND(6,c)]=F(2446604867, 2300672446);c[AND(7,c)]=F(2196580869, 3681075914);c[AND(8,c)]=F(2616258154, 2944860731);c[AND(9,c)]=F(1234013064, 2355888585);c[AND(10,c)]=F(1974420903, 3769421736);c[AND(11,c)]=F(720543263, 3015537389);c[AND(12,
c)]=F(1435428070, 2412429911);c[AND(13,c)]=F(578697993, 3859887858);c[AND(14,c)]=F(2180945313, 3087910286);c[AND(15,c)]=F(885762791, 2470328229);c[AND(16,c)]=F(3135207384, 3952525166);c[AND(17,c)]=F(1649172448, 3162020133);c[AND(18,c)]=F(3037324877, 2529616106);c[AND(19,c)]=F(3141732885, 4047385770);c[AND(20,c)]=F(2513386308, 3237908616);c[AND(21,c)]=F(1151715587, 2590326893);c[AND(22,c)]=F(983751480, 4144523029);c[AND(23,c)]=F(1645994643, 3315618423);c[AND(24,c)]=F(3034782633, 2652494738);c[AND(25,c)]=F(3996658754, 4243991581);c[AND(26,
c)]=F(2338333544, 3395193265);c[AND(27,c)]=F(1870666835, 2716154612);c[AND(28,c)]=F(4073513845, 2172923689);c[AND(29,c)]=F(3940641775, 3476677903);c[AND(30,c)]=F(575533043, 2781342323);c[AND(31,c)]=F(2178413352, 2225073858);c[AND(32,c)]=F(2626467905, 3560118173);c[AND(33,c)]=F(3819161242, 2848094538);c[AND(34,c)]=F(478348616, 2278475631);c[AND(35,c)]=F(3342338164, 3645561009);c[AND(36,c)]=F(3532863990, 2916448807);c[AND(37,c)]=F(1108304273, 2333159046);c[AND(38,c)]=F(55299919, 3733054474);c[AND(39,c)]=F(903233395, 2986443579);c[AND(40,
c)]=F(1581580175, 2389154863);c[AND(41,c)]=F(1671534821, 3822647781);c[AND(42,c)]=F(478234397, 3058118225);c[AND(43,c)]=F(382587518, 2446494580);c[AND(44,c)]=F(612140029, 3914391328);c[AND(45,c)]=F(2207698941, 3131513062);c[AND(46,c)]=F(48172235, 2505210450);c[AND(47,c)]=F(77075576, 4008336720);c[AND(48,c)]=F(61660460, 3206669376);c[AND(49,c)]=F(3485302205, 2565335500);c[AND(50,c)]=F(1281516232, 4104536801);c[AND(51,c)]=F(166219527, 3283629441);c[AND(52,c)]=F(3568949458, 2626903552);c[AND(53,c)]=F(2274345296, 4203045684);c[AND(54,
c)]=F(2678469696, 3362436547);c[AND(55,c)]=F(424788838, 2689949238);c[AND(56,c)]=F(2057817989, 2151959390);c[AND(57,c)]=F(3292508783, 3443135024);c[AND(58,c)]=F(3493000485, 2754508019);c[AND(59,c)]=F(3653393847, 2203606415);c[AND(60,c)]=F(1550462860, 3525770265);c[AND(61,c)]=F(1240370288, 2820616212);c[AND(62,c)]=F(3569276608, 2256492969);c[AND(63,c)]=F(3133862195, 3610388751);c[AND(64,c)]=F(1648096297, 2888311001);c[AND(65,c)]=F(459483578, 2310648801);c[AND(66,c)]=F(3312154103, 3697038081);c[AND(67,c)]=F(1790729823, 2957630465);c[AND(68,
c)]=F(1432583858, 2366104372);c[AND(69,c)]=F(3151127633, 3785766995);c[AND(70,c)]=F(2520902106, 3028613596);c[AND(71,c)]=F(1157728226, 2422890877);c[AND(72,c)]=F(2711358621, 3876625403);c[AND(73,c)]=F(3887073815, 3101300322);c[AND(74,c)]=F(1391672133, 2481040258);c[AND(75,c)]=F(1367681954, 3969664413);c[AND(76,c)]=F(2812132482, 3175731530);c[AND(77,c)]=F(2249705985, 2540585224);c[AND(78,c)]=F(1022549199, 4064936359);c[AND(79,c)]=F(1677032818, 3251949087);c[AND(80,c)]=F(3918606632, 2601559269);c[AND(81,c)]=F(3692790234, 4162494831);c[AND(82,
c)]=F(2095238728, 3329995865);c[AND(83,c)]=F(1676190982, 2663996692);c[AND(84,c)]=F(3540899031, 4262394707);c[AND(85,c)]=F(1114732307, 3409915766);c[AND(86,c)]=F(32792386, 2727932613);c[AND(87,c)]=F(1744220827, 2182346090);c[AND(88,c)]=F(2790753324, 3491753744);c[AND(89,c)]=F(3091596118, 2793402995);c[AND(90,c)]=F(2473276894, 2234722396);c[AND(91,c)]=F(2239256113, 3575555834);c[AND(92,c)]=F(2650398349, 2860444667);c[AND(93,c)]=F(402331761, 2288355734);c[AND(94,c)]=F(2361717736, 3661369174);c[AND(95,c)]=F(2748367648, 2929095339);c[AND(96,
c)]=F(3057687578, 2343276271);c[AND(97,c)]=F(3174313206, 3749242034);c[AND(98,c)]=F(3398444024, 2999393627);c[AND(99,c)]=F(1000768301, 2399514902);c[AND(100,c)]=F(2460222741, 3839223843);c[AND(101,c)]=F(3686165111, 3071379074);c[AND(102,c)]=F(3807925548, 2457103259);c[AND(103,c)]=F(3515700499, 3931365215);c[AND(104,c)]=F(2812560399, 3145092172);c[AND(105,c)]=F(532061401, 2516073738);c[AND(106,c)]=F(4287272078, 4025717980);c[AND(107,c)]=F(3429817663, 3220574384);c[AND(108,c)]=F(3602847589, 2576459507);c[AND(109,
c)]=F(2328582306, 4122335212);c[AND(110,c)]=F(144878926, 3297868170);c[AND(111,c)]=F(115903141, 2638294536);c[AND(112,c)]=F(2762425404, 4221271257);c[AND(113,c)]=F(491953404, 3377017006);c[AND(114,c)]=F(3829536560, 2701613604);c[AND(115,c)]=F(3922622707, 2161290883);c[AND(116,c)]=F(1122235577, 3458065414);c[AND(117,c)]=F(1756781920, 2766452331);c[AND(118,c)]=F(546432077, 2213161865);c[AND(119,c)]=F(874291324, 3541058984);c[AND(120,c)]=F(1558426518, 2832847187);c[AND(121,c)]=F(3823721592, 2266277749);c[AND(122,
c)]=F(3540974170, 3626044399);c[AND(123,c)]=F(3691772795, 2900835519);c[AND(124,c)]=F(3812411695, 2320668415);c[AND(125,c)]=F(1804891416, 3713069465);c[AND(126,c)]=F(1443913133, 2970455572);c[AND(127,c)]=F(3732110884, 2376364457);c[AND(128,c)]=F(2535403578, 3802183132);c[AND(129,c)]=F(310335944, 3041746506);c[AND(130,c)]=F(3684242592, 2433397204);c[AND(131,c)]=F(3317807769, 3893435527);c[AND(132,c)]=F(936259297, 3114748422);c[AND(133,c)]=F(3325987815, 2491798737);c[AND(134,c)]=F(1885606668, 3986877980);c[AND(135,
c)]=F(1508485334, 3189502384);c[AND(136,c)]=F(2065781726, 2551601907);c[AND(137,c)]=F(4164244222, 4082563051);c[AND(138,c)]=F(2472401918, 3266050441);c[AND(139,c)]=F(1118928075, 2612840353);c[AND(140,c)]=F(931291461, 4180544565);c[AND(141,c)]=F(745033169, 3344435652);c[AND(142,c)]=F(3173006913, 2675548521);c[AND(143,c)]=F(3358824142, 4280877634);c[AND(144,c)]=F(3546052773, 3424702107);c[AND(145,c)]=F(1118855300, 2739761686);c[AND(146,c)]=F(36090780, 2191809349);c[AND(147,c)]=F(1775732167, 3506894958);c[AND(148,
c)]=F(3138572652, 2805515966);c[AND(149,c)]=F(1651864662, 2244412773);c[AND(150,c)]=F(1783990001, 3591060437);c[AND(151,c)]=F(4004172378, 2872848349);c[AND(152,c)]=F(4062331362, 2298278679);c[AND(153,c)]=F(3922749802, 3677245887);c[AND(154,c)]=F(1420212923, 2941796710);c[AND(155,c)]=F(1136170338, 2353437368);c[AND(156,c)]=F(958879082, 3765499789);c[AND(157,c)]=F(1626096725, 3012399831);c[AND(158,c)]=F(441883920, 2409919865);c[AND(159,c)]=F(707014273, 3855871784);c[AND(160,c)]=F(1424604878, 3084697427);c[AND(161,
c)]=F(3716664280, 2467757941);c[AND(162,c)]=F(4228675929, 3948412706);c[AND(163,c)]=F(2523947284, 3158730165);c[AND(164,c)]=F(2019157827, 2526984132);c[AND(165,c)]=F(4089645983, 4043174611);c[AND(166,c)]=F(2412723327, 3234539689);c[AND(167,c)]=F(2789172121, 2587631751);c[AND(168,c)]=F(2744688475, 4140210802);c[AND(169,c)]=F(477763862, 3312168642);c[AND(170,c)]=F(2959191467, 2649734913);c[AND(171,c)]=F(3875712888, 4239575861);c[AND(172,c)]=F(2241576851, 3391660689);c[AND(173,c)]=F(2652254940, 2713328551);c[AND(174,
c)]=F(1262810493, 2170662841);c[AND(175,c)]=F(302509870, 3473060546);c[AND(176,c)]=F(3677981733, 2778448436);c[AND(177,c)]=F(2083391927, 2222758749);c[AND(178,c)]=F(756446706, 3556413999);c[AND(179,c)]=F(1464150824, 2845131199);c[AND(180,c)]=F(2030314118, 2276104959);c[AND(181,c)]=F(671522212, 3641767935);c[AND(182,c)]=F(537217769, 2913414348);c[AND(183,c)]=F(2147761134, 2330731478);c[AND(184,c)]=F(2577424355, 3729170365);c[AND(185,c)]=F(2061939484, 2983336292);c[AND(186,c)]=F(4226531965, 2386669033);c[AND(187,
c)]=F(1608490388, 3818670454);c[AND(188,c)]=F(2145785770, 3054936363);c[AND(189,c)]=F(3434615534, 2443949090);c[AND(190,c)]=F(1200417559, 3910318545);c[AND(191,c)]=F(960334047, 3128254836);c[AND(192,c)]=F(4204241074, 2502603868);c[AND(193,c)]=F(1572824964, 4004166190);c[AND(194,c)]=F(1258259971, 3203332952);c[AND(195,c)]=F(3583588354, 2562666361);c[AND(196,c)]=F(4015754449, 4100266178);c[AND(197,c)]=F(635623181, 3280212943);c[AND(198,c)]=F(2226485463, 2624170354);c[AND(199,c)]=F(985396364, 4198672567);c[AND(200,
c)]=F(3365297469, 3358938053);c[AND(201,c)]=F(115257597, 2687150443);c[AND(202,c)]=F(1810192996, 2149720354);c[AND(203,c)]=F(319328417, 3439552567);c[AND(204,c)]=F(2832443111, 2751642053);c[AND(205,c)]=F(3983941407, 2201313642);c[AND(206,c)]=F(2938332415, 3522101828);c[AND(207,c)]=F(4068652850, 2817681462);c[AND(208,c)]=F(1536935362, 2254145170);c[AND(209,c)]=F(2459096579, 3606632272);c[AND(210,c)]=F(249290345, 2885305818);c[AND(211,c)]=F(1917419194, 2308244654);c[AND(212,c)]=F(490890333, 3693191447);c[AND(213,
c)]=F(2969692644, 2954553157);c[AND(214,c)]=F(657767197, 2363642526);c[AND(215,c)]=F(3629407892, 3781828041);c[AND(216,c)]=F(2044532855, 3025462433);c[AND(217,c)]=F(3353613202, 2420369946);c[AND(218,c)]=F(3647794205, 3872591914);c[AND(219,c)]=F(3777228823, 3098073531);c[AND(220,c)]=F(2162789599, 2478458825);c[AND(221,c)]=F(3460463359, 3965534120);c[AND(222,c)]=F(2768370687, 3172427296);c[AND(223,c)]=F(1355703090, 2537941837);c[AND(224,c)]=F(3028118404, 4060706939);c[AND(225,c)]=F(3281488183, 3248565551);c[AND(226,
c)]=F(1766197087, 2598852441);c[AND(227,c)]=F(1107928421, 4158163906);c[AND(228,c)]=F(27349277, 3326531125);c[AND(229,c)]=F(21879422, 2661224900);c[AND(230,c)]=F(35007075, 4257959840);c[AND(231,c)]=F(28005660, 3406367872);c[AND(232,c)]=F(2599384905, 2725094297);c[AND(233,c)]=F(361521006, 2180075438);c[AND(234,c)]=F(4014407446, 3488120700);c[AND(235,c)]=F(3211525957, 2790496560);c[AND(236,c)]=F(2569220766, 2232397248);c[AND(237,c)]=F(3251759766, 3571835597);c[AND(238,c)]=F(883420894, 2857468478);c[AND(239,c)]
=F(2424723634, 2285974782);c[AND(240,c)]=F(443583977, 3657559652);c[AND(241,c)]=F(2931847559, 2926047721);c[AND(242,c)]=F(1486484588, 2340838177);c[AND(243,c)]=F(3237368801, 3745341083);c[AND(244,c)]=F(12914663, 2996272867);c[AND(245,c)]=F(2587312108, 2397018293);c[AND(246,c)]=F(3280705914, 3835229269);c[AND(247,c)]=F(3483558190, 3068183415);c[AND(248,c)]=F(2786846552, 2454546732);c[AND(249,c)]=F(1022980646, 3927274772);c[AND(250,c)]=F(3395364895, 3141819817);c[AND(251,c)]=F(998304997, 2513455854);c[AND(252,
c)]=F(3315274914, 4021529366);c[AND(253,c)]=F(1793226472, 3217223493);c[AND(254,c)]=F(3152568096, 2573778794);c[AND(255,c)]=F(2467128576, 4118046071);c[AND(256,c)]=F(1114709402, 3294436857);c[AND(257,c)]=F(3468747899, 2635549485);c[AND(258,c)]=F(1255029343, 4216879177);c[AND(259,c)]=F(3581003852, 3373503341);c[AND(260,c)]=F(2005809622, 2698802673);c[AND(261,c)]=F(3322634616, 2159042138);c[AND(262,c)]=F(162254630, 3454467422);c[AND(263,c)]=F(2706784082, 2763573937);c[AND(264,c)]=F(447440347, 2210859150);c[AND(265,
c)]=F(715904555, 3537374640);c[AND(266,c)]=F(572723644, 2829899712);c[AND(267,c)]=F(3035159293, 2263919769);c[AND(268,c)]=F(2279274491, 3622271631);c[AND(269,c)]=F(964426134, 2897817305);c[AND(270,c)]=F(771540907, 2318253844);c[AND(271,c)]=F(2952452370, 3709206150);c[AND(272,c)]=F(2361961896, 2967364920);c[AND(273,c)]=F(1889569516, 2373891936);c[AND(274,c)]=F(1305324308, 3798227098);c[AND(275,c)]=F(2762246365, 3038581678);c[AND(276,c)]=F(3927784010, 2430865342);c[AND(277,c)]=F(2848480580, 3889384548);c[AND(278,
c)]=F(3996771382, 3111507638);c[AND(279,c)]=F(620436728, 2489206111);c[AND(280,c)]=F(3569679143, 3982729777);c[AND(281,c)]=F(1137756396, 3186183822);c[AND(282,c)]=F(3487185494, 2548947057);c[AND(283,c)]=F(2143522954, 4078315292);c[AND(284,c)]=F(4291798741, 3262652233);c[AND(285,c)]=F(856458615, 2610121787);c[AND(286,c)]=F(2229327243, 4176194859);c[AND(287,c)]=F(2642455254, 3340955887);c[AND(288,c)]=F(395977285, 2672764710);c[AND(289,c)]=F(633563656, 4276423536);c[AND(290,c)]=F(3942824761, 3421138828);c[AND(291,
c)]=F(577279431, 2736911063);c[AND(292,c)]=F(2179810463, 2189528850);c[AND(293,c)]=F(3487696741, 3503246160);c[AND(294,c)]=F(2790157393, 2802596928);c[AND(295,c)]=F(3950112833, 2242077542);c[AND(296,c)]=F(2884206696, 3587324068);c[AND(297,c)]=F(4025352275, 2869859254);c[AND(298,c)]=F(4079275279, 2295887403);c[AND(299,c)]=F(1372879692, 3673419846);c[AND(300,c)]=F(239310294, 2938735877);c[AND(301,c)]=F(2768428613, 2350988701);c[AND(302,c)]=F(2711498862, 3761581922);c[AND(303,c)]=F(451212171, 3009265538);c[AND(304,
c)]=F(2078956655, 2407412430);c[AND(305,c)]=F(3326330649, 3851859888);c[AND(306,c)]=F(84084141, 3081487911);c[AND(307,c)]=F(3503241150, 2465190328);c[AND(308,c)]=F(451225085, 3944304526);c[AND(309,c)]=F(3796953905, 3155443620);c[AND(310,c)]=F(3037563124, 2524354896);c[AND(311,c)]=F(3142114080, 4038967834);c[AND(312,c)]=F(3372684723, 3231174267);c[AND(313,c)]=F(980160860, 2584939414);c[AND(314,c)]=F(3286244294, 4135903062);c[AND(315,c)]=F(911008517, 3308722450);c[AND(316,c)]=F(728806813, 2646977960);c[AND(317,
c)]=F(1166090902, 4235164736);c[AND(318,c)]=F(73879262, 3388131789);c[AND(319,c)]=F(918096869, 2710505431);c[AND(320,c)]=F(4170451332, 2168404344);c[AND(321,c)]=F(4095741754, 3469446951);c[AND(322,c)]=F(2417599944, 2775557561);c[AND(323,c)]=F(1075086496, 2220446049);c[AND(324,c)]=F(3438125312, 3552713678);c[AND(325,c)]=F(173519872, 2842170943);c[AND(326,c)]=F(1856802816, 2273736754);c[AND(327,c)]=F(393904128, 3637978807);c[AND(328,c)]=F(2892103680, 2910383045);c[AND(329,c)]=F(2313682944, 2328306436);c[AND(330,
c)]=F(1983905792, 3725290298);c[AND(331,c)]=F(3305111552, 2980232238);c[AND(332,c)]=F(67108864, 2384185791);c[AND(333,c)]=F(2684354560, 3814697265);c[AND(334,c)]=F(2147483648, 3051757812);c[AND(335,c)]=F(0, 2441406250);c[AND(336,c)]=F(0, 3906250000);c[AND(337,c)]=F(0, 3125000000);c[AND(338,c)]=F(0, 2500000000);c[AND(339,c)]=F(0, 4000000000);c[AND(340,c)]=F(0, 3200000000);c[AND(341,c)]=F(0, 2560000000);c[AND(342,c)]=F(0, 4096000000);c[AND(343,c)]=F(0, 3276800000);c[AND(344,c)]=F(0, 2621440000);c[AND(345,c)]=
F(0, 4194304000);c[AND(346,c)]=F(0, 3355443200);c[AND(347,c)]=F(0, 2684354560);c[AND(348,c)]=F(0, 2147483648);c[AND(349,c)]=F(3435973836, 3435973836);c[AND(350,c)]=F(1889785610, 2748779069);c[AND(351,c)]=F(2370821947, 2199023255);c[AND(352,c)]=F(3793315115, 3518437208);c[AND(353,c)]=F(457671715, 2814749767);c[AND(354,c)]=F(2943117749, 2251799813);c[AND(355,c)]=F(3849994940, 3602879701);c[AND(356,c)]=F(2221002492, 2882303761);c[AND(357,c)]=F(917808535, 2305843009);c[AND(358,c)]=F(3186480574, 3689348814);c[AND(359,
c)]=F(3408177918, 2951479051);c[AND(360,c)]=F(1867548875, 2361183241);c[AND(361,c)]=F(1270091283, 3777893186);c[AND(362,c)]=F(157079567, 3022314549);c[AND(363,c)]=F(984657113, 2417851639);c[AND(364,c)]=F(3293438299, 3868562622);c[AND(365,c)]=F(916763721, 3094850098);c[AND(366,c)]=F(2451397895, 2475880078);c[AND(367,c)]=F(3063243173, 3961408125);c[AND(368,c)]=F(2450594538, 3169126500);c[AND(369,c)]=F(1960475630, 2535301200);c[AND(370,c)]=F(3136761009, 4056481920);c[AND(371,c)]=F(2509408807, 3245185536);c[AND(372,
c)]=F(1148533586, 2596148429);c[AND(373,c)]=F(3555640657, 4153837486);c[AND(374,c)]=F(1985519066, 3323069989);c[AND(375,c)]=F(2447408712, 2658455991);c[AND(376,c)]=F(2197867021, 4253529586);c[AND(377,c)]=F(899300158, 3402823669);c[AND(378,c)]=F(1578433585, 2722258935);c[AND(379,c)]=F(1262746868, 2177807148);c[AND(380,c)]=F(1161401530, 3484491437);c[AND(381,c)]=F(3506101601, 2787593149);c[AND(382,c)]=F(3663874740, 2230074519);c[AND(383,c)]=F(3285219207, 3568119231);c[AND(384,c)]=F(1769181906, 2854495385);c[AND(385,
c)]=F(1415345525, 2283596308);c[AND(386,c)]=F(1405559381, 3653754093);c[AND(387,c)]=F(2842434423, 2923003274);c[AND(388,c)]=F(3132940998, 2338402619);c[AND(389,c)]=F(2435725219, 3741444191);c[AND(390,c)]=F(1089586716, 2993155353);c[AND(391,c)]=F(2589656291, 2394524282);c[AND(392,c)]=F(707476229, 3831238852);c[AND(393,c)]=F(3142961361, 3064991081);c[AND(394,c)]=F(1655375629, 2451992865);c[AND(395,c)]=F(2648601007, 3923188584);c[AND(396,c)]=F(2977874265, 3138550867);c[AND(397,c)]=F(664312493, 2510840694);c[AND(398,
c)]=F(2780886908, 4017345110);c[AND(399,c)]=F(2224709526, 3213876088);c[AND(400,c)]=F(3497754539, 2571100870);c[AND(401,c)]=F(1301439967, 4113761393);c[AND(402,c)]=F(2759138892, 3291009114);c[AND(403,c)]=F(3066304573, 2632807291);c[AND(404,c)]=F(3188100398, 4212491666);c[AND(405,c)]=F(1691486859, 3369993333);c[AND(406,c)]=F(3071176406, 2695994666);c[AND(407,c)]=F(1597947665, 2156795733);c[AND(408,c)]=F(1697722806, 3450873173);c[AND(409,c)]=F(3076165163, 2760698538);c[AND(410,c)]=F(4178919049, 2208558830);c[AND(411,
c)]=F(2391303182, 3533694129);c[AND(412,c)]=F(2772036005, 2826955303);c[AND(413,c)]=F(3935615722, 2261564242);c[AND(414,c)]=F(2861011319, 3618502788);c[AND(415,c)]=F(4006795973, 2894802230);c[AND(416,c)]=F(3205436779, 2315841784);c[AND(417,c)]=F(2551718468, 3705346855);c[AND(418,c)]=F(2041374775, 2964277484);c[AND(419,c)]=F(2492093279, 2371421987);c[AND(420,c)]=F(551375410, 3794275180);c[AND(421,c)]=F(441100328, 3035420144);c[AND(422,c)]=F(1211873721, 2428336115);c[AND(423,c)]=F(1938997954, 3885337784);c[AND(424,
c)]=F(2410191822, 3108270227);c[AND(425,c)]=F(210166539, 2486616182);c[AND(426,c)]=F(1195259923, 3978585891);c[AND(427,c)]=F(97214479, 3182868713);c[AND(428,c)]=F(1795758501, 2546294970);c[AND(429,c)]=F(2873213602, 4074071952);c[AND(430,c)]=F(580583963, 3259257562);c[AND(431,c)]=F(3041447548, 2607406049);c[AND(432,c)]=F(2289335700, 4171849679);c[AND(433,c)]=F(2690462019, 3337479743);c[AND(434,c)]=F(3870356534, 2669983794);c[AND(435,c)]=F(3615590076, 4271974071);c[AND(436,c)]=F(2033478602, 3417579257);c[AND(437,
c)]=F(4203763259, 2734063405);c[AND(438,c)]=F(3363010607, 2187250724);c[AND(439,c)]=F(2803836594, 3499601159);c[AND(440,c)]=F(3102062734, 2799680927);c[AND(441,c)]=F(763663269, 2239744742);c[AND(442,c)]=F(2080854690, 3583591587);c[AND(443,c)]=F(4241664129, 2866873269);c[AND(444,c)]=F(4252324763, 2293498615);c[AND(445,c)]=F(2508752324, 3669597785);c[AND(446,c)]=F(2007001859, 2935678228);c[AND(447,c)]=F(3323588406, 2348542582);c[AND(448,c)]=F(1881767613, 3757668132);c[AND(449,c)]=F(4082394468, 3006134505);c[AND(450,
c)]=F(3265915574, 2404907604);c[AND(451,c)]=F(2648484541, 3847852167);c[AND(452,c)]=F(400800715, 3078281734);c[AND(453,c)]=F(1179634031, 2462625387);c[AND(454,c)]=F(2746407909, 3940200619);c[AND(455,c)]=F(3056119786, 3152160495);c[AND(456,c)]=F(2444895829, 2521728396);c[AND(457,c)]=F(2193846408, 4034765434);c[AND(458,c)]=F(2614070585, 3227812347);c[AND(459,c)]=F(373269550, 2582249878);c[AND(460,c)]=F(4033205117, 4131599804);c[AND(461,c)]=F(4085557553, 3305279843);c[AND(462,c)]=F(691465664, 2644223875);c[AND(463,
c)]=F(1106345063, 4230758200);c[AND(464,c)]=F(885076050, 3384606560);c[AND(465,c)]=F(708060840, 2707685248);c[AND(466,c)]=F(2284435591, 2166148198);c[AND(467,c)]=F(2796103486, 3465837117);c[AND(468,c)]=F(518895870, 2772669694);c[AND(469,c)]=F(1274110155, 2218135755);c[AND(470,c)]=F(2038576249, 3549017208);c[AND(471,c)]=F(3348847917, 2839213766);c[AND(472,c)]=F(1820084875, 2271371013);c[AND(473,c)]=F(2053142340, 3634193621);c[AND(474,c)]=F(783520413, 2907354897);c[AND(475,c)]=F(3203796708, 2325883917);c[AND(476,
c)]=F(1690100896, 3721414268);c[AND(477,c)]=F(3070067635, 2977131414);c[AND(478,c)]=F(3315047567, 2381705131);c[AND(479,c)]=F(3586089190, 3810728210);c[AND(480,c)]=F(2868871352, 3048582568);c[AND(481,c)]=F(4013084000, 2438866054);c[AND(482,c)]=F(3843954022, 3902185687);c[AND(483,c)]=F(1357176299, 3121748550);c[AND(484,c)]=F(1085741039, 2497398840);c[AND(485,c)]=F(1737185663, 3995838144);c[AND(486,c)]=F(2248741989, 3196670515);c[AND(487,c)]=F(1798993591, 2557336412);c[AND(488,c)]=F(3737383206, 4091738259);c[AND(489,
c)]=F(3848900024, 3273390607);c[AND(490,c)]=F(1361133101, 2618712486);c[AND(491,c)]=F(459826043, 4189939978);c[AND(492,c)]=F(2085847752, 3351951982);c[AND(493,c)]=F(4245658579, 2681561585);c[AND(494,c)]=F(2498086431, 4290498537);c[AND(495,c)]=F(280482227, 3432398830);c[AND(496,c)]=F(224385781, 2745919064);c[AND(497,c)]=F(1038502084, 2196735251);c[AND(498,c)]=F(4238583712, 3514776401);c[AND(499,c)]=F(2531873511, 2811821121);c[AND(500,c)]=F(1166505349, 2249456897);c[AND(501,c)]=F(2725402018, 3599131035);c[AND(502,
c)]=F(2180321615, 2879304828);c[AND(503,c)]=F(3462244210, 2303443862);c[AND(504,c)]=F(2103616899, 3685510180);c[AND(505,c)]=F(1682893519, 2948408144);c[AND(506,c)]=F(2205308275, 2358726515);c[AND(507,c)]=F(3528493240, 3773962424);c[AND(508,c)]=F(3681788051, 3019169939);c[AND(509,c)]=F(3804423900, 2415335951);c[AND(510,c)]=F(74124026, 3864537523);c[AND(511,c)]=F(1777286139, 3091630018);c[AND(512,c)]=F(3139815829, 2473304014);c[AND(513,c)]=F(2446724950, 3957286423);c[AND(514,c)]=F(3675366878, 3165829138);c[AND(515,
c)]=F(363313125, 2532663311);c[AND(516,c)]=F(3158281377, 4052261297);c[AND(517,c)]=F(808638183, 3241809038);c[AND(518,c)]=F(2364897465, 2593447230);c[AND(519,c)]=F(3783835944, 4149515568);c[AND(520,c)]=F(450088378, 3319612455);c[AND(521,c)]=F(360070702, 2655689964);c[AND(522,c)]=F(2294100042, 4249103942);c[AND(523,c)]=F(117293115, 3399283154);c[AND(524,c)]=F(952827951, 2719426523);c[AND(525,c)]=F(2480249279, 2175541218);c[AND(526,c)]=F(3109405388, 3480865949);c[AND(527,c)]=F(3346517769, 2784692759);c[AND(528,
c)]=F(3536207675, 2227754207);c[AND(529,c)]=F(2221958443, 3564406732);c[AND(530,c)]=F(59579836, 2851525386);c[AND(531,c)]=F(3483637705, 2281220308);c[AND(532,c)]=F(419859574, 3649952494);c[AND(533,c)]=F(1194881118, 2919961995);c[AND(534,c)]=F(955904894, 2335969596);c[AND(535,c)]=F(4106428209, 3737551353);c[AND(536,c)]=F(708162189, 2990041083);c[AND(537,c)]=F(2284516670, 2392032866);c[AND(538,c)]=F(1937239754, 3827252586);c[AND(539,c)]=F(690798344, 3061802069);c[AND(540,c)]=F(1411632134, 2449441655);c[AND(541,
c)]=F(2258611415, 3919106648);c[AND(542,c)]=F(3524876050, 3135285318);c[AND(543,c)]=F(242920462, 2508228255);c[AND(544,c)]=F(388672740, 4013165208);c[AND(545,c)]=F(2028925110, 3210532166);c[AND(546,c)]=F(764146629, 2568425733);c[AND(547,c)]=F(363641147, 4109481173);c[AND(548,c)]=F(2008899836, 3287584938);c[AND(549,c)]=F(3325106787, 2630067950);c[AND(550,c)]=F(1025203564, 4208108721);c[AND(551,c)]=F(4256136688, 3366486976);c[AND(552,c)]=F(2545915891, 2693189581);c[AND(553,c)]=F(1177739254, 2154551665);c[AND(554,
c)]=F(1884382806, 3447282664);c[AND(555,c)]=F(2366499704, 2757826131);c[AND(556,c)]=F(1034206304, 2206260905);c[AND(557,c)]=F(1654730086, 3530017448);c[AND(558,c)]=F(3041770987, 2824013958);c[AND(559,c)]=F(4151403708, 2259211166);c[AND(560,c)]=F(629291719, 3614737867);c[AND(561,c)]=F(3080413753, 2891790293);c[AND(562,c)]=F(4182317920, 2313432234);c[AND(563,c)]=F(4114728295, 3701491575);c[AND(564,c)]=F(3291782636, 2961193260);c[AND(565,c)]=F(2633426109, 2368954608);c[AND(566,c)]=F(3354488315, 3790327373);c[AND(567,
c)]=F(106610275, 3032261899);c[AND(568,c)]=F(944281679, 2425809519);c[AND(569,c)]=F(3228837605, 3881295230);c[AND(570,c)]=F(2583070084, 3105036184);c[AND(571,c)]=F(2925449526, 2484028947);c[AND(572,c)]=F(1244745405, 3974446316);c[AND(573,c)]=F(136802865, 3179557053);c[AND(574,c)]=F(1827429210, 2543645642);c[AND(575,c)]=F(3782880196, 4069833027);c[AND(576,c)]=F(1308317238, 3255866422);c[AND(577,c)]=F(3623634168, 2604693137);c[AND(578,c)]=F(2361840832, 4167509020);c[AND(579,c)]=F(1889472666, 3334007216);c[AND(580,
c)]=F(652584673, 2667205773);c[AND(581,c)]=F(185142018, 4267529237);c[AND(582,c)]=F(2725093992, 3414023389);c[AND(583,c)]=F(3039068653, 2731218711);c[AND(584,c)]=F(1572261463, 2184974969);c[AND(585,c)]=F(4233605259, 3495959950);c[AND(586,c)]=F(3386884207, 2796767960);c[AND(587,c)]=F(2709507366, 2237414368);c[AND(588,c)]=F(3476218326, 3579862989);c[AND(589,c)]=F(3639968120, 2863890391);c[AND(590,c)]=F(2052981037, 2291112313);c[AND(591,c)]=F(2425776200, 3665779701);c[AND(592,c)]=F(1081627501, 2932623761);c[AND(593,
c)]=F(6308541, 2346099009);c[AND(594,c)]=F(1728080585, 3753758414);c[AND(595,c)]=F(2241457927, 3003006731);c[AND(596,c)]=F(934172882, 2402405385);c[AND(597,c)]=F(1494676612, 3843848616);c[AND(598,c)]=F(336747830, 3075078893);c[AND(599,c)]=F(1987385183, 2460063114);c[AND(600,c)]=F(602835915, 3936100983);c[AND(601,c)]=F(2200255650, 3148880786);c[AND(602,c)]=F(901211061, 2519104629);c[AND(603,c)]=F(3159924616, 4030567406);c[AND(604,c)]=F(1668946233, 3224453925);c[AND(605,c)]=F(1335156987, 2579563140);c[AND(606,
c)]=F(2136251179, 4127301024);c[AND(607,c)]=F(2567994402, 3301840819);c[AND(608,c)]=F(2913388981, 2641472655);c[AND(609,c)]=F(366455074, 4226356249);c[AND(610,c)]=F(1152157518, 3381084999);c[AND(611,c)]=F(1780719474, 2704867999);c[AND(612,c)]=F(2283569038, 2163894399);c[AND(613,c)]=F(1076730083, 3462231039);c[AND(614,c)]=F(1720377526, 2769784831);c[AND(615,c)]=F(517308561, 2215827865);c[AND(616,c)]=F(827693699, 3545324584);c[AND(617,c)]=F(1521148418, 2836259667);c[AND(618,c)]=F(3793899112, 2269007733);c[AND(619,
c)]=F(916277824, 3630412374);c[AND(620,c)]=F(1592015718, 2904329899);c[AND(621,c)]=F(2132606034, 2323463919);c[AND(622,c)]=F(835189277, 3717542271);c[AND(623,c)]=F(4104125258, 2974033816);c[AND(624,c)]=F(2424306747, 2379227053);c[AND(625,c)]=F(3019897337, 3806763285);c[AND(626,c)]=F(2415917869, 3045410628);c[AND(627,c)]=F(3650721214, 2436328502);c[AND(628,c)]=F(2405180105, 3898125604);c[AND(629,c)]=F(2783137543, 3118500483);c[AND(630,c)]=F(3944496953, 2494800386);c[AND(631,c)]=F(298240911, 3991680619);c[AND(632,
c)]=F(1097586188, 3193344495);c[AND(633,c)]=F(878068950, 2554675596);c[AND(634,c)]=F(3981890698, 4087480953);c[AND(635,c)]=F(608532181, 3269984763);c[AND(636,c)]=F(2204812663, 2615987810);c[AND(637,c)]=F(3527700261, 4185580496);c[AND(638,c)]=F(1963166749, 3348464397);c[AND(639,c)]=F(4147513777, 2678771517);c[AND(640,c)]=F(3200048207, 4286034428);c[AND(641,c)]=F(4278025484, 3428827542);c[AND(642,c)]=F(1704433468, 2743062034);c[AND(643,c)]=F(2222540234, 2194449627);c[AND(644,c)]=F(120090538, 3511119404);c[AND(645,
c)]=F(955065889, 2808895523);c[AND(646,c)]=F(2482039630, 2247116418);c[AND(647,c)]=F(3112269949, 3595386269);c[AND(648,c)]=F(3348809418, 2876309015);c[AND(649,c)]=F(2679047534, 2301047212);c[AND(650,c)]=F(850502218, 3681675540);c[AND(651,c)]=F(680401775, 2945340432);c[AND(652,c)]=F(3121301797, 2356272345);c[AND(653,c)]=F(699115580, 3770035753);c[AND(654,c)]=F(2277279382, 3016028602);c[AND(655,c)]=F(103836587, 2412822882);c[AND(656,c)]=F(1025131999, 3860516611);c[AND(657,c)]=F(4256079436, 3088413288);c[AND(658,
c)]=F(827883168, 2470730631);c[AND(659,c)]=F(3901593088, 3953169009);AUI=b;b=AD1(660);c=b.data;c[AND(0,c)]=(-70);c[AND(1,c)]=(-66);c[AND(2,c)]=(-63);c[AND(3,c)]=(-60);c[AND(4,c)]=(-56);c[AND(5,c)]=(-53);c[AND(6,c)]=(-50);c[AND(7,c)]=(-46);c[AND(8,c)]=(-43);c[AND(9,c)]=(-40);c[AND(10,c)]=(-36);c[AND(11,c)]=(-33);c[AND(12,c)]=(-30);c[AND(13,c)]=(-26);c[AND(14,c)]=(-23);c[AND(15,c)]=(-20);c[AND(16,c)]=(-16);c[AND(17,c)]=(-13);c[AND(18,c)]=(-10);c[AND(19,c)]=(-6);c[AND(20,c)]=(-3);c[AND(21,c)]=0;c[AND(22,c)]=4;c[AND(23,
c)]=7;c[AND(24,c)]=10;c[AND(25,c)]=14;c[AND(26,c)]=17;c[AND(27,c)]=20;c[AND(28,c)]=23;c[AND(29,c)]=27;c[AND(30,c)]=30;c[AND(31,c)]=33;c[AND(32,c)]=37;c[AND(33,c)]=40;c[AND(34,c)]=43;c[AND(35,c)]=47;c[AND(36,c)]=50;c[AND(37,c)]=53;c[AND(38,c)]=57;c[AND(39,c)]=60;c[AND(40,c)]=63;c[AND(41,c)]=67;c[AND(42,c)]=70;c[AND(43,c)]=73;c[AND(44,c)]=77;c[AND(45,c)]=80;c[AND(46,c)]=83;c[AND(47,c)]=87;c[AND(48,c)]=90;c[AND(49,c)]=93;c[AND(50,c)]=97;c[AND(51,c)]=100;c[AND(52,c)]=103;c[AND(53,c)]=107;c[AND(54,c)]=110;c[AND(55,
c)]=113;c[AND(56,c)]=116;c[AND(57,c)]=120;c[AND(58,c)]=123;c[AND(59,c)]=126;c[AND(60,c)]=130;c[AND(61,c)]=133;c[AND(62,c)]=136;c[AND(63,c)]=140;c[AND(64,c)]=143;c[AND(65,c)]=146;c[AND(66,c)]=150;c[AND(67,c)]=153;c[AND(68,c)]=156;c[AND(69,c)]=160;c[AND(70,c)]=163;c[AND(71,c)]=166;c[AND(72,c)]=170;c[AND(73,c)]=173;c[AND(74,c)]=176;c[AND(75,c)]=180;c[AND(76,c)]=183;c[AND(77,c)]=186;c[AND(78,c)]=190;c[AND(79,c)]=193;c[AND(80,c)]=196;c[AND(81,c)]=200;c[AND(82,c)]=203;c[AND(83,c)]=206;c[AND(84,c)]=210;c[AND(85,c)]
=213;c[AND(86,c)]=216;c[AND(87,c)]=219;c[AND(88,c)]=223;c[AND(89,c)]=226;c[AND(90,c)]=229;c[AND(91,c)]=233;c[AND(92,c)]=236;c[AND(93,c)]=239;c[AND(94,c)]=243;c[AND(95,c)]=246;c[AND(96,c)]=249;c[AND(97,c)]=253;c[AND(98,c)]=256;c[AND(99,c)]=259;c[AND(100,c)]=263;c[AND(101,c)]=266;c[AND(102,c)]=269;c[AND(103,c)]=273;c[AND(104,c)]=276;c[AND(105,c)]=279;c[AND(106,c)]=283;c[AND(107,c)]=286;c[AND(108,c)]=289;c[AND(109,c)]=293;c[AND(110,c)]=296;c[AND(111,c)]=299;c[AND(112,c)]=303;c[AND(113,c)]=306;c[AND(114,c)]=309;c[AND(115,
c)]=312;c[AND(116,c)]=316;c[AND(117,c)]=319;c[AND(118,c)]=322;c[AND(119,c)]=326;c[AND(120,c)]=329;c[AND(121,c)]=332;c[AND(122,c)]=336;c[AND(123,c)]=339;c[AND(124,c)]=342;c[AND(125,c)]=346;c[AND(126,c)]=349;c[AND(127,c)]=352;c[AND(128,c)]=356;c[AND(129,c)]=359;c[AND(130,c)]=362;c[AND(131,c)]=366;c[AND(132,c)]=369;c[AND(133,c)]=372;c[AND(134,c)]=376;c[AND(135,c)]=379;c[AND(136,c)]=382;c[AND(137,c)]=386;c[AND(138,c)]=389;c[AND(139,c)]=392;c[AND(140,c)]=396;c[AND(141,c)]=399;c[AND(142,c)]=402;c[AND(143,c)]=406;c[AND(144,
c)]=409;c[AND(145,c)]=412;c[AND(146,c)]=415;c[AND(147,c)]=419;c[AND(148,c)]=422;c[AND(149,c)]=425;c[AND(150,c)]=429;c[AND(151,c)]=432;c[AND(152,c)]=435;c[AND(153,c)]=439;c[AND(154,c)]=442;c[AND(155,c)]=445;c[AND(156,c)]=449;c[AND(157,c)]=452;c[AND(158,c)]=455;c[AND(159,c)]=459;c[AND(160,c)]=462;c[AND(161,c)]=465;c[AND(162,c)]=469;c[AND(163,c)]=472;c[AND(164,c)]=475;c[AND(165,c)]=479;c[AND(166,c)]=482;c[AND(167,c)]=485;c[AND(168,c)]=489;c[AND(169,c)]=492;c[AND(170,c)]=495;c[AND(171,c)]=499;c[AND(172,c)]=502;c[AND(173,
c)]=505;c[AND(174,c)]=508;c[AND(175,c)]=512;c[AND(176,c)]=515;c[AND(177,c)]=518;c[AND(178,c)]=522;c[AND(179,c)]=525;c[AND(180,c)]=528;c[AND(181,c)]=532;c[AND(182,c)]=535;c[AND(183,c)]=538;c[AND(184,c)]=542;c[AND(185,c)]=545;c[AND(186,c)]=548;c[AND(187,c)]=552;c[AND(188,c)]=555;c[AND(189,c)]=558;c[AND(190,c)]=562;c[AND(191,c)]=565;c[AND(192,c)]=568;c[AND(193,c)]=572;c[AND(194,c)]=575;c[AND(195,c)]=578;c[AND(196,c)]=582;c[AND(197,c)]=585;c[AND(198,c)]=588;c[AND(199,c)]=592;c[AND(200,c)]=595;c[AND(201,c)]=598;c[AND(202,
c)]=601;c[AND(203,c)]=605;c[AND(204,c)]=608;c[AND(205,c)]=611;c[AND(206,c)]=615;c[AND(207,c)]=618;c[AND(208,c)]=621;c[AND(209,c)]=625;c[AND(210,c)]=628;c[AND(211,c)]=631;c[AND(212,c)]=635;c[AND(213,c)]=638;c[AND(214,c)]=641;c[AND(215,c)]=645;c[AND(216,c)]=648;c[AND(217,c)]=651;c[AND(218,c)]=655;c[AND(219,c)]=658;c[AND(220,c)]=661;c[AND(221,c)]=665;c[AND(222,c)]=668;c[AND(223,c)]=671;c[AND(224,c)]=675;c[AND(225,c)]=678;c[AND(226,c)]=681;c[AND(227,c)]=685;c[AND(228,c)]=688;c[AND(229,c)]=691;c[AND(230,c)]=695;c[AND(231,
c)]=698;c[AND(232,c)]=701;c[AND(233,c)]=704;c[AND(234,c)]=708;c[AND(235,c)]=711;c[AND(236,c)]=714;c[AND(237,c)]=718;c[AND(238,c)]=721;c[AND(239,c)]=724;c[AND(240,c)]=728;c[AND(241,c)]=731;c[AND(242,c)]=734;c[AND(243,c)]=738;c[AND(244,c)]=741;c[AND(245,c)]=744;c[AND(246,c)]=748;c[AND(247,c)]=751;c[AND(248,c)]=754;c[AND(249,c)]=758;c[AND(250,c)]=761;c[AND(251,c)]=764;c[AND(252,c)]=768;c[AND(253,c)]=771;c[AND(254,c)]=774;c[AND(255,c)]=778;c[AND(256,c)]=781;c[AND(257,c)]=784;c[AND(258,c)]=788;c[AND(259,c)]=791;c[AND(260,
c)]=794;c[AND(261,c)]=797;c[AND(262,c)]=801;c[AND(263,c)]=804;c[AND(264,c)]=807;c[AND(265,c)]=811;c[AND(266,c)]=814;c[AND(267,c)]=817;c[AND(268,c)]=821;c[AND(269,c)]=824;c[AND(270,c)]=827;c[AND(271,c)]=831;c[AND(272,c)]=834;c[AND(273,c)]=837;c[AND(274,c)]=841;c[AND(275,c)]=844;c[AND(276,c)]=847;c[AND(277,c)]=851;c[AND(278,c)]=854;c[AND(279,c)]=857;c[AND(280,c)]=861;c[AND(281,c)]=864;c[AND(282,c)]=867;c[AND(283,c)]=871;c[AND(284,c)]=874;c[AND(285,c)]=877;c[AND(286,c)]=881;c[AND(287,c)]=884;c[AND(288,c)]=887;c[AND(289,
c)]=891;c[AND(290,c)]=894;c[AND(291,c)]=897;c[AND(292,c)]=900;c[AND(293,c)]=904;c[AND(294,c)]=907;c[AND(295,c)]=910;c[AND(296,c)]=914;c[AND(297,c)]=917;c[AND(298,c)]=920;c[AND(299,c)]=924;c[AND(300,c)]=927;c[AND(301,c)]=930;c[AND(302,c)]=934;c[AND(303,c)]=937;c[AND(304,c)]=940;c[AND(305,c)]=944;c[AND(306,c)]=947;c[AND(307,c)]=950;c[AND(308,c)]=954;c[AND(309,c)]=957;c[AND(310,c)]=960;c[AND(311,c)]=964;c[AND(312,c)]=967;c[AND(313,c)]=970;c[AND(314,c)]=974;c[AND(315,c)]=977;c[AND(316,c)]=980;c[AND(317,c)]=984;c[AND(318,
c)]=987;c[AND(319,c)]=990;c[AND(320,c)]=993;c[AND(321,c)]=997;c[AND(322,c)]=1000;c[AND(323,c)]=1003;c[AND(324,c)]=1007;c[AND(325,c)]=1010;c[AND(326,c)]=1013;c[AND(327,c)]=1017;c[AND(328,c)]=1020;c[AND(329,c)]=1023;c[AND(330,c)]=1027;c[AND(331,c)]=1030;c[AND(332,c)]=1033;c[AND(333,c)]=1037;c[AND(334,c)]=1040;c[AND(335,c)]=1043;c[AND(336,c)]=1047;c[AND(337,c)]=1050;c[AND(338,c)]=1053;c[AND(339,c)]=1057;c[AND(340,c)]=1060;c[AND(341,c)]=1063;c[AND(342,c)]=1067;c[AND(343,c)]=1070;c[AND(344,c)]=1073;c[AND(345,c)]
=1077;c[AND(346,c)]=1080;c[AND(347,c)]=1083;c[AND(348,c)]=1086;c[AND(349,c)]=1090;c[AND(350,c)]=1093;c[AND(351,c)]=1096;c[AND(352,c)]=1100;c[AND(353,c)]=1103;c[AND(354,c)]=1106;c[AND(355,c)]=1110;c[AND(356,c)]=1113;c[AND(357,c)]=1116;c[AND(358,c)]=1120;c[AND(359,c)]=1123;c[AND(360,c)]=1126;c[AND(361,c)]=1130;c[AND(362,c)]=1133;c[AND(363,c)]=1136;c[AND(364,c)]=1140;c[AND(365,c)]=1143;c[AND(366,c)]=1146;c[AND(367,c)]=1150;c[AND(368,c)]=1153;c[AND(369,c)]=1156;c[AND(370,c)]=1160;c[AND(371,c)]=1163;c[AND(372,c)]
=1166;c[AND(373,c)]=1170;c[AND(374,c)]=1173;c[AND(375,c)]=1176;c[AND(376,c)]=1180;c[AND(377,c)]=1183;c[AND(378,c)]=1186;c[AND(379,c)]=1189;c[AND(380,c)]=1193;c[AND(381,c)]=1196;c[AND(382,c)]=1199;c[AND(383,c)]=1203;c[AND(384,c)]=1206;c[AND(385,c)]=1209;c[AND(386,c)]=1213;c[AND(387,c)]=1216;c[AND(388,c)]=1219;c[AND(389,c)]=1223;c[AND(390,c)]=1226;c[AND(391,c)]=1229;c[AND(392,c)]=1233;c[AND(393,c)]=1236;c[AND(394,c)]=1239;c[AND(395,c)]=1243;c[AND(396,c)]=1246;c[AND(397,c)]=1249;c[AND(398,c)]=1253;c[AND(399,c)]
=1256;c[AND(400,c)]=1259;c[AND(401,c)]=1263;c[AND(402,c)]=1266;c[AND(403,c)]=1269;c[AND(404,c)]=1273;c[AND(405,c)]=1276;c[AND(406,c)]=1279;c[AND(407,c)]=1282;c[AND(408,c)]=1286;c[AND(409,c)]=1289;c[AND(410,c)]=1292;c[AND(411,c)]=1296;c[AND(412,c)]=1299;c[AND(413,c)]=1302;c[AND(414,c)]=1306;c[AND(415,c)]=1309;c[AND(416,c)]=1312;c[AND(417,c)]=1316;c[AND(418,c)]=1319;c[AND(419,c)]=1322;c[AND(420,c)]=1326;c[AND(421,c)]=1329;c[AND(422,c)]=1332;c[AND(423,c)]=1336;c[AND(424,c)]=1339;c[AND(425,c)]=1342;c[AND(426,c)]
=1346;c[AND(427,c)]=1349;c[AND(428,c)]=1352;c[AND(429,c)]=1356;c[AND(430,c)]=1359;c[AND(431,c)]=1362;c[AND(432,c)]=1366;c[AND(433,c)]=1369;c[AND(434,c)]=1372;c[AND(435,c)]=1376;c[AND(436,c)]=1379;c[AND(437,c)]=1382;c[AND(438,c)]=1385;c[AND(439,c)]=1389;c[AND(440,c)]=1392;c[AND(441,c)]=1395;c[AND(442,c)]=1399;c[AND(443,c)]=1402;c[AND(444,c)]=1405;c[AND(445,c)]=1409;c[AND(446,c)]=1412;c[AND(447,c)]=1415;c[AND(448,c)]=1419;c[AND(449,c)]=1422;c[AND(450,c)]=1425;c[AND(451,c)]=1429;c[AND(452,c)]=1432;c[AND(453,c)]
=1435;c[AND(454,c)]=1439;c[AND(455,c)]=1442;c[AND(456,c)]=1445;c[AND(457,c)]=1449;c[AND(458,c)]=1452;c[AND(459,c)]=1455;c[AND(460,c)]=1459;c[AND(461,c)]=1462;c[AND(462,c)]=1465;c[AND(463,c)]=1469;c[AND(464,c)]=1472;c[AND(465,c)]=1475;c[AND(466,c)]=1478;c[AND(467,c)]=1482;c[AND(468,c)]=1485;c[AND(469,c)]=1488;c[AND(470,c)]=1492;c[AND(471,c)]=1495;c[AND(472,c)]=1498;c[AND(473,c)]=1502;c[AND(474,c)]=1505;c[AND(475,c)]=1508;c[AND(476,c)]=1512;c[AND(477,c)]=1515;c[AND(478,c)]=1518;c[AND(479,c)]=1522;c[AND(480,c)]
=1525;c[AND(481,c)]=1528;c[AND(482,c)]=1532;c[AND(483,c)]=1535;c[AND(484,c)]=1538;c[AND(485,c)]=1542;c[AND(486,c)]=1545;c[AND(487,c)]=1548;c[AND(488,c)]=1552;c[AND(489,c)]=1555;c[AND(490,c)]=1558;c[AND(491,c)]=1562;c[AND(492,c)]=1565;c[AND(493,c)]=1568;c[AND(494,c)]=1572;c[AND(495,c)]=1575;c[AND(496,c)]=1578;c[AND(497,c)]=1581;c[AND(498,c)]=1585;c[AND(499,c)]=1588;c[AND(500,c)]=1591;c[AND(501,c)]=1595;c[AND(502,c)]=1598;c[AND(503,c)]=1601;c[AND(504,c)]=1605;c[AND(505,c)]=1608;c[AND(506,c)]=1611;c[AND(507,c)]
=1615;c[AND(508,c)]=1618;c[AND(509,c)]=1621;c[AND(510,c)]=1625;c[AND(511,c)]=1628;c[AND(512,c)]=1631;c[AND(513,c)]=1635;c[AND(514,c)]=1638;c[AND(515,c)]=1641;c[AND(516,c)]=1645;c[AND(517,c)]=1648;c[AND(518,c)]=1651;c[AND(519,c)]=1655;c[AND(520,c)]=1658;c[AND(521,c)]=1661;c[AND(522,c)]=1665;c[AND(523,c)]=1668;c[AND(524,c)]=1671;c[AND(525,c)]=1674;c[AND(526,c)]=1678;c[AND(527,c)]=1681;c[AND(528,c)]=1684;c[AND(529,c)]=1688;c[AND(530,c)]=1691;c[AND(531,c)]=1694;c[AND(532,c)]=1698;c[AND(533,c)]=1701;c[AND(534,c)]
=1704;c[AND(535,c)]=1708;c[AND(536,c)]=1711;c[AND(537,c)]=1714;c[AND(538,c)]=1718;c[AND(539,c)]=1721;c[AND(540,c)]=1724;c[AND(541,c)]=1728;c[AND(542,c)]=1731;c[AND(543,c)]=1734;c[AND(544,c)]=1738;c[AND(545,c)]=1741;c[AND(546,c)]=1744;c[AND(547,c)]=1748;c[AND(548,c)]=1751;c[AND(549,c)]=1754;c[AND(550,c)]=1758;c[AND(551,c)]=1761;c[AND(552,c)]=1764;c[AND(553,c)]=1767;c[AND(554,c)]=1771;c[AND(555,c)]=1774;c[AND(556,c)]=1777;c[AND(557,c)]=1781;c[AND(558,c)]=1784;c[AND(559,c)]=1787;c[AND(560,c)]=1791;c[AND(561,c)]
=1794;c[AND(562,c)]=1797;c[AND(563,c)]=1801;c[AND(564,c)]=1804;c[AND(565,c)]=1807;c[AND(566,c)]=1811;c[AND(567,c)]=1814;c[AND(568,c)]=1817;c[AND(569,c)]=1821;c[AND(570,c)]=1824;c[AND(571,c)]=1827;c[AND(572,c)]=1831;c[AND(573,c)]=1834;c[AND(574,c)]=1837;c[AND(575,c)]=1841;c[AND(576,c)]=1844;c[AND(577,c)]=1847;c[AND(578,c)]=1851;c[AND(579,c)]=1854;c[AND(580,c)]=1857;c[AND(581,c)]=1861;c[AND(582,c)]=1864;c[AND(583,c)]=1867;c[AND(584,c)]=1870;c[AND(585,c)]=1874;c[AND(586,c)]=1877;c[AND(587,c)]=1880;c[AND(588,c)]
=1884;c[AND(589,c)]=1887;c[AND(590,c)]=1890;c[AND(591,c)]=1894;c[AND(592,c)]=1897;c[AND(593,c)]=1900;c[AND(594,c)]=1904;c[AND(595,c)]=1907;c[AND(596,c)]=1910;c[AND(597,c)]=1914;c[AND(598,c)]=1917;c[AND(599,c)]=1920;c[AND(600,c)]=1924;c[AND(601,c)]=1927;c[AND(602,c)]=1930;c[AND(603,c)]=1934;c[AND(604,c)]=1937;c[AND(605,c)]=1940;c[AND(606,c)]=1944;c[AND(607,c)]=1947;c[AND(608,c)]=1950;c[AND(609,c)]=1954;c[AND(610,c)]=1957;c[AND(611,c)]=1960;c[AND(612,c)]=1963;c[AND(613,c)]=1967;c[AND(614,c)]=1970;c[AND(615,c)]
=1973;c[AND(616,c)]=1977;c[AND(617,c)]=1980;c[AND(618,c)]=1983;c[AND(619,c)]=1987;c[AND(620,c)]=1990;c[AND(621,c)]=1993;c[AND(622,c)]=1997;c[AND(623,c)]=2000;c[AND(624,c)]=2003;c[AND(625,c)]=2007;c[AND(626,c)]=2010;c[AND(627,c)]=2013;c[AND(628,c)]=2017;c[AND(629,c)]=2020;c[AND(630,c)]=2023;c[AND(631,c)]=2027;c[AND(632,c)]=2030;c[AND(633,c)]=2033;c[AND(634,c)]=2037;c[AND(635,c)]=2040;c[AND(636,c)]=2043;c[AND(637,c)]=2047;c[AND(638,c)]=2050;c[AND(639,c)]=2053;c[AND(640,c)]=2057;c[AND(641,c)]=2060;c[AND(642,c)]
=2063;c[AND(643,c)]=2066;c[AND(644,c)]=2070;c[AND(645,c)]=2073;c[AND(646,c)]=2076;c[AND(647,c)]=2080;c[AND(648,c)]=2083;c[AND(649,c)]=2086;c[AND(650,c)]=2090;c[AND(651,c)]=2093;c[AND(652,c)]=2096;c[AND(653,c)]=2100;c[AND(654,c)]=2103;c[AND(655,c)]=2106;c[AND(656,c)]=2110;c[AND(657,c)]=2113;c[AND(658,c)]=2116;c[AND(659,c)]=2120;AUJ=b;}
function Py(){var a=this;D.call(a);a.hU=Cb;a.gD=0;a.jC=0;}
function C2(){var a=this;D.call(a);a.dq=0;a.i=0;a.l=0;a.cK=0;}
function F$(a,b){a.cK=(-1);a.dq=b;a.l=b;}
function ADT(a){return a.dq;}
function AHt(a){return a.i;}
function Cm(a,b){var c,d,e;if(b>=0&&b<=a.l){a.i=b;if(b<a.cK)a.cK=0;return a;}c=new Bu;d=a.l;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(396))),b)),E(397))),d)),93);Y(c,R(e));K(c);}
function AJD(a){return a.l;}
function B1(a){a.i=0;a.l=a.dq;a.cK=(-1);return a;}
function Go(a){a.l=a.i;a.i=0;a.cK=(-1);return a;}
function BN(a){return a.l-a.i|0;}
function E6(a){return a.i>=a.l?0:1;}
var Ow=G(0);
var Jm=G(C2);
function DK(){var a=this;C2.call(a);a.b6=0;a.bi=null;a.b$=null;}
function H9(b){var c,d;if(b>=0)return AEe(0,b,Fn(b),0,b,1,0);c=new Bu;d=new Q;S(d);Bc(C(M(d,E(398))),b);Y(c,R(d));K(c);}
function Q$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;if(!d)return a;if(a.bY){e=new Gq;Be(e);K(e);}if(BN(a)<d){e=new GT;Be(e);K(e);}if(c>=0){b=C(b);f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bp;j=new Q;S(j);Bc(C(M(C(Bc(C(M(j,E(399))),h)),E(400))),g);Y(i,R(j));K(i);}if(d<0){e=new Bp;i=new Q;S(i);M(C(Bc(C(M(i,E(401))),d)),E(402));Y(e,R(i));K(e);}h=a.i;k=h+a.b6|0;l=0;while(l<d){b=a.bi;m=k+1|0;g=c+1|0;n=f[B(c,f)];b=C(b).data;b[B(k,b)]=n;l=l+1|0;k=m;c=g;}a.i=h+d|0;return a;}}e=new Bp;d=C(b).data.length;i=new Q;S(i);Bs(C(Bc(C(M(C(Bc(C(M(i,
E(403))),c)),E(397))),d)),41);Y(e,R(i));K(e);}
function GI(){D.call(this);this.th=null;}
var AUs=null;var AUq=null;var AUp=null;function AKd(){AKd=T(GI);AGx();}
function ZP(a){var b=new GI();X9(b,a);return b;}
function X9(a,b){AKd();a.th=b;}
function AGx(){AUs=ZP(E(404));AUq=ZP(E(405));AUp=ZP(E(406));}
var JT=G(0);
var QR=G(0);
function LG(){var a=this;D.call(a);a.nj=null;a.mB=null;a.qK=0;a.tf=0;}
function AId(a){var b;if(!a.qK){b=a.nj;C(b).kl=null;DX(b);G2(C(a.mB),null);}}
var Ix=G(Jm);
function NN(){var a=this;Ix.call(a);a.t_=0;a.mG=0;a.lf=null;}
function Jc(){var a=this;D.call(a);a.nX=null;a.kR=null;a.rQ=0.0;a.jb=0.0;a.ik=null;a.hy=null;a.fb=0;}
function JS(){var a=this;D.call(a);a.eu=0;a.jX=0;}
var AUt=null;var AUr=null;function S2(a,b){var c=new JS();TE(c,a,b);return c;}
function TE(a,b,c){a.eu=b;a.jX=c;}
function J0(a){return a.eu!=1?0:1;}
function Q9(a){return a.eu!=3?0:1;}
function Js(b){return S2(2,b);}
function Ua(){AUt=S2(0,0);AUr=S2(1,0);}
var Em=G(0);
function ZD(){var a=this;DK.call(a);a.q1=0;a.bY=0;}
function AEe(a,b,c,d,e,f,g){var h=new ZD();ABg(h,a,b,c,d,e,f,g);return h;}
function ABg(a,b,c,d,e,f,g,h){F$(a,c);N4();a.b$=AUK;a.b6=b;a.bi=d;a.i=e;a.l=f;a.q1=g;a.bY=h;}
function RJ(a){var b,c;b=BN(a)/4|0;c=a.b$;N4();if(c!==AUK){c=new LB;KS(c,a.b6+a.i|0,b,a,0,b,a.bY);return c;}c=new OX;KS(c,a.b6+a.i|0,b,a,0,b,a.bY);return c;}
function RR(a){return a.bi.data;}
function GX(){D.call(this);this.r1=null;}
var AUK=null;var AUL=null;var AUM=null;function N4(){N4=T(GX);AK_();}
function ADU(a){var b=new GX();RY(b,a);return b;}
function RY(a,b){N4();a.r1=b;}
function G4(){var b,c;N4();if(AUM===null){b=new $rt_globals.ArrayBuffer(2);c=new $rt_globals.Int16Array(b);0;c[0]=1;AUM=(new $rt_globals.Int8Array(b))[0]?AUL:AUK;}return AUM;}
function AK_(){AUK=ADU(E(407));AUL=ADU(E(408));}
function Ja(){var a=this;Jc.call(a);a.ku=null;a.jV=null;}
function ST(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.ku;e=0;f=0;g=a.jV;a:{b:{while(true){if((e+32|0)>f){b=C(b);if(E6(b)){h=e;while(h<f){i=h-e|0;d=C(d);j=d.data;h=B(h,j);j[B(i,j)]=j[h];h=h+1|0;}k=f-e|0;l=BN(b)+k|0;d=C(d);j=d.data;i=j.length;f=B$(l,i);l=f-k|0;if(k<0)break b;if(k>i)break b;e=k+l|0;if(e>i){b=new Bp;c=new Q;S(c);Bc(C(M(C(Bc(C(M(c,E(409))),e)),E(400))),i);Y(b,R(c));K(b);}if(BN(b)<l)break;if(l<0){b=new Bp;c=new Q;S(c);M(C(Bc(C(M(c,E(401))),l)),E(402));Y(b,R(c));K(b);}e=b.i;h=0;m=e;while(h<l){n=k
+1|0;i=m+1|0;o=b.lf;m=m+b.mG|0;o=C(o).data;j[B(k,j)]=o[B(m,o)];h=h+1|0;k=n;m=i;}b.i=e+l|0;e=0;}}c=C(c);if(!E6(c)){b=C(b);p=!E6(b)&&e>=f?AUt:AUr;break a;}l=BN(c);g=C(g);l=B$(l,g.data.length);q=new Lq;q.jl=b;q.kU=c;p=V9(a,d,e,f,g,0,l,q);e=q.mA;i=q.m4;if(p===null){b=C(b);if(!E6(b)&&e>=f)p=AUt;else if(!E6(c)&&e>=f)p=AUr;}Q$(c,g,0,i);if(p!==null)break a;}b=new JV;Be(b);K(b);}d=d.data;b=new Bp;i=d.length;c=new Q;S(c);Bs(C(Bc(C(M(C(Bc(C(M(c,E(403))),k)),E(397))),i)),41);Y(b,R(c));K(b);}b=C(b);Cm(b,b.i-(f-e|0)|0);return p;}
var MJ=G(Ja);
function V9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(l<128){m=f+1|0;c=l<<24>>24;e=C(e);k=e.data;k[B(f,k)]=c;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;h=C(h);if(JO(h,2))break a;i=AUr;break a;}n=f+1|0;m=(192|l>>6)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=m;m=n+1|0;k[B(n,k)]=(128|l&63)<<24>>24;}else if(!J5(l)){if((f+3|0)>g){j=j+(-1)|0;h=C(h);if(JO(h,3))break a;i=AUr;break a;}m=f+1|0;n=(224|l>>12)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=n;f=m+1|0;k[B(m,
k)]=(128|l>>6&63)<<24>>24;m=f+1|0;k[B(f,k)]=(128|l&63)<<24>>24;}else{if(!Ch(l)){i=Js(1);break a;}if(j>=d){h=C(h);if(E6(C(h.jl)))break a;i=AUt;break a;}o=j+1|0;m=k[B(j,k)];if(!Cy(m)){j=o+(-2)|0;i=Js(1);break a;}if((f+4|0)>g){j=o+(-2)|0;h=C(h);if(JO(h,4))break a;i=AUr;break a;}j=DE(l,m);c=f+1|0;m=(240|j>>18)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=m;f=c+1|0;k[B(c,k)]=(128|j>>12&63)<<24>>24;n=f+1|0;k[B(f,k)]=(128|j>>6&63)<<24>>24;m=n+1|0;k[B(n,k)]=(128|j&63)<<24>>24;j=o;}c=j;f=m;}j=c;}h=C(h);h.mA=j;h.m4=f;return i;}
var PN=G(Cp);
var My=G(0);
function NB(){var a=this;D.call(a);a.lR=0;a.dR=0;a.ms=0;a.jU=0;a.dJ=0;a.bF=null;a.d9=null;a.tq=0;a.mM=0;a.kM=0;a.se=0;a.mj=0;a.nH=0;a.hJ=null;a.fm=null;a.hw=null;}
function AUN(a,b,c,d,e){var f=new NB();Wm(f,a,b,c,d,e);return f;}
function Wm(a,b,c,d,e,f){var g,h,i,j,k,l,m;a.hJ=Gk();a.jU=b;a.mM=e;a.d9=f;f=E9();Di(f,X7(1,3,E(410)));if(c)Di(f,X7(8,3,E(411)));if(d)Di(f,X7(4,4,E(412)));c=0;while(c<e){g=new F9;h=new Q;S(h);WZ(g,16,2,R(C(Bc(C(U(h,E(413))),c))));Di(f,g);c=c+1|0;}i=J(F9,f.H);c=0;while(c<f.H){j=i.data;g=Z(J3(f,c),F9);d=B(c,j);j[d]=g;c=d+1|0;}i=i.data;h=new Je;h.j$=1;h.fR=0;h.sk=Bi();f=new LN;f.n_=Ba(-1);f.qE=(-1);f.sr=(-1);c=i.length;if(!c){f=new Bu;Y(f,E(414));K(f);}j=J(F9,c);d=0;while(d<c){k=j.data;d=B(d,i);g=i[d];l=AND(d,k);k[l]
=g;d=l+1|0;}f.gB=j;d=0;c=0;while(true){i=j.data;if(c>=i.length)break;a:{b:{m=B(c,i);g=C(i[m]);g.cz=d;switch(g.d1){case 5120:case 5121:break;case 5122:case 5123:c=2*g.cR|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:c=4*g.cR|0;break a;default:break b;}c=g.cR;break a;}c=0;}d=d+c|0;c=m+1|0;}f.bI=d;if(ATb!==null)g=AMl(0,b,f);else{g=new N3;g.el=0;g.eP=0;g.tu=0;g.bG=f;f=O2(DS(d/4|0,b));g.cQ=f;Go(C(f));g.lD=IU(C(ATa));g.hq=35048;}h.cU=g;h.bl=AL8(0,0);h.mo
=0;VW(AS9,h);a.bF=h;a.fm=C4(DS(b,C(MA(h)).bI/4|0));a.kM=C(MA(C(a.bF))).bI/4|0;a.se=EX(C(a.bF),8)===null?0:C(EX(C(a.bF),8)).cz/4|0;a.mj=EX(C(a.bF),4)===null?0:C(EX(C(a.bF),4)).cz/4|0;a.nH=EX(C(a.bF),16)===null?0:C(EX(C(a.bF),16)).cz/4|0;a.hw=J(BA,e);l=0;while(l<e){i=a.hw;f=new Q;S(f);f=R(C(Bc(C(U(f,E(415))),l)));i=C(i).data;l=B(l,i);i[l]=f;l=l+1|0;}}
function Do(a,b){var c,d;c=a.fm;d=a.dR+a.mj|0;c=C(c).data;c[B(d,c)]=b;}
function Dv(a,b,c,d){var e,f,g;e=a.dR;f=C(a.fm).data;g=B(e,f);f[g]=b;f[B(g+1|0,f)]=c;f[B(g+2|0,f)]=d;a.ms=0;a.dR=e+a.kM|0;a.dJ=a.dJ+1|0;}
function AAG(b,c,d){var e,f,g;e=new Q;S(e);e=R(C(U(C(U(C(U(e,E(416))),!b?E(1):E(417))),!c?E(1):E(418))));f=0;while(f<d){g=new Q;S(g);e=R(C(U(C(Bc(C(U(C(U(g,e)),E(419))),f)),E(420))));f=f+1|0;}g=new Q;S(g);e=R(C(U(C(U(C(U(g,e)),E(421))),!c?E(1):E(422))));f=0;while(f<d){g=new Q;S(g);e=R(C(U(C(Bc(C(U(C(U(g,e)),E(423))),f)),E(420))));f=f+1|0;}g=new Q;S(g);e=R(C(U(C(U(g,e)),E(424))));if(c){g=new Q;S(g);e=R(C(U(C(U(g,e)),E(425))));}f=0;while(f<d){g=new Q;S(g);e=R(C(U(C(Bc(C(U(C(U(C(Bc(C(U(C(U(g,e)),E(426))),f)),E(427))),
E(413))),f)),E(420))));f=f+1|0;}g=new Q;S(g);return R(C(U(C(U(g,e)),E(428))));}
function AGw(b,c,d){var e,f,g;e=E(429);if(c){f=new Q;S(f);e=R(C(U(C(U(f,e)),E(422))));}g=0;while(g<d){f=new Q;S(f);f=R(C(U(C(Bc(C(U(C(U(f,e)),E(423))),g)),E(420))));e=new Q;S(e);e=R(C(U(C(Bc(C(U(C(U(e,f)),E(430))),g)),E(420))));g=g+1|0;}f=new Q;S(f);e=U(C(U(f,e)),E(431));f=!c?E(432):E(433);e=R(C(U(C(e),f)));if(d>0){f=new Q;S(f);e=R(C(U(C(U(f,e)),E(434))));}g=0;c=d-1|0;while(g<d){if(g!=c){f=new Q;S(f);e=R(C(U(C(Bc(C(U(C(Bc(C(U(C(U(f,e)),E(435))),g)),E(436))),g)),E(437))));}else{f=new Q;S(f);e=R(C(U(C(Bc(C(U(C(Bc(C(U(C(U(f,
e)),E(435))),g)),E(436))),g)),E(438))));}g=g+1|0;}f=new Q;S(f);return R(C(U(C(U(f,e)),E(439))));}
function Je(){var a=this;D.call(a);a.cU=null;a.bl=null;a.j$=0;a.mo=0;a.dY=null;a.fR=0;a.sk=null;}
var AUO=null;function WM(a,b,c,d,e,f){var g,h,i,j,k;if(!e)return;if(f){g=null;h=null;C(a.cU).iR(b,g);g=a.dY;if(g!==null&&g.m8()>0)C(a.dY).iR(b,h);if(FB(C(a.bl))>0){i=C(a.bl);j=i.j2;if(!j){b=new CM;Y(b,E(440));K(b);}C(ATa).cf(34963,j);if(i.eB){g=ATa;h=i.dy;C(g).cI(34963,C(h).l,h,i.lG);i.eB=0;}i.hf=1;}}if(a.mo){if(FB(C(a.bl))<=0)C(ATa).e$(c,d,e);else{g=C(a.bl);g.eB=g.eB|0;h=C(g.dy);k=h.i;Cm(h,d);C(ATa).ht(c,e,5123,h);Cm(h,k);}}else{j=0;if(a.fR)j=C(a.dY).m8();if(FB(C(a.bl))<=0){if(a.fR&&j>0)C(ATb).mU(c,d,e,j);else C(ATa).e$(c,
d,e);}else{if((e+d|0)>HS(C(a.bl))){b=new CM;g=new Q;S(g);Y(b,R(C(U(C(Bc(C(U(C(Bc(C(U(C(Bc(C(U(g,E(441))),e)),E(442))),d)),E(443))),HS(C(a.bl)))),E(438)))));K(b);}if(a.fR&&j>0)C(ATb).l_(c,e,5123,d*2|0,j);else C(ATa).ij(c,e,5123,d*2|0);}}if(f){g=null;h=null;C(a.cU).io(b,g);g=a.dY;if(g!==null&&g.m8()>0)C(a.dY).io(b,h);if(FB(C(a.bl))>0){b=C(a.bl);C(ATa).cf(34963,0);b.hf=0;}}}
function EX(a,b){var c,d,e;c=C(C(a.cU).hH());d=Fk(c);e=0;while(e<d){if(C(Ec(c,e)).lu==b)return Ec(c,e);e=e+1|0;}return null;}
function MA(a){return C(a.cU).hH();}
function VW(b,c){var d,e,f,g,h;d=C(AUO);if(b===null)d=Ot(d);else{e=Gt(b);d=M8(d,b,e&(C(d.bD).data.length-1|0),e);}d=Z(d===null?null:d.dU,Jt);if(d===null)d=E9();Di(d,c);c=C(AUO);if(b===null){f=Ot(c);if(f===null){c.f3=c.f3+1|0;f=PR(c,null,0,0);g=c.dD+1|0;c.dD=g;if(g>c.hp)P9(c);}}else{g=Gt(b);h=g&(C(c.bD).data.length-1|0);f=M8(c,b,h,g);if(f===null){c.f3=c.f3+1|0;f=PR(c,b,h,g);g=c.dD+1|0;c.dD=g;if(g>c.hp)P9(c);}}C(f).dU=d;}
function AAf(){AUO=AF9();}
function LN(){var a=this;D.call(a);a.gB=null;a.bI=0;a.n_=Cb;a.qE=0;a.sr=0;}
function Fk(a){return C(a.gB).data.length;}
function Ec(a,b){var c;c=C(a.gB).data;return c[B(b,c)];}
var Ld=G(0);
function V4(){var a=this;D.call(a);a.dy=null;a.j2=0;a.pz=0;a.eB=0;a.hf=0;a.lG=0;}
function AL8(a,b){var c=new V4();ADo(c,a,b);return c;}
function ADo(a,b,c){var d,e,f,g,h;a.eB=1;a.hf=0;a.pz=1;if(!ATo){d=AD1(c);e=d.data.length;f=new Q2;PL(f,e,0,0+e|0);f.mf=0;f.nt=0;f.kL=d;}else{g=H9(c*2|0);f=G4();g=C(g);g.b$=f;h=BN(g)/2|0;if(g.b$!==AUK){f=new K_;PQ(f,g.b6+g.i|0,h,g,0,h,g.bY);}else{f=new MZ;PQ(f,g.b6+g.i|0,h,g,0,h,g.bY);}}a.dy=f;Go(f);a.j2=IU(C(ATa));a.lG=!b?35048:35044;}
function FB(a){return C(a.dy).l;}
function HS(a){return C(a.dy).dq;}
function El(){var a=this;D.call(a);a.b8=null;a.cS=0;a.eG=null;a.k1=null;a.ma=null;a.ls=null;a.eq=null;a.lq=null;a.mp=null;a.kp=null;a.bw=0;a.g1=0;a.jn=0;a.tH=null;a.jR=null;a.kc=null;a.l2=0;a.tb=0;a.Y=null;a.cr=null;}
var AUP=0;var AUy=null;var AUz=null;var AUA=null;var AUQ=null;function AKW(){AKW=T(El);AIr();}
function MT(a,b,c){var d,e,f;a.g1=RQ(a,35633,b);d=RQ(a,35632,c);a.jn=d;if(a.g1!=(-1)&&d!=(-1)){d=C(ATa).g2();if(!d)d=(-1);b=ATa;if(d==(-1))d=(-1);else{e=a.g1;f=C(b);f.fa(d,e);f.fa(d,a.jn);f.f$(d);b=H9(4);c=G4();b=C(b);b.b$=c;b=RJ(b);f.dE(d,35714,b);if(!DO(C(b),0)){a.b8=C(ATa).f6(d);d=(-1);}}a.bw=d;if(d!=(-1)){a.cS=1;return;}a.cS=0;return;}a.cS=0;}
function RQ(a,b,c){var d,e,f,g;d=ATa;e=Hz(1);d=C(d);f=d.hZ(b);if(!f)return (-1);d.i1(f,c);d.hC(f);d.hD(f,35713,e);if(DO(C(e),0))return f;g=d.hI(f);c=new Q;S(c);a.b8=R(C(U(C(U(c,a.b8)),b!=35633?E(444):E(445))));c=new Q;S(c);a.b8=R(C(U(C(U(c,a.b8)),g)));return (-1);}
function QC(a){var b,c;if(!a.cS)return a.b8;b=ATa;c=a.bw;b=C(b).f6(c);a.b8=b;return b;}
function Lm(a,b){var c,d,e,f;AKW();c=AUP;d=Il(C(a.eG),b,(-2));if(d==(-2)){d=C(ATa).eQ(a.bw,b);if(d==(-1)&&c){if(!a.cS){b=new De;e=new Q;S(e);Y(b,R(C(U(C(U(e,E(446))),QC(a)))));K(b);}e=new Bu;f=new Q;S(f);Y(e,R(C(U(C(U(C(U(f,E(447))),b)),E(448)))));K(e);}D1(C(a.eG),b,d);}return d;}
function Kc(a,b,c,d,e,f,g){var h;h=ATa;Ee(a);C(h).iq(b,c,d,e,f,g);}
function Ou(a,b){var c;c=ATa;Ee(a);C(c).ff(b);}
function Jy(a,b){var c;c=ATa;Ee(a);C(c).iZ(b);}
function Ee(a){if(a.l2){MT(a,a.jR,a.kc);a.l2=0;}}
function WA(a){var b,c,d,e,f,g,h;B1(C(a.Y));b=ATa;c=a.bw;d=a.Y;C(b).dE(c,35718,d);e=DO(C(a.Y),0);a.ls=J(BA,e);c=0;while(c<e){B1(C(a.Y));QY(C(a.Y),0,1);B1(C(a.cr));b=ATa;f=a.bw;d=a.Y;g=a.cr;g=C(b).iN(f,c,d,g);b=ATa;f=a.bw;f=C(b).eQ(f,g);D1(C(a.eG),g,f);b=a.k1;f=DO(C(a.cr),0);D1(C(b),g,f);b=a.ma;f=DO(C(a.Y),0);D1(C(b),g,f);h=C(a.ls).data;c=B(c,h);h[c]=g;c=c+1|0;}}
function Ia(a,b){return Il(C(a.eq),b,(-1));}
function AIr(){AUP=1;AUy=E(1);AUz=E(1);AUA=DN();AUQ=Hz(1);}
var Jo=G(0);
function N3(){var a=this;D.call(a);a.bG=null;a.cQ=null;a.lD=0;a.tu=0;a.hq=0;a.el=0;a.eP=0;}
function AEE(a){return a.bG;}
function AIw(a){return C(a.cQ).l/(C(a.bG).bI/4|0)|0;}
function AHl(a,b,c,d){var e,f;a.el=1;Zh(b,a.cQ,d,c);Cm(C(a.cQ),0);EK(C(a.cQ),d);if(a.eP){e=ATa;f=a.cQ;C(e).cI(34962,C(f).l,f,a.hq);a.el=0;}}
function AEb(a,b,c){var d,e,f,g,h,i,j,k;d=ATa;e=a.lD;d=C(d);d.cf(34962,e);if(a.el){f=a.cQ;d.cI(34962,C(f).l,f,a.hq);a.el=0;}a:{g=Fk(C(a.bG));if(c!==null){h=0;while(true){if(h>=g)break a;i=c.data;f=Ec(C(a.bG),h);j=B(h,i);e=i[j];if(e>=0){b=C(b);Jy(b,e);k=C(f);Kc(b,e,k.cR,k.d1,k.eI,C(a.bG).bI,k.cz);}h=j+1|0;}}h=0;while(h<g){k=C(Ec(C(a.bG),h));f=k.es;b=C(b);e=Ia(b,f);if(e>=0){Jy(b,e);Kc(b,e,k.cR,k.d1,k.eI,C(a.bG).bI,k.cz);}h=h+1|0;}}a.eP=1;}
function ABO(a,b,c){var d,e,f,g,h,i,j,k;a:{d=ATa;e=Fk(C(a.bG));if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;f=B(f,g);h=g[f];if(h>=0){b=C(b);Ou(b,h);}f=f+1|0;}}f=0;while(f<e){i=C(Ec(C(a.bG),f)).es;b=C(b);j=ATa;Ee(b);k=ATa;h=Il(C(b.eq),i,(-2));if(h==(-2)){h=C(k).fo(b.bw,i);D1(C(b.eq),i,h);}if(h!=(-1))C(j).ff(h);f=f+1|0;}}C(d).cf(34962,0);a.eP=0;}
function M6(){var a=this;D.call(a);a.bW=null;a.cj=null;a.ia=0;a.tE=0;a.hW=0;a.ef=0;a.f7=0;a.gY=0;a.bq=null;}
var AUR=null;function AL4(){AL4=T(M6);AK9();}
function AMl(a,b,c){var d=new M6();TG(d,a,b,c);return d;}
function TG(a,b,c,d){var e;AL4();a.ef=0;a.f7=0;a.gY=(-1);a.bq=ALs(1,16);a.tE=b;a.bW=d;d=O2(DS(C(d).bI/4|0,c));a.cj=d;Go(C(d));a.ia=IU(C(ATa));a.hW=!b?35048:35044;B1(C(AUR));e=ATb;d=AUR;C(e).jI(1,d);a.gY=Ze(C(AUR));}
function ABV(a){return a.bW;}
function AGZ(a){return (C(a.cj).l*4|0)/C(a.bW).bI|0;}
function AB6(a,b,c,d){var e,f;a.ef=1;Zh(b,a.cj,d,c);Cm(C(a.cj),0);EK(C(a.cj),d);if(a.f7){e=ATa;f=a.cj;C(e).cI(34962,C(f).l,f,a.hW);a.ef=0;}}
function AJt(a,b,c){var d,e;d=ATb;e=a.gY;d=C(d);d.i3(e);YC(a,b,c);if(a.ef){d.cf(34962,a.ia);b=C(a.cj);EK(b,b.l);b=a.cj;d.cI(34962,C(b).l,b,a.hW);a.ef=0;}a.f7=1;}
function YC(a,b,c){var d,e,f,g,h,i,j,k,l;d=!C(a.bq).bx?0:1;a:{e=Fk(C(a.bW));if(d){if(c===null){f=0;while(d&&f<e){g=C(Ec(C(a.bW),f)).es;b=C(b);d=Ia(b,g)!=Ht(C(a.bq),f)?0:1;f=f+1|0;}}else{h=c.data;d=h.length!=C(a.bq).bx?0:1;f=0;while(d){if(f>=e)break a;i=B(f,h);d=h[i]!=Ht(C(a.bq),i)?0:1;f=i+1|0;}}}}b:{if(!d){C(AS_).cf(34962,a.ia);if(C(a.bq).bx){f=Fk(C(a.bW));j=0;k=b;while(j<f){d=Ht(C(a.bq),j);if(d>=0){k=C(k);Ou(k,d);}j=j+1|0;}}C(a.bq).bx=0;f=0;while(true){if(f>=e)break b;k=Ec(C(a.bW),f);if(c!==null){h=c.data;g
=a.bq;f=B(f,h);N8(C(g),h[f]);}else{g=a.bq;k=C(k);l=k.es;b=C(b);N8(C(g),Ia(b,l));}j=Ht(C(a.bq),f);if(j>=0){b=C(b);Jy(b,j);g=C(k);Kc(b,j,g.cR,g.d1,g.eI,C(a.bW).bI,g.cz);}f=f+1|0;}}}}
function ADK(a,b,c){C(ATb).i3(0);a.f7=0;}
function AK9(){AUR=Hz(1);}
var XX=G();
function Zh(b,c,d,e){var f;f=null;if(c instanceof DK)f=C(Z(c,DK)).zX();else if(c instanceof E1)f=c;if(f===null){f=new CM;Y(f,E(449));K(f);}B1(f);c=C(c);Cm(c,0);WX(f,b,e,d);Cm(c,0);if(!(c instanceof DK))EK(c,d);else EK(c,d<<2);}
function O2(b){var c,d,e,f,g;if(!ATo){c=C4(b);d=c.data.length;e=new QV;Oy(e,d,0,0+d|0);e.iS=0;e.lg=0;e.ho=c;return e;}e=H9(b*4|0);f=G4();g=C(e);g.b$=f;d=BN(g)/4|0;if(g.b$!==AUL){e=new Lh;Re(e,g.b6+g.i|0,d,g,0,d,g.bY);}else{e=new NC;Re(e,g.b6+g.i|0,d,g,0,d,g.bY);}return e;}
function Hz(b){var c,d,e,f;if(ATo){c=H9(b*4|0);d=G4();c=C(c);c.b$=d;return RJ(c);}e=Bl(b);f=e.data.length;c=new No;Ml(c,f,0,0+f|0);c.ie=0;c.mX=0;c.gJ=e;return c;}
function X2(){var a=this;D.call(a);a.gw=0;a.c2=null;a.cV=null;a.ko=0.0;a.gO=0;a.iI=0;a.fM=0;}
function Hn(){var a=new X2();AF5(a);return a;}
function AF5(a){var b,c;a.ko=0.800000011920929;b=JP(51,0.800000011920929);a.gO=b*0.800000011920929|0;c=b-1|0;a.fM=c;a.iI=DT(Ba(c));a.c2=J(D,b);a.cV=Bl(b);}
function OL(a,b){return EI(B4(BB(Ba(Hc(C(b))),F(2135587861, 2654435769)),a.iI));}
function Mz(a,b){var c,d,e,f,g;if(b===null){c=new Bu;Y(c,E(37));K(c);}d=a.c2;e=OL(a,b);while(true){d=C(d);f=d.data;g=B(e,f);c=f[g];if(c===null)return  -(g+1|0)|0;if(Bh(c,b))break;e=(g+1|0)&a.fM;}return g;}
function D1(a,b,c){var d,e,f,g,h,i,j,k;d=Mz(a,b);if(d>=0){e=C(a.cV).data;e[B(d,e)]=c;return;}d= -(d+1|0)|0;e=C(a.c2).data;d=B(d,e);e[d]=b;f=C(a.cV).data;f[AND(d,f)]=c;c=a.gw+1|0;a.gw=c;if(c>=a.gO)a:{c=e.length;d=c<<1;a.gO=d*a.ko|0;g=d-1|0;a.fM=g;a.iI=DT(Ba(g));f=a.c2;h=a.cV;a.c2=J(D,d);a.cV=Bl(d);if(a.gw>0){d=0;while(true){if(d>=c)break a;f=C(f);e=f.data;d=B(d,e);b=e[d];if(b!==null){h=C(h);e=h.data;d=AND(d,e);g=e[d];e=a.c2;i=OL(a,b);while(true){e=C(e);j=e.data;k=B(i,j);if(j[k]===null)break;i=(k+1|0)&a.fM;}j[k]
=b;e=C(a.cV).data;e[AND(k,e)]=g;}d=d+1|0;}}}}
function Il(a,b,c){var d,e;d=Mz(a,b);if(d>=0){e=C(a.cV).data;c=e[B(d,e)];}return c;}
var Fp=G(C2);
function AJ8(a){Go(a);return a;}
function AI0(a,b){Cm(a,b);return a;}
function ABk(a,b){Cm(a,b);return a;}
var Fm=G(C2);
function AIR(a){B1(a);return a;}
function AAQ(a,b){Cm(a,b);return a;}
function AGV(a){B1(a);return a;}
var E1=G(C2);
function WX(a,b,c,d){var e,f,g,h,i,j,k;if(a.b2()){e=new Gq;Be(e);K(e);}if(BN(a)<d){e=new GT;Be(e);K(e);}if(c>=0){b=C(b);f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){e=new Bp;i=new Q;S(i);Bc(C(M(C(Bc(C(M(i,E(450))),h)),E(400))),g);Y(e,R(i));K(e);}if(d<0){e=new Bp;i=new Q;S(i);M(C(Bc(C(M(i,E(401))),d)),E(402));Y(e,R(i));K(e);}h=a.i;j=0;while(j<d){k=h+1|0;g=c+1|0;a.gP(h,f[B(c,f)]);j=j+1|0;h=k;c=g;}a.i=a.i+d|0;return a;}}e=new Bp;d=C(b).data.length;i=new Q;S(i);Bs(C(Bc(C(M(C(Bc(C(M(i,E(403))),c)),E(397))),d)),41);Y(e,
R(i));K(e);}
function AGp(a){B1(a);return a;}
function AB_(a){Go(a);return a;}
function EK(a,b){var c,d,e;if(b>=0&&b<=a.dq){if(a.cK>b)a.cK=(-1);a.l=b;if(a.i>b)a.i=b;return a;}c=new Bu;d=a.dq;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(451))),b)),E(397))),d)),93);Y(c,R(e));K(c);}
function AG7(a,b){Cm(a,b);return a;}
function AHX(a,b){return EK(a,b);}
function AKt(a,b){Cm(a,b);return a;}
var WO=G();
var Gd=G(Fp);
function PL(a,b,c,d){F$(a,b);a.i=c;a.l=d;}
function XY(a,b){var c,d,e;if(b>=0&&b<a.l)return a.iW(b);c=new Bp;d=a.l;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(452))),b)),E(397))),d)),41);Y(c,R(e));K(c);}
function Q2(){var a=this;Gd.call(a);a.nt=0;a.mf=0;a.kL=null;}
function AEz(a,b){var c;c=a.kL;b=b+a.mf|0;c=C(c).data;return c[B(b,c)];}
var FD=G(Fm);
function Ml(a,b,c,d){F$(a,b);a.i=c;a.l=d;}
function Ze(a){var b,c;b=a.i;if(b<a.l){a.i=b+1|0;return a.f0(b);}c=new JV;Be(c);K(c);}
function Dw(a,b){var c,d;if(a.b2()){c=new Gq;Be(c);K(c);}d=a.i;if(d<a.l){a.i=d+1|0;a.ft(d,b);return a;}c=new GT;Be(c);K(c);}
function DO(a,b){var c,d,e;if(b>=0&&b<a.l)return a.f0(b);c=new Bp;d=a.l;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(452))),b)),E(397))),d)),41);Y(c,R(e));K(c);}
function QY(a,b,c){var d,e;if(a.b2()){d=new Gq;Be(d);K(d);}if(b>=0&&b<a.l){a.ft(b,c);return a;}d=new Bp;c=a.l;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(452))),b)),E(397))),c)),41);Y(d,R(e));K(d);}
function AGb(a){return a.b2();}
function No(){var a=this;FD.call(a);a.mX=0;a.ie=0;a.gJ=null;}
function AHh(a,b){var c;c=a.gJ;b=b+a.ie|0;c=C(c).data;return c[B(b,c)];}
function AGf(a,b,c){var d;d=a.gJ;b=b+a.ie|0;d=C(d).data;d[B(b,d)]=c;}
function AAN(a){return a.mX;}
var Fv=G(E1);
function Oy(a,b,c,d){F$(a,b);a.i=c;a.l=d;}
function VL(a,b){var c,d,e;if(b>=0&&b<a.l)return a.iX(b);c=new Bp;d=a.l;e=new Q;S(e);Bs(C(Bc(C(M(C(Bc(C(M(e,E(452))),b)),E(397))),d)),41);Y(c,R(e));K(c);}
function ADv(a){return a.b2();}
function QV(){var a=this;Fv.call(a);a.lg=0;a.iS=0;a.ho=null;}
function AH3(a,b){var c;c=a.ho;b=b+a.iS|0;c=C(c).data;return c[B(b,c)];}
function AHr(a,b,c){var d;d=a.ho;b=b+a.iS|0;d=C(d).data;d[B(b,d)]=c;}
function AHB(a){return a.lg;}
function Fl(){var a=this;Gd.call(a);a.fS=null;a.pe=0;a.hP=0;}
function PQ(a,b,c,d,e,f,g){PL(a,c,e,f);a.hP=b;a.fS=d;a.pe=g;}
function AIG(a){return RR(C(a.fS));}
var K_=G(Fl);
function ADk(a,b){var c;c=C(a.fS).bi;b=a.hP+(b*2|0)|0;c=C(c).data;return (c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8)<<16>>16;}
var MZ=G(Fl);
function AG_(a,b){var c;c=C(a.fS).bi;b=a.hP+(b*2|0)|0;c=C(c).data;return ((c[B(b,c)]&255)<<8|c[B(b+1|0,c)]&255)<<16>>16;}
function F7(){var a=this;FD.call(a);a.dK=null;a.lo=0;a.dM=0;}
function KS(a,b,c,d,e,f,g){Ml(a,c,e,f);a.dM=b;a.dK=d;a.lo=g;}
function AF2(a){return a.lo;}
var LB=G(F7);
function AEv(a,b){var c;c=C(a.dK).bi;b=a.dM+(b*4|0)|0;c=C(c).data;return c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8|(c[B(b+2|0,c)]&255)<<16|(c[B(b+3|0,c)]&255)<<24;}
function AAM(a,b,c){var d,e,f;d=C(a.dK).bi;b=a.dM+(b*4|0)|0;e=c<<24>>24;d=C(d).data;d[B(b,d)]=e;e=b+1|0;f=c>>8<<24>>24;d[B(e,d)]=f;e=b+2|0;f=c>>16<<24>>24;d[B(e,d)]=f;b=b+3|0;c=c>>24<<24>>24;d[B(b,d)]=c;}
var OX=G(F7);
function AJs(a,b){var c;c=C(a.dK).bi;b=a.dM+(b*4|0)|0;c=C(c).data;return (c[B(b,c)]&255)<<24|(c[B(b+1|0,c)]&255)<<16|(c[B(b+2|0,c)]&255)<<8|c[B(b+3|0,c)]&255;}
function ABQ(a,b,c){var d,e,f;d=C(a.dK).bi;b=a.dM+(b*4|0)|0;e=c>>24<<24>>24;d=C(d).data;d[B(b,d)]=e;e=b+1|0;f=c>>16<<24>>24;d[B(e,d)]=f;e=b+2|0;f=c>>8<<24>>24;d[B(e,d)]=f;b=b+3|0;c=c<<24>>24;d[B(b,d)]=c;}
function Fw(){var a=this;Fv.call(a);a.dr=null;a.m0=0;a.dx=0;}
function Re(a,b,c,d,e,f,g){Oy(a,c,e,f);a.dx=b;a.dr=d;a.m0=g;}
function AHI(a){return a.m0;}
function AIm(a){return RR(C(a.dr));}
var Lh=G(Fw);
function AF6(a,b){var c;c=C(a.dr).bi;b=a.dx+(b*4|0)|0;c=C(c).data;return $rt_intBitsToFloat((c[B(b,c)]&255)<<24|(c[B(b+1|0,c)]&255)<<16|(c[B(b+2|0,c)]&255)<<8|c[B(b+3|0,c)]&255);}
function AIi(a,b,c){var d,e,f,g;d=JY(c);e=C(a.dr).bi;b=a.dx+(b*4|0)|0;f=d>>24<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;g=d>>16<<24>>24;e[B(f,e)]=g;f=b+2|0;g=d>>8<<24>>24;e[B(f,e)]=g;b=b+3|0;d=d<<24>>24;e[B(b,e)]=d;}
var NC=G(Fw);
function AAS(a,b){var c;c=C(a.dr).bi;b=a.dx+(b*4|0)|0;c=C(c).data;return $rt_intBitsToFloat(c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8|(c[B(b+2|0,c)]&255)<<16|(c[B(b+3|0,c)]&255)<<24);}
function AFY(a,b,c){var d,e,f,g;d=JY(c);e=C(a.dr).bi;b=a.dx+(b*4|0)|0;f=d<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;g=d>>8<<24>>24;e[B(f,e)]=g;f=b+2|0;g=d>>16<<24>>24;e[B(f,e)]=g;b=b+3|0;d=d>>24<<24>>24;e[B(b,e)]=d;}
var GP=G(Bq);
var Gq=G(GP);
var JV=G(Bq);
var Uq=G();
function Qa(){var a=this;D.call(a);a.dg=null;a.bK=null;}
function Ve(a,b){var c,d,e,f,$$je,$p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.dg.readyState==4){if(a.dg.status==200){if(C(C(a.bK).cJ).ck){b=D9();c=C(a.bK).cB;d=new Q;S(d);M(C(M(d,E(453))),c);Dp(C(b),R(d));}c=C(a.bK);C(c.cZ).dH(c.cB,$rt_str(a.dg.responseText));}else if(a.dg.status!=404&&a.dg.status!=403){try{e=Ba(100);$p=1;continue _;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}d=C(a.bK);Gw(C(d.cJ),
d.eK,d.cB,d.cZ);}else{c=C(a.bK);C(c.cZ).dz(c.cB);}Er(C(C(a.bK).cJ));}return;case 1:a:{try{TY(e);if(GN()){break _;}break a;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}}d=C(a.bK);b=d.cJ;f=d.eK;c=d.cB;d=d.cZ;Gw(C(b),f,c,d);Er(C(C(a.bK).cJ));return;default:AA3();}}Qo().s(a,b,c,d,e,f,$p);}
var PT=G(0);
var SZ=G();
var GT=G(Bq);
var Pr=G(FF);
function Lq(){var a=this;D.call(a);a.jl=null;a.kU=null;a.mA=0;a.m4=0;}
function JO(a,b){return BN(C(a.kU))<b?0:1;}
function Jh(){var a=this;D.call(a);a.id=0;a.g9=0;a.d8=0;a.kK=Cb;a.he=null;a.kk=null;a.mO=Cb;a.j7=null;}
function Nd(){var a=this;CB.call(a);a.eV=null;a.tX=null;}
function Na(){var a=this;CB.call(a);a.fV=null;a.mz=null;a.k4=null;a.lT=null;}
function Lz(a,b){var c,d;c=C(a.fV).eV;d=ANU(b);C(c).kK=d;}
function HM(a,b){b=C(C(a.fV).eV);b.g9=1;b.d8=0;}
function Ji(a,b,c){var d,e;b=a.lT;d=a.mz;e=a.k4;KT(C(b),d,e,c);b=C(C(a.fV).eV);b.id=1;b.d8=0;return 0;}
var K3=G();
var AT7=null;function AM8(){AM8=T(K3);AGe();}
function AGe(){var b,c;b=Bl(C(Mg()).data.length);c=b.data;AT7=b;c[B(C(ATM).v,c)]=1;c[B(C(ATJ).v,c)]=2;c[B(C(ATL).v,c)]=3;c[B(C(ATK).v,c)]=4;c[B(C(AT8).v,c)]=5;}
var T$=G();
function HZ(b){if(!AJw(b,Em))return null;return C(Dc(b,Em)).gy();}
var Uy=G();
function AK5(a,b){return QM(a.fv(b));}
function ACP(a){return a.sn();}
var Xa=G();
function K0(){var a=this;C0.call(a);a.en=0;a.ct=null;a.dc=null;a.cC=null;}
function ACG(a){var b,c,d,e;b=new $rt_globals.XMLHttpRequest();c=new Lt;c.bT=a;c.c0=b;c=BF(c,"handleEvent");b.onreadystatechange=c;Ki(C(a.cC),b,a.dc);d=a.ct;e=a.en;b.open("GET",$rt_ustr(d),!!e);if(a.en){c="arraybuffer";b.responseType=c;}b.send();}
function KZ(){var a=this;CB.call(a);a.fp=null;a.sQ=null;}
function ACJ(a,b){Lz(C(a.fp),b);}
function AGK(a,b){HM(C(a.fp),b);}
function ABN(a,b,c){return Ji(C(a.fp),b,null);}
function K1(){var a=this;CB.call(a);a.dC=null;a.kA=null;a.m3=null;a.eL=null;}
function AEB(a,b){Lz(C(a.dC),b);}
function ABc(a,b){HM(C(a.dC),b);}
function AEQ(a,b,c){var d,e;d=$rt_globals.window.document.createElement("img");e=a.kA;if(e!==null)d.setAttribute("crossOrigin",$rt_ustr(e));G8(C(a.eL));e=new MN;e.fG=a;e.iY=b;e.mv=c;e.jG=d;d.addEventListener("load",BF(e,"handleEvent"),!!0);d.addEventListener("error",BF(e,"handleEvent"),!!0);if(!C(a.eL).nc){b=$rt_ustr(b);d.src=b;}else{b=a.m3;c=Yb(C(c));e=new Q;S(e);M(C(M(C(M(C(M(e,E(454))),b)),E(455))),c);b=$rt_ustr(R(e));d.src=b;}return 0;}
function Lt(){var a=this;D.call(a);a.c0=null;a.bT=null;}
function Ws(a,b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.c0.readyState==4){if(a.c0.status!=200){if(a.c0.status!=404&&a.c0.status!=403){try{c=Ba(100);$p=1;continue _;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}d=C(a.bT);Fo(C(d.cC),d.en,d.ct,d.dc);}else{e=C(a.bT);C(e.dc).dz(e.ct);}}else{if(C(C(a.bT).cC).ck){b=D9();e=C(a.bT).ct;d=new Q;S(d);M(C(M(d,E(453))),
e);Dp(C(b),R(d));}f=a.c0.response;g=new $rt_globals.Int8Array(f);b=C(a.bT);C(b.dc).dH(b.ct,UU(f,g));}Er(C(C(a.bT).cC));}return;case 1:a:{try{TY(c);if(GN()){break _;}break a;}catch($$e){$$je=By($$e);if($$je instanceof Cv){}else{throw $$e;}}}d=C(a.bT);b=d.cC;h=d.en;e=d.ct;d=d.dc;Fo(C(b),h,e,d);Er(C(C(a.bT).cC));return;default:AA3();}}Qo().s(a,b,c,d,e,f,g,h,$p);}
function ZZ(a,b){var $p,$z;$p=0;if(AEU()){var $T=Qo();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ws(a,b);if(GN()){break _;}return;default:AA3();}}Qo().s(a,b,$p);}
function MN(){var a=this;D.call(a);a.iY=null;a.mv=null;a.jG=null;a.fG=null;}
function AD9(a,b){if(Bh(C($rt_str(b.type)),E(456)))HM(C(C(a.fG).dC),a.iY);else{b=a.mv;C(b).mb=a.jG;Ji(C(C(a.fG).dC),a.iY,b);}Er(C(C(a.fG).eL));}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"scenes",5,"scene2d",6,"ui",2,"graphics",8,"g2d",-1,"java",10,"util",11,"regex",10,"nio",13,"charset",10,"lang"]);
$rt_metadata([D,"Object",15,0,[],0,3,0,0,["iw",ANE(ADr),"eR",ANF(OM),"bs",ANE(ACw)],Sb,0,D,[],4,3,0,0,0,Ex,0,D,[],3,3,0,0,0,T9,0,D,[Ex],0,3,0,0,0,I_,0,D,[Ex],0,3,0,0,0,SV,0,D,[Ex],0,3,0,0,0,W_,0,D,[Ex],0,3,0,0,0,R9,0,D,[Ex],0,3,0,0,0,Vq,0,D,[Ex],0,3,0,0,0,J8,0,D,[],3,3,0,0,0,HH,0,D,[J8],4,3,0,ANl,0,YH,0,D,[],4,3,0,0,0,FR,0,D,[],1,3,0,0,0,LA,0,D,[],3,3,0,0,0,Jv,0,FR,[LA],1,3,0,0,0,Wk,0,Jv,[],0,3,0,0,0,FN,0,FR,[],1,3,0,0,0,Uf,0,FN,[],0,3,0,0,0,X1,0,FN,[],0,3,0,0,0,Ez,0,D,[],0,3,0,AN7,0,KD,0,D,[],3,3,0,0,0,Jl,
0,D,[KD],0,3,0,0,0,Cx,0,D,[],3,3,0,0,0,Y5,0,Jl,[Cx],0,3,0,0,0,DH,0,D,[],3,3,0,0,0,Ek,0,D,[DH],0,3,0,0,0,Ck,0,D,[],3,3,0,0,0,Bx,0,D,[],3,3,0,0,0,Bz,0,D,[Ck,Bx],1,3,0,0,["bs",ANE(AEV)],EJ,0,Bz,[],12,3,0,AL1,0,Eq,0,D,[],0,3,0,0,0,Jn,0,D,[],3,3,0,0,0,GR,0,Eq,[Jn],0,3,0,0,0,EQ,0,D,[],3,3,0,0,0,CS,0,D,[],3,3,0,0,0,Fc,0,D,[EQ,CS],0,3,0,0,0,E0,0,D,[],3,3,0,0,0,Br,0,D,[E0],0,3,0,0,0,Fu,0,Br,[],0,3,0,0,0,XB,0,Fu,[],0,0,0,0,0,F_,0,Bz,[],12,3,0,AKb,0,JU,0,D,[],3,3,0,0,0,GZ,0,D,[JU],3,3,0,0,0,En,0,D,[],3,3,0,0,0,Cu,0,D,
[En],1,3,0,0,0,YQ,0,Cu,[],0,0,0,0,0,JJ,0,Fc,[],0,3,0,0,0,FZ,0,D,[E0],0,3,0,0,0,T3,0,D,[],1,3,0,0,0,Sa,0,D,[],0,3,0,0,0]);
$rt_metadata([Rw,0,D,[],3,3,0,0,0,IN,0,D,[Rw],0,3,0,0,0,Xl,0,IN,[],0,0,0,0,0,Vw,0,Ek,[],0,3,0,0,0,ND,0,D,[],32,0,0,AOi,0,Wy,0,D,[],1,3,0,0,0,Pi,0,D,[],32,0,0,AOk,0,YP,0,Cu,[],0,0,0,0,0,D4,0,D,[JU],0,3,0,0,0,Pe,0,D4,[GZ],0,3,0,0,0,E$,0,D,[],4,3,0,AOt,0,I1,0,D,[E0],1,3,0,0,0,Rq,0,Fu,[],0,3,0,0,0,M$,0,D,[],0,3,0,0,0,Hu,0,D,[],0,3,0,AOz,0,JM,0,D,[E0],1,3,0,0,0,GE,0,D4,[GZ],0,3,0,0,0,Rr,0,D4,[GZ],0,3,0,0,0,CO,0,Br,[],0,3,0,0,0,Rh,0,GE,[],0,3,0,0,0,Tq,0,Ek,[],0,3,0,0,0,H6,0,D,[],3,3,0,0,0,Wh,0,Ek,[],0,3,0,0,0,U1,
0,D,[DH],4,3,0,0,0,Kt,0,D,[],32,0,0,AOC,0,Cs,0,Bz,[],12,3,0,AGM,0,BH,0,D,[DH],1,3,0,0,0,DF,0,BH,[],1,3,0,0,0,Vl,0,DF,[],0,3,0,0,0,Xd,0,DF,[],0,3,0,0,0,B5,0,BH,[],1,3,0,0,0,Dz,0,B5,[],1,3,0,0,0,Sg,0,Dz,[],0,3,0,0,0,S5,0,D,[E0],0,0,0,0,0,Ke,0,BH,[],0,3,0,0,0,Tv,0,Ke,[],0,3,0,0,0,Ut,0,BH,[],0,3,0,0,0,Wc,0,BH,[],0,3,0,0,0,X0,0,BH,[],0,3,0,0,0,Yn,0,D,[],0,3,0,0,0,IT,0,BH,[],1,3,0,0,0,V3,0,IT,[],0,3,0,0,0,TM,0,B5,[],0,3,0,0,0,YK,0,B5,[],0,3,0,0,0,Y6,0,Dz,[],0,3,0,0,0,Xx,0,BH,[],0,3,0,0,0,XE,0,Dz,[],0,3,0,0,0,ZN,0,
B5,[],0,3,0,0,0,Zs,0,B5,[],0,3,0,0,0,UH,0,BH,[],0,3,0,0,0]);
$rt_metadata([VT,0,B5,[],0,3,0,0,0,VY,0,BH,[],0,3,0,0,0,UR,0,BH,[],0,3,0,0,0,V5,0,DF,[],0,3,0,0,0,SD,0,B5,[],0,3,0,0,0,ZO,0,BH,[],0,3,0,0,0,Xj,0,Dz,[],0,3,0,0,0,UL,0,DF,[],0,3,0,0,0,W4,0,BH,[],0,3,0,0,0,S6,0,B5,[],0,3,0,0,0,VA,0,B5,[],0,3,0,0,0,Mo,0,D,[Cx],0,3,0,0,0,B9,0,GR,[H6],0,3,0,0,0,Cg,0,B9,[],0,3,0,AOU,0,Ew,0,Cg,[EQ],0,3,0,0,0,IH,0,Ew,[],0,3,0,0,0,TI,0,IH,[],0,3,0,0,0,YM,0,Br,[],0,0,0,0,0,Ju,0,B9,[],0,3,0,0,0,Oj,0,D,[],3,3,0,0,0,Du,0,D,[Oj],1,3,0,0,0,UC,0,Du,[],0,0,0,0,0,Cj,0,Eq,[H6],0,3,0,0,0,SI,0,Cj,
[],0,3,0,0,0,YL,0,Br,[],0,0,0,0,0,Bn,0,D,[],1,3,0,ALo,0,Pn,0,Bn,[],0,0,0,0,0,Xm,0,Bn,[],0,0,0,0,0,HV,0,CO,[],0,3,0,0,0,V0,0,HV,[],0,3,0,0,0,Rk,0,Bn,[],0,0,0,0,0,ZF,0,Br,[],0,0,0,0,0,FP,0,Cg,[],0,3,0,0,0,Xn,0,Bn,[],0,0,0,0,0,EN,0,D,[],3,3,0,0,0,DU,0,D,[Bx,EN],0,3,0,0,0,It,"Table$DebugRect",7,DU,[],0,3,0,AO7,0,UF,0,Du,[],0,0,0,0,0,DY,0,Cj,[EQ],0,3,0,0,0,TT,0,DY,[],0,3,0,0,0,VE,0,Br,[],0,0,0,0,0,MS,0,D,[],3,3,0,0,0,X4,0,D,[MS],0,3,0,0,0,ER,0,D,[],0,3,0,0,0,E7,0,ER,[],0,3,0,0,0,P$,0,E7,[],0,3,0,0,0,JH,0,Cj,[EQ],
0,3,0,0,0,U$,0,JH,[],0,3,0,0,0,AAi,0,Ju,[],0,0,0,0,0,H7,0,B9,[],0,3,0,0,0]);
$rt_metadata([AAA,0,Ew,[],0,3,0,0,0,JW,0,Cj,[Jn],0,3,0,0,0,Ri,0,Bn,[],0,0,0,0,0,Qu,0,D,[],0,3,0,0,0,UP,0,D,[En],0,0,0,0,0,V1,0,Br,[],0,0,0,0,0,WC,0,Cu,[],0,0,0,0,0,Vm,0,D,[],0,3,0,0,0,XQ,0,Br,[],0,0,0,0,0,Z$,0,CO,[],0,0,0,0,0,VC,0,FZ,[],0,0,0,0,0,Pj,0,Bn,[],0,0,0,0,0,Pm,0,Bn,[],0,0,0,0,0,OU,0,D,[],3,3,0,0,0,HF,0,D,[],0,3,0,0,0,Lk,0,HF,[],0,3,0,0,0,UD,0,Du,[],0,0,0,0,0,YJ,0,I1,[],0,0,0,0,0,YN,0,JM,[],0,0,0,0,0,ZG,0,Br,[],0,0,0,0,0,ZI,0,CO,[],0,0,0,0,0,Rj,0,Bn,[],0,0,0,0,0,C6,0,D,[DH],0,3,0,APk,0,Oc,0,E7,[],0,
3,0,0,0,VN,0,Br,[],0,0,0,0,0,SQ,0,Cu,[],0,0,0,0,0,Po,0,Bn,[],0,0,0,0,0,T5,0,B9,[],0,3,0,0,0,VD,0,Br,[],0,0,0,0,0,Ox,0,D,[],0,3,0,0,0,G$,0,Bn,[],0,3,0,0,0,UQ,0,H7,[],0,3,0,0,0,Pk,0,Bn,[],0,0,0,0,0,Or,0,Cj,[EQ],0,3,0,0,0,VJ,0,JJ,[],0,0,0,0,0,QZ,0,D,[],0,3,0,0,0,Id,0,Cj,[],0,3,0,APp,0,LL,0,D,[],0,3,0,0,0,Xo,0,Bn,[],0,0,0,0,0,Rl,0,Bn,[],0,0,0,0,0,Ys,0,FP,[],0,3,0,0,0,Pl,0,Bn,[],0,0,0,0,0,NE,0,D,[],0,3,0,0,0,Z7,0,D,[],0,3,0,0,0,DM,0,Bz,[],12,3,0,ANg,0,AAc,0,Bn,[],0,0,0,0,0,Vx,0,Cu,[],0,0,0,0,0,Cf,0,D,[],1,3,0,0,
0,Rm,0,Cf,[],0,0,0,0,0,SM,0,D,[OU],0,3,0,0,0]);
$rt_metadata([Q7,0,D,[],0,3,0,0,0,OJ,0,D,[],0,3,0,0,0,Pf,0,D,[],0,3,0,0,0,Hw,0,Br,[],0,3,0,0,0,SP,0,Cu,[],0,0,0,0,0,ZJ,0,JW,[],0,0,0,0,0,SN,0,D,[],3,3,0,0,0,VO,0,Br,[],0,0,0,0,0,AAt,0,B9,[],0,3,0,0,0,Xc,0,B9,[],0,3,0,0,0,VK,0,CO,[],0,0,0,0,0,JL,0,D,[],0,3,0,0,0,UB,0,JL,[],0,0,0,0,0,Zv,0,Eq,[Cx],0,3,0,0,0,Sq,0,Br,[],0,0,0,0,0,Yz,0,Ew,[],0,3,0,0,0,WQ,0,Br,[],0,0,0,0,0,Z0,0,CO,[],0,0,0,0,0,Qx,0,ER,[],0,3,0,0,0,Xe,0,B9,[],0,3,0,0,0,OA,0,D,[],0,3,0,0,0,NQ,0,D,[],0,3,0,0,0,WE,0,Cj,[],0,3,0,0,0,Z_,0,Fc,[],0,0,0,0,
0,Sr,0,Br,[],0,0,0,0,0,PO,0,B9,[],0,3,0,0,0,AAh,0,Hw,[],0,3,0,0,0,Ss,0,Cg,[],0,0,0,0,0,UE,0,Du,[],0,0,0,0,0,RX,0,D,[],1,3,0,0,0,Rg,0,D,[],0,3,0,0,0,CT,0,D,[Bx],0,3,0,APJ,0,V,0,D,[],1,3,0,ANb,0,L4,0,V,[],0,3,0,0,0,Vz,0,D,[],0,3,0,0,0,PZ,0,V,[],0,0,0,0,0,ZU,0,D,[],0,3,0,0,0,FT,0,V,[],0,3,0,0,0,F4,0,FT,[],0,3,0,0,0,FS,0,FT,[],0,3,0,0,0,Hl,0,D,[],3,3,0,0,0,Tx,0,D,[Hl],0,3,0,0,0,P2,0,V,[],0,0,0,0,0,YX,0,D,[EN],0,3,0,0,0,PY,0,V,[],0,0,0,0,0,FV,0,V,[],0,3,0,0,0,PX,0,V,[],0,0,0,0,0,PW,0,V,[],0,0,0,0,0,Hg,0,D,[],4,3,
0,0,0,R_,0,Cf,[],0,0,0,0,0]);
$rt_metadata([G6,0,D,[],3,3,0,0,0,Bt,0,D,[Bx,G6],0,3,0,0,0,O_,0,V,[],0,0,0,0,0,Gb,0,V,[],0,3,0,0,0,WD,0,D,[],0,3,0,0,0,P5,0,V,[],0,0,0,0,0,Kb,0,Gb,[],0,3,0,0,0,UN,0,D,[DH],0,3,0,0,0,EM,0,Bz,[],12,3,0,AMV,0,OH,0,D,[],0,3,0,AQB,0,Gn,0,V,[],0,3,0,0,0,N6,0,Gn,[],0,3,0,0,0,O7,0,V,[],0,0,0,0,0,WY,0,D,[Bx],4,3,0,0,0,PV,0,V,[],0,0,0,0,0,ED,0,D,[Bx,G6],0,3,0,AMJ,0,Ls,0,FV,[],0,3,0,0,0,NJ,0,V,[],0,3,0,0,0,Tr,0,D,[],0,3,0,0,0,AAn,0,D,[EN],0,3,0,0,0,P0,0,V,[],0,0,0,0,0,Q8,0,V,[],0,3,0,0,0,Pa,0,V,[],0,0,0,0,0,NH,0,FV,[],
0,3,0,0,0,HJ,0,D,[Bx],0,3,0,AQK,0,H3,0,D,[Bx],0,3,0,ANy,0,N1,0,D,[Bx],0,3,0,AQN,0,TA,0,D,[Bx],0,3,0,0,0,Sj,0,D,[Bx],0,3,0,0,0,XN,0,D,[Bx,EN],0,3,0,0,0,Vg,0,D,[Hl],0,3,0,0,0,PB,0,D,[],4,3,0,AHq,0,BP,0,D,[],4,3,0,ARb,0,SU,0,D,[],4,3,0,0,0,Ni,0,Gn,[],0,3,0,0,0,CL,0,D,[Bx],0,3,0,AGi,0,Mc,0,D,[],3,3,0,0,0,Hb,0,D,[Mc,Bx],0,3,0,0,0,O0,0,Hb,[],0,3,0,0,0,O$,0,V,[],0,0,0,0,0,P1,0,V,[],0,0,0,0,0,Hp,0,D,[],0,3,0,ARq,0,Kj,0,D,[Bx],0,3,0,AIB,0,R8,0,D,[],0,3,0,0,0,Xb,0,D,[],0,3,0,0,0,C7,0,D,[Bx,G6],0,3,0,AHT,0,UO,0,D,[Bx,
EN],0,3,0,0,0,T7,0,Cf,[],0,0,0,0,0,I9,0,Gb,[],0,3,0,0,0,Xp,0,D,[Hl],0,3,0,0,0]);
$rt_metadata([S3,0,D,[],0,3,0,0,0,Y8,0,D,[Bx],0,3,0,0,0,Q1,0,D,[Bx],0,3,0,0,0,O9,0,V,[],0,0,0,0,0,Y9,0,D,[],0,3,0,0,0,S4,0,D,[],0,3,0,0,0,XM,0,D,[],0,3,0,0,0,Y7,0,D,[Bx],0,3,0,0,0,WV,0,D,[],3,3,0,0,0,UT,0,D,[Bx],0,3,0,0,0,P_,0,D,[],0,0,0,0,0,Gx,0,D,[DH],0,3,0,AMA,0,J1,0,D,[],0,3,0,0,0,W9,0,J1,[],0,3,0,0,0,Nq,0,D,[Cx],0,3,0,0,0,PE,0,D,[],0,3,0,ARC,0,Bo,0,D,[],0,3,0,LP,0,Ko,0,D,[Cx],1,3,0,0,0,Qn,0,Ko,[],0,3,0,0,0,Jt,0,D,[CS],0,3,0,0,0,HI,0,D,[CS],0,3,0,0,0,U6,0,HI,[],0,3,0,0,0,Z6,0,D,[CS],0,3,0,0,0,F9,0,D,[],
4,3,0,0,0,AAb,0,D,[],0,3,0,0,0,VV,0,D,[],0,3,0,0,0,W$,0,D,[],0,3,0,0,0,Wr,0,D,[],0,3,0,0,0,NS,0,D,[],0,3,0,ASe,0,Sn,0,D,[],0,3,0,0,0,WI,0,D,[],0,3,0,0,0,Wd,0,D,[],0,3,0,0,0,Ww,0,D,[],0,3,0,0,0,YV,0,D,[],0,3,0,0,0,US,0,D,[],0,3,0,0,0,Zy,0,D,[],0,3,0,0,0,VG,0,D,[],0,3,0,0,0,S8,0,D,[],0,3,0,0,0,Tt,0,D,[],0,3,0,0,0,Gg,0,Bz,[],12,3,0,AMx,0,WL,0,D,[],0,3,0,0,0,PI,0,D,[],3,3,0,0,0,Ct,0,D,[],0,3,0,0,0,Sw,0,Ct,[],0,3,0,0,0,Sv,0,Ct,[],0,3,0,0,0,V7,0,Ct,[],0,3,0,0,0,T4,0,Ct,[],0,3,0,0,0,XO,0,Ct,[],0,3,0,0,0,I3,0,Ct,[],
0,3,0,0,0,TX,0,I3,[],0,3,0,0,0]);
$rt_metadata([FK,0,D,[],3,3,0,0,0,Up,0,D,[Cx,FK],0,3,0,0,0,D3,0,D,[],3,3,0,0,0,XL,0,D,[D3,FK],0,3,0,0,0,Zw,0,D,[D3],0,3,0,0,0,Tj,0,D,[],0,3,0,0,0,DA,0,D,[D3],0,3,0,0,0,Xs,0,DA,[],0,3,0,0,0,FH,0,DA,[FK,D3],1,3,0,0,0,CJ,0,FH,[],1,3,0,ASj,0,XF,0,D,[],0,3,0,0,0,YU,0,CJ,[],4,3,0,0,0,VQ,0,CJ,[],4,3,0,0,0,Rn,0,DA,[],0,3,0,0,0,IC,0,DA,[],0,3,0,0,0,Sl,0,IC,[],0,3,0,0,0,TW,0,CJ,[],4,3,0,0,0,Fd,0,FH,[],1,3,0,0,0,Wn,0,Fd,[],4,3,0,0,0,VP,0,CJ,[],4,3,0,0,0,Wx,0,CJ,[],4,3,0,0,0,Wl,0,Fd,[],4,3,0,0,0,EO,0,Bz,[],12,3,0,AL6,0,Es,
0,D,[Cx,D3,FK],1,3,0,0,0,JG,0,Es,[D3],1,3,0,0,0,R0,0,JG,[D3],0,3,0,0,0,EV,0,Bz,[],12,3,0,AMj,0,B3,0,Es,[],1,3,0,0,0,Gl,0,B3,[],1,3,0,0,0,Tg,0,D,[],0,3,0,0,0,DB,0,B3,[],1,3,0,ASx,0,Dr,0,DB,[],1,3,0,0,0,Ey,0,Dr,[],1,3,0,0,0,Uo,0,Ey,[],0,3,0,0,0,FQ,0,B3,[],1,3,0,0,0,AAp,0,FQ,[],0,3,0,0,0,YS,0,B3,[],0,3,0,0,0,Ea,0,B3,[],1,3,0,0,0,Sp,0,Ea,[],0,3,0,0,0,Ft,0,B3,[],1,3,0,0,0,Um,0,Dr,[],0,3,0,0,0,Vf,0,Dr,[],0,3,0,0,0,Ih,0,B3,[],1,3,0,0,0,Xt,0,Ih,[],0,3,0,0,0,S0,0,Ea,[],0,3,0,0,0,VU,0,Ey,[],0,3,0,0,0,Xq,0,B3,[],0,3,0,
0,0,WB,0,Ea,[],0,3,0,0,0,Xw,0,B3,[],0,3,0,0,0,X5,0,DB,[],0,3,0,0,0]);
$rt_metadata([Vh,0,Cf,[],0,0,0,0,0,Ta,0,Cf,[],0,0,0,0,0,Te,0,Dr,[],0,3,0,0,0,XD,0,Ft,[],0,3,0,0,0,ZS,0,Gl,[],0,3,0,0,0,W2,0,Gl,[],0,3,0,0,0,XV,0,Ft,[],0,3,0,0,0,Wa,0,Ey,[],0,3,0,0,0,Z2,0,FQ,[],0,3,0,0,0,Dy,0,Es,[],1,3,0,0,0,Wp,0,Dy,[],0,3,0,0,0,Ei,0,D,[],1,3,0,0,0,XJ,0,Ei,[],0,3,0,0,0,Yg,0,Dy,[],0,3,0,0,0,YR,0,Dy,[],0,3,0,0,0,Zi,0,Ei,[],0,3,0,0,0,Ug,0,Dy,[],0,3,0,0,0,YW,0,Ei,[],0,3,0,0,0,HT,0,D,[],3,3,0,0,0,KA,0,D,[],3,3,0,0,0,Ga,0,D,[HT,KA],0,3,0,0,0,Tw,0,D,[],4,0,0,0,0,Tc,0,D,[],4,3,0,0,0,Cv,0,D,[],0,3,0,
0,["gb",ANE(AIL)],Cp,0,Cv,[],0,3,0,0,0,Bq,"RuntimeException",15,Cp,[],0,3,0,0,0,VM,"ClassCastException",15,Bq,[],0,3,0,0,0,HC,0,D,[],3,3,0,0,0,BA,0,D,[Bx,Ck,HC],0,3,0,I8,["bs",ANE(ACv),"eR",ANF(Bh),"iw",ANE(Hc)],FF,0,Cv,[],0,3,0,0,0,Gs,0,FF,[],0,3,0,0,0,U9,0,Gs,[],0,3,0,0,0,Dq,0,D,[Bx],1,3,0,0,0,Ds,0,Dq,[Ck],0,3,0,0,0,Fz,0,D,[Bx,HC],0,0,0,0,["ex",ANF(Ib),"bs",ANE(R)],GU,0,D,[],3,3,0,0,0,Q,0,Fz,[GU],0,3,0,0,["ic",ANI(AFO),"hh",ANH(ADH),"bs",ANE(GB),"ex",ANF(AFV),"iL",ANG(AGj)],Gc,0,Gs,[],0,3,0,0,0,Xk,0,Gc,[],
0,3,0,0,0,UJ,0,Gc,[],0,3,0,0,0,Bp,"IndexOutOfBoundsException",15,Bq,[],0,3,0,0,0,Zm,0,Bp,[],0,3,0,0,0,FO,"NullPointerException",15,Bq,[],0,3,0,0,0,Ik,0,D,[],4,3,0,0,0,Hj,0,D,[],4,3,0,0,0,Ym,0,D,[],4,3,0,0,0,N9,0,D,[],4,3,0,0,0,Xy,0,D,[],0,3,0,0,0,Nt,0,D,[],0,3,0,AL2,0,J7,0,Dq,[Ck],0,3,0,0,0]);
$rt_metadata([YT,0,D,[],0,3,0,0,0,Vj,0,D,[],4,3,0,0,0,LM,"GlyphLayout$GlyphRun",9,D,[DH],0,3,0,0,0,Xv,0,D,[],0,3,0,0,0,Jk,0,D,[],3,3,0,0,0,Io,0,D,[Jk],1,3,0,0,0,D0,0,D,[],3,3,0,0,0,VR,0,Io,[D0,Bx],0,3,0,0,0,Qk,0,D,[J8],0,3,0,0,0,W1,0,D,[],4,3,0,0,0,Hy,"ArrayStoreException",15,Bq,[],0,3,0,0,0,CQ,0,D,[Ck],0,3,0,0,0,Bu,"IllegalArgumentException",15,Bq,[],0,3,0,0,0,F5,0,D,[],4,3,0,AMT,0,Qq,"CloneNotSupportedException",15,Cp,[],0,3,0,0,0,Mr,0,Cf,[],0,3,0,0,0,S1,0,D,[CS],0,3,0,0,0,Op,0,Dq,[Ck],0,3,0,0,0,S7,0,D,[],
4,3,0,0,0,EE,"ReflectionException",4,Cp,[],0,3,0,0,0,Th,0,D,[],4,3,0,0,0,H_,0,Bq,[],0,3,0,0,0,IX,0,Cp,[],0,3,0,0,0,Fx,"NoSuchMethodException",15,IX,[],0,3,0,0,0,Nz,0,D,[],0,3,0,0,0,Mx,0,D,[],3,3,0,0,0,IQ,0,D,[Mx,En],0,3,0,0,0,Rd,0,D,[],3,3,0,0,0,Jr,0,D,[Rd],1,3,0,0,0,MO,0,Jr,[],0,3,0,0,0,Gm,"StringIndexOutOfBoundsException",15,Bp,[],0,3,0,0,0,Yo,0,D,[],4,3,0,0,0,Kv,0,D,[],3,3,0,0,0,FI,0,D,[Kv,D0],0,0,0,0,0,G_,0,FI,[],0,0,0,0,0,NU,0,D,[],0,3,0,0,0,SR,0,D,[],0,3,0,0,0,JA,0,D,[HT],0,3,0,0,0,NZ,0,D,[],3,3,0,0,0,Eg,
0,JA,[NZ],0,3,0,0,0,E5,0,Bz,[],12,3,0,GO,0,KV,0,D,[],3,3,0,0,0,BS,0,D,[],3,3,0,0,0,NR,0,D,[BS],3,3,0,0,0,O4,0,D,[KV,NR],0,3,0,AEX,["xx",ANF(AHQ)],TP,0,D,[],0,3,0,0,0,Ks,0,D,[],3,3,0,0,0,Lv,0,D,[Ks],0,3,0,0,0,MB,0,D,[],0,3,0,0,0,IF,0,D,[],0,3,0,0,0]);
$rt_metadata([Pt,0,D,[],3,3,0,0,0,H8,0,D,[Pt],0,3,0,AMM,0,KO,0,D,[],0,3,0,0,0,CB,0,D,[],0,3,0,0,["dX",ANF(AGB)],Pc,0,D,[],3,3,0,0,0,Dm,0,D,[BS],3,3,0,0,0,WN,0,D,[Pc,Dm],0,3,0,0,["bn",ANF(ABr)],OC,0,D,[],3,3,0,0,0,Qe,0,D,[OC],0,3,0,0,0,PD,0,D,[PI],0,3,0,0,0,Pu,0,D,[],3,3,0,0,0,Ny,0,D,[Pu],0,3,0,0,0,L_,0,D,[],3,3,0,0,0,Pz,0,D,[L_],0,3,0,0,0,Df,0,D,[],0,3,0,0,0,Qi,0,D,[],3,3,0,0,0,PG,0,D,[Qi],3,3,0,0,0,Ur,0,D,[PG],0,3,0,0,0,Sd,0,D,[Dm],0,0,0,0,["bn",ANF(AIe)],Se,0,D,[Dm],0,0,0,0,["bn",ANF(AKx)],Zb,0,D,[],4,3,0,
0,0,RU,"NegativeArraySizeException",15,Bq,[],0,3,0,0,0,V2,0,D,[BS],1,3,0,0,0,Jf,0,D,[],3,3,0,0,0,Gr,0,D,[Jf],0,3,0,0,["fa",ANG(Nv),"cf",ANG(Rs),"cI",ANI(M4),"ix",ANF(QD),"hC",ANF(NT),"g2",ANE(RE),"hZ",ANF(Px),"ff",ANF(OZ),"e$",ANH(Mw),"ht",ANI(N_),"ij",ANI(OP),"iZ",ANF(QT),"iu",ANI(Lg),"iN",ANI(Og),"fo",ANG(M1),"f6",ANF(Rz),"dE",ANH(OY),"hI",ANF(Om),"hD",ANH(Mu),"dZ",ANF(M9),"eQ",ANG(M7),"f$",ANF(Lu),"i1",ANG(Kw),"hb",ANG(Ps),"iA",ANF(Lx),"iq",function(b,c,d,e,f,g){Ov(this,b,c,d,e,f,g);},"gs",ANI(KJ)],OB,0,
D,[Jf],3,3,0,0,0,Kd,0,Gr,[OB],0,3,0,0,["i3",ANF(UM),"mU",ANI(WS),"l_",function(b,c,d,e,f){AAl(this,b,c,d,e,f);},"jI",ANG(W7)],Lw,0,Kd,[],0,3,0,0,["i3",ANF(AD5),"mU",ANI(ACi),"l_",function(b,c,d,e,f){AKo(this,b,c,d,e,f);},"jI",ANG(ABL),"ix",ANF(AJq),"e$",ANH(ADF),"ht",ANI(AHW),"dZ",ANF(AAE),"gs",ANI(AED),"fa",ANG(AFW),"cf",ANG(AJ9),"cI",ANI(AGt),"hC",ANF(AG2),"g2",ANE(AKT),"hZ",ANF(AH5),"ff",ANF(AKM),"ij",ANI(AB1),"iZ",ANF(AH8),"iu",ANI(AE9),"iN",ANI(AJo),"fo",ANG(AGJ),"dE",ANH(ACZ),"f6",ANF(ABf),"hD",ANH(AKR),
"hI",ANF(ABC),"eQ",ANG(ABh),"f$",ANF(AKi),"i1",ANG(ABd),"hb",ANG(ACr),"iA",ANF(ALa),"iq",function(b,c,d,e,f,g){AIu(this,b,c,d,e,f,g);}],M2,0,D,[],0,3,0,0,0,Dn,0,Bz,[],12,3,0,AAT,0,PP,0,D,[BS],3,3,0,0,0,Pv,0,D,[PP],0,0,0,0,["yW",ANE(ADy)],Q_,0,Gr,[],0,3,0,0,["ix",ANF(AC5),"e$",ANH(AFd),"ht",ANI(AKI),"dZ",ANF(AFR),"gs",ANI(AKP),"fa",ANG(ABb),"cf",ANG(AAD),"cI",ANI(AFz),"hC",ANF(AK3),"g2",ANE(AHm),"hZ",ANF(AKV),"ff",ANF(AHk),"ij",ANI(AEK),"iZ",ANF(AKZ),"iu",ANI(AFC),"iN",ANI(ACh),"fo",ANG(AEP),"dE",ANH(AEc),"f6",
ANF(AEg),"hD",ANH(ABl),"hI",ANF(AIx),"eQ",ANG(AJz),"f$",ANF(AGa),"i1",ANG(AKE),"hb",ANG(AKS),"iA",ANF(ABm),"iq",function(b,c,d,e,f,g){ACQ(this,b,c,d,e,f,g);}],JD,0,D,[CS],0,3,0,0,0,V8,0,D,[],0,3,0,0,0,Qs,0,D,[BS],3,3,0,0,0,Wv,0,D,[Qs],0,0,0,0,["u0",ANE(AA$),"wT",ANE(ADm),"zY",ANE(AA1)],HD,0,D,[],3,3,0,0,0,Ka,0,D,[HD],0,3,0,0,0,KP,0,CB,[],0,0,0,0,0,DQ,0,D,[BS],3,3,0,0,0,ME,0,D,[DQ],3,3,0,0,0,NX,0,D,[DQ],3,3,0,0,0,NM,0,D,[DQ],3,3,0,0,0,O8,0,D,[DQ],3,3,0,0,0,Rp,0,D,[DQ],3,3,0,0,0,P4,0,D,[DQ,ME,NX,NM,O8,Rp],3,3,
0,0,0,Ma,0,D,[],3,3,0,0,0,Ip,0,D,[BS],3,3,0,0,0,SE,0,D,[BS,P4,Ma,Ip],1,3,0,0,["tI",ANF(AHC),"vZ",ANG(AJf),"zu",ANG(AIU),"xw",ANH(AHx),"wE",ANF(AKc),"wJ",ANE(ACS),"vy",ANH(AA0)]]);
$rt_metadata([IP,0,D,[],1,3,0,0,0,Gi,0,IP,[Jk,D0,Bx],0,3,0,0,0,JF,0,Gi,[],0,3,0,0,0,U0,0,D,[],0,3,0,0,0,Ep,0,Bz,[],12,3,0,EB,0,CC,0,D,[BS],1,3,0,0,0,TZ,0,CC,[],1,3,0,0,0,TB,0,CC,[],1,3,0,0,0,VX,0,CC,[],1,3,0,0,0,W6,0,CC,[],1,3,0,0,0,Vd,0,CC,[],1,3,0,0,0,Nf,0,D,[Dm],0,0,0,0,["bn",ANF(AFp)],Ng,0,D,[Dm],0,0,0,0,["bn",ANF(AKJ)],Nb,0,D,[Dm],0,0,0,0,["bn",ANF(AH1)],Os,0,Cf,[],0,3,0,0,0,Qv,0,D,[BS],3,3,0,0,0,Lb,0,D,[Qv],0,0,0,0,["vt",ANE(ADX)],Tu,0,CC,[],1,3,0,0,0,NG,0,D,[Bx],4,3,0,0,0,Dh,0,D,[],4,3,0,GY,0,Nu,0,D,
[],3,3,0,0,0,K6,0,D,[Nu],0,0,0,0,0,Hq,0,D,[],3,3,0,0,0,K5,0,D,[Hq],0,0,0,0,0,JX,0,D,[],3,3,0,0,0,OD,0,D,[JX],4,3,0,0,0,B6,"NumberFormatException",15,Bu,[],0,3,0,0,0,Bj,0,D,[],1,0,0,0,["W",ANH(GG),"X",ANI(GS),"er",ANE(ACq),"u",ANF(AJR),"Q",ANF(AJQ),"cM",ANE(AKB),"bS",ANE(HL)],ZX,0,D,[BS],1,3,0,0,0,Uz,0,D,[BS],1,3,0,0,0,AAu,0,D,[BS],1,3,0,0,0,Ir,0,D,[BS],3,3,0,0,0,OS,0,D,[Ir],0,3,0,0,["t8",ANF(AJZ)],U8,0,D,[BS],1,3,0,0,0,OQ,0,D,[Ir],0,3,0,0,["t8",ANF(ABG)],GH,0,FI,[],0,0,0,0,0,Cw,0,Bj,[],0,0,0,Kg,["a",ANH(ABR),
"p",ANF(ACf)],FX,0,D,[],0,0,0,0,0,Q6,"PatternSyntaxException",12,Bu,[],0,3,0,0,["gb",ANE(AKy)],H$,0,D,[CS],3,3,0,0,0,Jd,0,D,[H$],1,3,0,0,0,Oi,0,D,[H$],3,3,0,0,0,KM,0,D,[Oi],3,3,0,0,0,Ie,0,Jd,[KM],1,3,0,0,0,PC,0,D,[],3,3,0,0,0,SW,0,Ie,[D0,Bx,PC],0,3,0,0,0,Od,0,Cw,[],0,0,0,0,["a",ANH(ABj),"p",ANF(AIP)],RC,0,Cw,[],0,0,0,0,["a",ANH(ADb)],MY,0,Cw,[],0,0,0,0,["a",ANH(ACp)],Jj,0,Cw,[],0,0,0,0,["a",ANH(ABv),"p",ANF(AHS)]]);
$rt_metadata([EW,0,Cw,[],0,0,0,0,["a",ANH(AJ6)],BK,0,Bj,[],1,0,0,0,["a",ANH(AK4),"R",ANE(AJr),"p",ANF(AFq)],Y0,0,BK,[],0,0,0,0,["F",ANG(AI9),"W",ANH(AEf),"X",ANI(AC4),"p",ANF(ABq)],BI,0,Bj,[],0,0,0,0,["a",ANH(AEL),"u",ANF(AHM),"Q",ANF(AF_),"p",ANF(AIg),"bS",ANE(ACW)],HG,0,BI,[],0,0,0,0,["a",ANH(AHA),"p",ANF(AIy)],Dk,0,HG,[],0,0,0,0,["a",ANH(ADz),"u",ANF(AIl)],KF,0,Dk,[],0,0,0,0,["a",ANH(AHH),"p",ANF(AJV)],QK,0,Dk,[],0,0,0,0,["a",ANH(AB$),"p",ANF(AJy)],NK,0,Dk,[],0,0,0,0,["a",ANH(ACT),"p",ANF(ALg)],O6,0,Dk,[],
0,0,0,0,["a",ANH(AAW),"p",ANF(AIJ)],FJ,0,BI,[],0,0,0,0,["a",ANH(AA_),"W",ANH(AGl),"X",ANI(AIV),"Q",ANF(AF7),"cM",ANE(AHO),"bS",ANE(AKF)],F0,0,D,[],1,0,0,0,0,W,0,F0,[],1,0,0,Mb,["bp",ANE(ACb),"ch",ANE(ABB),"fs",ANE(AJl),"dN",ANE(AKA)],Tk,"CharClass",12,W,[],0,0,0,0,["f",ANF(CI),"bp",ANE(CF),"ch",ANE(AD$),"fs",ANE(AJK),"bs",ANE(AGY),"dN",ANE(AEk)],HR,"MissingResourceException",11,Bq,[],0,3,0,0,0,Dg,0,Bj,[],1,0,0,0,["Q",ANF(AIY),"p",ANF(AJ3),"bS",ANE(AGF)],Cn,0,Dg,[],0,0,0,0,["a",ANH(AAY)],EC,0,Cn,[],0,0,0,0,["a",
ANH(ABT)],CA,0,Dg,[],0,0,0,0,["a",ANH(AA9)],D6,0,Cn,[],0,0,0,0,["a",ANH(AGs),"u",ANF(ALj)],QS,0,Cn,[],0,0,0,0,["a",ANH(AKY),"W",ANH(AGW)],Bb,0,D,[],1,0,0,0,0,DG,"Quantifier",12,F0,[D0],0,0,0,0,["bs",ANE(AG5)],LK,0,Bj,[],0,0,0,0,["a",ANH(AFL),"p",ANF(AHL)],Rb,0,D,[D0,Bx],0,3,0,0,0,KK,0,BI,[],0,0,0,0,0,M_,0,BI,[],0,0,0,0,["a",ANH(ABM),"u",ANF(AHy),"p",ANF(ACt),"Q",ANF(ACa)],Ci,0,BI,[],0,0,0,0,["a",ANH(AD0),"f",ANF(AEt),"Q",ANF(ABH),"u",ANF(AJg),"p",ANF(AEa)],HP,0,Ci,[],0,0,0,0,["f",ANF(AFr)],Td,0,BK,[],0,0,0,
0,["F",ANG(AFM)],CK,0,BK,[],0,0,0,0,["F",ANG(Ku),"Q",ANF(AHN)],Im,0,BI,[],0,0,0,0,["u",ANF(AGr),"a",ANH(AAO),"Q",ANF(ACm),"p",ANF(AJN)],CR,0,BK,[],0,0,0,0,["R",ANE(AFy),"F",ANG(AEW),"W",ANH(ADZ),"X",ANI(AFF),"Q",ANF(AJJ)],ZQ,0,BK,[],0,0,0,0,["F",ANG(AAI)],R7,0,BK,[],0,0,0,0,["F",ANG(AA6)],D_,0,BI,[],0,0,0,0,["u",ANF(AKD),"a",ANH(AHz),"Q",ANF(AFN),"p",ANF(AIo)],Ru,0,D_,[],0,0,0,0,0,Pp,0,D_,[],0,0,0,0,0,RV,0,CA,[],0,0,0,0,["a",ANH(ADh)],MR,0,CA,[],0,0,0,0,["a",ANH(AGN)],E_,0,CA,[],0,0,0,0,["a",ANH(AJe),"u",ANF(AJ$)],MC,
0,E_,[],0,0,0,0,["a",ANH(AFD),"u",ANF(AG6)],EH,0,CA,[],0,0,0,0,["a",ANH(ALe)],K9,0,EH,[],0,0,0,0,["a",ANH(AFb)],N2,0,CA,[],0,0,0,0,["a",ANH(AKN)],Nm,0,E_,[],0,0,0,0,["a",ANH(ACu)],P7,0,EH,[],0,0,0,0,["a",ANH(ABw)],N5,0,Dg,[],0,0,0,0,["a",ANH(AK6),"W",ANH(AJm)],LQ,0,Dg,[],0,0,0,0,["a",ANH(AHP),"W",ANH(AAU)],Ej,0,D,[],1,0,0,0,0]);
$rt_metadata([RW,0,Cn,[],0,0,0,0,["a",ANH(ABy)],QN,0,D6,[],0,0,0,0,["a",ANH(AGL)],Mn,0,EC,[],0,0,0,0,["a",ANH(AI1)],Nj,0,Cn,[],0,0,0,0,["a",ANH(AHJ)],Pw,0,D6,[],0,0,0,0,["a",ANH(ABE)],NL,0,EC,[],0,0,0,0,["a",ANH(AI_)],Vk,0,Bj,[],4,0,0,0,["a",ANH(AF8),"p",ANF(AFl)],T1,0,Bj,[],0,0,0,0,["a",ANH(AB9),"p",ANF(ACl)],S9,0,Bj,[],0,0,0,0,["a",ANH(AFt),"p",ANF(ALb)],Rf,0,Bj,[],4,0,0,0,["a",ANH(AIa),"p",ANF(AC8)],Zr,0,Bj,[],0,0,0,0,["a",ANH(AHw),"p",ANF(AAF)],Sy,0,Bj,[],0,0,0,0,["a",ANH(ACV),"p",ANF(AEF)],Zn,0,BI,[],0,
0,0,0,["a",ANH(AKQ),"u",ANF(ACo),"er",ANE(AHc),"p",ANF(ACn)],Ti,0,BI,[],4,0,0,0,["a",ANH(AHn),"u",ANF(AIM),"er",ANE(AAB),"p",ANF(AK1)],Zc,0,Bj,[],4,0,0,0,["a",ANH(AFS),"p",ANF(AEy)],WK,0,Bj,[],0,0,0,0,["a",ANH(AHu),"p",ANF(AEr)],R3,0,Bj,[],0,0,0,0,["a",ANH(AFe),"p",ANF(ADa)],Gf,0,BI,[],0,0,0,0,["a",ANH(ABz),"u",ANF(AIk),"p",ANF(AIz)],Zj,0,Gf,[],0,0,0,0,["a",ANH(ADg),"W",ANH(AJT),"X",ANI(ABn),"Q",ANF(AGI)],U_,0,Gf,[],0,0,0,0,["a",ANH(AGh)],LJ,0,Fz,[GU],0,3,0,0,["ic",ANI(AEl),"hh",ANH(ACe),"ex",ANF(ACC),"iL",
ANG(AJp)],N7,0,BK,[],0,0,0,0,["F",ANG(ADw),"W",ANH(AB4),"X",ANI(AEC),"Q",ANF(AE4)],KC,0,BK,[],0,0,0,0,["F",ANG(AGn)],Lc,0,BK,[],0,0,0,0,["F",ANG(AI3)],AAx,0,D,[],4,3,0,0,0,Ge,0,D,[],4,0,0,AII,0,Kx,0,BK,[],0,0,0,0,["F",ANG(AI7)],G7,0,BI,[],0,0,0,0,["u",ANF(AHG),"a",ANH(AC9),"W",ANH(AE2),"X",ANI(ADE),"Q",ANF(ABi),"p",ANF(AJA)],He,0,BI,[],0,0,0,0,["u",ANF(ACA),"a",ANH(AAX),"W",ANH(AHZ),"X",ANI(AI2),"Q",ANF(ADx),"p",ANF(AH4)],CH,0,BK,[],0,0,0,0,["F",ANG(AIA),"W",ANH(AG1),"X",ANI(ACy),"Q",ANF(AIq)],Qf,0,Ej,[],0,
0,0,0,["eh",ANF(ACL),"l$",ANG(AIv)],Qg,0,Ej,[],0,0,0,0,["eh",ANF(AJa),"l$",ANG(AKu)],XT,0,D,[],0,0,0,0,0,TJ,0,D,[],4,0,0,0,0,Tb,0,D,[],4,3,0,0,0,St,0,D,[],0,0,0,0,0,Ya,0,D,[],0,3,0,0,0,UZ,0,D,[],4,3,0,0,0,Jg,0,Bb,[],0,0,0,0,["k",ANE(Vi)],Iw,0,Bb,[],0,0,0,0,["k",ANE(Wt)],XR,0,Bb,[],0,0,0,0,["k",ANE(AIO)],Yt,0,Bb,[],0,0,0,0,["k",ANE(AJC)],Yw,0,Bb,[],0,0,0,0,["k",ANE(AD2)],Jb,0,Bb,[],0,0,0,0,["k",ANE(Tn)],JB,0,Jb,[],0,0,0,0,["k",ANE(Uw)],AAq,0,Bb,[],0,0,0,0,["k",ANE(AE1)],Kr,0,JB,[],0,0,0,0,["k",ANE(RZ)],VH,0,
Kr,[],0,0,0,0,["k",ANE(AGG)],We,0,Bb,[],0,0,0,0,["k",ANE(ADt)],TS,0,Bb,[],0,0,0,0,["k",ANE(AGD)]]);
$rt_metadata([Ty,0,Bb,[],0,0,0,0,["k",ANE(AKz)],YA,0,Bb,[],0,0,0,0,["k",ANE(AG$)],AAz,0,Bb,[],0,0,0,0,["k",ANE(AAP)],XU,0,Bb,[],0,0,0,0,["k",ANE(AFh)],XI,0,Bb,[],0,0,0,0,["k",ANE(AID)],Y4,0,Bb,[],0,0,0,0,["k",ANE(ADq)],SO,0,Bb,[],0,0,0,0,["k",ANE(ADI)],Sh,0,Bb,[],0,0,0,0,["k",ANE(AKr)],X6,0,Bb,[],0,0,0,0,["k",ANE(AAJ)],Yk,0,Bb,[],0,0,0,0,["k",ANE(AFU)],Uk,0,Bb,[],0,0,0,0,["k",ANE(ADP)],Wi,0,Bb,[],0,0,0,0,["k",ANE(AEG)],ZY,0,Bb,[],0,0,0,0,["k",ANE(AFX)],Yi,0,Bb,[],0,0,0,0,["k",ANE(AJP)],U5,0,Bb,[],0,0,0,0,["k",
ANE(AH$)],Uj,0,Bb,[],0,0,0,0,["k",ANE(AG3)],AAv,0,Bb,[],0,0,0,0,["k",ANE(AIK)],HY,0,Bb,[],0,0,0,0,["k",ANE(Wg)],Y_,0,HY,[],0,0,0,0,["k",ANE(AGR)],VS,0,Jg,[],0,0,0,0,["k",ANE(AB2)],Ue,0,Iw,[],0,0,0,0,["k",ANE(AET)],TF,0,Bb,[],0,0,0,0,["k",ANE(AGc)],T_,0,Bb,[],0,0,0,0,["k",ANE(AKj)],Vt,0,Bb,[],0,0,0,0,["k",ANE(AEo)],VI,0,Bb,[],0,0,0,0,["k",ANE(AAK)],Qt,0,D,[],0,3,0,0,0,HX,0,D,[],0,3,0,0,0,Nc,0,CB,[],0,0,0,0,["dX",ANF(AJn),"dz",ANF(ADR),"dH",ANG(AGX)],Bw,0,Bz,[],9,3,0,ACN,0,AAd,0,D,[],3,3,0,0,0,PU,0,D,[BS],3,3,
0,0,0,T8,0,D,[PU,BS],1,3,0,0,["u2",ANG(AKm),"vW",ANF(AHg),"vw",ANG(ACB),"xL",ANH(AFG),"zg",ANH(AJd)],Pq,0,D,[Dm],0,0,0,0,["bn",ANF(AGu)],DL,0,Bz,[],12,3,0,D7,0,QQ,"AbstractCharClass$1",12,W,[],0,0,0,0,["f",ANF(AD8)],QO,"AbstractCharClass$2",12,W,[],0,0,0,0,["f",ANF(AA8)],LV,"CharClass$18",12,W,[],0,0,0,0,["f",ANF(AF4),"bs",ANE(AEI)],L3,0,W,[],0,0,0,0,["f",ANF(AIC)],L1,0,W,[],0,0,0,0,["f",ANF(AI6)],L2,0,W,[],0,0,0,0,["f",ANF(AGm)],L7,0,W,[],0,0,0,0,["f",ANF(ADL)],L8,0,W,[],0,0,0,0,["f",ANF(AAC)],L5,0,W,[],0,
0,0,0,["f",ANF(AEN)],L6,0,W,[],0,0,0,0,["f",ANF(AGo)],L9,0,W,[],0,0,0,0,["f",ANF(AJW)],L$,0,W,[],0,0,0,0,["f",ANF(ADl)],LU,0,W,[],0,0,0,0,["f",ANF(ALk)],Ms,0,W,[],0,0,0,0,["f",ANF(AER)],LS,0,W,[],0,0,0,0,["f",ANF(ADj)],LT,0,W,[],0,0,0,0,["f",ANF(AEw)]]);
$rt_metadata([LY,0,W,[],0,0,0,0,["f",ANF(AFv)],LR,0,W,[],0,0,0,0,["f",ANF(AJH)],LW,0,W,[],0,0,0,0,["f",ANF(ACg)],LX,0,W,[],0,0,0,0,["f",ANF(AH2)],Mv,0,D,[],0,0,0,0,0,C0,0,D,[En],0,3,0,Ev,0,De,"IllegalStateException",15,Bq,[],0,3,0,0,0,GQ,"IllegalMonitorStateException",15,Bq,[],0,3,0,0,0,Qc,0,D,[JX],0,0,0,0,0,Yd,0,D,[],0,3,0,0,0,UA,0,D,[],4,3,0,0,0,Si,0,D,[BS],1,3,0,0,0,D$,0,D,[],3,3,0,0,0,RD,0,D,[D$],0,3,0,0,["cW",ANE(AJY)],QE,0,Bw,[],12,0,0,0,0,QF,0,Bw,[],12,0,0,0,0,QI,0,Bw,[],12,0,0,0,0,QJ,0,Bw,[],12,0,0,
0,0,QG,0,Bw,[],12,0,0,0,0,QH,0,Bw,[],12,0,0,0,0,QA,0,Bw,[],12,0,0,0,0,QB,0,Bw,[],12,0,0,0,0,Qz,0,Bw,[],12,0,0,0,0,La,0,D,[],3,3,0,0,0,On,0,D,[La],0,3,0,0,0,UI,0,D,[BS],4,3,0,0,0,NY,0,D,[],3,3,0,0,0,NF,0,D,[NY],0,0,0,0,["rr",ANF(G2),"rX",ANF(AKL)],OR,0,D,[D$],0,3,0,0,0,K7,0,FJ,[],0,0,0,0,["W",ANH(AEq),"X",ANI(ALd),"cM",ANE(AC7)],TL,0,D,[],4,3,0,0,0,Lj,0,D,[Hq],0,0,0,0,0,KW,0,C0,[],0,0,0,0,["cW",ANE(AHK)],KR,0,D,[],32,0,0,AME,0,Za,0,D,[BS,DQ],1,3,0,0,["yc",ANG(AF$),"zx",ANG(AGC),"v0",ANH(AAZ),"wA",ANF(AA4),"x1",
ANH(AEO)],Fe,0,D,[BS],3,3,0,0,0,KY,0,D,[Fe],0,0,0,0,["bn",ANF(VF)],OV,0,D,[],0,3,0,0,0,Uc,0,D,[Hq,CS],0,3,0,0,0,LH,0,D,[CS],0,3,0,0,0,Gv,0,D,[],4,3,0,0,0,KU,0,D,[En],0,0,0,0,0,RG,0,D,[],3,3,0,0,0,O1,0,D,[RG],3,3,0,0,0,PS,0,D,[],3,3,0,0,0,FE,0,D,[O1,PS],1,3,0,0,0,H0,0,FE,[],0,3,0,0,0,UG,0,H0,[],0,3,0,0,0,Fs,0,FE,[],1,3,0,0,0,Jw,0,Fs,[],0,3,0,0,["gM",ANH(AFB)]]);
$rt_metadata([K2,0,D,[Fe],0,0,0,0,["bn",ANF(AHj)],HU,0,D,[Ck],1,3,0,0,0,Kk,0,HU,[],0,3,0,AEp,0,Yl,"IllegalCharsetNameException",14,Bu,[],0,3,0,0,0,EF,0,Bz,[],12,3,0,So,0,RL,"NoSuchElementException",11,Bq,[],0,3,0,0,0,CM,"GdxRuntimeException",3,Bq,[],0,3,0,0,0,OT,"AbstractCharClass$LazyJavaLowerCase$1",12,W,[],0,0,0,0,["f",ANF(AJ5)],KI,"AbstractCharClass$LazyJavaUpperCase$1",12,W,[],0,0,0,0,["f",ANF(ABW)],Ol,"AbstractCharClass$LazyJavaWhitespace$1",12,W,[],0,0,0,0,["f",ANF(ABD)],Ok,"AbstractCharClass$LazyJavaMirrored$1",
12,W,[],0,0,0,0,["f",ANF(AEn)],Q5,"AbstractCharClass$LazyJavaDefined$1",12,W,[],0,0,0,0,["f",ANF(AFn)],Mk,"AbstractCharClass$LazyJavaDigit$1",12,W,[],0,0,0,0,["f",ANF(AJ7)],LF,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",12,W,[],0,0,0,0,["f",ANF(AHD)],Nx,"AbstractCharClass$LazyJavaISOControl$1",12,W,[],0,0,0,0,["f",ANF(AIH)],KE,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",12,W,[],0,0,0,0,["f",ANF(AK0)],KH,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",12,W,[],0,0,0,0,["f",ANF(ADC)],Ly,"AbstractCharClass$LazyJavaLetter$1",
12,W,[],0,0,0,0,["f",ANF(AKg)],MF,"AbstractCharClass$LazyJavaLetterOrDigit$1",12,W,[],0,0,0,0,["f",ANF(AGA)],MK,"AbstractCharClass$LazyJavaSpaceChar$1",12,W,[],0,0,0,0,["f",ANF(AIh)],Pg,"AbstractCharClass$LazyJavaTitleCase$1",12,W,[],0,0,0,0,["f",ANF(AJX)],OE,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",12,W,[],0,0,0,0,["f",ANF(AKK)],KQ,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",12,W,[],0,0,0,0,["f",ANF(ADs)],J$,"UnicodeCategory",12,W,[],0,0,0,0,["f",ANF(AHE)],Of,"UnicodeCategoryScope",12,J$,
[],0,0,0,0,["f",ANF(AJh)],Ql,0,D,[D$],0,3,0,0,["cW",ANE(ABJ)],Ul,0,D,[],4,3,0,0,0,Rx,0,D,[],32,0,0,ANk,0,QU,"ConcurrentModificationException",11,Bq,[],0,3,0,0,0,Yh,0,D,[Cx],0,3,0,0,0,I5,0,Fs,[],0,3,0,0,["gM",ANH(AEd)],EZ,0,D,[],0,0,0,0,0,GK,0,D,[],4,3,0,0,0,Qm,0,D,[],0,3,0,0,0,MQ,0,Dq,[Ck],0,3,0,0,0,Hm,0,D,[],4,3,0,0,0,Py,0,D,[],0,3,0,0,0,C2,0,D,[],1,3,0,0,0,Ow,0,D,[],3,3,0,0,0,Jm,0,C2,[Ck,GU,HC,Ow],1,3,0,0,0,DK,0,C2,[Ck],1,3,0,0,0,GI,0,D,[],0,3,0,AKd,0,JT,0,D,[],3,3,0,0,0,QR,0,D,[],3,3,0,0,0,LG,0,D,[D$,JT,
QR],0,0,0,0,["cW",ANE(AId)],Ix,0,Jm,[],1,0,0,0,0,NN,0,Ix,[],0,0,0,0,0,Jc,0,D,[],1,3,0,0,0,JS,0,D,[],0,3,0,0,0,Em,0,D,[],3,3,0,0,0]);
$rt_metadata([ZD,0,DK,[Em],0,0,0,0,0,GX,0,D,[],4,3,0,N4,0,Ja,0,Jc,[],1,3,0,0,0,MJ,0,Ja,[],0,3,0,0,0,PN,0,Cp,[],0,3,0,0,0,My,0,D,[],3,3,0,0,0,NB,0,D,[My],0,3,0,0,0,Je,0,D,[Cx],0,3,0,0,0,LN,0,D,[CS,Ck],4,3,0,0,0,Ld,0,D,[Cx],3,3,0,0,0,V4,0,D,[Ld],0,3,0,0,0,El,0,D,[Cx],0,3,0,AKW,0,Jo,0,D,[Cx],3,3,0,0,0,N3,0,D,[Jo],0,3,0,0,["hH",ANE(AEE),"jH",ANE(AIw),"lF",ANH(AHl),"iR",ANG(AEb),"io",ANG(ABO)],M6,0,D,[Jo],0,3,0,AL4,["hH",ANE(ABV),"jH",ANE(AGZ),"lF",ANH(AB6),"iR",ANG(AJt),"io",ANG(ADK)],XX,0,D,[],4,3,0,0,0,X2,0,D,
[CS],0,3,0,0,0,Fp,0,C2,[Ck],1,3,0,0,0,Fm,0,C2,[Ck],1,3,0,0,0,E1,0,C2,[Ck],1,3,0,0,0,WO,0,D,[BS],1,3,0,0,0,Gd,0,Fp,[],1,0,0,0,0,Q2,0,Gd,[],0,0,0,0,["iW",ANF(AEz)],FD,0,Fm,[],1,0,0,0,0,No,0,FD,[],0,0,0,0,["f0",ANF(AHh),"ft",ANG(AGf),"b2",ANE(AAN)],Fv,0,E1,[],1,0,0,0,0,QV,0,Fv,[],0,0,0,0,["iX",ANF(AH3),"gP",ANG(AHr),"b2",ANE(AHB)],Fl,0,Gd,[Em],1,0,0,0,["gy",ANE(AIG)],K_,0,Fl,[],0,0,0,0,["iW",ANF(ADk)],MZ,0,Fl,[],0,0,0,0,["iW",ANF(AG_)],F7,0,FD,[Em],1,0,0,0,["b2",ANE(AF2)],LB,0,F7,[],0,0,0,0,["f0",ANF(AEv),"ft",
ANG(AAM)],OX,0,F7,[],0,0,0,0,["f0",ANF(AJs),"ft",ANG(ABQ)],Fw,0,Fv,[Em],1,0,0,0,["b2",ANE(AHI),"gy",ANE(AIm)],Lh,0,Fw,[],0,0,0,0,["iX",ANF(AF6),"gP",ANG(AIi)],NC,0,Fw,[],0,0,0,0,["iX",ANF(AAS),"gP",ANG(AFY)],GP,"UnsupportedOperationException",15,Bq,[],0,3,0,0,0,Gq,"ReadOnlyBufferException",13,GP,[],0,3,0,0,0,JV,"BufferUnderflowException",13,Bq,[],0,3,0,0,0,Uq,0,D,[],4,3,0,0,0,Qa,0,D,[Fe],0,0,0,0,["bn",ANF(Ve)],PT,0,D,[D$,JT],3,0,0,0,0,SZ,0,D,[],0,0,0,0,0,GT,"BufferOverflowException",13,Bq,[],0,3,0,0,0,Pr,"CoderMalfunctionError",
14,FF,[],0,3,0,0,0,Lq,0,D,[],0,3,0,0,0,Jh,0,D,[],0,3,0,0,0,Nd,0,CB,[],0,0,0,0,0,Na,0,CB,[],0,0,0,0,["dX",ANF(Lz),"dz",ANF(HM),"dH",ANG(Ji)],K3,0,D,[],32,0,0,AM8,0]);
$rt_metadata([T$,0,D,[],0,3,0,0,0,Uy,0,D,[Ip],1,3,0,0,["tI",ANF(AK5),"zb",ANE(ACP)],Xa,0,D,[BS],1,3,0,0,0,K0,0,C0,[],0,0,0,0,["cW",ANE(ACG)],KZ,0,CB,[],0,0,0,0,["dX",ANF(ACJ),"dz",ANF(AGK),"dH",ANG(ABN)],K1,0,CB,[],0,0,0,0,["dX",ANF(AEB),"dz",ANF(ABc),"dH",ANG(AEQ)],Lt,0,D,[Fe],0,0,0,0,["bn",ANF(ZZ)],MN,0,D,[Dm],0,0,0,0,["bn",ANF(AD9)]]);
function $rt_array(cls,data){this.K=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","index can\'t be >= size: ",
" >= ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","<init>",": ","\tat ","Caused by: ","0","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","null","Either src or dest is null","java.version","1.8","os.name","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Class cannot be created (missing no-arg constructor): ",
"capacity must be >= 0: ","The required capacity is too large: ","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","java.runtime.name","userAgent","Windows","OS X","no OS",".html","index.html","index-debug.html","assets.txt","resize","gdx.wasm.js","LOAD_ASSETS","APP_CREATE","APP_LOOP","Loading asset : ","Loading script : ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})",
"(\\d(\\.\\d){0,2})","px","assets/","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","Can only cope with FloatBuffer and ShortBuffer at the moment","GL error: ",", ","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","loadFactor must be > 0 and < 1: ","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","Patter is null","object",
"function","string","number","undefined","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement",
"LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer",
"Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols",
"Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes",
"KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B",
"HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","Unsupported asset type ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","mp3","ogg","wav","Image","Audio","Text","t","Binary","Directory",
"main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","UTF-8","Point","Line","Filled","vertex shader must not be null","fragment shader must not be null","Error compiling shader: ","Call end() before beginning a new shape batch.","segments must be > 0.","begin must be called first.","Must call begin(ShapeType.",").",") or begin(ShapeType.",
"u_projModelView","New position "," is outside of range [0;","Capacity is negative: ","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst ","a_position","a_normal","a_color","a_texCoord","attributes must be >= 1","u_sampler","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n",
"varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",")",";\n}","No buffer allocated!","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","Fragment shader:\n",
"Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","data must be a ByteBuffer or FloatBuffer","The last float in src ","New limit ","Index ","Asset loaded: ","data:",";base64,","error"]);
BA.prototype.toString=function(){return $rt_ustr(this);};
BA.prototype.valueOf=BA.prototype.toString;D.prototype.toString=function(){return $rt_ustr(ACw(this));};
D.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cd=Long_add;var AFa=Long_sub;var BB=Long_mul;var X3=Long_div;var AA5=Long_rem;var AD6=Long_or;var CG=Long_and;var Zg=Long_xor;var EP=Long_shl;var AMd=Long_shr;var B4=Long_shru;var AUS=Long_compare;var C_=Long_eq;var AD7=Long_ne;var ALR=Long_lt;var ADS=Long_le;var ALP=Long_gt;var ALQ=Long_ge;var AUT=Long_not;var AMy=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}$rt_exports.main=$rt_mainStarter(AL5);
$rt_exports.main.javaException=$rt_javaException;
let ATY=$rt_globals.Symbol('jsoClass');
(function(){var c;c=O4.prototype;c[ATY]=true;c.onAnimationFrame=c.xx;c=WN.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Sd.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Se.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Pv.prototype;c[ATY]=true;c.fullscreenChanged=c.yW;c=Wv.prototype;c[ATY]=true;c.denied=c.zY;c.prompt=c.wT;c.granted=c.u0;c=SE.prototype;c.removeEventListener=c.xw;c.dispatchEvent=c.wE;c.get=c.tI;c.addEventListener=c.vy;Object.defineProperty(c,"length",{get:c.wJ});c=Nf.prototype;c[ATY]=true;c.handleEvent
=c.bn;c=Ng.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Nb.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Lb.prototype;c[ATY]=true;c.unlockFunction=c.vt;c=OS.prototype;c[ATY]=true;c.accept=c.t8;c=OQ.prototype;c[ATY]=true;c.accept=c.t8;c=T8.prototype;c.removeEventListener=c.zg;c.dispatchEvent=c.vW;c.addEventListener=c.xL;c=Pq.prototype;c[ATY]=true;c.handleEvent=c.bn;c=UI.prototype;c[ATY]=true;c=Za.prototype;c.removeEventListener=c.v0;c.dispatchEvent=c.wA;c.addEventListener=c.x1;c=KY.prototype;c[ATY]=true;c.handleEvent
=c.bn;c=K2.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Qa.prototype;c[ATY]=true;c.handleEvent=c.bn;c=Uy.prototype;c.get=c.tI;Object.defineProperty(c,"length",{get:c.zb});c=Lt.prototype;c[ATY]=true;c.handleEvent=c.bn;c=MN.prototype;c[ATY]=true;c.handleEvent=c.bn;})();
}));
