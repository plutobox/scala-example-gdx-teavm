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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ck=f;}
function $rt_cls(cls){return Se(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return HQ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.w.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_stecls(){return E;}
function $rt_throwableMessage(t){return AQn(t);}
function $rt_throwableCause(t){return AQt(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AWn());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Dv();}
function $rt_setThread(t){return EJ(t);}
function $rt_createException(message){return AWo(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AWp());}
function $rt_throwCCE(){$rt_throw(AWq());}
var A=Object.create(null);
var J=$rt_throw;var Cz=$rt_compare;var C=$rt_nullCheck;var H=$rt_cls;var K=$rt_createArray;var AD3=$rt_isInstance;var TF=$rt_nativeThread;var Ik=$rt_suspending;var ALj=$rt_resuming;var AGm=$rt_invalidPointer;var D=$rt_s;var T=$rt_eraseClinit;var DO=$rt_imul;var Bj=$rt_wrapException;var B=$rt_checkBounds;var AWr=$rt_checkUpperBound;var B$=$rt_checkLowerBound;var AWs=$rt_wrapFunction0;var AWt=$rt_wrapFunction1;var AWu=$rt_wrapFunction2;var AWv=$rt_wrapFunction3;var AWw=$rt_wrapFunction4;var F=$rt_classWithoutFields;var AWx
=$rt_createArrayFromData;var AWy=$rt_createCharArrayFromData;var AWz=$rt_createByteArrayFromData;var AWA=$rt_createShortArrayFromData;var AWB=$rt_createIntArrayFromData;var AWC=$rt_createBooleanArrayFromData;var AWD=$rt_createFloatArrayFromData;var AWE=$rt_createDoubleArrayFromData;var AWF=$rt_createLongArrayFromData;var Vv=$rt_createBooleanArray;var CE=$rt_createByteArray;var Yh=$rt_createShortArray;var BS=$rt_createCharArray;var Bk=$rt_createIntArray;var AEy=$rt_createLongArray;var C4=$rt_createFloatArray;var AWG
=$rt_createDoubleArray;var Cz=$rt_compare;var W=$rt_castToClass;var Dm=$rt_castToInterface;var AWH=$rt_equalDoubles;var AUP=Long_toNumber;var Bc=Long_fromInt;var AWI=Long_fromNumber;var G=Long_create;var Cs=Long_ZERO;var AWJ=Long_hi;var E1=Long_lo;
function E(){this.V=null;this.$id$=0;}
function EM(b){var c,d;c=C(b);if(c.V===null)Ro(c);b=C(c.V);d=b.bq;if(d===null)b.bq=Dv();else if(d!==Dv()){d=new CA;S(d,D(0));J(d);}b=C(c.V);b.bB=b.bB+1|0;}
function Cu(b){var c,d;b=C(b);if(!Gy(b)&&C(b.V).bq===Dv()){c=C(b.V);d=c.bB-1|0;c.bB=d;if(!d)c.bq=null;Gy(b);return;}b=new In;Y(b);J(b);}
function AVn(b){var c,d;c=C(b);if(c.V===null)Ro(c);d=C(c.V);if(d.bq===null)d.bq=Dv();if(C(c.V).bq!==Dv())AGR(c,1);else{b=C(c.V);b.bB=b.bB+1|0;}}
function Ro(b){var c;c=new O6;c.bq=Dv();C(b).V=c;}
function AU0(b,c,d){var e,f,g;e=Dv();f=C(b);g=f.V;if(g===null){Ro(f);EJ(e);b=C(f.V);b.bB=b.bB+c|0;Iz(C(d),null);return;}if(g.bq===null){g.bq=e;EJ(e);b=C(f.V);b.bB=b.bB+c|0;Iz(C(d),null);return;}if(g.c2===null)g.c2=AMp();b=g.c2;g=new RO;g.ox=e;g.oy=f;g.ov=c;g.ow=d;e=g;b.push(e);}
function AVr(b){var c,d;c=C(b);if(!Gy(c)&&C(c.V).bq===Dv()){b=C(c.V);d=b.bB-1|0;b.bB=d;if(d<=0){b.bq=null;b=b.c2;if(b!==null&&!I6(b)){b=new Vh;b.pe=c;AAW(b);}else Gy(c);}return;}b=new In;Y(b);J(b);}
function Gy(a){var b,c;b=a.V;if(b===null)return 1;a:{if(b.bq===null){c=b.c2;if(!(c!==null&&!I6(c))){b=b.lI;if(b===null)break a;if(I6(b))break a;}}return 0;}a.V=null;return 1;}
function CZ(a){return Se(a.constructor);}
function AJp(a){return HR(a);}
function AA0(a,b){return a!==b?0:1;}
function OE(a){var b,c,d;b=Cy(C(CZ(a)));c=Jl(HR(a));d=new N;Q(d);b=C(L(d,b));Be(b,64);L(b,c);return O(d);}
function HR(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AMM(a){var b,c,d;if(!AD3(a,EL)&&a.constructor.$meta.item===null){b=new TH;Y(b);J(b);}b=AGl(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Ml(a){var b,c;b=a.V;if(!(b!==null&&b.bq===Dv()?1:0)){b=new In;Y(b);J(b);}b=C(a.V).lI;if(b===null)return;while(!I6(b)){c=C(Dm(AB4(b),S1));if(!c.GG())AAW(c);}c=a.V;b=null;C(c).lI=b;}
function AGR(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wJ=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.xe=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AU3(callback);thread.suspend(function(){try{AU0(b,c,callback);}catch($e){callback.xe($rt_exception($e));}});return null;}
var V3=F();
function AUA(b){var c,d,e;Xt();ZP();AET();YD();AAx();AFd();ADk();AEg();AFi();ACn();AEs();Xo();X9();ZX();ADA();Ym();Za();Wv();Wg();ABz();AFn();AE_();AEE();Wn();AAI();XI();XX();ACK();Zi();YA();AAt();Zn();AFe();ACF();AFK();Xr();Zb();Yd();AFo();ADm();ACB();AAD();WW();ACV();WZ();c=C(AWK);c=new Qn;c.mP=0;c.sk=1;c.lT=0;c.r5=1;c.sq=D(1);c.ng=0;c.jC=(-1);c.fg=(-1);c.j8=0;c.mX=0;c.pp=0;c.oE=0;c.rb=0;c.p9=0;c.ql=0;c.mv=0;c.h0=1;c.sI=D(2);d=new KQ;e=new U9;d.gE=Hk(4);Il();d.eS=AWL;d.jj=(-1);d.my=1;d.lP=1;d.ua=EA();d.gc
=El();d.m0=El();d.c_=Hr();d.bY=c;d.g6=e;ADg(d);}
var Fx=F();
var AWM=0;var AWN=0;var AWO=0;var AWP=0;var AWQ=0;function AWR(){AWR=T(Fx);AL3();}
function AL3(){AWM=Cm(C($rt_str($rt_globals.navigator.platform)),D(3));AWN=Cm(C($rt_str($rt_globals.navigator.platform)),D(4));AWO=Cm(C($rt_str($rt_globals.navigator.platform)),D(5));AWP=!Cm(C($rt_str($rt_globals.navigator.platform)),D(6))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(7))?0:1;AWQ=!Cm(C($rt_str($rt_globals.navigator.platform)),D(8))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(9))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(10))?0:1;}
var MS=F(0);
var Lm=F();
var CH=F(0);
var ADZ=F(Lm);
var Dy=F(0);
var E_=F();
var CC=F(0);
var BG=F(0);
function Bo(){var a=this;E.call(a);a.nJ=null;a.r=0;}
function B_(a,b,c){a.nJ=b;a.r=c;}
function ADS(a){return a.r;}
function Ql(a){return C(a.nJ);}
var FH=F(Bo);
var AWS=null;var AWT=null;var AWU=null;var AWV=null;function AUx(){AUx=T(FH);AQK();}
function VQ(a,b){var c=new FH();ADU(c,a,b);return c;}
function ADU(a,b,c){AUx();B_(a,b,c);}
function AQK(){var b,c,d,e;AWS=VQ(D(11),0);AWT=VQ(D(12),1);b=VQ(D(13),2);AWU=b;c=K(FH,3);d=c.data;e=AWS;d[AWr(0,d)]=e;e=AWT;d[AWr(1,d)]=e;d[AWr(2,d)]=b;AWV=c;}
var Fi=F();
var Lq=F(0);
var Io=F(Fi);
var AWW=null;function ZP(){AWW=new BJ;}
var FO=F(0);
var Dg=F(0);
var Gg=F();
var F3=F(0);
var BD=F();
var AWX=null;function AET(){AWX=new BJ;}
var GC=F(BD);
var ACd=F(GC);
var Ht=F(Bo);
var AWY=null;var AWZ=null;var AW0=null;function ASj(){ASj=T(Ht);AG4();}
function AFT(a,b){var c=new Ht();ACb(c,a,b);return c;}
function ACb(a,b,c){ASj();B_(a,b,c);}
function AG4(){var b,c,d,e;AWY=AFT(D(14),0);b=AFT(D(15),1);AWZ=b;c=K(Ht,2);d=c.data;e=AWY;d[AWr(0,d)]=e;d[AWr(1,d)]=b;AW0=c;}
var L8=F(0);
var Iu=F(0);
var Fe=F(0);
var CW=F();
var ADI=F(CW);
var LV=F(Gg);
var Ha=F();
var AW1=null;var AW2=null;function YD(){AW1=new BJ;AW2=new BJ;}
var X5=F();
var VZ=F();
var U$=F(0);
var KL=F();
var ABY=F(KL);
var ZR=F(E_);
var Qr=F();
var AW3=null;function AW4(){AW4=T(Qr);ANc();}
function ANc(){var b,c;ASj();b=Bk(C(C(AW0).ck()).data.length);c=b.data;AW3=b;c[B(C(AWY).r,c)]=1;c[B(C(AWZ).r,c)]=2;}
var AAZ=F();
var Sq=F();
var AW5=null;function AW6(){AW6=T(Sq);AIT();}
function AIT(){var b,c;b=Bk(C(NP()).data.length);c=b.data;AW5=b;c[B(C(AW7).r,c)]=1;c[B(C(AW8).r,c)]=2;c[B(C(AW9).r,c)]=3;}
var ADH=F(CW);
var ER=F();
var Sk=F(ER);
var Gc=F();
var AW$=0;var AW_=0;var AXa=0;var AXb=0;var AXc=0;function AXd(){AXd=T(Gc);ASH();}
function ASH(){AW$=Cm(C($rt_str($rt_globals.navigator.platform)),D(3));AW_=Cm(C($rt_str($rt_globals.navigator.platform)),D(4));AXa=Cm(C($rt_str($rt_globals.navigator.platform)),D(5));AXb=!Cm(C($rt_str($rt_globals.navigator.platform)),D(6))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(7))?0:1;AXc=!Cm(C($rt_str($rt_globals.navigator.platform)),D(8))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(9))&&!Cm(C($rt_str($rt_globals.navigator.platform)),D(10))?0:1;}
var K0=F();
var U1=F(GC);
var AXe=null;function AAx(){AXe=new BJ;}
var P2=F();
var AXf=null;function AFd(){AXf=new BJ;}
var I9=F();
var AXg=null;var AXh=null;var AXi=null;function AXj(){AXj=T(I9);AQw();}
function AQw(){AXg=El();AXh=Br();AXi=new EH;}
var L0=F();
var Ib=F(ER);
var U2=F(ER);
var Db=F(BD);
var AXk=0.0;function AEg(){AXk=0.10000000149011612;}
var UQ=F(Ib);
var Xu=F(E_);
var JR=F(0);
var AAK=F(E_);
var Zf=F();
var MH=F();
var AXl=null;function AXm(){AXm=T(MH);AR0();}
function AR0(){var b,c;b=Bk(C(NP()).data.length);c=b.data;AXl=b;c[B(C(AXn).r,c)]=1;c[B(C(AXo).r,c)]=2;c[B(C(AXp).r,c)]=3;c[B(C(AW7).r,c)]=4;c[B(C(AW8).r,c)]=5;c[B(C(AW9).r,c)]=6;c[B(C(AXq).r,c)]=7;c[B(C(AXr).r,c)]=8;c[B(C(AXs).r,c)]=9;c[B(C(AXt).r,c)]=10;}
var CU=F(Bo);
var AW7=null;var AW8=null;var AW9=null;var AXq=null;var AXs=null;var AXt=null;var AXr=null;var AXn=null;var AXo=null;var AXp=null;var AXu=null;function ANT(){ANT=T(CU);AIN();}
function EI(a,b){var c=new CU();ABg(c,a,b);return c;}
function NP(){ANT();return C(AXu).ck();}
function ABg(a,b,c){ANT();B_(a,b,c);}
function AIN(){var b,c,d,e;AW7=EI(D(16),0);AW8=EI(D(17),1);AW9=EI(D(18),2);AXq=EI(D(19),3);AXs=EI(D(20),4);AXt=EI(D(21),5);AXr=EI(D(22),6);AXn=EI(D(23),7);AXo=EI(D(24),8);b=EI(D(25),9);AXp=b;c=K(CU,10);d=c.data;e=AW7;d[AWr(0,d)]=e;e=AW8;d[AWr(1,d)]=e;e=AW9;d[AWr(2,d)]=e;e=AXq;d[AWr(3,d)]=e;e=AXs;d[AWr(4,d)]=e;e=AXt;d[AWr(5,d)]=e;e=AXr;d[AWr(6,d)]=e;e=AXn;d[AWr(7,d)]=e;e=AXo;d[AWr(8,d)]=e;d[AWr(9,d)]=b;AXu=c;}
var BX=F();
var Em=F(BX);
var ZD=F(Em);
var ABO=F(Em);
var Cj=F(BX);
var Ee=F(Cj);
var V9=F(Ee);
var W6=F();
var Mq=F(BX);
var Xz=F(Mq);
var YB=F(BX);
var AAE=F(BX);
var ACO=F(BX);
var ADc=F();
var KV=F(BX);
var AAr=F(KV);
var XO=F(Cj);
var ADC=F(Cj);
var AD0=F(Ee);
var AB9=F(BX);
var ACi=F(Ee);
var AEL=F(Cj);
var AEr=F(Cj);
var YV=F(BX);
var AAe=F(Cj);
var AAj=F(BX);
var Y5=F(BX);
var AAs=F(Em);
var Wx=F(Cj);
var AEM=F(BX);
var ABV=F(Ee);
var YZ=F(Em);
var ABy=F(BX);
var W7=F(Cj);
var ZW=F(Cj);
var OY=F();
var AXv=null;function AFi(){var b,c;b=K(Hv,24);c=b.data;c[AWr(0,c)]=H(Qd);c[AWr(1,c)]=H(By);c[AWr(2,c)]=H(RA);c[AWr(3,c)]=H(Sk);c[AWr(4,c)]=H(U2);c[AWr(5,c)]=H(Ib);c[AWr(6,c)]=H(UQ);c[AWr(7,c)]=H(FS);c[AWr(8,c)]=H(QZ);c[AWr(9,c)]=H(TS);c[AWr(10,c)]=H(Tj);c[AWr(11,c)]=H(Qs);c[AWr(12,c)]=H(UA);c[AWr(13,c)]=H(Ji);c[AWr(14,c)]=H(UP);c[AWr(15,c)]=H(Sm);c[AWr(16,c)]=H(NL);c[AWr(17,c)]=H(Us);c[AWr(18,c)]=H(F_);c[AWr(19,c)]=H(Rp);c[AWr(20,c)]=H(TO);c[AWr(21,c)]=H(Rl);c[AWr(22,c)]=H(QE);c[AWr(23,c)]=H(Oe);AXv=b;}
var Cp=F(Io);
var CD=F(Cp);
var AXw=null;var AXx=null;var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AXD=null;function AXE(){AXE=T(CD);AQQ();}
function AQQ(){var b;AXw=C5(0.0,0.0,1.0,1.0);AXx=C5(1.0,0.0,0.0,1.0);AXy=C5(0.0,1.0,0.0,1.0);b=new UV;TR(b);AXz=b;b=new UU;Da(b);AXA=b;b=new UT;Da(b);AXB=b;b=new US;Da(b);AXC=b;b=new UR;Da(b);AXD=b;}
var Fv=F(CD);
var KD=F(Fv);
var XL=F(KD);
var ADE=F(BD);
var LA=F(Cp);
var Q8=F(0);
var Ea=F();
var YP=F(Ea);
var CI=F(Fi);
var WD=F(CI);
var ADD=F(BD);
var BA=F();
var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AXJ=null;var AXK=null;var AXL=null;function ATR(){ATR=T(BA);AHz();}
function Da(a){ATR();}
function AHz(){var b;b=new IG;Da(b);b.v3=0.0;AXF=b;b=new Sx;Da(b);AXG=b;b=new Su;Da(b);AXH=b;b=new St;Da(b);AXI=b;b=new Sw;Da(b);AXJ=b;b=new Sv;Da(b);AXK=b;b=new Ss;Da(b);AXL=b;}
var Sw=F(BA);
var ABZ=F(BA);
var JF=F(Db);
var AAn=F(JF);
var UT=F(BA);
var AEC=F(BD);
var G0=F(CD);
var AXM=null;var AXN=null;function Xo(){AXM=new BJ;AXN=new BJ;}
var AB0=F(BA);
var FK=F(0);
var EH=F();
var AXO=null;var AXP=null;function ADk(){AXO=new EH;AXP=new EH;}
var Kg=F(EH);
var AXQ=null;function AWh(){AWh=T(Kg);AGY();}
function AXR(){var a=new Kg();ABD(a);return a;}
function ABD(a){AWh();}
function AGY(){AXQ=LG(H(Kg));}
var YS=F(Ea);
var EK=F(CI);
var AXS=null;var AXT=null;var AXU=null;var AXV=0.0;var AXW=0.0;function AE_(){AXS=new BJ;AXT=new BJ;AXU=new BJ;AXV=0.4000000059604645;AXW=0.10000000149011612;}
var XW=F(EK);
var Z0=F(BD);
var Py=F(0);
var ACQ=F();
var FS=F();
var F_=F(FS);
var Tj=F(F_);
var LR=F(CI);
var Zq=F(LR);
var AFr=F(LA);
var JS=F(Cp);
var AFM=F(Fv);
var L$=F(CI);
var UR=F(BA);
var TO=F();
var Y3=F();
var AAo=F(BD);
var AA3=F(CW);
var ZE=F();
var ACD=F(BD);
var AFf=F(Db);
var ZY=F(Ha);
var Ss=F(BA);
var Sv=F(BA);
var RS=F(0);
var Ji=F();
var NL=F(Ji);
var YQ=F(Ea);
var ADB=F(K0);
var ADF=F(L0);
var AED=F(BD);
var AEF=F(Db);
var US=F(BA);
var Dz=F();
var AXX=null;var AXY=null;var AXZ=null;var AX0=null;var AX1=null;var AX2=null;var AX3=null;var AX4=null;var AX5=null;function AX6(){AX6=T(Dz);AI3();}
function AI3(){var b;AXX=Q4(0.0);AXY=Q4(1.0);AXZ=Ep(0);b=Ep(1);AX0=b;AX1=b;AX2=Ep(2);AX3=Ep(4);AX4=Ep(8);AX5=Ep(16);}
var QZ=F(F_);
var Z8=F(BD);
var WO=F(CW);
var Sx=F(BA);
var X7=F(Cp);
var ZZ=F(BD);
var Rl=F();
function IG(){BA.call(this);this.v3=0.0;}
var AX7=null;function AEs(){AX7=K(IG,111);}
var Y4=F(JS);
var St=F(BA);
var Rg=F(CI);
var AX8=null;function AEE(){AX8=new BJ;}
var Z5=F(LV);
var Us=F();
var J0=F(CI);
var AX9=null;var AX$=null;function AX_(){AX_=T(J0);AG1();}
function AG1(){AX9=AHR();AX$=AVw();}
var Oe=F();
var AB1=F(BA);
var UU=F(BA);
var ADh=F(G0);
var Su=F(BA);
var Qs=F();
var AFc=F();
var Ex=F(Bo);
var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;function AV2(){AV2=T(Ex);APi();}
function KK(a,b){var c=new Ex();ACY(c,a,b);return c;}
function ACY(a,b,c){AV2();B_(a,b,c);}
function APi(){var b,c,d,e;AYa=KK(D(26),0);AYb=KK(D(27),1);AYc=KK(D(28),2);AYd=KK(D(29),3);b=KK(D(30),4);AYe=b;c=K(Ex,5);d=c.data;e=AYa;d[AWr(0,d)]=e;e=AYb;d[AWr(1,d)]=e;e=AYc;d[AWr(2,d)]=e;e=AYd;d[AWr(3,d)]=e;d[AWr(4,d)]=b;AYf=c;}
var AFk=F(BA);
var ZS=F(CW);
function Cn(){var a=this;E.call(a);a.lu=0;a.ia=0;a.fN=null;}
function TR(a){Vz(a,16,2147483647);}
function Vz(a,b,c){a.fN=AUc(0,b);a.lu=c;}
function HS(a){var b,c,d,$$je;a:{b=C(a.fN);if(b.e)b=Nr(b);else try{b=AFF(C(a.i9),null);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){d=$$je;c=new BU;b=new N;Q(b);Bb(b,D(31));Bb(b,Cy(C(Hb(C(a.i9)))));Dp(c,O(b),d);J(c);}else{throw $$e;}}}return b;}
function Gt(a,b){var c;if(b===null){b=new Bh;S(b,D(32));J(b);}c=C(a.fN);if(c.e>=a.lu)Ir(a,b);else{CJ(c,b);a.ia=BF(a.ia,C(a.fN).e);Ir(a,b);}}
function Ir(a,b){if(AD3(b,Dy))C(Dm(b,Dy)).jW();}
var UV=F(Cn);
var WI=F();
var UA=F();
var RA=F();
var Sm=F();
var Ja=F(BD);
var AYg=null;function Wn(){AYg=new BJ;}
var WN=F(CW);
var AEG=F(L$);
var WK=F(0);
var Z9=F(BD);
var AFD=F(Cp);
var ABN=F(Cp);
var Z6=F(Db);
var LX=F();
var YO=F(LX);
var AEu=F(Fi);
var Wj=F(BD);
var ADp=F(Fv);
var ABh=F(BD);
var AE6=F(Db);
var TS=F(FS);
var ABP=F(Cp);
var Rp=F();
var QE=F();
var AA6=F(CI);
var AFh=F(Gg);
var Wk=F(BD);
var SV=F(Cp);
var AYh=null;function AAI(){AYh=new BJ;}
var AFq=F(Ja);
var Wl=F(CD);
var YR=F(Ea);
var VC=F();
var UP=F();
var Dh=F();
var AYi=null;var AYj=null;var AYk=null;var AYl=null;var AYm=null;var AYn=null;var AYo=null;var AYp=null;var AYq=null;var AYr=null;var AYs=null;function AYt(){AYt=T(Dh);ANo();}
function ANo(){AYi=C4(16);AYj=JO();AYk=JO();AYl=Br();AYm=Br();AYn=Br();AYo=Br();AYp=Je();AYq=Br();AYr=Br();AYs=Br();}
var Z=F();
var AYu=null;var AYv=null;var AYw=null;var AYx=null;var AYy=null;var AYz=null;var AYA=null;var AYB=null;var AYC=null;var AYD=null;var AYE=null;var AYF=null;var AYG=null;var AYH=null;var AYI=null;var AYJ=null;var AYK=null;var AYL=null;var AYM=null;var AYN=null;var AYO=null;var AYP=null;var AYQ=null;var AYR=null;var AYS=null;var AYT=null;var AYU=null;var AYV=null;var AYW=null;var AYX=null;var AYY=null;var AYZ=null;var AY0=null;var AY1=null;var AY2=null;var AY3=null;var AY4=null;var AY5=null;var AY6=null;var AY7
=null;var AY8=null;var AY9=null;var AY$=null;var AY_=null;function AVX(){AVX=T(Z);AHS();}
function Cb(a){AVX();}
function AHS(){var b;b=new Tc;Cb(b);AYu=b;b=new S5;Cb(b);AYv=b;b=new S4;Cb(b);AYw=b;b=new S7;Cb(b);AYx=b;AYy=b;AYz=MO(2);b=new Hj;ED(b,2);AYA=b;AYB=b;b=new G6;ED(b,2);AYC=b;AYD=b;b=new S6;Cb(b);AYE=b;b=new S9;Cb(b);AYF=b;AYG=MO(3);b=new Hj;ED(b,3);AYH=b;b=new G6;ED(b,3);AYI=b;b=new S8;Cb(b);AYJ=b;b=new S_;Cb(b);AYK=b;AYL=MO(4);b=new Hj;ED(b,4);AYM=b;b=new G6;ED(b,4);AYN=b;AYO=MO(5);b=new Hj;ED(b,5);AYP=b;b=new G6;ED(b,5);AYQ=b;b=new S$;Cb(b);AYR=b;b=new R$;Cb(b);AYS=b;b=new Sa;Cb(b);AYT=b;AYU=AIP(2.0,10.0);b
=new K8;IQ(b,2.0,10.0);AYV=b;b=new Mo;IQ(b,2.0,10.0);AYW=b;AYX=AIP(2.0,5.0);b=new K8;IQ(b,2.0,5.0);AYY=b;b=new Mo;IQ(b,2.0,5.0);AYZ=b;b=new Sb;Cb(b);AY0=b;b=new Sc;Cb(b);AY1=b;b=new Sd;Cb(b);AY2=b;AY3=AVG(2.0,10.0,7,1.0);b=new NU;QY(b,2.0,10.0,6,1.0);AY4=b;b=new Qw;QY(b,2.0,10.0,7,1.0);AY5=b;b=new Qy;Cb(b);b.t4=3.0;AY6=b;b=new Ow;Cb(b);b.y2=2.0;AY7=b;b=new UD;Cb(b);b.vS=2.0;AY8=b;b=new P$;P8(b,4);AY9=b;b=new QT;P8(b,4);AY$=b;AY_=AUh(4);}
function Ow(){Z.call(this);this.y2=0.0;}
var ZU=F();
var S8=F(Z);
var AEU=F();
function G7(){Z.call(this);this.zr=0;}
function MO(a){var b=new G7();ED(b,a);return b;}
function ED(a,b){Cb(a);a.zr=b;}
var Hj=F(G7);
var G6=F(G7);
var IX=F(0);
var XB=F();
var S_=F(Z);
var ADP=F();
var S7=F(Z);
function G8(){var a=this;Z.call(a);a.zd=0.0;a.tz=0.0;a.tQ=0.0;a.vq=0.0;}
function AVG(a,b,c,d){var e=new G8();QY(e,a,b,c,d);return e;}
function QY(a,b,c,d,e){Cb(a);a.zd=b;a.tz=c;a.tQ=e;a.vq=d*3.1415927410125732*(d%2|0?(-1):1);}
var S6=F(Z);
var S5=F(Z);
var IR=F();
var AZa=null;var AZb=null;var AZc=null;function XI(){AZa=new BJ;AZb=new BJ;AZc=new BJ;}
var VY=F(Cn);
var ID=F(0);
function BJ(){var a=this;E.call(a);a.tn=0.0;a.tm=0.0;}
var AZd=null;var AZe=null;var AZf=null;function WQ(a,b){var c=new BJ();ADe(c,a,b);return c;}
function ADe(a,b,c){a.tn=b;a.tm=c;}
function Xt(){AZd=WQ(1.0,0.0);AZe=WQ(0.0,1.0);AZf=WQ(0.0,0.0);}
var Sc=F(Z);
function Hw(){var a=this;Z.call(a);a.vt=0.0;a.xa=0.0;a.zn=0.0;a.xk=0.0;}
function AIP(a,b){var c=new Hw();IQ(c,a,b);return c;}
function IQ(a,b,c){Cb(a);a.vt=b;a.xa=c;c=ANC(b, -c);a.zn=c;a.xk=1.0/(1.0-c);}
var AA4=F();
var Tc=F(Z);
var Mo=F(Hw);
var Y1=F();
var FJ=F(Bo);
var AZg=null;var AZh=null;var AZi=null;var AZj=null;function AVD(){AVD=T(FJ);ASh();}
function WH(a,b){var c=new FJ();WA(c,a,b);return c;}
function WA(a,b,c){AVD();B_(a,b,c);}
function ASh(){var b,c,d,e;AZg=WH(D(33),0);AZh=WH(D(34),1);b=WH(D(35),2);AZi=b;c=K(FJ,3);d=c.data;e=AZg;d[AWr(0,d)]=e;e=AZh;d[AWr(1,d)]=e;d[AWr(2,d)]=b;AZj=c;}
var Rx=F();
var AZk=null;function AZl(){AZl=T(Rx);AMz();}
function AMz(){AZk=Br();}
function HK(){var a=this;Z.call(a);a.u4=null;a.tM=null;}
function AUh(a){var b=new HK();P8(b,a);return b;}
function P8(a,b){var c,d,e,f,g;Cb(a);if(b>=2&&b<=5){a:{c=C4(b);a.u4=c;d=C4(b);e=d.data;a.tM=d;e[AWr(0,e)]=1.0;switch(b){case 2:break;case 3:d=c.data;d[AWr(0,d)]=0.4000000059604645;d[AWr(1,d)]=0.4000000059604645;d[AWr(2,d)]=0.20000000298023224;e[AWr(1,e)]=0.33000001311302185;e[AWr(2,e)]=0.10000000149011612;break a;case 4:d=c.data;d[AWr(0,d)]=0.3400000035762787;d[AWr(1,d)]=0.3400000035762787;d[AWr(2,d)]=0.20000000298023224;d[AWr(3,d)]=0.15000000596046448;e[AWr(1,e)]=0.25999999046325684;e[AWr(2,e)]=0.10999999940395355;e[AWr(3,
e)]=0.029999999329447746;break a;case 5:d=c.data;d[AWr(0,d)]=0.30000001192092896;d[AWr(1,d)]=0.30000001192092896;d[AWr(2,d)]=0.20000000298023224;d[AWr(3,d)]=0.10000000149011612;d[AWr(4,d)]=0.10000000149011612;e[AWr(1,e)]=0.44999998807907104;e[AWr(2,e)]=0.30000001192092896;e[AWr(3,e)]=0.15000000596046448;e[AWr(4,e)]=0.05999999865889549;break a;default:break a;}d=c.data;d[AWr(0,d)]=0.6000000238418579;d[AWr(1,d)]=0.4000000059604645;e[AWr(1,e)]=0.33000001311302185;}c=c.data;b=AWr(0,c);c[b]=c[b]*2.0;return;}f=new Bh;g
=new N;Q(g);Bb(g,D(36));S(f,O(C(V(g,b))));J(f);}
var QT=F(HK);
var R$=F(Z);
var ABt=F();
var S4=F(Z);
function FC(){var a=this;E.call(a);a.ve=0.0;a.vd=0.0;a.vf=0.0;a.vb=0.0;}
var AZm=null;var AZn=null;var AZo=null;var AZp=null;var AZq=null;function AVq(){AVq=T(FC);ATc();}
function KF(a,b,c,d){var e=new FC();AA_(e,a,b,c,d);return e;}
function AA_(a,b,c,d,e){AVq();a.ve=b;a.vd=c;a.vf=d;a.vb=e;}
function ATc(){AZm=KF(1.0,0.0,0.0,0.0);AZn=KF(0.0,1.0,0.0,0.0);AZo=KF(0.0,0.0,1.0,0.0);AZp=KF(0.0,0.0,0.0,1.0);AZq=KF(0.0,0.0,0.0,0.0);}
var NU=F(G8);
function Qy(){Z.call(this);this.t4=0.0;}
var Xv=F();
var AFw=F();
var S9=F(Z);
function UD(){Z.call(this);this.vS=0.0;}
var Sd=F(Z);
var Qw=F(G8);
var Jn=F();
var AZr=null;var AZs=null;var AZt=null;function AZu(){AZu=T(Jn);AGA();}
function AGA(){var b,c,d;AZr=K(DA,15);AZs=K(DA,8);AZt=K(DA,9);b=0;while(true){c=C(AZt).data;if(b>=c.length)break;d=Br();b=B(b,c);c[b]=d;b=b+1|0;}b=0;while(true){c=C(AZs).data;if(b>=c.length)break;d=Br();b=B(b,c);c[b]=d;b=b+1|0;}}
function JN(){var a=this;E.call(a);a.fY=null;a.f4=null;a.pK=null;a.qr=null;}
var AZv=null;function AWm(){AWm=T(JN);AQB();}
function AQB(){AZv=Br();}
var QQ=F();
var AZw=null;function AZx(){AZx=T(QQ);AQN();}
function AQN(){AZw=Br();}
var XE=F();
var Wc=F();
var ACz=F();
var Zy=F();
var SJ=F();
var AZy=null;function AOI(){AOI=T(SJ);AMc();}
function Kr(b){var c;AOI();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function AMc(){var b,c,d,e;b=new R0;c=new IJ;d=AKg(FN(Bc(Pq(c)),32),Bc(Pq(c)));if(DG(d,Cs))d=G(0, 2147483648);e=AEa(d);d=AEa(e);b.s1=e;b.s2=d;AZy=b;}
var B3=F();
var AZz=null;var AZA=null;var AZB=null;var AZC=null;var AZD=null;var AZE=null;var AZF=null;var AZG=null;var AZH=null;var AZI=null;var AZJ=null;var AZK=null;var AZL=null;var AZM=null;var AZN=null;var AZO=null;var AZP=null;var AZQ=null;var AZR=null;var AZS=null;var AZT=null;var AZU=null;var AZV=null;var AZW=null;function AZX(){AZX=T(B3);AJk();}
function AJk(){var b,c,d,e,f;AZz=Br();AZA=Br();AZB=Br();AZC=ABW();AZD=ABW();AZE=new BJ;AZF=new BJ;AZG=new BJ;AZH=new BJ;AZI=new BJ;AZJ=new BJ;AZK=new BJ;AZL=new BJ;AZM=new BJ;b=new Uu;c=Br();d=Br();b.tD=d;b.nx=0.0;c=C(Kj(d,c));e=c.bH;e=e*e;f=c.bJ;e=e+f*f;f=c.bI;f=e+f*f;if(f!==0.0&&f!==1.0)TI(c,1.0/ATk(f));b.nx=0.0;AZN=b;AZO=Br();AZP=Br();AZQ=Br();AZR=Br();AZS=Br();AZT=Br();AZU=Br();AZV=Br();AZW=Br();}
var WS=F();
var P$=F(HK);
function C_(){E.call(this);this.dL=null;}
var AZY=null;var AZZ=null;var AZ0=null;var AZ1=null;var AZ2=null;var AZ3=null;var AZ4=null;var AZ5=null;var AZ6=null;var AZ7=null;var AZ8=null;function ANe(){ANe=T(C_);AGX();}
function Je(){var a=new C_();ACX(a);return a;}
function ACX(a){var b,c;ANe();b=C4(16);c=b.data;a.dL=b;c[AWr(0,c)]=1.0;c[AWr(5,c)]=1.0;c[AWr(10,c)]=1.0;c[AWr(15,c)]=1.0;}
function Oh(a,b){var c,d;c=a.dL;b=C(b).data;d=b[AWr(0,b)];c=C(c).data;c[AWr(0,c)]=d;d=b[AWr(1,b)];c[AWr(1,c)]=d;d=b[AWr(2,b)];c[AWr(2,c)]=d;d=b[AWr(3,b)];c[AWr(3,c)]=d;d=b[AWr(4,b)];c[AWr(4,c)]=d;d=b[AWr(5,b)];c[AWr(5,c)]=d;d=b[AWr(6,b)];c[AWr(6,c)]=d;d=b[AWr(7,b)];c[AWr(7,c)]=d;d=b[AWr(8,b)];c[AWr(8,c)]=d;d=b[AWr(9,b)];c[AWr(9,c)]=d;d=b[AWr(10,b)];c[AWr(10,c)]=d;d=b[AWr(11,b)];c[AWr(11,c)]=d;d=b[AWr(12,b)];c[AWr(12,c)]=d;d=b[AWr(13,b)];c[AWr(13,c)]=d;d=b[AWr(14,b)];c[AWr(14,c)]=d;d=b[AWr(15,b)];c[AWr(15,c)]
=d;return a;}
function ABf(a,b){var c,d,e,f,g;ANe();c=AZY;d=C(a.dL).data;e=d[AWr(0,d)];f=C(C(b).dL).data;e=e*f[AWr(0,f)]+d[AWr(4,d)]*f[AWr(1,f)]+d[AWr(8,d)]*f[AWr(2,f)]+d[AWr(12,d)]*f[AWr(3,f)];g=C(c).data;g[AWr(0,g)]=e;e=d[AWr(0,d)]*f[AWr(4,f)]+d[AWr(4,d)]*f[AWr(5,f)]+d[AWr(8,d)]*f[AWr(6,f)]+d[AWr(12,d)]*f[AWr(7,f)];g[AWr(4,g)]=e;e=d[AWr(0,d)]*f[AWr(8,f)]+d[AWr(4,d)]*f[AWr(9,f)]+d[AWr(8,d)]*f[AWr(10,f)]+d[AWr(12,d)]*f[AWr(11,f)];g[AWr(8,g)]=e;e=d[AWr(0,d)]*f[AWr(12,f)]+d[AWr(4,d)]*f[AWr(13,f)]+d[AWr(8,d)]*f[AWr(14,f)]+d[AWr(12,
d)]*f[AWr(15,f)];g[AWr(12,g)]=e;e=d[AWr(1,d)]*f[AWr(0,f)]+d[AWr(5,d)]*f[AWr(1,f)]+d[AWr(9,d)]*f[AWr(2,f)]+d[AWr(13,d)]*f[AWr(3,f)];g[AWr(1,g)]=e;e=d[AWr(1,d)]*f[AWr(4,f)]+d[AWr(5,d)]*f[AWr(5,f)]+d[AWr(9,d)]*f[AWr(6,f)]+d[AWr(13,d)]*f[AWr(7,f)];g[AWr(5,g)]=e;e=d[AWr(1,d)]*f[AWr(8,f)]+d[AWr(5,d)]*f[AWr(9,f)]+d[AWr(9,d)]*f[AWr(10,f)]+d[AWr(13,d)]*f[AWr(11,f)];g[AWr(9,g)]=e;e=d[AWr(1,d)]*f[AWr(12,f)]+d[AWr(5,d)]*f[AWr(13,f)]+d[AWr(9,d)]*f[AWr(14,f)]+d[AWr(13,d)]*f[AWr(15,f)];g[AWr(13,g)]=e;e=d[AWr(2,d)]*f[AWr(0,
f)]+d[AWr(6,d)]*f[AWr(1,f)]+d[AWr(10,d)]*f[AWr(2,f)]+d[AWr(14,d)]*f[AWr(3,f)];g[AWr(2,g)]=e;e=d[AWr(2,d)]*f[AWr(4,f)]+d[AWr(6,d)]*f[AWr(5,f)]+d[AWr(10,d)]*f[AWr(6,f)]+d[AWr(14,d)]*f[AWr(7,f)];g[AWr(6,g)]=e;e=d[AWr(2,d)]*f[AWr(8,f)]+d[AWr(6,d)]*f[AWr(9,f)]+d[AWr(10,d)]*f[AWr(10,f)]+d[AWr(14,d)]*f[AWr(11,f)];g[AWr(10,g)]=e;e=d[AWr(2,d)]*f[AWr(12,f)]+d[AWr(6,d)]*f[AWr(13,f)]+d[AWr(10,d)]*f[AWr(14,f)]+d[AWr(14,d)]*f[AWr(15,f)];g[AWr(14,g)]=e;e=d[AWr(3,d)]*f[AWr(0,f)]+d[AWr(7,d)]*f[AWr(1,f)]+d[AWr(11,d)]*f[AWr(2,
f)]+d[AWr(15,d)]*f[AWr(3,f)];g[AWr(3,g)]=e;e=d[AWr(3,d)]*f[AWr(4,f)]+d[AWr(7,d)]*f[AWr(5,f)]+d[AWr(11,d)]*f[AWr(6,f)]+d[AWr(15,d)]*f[AWr(7,f)];g[AWr(7,g)]=e;e=d[AWr(3,d)]*f[AWr(8,f)]+d[AWr(7,d)]*f[AWr(9,f)]+d[AWr(11,d)]*f[AWr(10,f)]+d[AWr(15,d)]*f[AWr(11,f)];g[AWr(11,g)]=e;e=d[AWr(3,d)]*f[AWr(12,f)]+d[AWr(7,d)]*f[AWr(13,f)]+d[AWr(11,d)]*f[AWr(14,f)]+d[AWr(15,d)]*f[AWr(15,f)];g[AWr(15,g)]=e;return Oh(a,c);}
function ABx(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=C(a.dL).data;h[AWr(0,h)]=1.0;h[AWr(4,h)]=0.0;h[AWr(8,h)]=0.0;h[AWr(12,h)]=0.0;h[AWr(1,h)]=0.0;h[AWr(5,h)]=1.0;h[AWr(9,h)]=0.0;h[AWr(13,h)]=0.0;h[AWr(2,h)]=0.0;h[AWr(6,h)]=0.0;h[AWr(10,h)]=1.0;h[AWr(14,h)]=0.0;h[AWr(3,h)]=0.0;h[AWr(7,h)]=0.0;h[AWr(11,h)]=0.0;h[AWr(15,h)]=1.0;i=c-b;j=2.0/i;k=e-d;l=2.0/k;m=g-f;n=(-2.0)/m;i= -(c+b)/i;k= -(e+d)/k;m= -(g+f)/m;h[AWr(0,h)]=j;h[AWr(1,h)]=0.0;h[AWr(2,h)]=0.0;h[AWr(3,h)]=0.0;h[AWr(4,h)]=0.0;h[AWr(5,h)]=l;h[AWr(6,h)]=0.0;h[AWr(7,
h)]=0.0;h[AWr(8,h)]=0.0;h[AWr(9,h)]=0.0;h[AWr(10,h)]=n;h[AWr(11,h)]=0.0;h[AWr(12,h)]=i;h[AWr(13,h)]=k;h[AWr(14,h)]=m;h[AWr(15,h)]=1.0;return a;}
function AGX(){AZY=C4(16);AZZ=JO();AZ0=JO();AZ1=Br();AZ2=Br();AZ3=Br();AZ4=Br();AZ5=Je();AZ6=Br();AZ7=Br();AZ8=Br();}
var OH=F(0);
var IJ=F();
function Pq(a){return 4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0;}
function R0(){var a=this;IJ.call(a);a.s1=Cs;a.s2=Cs;}
function AEa(b){b=BO(AEc(b,Ci(b,33)),G(3981806797, 4283543511));b=BO(AEc(b,Ci(b,33)),G(444984403, 3301882366));return AEc(b,Ci(b,33));}
var Sb=F(Z);
var S$=F(Z);
var I4=F();
var AZ9=null;var AZ$=null;var AZ_=null;function A0a(){A0a=T(I4);AME();}
function AME(){var b,c,d,e,f,g,h,i,j,k;b=K(DA,8);c=b.data;d=DZ((-1.0),(-1.0),(-1.0));c[AWr(0,c)]=d;d=DZ(1.0,(-1.0),(-1.0));c[AWr(1,c)]=d;d=DZ(1.0,1.0,(-1.0));c[AWr(2,c)]=d;d=DZ((-1.0),1.0,(-1.0));c[AWr(3,c)]=d;d=DZ((-1.0),(-1.0),1.0);c[AWr(4,c)]=d;d=DZ(1.0,(-1.0),1.0);c[AWr(5,c)]=d;d=DZ(1.0,1.0,1.0);c[AWr(6,c)]=d;d=DZ((-1.0),1.0,1.0);c[AWr(7,c)]=d;AZ9=b;b=C4(24);e=b.data;AZ$=b;f=0;g=c.length;h=0;while(h<g){i=B$(h);d=c[i];h=f+1|0;d=C(d);j=d.bH;e[B(f,e)]=j;k=h+1|0;j=d.bJ;e[B(h,e)]=j;f=k+1|0;j=d.bI;e[B(k,e)]=j;h
=i+1|0;}AZ_=Br();}
function Mw(){var a=this;E.call(a);a.xC=0.0;a.xy=0.0;a.xz=0.0;a.xB=0.0;}
var A0b=null;var A0c=null;function AP7(){AP7=T(Mw);ALz();}
function APY(a,b,c,d){var e=new Mw();Yt(e,a,b,c,d);return e;}
function JO(){var a=new Mw();ZJ(a);return a;}
function Yt(a,b,c,d,e){AP7();PJ(a,b,c,d,e);}
function ZJ(a){AP7();PJ(a,0.0,0.0,0.0,1.0);}
function PJ(a,b,c,d,e){a.xC=b;a.xy=c;a.xz=d;a.xB=e;return a;}
function ALz(){A0b=APY(0.0,0.0,0.0,0.0);A0c=APY(0.0,0.0,0.0,0.0);}
var VT=F();
var ABL=F();
function DA(){var a=this;E.call(a);a.bH=0.0;a.bJ=0.0;a.bI=0.0;}
var A0d=null;var A0e=null;var A0f=null;var A0g=null;var A0h=null;function APd(){APd=T(DA);AHg();}
function Br(){var a=new DA();AA7(a);return a;}
function DZ(a,b,c){var d=new DA();ZL(d,a,b,c);return d;}
function AA7(a){APd();}
function ZL(a,b,c,d){APd();D_(a,b,c,d);}
function D_(a,b,c,d){a.bH=b;a.bJ=c;a.bI=d;return a;}
function Kj(a,b){b=C(b);return D_(a,b.bH,b.bJ,b.bI);}
function TI(a,b){return D_(a,a.bH*b,a.bJ*b,a.bI*b);}
function AHg(){A0d=DZ(1.0,0.0,0.0);A0e=DZ(0.0,1.0,0.0);A0f=DZ(0.0,0.0,1.0);A0g=DZ(0.0,0.0,0.0);A0h=Je();}
var Y2=F();
var X_=F(Cn);
var K8=F(Hw);
var AB2=F();
var W3=F();
var AD2=F();
function Uu(){var a=this;E.call(a);a.tD=null;a.nx=0.0;}
var Sa=F(Z);
var AD4=F();
var W5=F();
var ACx=F();
var AD1=F();
var ABp=F(0);
var Y7=F();
var Tk=F();
var A0i=null;function XX(){var b,c,d,e;A0i=C4(16384);b=0;while(b<16384){c=A0i;d=ARl((b+0.5)/16384.0*6.2831854820251465);c=C(c).data;e=B(b,c);c[e]=d;b=e+1|0;}c=C(A0i).data;c[AWr(0,c)]=0.0;c[AWr(4096,c)]=1.0;c[AWr(8192,c)]=0.0;c[AWr(12288,c)]=(-1.0);}
function Gk(){var a=this;E.call(a);a.bi=null;a.S=null;a.bs=0;a.lZ=0.0;a.hI=0.0;}
var A0j=null;var A0k=null;function Eb(){Eb=T(Gk);AJs();}
function AVw(){var a=new Gk();AEQ(a);return a;}
function A0l(a,b){var c=new Gk();W4(c,a,b);return c;}
function A0m(a,b,c,d,e,f){var g=new Gk();ACG(g,a,b,c,d,e,f);return g;}
function A0n(a,b,c,d,e,f,g,h,i){var j=new Gk();ADb(j,a,b,c,d,e,f,g,h,i);return j;}
function AEQ(a){Eb();a.bi=Hk(1);a.S=KN(2);}
function W4(a,b,c){var d,e,f;Eb();a.bi=Hk(1);a.S=KN(2);d=C(c);e=d.ek();f=C(b);Ia(a,f,d,0,e,f.EO(),0.0,8,0,null);}
function ACG(a,b,c,d,e,f,g){Eb();a.bi=Hk(1);a.S=KN(2);c=C(c);Ia(a,b,c,0,c.ek(),d,e,f,g,null);}
function ADb(a,b,c,d,e,f,g,h,i,j){Eb();a.bi=Hk(1);a.S=KN(2);Ia(a,b,c,d,e,f,g,h,i,j);}
function Ia(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;AD$(a);k=C(b).gV;if(d==e){a.hI=C(k).cv;return;}if(i){k=C(k);g=H3(g,k.mQ*3.0);}l=!i&&j===null?0:1;m=Jk(C(f));AEK(C(a.S),0,m);k=C(k);n=k.fW;if(n)Ey(C(A0k),m);o=0;p=0.0;q=k.gX;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break b;o=1;w=e;}else{d:{i=d+1|0;c=C(c);switch(R(c,d)){case 10:w=i-1|0;v=1;d=i;break c;case 91:if(!n){d=i;break d;}x=ACj(a,c,i,e);if(x>=0){w=i-1|0;d=i+(x+1|0)|0;if(d==e){o=1;break c;}m=Re(C(A0k));break c;}if
(x!=(-2)){d=i;break d;}d=i+1|0;break d;default:}d=i;}continue b;}}y=C(W(HS(C(A0j)),DD));y.ce=0.0;y.hM=p;OL(k,y,c,u,w,s);a.bs=a.bs+C(y.G).e|0;if(m!=t){b=C(a.S);i=Dt(b,b.p-2|0);z=a.bs;if(i!=z){Ey(C(a.S),z);Ey(C(a.S),m);}else{b=C(a.S);IL(b,b.p-1|0,m);}t=m;}e:{b=y.G;if(!C(b).e){Gt(C(A0j),y);if(r===null)break e;}else if(r===null){CJ(C(a.bi),y);r=y;}else{KJ(C(r.G),b);f=C(r.I);z=f.D;if(z<=0?0:1)f.D=z-1|0;NT(f,y.I);Gt(C(A0j),y);}if(!v&&!o)s=W(Vg(C(r.G)),CL);else{I7(a,k,r);s=null;}if(l&&C(r.G).e&&!(!v&&!o)){ba=PL(C(r.I))
+O7(C(r.I),1);z=2;while(z<C(r.I).D){b=r.G;i=z-1|0;if(ba+Kb(a,W(CK(C(b),i),CL),k)-9.999999747378752E-5<=g){bb=C(C(r.I).bf).data;z=B(z,bb);ba=ba+bb[z];}else{if(j!==null){WF(a,k,r,g,j);break a;}bc=VO(k,r.G,z);if(!(!bc&&r.ce===0.0)&&bc<C(r.G).e)i=bc;r=ADx(a,k,r,i);if(r===null)break e;CJ(C(a.bi),r);p=p+q;r.ce=0.0;r.hM=p;ba=PL(C(r.I))+O7(C(r.I),1);z=1;}z=z+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.o8;}u=d;}}a.hI=k.cv+IS(p);X0(a,k);ABl(a,g,h);if(n)Ii(C(A0k));}
function X0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=0.0;d=C(a.bi);e=d.E;f=0;g=d.e;while(f<g){e=C(e);h=e.data;i=B(f,h);j=C(W(h[i],DD));h=C(j.I).bf;k=j.ce;h=C(h).data;k=k+h[AWr(0,h)];l=0.0;d=C(j.G);m=d.E;n=0;o=d.e;while(n<o){m=C(m);p=m.data;f=B(n,p);l=H3(l,k+Kb(a,W(p[f],CL),b));n=B(f+1|0,h);k=k+h[n];}k=H3(k,l);q=j.ce;k=k-q;j.iT=k;c=H3(c,q+k);f=i+1|0;}a.lZ=c;}
function ABl(a,b,c){var d,e,f,g,h,i;a:{if(!(c&8)){d=!(c&1)?0:1;e=C(a.bi);f=e.E;g=0;h=e.e;while(true){if(g>=h)break a;f=C(f);i=f.data;c=B(g,i);e=C(W(i[c],DD));e.ce=e.ce+(!d?b-e.iT:0.5*(b-e.iT));g=c+1|0;}}}}
function WF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=C(c);g=C(f.G).e;Eb();h=W(HS(C(A0j)),DD);e=C(e);i=e.ek();c=null;j=C(b);OL(j,h,e,0,i,c);k=0.0;h=C(h);if(C(h.I).D>0){I7(a,j,h);b=C(h.I);l=b.bf;i=1;m=b.D;while(i<m){l=C(l);n=l.data;i=B(i,n);k=k+n[i];i=i+1|0;}}d=d-k;o=0;p=f.ce;b=C(f.I);n=b.bf;a:{while(o<b.D){n=C(n);l=n.data;o=B(o,l);p=p+l[o];if(p>d)break a;o=o+1|0;}}if(o<=1){Et(C(f.G));N2(C(f.I));NT(C(f.I),h.I);}else{Nt(C(f.G),o-1|0);OR(C(f.I),o);I7(a,j,f);b=h.I;o=C(b).D;if(o>0)T2(C(f.I),b,1,o-1|0);}b:{q=g-C(f.G).e
|0;if(q>0){a.bs=a.bs-q|0;if(j.fW)while(true){b=C(a.S);o=b.p;if(o<=2)break b;if(Dt(b,o-2|0)<a.bs)break b;b=C(a.S);b.p=b.p-2|0;}}}b=f.G;c=h.G;KJ(C(b),c);a.bs=a.bs+e.ek()|0;Gt(C(A0j),h);}
function ADx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;e=C(c);f=e.G;g=C(f).e;h=e.I;i=d;a:{while(i>0){j=i-1|0;f=C(f);j=C(W(CK(f,j),CL)).cU&65535;b=C(b);if(!Ie(b,j))break a;i=i+(-1)|0;}}b:{while(true){j=Cz(d,g);if(j>=0)break;f=C(f);k=C(W(CK(f,d),CL)).cU&65535;b=C(b);if(!Ie(b,k))break b;d=d+1|0;}}l=null;if(j>=0){Nt(C(f),i);OR(C(h),i+1|0);m=d-i|0;if(m>0){a.bs=a.bs-m|0;b=C(b);if(b.fW){c=C(a.S);if(Dt(c,c.p-2|0)>a.bs){n=Re(C(a.S));while(true){c=C(a.S);d=Dt(c,c.p-2|0);j=a.bs;if(d<=j)break;c=C(a.S);c.p=c.p-2|
0;}c=C(a.S);IL(c,c.p-2|0,j);c=C(a.S);IL(c,c.p-1|0,n);}}}}else{Eb();l=C(W(HS(C(A0j)),DD));o=C(l.G);k=0+i|0;f=C(f);if(k>f.e){b=new Bh;c=new N;Q(c);Bb(c,D(37));c=C(V(c,0));Bb(c,D(38));c=C(V(c,i));Bb(c,D(39));S(b,O(C(V(c,f.e))));J(b);}Of(o,f.E,0,i);k=d-1|0;n=f.e;if(k>=n){b=new Bg;c=new N;Q(c);Bb(c,D(40));c=C(V(c,k));Bb(c,D(41));ZF(b,O(C(V(c,f.e))));J(b);}if(0>k)J(AVP(Eq(C(V(C(En(C(V(C(En(L9(),D(42))),0)),D(43))),k)))));p=f.E;m=(k-0|0)+1|0;q=n-m|0;if(f.dR){k=0+m|0;Cg(p,k,p,0,n-k|0);}else{k=BF(q,k+1|0);Cg(p,k,p,0,
n-k|0);}j=q;while(j<n){c=null;p=C(p);r=p.data;j=B(j,r);r[j]=c;j=j+1|0;}c:{f.e=q;e.G=o;l.G=f;s=l.I;j=i+1|0;s=C(s);T2(s,h,0,j);h=C(h);V0(h,1,d);p=h.bf;t=AEp(a,f,b);p=C(p).data;p[AWr(0,p)]=t;e.I=s;l.I=h;j=C(e.G).e;k=C(l.G).e;m=(g-j|0)-k|0;d=a.bs-m|0;a.bs=d;b=C(b);if(b.fW&&m>0){q=d-k|0;u=C(a.S).p-2|0;while(true){if(u<2)break c;v=Dt(C(a.S),u);if(v<=q)break;IL(C(a.S),u,v-m|0);u=u+(-2)|0;}}}}if(i)I7(a,b,e);else{Eb();Gt(C(A0j),e);Nr(C(a.bi));}return l;}
function I7(a,b,c){var d,e,f,g,h;d=C(c);e=C(W(Vg(C(d.G)),CL));if(!e.mI){c=C(d.I);f=c.bf;g=c.D-1|0;h=Kb(a,e,b);f=C(f).data;f[B(g,f)]=h;}}
function Kb(a,b,c){var d;b=C(b);d=b.bL+b.cr|0;c=C(c);return d*c.gr-c.hD;}
function AEp(a,b,c){var d,e;b=C(b);if(!b.e){c=new CA;S(c,D(44));J(c);}d=C(b.E).data;e= -C(W(d[AWr(0,d)],CL)).cr|0;c=C(c);return e*c.gr-c.ii;}
function ACj(a,b,c,d){var e,f,g,h,i;if(c==d)return (-1);b=C(b);switch(R(b,c)){case 35:e=0;f=c+1|0;a:{while(true){if(f>=d)break a;g=R(b,f);if(g==93)break;e=(e<<4)+g|0;if(g>=48&&g<=57)e=e+(-48)|0;else if(g>=65&&g<=70)e=e+(-55)|0;else{if(g<97)break a;if(g>102)break a;e=e+(-87)|0;}f=f+1|0;}if(f>=(c+2|0)&&f<=(c+9|0)){c=f-c|0;if(c<8)e=e<<((9-c|0)<<2)|255;Eb();b=A0k;d=((e&(-16711936))>>>8|0)|(e&16711935)<<8;Ey(C(b),(d>>>16|0)+(d<<16)|0);return c;}}return (-1);case 91:break;case 93:Eb();b=C(A0k);c=b.p;if(c>1){h=b.by;b.p
=c-1|0;h=C(h);}return 0;default:f=c+1|0;while(f<d){if(R(b,f)==93){b=C(B7(b,c,f));AKu();i=W(DC(C(A0o),b),By);if(i===null)return (-1);Eb();Ey(C(A0k),Jk(i));return f-c|0;}f=f+1|0;}return (-1);}return (-2);}
function AD$(a){var b,c,d,e,f,g,h;Eb();b=A0j;c=a.bi;b=C(b);if(c===null){b=new Bh;S(b,D(45));J(b);}d=b.fN;e=b.lu;f=0;g=c.e;while(f<g){h=CK(c,f);if(h!==null){d=C(d);if(d.e>=e)Ir(b,h);else{CJ(d,h);Ir(b,h);}}f=f+1|0;}b.ia=BF(b.ia,C(d).e);Et(C(a.bi));Ii(C(a.S));a.bs=0;a.lZ=0.0;a.hI=0.0;}
function AOF(a){var b,c,d;if(!C(a.bi).e)return D(1);b=new N;ET(b,128);Ew(b,a.lZ);Be(b,120);Ew(b,a.hI);Be(b,10);c=0;d=C(a.bi).e;while(c<d){Bb(b,Wy(C(W(CK(C(a.bi),c),DD))));Be(b,10);c=c+1|0;}b.t=b.t-1|0;return O(b);}
function AJs(){A0j=LG(H(DD));A0k=KN(4);}
function DW(){var a=this;E.call(a);a.di=null;a.r7=0.0;a.r$=0.0;a.y0=0.0;a.yX=0.0;a.ir=0;a.jo=0;}
function AGb(a){var b=new DW();AG_(b,a);return b;}
function AG_(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(b===null){b=new Bh;S(b,D(46));J(b);}a.di=b;c=F0(b);d=F9(b);e=1.0/F0(C(a.di));f=1.0/F9(C(a.di));g=0.0*e;h=0.0*f;i=(0+c|0)*e;j=(0+d|0)*f;k=F0(C(a.di));l=F9(C(a.di));f=IS(i-g);e=k;a.ir=Eh(f*e);f=IS(j-h);m=l;k=Eh(f*m);a.jo=k;if(a.ir==1&&k==1){f=0.25/e;g=g+f;i=i-f;f=0.25/m;h=h+f;j=j-f;}a.r7=g;a.r$=h;a.y0=i;a.yX=j;a.ir=VN(c);a.jo=VN(d);}
var ABI=F(DW);
function Qd(){var a=this;E.call(a);a.gV=null;a.cz=null;a.gA=null;a.tO=0;a.sG=0;a.iq=0;}
function AVg(){var a=new Qd();AIR(a);return a;}
function AIR(a){var b,c,d,e,f,g,h,i,j,k,l;b=Va(C(A0p),D(47));c=Va(C(A0p),D(48));d=AT0(b,0);b=AGb(ARL(c,0));e=K(DW,1);f=e.data;f[AWr(0,f)]=b;c=new DQ;g=f.length;b=Fb(C(CZ(e)));c.dR=1;b=IZ(b,g);c.E=b;c.e=g;Rs(e,0,b,0,g);a.tO=d.kC;a.gV=d;a.sG=1;if(c.e){a.cz=c;a.iq=0;}else{e=d.eT;if(e===null){c=new Bh;S(c,D(49));J(c);}h=e.data.length;a.cz=Hk(h);i=0;while(i<h){c=d.ra;if(c===null){c=A0p;e=C(d.eT).data;i=B(i,e);c=MI(C(c),e[i]);}else{b=A0p;e=C(d.eT).data;i=B(i,e);j=e[i];k=c.fs;b=C(b);c=APx(b.ix,j,k);}CJ(C(a.cz),AGb(ARL(c,
0)));i=i+1|0;}a.iq=1;}c=new LZ;i=a.sG;AVa();c.mU=El();c.hp=El();c.rS=C5(1.0,1.0,1.0,1.0);c.go=a;c.oW=i;l=C(a.cz).e;if(!l){c=new Bh;S(c,D(50));J(c);}a:{c.cm=K($rt_arraycls($rt_floatcls()),l);c.cn=Bk(l);if(l>1){e=K(G_,l);f=e.data;c.d1=e;i=0;h=f.length;while(true){if(i>=h)break a;e=c.d1;b=AFH();e=C(e).data;i=B(i,e);e[i]=b;i=i+1|0;}}}c.jg=Bk(l);a.gA=c;e=C(d.et).data;h=e.length;i=0;while(i<h){b:{i=B$(i);f=e[i];if(f!==null){f=f.data;g=f.length;l=0;while(true){if(l>=g)break b;l=B$(l);c=f[l];if(c!==null)Ny(d,c,W(CK(C(a.cz),
c.eK),DW));l=l+1|0;}}}i=i+1|0;}c=d.j3;if(c!==null)Ny(d,c,W(CK(C(a.cz),c.eK),DW));a.iq=1;}
var SL=F();
var A0q=null;function A0r(){A0r=T(SL);ASo();}
function ASo(){A0q=AHR();}
function By(){var a=this;E.call(a);a.c1=0.0;a.c0=0.0;a.cZ=0.0;a.cY=0.0;}
var A0s=null;var A0t=null;var A0u=null;var A0v=null;var A0w=null;var A0x=0.0;var A0y=null;var A0z=null;var A0A=null;var A0B=null;var A0C=null;var A0D=null;var A0E=null;var A0F=null;var A0G=null;var A0H=null;var A0I=null;var A0J=null;var A0K=null;var A0L=null;var A0M=null;var A0N=null;var A0O=null;var A0P=null;var A0Q=null;var A0R=null;var A0S=null;var A0T=null;var A0U=null;var A0V=null;var A0W=null;var A0X=null;var A0Y=null;var A0Z=null;var A00=null;function J5(){J5=T(By);AF6();}
function AHR(){var a=new By();AFx(a);return a;}
function B6(a){var b=new By();AEh(b,a);return b;}
function C5(a,b,c,d){var e=new By();ACc(e,a,b,c,d);return e;}
function AFx(a){J5();}
function AEh(a,b){J5();a.c1=((b&(-16777216))>>>24|0)/255.0;a.c0=((b&16711680)>>>16|0)/255.0;a.cZ=((b&65280)>>>8|0)/255.0;a.cY=(b&255)/255.0;}
function ACc(a,b,c,d,e){J5();a.c1=b;a.c0=c;a.cZ=d;a.cY=e;if(b<0.0)a.c1=0.0;else if(b>1.0)a.c1=1.0;if(c<0.0)a.c0=0.0;else if(c>1.0)a.c0=1.0;if(d<0.0)a.cZ=0.0;else if(d>1.0)a.cZ=1.0;if(e<0.0)a.cY=0.0;else if(e>1.0)a.cY=1.0;}
function AJX(a,b){var c;if(a===b)return 1;if(b!==null&&CZ(a)===CZ(b)){c=W(b,By);return Jk(a)!=Jk(C(c))?0:1;}return 0;}
function AM4(a){var b,c,d;b=a.c1;c=31*(b===0.0?0:Fl(b))|0;b=a.c0;c=31*(c+(b===0.0?0:Fl(b))|0)|0;d=a.cZ;c=31*(c+(d===0.0?0:Fl(d))|0)|0;d=a.cY;return c+(d===0.0?0:Fl(d))|0;}
function Jk(a){return (255.0*a.cY|0)<<24|(255.0*a.cZ|0)<<16|(255.0*a.c0|0)<<8|255.0*a.c1|0;}
function AJm(a){var b,c;b=Jl((255.0*a.c1|0)<<24|(255.0*a.c0|0)<<16|(255.0*a.cZ|0)<<8|255.0*a.cY|0);while(true){b=C(b);if(X(b)>=8)break;c=new N;Q(c);Bb(c,D(51));Bb(c,b);b=O(c);}return b;}
function AF6(){var b;A0s=C5(1.0,1.0,1.0,1.0);A0t=B6((-1077952513));A0u=B6(2139062271);A0v=B6(1061109759);A0w=C5(0.0,0.0,0.0,1.0);b=C(A0s);A0x=W$((255.0*b.cY|0)<<24|(255.0*b.cZ|0)<<16|(255.0*b.c0|0)<<8|255.0*b.c1|0);A0y=C5(0.0,0.0,0.0,0.0);A0z=C5(0.0,0.0,1.0,1.0);A0A=C5(0.0,0.0,0.5,1.0);A0B=B6(1097458175);A0C=B6(1887473919);A0D=B6((-2016482305));A0E=C5(0.0,1.0,1.0,1.0);A0F=C5(0.0,0.5,0.5,1.0);A0G=B6(16711935);A0H=B6(2147418367);A0I=B6(852308735);A0J=B6(579543807);A0K=B6(1804477439);A0L=B6((-65281));A0M=B6((-2686721));A0N
=B6((-626712321));A0O=B6((-5963521));A0P=B6((-1958407169));A0Q=B6((-759919361));A0R=B6((-1306385665));A0S=B6((-16776961));A0T=B6((-13361921));A0U=B6((-8433409));A0V=B6((-92245249));A0W=B6((-9849601));A0X=C5(1.0,0.0,1.0,1.0);A0Y=B6((-1608453889));A0Z=B6((-293409025));A00=B6((-1339006721));}
function Jo(){var a=this;E.call(a);a.dw=0;a.hA=0;a.g_=null;a.iV=null;a.gC=null;a.hh=null;a.gp=0.0;}
var A01=0.0;function RK(a){var b,c,d;b=A02;c=a.dw;d=a.hA;C(b).iG(c,d);}
function ACo(a,b,c,d){var e,f,g;if(b!==null&&!(!d&&a.gC===b)){e=A02;f=a.dw;b=C(b);C(e).eZ(f,10242,b.mS);a.gC=b;}if(c!==null&&!(!d&&a.hh===c)){b=A02;g=a.dw;c=C(c);C(b).eZ(g,10243,c.mS);a.hh=c;}}
function VW(a,b,c,d){var e,f,g;if(b!==null&&!(!d&&a.g_===b)){e=A02;f=a.dw;b=C(b);C(e).eZ(f,10241,b.le);a.g_=b;}if(c!==null&&!(!d&&a.iV===c)){b=A02;g=a.dw;c=C(c);C(b).eZ(g,10240,c.le);a.iV=c;}}
function YM(a,b,c){var d,e;d=A01;if(d<=0.0){if(!LU(C(A03),D(52))){d=1.0;A01=d;}else{e=C(Lv(16));BT(e,0);CF(e,e.bM);C(A04).g9(34047,e);d=QU(e,0);A01=d;}}if(d===1.0)return 1.0;b=AD9(b,d);if(!c){d=a.gp;AOI();if(IS(b-d)>0.10000000149011612?0:1)return a.gp;}C(A04).lQ(3553,34046,b);a.gp=b;return b;}
function Zi(){A01=0.0;}
function TE(){Jo.call(this);this.eo=null;}
var A05=null;function AUX(a){var b=new TE();ZG(b,a);return b;}
function ARL(a,b){var c=new TE();ACr(c,a,b);return c;}
function A06(a,b,c){var d=new TE();LP(d,a,b,c);return d;}
function ZG(a,b){LP(a,b,null,0);}
function ACr(a,b,c){LP(a,b,null,c);}
function LP(a,b,c,d){var e,f,g,h,i,j,k;if(b===null)e=null;else{e=new H_;f=APM(b);e.hz=0;e.g2=0;e.dO=0;e.oU=b;e.cl=f;e.ee=c;e.p2=d;b=TJ(e,f);e.cl=b;e.hz=CN(C(b));e.g2=CQ(C(e.cl));if(c===null)e.ee=Gw(C(e.cl));}g=AEZ(C(A02));AI2();b=A07;a.g_=b;a.iV=b;AF1();b=A08;a.gC=b;a.hh=b;a.gp=1.0;a.dw=3553;a.hA=g;b=a.eo===null?e:C(e);a.eo=b;b=C(b);if(!b.dO)O3(b);RK(a);if(!b.dO)O3(b);AGB();if(A09===A0$){b=new BU;S(b,D(53));J(b);}if(!b.dO){c=new BU;S(c,D(54));J(c);}b.dO=0;c=b.cl;b.cl=null;h=1;f=b.ee;i=C(c);if(f===Gw(i))c=i;else
{c=V8(CN(i),CQ(i),b.ee);Hu();M2(c,A0_);PD(c,i,0,0,0,0,CN(i),CQ(i));H4(i);h=1;}C(A02).jN(3317,1);if(!b.p2)C(A02).dD(3553,0,GR(c),CN(c),CQ(c),0,G5(c),Hq(c),c.eN);else{j=CN(c);k=CQ(c);if(!A1a)Pv(3553,c,j,k);else{f=Mh(C(A1b));MT();if(f!==A1c&&Mh(C(A1b))!==A1d&&Mh(C(A1b))!==A1e){if(!LU(C(A03),D(55))&&!LU(C(A03),D(56))&&!Bn(C(Cy(C(CZ(C(A04))))),D(57))&&A1f===null)Pv(3553,c,j,k);else{C(A02).dD(3553,0,GR(c),CN(c),CQ(c),0,G5(c),Hq(c),c.eN);C(A04).hm(3553);}}else{C(A02).dD(3553,0,GR(c),CN(c),CQ(c),0,G5(c),Hq(c),c.eN);C(A04).hm(3553);}}}if
(h)H4(c);VW(a,a.g_,a.iV,1);ACo(a,a.gC,a.hh,1);YM(a,a.gp,1);b=A02;d=a.dw;C(b).iG(d,0);b=C(e);WL(A1b,a);}
function F0(a){return C(a.eo).hz;}
function F9(a){return C(a.eo).g2;}
function QO(a){var b,c;b=a.hA;if(!b)return;if(b){AEW(C(A02),b);a.hA=0;}c=C(a.eo);if(Fn(C(A05),A1b)!==null)H$(C(W(Fn(C(A05),A1b),DQ)),a,1);}
function AN0(a){var b;b=a.eo;if(!(b instanceof H_))return OE(a);return OE(C(b));}
function WL(b,c){var d;d=W(Fn(C(A05),b),DQ);if(d===null)d=El();CJ(d,c);Lt(C(A05),b,d);}
function ACK(){A05=AAH();}
function DQ(){var a=this;E.call(a);a.E=null;a.e=0;a.dR=0;a.jr=null;}
function El(){var a=new DQ();AId(a);return a;}
function Hk(a){var b=new DQ();ASu(b,a);return b;}
function AUc(a,b){var c=new DQ();OW(c,a,b);return c;}
function AId(a){OW(a,1,16);}
function ASu(a,b){OW(a,1,b);}
function OW(a,b,c){a.dR=b;a.E=K(E,c);}
function CJ(a,b){var c,d,e,f;c=a.E;d=a.e;e=C(c);if(d==e.data.length)e=Kl(a,BF(8,d*1.75|0));f=a.e;a.e=f+1|0;c=C(e).data;c[B(f,c)]=b;}
function KJ(a,b){b=C(b);Of(a,b.E,0,b.e);}
function Of(a,b,c,d){var e,f;e=a.E;f=a.e+d|0;e=C(e);if(f>e.data.length)e=Kl(a,BF(BF(8,f),a.e*1.75|0));Cg(b,c,e,a.e,d);a.e=f;}
function CK(a,b){var c,d,e;if(b<a.e){c=C(a.E).data;return c[B(b,c)];}d=new Bg;e=new N;Q(e);Bb(e,D(58));e=C(V(e,b));Bb(e,D(41));S(d,O(C(V(e,a.e))));J(d);}
function H$(a,b,c){var d,e,f,g,h;a:{d=a.E;if(!(!c&&b!==null)){e=0;f=a.e;while(e<f){d=C(d);g=d.data;c=B(e,g);if(g[c]===b){SW(a,c);return 1;}e=c+1|0;}}else{e=0;h=a.e;while(true){if(e>=h)break a;d=C(d);g=d.data;f=B(e,g);if(b.ca(g[f])){SW(a,f);return 1;}e=f+1|0;}}}return 0;}
function SW(a,b){var c,d,e,f,g,h;c=a.e;if(b>=c){d=new Bg;e=new N;Q(e);Bb(e,D(58));e=C(V(e,b));Bb(e,D(41));S(d,O(C(V(e,a.e))));J(d);}f=C(a.E);g=f.data;h=B(b,g);d=g[h];b=c-1|0;a.e=b;if(!a.dR)g[h]=g[B(b,g)];else Cg(f,h+1|0,f,h,b-h|0);b=a.e;e=null;g[B(b,g)]=e;return d;}
function Nr(a){var b,c,d,e,f;b=a.e;if(!b){c=new CA;S(c,D(44));J(c);}d=b-1|0;a.e=d;e=C(a.E).data;c=e[B(d,e)];f=null;e[B(d,e)]=f;return c;}
function Vg(a){var b,c,d,e;b=a.e;if(!b){c=new CA;S(c,D(44));J(c);}d=a.E;e=b-1|0;d=C(d).data;return d[B(e,d)];}
function Et(a){Xj(a.E,0,a.e,null);a.e=0;}
function Kl(a,b){var c,d,e;c=C(a.E);d=IZ(Fb(C(CZ(c))),b);e=a.e;d=C(d);Rs(c,0,d,0,B1(e,d.data.length));a.E=d;return d;}
function QK(a){var b,c,d,e;b=A1g;if(b)return Rz(a,1);if(a.jr===null){c=new Oa;c.hB=a;c.iD=1;a.jr=c;}c=C(a.jr);if(b)d=Rz(c.hB,c.iD);else{if(c.lB===null){c.lB=Rz(c.hB,c.iD);c.lC=Rz(c.hB,c.iD);}d=c.lB;e=C(d);if(e.cS){d=c.lC;c=C(d);c.ff=0;c.cS=1;e.cS=0;}else{e.ff=0;e.cS=1;C(c.lC).cS=0;}}return d;}
function Nt(a,b){var c,d,e,f,g,h;if(b<0){c=new Bh;d=new N;Q(d);Bb(d,D(59));S(c,O(C(V(d,b))));J(c);}e=a.e;if(e<=b)return;f=b;while(f<e){g=a.E;c=null;g=C(g).data;h=B(f,g);g[h]=c;f=h+1|0;}a.e=b;}
function AHx(a){var b,c,d,e,f,g,h;if(!a.dR)return HR(a);b=a.E;c=1;d=0;e=a.e;while(d<e){c=c*31|0;b=C(b);f=b.data;g=B(d,f);h=f[g];if(h!==null)c=c+h.cE()|0;d=g+1|0;}return c;}
function AMJ(a,b){var c,d,e,f,g,h,i,j,k;if(b===a)return 1;if(!a.dR)return 0;if(!(b instanceof DQ))return 0;c=C(W(b,DQ));if(!c.dR)return 0;d=a.e;if(d!=c.e)return 0;e=a.E;f=c.E;g=0;a:{while(g<d){b:{e=C(e);h=e.data;g=B(g,h);i=h[g];f=C(f);h=f.data;j=AWr(g,h);k=h[j];if(i!==null){if(i.ca(k))break b;else break a;}if(k!==null)break a;}g=j+1|0;}return 1;}return 0;}
function ARB(a){var b,c,d,e;if(!a.e)return D(60);b=a.E;c=ASZ(32);Cx(c,91);b=C(b).data;RE(c,b[AWr(0,b)]);d=1;while(d<a.e){H1(c,D(61));e=B(d,b);RE(c,b[e]);d=e+1|0;}Cx(c,93);return Ns(c);}
function Jm(){var a=this;E.call(a);a.dN=0;a.cT=null;a.cx=null;a.px=0.0;a.mY=0;a.mg=0;a.ge=0;}
var A1h=null;function EA(){var a=new Jm();ADW(a);return a;}
function AWc(a,b){var c=new Jm();RH(c,a,b);return c;}
function ADW(a){RH(a,51,0.800000011920929);}
function RH(a,b,c){var d,e,f;if(c>0.0&&c<1.0){a.px=c;d=L2(b,c);a.mY=d*c|0;b=d-1|0;a.ge=b;a.mg=EG(Bc(b));a.cT=K(E,d);a.cx=K(E,d);return;}e=new Bh;f=new N;Q(f);Bb(f,D(62));S(e,O(C(Ew(f,c))));J(e);}
function J$(a,b){return E1(Ci(BO(Bc(C(b).cE()),G(2135587861, 2654435769)),a.mg));}
function Iq(a,b){var c,d,e,f,g;if(b===null){c=new Bh;S(c,D(63));J(c);}d=a.cT;e=J$(a,b);while(true){d=C(d);f=d.data;g=B(e,f);c=f[g];if(c===null)return  -(g+1|0)|0;if(c.ca(b))break;e=(g+1|0)&a.ge;}return g;}
function Bt(a,b,c){var d,e,f,g,h,i,j,k,l;d=Iq(a,b);if(d>=0){e=C(a.cx).data;d=B(d,e);f=e[d];e[AWr(d,e)]=c;return f;}d= -(d+1|0)|0;e=C(a.cT).data;d=B(d,e);e[d]=b;g=C(a.cx).data;g[AWr(d,g)]=c;d=a.dN+1|0;a.dN=d;if(d>=a.mY)a:{d=e.length;h=d<<1;a.mY=h*a.px|0;i=h-1|0;a.ge=i;a.mg=EG(Bc(i));e=a.cT;g=a.cx;a.cT=K(E,h);a.cx=K(E,h);if(a.dN>0){h=0;while(true){if(h>=d)break a;e=C(e);j=e.data;k=B(h,j);b=j[k];if(b!==null){g=C(g);j=g.data;k=AWr(k,j);c=j[k];j=a.cT;h=J$(a,b);while(true){j=C(j);l=j.data;i=B(h,l);if(l[i]===null)break;h
=(i+1|0)&a.ge;}l[i]=b;j=C(a.cx).data;j[AWr(i,j)]=c;}h=k+1|0;}}}return null;}
function DC(a,b){var c,d;c=Iq(a,b);if(c<0)b=null;else{d=C(a.cx).data;b=d[B(c,d)];}return b;}
function Ej(a,b){return Iq(a,b)<0?0:1;}
function X9(){A1h=new E;}
var Zm=F(Jm);
var AFb=F();
function L3(){var a=this;E.call(a);a.v_=0;a.cI=0;a.d$=0;a.dH=0;a.ei=0;a.dT=null;a.x1=0;a.xd=0;}
function ACT(a,b,c){var d=new L3();AN3(d,a,b,c);return d;}
function AN3(a,b,c,d){var e,f;e=Cz(b,4);f=e?5126:5121;e=e?0:1;a.v_=b;a.cI=c;a.dH=f;a.d$=e;a.dT=d;a.x1=0;a.xd=G$(b);}
var AFj=F();
var AAg=F();
var ABJ=F();
var AAS=F();
var QG=F();
var A1i=null;function A1j(){A1j=T(QG);AMo();}
function AMo(){var b,c,d,e,f,g,h,i,j;b=new JN;AWm();b.fY=Br();b.f4=Br();b.pK=Br();b.qr=Br();c=D_(C(b.fY),0.0,0.0,0.0);d=D_(C(b.f4),0.0,0.0,0.0);e=b.fY;f=C(c);g=f.bH;d=C(d);h=d.bH;if(g<h)h=g;g=f.bJ;i=d.bJ;if(g<i)i=g;g=f.bI;j=d.bI;if(g<j)j=g;D_(C(e),h,i,j);c=b.f4;g=f.bH;h=d.bH;if(g>h)h=g;g=f.bJ;i=d.bJ;if(g>i)i=g;j=f.bI;g=d.bI;if(j>g)g=j;D_(C(c),h,i,g);c=b.pK;d=b.fY;c=Kj(C(c),d);d=b.f4;c=C(c);d=C(d);g=d.bH;h=d.bJ;i=d.bI;TI(C(D_(c,c.bH+g,c.bJ+h,c.bI+i)),0.5);c=b.qr;d=b.f4;c=Kj(C(c),d);d=b.fY;c=C(c);d=C(d);g=d.bH;h
=d.bJ;i=d.bI;D_(c,c.bH-g,c.bJ-h,c.bI-i);A1i=b;}
var Wh=F();
var AA$=F();
var AAF=F();
var AAX=F();
var ADN=F();
var Y6=F();
var AEx=F();
var Z2=F();
var W9=F();
var Xx=F();
var HD=F(Bo);
var A1k=null;var A1l=null;var A1m=null;function AVb(){AVb=T(HD);ALt();}
function AHm(a,b){var c=new HD();ACC(c,a,b);return c;}
function ACC(a,b,c){AVb();B_(a,b,c);}
function ALt(){var b,c,d,e;A1k=AHm(D(64),0);b=AHm(D(65),1);A1l=b;c=K(HD,2);d=c.data;e=A1k;d[AWr(0,d)]=e;d[AWr(1,d)]=b;A1m=c;}
var ABb=F();
var SR=F(0);
var CV=F();
var Wp=F(CV);
var Wo=F(CV);
var AAu=F(CV);
var X6=F(CV);
var ACA=F(CV);
var K2=F(CV);
var X1=F(K2);
var GV=F(0);
var Yv=F();
var EP=F(0);
var ACv=F();
var AEv=F();
var Xm=F();
var Ef=F();
var AB5=F(Ef);
var GS=F(Ef);
var C9=F(GS);
var A1n=null;function A1o(){A1o=T(C9);AHc();}
function AHc(){A1n=Br();}
var ACm=F();
var ADM=F(C9);
var AAa=F(C9);
var UX=F(Ef);
var A1p=null;function YA(){A1p=C4(3);}
var Ku=F(Ef);
var Wf=F(Ku);
var XZ=F(C9);
var Gi=F(GS);
var AAP=F(Gi);
var Z$=F(C9);
var AAY=F(C9);
var AAO=F(Gi);
var FL=F(Bo);
var A1q=null;var A1r=null;var A1s=null;var A1t=null;function AUB(){AUB=T(FL);AOm();}
function Zt(a,b){var c=new FL();XT(c,a,b);return c;}
function XT(a,b,c){AUB();B_(a,b,c);}
function AOm(){var b,c,d,e;A1q=Zt(D(66),0);A1r=Zt(D(67),1);b=Zt(D(68),2);A1s=b;c=K(FL,3);d=c.data;e=A1q;d[AWr(0,d)]=e;e=A1r;d[AWr(1,d)]=e;d[AWr(2,d)]=b;A1t=c;}
var Fr=F();
var LQ=F(Fr);
var VI=F(LQ);
var FY=F(Bo);
var A1u=null;var A1v=null;var A1w=null;var A1x=null;function AUV(){AUV=T(FY);ALZ();}
function ADR(a,b){var c=new FY();XP(c,a,b);return c;}
function XP(a,b,c){AUV();B_(a,b,c);}
function ALZ(){var b,c,d,e;A1u=ADR(D(69),0);A1v=ADR(D(70),1);b=ADR(D(71),2);A1w=b;c=K(FY,3);d=c.data;e=A1u;d[AWr(0,d)]=e;e=A1v;d[AWr(1,d)]=e;d[AWr(2,d)]=b;A1x=c;}
var Ch=F(Fr);
var HG=F(Ch);
var Xi=F();
var Eg=F(Ch);
var A1y=null;var A1z=null;var A1A=null;var A1B=null;function A1C(){A1C=T(Eg);AMN();}
function AMN(){A1y=Br();A1z=Br();A1A=Br();A1B=JO();}
var D5=F(Eg);
var Fw=F(D5);
var Yu=F(Fw);
var G3=F(Ch);
var AFy=F(G3);
var ADK=F(Ch);
var E3=F(Ch);
var Wi=F(E3);
var GB=F(Ch);
var Yr=F(D5);
var Zx=F(D5);
var J3=F(Ch);
var AB6=F(J3);
var W1=F(E3);
var AAf=F(Fw);
var AB3=F(Ch);
var AA2=F(E3);
var AB8=F(Ch);
var ACR=F(Eg);
var Zz=F(Cn);
var Xc=F(Cn);
var Xg=F(D5);
var ACh=F(GB);
var AES=F(HG);
var ABw=F(HG);
var ACJ=F(GB);
var AAB=F(Fw);
var AE8=F(G3);
var Ed=F(Fr);
var AAQ=F(Ed);
var E9=F();
var ACs=F(E9);
var AC5=F(Ed);
var ADJ=F(Ed);
var AEe=F(E9);
var Yk=F(Ed);
var ADO=F(E9);
var JB=F(0);
var MQ=F(0);
function Hv(){var a=this;E.call(a);a.kd=null;a.cq=null;a.ew=null;}
var A1D=0;function Se(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Hv;c.cq=b;d=c;b.classObject=d;}return c;}
function AM9(a){var b,c,d;b=(!(a.cq.$meta.flags&2)?0:1)?D(72):!Eu(a)?D(73):D(1);c=Cy(a);d=new N;Q(d);L(C(L(d,b)),c);return O(d);}
function Pw(a,b){var c;b=b;c=a.cq;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&ABQ(b.constructor,c)?1:0;}
function Cy(a){if(a.kd===null)a.kd=$rt_str(a.cq.$meta.name);return a.kd;}
function Eu(a){return a.cq.$meta.primitive?1:0;}
function Fb(a){return Se(AE7(a.cq));}
function AMy(){Kg.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ABD(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AWh();AGY();return null;}}];DD.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AKU(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[DD],returnType:$rt_voidcls(),callable:function(obj,args){A1E(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AMr(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BB,callable:function(obj,args){return Wy(obj);}}];Gk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AEQ(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[Qd,HI],returnType:$rt_voidcls(),callable:function(obj,args){W4(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Qd,HI,By,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){ACG(obj,args[0],args[1],args[2],ARG(args[3]),JM(args[4]),ALb(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Qd,HI,$rt_intcls(),$rt_intcls(),By,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
BB],returnType:$rt_voidcls(),callable:function(obj,args){ADb(obj,args[0],args[1],JM(args[2]),JM(args[3]),args[4],ARG(args[5]),JM(args[6]),ALb(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Qd,HI],returnType:$rt_voidcls(),callable:function(obj,args){A1F(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Qd,HI,By,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A1G(obj,args[0],
args[1],args[2],ARG(args[3]),JM(args[4]),ALb(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Qd,HI,$rt_intcls(),$rt_intcls(),By,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BB],returnType:$rt_voidcls(),callable:function(obj,args){Ia(obj,args[0],args[1],JM(args[2]),JM(args[3]),args[4],ARG(args[5]),JM(args[6]),ALb(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[Zg],returnType:$rt_voidcls(),callable:function(obj,args){X0(obj,
args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ABl(obj,ARG(args[0]),JM(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Zg,DD,$rt_floatcls(),BB],returnType:$rt_voidcls(),callable:function(obj,args){WF(obj,args[0],args[1],ARG(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Zg,DD,$rt_intcls()],returnType:DD,callable:function(obj,
args){return ADx(obj,args[0],args[1],JM(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[Zg,DD],returnType:$rt_voidcls(),callable:function(obj,args){I7(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[CL,Zg],returnType:$rt_floatcls(),callable:function(obj,args){return Kb(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[DQ,Zg],returnType:$rt_floatcls(),callable:function(obj,args){return AEp(obj
,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[HI,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return ACj(obj,args[0],JM(args[1]),JM(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AD$(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BB,callable:function(obj,args){return AOF(obj);}},{name:"<clinit>",modifiers:512,accessLevel
:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Eb();AJs();return null;}}];}
function Mz(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Eu(a)&&!(AE7(a.cq)===null?0:1)){if(a.ew===null){if(!A1D){A1D=1;AMy();}b=a.cq.$meta.methods;a.ew=K(E8,b.length);c=0;d=0;while(d<b.length){e=NC(b[d]);if(Bn(C($rt_str(e.name)),D(74))){f=e.parameterTypes;g=K(Hv,f.length);h=0;while(true){i=g.data;if(h>=i.length)break;j=Se(f[h]);h=B$(h);i[h]=j;h=h+1|0;}i=a.ew;k=c+1|0;l=new E8;j=$rt_str(e.name);h=e.modifiers;m=e.accessLevel;f=CY(e.callable,"call");l.hq=a;l.uW=j;l.lH=h;l.pk=m;l.ey=g;l.mh=f;g=C(i).data;g[B(c,g)]=l;c=k;}d
=d+1|0;}a.ew=Dm(KU(a.ew,c),$rt_arraycls(E8));}return C(a.ew).ck();}return K(E8,0);}
function ADw(a,b){var c,d,e,f,g;c=C(Mz(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new GG;Y(f);J(f);}g=B$(e);f=C(c[g]);if(ADv(KG(f),b))break;e=g+1|0;}return f;}
function ADt(a,b){var c,d,e,f,g;c=C(Mz(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new GG;Y(f);J(f);}g=B$(e);f=C(c[g]);if(Pm(LD(f))&&ADv(KG(f),b))break;e=g+1|0;}return f;}
var XA=F();
function BR(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function CY(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xe=F();
function AGl(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABQ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABQ(d[e],c))return 1;e=e+1|0;}return 0;}
function APF(b){return setTimeout(function(){$rt_threadStarter(AT2)(b);},0);}
function AT2(b){C(b).cM();}
function AAW(b){ADy(b,0);}
function ADy(b,c){return setTimeout(function(){AT2(b);},c);}
function AE7(b){return b.$meta.item;}
function AMp(){return [];}
function CP(){var a=this;E.call(a);a.l3=null;a.fK=null;a.h$=0;a.iQ=0;a.ud=null;}
function A1H(a){var b=new CP();S(b,a);return b;}
function A1I(a,b){var c=new CP();Dp(c,a,b);return c;}
function S(a,b){a.h$=1;a.iQ=1;a.l3=b;}
function Dp(a,b,c){a.h$=1;a.iQ=1;a.l3=b;a.fK=c;}
function AKx(a){return a;}
function AQn(a){return a.l3;}
function AK2(a){return a.e7();}
function AQt(a){var b;b=a.fK;if(b===a)b=null;return b;}
function Qo(a){Vp(a,ADo());}
function Vp(a,b){var c,d,e,f,g,h,i,j;c=Cy(C(CZ(a)));d=C(b);Iv(d,c);e=a.e7();if(e!==null){b=new N;Q(b);L(C(L(b,D(75))),e);Iv(d,O(b));}a:{f=d.j7;g=C(f).data;g[AWr(0,g)]=10;N9(d,f,0,1);f=a.ud;if(f!==null){f=f.data;h=f.length;i=0;while(true){if(i>=h)break a;j=B$(i);c=f[j];Iv(d,D(76));Be(C(L(C(d.eq),c)),10);JL(d);i=j+1|0;}}}b=a.fK;if(b!==null&&b!==a){Iv(d,D(77));Vp(C(a.fK),d);}}
var Cl=F(CP);
function A1J(){var a=new Cl();Y(a);return a;}
function Y(a){a.h$=1;a.iQ=1;}
var Bu=F(Cl);
function A1K(){var a=new Bu();Wd(a);return a;}
function AWo(a){var b=new Bu();ASn(b,a);return b;}
function Wd(a){Y(a);}
function ASn(a,b){S(a,b);}
var Z7=F(Bu);
function AWq(){var a=new Z7();AHC(a);return a;}
function AHC(a){Y(a);}
var HI=F(0);
function BB(){var a=this;E.call(a);a.w=null;a.gD=0;}
var A1L=null;var A1M=null;var A1N=null;function IC(){IC=T(BB);ARQ();}
function HQ(a){var b=new BB();JD(b,a);return b;}
function H6(a,b,c){var d=new BB();MC(d,a,b,c);return d;}
function ARS(a,b,c){var d=new BB();VE(d,a,b,c);return d;}
function JD(a,b){var c;IC();c=C(b);MC(a,c,0,c.data.length);}
function MC(a,b,c,d){var e;IC();e=BS(d);a.w=e;Cg(b,c,e,0,d);}
function VE(a,b,c,d){var e,f,g,h,i,j;IC();a.w=BS(d*2|0);e=0;f=0;while(f<d){g=c+1|0;b=C(b);h=b.data;i=h[B(c,h)];if(i<65536){h=a.w;j=e+1|0;c=i&65535;h=C(h).data;h[B(e,h)]=c;}else{h=a.w;c=e+1|0;j=GY(i);h=C(h).data;h[B(e,h)]=j;h=a.w;j=c+1|0;e=HC(i);h=C(h).data;h[B(c,h)]=e;}f=f+1|0;c=g;e=j;}b=a.w;if(e<C(b).data.length)a.w=WE(b,e);}
function R(a,b){var c,d;if(b>=0){c=C(a.w).data;if(b<c.length)return c[B(b,c)];}d=new HJ;Y(d);J(d);}
function X(a){return C(a.w).data.length;}
function FR(a){return C(a.w).data.length?0:1;}
function SS(a,b,c){var d,e,f;b=C(b);if((c+X(b)|0)>X(a))return 0;d=0;while(d<X(b)){e=R(b,d);f=c+1|0;if(e!=R(a,c))return 0;d=d+1|0;c=f;}return 1;}
function DK(a,b){if(a===b)return 1;return SS(a,b,0);}
function PN(a,b){var c,d,e,f;if(a===b)return 1;b=C(b);if(X(b)>X(a))return 0;c=0;d=X(a)-X(b)|0;while(d<X(a)){e=R(a,d);f=c+1|0;if(e!=R(b,c))return 0;d=d+1|0;c=f;}return 1;}
function DP(a,b,c){var d,e,f,g,h;d=BF(0,c);if(b<65536){e=b&65535;while(true){f=C(a.w).data;if(d>=f.length)return (-1);d=B(d,f);if(f[d]==e)break;d=d+1|0;}return d;}g=GY(b);h=HC(b);while(true){f=C(a.w).data;if(d>=(f.length-1|0))return (-1);d=B(d,f);if(f[d]==g&&f[B(d+1|0,f)]==h)break;d=d+1|0;}return d;}
function PM(a,b){return DP(a,b,0);}
function Gm(a,b,c){var d,e,f,g,h;d=B1(c,X(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);f=C(a.w).data;d=B(d,f);if(f[d]==e)break;d=d+(-1)|0;}return d;}g=GY(b);h=HC(b);while(true){if(d<1)return (-1);f=C(a.w).data;d=AWr(d,f);if(f[d]==h){c=B(d-1|0,f);if(f[c]==g)break;}d=d+(-1)|0;}return c;}
function KS(a,b){return Gm(a,b,X(a)-1|0);}
function PA(a,b,c){var d,e,f;d=BF(0,c);c=X(a);b=C(b);e=c-X(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=X(b))break a;if(R(a,d+f|0)!=R(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AB7(a,b){return PA(a,b,0);}
function PH(a,b,c){var d,e;d=X(a);b=C(b);d=B1(c,d-X(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=X(b))break a;if(R(a,d+e|0)!=R(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B7(a,b,c){var d,e;d=Cz(b,c);if(d>0){e=new Bg;Y(e);J(e);}if(!d){IC();return A1M;}if(!b&&c==X(a))return a;return H6(a.w,b,c-b|0);}
function DJ(a,b){return B7(a,b,X(a));}
function Cm(a,b){var c,d,e;c=X(a);b=C(b);c=c-X(b)|0;d=0;while(d<=c){e=0;while(true){if(e>=X(b))return 1;if(R(a,d+e|0)!=R(b,e))break;e=e+1|0;}d=d+1|0;}return 0;}
function LT(a,b,c){var d,e,f,g,h;d=new N;Q(d);e=X(a);b=C(b);f=e-X(b)|0;g=0;while(g<=f){h=0;a:{while(true){if(h>=X(b)){L(d,c);g=g+(X(b)-1|0)|0;break a;}if(R(a,g+h|0)!=R(b,h))break;h=h+1|0;}Be(d,R(a,g));}g=g+1|0;}L(d,DJ(a,g));return O(d);}
function AIh(a){return a;}
function Ix(a){var b,c,d,e,f;b=C(a.w).data;c=BS(b.length);d=0;while(true){e=c.data;if(d>=e.length)break;f=B(d,b);e[f]=b[f];d=f+1|0;}return c;}
function Lw(b){var c;IC();c=new N;Q(c);return O(C(V(c,b)));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BB))return 0;c=C(W(b,BB));if(X(c)!=X(a))return 0;d=0;while(d<X(c)){if(R(a,d)!=R(c,d))return 0;d=d+1|0;}return 1;}
function ABq(a,b){var c,d,e,f,g,h,i,j,k,l;b=C(b);Ts(b);AUY();c=A1O;if(FR(b))d=b;else{e=0;f=0;g=C(b.w).data;h=g.length;i=0;a:{while(i<h){i=B(i,g);j=g[i];if(Dw(j)!=j){e=1;break a;}if(HH(j))f=1;i=i+1|0;}}if(!e)d=b;else if(!f){g=BS(C(b.w).data.length);i=0;while(true){k=C(b.w).data;if(i>=k.length)break;l=g.data;e=B(i,k);i=Dw(k[e]);e=AWr(e,l);l[e]=i;i=e+1|0;}d=HQ(g);}else{l=Bk(C(b.w).data.length);j=0;f=0;while(true){g=C(b.w).data;i=g.length;if(f>=i)break;b:{if(f!=(i-1|0)){f=B(f,g);if(Ce(g[f])){g=b.w;i=f+1|0;g=C(g).data;e
=B(i,g);if(Cc(g[e])){k=l.data;h=j+1|0;g=C(b.w).data;i=g[AWr(f,g)];f=AWr(e,g);k[B(j,k)]=FU(DV(i,g[f]));break b;}}}g=l.data;h=j+1|0;k=C(b.w).data;f=B(f,k);g[B(j,g)]=Dw(k[f]);}f=f+1|0;j=h;}d=ARS(l,0,j);}}c=W(Fn(C(c),d),Dk);if(c===null){c=new QI;Y(c);c.v5=b;J(c);}b=C(AE1(c,ABn(a.w)));if(!b.f&&b.k==b.bM)g=b.N;else{g=CE(Bl(b));Pg(b,g,0,g.data.length);}return g;}
function IN(a){var b,c,d,e;a:{if(!a.gD){b=C(a.w).data;c=b.length;d=0;while(true){if(d>=c)break a;e=B$(d);d=b[e];a.gD=(31*a.gD|0)+d|0;d=e+1|0;}}}return a.gD;}
function K7(a,b){return ND(C(Gx(b)),a,0);}
function UC(a,b,c){return ND(C(Gx(b)),a,c);}
function Yp(a,b,c){var d,e,f,g,h;b=C(GH(C(Gx(b)),a));d=new J2;Q(d);b.ej=0;e=X(C(b.c6));b.hl=e;f=b.bu;g=b.c6;h=b.ej;Mm(C(f),g,h,e);b.ht=0;b.jK=null;C(b.bu).eM=(-1);while(GF(b)){b.j$=ACg(b,c);Ur(d,B7(C(b.c6),b.ht,U6(b)));Bb(d,b.j$);b.ht=PQ(b);}c=b.c6;e=b.ht;b=C(c);return O(C(Ur(d,B7(b,e,X(b)))));}
function ARQ(){var b,c;b=BS(0);A1L=b;c=new BB;IC();c.w=b;A1M=c;A1N=new TB;}
var E7=F(CP);
var HP=F(E7);
var Zp=F(HP);
var D4=F();
function D6(){D4.call(this);this.iL=0;}
var A1P=null;var A1Q=null;function ARz(a){var b=new D6();XY(b,a);return b;}
function XY(a,b){a.iL=b;}
function Jl(b){var c,d,e,f,g,h;if(!b)c=D(51);else{d=(((32-JQ(b)|0)+4|0)-1|0)/4|0;e=BS(d);f=(d-1|0)*4|0;d=0;while(f>=0){g=e.data;h=d+1|0;g[B(d,g)]=Mr((b>>>f|0)&15,16);f=f-4|0;d=h;}c=HQ(e);}return c;}
function LF(b){return C(NI(AWb(20),b,10)).F();}
function HW(b,c){if(b!==null)return AEI(b,0,X(b),c);b=new BK;S(b,D(78));J(b);}
function AEI(b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d){b=new BK;S(b,D(79));J(b);}if(e>=2&&e<=36){a:{f=0;g=C(b);switch(R(g,c)){case 43:h=c+1|0;break a;case 45:f=1;h=c+1|0;break a;default:}h=c;}i=0;if(h==d){b=new BK;Y(b);J(b);}while(h<d){j=h+1|0;k=Kd(R(g,h));if(k<0){b=new BK;l=B7(g,c,d);g=new N;Q(g);L(C(L(g,D(80))),l);S(b,O(g));J(b);}if(k>=e){b=new BK;m=B7(g,c,d);l=new N;Q(l);L(C(L(C(V(C(L(l,D(81))),e)),D(75))),m);S(b,O(l));J(b);}i=DO(e,i)+k|0;if(i<0){if(j==d&&i==(-2147483648)&&f)return (-2147483648);b=new BK;l=B7(g,
c,d);g=new N;Q(g);L(C(L(g,D(82))),l);S(b,O(g));J(b);}h=j;}if(f)i= -i|0;return i;}b=new BK;g=new N;Q(g);V(C(L(g,D(83))),e);S(b,O(g));J(b);}
function B8(b){return HW(b,10);}
function Ep(b){var c,d,e;if(b>=(-128)&&b<=127){a:{if(A1Q===null){A1Q=K(D6,256);c=0;while(true){d=C(A1Q).data;if(c>=d.length)break a;e=ARz(c-128|0);c=B(c,d);d[c]=e;c=c+1|0;}}}d=A1Q;b=b+128|0;d=C(d).data;return d[B(b,d)];}return ARz(b);}
function JM(a){return a.iL;}
function Ve(a,b){if(a===b)return 1;return b instanceof D6&&C(W(b,D6)).iL==a.iL?1:0;}
function JQ(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function G$(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ADA(){A1P=H($rt_intcls());}
function GI(){var a=this;E.call(a);a.q=null;a.t=0;}
function A1R(){var a=new GI();Q(a);return a;}
function AWb(a){var b=new GI();ET(b,a);return b;}
function Q(a){ET(a,16);}
function ET(a,b){a.q=BS(b);}
function Bb(a,b){return a.md(a.t,b);}
function LY(a,b,c){var d,e,f,g,h;if(b>=0&&b<=a.t){if(c===null)c=D(84);else if(FR(c))return a;a.eW(a.t+X(c)|0);d=a.t-1|0;while(d>=b){e=a.q;f=d+X(c)|0;g=C(a.q).data;h=B(d,g);d=g[h];e=C(e).data;e[B(f,e)]=d;d=h+(-1)|0;}a.t=a.t+X(c)|0;f=0;while(f<X(c)){e=a.q;d=b+1|0;h=R(c,f);e=C(e).data;e[B(b,e)]=h;f=f+1|0;b=d;}return a;}c=new HJ;Y(c);J(c);}
function NI(a,b,c){return ZM(a,a.t,b,c);}
function ZM(a,b,c,d){var e,f,g,h,i,j;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ck(a,b,b+1|0);else{Ck(a,b,b+2|0);f=a.q;g=b+1|0;f=C(f).data;f[B(b,f)]=45;b=g;}f=a.q;c=Mr(c,d);f=C(f).data;f[B(b,f)]=c;}else{g=1;h=1;i=$rt_udiv((-1),d);b:{while(true){j=DO(g,d);if($rt_ucmp(j,c)>0){j=g;break b;}h=h+1|0;if($rt_ucmp(j,i)>0)break;g=j;}}if(!e)h=h+1|0;Ck(a,b,b+h|0);if(e)e=b;else{f=a.q;e=b+1|0;f=C(f).data;f[B(b,f)]=45;}while(true){if(!j)break a;f=a.q;g=e+1|0;h=Mr($rt_udiv(c,j),d);f=C(f).data;f[B(e,f)]=h;c=$rt_umod(c,
j);j=$rt_udiv(j,d);e=g;}}}return a;}
function ABB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cz(c,0.0);if(!d){if(1.0/c===Infinity){Ck(a,b,b+3|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=48;b=d+1|0;e[B(d,e)]=46;e[B(b,e)]=48;return a;}Ck(a,b,b+4|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=45;b=d+1|0;e[B(d,e)]=48;d=b+1|0;e[B(b,e)]=46;e[B(d,e)]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ck(a,b,b+3|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=78;b=d+1|0;e[B(d,e)]=97;e[B(b,e)]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ck(a,b,b+8|0);d=b;}else{Ck(a,b,b+9|0);e
=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=45;}e=a.q;b=d+1|0;e=C(e).data;e[B(d,e)]=73;d=b+1|0;e[B(b,e)]=110;b=d+1|0;e[B(d,e)]=102;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=110;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=116;e[B(b,e)]=121;return a;}f=A1S;ABj(c,f);f=C(f);d=f.kw;g=f.j5;h=f.nR;i=1;j=1;if(h)j=2;k=9;l=ARf(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=BF(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ck(a,b,b+(j
+(k+m|0)|0)|0);if(!h)h=b;else{e=a.q;h=b+1|0;e=C(e).data;e[B(b,e)]=45;}o=100000000;if(n){e=a.q;b=h+1|0;e=C(e).data;e[B(h,e)]=48;h=b+1|0;e[B(b,e)]=46;while(true){b=m+(-1)|0;if(m<=0)break;l=h+1|0;e[B(h,e)]=48;m=b;h=l;}}p=0;while(p<k){if(o<=0)q=0;else{q=d/o|0;d=d%o|0;}e=a.q;m=h+1|0;b=(48+q|0)&65535;e=C(e).data;e[B(h,e)]=b;i=i+(-1)|0;if(i)h=m;else{h=m+1|0;e[B(m,e)]=46;}o=o/10|0;p=p+1|0;}if(g){e=a.q;d=h+1|0;e=C(e).data;e[B(h,e)]=69;if(g>=0)p=d;else{g= -g|0;p=d+1|0;e[B(d,e)]=45;}if(g<10)d=p;else{d=p+1|0;e[B(p,e)]=
(48+(g/10|0)|0)&65535;}e[B(d,e)]=(48+(g%10|0)|0)&65535;}return a;}
function XU(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cz(c,0.0);if(!d){if(1.0/c===Infinity){Ck(a,b,b+3|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=48;b=d+1|0;e[B(d,e)]=46;e[B(b,e)]=48;return a;}Ck(a,b,b+4|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=45;b=d+1|0;e[B(d,e)]=48;d=b+1|0;e[B(b,e)]=46;e[B(d,e)]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ck(a,b,b+3|0);e=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=78;b=d+1|0;e[B(d,e)]=97;e[B(b,e)]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ck(a,b,b+8|0);d=b;}else{Ck(a,b,b+9|0);e
=a.q;d=b+1|0;e=C(e).data;e[B(b,e)]=45;}e=a.q;b=d+1|0;e=C(e).data;e[B(d,e)]=73;d=b+1|0;e[B(b,e)]=110;b=d+1|0;e[B(d,e)]=102;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=110;d=b+1|0;e[B(b,e)]=105;b=d+1|0;e[B(d,e)]=116;e[B(b,e)]=121;return a;}f=A1T;ZQ(c,f);f=C(f);g=f.lp;h=f.jF;i=f.nw;j=1;k=1;if(i)k=2;l=18;m=APn(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=BF(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if
(h&&l==j)l=l+1|0;Ck(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.q;i=b+1|0;e=C(e).data;e[B(b,e)]=45;}p=G(1569325056, 23283064);if(o){e=a.q;b=i+1|0;e=C(e).data;e[B(i,e)]=48;i=b+1|0;e[B(b,e)]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[B(i,e)]=48;n=b;i=d;}}q=0;while(q<l){if(AJ1(p,Cs))d=0;else{d=E1(Th(g,p));g=V2(g,p);}e=a.q;b=i+1|0;d=(48+d|0)&65535;e=C(e).data;e[B(i,e)]=d;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[B(b,e)]=46;}p=Th(p,Bc(10));q=q+1|0;}if(h){e=a.q;d=i+1|0;e=C(e).data;e[B(i,e)]=69;if(h>=0)o=d;else{h= -h
|0;o=d+1|0;e[B(d,e)]=45;}if(h>=100){q=o+1|0;e[B(o,e)]=(48+(h/100|0)|0)&65535;h=h%100|0;d=q+1|0;e[B(q,e)]=(48+(h/10|0)|0)&65535;}else if(h<10)d=o;else{d=o+1|0;e[B(o,e)]=(48+(h/10|0)|0)&65535;}e[B(d,e)]=(48+(h%10|0)|0)&65535;}return a;}
function ARf(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function APn(b){var c,d,e,f,g,h;c=Bc(1);d=0;e=16;f=C(A1U).data;g=f.length-1|0;while(g>=0){h=B(g,f);if(DG(V2(b,BO(c,f[h])),Cs)){d=d|e;h=AWr(h,f);c=BO(c,f[h]);}e=e>>>1|0;g=h+(-1)|0;}return d;}
function Be(a,b){return a.ms(a.t,b);}
function U7(a,b,c){var d;Ck(a,b,b+1|0);d=C(a.q).data;d[B(b,d)]=c;return a;}
function N5(a,b){var c,d;c=C(a.q).data.length;if(c>=b)return;d=c>=1073741823?2147483647:BF(b,BF(c*2|0,5));a.q=WE(a.q,d);}
function O(a){return H6(a.q,0,a.t);}
function UY(a,b,c,d){return a.lL(a.t,b,c,d);}
function Nl(a,b,c,d,e){var f,g,h,i;Ck(a,b,b+e|0);f=e+d|0;while(d<f){g=a.q;e=b+1|0;h=d+1|0;c=C(c);i=c.data;d=i[B(d,i)];g=C(g).data;g[B(b,g)]=d;b=e;d=h;}return a;}
function IT(a,b){var c;c=C(b);return a.kH(c,0,c.data.length);}
function Ck(a,b,c){var d,e,f,g;d=a.t;e=d-b|0;a.eW((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.q;d=c+f|0;e=b+f|0;g=C(g).data;e=g[B(e,g)];g[B(d,g)]=e;f=f+(-1)|0;}a.t=a.t+(c-b|0)|0;}
var GK=F(0);
var N=F(GI);
function L9(){var a=new N();ASP(a);return a;}
function ASP(a){Q(a);}
function L(a,b){LY(a,a.t,b===null?D(84):b.F());return a;}
function En(a,b){Bb(a,b);return a;}
function V(a,b){NI(a,b,10);return a;}
function Ew(a,b){ABB(a,a.t,b);return a;}
function Pl(a,b){XU(a,a.t,b);return a;}
function VV(a,b){Be(a,b);return a;}
function AEJ(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Cz(b,c);if(d<=0){e=a.t;if(b<=e){if(d){if(c>e)c=e;f=e-c|0;a.t=e-(c-b|0)|0;g=0;while(g<f){h=a.q;d=b+1|0;e=c+1|0;h=C(h).data;h[B(b,h)]=h[B(c,h)];g=g+1|0;b=d;c=e;}}return a;}}}i=new HJ;Y(i);J(i);}
function T$(a,b){var c,d,e,f,g;if(b>=0){c=a.t;if(b<c){c=c-1|0;a.t=c;while(b<c){d=a.q;e=b+1|0;d=C(d).data;f=B(e,d);d[B(b,d)]=d[f];b=f;}return a;}}g=new HJ;Y(g);J(g);}
function Tn(a,b,c){var d;if(b<=c&&b>=0&&c<=a.t)return H6(a.q,b,c-b|0);d=new Bg;Y(d);J(d);}
function AMw(a,b,c,d,e){Nl(a,b,c,d,e);return a;}
function AJM(a,b,c,d){UY(a,b,c,d);return a;}
function HZ(a){return a.t;}
function Eq(a){return O(a);}
function AMH(a,b){N5(a,b);}
function ANf(a,b,c){U7(a,b,c);return a;}
function ATH(a,b,c){LY(a,b,c);return a;}
var Hy=F(HP);
var ABX=F(Hy);
function A1V(a){var b=new ABX();AIq(b,a);return b;}
function AIq(a,b){S(a,b);}
var YX=F(Hy);
function A1W(a){var b=new YX();AIS(b,a);return b;}
function AIS(a,b){S(a,b);}
var Bg=F(Bu);
function AVP(a){var b=new Bg();ZF(b,a);return b;}
function ZF(a,b){S(a,b);}
var AEj=F(Bg);
function AWp(){var a=new AEj();AKy(a);return a;}
function AKy(a){Y(a);}
var EC=F(Bu);
function AWn(){var a=new EC();AIM(a);return a;}
function AIM(a){Y(a);}
var J7=F();
var AWK=null;function AAt(){AWK=new J7;}
var IV=F();
var A1X=null;var A1Y=null;var A1Z=null;function EX(){if(A1X===null)A1X=AN2(A10,0);return A1X;}
function ADo(){if(A1Y===null)A1Y=AN2(A11,0);return A1Y;}
function Rs(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LI(b)&&(e+f|0)<=LI(d)){a:{if(b!==d){b=C(b);g=Fb(C(CZ(b)));d=C(d);h=Fb(C(CZ(d)));if(!(g!==null&&h!==null)){b=new Jb;Y(b);J(b);}else if(g!==h){g=C(g);if(!Eu(g)){h=C(h);if(!Eu(h)){i=Dm(b,$rt_arraycls(E));j=0;k=c;while(j<f){l=k+1|0;i=C(i);m=i.data;if(!Pw(h,m[B(k,m)])){K1(b,c,d,e,j);b=new Jb;Y(b);J(b);}j=j+1|0;k=l;}K1(b,c,d,e,f);return;}}if(!Eu(g))break a;if(!Eu(C(h)))break a;}}K1(b,c,d,e,f);return;}b=new Jb;Y(b);J(b);}b
=new Bg;Y(b);J(b);}d=new EC;S(d,D(85));J(d);}
function Cg(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LI(b)&&(e+f|0)<=LI(d)){K1(b,c,d,e,f);return;}b=new Bg;Y(b);J(b);}
function K1(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function TG(){return Long_fromNumber(new Date().getTime());}
function Hg(b,c){var d,e;if(A1Z===null){d=new LN;KW(d);Ec(d,D(86),D(87));Ec(d,D(88),D(89));Ec(d,D(90),D(91));Ec(d,D(92),D(93));Ec(d,D(94),D(95));Ec(d,D(96),D(97));Ec(d,D(98),D(87));Ec(d,D(99),D(91));e=new LN;KW(e);e.xf=d;A1Z=e;}return W(Ec(C(A1Z),b,c),BB);}
var ADa=F();
var AB_=F();
var Qg=F();
var A12=null;function Yz(){Yz=T(Qg);AOk();}
function LG(b){var c,d,$$je;Yz();c=W(DC(C(A12),b),Cn);if(c===null){c=new O1;Vz(c,4,100);a:{try{d=AOa(b,null);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){}else{throw $$e;}}try{d=C(AJ5(b,null));ACN(d,1);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof DB){}else{throw $$e;}}d=null;}c.i9=d;if(d===null){c=new Bu;d=new N;Q(d);Bb(d,D(100));Bb(d,Cy(C(b)));S(c,O(d));J(c);}Bt(C(A12),b,c);}return c;}
function ABF(b,c){var d,e,f,g;Yz();if(b===null){d=new Bh;S(d,D(45));J(d);}d=null;e=0;f=b.e;while(e<f){a:{g=CK(b,e);if(g!==null){if(d===null){d=W(DC(C(A12),CZ(g)),Cn);if(d===null)break a;}Gt(d,g);if(!c)d=null;}}e=e+1|0;}}
function AOk(){A12=EA();}
function Mi(){D4.call(this);this.nh=0.0;}
var A13=null;function ARG(a){return a.nh;}
function Q4(b){var c;c=new Mi;c.nh=b;return c;}
function Fc(b){var c,d,e,f,g,h,i,j,k,l,m;b=C(b);if(FR(b)){b=new BK;Y(b);J(b);}c=0;d=X(b);while(true){if(R(b,c)>32){while(R(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(R(b,c)==45){c=c+1|0;e=1;}else if(R(b,c)==43)c=c+1|0;if(c==d){b=new BK;Y(b);J(b);}a:{f=R(b,c);g=0;h=(-1);i=100000000;j=0;if(f!=46){j=1;if(f>=48&&f<=57){b:{while(c<d){if(R(b,c)!=48)break b;c=c+1|0;}}while(c<d){k=R(b,c);if(k<48)break a;if(k>57)break a;if(i>0){g=g+DO(i,k-48|0)|0;i=$rt_udiv(i,10);}h=h+1|0;c=c+1|0;}}else{b=new BK;Y(b);J(b);}}}if(c<d&&R(b,c)==46)
{c=c+1|0;c:{while(true){if(c>=d)break c;k=R(b,c);f=Cz(k,48);if(f<0)break c;if(k>57)break;if(!g&&!f)h=h+(-1)|0;else if(i>0){g=g+DO(i,k-48|0)|0;i=$rt_udiv(i,10);}c=c+1|0;j=1;}}if(!j){b=new BK;Y(b);J(b);}}if(c<d){f=R(b,c);if(f!=101&&f!=69){b=new BK;Y(b);J(b);}c=c+1|0;l=0;if(c==d){b=new BK;Y(b);J(b);}if(R(b,c)==45){c=c+1|0;l=1;}else if(R(b,c)==43)c=c+1|0;m=0;f=0;d:{while(true){if(c>=d)break d;i=R(b,c);if(i<48)break d;if(i>57)break;m=(10*m|0)+(i-48|0)|0;f=1;c=c+1|0;}}if(!f){b=new BK;Y(b);J(b);}if(l)m= -m|0;h=h+m
|0;}return AE4(g,h,e);}c=c+1|0;if(c==d)break;}b=new BK;Y(b);J(b);}
function Fl(b){if($rt_globals.isNaN(b)?1:0)return 2143289344;return $rt_floatToRawIntBits(b);}
function ACn(){A13=H($rt_floatcls());}
function ADL(){var a=this;E.call(a);a.bf=null;a.D=0;a.sn=0;}
function ABW(){var a=new ADL();APy(a);return a;}
function APy(a){a.sn=1;a.bf=C4(16);}
function OK(a,b){var c,d,e,f;c=a.bf;d=a.D;e=C(c);if(d==e.data.length)e=Lu(a,BF(8,d*1.75|0));f=a.D;a.D=f+1|0;c=C(e).data;c[B(f,c)]=b;}
function NT(a,b){b=C(b);Nw(a,b.bf,0,b.D);}
function T2(a,b,c,d){var e,f,g;e=c+d|0;b=C(b);if(e<=b.D){Nw(a,b.bf,c,d);return;}f=new Bh;g=new N;Q(g);Bb(g,D(101));g=C(V(g,c));Bb(g,D(38));g=C(V(g,d));Bb(g,D(39));S(f,O(C(V(g,b.D))));J(f);}
function Nw(a,b,c,d){var e,f;e=a.bf;f=a.D+d|0;e=C(e);if(f>e.data.length)e=Lu(a,BF(BF(8,f),a.D*1.75|0));Cg(b,c,e,a.D,d);a.D=a.D+d|0;}
function O7(a,b){var c,d,e;if(b<a.D){c=C(a.bf).data;return c[B(b,c)];}d=new Bg;e=new N;Q(e);Bb(e,D(58));e=C(V(e,b));Bb(e,D(41));S(d,O(C(V(e,a.D))));J(d);}
function V0(a,b,c){var d,e,f,g,h,i,j;d=a.D;if(c>=d){e=new Bg;f=new N;Q(f);Bb(f,D(40));f=C(V(f,c));Bb(f,D(41));S(e,O(C(V(f,a.D))));J(e);}if(b>c){e=new Bg;f=new N;Q(f);Bb(f,D(42));f=C(V(f,b));Bb(f,D(43));S(e,O(C(V(f,c))));J(e);}g=(c-b|0)+1|0;h=d-g|0;if(a.sn){i=a.bf;c=b+g|0;Cg(i,c,i,b,d-c|0);}else{j=BF(h,c+1|0);i=a.bf;Cg(i,j,i,b,d-j|0);}a.D=h;}
function PL(a){var b,c;if(a.D){b=C(a.bf).data;return b[AWr(0,b)];}c=new CA;S(c,D(44));J(c);}
function N2(a){a.D=0;}
function Lu(a,b){var c,d;c=C4(b);d=c.data;Cg(a.bf,0,c,0,B1(a.D,d.length));a.bf=c;return c;}
function OR(a,b){if(a.D>b)a.D=b;}
var ZB=F();
function ARl(b){return Math.sin(b);}
function ATk(b){return Math.sqrt(b);}
function AJC(b){return Math.ceil(b);}
function ANC(b,c){return Math.pow(b,c);}
function Eh(b){return b+APT(b)*0.5|0;}
function B1(b,c){if(b<c)c=b;return c;}
function BF(b,c){if(b>c)c=b;return c;}
function AQj(b,c){return Math.min(b,c);}
function AD9(b,c){return AQj(b,c);}
function ASA(b,c){return Math.max(b,c);}
function H3(b,c){return ASA(b,c);}
function VN(b){if(b<0)b= -b|0;return b;}
function AHs(b){return Math.abs(b);}
function IS(b){return AHs(b);}
function APT(b){return Math.sign(b);}
function DD(){var a=this;E.call(a);a.G=null;a.I=null;a.ce=0.0;a.hM=0.0;a.iT=0.0;}
function A14(){var a=new DD();AKU(a);return a;}
function AKU(a){a.G=El();a.I=ABW();}
function AMr(a){Et(C(a.G));N2(C(a.I));}
function Wy(a){var b,c,d,e;b=new N;ET(b,C(a.G).e+32|0);c=a.G;d=0;c=C(c);e=c.e;while(d<e){Be(b,C(W(CK(c,d),CL)).cU&65535);d=d+1|0;}Bb(b,D(61));Ew(b,a.ce);Bb(b,D(61));Ew(b,a.hM);Bb(b,D(61));Ew(b,a.iT);return O(b);}
function G_(){var a=this;E.call(a);a.by=null;a.p=0;a.g1=0;}
function AFH(){var a=new G_();ALv(a);return a;}
function KN(a){var b=new G_();ATC(b,a);return b;}
function A15(a,b){var c=new G_();Uz(c,a,b);return c;}
function ALv(a){Uz(a,1,16);}
function ATC(a,b){Uz(a,1,b);}
function Uz(a,b,c){a.g1=b;a.by=Bk(c);}
function Ey(a,b){var c,d,e,f;c=a.by;d=a.p;e=C(c);if(d==e.data.length)e=JW(a,BF(8,d*1.75|0));f=a.p;a.p=f+1|0;c=C(e).data;c[B(f,c)]=b;}
function AEK(a,b,c){var d,e,f;d=a.by;e=a.p;f=e+1|0;d=C(d);if(f>=d.data.length)d=JW(a,BF(8,e*1.75|0));e=a.p;d=C(d).data;d[B(e,d)]=b;d[B(e+1|0,d)]=c;a.p=e+2|0;}
function Dt(a,b){var c,d,e;if(b<a.p){c=C(a.by).data;return c[B(b,c)];}d=new Bg;e=new N;Q(e);Bb(e,D(58));e=C(V(e,b));Bb(e,D(41));S(d,O(C(V(e,a.p))));J(d);}
function IL(a,b,c){var d,e,f;if(b<a.p){d=C(a.by).data;d[B(b,d)]=c;return;}e=new Bg;f=new N;Q(f);Bb(f,D(58));f=C(V(f,b));Bb(f,D(41));S(e,O(C(V(f,a.p))));J(e);}
function Re(a){var b,c;b=a.by;c=a.p-1|0;b=C(b).data;return b[B(c,b)];}
function Ii(a){a.p=0;}
function JW(a,b){var c,d;c=Bk(b);d=c.data;Cg(a.by,0,c,0,B1(a.p,d.length));a.by=c;return c;}
function AM6(a){var b,c,d,e,f,g;if(!a.g1)return HR(a);b=a.by;c=1;d=0;e=a.p;while(d<e){c=c*31|0;b=C(b);f=b.data;g=B(d,f);c=c+f[g]|0;d=g+1|0;}return c;}
function ASb(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.g1)return 0;if(!(b instanceof G_))return 0;c=C(W(b,G_));if(!c.g1)return 0;d=a.p;if(d!=c.p)return 0;e=a.by;f=c.by;g=0;while(g<d){e=C(e);h=e.data;i=B(g,h);g=h[i];f=C(f);h=f.data;j=AWr(i,h);if(g!=h[j])return 0;g=j+1|0;}return 1;}
function AMR(a){var b,c,d,e;if(!a.p)return D(60);b=a.by;c=ASZ(32);Cx(c,91);b=C(b).data;Tx(c,b[AWr(0,b)]);d=1;while(d<a.p){H1(c,D(61));e=B(d,b);Tx(c,b[e]);d=e+1|0;}Cx(c,93);return Ns(c);}
var Ll=F(0);
var Ka=F();
var EL=F(0);
function AAb(){var a=this;Ka.call(a);a.fb=0;a.ch=null;a.iO=0;a.sC=0.0;a.kT=0;}
function AAH(){var a=new AAb();AJU(a);return a;}
function AT_(a){var b=new AAb();VK(b,a);return b;}
function AJU(a){VK(a,16);}
function VK(a,b){var c;if(b<0){c=new Bh;Y(c);J(c);}b=AER(b);a.fb=0;a.ch=K(IH,b);a.sC=0.75;Td(a);}
function AER(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Td(a){a.kT=C(a.ch).data.length*a.sC|0;}
function Fn(a,b){var c,d;if(b===null)c=Ri(a);else{d=b.cE();c=P0(a,b,d&(C(a.ch).data.length-1|0),d);}if(c===null)return null;return c.el;}
function P0(a,b,c,d){var e,f,g;e=C(a.ch).data;f=e[B(c,e)];a:{while(f!==null){if(f.ly==d){g=f.fr;if(b!==g&&!C(b).ca(g)?0:1)break a;}f=f.f$;}}return f;}
function Ri(a){var b,c;b=C(a.ch).data;c=b[AWr(0,b)];a:{while(c!==null){if(c.fr===null)break a;c=c.f$;}}return c;}
function Lt(a,b,c){var d,e,f;if(b===null){d=Ri(a);if(d===null){a.iO=a.iO+1|0;d=SZ(a,null,0,0);e=a.fb+1|0;a.fb=e;if(e>a.kT)Ti(a);}}else{f=b.cE();e=f&(C(a.ch).data.length-1|0);d=P0(a,b,e,f);if(d===null){a.iO=a.iO+1|0;d=SZ(a,b,e,f);f=a.fb+1|0;a.fb=f;if(f>a.kT)Ti(a);}}d=C(d);b=d.el;d.el=c;return b;}
function SZ(a,b,c,d){var e,f;e=new IH;Vs(e,b,null);e.ly=d;f=C(a.ch).data;c=B(c,f);e.f$=f[c];f[AWr(c,f)]=e;return e;}
function Ti(a){var b,c,d,e,f,g,h;b=C(a.ch).data.length;b=AER(!b?1:b<<1);c=K(IH,b);d=0;e=b-1|0;while(true){f=C(a.ch).data;if(d>=f.length)break;b=B(d,f);g=f[b];h=null;d=AWr(b,f);f[d]=h;while(g!==null){b=g.ly&e;h=g.f$;c=C(c);f=c.data;b=B(b,f);g.f$=f[b];f[b]=g;g=h;}d=d+1|0;}a.ch=c;Td(a);}
var U8=F(0);
var TB=F();
var ABv=F();
function LI(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A16());}return b.data.length;}
function IZ(b,c){if(b===null){b=new EC;Y(b);J(b);}if(b===H($rt_voidcls())){b=new Bh;Y(b);J(b);}if(c>=0)return ASv(C(b).cq,c);b=new ME;Y(b);J(b);}
function ASv(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Jb=F(Bu);
var Dd=F();
var A17=null;var A18=null;var A19=null;var A1$=null;var A1_=null;var A2a=null;var A2b=null;var A2c=null;var A2d=null;var A2e=null;function Mf(b){var c,d,e;c=new BB;d=BS(1);e=d.data;e[AWr(0,e)]=b;JD(c,d);return c;}
function Me(b){return b>=65536&&b<=1114111?1:0;}
function Ce(b){return (b&64512)!=55296?0:1;}
function Cc(b){return (b&64512)!=56320?0:1;}
function HH(b){return !Ce(b)&&!Cc(b)?0:1;}
function HT(b,c){return Ce(b)&&Cc(c)?1:0;}
function DV(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function GY(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function HC(b){return (56320|b&1023)&65535;}
function DU(b){return FW(b)&65535;}
function FW(b){if(A1$===null){if(A2b===null)A2b=ACu();A1$=VR(Zj((A2b.value!==null?$rt_str(A2b.value):null)));}return PW(A1$,b);}
function Dw(b){return FU(b)&65535;}
function FU(b){if(A19===null){if(A2c===null)A2c=ADG();A19=VR(Zj((A2c.value!==null?$rt_str(A2c.value):null)));}return PW(A19,b);}
function PW(b,c){var d,e,f,g,h,i;b=C(b);d=C(b.p8).data;if(c<d.length){e=B(c,d);return e+d[e]|0;}d=b.pT;e=0;d=C(d).data;f=d.length;g=(f/2|0)-1|0;a:{while(true){h=(e+g|0)/2|0;i=Cz(d[B(h*2|0,d)],c);if(!i)break;if(i<=0){e=h+1|0;if(e>g)break a;}else{h=h-1|0;if(h<e)break a;g=h;}}}if(h>=0){h=h*2|0;if(h<f)return c+d[B(h+1|0,d)]|0;}return 0;}
function Ta(b,c){if(c>=2&&c<=36){b=Kd(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Kd(b){var c,d,e,f,g,h,i,j,k,l;if(A18===null){if(A2d===null)A2d=Zu();c=(A2d.value!==null?$rt_str(A2d.value):null);d=AQv(Ix(C(c)));e=J6(d);f=Bk(e*2|0);g=0;h=0;i=0;j=0;while(j<e){k=f.data;h=h+Np(d)|0;i=i+Np(d)|0;l=g+1|0;k[B(g,k)]=h;g=l+1|0;k[B(l,k)]=i;j=j+1|0;}A18=f;}k=A18;l=0;k=C(k).data;g=(k.length/2|0)-1|0;while(g>=l){h=(l+g|0)/2|0;i=B(h*2|0,k);e=Cz(b,k[i]);if(e>0)l=h+1|0;else{if(e>=0)return k[B(i+1|0,k)];g=h-1|0;}}return (-1);}
function Mr(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FP(b){var c,d,e;if(b<65536){c=BS(1);d=c.data;d[AWr(0,d)]=b&65535;return c;}c=BS(2);d=c.data;e=GY(b);d[AWr(0,d)]=e;b=HC(b);d[AWr(1,d)]=b;return c;}
function Cr(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&HH(b&65535))return 19;if(A1_===null){if(A2e===null)A2e=AFv();A1_=ATK((A2e.value!==null?$rt_str(A2e.value):null));}d=A1_;e=0;d=C(d).data;c=d.length-1|0;while(e<=c){f=B((e+c|0)/2|0,d);g=C(d[f]);if(b>=g.p6)e=f+1|0;else{c=g.oS;if(b>=c){d=g.o0;b=b-c|0;d=C(d).data;return d[B(b,d)];}c=f-1|0;}}return 0;}
function JP(b){a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GM(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cr(b)!=16?0:1;}
function Pr(b){switch(Cr(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qx(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pr(b);}return 1;}
function Wv(){A17=H($rt_charcls());A2a=K(Dd,128);}
function ACu(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADG(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zu(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AFv(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Bh=F(Bu);
var TH=F(Cl);
function O1(){Cn.call(this);this.i9=null;}
var W2=F();
function L2(b,c){var d,e,f;if(b<0){d=new Bh;e=new N;Q(e);Bb(e,D(102));S(d,O(C(V(e,b))));J(d);}f=Kr(BF(2,AJC(b/c)|0));if(f<=1073741824)return f;d=new Bh;e=new N;Q(e);Bb(e,D(103));S(d,O(C(V(e,b))));J(d);}
var Rd=F(D4);
var A2f=null;function AD5(b,c,d,e){var f,g,h,i,j,k,l,m,n;if(e>=2&&e<=36){if(c==d){b=new BK;S(b,D(79));J(b);}a:{f=0;b=C(b);switch(R(b,c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Cs;i=Bc(e);while(g<d){j=g+1|0;k=Kd(R(b,g));if(k<0){l=new BK;m=B7(b,c,d);b=new N;Q(b);L(C(L(b,D(80))),m);S(l,O(b));J(l);}if(k>=e){l=new BK;n=B7(b,c,d);b=new N;Q(b);L(C(L(C(V(C(L(b,D(81))),e)),D(75))),n);S(l,O(b));J(l);}h=Cw(BO(i,h),Bc(k));if(AUl(h,Cs)){if(j==d&&DG(h,G(0, 2147483648))&&f)return G(0, 2147483648);l
=new BK;m=B7(b,c,d);b=new N;Q(b);L(C(L(b,D(82))),m);S(l,O(b));J(l);}g=j;}if(f)h=AVd(h);return h;}b=new BK;l=new N;Q(l);V(C(L(l,D(83))),e);S(b,O(l));J(b);}
function EG(b){var c,d;if(DG(b,Cs))return 64;c=0;d=Ci(b,32);if(AKh(d,Cs))c=32;else d=b;b=Ci(d,16);if(DG(b,Cs))b=d;else c=c|16;d=Ci(b,8);if(DG(d,Cs))d=b;else c=c|8;b=Ci(d,4);if(DG(b,Cs))b=d;else c=c|4;d=Ci(b,2);if(DG(d,Cs))d=b;else c=c|2;if(AKh(Ci(d,1),Cs))c=c|1;return (64-c|0)-1|0;}
function Ei(b,c){return Long_udiv(b, c);}
function EF(b,c){return Long_ucompare(b, c);}
function Za(){A2f=H($rt_longcls());}
var W8=F();
function AOa(b,c){var d,e,f,g,h,i,j,k,l,$$je;if(c!==null&&c.data.length){a:{b:{try{d=C(b);b=Xa(ADt(d,c));}catch($$e){$$je=Bj($$e);if($$je instanceof JY){e=$$je;break a;}else if($$je instanceof GG){e=$$je;break b;}else{throw $$e;}}return b;}b=new DB;f=Cy(d);d=new N;Q(d);L(C(L(d,D(104))),f);Dp(b,O(d),e);J(b);}b=new DB;f=Cy(d);d=new N;Q(d);L(C(L(C(L(d,D(105))),f)),D(106));Dp(b,O(d),e);J(b);}c=C(Mz(C(b))).data;g=c.length;h=K(E8,g);i=0;j=0;while(j<g){k=B(j,c);b=C(c[k]);if(Pm(LD(b))){j=i+1|0;h=C(h);l=h.data;l[B(i,
l)]=b;i=j;}j=k+1|0;}h=C(h);if(i<h.data.length)h=Dm(KU(h,i),$rt_arraycls(E8));c=C(h).data;return c.length<=0?null:Xa(c[AWr(0,c)]);}
function AJ5(b,c){var d,e,f,$$je;a:{try{d=C(b);b=Xa(ADw(d,c));}catch($$e){$$je=Bj($$e);if($$je instanceof JY){e=$$je;break a;}else if($$je instanceof GG){e=$$je;b=new DB;f=Cy(d);d=new N;Q(d);L(C(L(d,D(104))),f);Dp(b,O(d),e);J(b);}else{throw $$e;}}return b;}b=new DB;f=Cy(d);d=new N;Q(d);L(C(L(d,D(107))),f);Dp(b,O(d),e);J(b);}
var DB=F(Cl);
function Xk(){E.call(this);this.h4=null;}
function Xa(a){var b=new Xk();AR2(b,a);return b;}
function AR2(a,b){a.h4=b;}
function Hb(a){return C(a.h4).hq;}
function ACN(a,b){var c;c=C(a.h4);}
function AFF(a,b){var c,d,e,f,$$je;if(b===null)b=K(E,0);a:{b:{c:{try{c=ADz(C(a.h4),b);}catch($$e){$$je=Bj($$e);if($$je instanceof Bh){c=$$je;break c;}else if($$je instanceof Lz){c=$$je;break a;}else if($$je instanceof Jq){c=$$je;break b;}else if($$je instanceof NA){c=$$je;d=new DB;e=Cy(C(Hb(a)));f=new N;Q(f);L(C(L(f,D(108))),e);Dp(d,O(f),c);J(d);}else{throw $$e;}}return c;}d=new DB;e=Cy(C(Hb(a)));f=new N;Q(f);L(C(L(f,D(109))),e);Dp(d,O(f),c);J(d);}d=new DB;e=Cy(C(Hb(a)));f=new N;Q(f);L(C(L(f,D(110))),e);Dp(d,
O(f),c);J(d);}d=new DB;e=Cy(C(Hb(a)));f=new N;Q(f);L(C(L(f,D(110))),e);Dp(d,O(f),c);J(d);}
var JY=F(Bu);
var D9=F(Cl);
var GG=F(D9);
function Qn(){var a=this;E.call(a);a.mP=0;a.sk=0;a.lT=0;a.oe=null;a.r5=0;a.sq=null;a.ng=0;a.sI=null;a.jC=0;a.fg=0;a.j8=0;a.mX=0;a.pp=0;a.oE=0;a.rb=0;a.p9=0;a.ql=0;a.mv=0;a.h0=0;}
function ACU(a){return !a.jC&&!a.fg?1:0;}
var O$=F(0);
function KQ(){var a=this;E.call(a);a.cj=null;a.fQ=null;a.pn=null;a.qf=null;a.vZ=null;a.bY=null;a.g6=null;a.eg=null;a.gE=null;a.c_=null;a.eS=null;a.jj=0;a.my=0;a.js=null;a.lP=0;a.e_=null;a.ua=null;a.tF=null;a.gc=null;a.m0=null;a.dr=null;}
var A2g=null;function ADg(a){var b,c,d,e,f,g;A2g=ANY();Hg(D(111),D(1));Hg(D(112),$rt_str(A2g.userAgent));if(A2g.windows?1:0)Hg(D(88),D(113));else if(A2g.macOS?1:0)Hg(D(88),D(114));else if(!(A2g.linux?1:0))Hg(D(88),D(115));else Hg(D(88),D(6));b=new NX;c=C(a.bY).ng;b.rl=0;b.sD=0;b.dn=1;b.dn=c;A2h=b;d=$rt_str(C(Hr()).er.location.href);a.dr=d;if(Cm(C(d),D(116))){b=LT(C(a.dr),D(117),D(1));a.dr=b;a.dr=LT(C(b),D(118),D(1));}c=PM(C(a.dr),63);if(c>=0)a.dr=B7(C(a.dr),0,c);b=a.bY;A2i=C(b).sk;d=AVx(b);a.cj=d;b=new M6;e
=a.dr;d=d.cc;b.lE=EA();b.fO=EA();b.hX=EA();b.f7=EA();b.gd=EA();b.oZ=EA();b.hb=El();b.k3=(-1);b.oO=e;f=C(AA5(a));if(f.oe!==null){g=d.ownerDocument;e=AVt(b);g.addEventListener("dragenter",BR(e,"handleEvent"),!!0);e=AUH(b);g.addEventListener("dragover",BR(e,"handleEvent"),!!0);e=AUM(b,a,f);g.addEventListener("drop",BR(e,"handleEvent"));}a.e_=b;ABC(new CS);ACe(C(a.e_),C(a.bY).r5,D(119));a.fQ=AT9(C(a.cj).cc);a.pn=AUe(a.e_);a.qf=AUJ();a.js=AT1();a.tF=AVf();if(C(a.bY).lT)AAR(a);A1b=a;b=a.cj;A03=b;A02=SM(C(b));A04=
SM(C(a.cj));A1f=WC(C(a.cj));A2j=a.fQ;A0p=a.pn;A2k=a.qf;b=AWg();a.vZ=b;A2l=b;b=GL(C(a.c_));e=AVN(a);b.addEventListener("visibilitychange",BR(e,"handleEvent"));TT(C(a.c_),a);if(ACU(C(a.bY)))Xw(C(a.c_),D(120),AUd(a));}
function ZI(a){var b,c,d,e,f,g,h,i,$$je;b=a.eS;a:{try{AVj();c=A2m;d=ADS(C(b));c=C(c).data;switch(c[B(d,c)]){case 1:d=ZT(C(AGc()));if(!d){Il();a.eS=A2n;e=$rt_globals.window.document.getElementById("progress");if(e!==null)e.style.setProperty("display","none");break a;}f=C(a.e_).k3;if(f>0){g=25+((75*(f-d|0)|0)/f|0)|0;h=$rt_globals.window.document.getElementById("progress-bar");if(h!==null){e=h.style;h=L9();VV(C(V(h,g)),37);i=Eq(h);e.setProperty("width",$rt_ustr(i));}}break a;case 2:break;default:break a;}if(a.g6
!==null){b=a.eg;if(b!==null){RJ(b);VX(C(a.eg));}Yg(C(a.fQ),null);QJ(C(a.fQ));Et(C(a.gc));a.eg=a.g6;a.g6=null;Il();a.eS=A2o;C(a.cj).iB=Cs;}Wt(a,a.eg);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){i=$$je;}else{throw $$e;}}Qo(i);J(i);}TT(C(a.c_),a);}
function Wt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=C(a.cj);d=TG();e=AUP(ALL(d,c.i2))/1000.0;c.pZ=e;c.i2=d;e=c.ip+e;c.ip=e;f=c.mO+1|0;c.mO=f;if(e>1.0){c.sJ=f;c.ip=0.0;c.mO=0;}g=Jf(C(A03));h=Jp(C(A03));f=0;i=a.eS;Il();if(i===A2o){a.eS=A2n;b=C(b);QP(b);f=1;}if(!(g==a.jj&&h==a.my&&!f)){a.jj=g;a.my=h;C(A02).jp(0,0,g,h);b=C(b);c=b.iw;if(c!==null)c.G6(g,h);}c=a.m0;i=a.gc;KJ(C(c),i);Et(C(a.gc));j=0;while(true){c=C(a.m0);if(j>=c.e)break;C(Dm(CK(c,j),Fe)).cM();j=j+1|0;}Et(c);c=C(a.cj);d=Cw(c.iB,Bc(1));c.iB=d;if(AUj(d,Bc(60)))
{b=C(b);C(A02).jE(0.25,0.25,0.25,1.0);C(A02).ma(16384);k=C(Hn(b));if(k.ds){c=new CA;S(c,D(121));J(c);}k.hi=0;C(A02).h1(0);c=k.e8;if(c!==null)c.gJ();else{i=C(k.du);c=A04;E6(i);C(c).io(i.bU);}c=k.iy;l=k.l1;ABf(C(Oh(C(c),C(l).dL)),k.rf);c=k.e8;if(c!==null){c.Gz(D(122),k.iy);C(k.e8).DO(D(123),0);}else{l=k.du;i=k.iy;l=C(l);g=NN(l,D(122));c=A04;E6(l);YC(C(c),g,1,0,C(i).dL,0);l=C(k.du);c=A04;E6(l);C(c).kz(NN(l,D(123)),0);}k.ds=1;c=Hn(b);i=RV(b);c=C(c);i=C(i);ADn(c,i,10.0,10.0,F0(i),F9(i));k=Qu(b);c=Hn(b);e=Jf(C(A03))
/2.0;m=Jp(C(A03))/2.0;k=C(k);l=C(k.gA);l.t2=0.0;l.t1=0.0;ABF(l.hp,1);Et(C(l.hp));Et(C(l.mU));f=0;h=C(l.cn).data.length;while(f<h){n=l.d1;if(n!==null){n=n.data;f=B(f,n);Ii(C(n[f]));}n=C(l.cn).data;f=B(f,n);n[f]=0;f=f+1|0;}AFs(C(k.gA),D(124),e,m,0,X(D(124)),0.0,8,0,null);X8(C(k.gA),c);ADQ(C(Hn(b)));}QJ(C(a.fQ));}
function AA5(a){return a.bY;}
function Sg(a,b,c){var d,e;if(a.lP>=2){d=C(a.js);d=EX();e=new N;Q(e);L(C(L(C(L(e,b)),D(75))),c);D2(C(d),O(e));}}
function Mh(a){MT();return A1d;}
function AAR(a){var b,c,d,e;b=a.e_;c=new M8;c.s7=a;b=C(b);d=A2h;b=KH(b);e=new N;Q(e);L(C(L(e,b)),D(125));b=O(e);My(C(d),1,b,c);}
var UJ=F(0);
function Ly(){E.call(this);this.iw=null;}
function RJ(a){var b;b=a.iw;if(b!==null)b.nG();}
function QP(a){var b;b=a.iw;if(b!==null)b.rr();}
function U9(){var a=this;Ly.call(a);a.jl=null;a.kV=null;a.lD=null;a.bQ=0;}
function RV(a){var b,$$je;if((a.bQ&1)<<24>>24)return a.jl;EM(a);a:{try{if((a.bQ&1)<<24>>24)break a;a.jl=AUX(MI(C(A0p),D(126)));a.bQ=(a.bQ|1)<<24>>24;break a;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(a);J(b);}Cu(a);return a.jl;}
function Hn(a){var b,$$je;if((a.bQ&2)<<24>>24)return a.kV;EM(a);a:{try{if((a.bQ&2)<<24>>24)break a;a.kV=ATU();a.bQ=(a.bQ|2)<<24>>24;break a;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(a);J(b);}Cu(a);return a.kV;}
function Qu(a){var b,$$je;if((a.bQ&4)<<24>>24)return a.lD;EM(a);a:{try{if((a.bQ&4)<<24>>24)break a;a.lD=AVg();a.bQ=(a.bQ|4)<<24>>24;break a;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(a);J(b);}Cu(a);return a.lD;}
function VX(a){var b,c,d,e;b=C(Hn(a));c=C(b.iI);if(Fn(C(A2p),A1b)!==null)H$(C(W(Fn(C(A2p),A1b),DQ)),c,1);C(c.dm).bW();d=c.es;if(d!==null)d.bW();C(c.br).bW();if(b.nq){b=b.du;if(b!==null){c=C(A04);c.io(0);c.hL(b.hk);c.hL(b.i8);c.ko(b.bU);AFg();if(DC(C(A2q),A1b)!==null)H$(C(W(DC(C(A2q),A1b),DQ)),b,1);}}a:{b=C(Qu(a));if(b.iq){e=0;while(true){c=C(b.cz);if(e>=c.e)break a;QO(C(C(W(CK(c,e),DW)).di));e=e+1|0;}}}QO(C(RV(a)));b=a.iw;if(b!==null)b.DZ();}
var HJ=F(Bg);
var ADd=F();
function W$(b){return $rt_intBitsToFloat(b&(-16777217));}
var MK=F(0);
function GT(){var a=this;E.call(a);a.fr=null;a.el=null;}
function A2r(a,b){var c=new GT();Vs(c,a,b);return c;}
function Vs(a,b,c){a.fr=b;a.el=c;}
function IH(){var a=this;GT.call(a);a.ly=0;a.f$=null;}
var KT=F();
var A2s=null;var A2t=null;function Pm(b){return !(b&1)?0:1;}
function Wg(){var b,c;b=Bk(12);c=b.data;c[AWr(0,c)]=1;c[AWr(1,c)]=4;c[AWr(2,c)]=2;c[AWr(3,c)]=1024;c[AWr(4,c)]=8;c[AWr(5,c)]=16;c[AWr(6,c)]=128;c[AWr(7,c)]=64;c[AWr(8,c)]=32;c[AWr(9,c)]=256;c[AWr(10,c)]=2048;c[AWr(11,c)]=512;A2t=b;}
var WP=F();
function WE(b,c){var d,e,f,g;d=BS(c);b=C(b).data;e=B1(c,b.length);f=0;while(f<e){g=d.data;f=B(f,b);c=b[f];f=AWr(f,g);g[f]=c;f=f+1|0;}return d;}
function UB(b,c){var d,e,f,g;d=CE(c);b=C(b).data;e=B1(c,b.length);f=0;while(f<e){g=d.data;f=B(f,b);c=b[f];f=AWr(f,g);g[f]=c;f=f+1|0;}return d;}
function KU(b,c){var d,e,f,g,h,i;d=C(b);b=d.data;e=IZ(Fb(C(CZ(d))),c);f=B1(c,b.length);g=0;while(g<f){g=B(g,b);h=b[g];e=C(e);i=e.data;g=AWr(g,i);i[g]=h;g=g+1|0;}return e;}
function Yl(b,c,d,e){var f,g,h;if(c>d){f=new Bh;Y(f);J(f);}while(c<d){g=c+1|0;b=C(b);h=b.data;h[B(c,h)]=e;c=g;}}
function H0(b,c){var d;d=C(b);Yl(d,0,d.data.length,c);}
function Xj(b,c,d,e){var f,g;if(c>d){e=new Bh;Y(e);J(e);}while(c<d){f=c+1|0;b=C(b);g=b.data;g[B(c,g)]=e;c=f;}}
function AFz(b,c){var d;d=C(b);Xj(d,0,d.data.length,c);}
function ADv(b,c){var d,e,f,g,h,i,j;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data.length;if(e==d.length){f=0;a:{while(true){if(f>=e){f=(-1);break a;}d=c.data;g=b.data;h=f+0|0;i=g[B(h,g)];j=d[B(h,d)];if(!(i===j?1:i!==null?AA0(i,j):j!==null?0:1))break;f=f+1|0;}}return f>=0?0:1;}}return 0;}
var LJ=F();
var QN=F(0);
function E8(){var a=this;LJ.call(a);a.hq=null;a.uW=null;a.lH=0;a.pk=0;a.ey=null;a.mh=null;}
function LD(a){var b,c,d;a:{b=a.lH;c=a.pk;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function KG(a){return C(a.ey).ck();}
function AHk(a){var b,c,d,e,f,g,h,i,j;b=new N;Q(b);c=LD(a);d=new N;Q(d);if(A2s===null){e=K(BB,12);f=e.data;f[AWr(0,f)]=D(127);f[AWr(1,f)]=D(128);f[AWr(2,f)]=D(129);f[AWr(3,f)]=D(130);f[AWr(4,f)]=D(131);f[AWr(5,f)]=D(132);f[AWr(6,f)]=D(133);f[AWr(7,f)]=D(134);f[AWr(8,f)]=D(135);f[AWr(9,f)]=D(136);f[AWr(10,f)]=D(137);f[AWr(11,f)]=D(138);A2s=e;}g=A2s;h=0;e=C(A2t).data;i=e.length;j=0;while(j<i){j=B$(j);if(c&e[j]){if(d.t>0)Be(d,32);g=C(g);f=g.data;h=B(h,f);Bb(d,f[h]);}h=h+1|0;j=j+1|0;}Bb(b,O(d));if(b.t>0)Be(b,32);Bb(b,
C(Cy(C(a.hq))));Be(b,40);e=KG(a);c=0;while(true){e=C(e);f=e.data;if(c>=f.length)break;if(c>0)Be(b,44);j=B$(c);Bb(b,Cy(C(f[j])));c=j+1|0;}Be(b,41);return O(b);}
function ADz(a,b){var c,d,e,f,g,h,i;if(a.lH&1){c=new Lz;Y(c);J(c);}if(a.mh===null){c=new Jq;Y(c);J(c);}d=C(b);b=d.data;e=b.length;if(e!=C(a.ey).data.length){c=new Bh;Y(c);J(c);}f=0;while(true){if(f>=e){c=d.data;g=new (C(a.hq).cq);a.mh.call(g,c);return g;}h=C(a.ey).data;f=B(f,h);if(!Eu(C(h[f]))&&b[f]!==null){h=C(a.ey).data;f=AWr(f,h);if(!Pw(C(h[f]),b[f])){c=new Bh;Y(c);J(c);}}h=C(a.ey).data;i=AWr(f,h);if(Eu(C(h[i]))&&b[i]===null)break;f=i+1|0;}c=new Bh;Y(c);J(c);}
var F8=F(Bo);
var AWL=null;var A2o=null;var A2n=null;var A2u=null;function Il(){Il=T(F8);AM7();}
function Wq(a,b){var c=new F8();AFt(c,a,b);return c;}
function AFt(a,b,c){Il();B_(a,b,c);}
function AM7(){var b,c,d,e;AWL=Wq(D(139),0);A2o=Wq(D(140),1);b=Wq(D(141),2);A2n=b;c=K(F8,3);d=c.data;e=AWL;d[AWr(0,d)]=e;e=A2o;d[AWr(1,d)]=e;d[AWr(2,d)]=b;A2u=c;}
var Nc=F(0);
var B0=F(0);
var QF=F(0);
function R4(){var a=this;E.call(a);a.er=null;a.jO=null;}
var A2v=null;function ALl(){ALl=T(R4);AK6();}
function AJ7(){var a=new R4();Zh(a);return a;}
function Hr(){ALl();return A2v;}
function Zh(a){ALl();a.er=$rt_globals.window;}
function GL(a){return a.er.document;}
function TT(a,b){a.jO=b;$rt_globals.requestAnimationFrame(BR(a,"onAnimationFrame"));}
function PE(a){return a.er.document.documentElement.clientWidth;}
function Or(a){return a.er.document.documentElement.clientHeight;}
function Xw(a,b,c){var d;d=CY(c,"handleEvent");a.er.addEventListener($rt_ustr(b),BR(d,"handleEvent"));}
function AK6(){A2v=AJ7();}
function APa(a,b){var c;b;c=a.jO;a.jO=null;ZI(C(c));}
var XR=F();
function ANY(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
var MF=F(0);
function NX(){var a=this;E.call(a);a.gm=0;a.rl=0;a.sD=0;a.dn=0;}
function ZT(a){return a.gm;}
function Fk(a){a.gm=a.gm-1|0;}
function IF(a){a.gm=a.gm+1|0;}
function HU(a,b,c,d){var e,f,g;if(a.dn){e=EX();f=new N;Q(f);L(C(L(f,D(142))),c);D2(C(e),O(f));}IF(a);g=new Nd;g.dM=a;g.gF=b;g.dF=c;g.d5=d;Mt(g);Ne(g);}
function My(a,b,c,d){var e,f;if(a.dn){e=EX();f=new N;Q(f);L(C(L(f,D(143))),c);D2(C(e),O(f));}IF(a);e=new $rt_globals.XMLHttpRequest();f=new Nf;f.eI=a;f.dE=e;f.k1=b;f.hG=c;f.gh=d;f=BR(f,"handleEvent");e.onreadystatechange=f;Mu(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function Y$(a,b,c,d){var e;e=new Ng;e.x3=a;e.hQ=d;Gs(a,b,c,e);}
function Gs(a,b,c,d){var e,f,g;if(a.dn){e=EX();f=new N;Q(f);L(C(L(f,D(142))),c);D2(C(e),O(f));}IF(a);g=new Nh;g.dG=a;g.gi=b;g.dy=c;g.ev=d;Mt(g);Ne(g);}
function Mu(a,b,c){var d;d=new Nj;d.yC=a;d.ob=c;c=BR(d,"handleEvent");b.onprogress=c;}
var Pd=F();
var A2h=null;function AGc(){return A2h;}
var KA=F();
var A2w=0;var A2i=0;function Zn(){A2w=1;}
var SD=F(0);
function JT(){var a=this;E.call(a);a.gU=null;a.cc=null;a.rE=null;a.ez=null;a.qh=null;a.t0=null;a.sJ=0.0;a.i2=Cs;a.iB=Cs;a.pZ=0.0;a.ip=0.0;a.mO=0;}
var A2x=0;var A2y=null;function SN(){SN=T(JT);AHy();}
function AVx(a){var b=new JT();AAN(b,a);return b;}
function AAN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;SN();a.sJ=0.0;a.i2=TG();a.iB=Bc(-1);a.pZ=0.0;a.ip=0.0;a.rE=b;c=GL(AJ7());d=C(b);b=d.sI;a.cc=c.getElementById($rt_ustr(b));e=AJS();b=!!d.rb;e.alpha=b;b=!!d.oE;e.antialias=b;b=!!d.pp;e.stencil=b;b=!!d.p9;e.premultipliedAlpha=b;b=!!d.ql;e.preserveDrawingBuffer=b;f=a.cc;if(d.mP)a.gU=f.getContext("webgl2",e);a:{if(d.mP){b=a.gU;if(b!==null){if(!d.mv)g=AV9(b);else{g=new NY;VJ(g,b);}a.qh=g;a.ez=g;break a;}}g=f.getContext("webgl",e);a.gU=g;if(!d.mv)b=AV0(g);else{b=new UG;R1(b,
g);}a.ez=b;}h=C(a.ez).fI(7938);i=C(a.ez).fI(7936);j=C(a.ez).fI(7937);b=new PO;MT();g=A1d;b.sO=D(144);if(g===A1c){FA();b.dt=A2z;}else if(g===A1e){FA();b.dt=A2z;}else if(g===A2A){FA();b.dt=A2B;}else if(g===A2C){FA();b.dt=A2B;}else if(g!==g){FA();b.dt=A2D;}else{FA();b.dt=A2E;}g=b.dt;FA();if(g===A2z)Kz(b,D(145),h);else if(g===A2E)Kz(b,D(146),h);else if(g===A2B)Kz(b,D(147),h);else{b.mV=(-1);b.lG=(-1);b.l4=(-1);i=D(1);j=D(1);}b.s_=i;b.vA=j;a.t0=b;k=d.jC;if(!(k<0&&d.fg<0)){if(k&&d.fg?1:0)Jw(a,k,d.fg);else{l=C(Hr());k
=PE(l)-d.j8|0;m=Or(l)-d.mX|0;n=!d.h0?1.0:L4(a);Jw(a,n*k|0,n*m|0);}}b=a.cc;g=new SF;g.tf=a;We(b,BR(g,"fullscreenChanged"));}
function SM(a){return a.ez;}
function WC(a){return a.qh;}
function Jf(a){return a.cc.width;}
function Jp(a){return a.cc.height;}
function Jw(a,b,c){var d,e,f,g,h,i;d=a.cc;e=b;d.width=e;d=a.cc;e=c;d.height=e;if(C(a.rE).h0){f=L4(a);e=a.cc.style;g=b/f;AIB();h=C(A2F);i=new N;Q(i);L(C(Pl(i,g)),D(148));h=O(i);e.setProperty("width",$rt_ustr(h));f=c/f;d=C(A2F);d=new N;Q(d);L(C(Pl(d,f)),D(148));d=O(d);e.setProperty("height",$rt_ustr(d));}}
function LU(a,b){return a.gU.getExtension($rt_ustr(b))===null?0:1;}
function L4(a){return $rt_globals.devicePixelRatio||1;}
function AHy(){A2x=0;A2y=Dn();}
function We(b,c){if(b.requestFullscreen){$rt_globals.document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){$rt_globals.document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){$rt_globals.document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){$rt_globals.document.addEventListener("msfullscreenchange",c,false);}}
function M6(){var a=this;E.call(a);a.lE=null;a.fO=null;a.hX=null;a.f7=null;a.gd=null;a.oZ=null;a.hb=null;a.k3=0;a.oO=null;}
function KH(a){var b,c;b=a.oO;c=new N;Q(c);L(C(L(c,b)),D(149));return O(c);}
function ACe(a,b,c){var d,e,f;d=A2h;e=KH(a);f=new N;Q(f);L(C(L(f,e)),c);f=O(f);e=new P5;e.d8=a;e.oa=c;e.n5=b;HU(C(d),1,f,e);}
function Na(a,b,c,d){var e,f;a:{AV7();e=A2G;f=C(b).r;e=C(e).data;switch(e[B(f,e)]){case 1:break;case 2:Bt(C(a.fO),c,W(d,Fy));break a;case 3:Bt(C(a.gd),c,W(d,Fy));break a;case 4:Bt(C(a.hX),c,W(d,Fy));break a;case 5:Bt(C(a.lE),c,null);break a;default:break a;}Bt(C(a.f7),c,W(d,BB));}}
var CS=F();
function A2H(){var a=new CS();ABC(a);return a;}
function ABC(a){}
function ANF(a,b){}
var Sf=F(0);
var D0=F(0);
function ABd(){var a=this;E.call(a);a.J=null;a.e$=0;a.c3=null;a.cu=null;a.U=null;a.T=null;a.he=null;a.hf=null;a.h_=null;a.fx=0;a.jt=null;a.h7=0;a.lb=null;a.mE=null;a.pA=null;a.bz=null;a.dj=Cs;a.eF=0;}
function AT9(a){var b=new ABd();APl(b,a);return b;}
function ATa(b){var c,d,e,f;c=A2g;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(IS(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
function APl(a,b){a.e$=0;a.c3=AWk(20,0.800000011920929);a.cu=Vv(20);a.U=Bk(20);a.T=Bk(20);a.he=Bk(20);a.hf=Bk(20);a.h_=ARH();a.fx=0;a.jt=Vv(256);a.h7=0;a.lb=Vv(256);a.mE=Vv(5);a.pA=ARH();a.eF=1;a.J=b;AA9(a);}
function AA9(a){var b;b=a.J.ownerDocument;b.addEventListener("mousedown",BR(a,"handleEvent"),!!0);b.addEventListener("mouseup",BR(a,"handleEvent"),!!0);b.addEventListener("mousemove",BR(a,"handleEvent"),!!0);b.addEventListener("wheel",BR(a,"handleEvent"),!!0);b.addEventListener("keydown",BR(a,"handleEvent"),!!0);b.addEventListener("keyup",BR(a,"handleEvent"),!!0);b.addEventListener("keypress",BR(a,"handleEvent"),!!0);a.J.addEventListener("touchstart",BR(a,"handleEvent"),!!1);a.J.addEventListener("touchmove",
BR(a,"handleEvent"),!!1);a.J.addEventListener("touchcancel",BR(a,"handleEvent"),!!1);a.J.addEventListener("touchend",BR(a,"handleEvent"),!!1);}
function ABo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a:{c=C($rt_str(b.type));if(Bn(c,D(150))){$rt_globals.window.focus();d=b.target;e=a.J;if(d!==e?0:1){f=C(a.cu).data;if(!f[AWr(0,f)]){a.eF=1;a.e$=1;f[AWr(0,f)]=1;g=L1(b.button);XH(C(a.h_),g);f=C(a.mE).data;f[B(g,f)]=1;f=C(a.he).data;f[AWr(0,f)]=0;f=C(a.hf).data;f[AWr(0,f)]=0;if(!Lx(a)){h=GW(a,b,a.J);i=Hp(a,b,a.J);f=C(a.U).data;f[AWr(0,f)]=h;f=C(a.T).data;f[AWr(0,f)]=i;}else{f=C(a.U).data;j=AWr(0,f);f[j]=f[j]+b.movementX|0;f=C(a.T).data;j=AWr(0,f);f[j]
=f[j]+b.movementY|0;}a.dj=EW();k=a.bz;if(k!==null){f=C(a.U).data;l=f[AWr(0,f)];f=C(a.T).data;k.td(l,f[AWr(0,f)],0,L1(b.button));}b.preventDefault();b.stopPropagation();break a;}}m=GW(a,b,e);n=Hp(a,b,a.J);if(!(m>=0.0&&m<=Jf(C(A03))&&n>=0.0&&n<=Jp(C(A03))))a.eF=0;return;}if(Bn(c,D(151))){f=C(a.cu).data;if(!f[AWr(0,f)])return;AEt(C(a.h_),L1(b.button));f=a.cu;j=C(a.h_).b$<=0?0:1;f=C(f).data;f[AWr(0,f)]=j;if(!Lx(a)){j=GW(a,b,a.J);f=C(a.U).data;j=j-f[AWr(0,f)]|0;h=Hp(a,b,a.J);f=C(a.T).data;E5(a,0,j,h-f[AWr(0,f)]|
0);f=a.U;j=GW(a,b,a.J);f=C(f).data;f[AWr(0,f)]=j;f=a.T;j=Hp(a,b,a.J);f=C(f).data;f[AWr(0,f)]=j;}else{E5(a,0,b.movementX|0,b.movementY|0);f=C(a.U).data;j=AWr(0,f);f[j]=f[j]+b.movementX|0;f=C(a.T).data;j=AWr(0,f);f[j]=f[j]+b.movementY|0;}a.dj=EW();f=C(a.cu).data;f[AWr(0,f)]=0;k=a.bz;if(k!==null){f=C(a.U).data;l=f[AWr(0,f)];f=C(a.T).data;k.o_(l,f[AWr(0,f)],0,L1(b.button));}}else if(!Bn(c,D(152))){if(Bn(c,D(153))){if(a.bz!==null){o=ATa(b);C(a.bz).AC(0.0,o|0);}a.dj=EW();}else if(Bn(c,D(154))){a.e$=1;p=b.changedTouches;l
=0;q=p.length;while(l<q){k=p.item(l);j=k.identifier;e=a.c3;h=AEl(a);D8(C(e),j,Ep(h));f=C(a.cu).data;j=B(h,f);f[j]=1;f=a.U;h=GJ(a,k,a.J);f=C(f).data;j=AWr(j,f);f[j]=h;f=a.T;i=Hl(a,k,a.J);f=C(f).data;h=AWr(j,f);f[h]=i;f=C(a.he).data;h=AWr(h,f);f[h]=0;f=C(a.hf).data;h=AWr(h,f);f[h]=0;k=a.bz;if(k!==null){f=C(a.U).data;h=AWr(h,f);j=f[h];f=C(a.T).data;r=AWr(h,f);k.td(j,f[r],r,0);}l=l+1|0;}a.dj=EW();b.preventDefault();}}else{if(!Lx(a)){h=GW(a,b,a.J);i=Hp(a,b,a.J);f=C(a.U).data;q=h-f[AWr(0,f)]|0;f=C(a.T).data;E5(a,
0,q,i-f[AWr(0,f)]|0);f=C(a.U).data;f[AWr(0,f)]=h;f=C(a.T).data;f[AWr(0,f)]=i;}else{E5(a,0,b.movementX|0,b.movementY|0);f=C(a.U).data;j=AWr(0,f);f[j]=f[j]+b.movementX|0;f=C(a.T).data;j=AWr(0,f);f[j]=f[j]+b.movementY|0;}a.dj=EW();k=a.bz;if(k!==null){f=C(a.cu).data;if(!f[AWr(0,f)]){f=C(a.U).data;l=f[AWr(0,f)];f=C(a.T).data;k.Be(l,f[AWr(0,f)]);}else{f=C(a.U).data;l=f[AWr(0,f)];f=C(a.T).data;k.yO(l,f[AWr(0,f)],0);}}}}if(Bn(c,D(155))){p=b.changedTouches;l=0;q=p.length;while(l<q){s=p.item(l);j=s.identifier;t=JM(C(W(BQ(C(a.c3),
j),D6)));j=GJ(a,s,a.J);f=C(a.U).data;t=B(t,f);j=j-f[t]|0;h=Hl(a,s,a.J);f=C(a.T).data;t=AWr(t,f);E5(a,t,j,h-f[t]|0);f=a.U;j=GJ(a,s,a.J);f=C(f).data;t=AWr(t,f);f[t]=j;f=a.T;j=Hl(a,s,a.J);f=C(f).data;t=AWr(t,f);f[t]=j;k=a.bz;if(k!==null){f=C(a.U).data;t=AWr(t,f);j=f[t];f=C(a.T).data;t=AWr(t,f);k.yO(j,f[t],t);}l=l+1|0;}a.dj=EW();b.preventDefault();}if(Bn(c,D(156))){p=b.changedTouches;l=0;u=p.length;while(l<u){s=p.item(l);j=s.identifier;t=JM(C(W(BQ(C(a.c3),j),D6)));Ek(C(a.c3),j);f=C(a.cu).data;t=B(t,f);f[t]=0;h=
GJ(a,s,a.J);i=Hl(a,s,a.J);f=C(a.U).data;t=AWr(t,f);j=h-f[t]|0;f=C(a.T).data;t=AWr(t,f);E5(a,t,j,i-f[t]|0);f=C(a.U).data;t=AWr(t,f);f[t]=h;v=C(a.T).data;t=AWr(t,v);v[t]=i;k=a.bz;if(k!==null){t=AWr(t,f);j=f[t];t=AWr(t,v);k.o_(j,v[t],t,0);}l=l+1|0;}a.dj=EW();b.preventDefault();}if(Bn(c,D(157))){p=b.changedTouches;l=0;u=p.length;while(l<u){s=p.item(l);j=s.identifier;t=JM(C(W(BQ(C(a.c3),j),D6)));Ek(C(a.c3),j);f=C(a.cu).data;t=B(t,f);f[t]=0;h=GJ(a,s,a.J);i=Hl(a,s,a.J);f=C(a.U).data;t=AWr(t,f);j=h-f[t]|0;f=C(a.T).data;t
=AWr(t,f);E5(a,t,j,i-f[t]|0);f=C(a.U).data;t=AWr(t,f);f[t]=h;v=C(a.T).data;t=AWr(t,v);v[t]=i;k=a.bz;if(k!==null){t=AWr(t,f);j=f[t];t=AWr(t,v);k.o_(j,v[t],t,0);}l=l+1|0;}a.dj=EW();b.preventDefault();}}
function V5(a,b){var c,d,e,f,g,h,i;c=C($rt_str(b.type));if(!(Bn(c,D(158))&&a.eF)){if(Bn(c,D(159))&&a.eF){d=b.charCode&65535;e=a.bz;if(e!==null)e.sT(d);if(d==9){b.preventDefault();b.stopPropagation();}}else if(Bn(c,D(160))&&a.eF){f=AAy(b.keyCode);if(Tz(a,f))b.preventDefault();g=C(a.jt).data;h=B(f,g);if(g[h]){a.fx=a.fx-1|0;h=AWr(h,g);g[h]=0;}e=a.bz;if(e!==null)e.An(h);if(h==61){b.preventDefault();b.stopPropagation();}}}else{a:{f=AAy(b.keyCode);i=0;switch(f){case 67:i=8;break a;case 112:i=127;break a;default:}}if
(Tz(a,f))b.preventDefault();if(f!=67&&f!=112){g=C(a.jt).data;f=B(f,g);if(!g[f]){a.fx=a.fx+1|0;f=AWr(f,g);g[f]=1;a.h7=1;g=C(a.lb).data;f=AWr(f,g);g[f]=1;e=a.bz;if(e!==null)e.tt(f);}}else{b.preventDefault();e=a.bz;if(e!==null){e.tt(f);C(a.bz).sT(i);}}if(f==61){b.preventDefault();b.stopPropagation();}}}
function AEl(a){var b,c,d,e,f,g,h,i;b=0;while(true){if(b>=20)return (-1);a:{b:{c=a.c3;d=Ep(b);c=C(c);e=c.cG;if(d!==null){if(c.d3&&Ve(d,c.dY)){f=1;break a;}e=C(e).data;f=e.length-1|0;while(true){if(f<0)break b;g=B(f,e);if(Ve(d,e[g]))break;f=g+(-1)|0;}f=1;break a;}if(c.d3&&c.dY===null){f=1;break a;}h=c.db;e=C(e).data;f=e.length-1|0;while(true){if(f<0)break b;h=C(h);i=h.data;g=B(f,i);if(i[g]){g=AWr(g,e);if(e[g]===null)break;}f=g+(-1)|0;}f=1;break a;}f=0;}if(!f)break;b=b+1|0;}return b;}
function QJ(a){var b,c,d,e;a:{if(a.e$){a.e$=0;b=0;while(true){c=C(a.mE).data;if(b>=c.length)break a;d=B(b,c);c[d]=0;b=d+1|0;}}}b:{if(a.h7){a.h7=0;e=0;while(true){c=C(a.lb).data;if(e>=c.length)break b;e=B(e,c);c[e]=0;e=e+1|0;}}}}
function E5(a,b,c,d){var e;e=C(a.he).data;b=B(b,e);e[b]=c;e=C(a.hf).data;e[AWr(b,e)]=d;}
function PC(a,b){if(Bn(C($rt_str(b.compatMode)),D(161)))b=b.documentElement;return b;}
function J_(a,b){return b.scrollTop|0;}
function SQ(a,b){return J_(a,PC(a,b));}
function JG(a,b){return b.scrollLeft|0;}
function Qf(a,b){return JG(a,PC(a,b));}
function GW(a,b,c){return Eh(c.width*1.0/OQ(a,c)*(((b.clientX-Sp(a,c)|0)+JG(a,c)|0)+Qf(a,c.ownerDocument)|0));}
function Hp(a,b,c){return Eh(c.height*1.0/Ue(a,c)*(((b.clientY-Vl(a,c)|0)+J_(a,c)|0)+SQ(a,c.ownerDocument)|0));}
function GJ(a,b,c){return Eh(c.width*1.0/OQ(a,c)*(((b.clientX-Sp(a,c)|0)+JG(a,c)|0)+Qf(a,c.ownerDocument)|0));}
function Hl(a,b,c){return Eh(c.height*1.0/Ue(a,c)*(((b.clientY-Vl(a,c)|0)+J_(a,c)|0)+SQ(a,c.ownerDocument)|0));}
function OQ(a,b){return b.clientWidth;}
function Ue(a,b){return b.clientHeight;}
function Vl(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c|0;}
function Sp(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c|0;}
function Tz(a,b){var c;c=C(a.pA);return !b?c.f3:Ko(c,b)<0?0:1;}
function Yg(a,b){a.bz=b;}
function Lx(a){return ARv(a.J)?1:0;}
function ARv(b){if($rt_globals.document.pointerLockElement===$rt_globals.canvas||$rt_globals.document.mozPointerLockElement===$rt_globals.canvas){return true;}return false;}
function AGV(a,b){ABo(a,b);V5(a,b);}
var Rr=F(0);
function AC7(){E.call(this);this.ix=null;}
function AUe(a){var b=new AC7();AP9(b,a);return b;}
function AP9(a,b){a.ix=b;}
function Va(a,b){var c,d;c=new I$;d=a.ix;Ls();Ky(c,d,b,A2I);return c;}
function MI(a,b){var c,d;c=new I$;d=a.ix;Ls();Ky(c,d,b,A2J);return c;}
function ACk(){E.call(this);this.vF=null;}
function AUJ(){var a=new ACk();AMT(a);return a;}
function AMT(a){a.vF=AT_(16);}
var SE=F(0);
var Ze=F();
function AT1(){var a=new Ze();ALT(a);return a;}
function ALT(a){}
var OD=F(0);
function ACf(){var a=this;E.call(a);a.vJ=0;a.hF=0;a.tY=null;a.lo=null;}
function AVf(){var a=new ACf();AJY(a);return a;}
function AJY(a){var b;a.vJ=0;a.hF=1;b=new RC;b.hg=a;a.tY=b;a.lo=D(1);}
function ADj(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var DN=F();
var A1b=null;var A03=null;var A2l=null;var A2j=null;var A0p=null;var A2k=null;var A02=null;var A04=null;var A1f=null;var Ty=F(0);
var SO=F(0);
function Yy(){E.call(this);this.q7=null;}
function AWg(){var a=new Yy();AHI(a);return a;}
function AHI(a){var b,c,d,e,$$je;a.q7=null;b=new Mn;c=AIk();b.eH=c;d=AOy(c);b.mm=d;c=new Rh;e=b.eH;TR(c);c.t3=e;c.uo=d;b.x0=c;c=C(C(A1b).gE);EM(c);a:{try{CJ(c,b);Cu(c);break a;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(c);J(b);}if(!(b.eH.state!=='running'?1:0))N4(b);else{c=new Nx;c.q0=b;AIA(b.eH,BR(c,"unlockFunction"));}a.q7=b;}
function V6(){E.call(this);this.e2=null;}
function AVN(a){var b=new V6();AIH(b,a);return b;}
function AIH(a,b){a.e2=b;}
function API(a,b){var c,$$je;if(!Bn(D(162),$rt_str((GL(C(C(a.e2).c_))).visibilityState))){c=C(C(a.e2).gE);EM(c);a:{try{b=QK(c);while(true){b=C(b);if(!QW(b))break;ABs(C(Dm(O0(b),Jh)));}Cu(c);break a;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(c);J(b);}QP(C(C(a.e2).eg));}else{c=C(C(a.e2).gE);EM(c);b:{try{b=QK(c);while(true){b=C(b);if(!QW(b))break;ADr(C(Dm(O0(b),Jh)));}Cu(c);break b;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(c);J(b);}RJ(C(C(a.e2).eg));}}
function V7(){E.call(this);this.fv=null;}
function AUd(a){var b=new V7();AHv(b,a);return b;}
function AHv(a,b){a.fv=b;}
function ASI(a,b){var c,d,e,f,g;c=PE(C(C(a.fv).c_));d=C(a.fv);c=c-C(d.bY).j8|0;e=Or(C(d.c_));d=C(a.fv);f=C(d.bY);e=e-f.mX|0;if(c>0&&e>0){b=d.cj;if(b!==null){if(f.h0){g=L4(b);c=c*g|0;e=e*g|0;}Jw(C(C(a.fv).cj),c,e);}}}
var AD8=F();
var ME=F(Bu);
var AAq=F();
function AJS(){return {};}
var Lf=F(0);
function HN(){var a=this;E.call(a);a.j=null;a.ka=0;a.i_=0;a.ja=0;a.t5=0;a.ul=0;a.kb=0;a.lk=0;a.bE=null;a.cO=null;a.gI=null;a.wI=null;a.uB=null;a.gT=null;a.fL=null;a.jz=0;a.gj=null;a.fC=null;a.fe=null;a.gy=null;a.tk=null;}
function AV0(a){var b=new HN();R1(b,a);return b;}
function R1(a,b){a.ka=1;a.i_=1;a.ja=1;a.t5=1;a.ul=1;a.kb=1;a.lk=1;a.bE=Dn();a.cO=Dn();a.gI=Dn();a.wI=Dn();a.uB=Dn();a.gT=Dn();a.fL=Dn();a.jz=0;a.gj=new $rt_globals.Float32Array(40000);a.fC=new $rt_globals.Int32Array(12000);a.fe=new $rt_globals.Int16Array(12000);a.gy=new $rt_globals.Int8Array(12000);a.tk=new $rt_globals.Uint8Array(240000);a.j=b;b.pixelStorei(37441,0);}
function Mv(a,b){var c,d,e,f,g,h;if(A2i){c=(HV(b)).buffer;b=C(b);return AAL(c,b.f,Bl(b));}d=C(b);if(Bl(d)>a.gj.length)a.gj=new $rt_globals.Float32Array(Bl(d));e=C(b);f=e.f;g=0;while(f<e.k){b=a.gj;h=QU(e,f);g;b[g]=h;f=f+1|0;g=g+1|0;}b=a.gj;f=Bl(e);return b.subarray(0,f);}
function Rj(a,b){var c,d,e,f,g,h;if(A2i){c=(HV(b)).buffer;b=C(b);d=b.f;e=Bl(b);return new $rt_globals.Int16Array(c,d,e);}f=C(b);if(Bl(f)>a.fe.length)a.fe=new $rt_globals.Int16Array(Bl(f));g=C(b);d=g.f;e=0;while(d<g.k){b=a.fe;h=ACM(g,d);e;b[e]=h;d=d+1|0;e=e+1|0;}b=a.fe;d=Bl(g);return b.subarray(0,d);}
function UH(a,b){var c,d,e,f,g;if(A2i){c=(HV(b)).buffer;b=C(b);d=b.f;e=Bl(b);return new $rt_globals.Int32Array(c,d,e);}AEH(a,b);f=C(b);d=f.f;e=0;while(d<f.k){b=a.fC;g=f.it(d);e;b[e]=g;d=d+1|0;e=e+1|0;}b=a.fC;d=Bl(f);return b.subarray(0,d);}
function Lp(a,b){var c,d,e,f,g,h,i;if(A2i)return HV(b);c=C(b);if(Bl(c)>a.gy.length)a.gy=new $rt_globals.Int8Array(Bl(c));d=c.f;e=0;a:{while(true){f=c.k;g=Cz(d,f);if(g>=0)break;b=a.gy;if(d<0)break a;if(g>=0)break a;h=c.N;g=c.bD+d|0;h=C(h).data;g=h[B(g,h)];e;b[e]=g;d=d+1|0;e=e+1|0;}b=a.gy;d=Bl(c);return b.subarray(0,d);}b=new Bg;i=new N;Q(i);Be(C(V(C(L(C(V(C(L(i,D(163))),d)),D(164))),f)),41);S(b,O(i));J(b);}
function AEH(a,b){var c;c=C(b);if(Bl(c)>a.fC.length)a.fC=new $rt_globals.Int32Array(Bl(c));}
function MP(a,b){return BM(BQ(C(W(BQ(C(a.fL),a.jz),LL)),b));}
function Qj(a,b,c){var d,e;d=BM(BQ(C(a.bE),b));e=BM(BQ(C(a.cO),c));a.j.attachShader(d,e);}
function U3(a,b,c){var d,e;d=a.j;e=BM(BQ(C(a.gI),c));d.bindBuffer(b,e);}
function OI(a,b,c){var d,e;d=a.j;e=BM(BQ(C(a.gT),c));d.bindTexture(b,e);}
function P9(a,b,c,d,e){a.j.blendFuncSeparate(b,c,d,e);}
function PU(a,b,c,d,e){var f,g;if(d instanceof Dc){f=a.j;d=Mv(a,W(d,Dc));f.bufferData(b,d,e);}else if(d instanceof EY){f=a.j;d=UH(a,W(d,EY));f.bufferData(b,d,e);}else if(d instanceof E0){f=a.j;g=Rj(a,W(d,E0));f.bufferData(b,g,e);}else if(d instanceof D3){f=a.j;d=Lp(a,W(d,D3));f.bufferData(b,d,e);}else{if(d!==null){f=new BU;S(f,D(165));J(f);}a.j.bufferData(b,c,e);}}
function PT(a,b,c,d,e){var f,g;if(e instanceof Dc){f=a.j;e=Mv(a,W(e,Dc));f.bufferSubData(b,c,e);}else if(e instanceof EY){f=a.j;e=UH(a,W(e,EY));f.bufferSubData(b,c,e);}else if(e instanceof E0){f=a.j;g=Rj(a,W(e,E0));f.bufferSubData(b,c,g);}else{if(!(e instanceof D3)){f=new BU;S(f,D(165));J(f);}f=a.j;e=Lp(a,e);f.bufferSubData(b,c,e);}}
function TY(a,b){a.j.clear(b);}
function ON(a,b,c,d,e){a.j.clearColor(b,c,d,e);}
function QH(a,b){var c;c=BM(BQ(C(a.cO),b));a.j.compileShader(c);}
function Vk(a){var b,c,d;b=a.j.createProgram();c=a.ka;a.ka=c+1|0;d=a.bE;b=Ez(b);D8(C(d),c,b);return c;}
function SH(a,b){var c,d,e;c=a.j.createShader(b);d=a.i_;a.i_=d+1|0;e=a.cO;c=Ez(c);D8(C(e),d,c);return d;}
function Ho(a,b){var c;c=BM(Ek(C(a.gI),b));a.j.deleteBuffer(c);}
function S2(a,b){var c;c=BM(BQ(C(a.bE),b));Ek(C(a.bE),b);Ek(C(a.fL),b);a.j.deleteProgram(c);}
function R7(a,b){var c;c=BM(Ek(C(a.cO),b));a.j.deleteShader(c);}
function AEW(a,b){var c;c=BM(Ek(C(a.gT),b));a.j.deleteTexture(c);}
function T1(a,b){a.j.depthMask(!!b);}
function SB(a,b){a.j.disable(b);}
function RZ(a,b){a.j.disableVertexAttribArray(b);}
function O9(a,b,c,d){a.j.drawArrays(b,c,d);}
function QX(a,b,c,d,e){var f,g;f=a.j;g=C(e).f;f.drawElements(b,c,d,g);}
function RL(a,b,c,d,e){a.j.drawElements(b,c,d,e);}
function UN(a,b){a.j.enable(b);}
function Uk(a,b){a.j.enableVertexAttribArray(b);}
function FM(a){var b,c,d;b=a.j.createBuffer();c=a.ja;a.ja=c+1|0;d=a.gI;b=Ez(b);D8(C(d),c,b);return c;}
function MM(a,b){a.j.generateMipmap(b);}
function AEZ(a){var b,c,d;b=a.j.createTexture();c=a.kb;a.kb=c+1|0;d=a.gT;b=Ez(b);D8(C(d),c,b);return c;}
function NG(a,b,c,d,e){var f,g;f=a.j;g=BM(BQ(C(a.bE),b));f=f.getActiveAttrib(g,c);b=f.size;g=C(d);DM(g,b);b=f.type;e=C(e);DM(e,b);BN(g);BN(e);return $rt_str(f.name);}
function Q3(a,b,c,d,e){var f,g;f=a.j;g=BM(BQ(C(a.bE),b));f=f.getActiveUniform(g,c);b=f.size;g=C(d);DM(g,b);b=f.type;e=C(e);DM(e,b);BN(g);BN(e);return $rt_str(f.name);}
function PK(a,b,c){var d;d=BM(BQ(C(a.bE),b));return a.j.getAttribLocation(d,$rt_ustr(c));}
function RR(a,b,c){var d;if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new BU;S(c,D(166));J(c);}d=a.j.getParameter(b);c=C(c);Vi(c,0,d);BN(c);}
function Vd(a,b){var c,d;c=a.j;d=BM(BQ(C(a.bE),b));return $rt_str(c.getProgramInfoLog(d));}
function RY(a,b,c,d){var e,f,g,h;if(c!=35712&&c!=35714&&c!=35715){e=a.j;f=BM(BQ(C(a.bE),b));b=e.getProgramParameter(f,c);d=C(d);DM(d,b);}else{g=a.j;h=BM(BQ(C(a.bE),b));b=!(g.getProgramParameter(h,c)?1:0)?0:1;d=C(d);DM(d,b);}BN(d);}
function Q_(a,b){var c,d;c=a.j;d=BM(BQ(C(a.cO),b));return $rt_str(c.getShaderInfoLog(d));}
function O5(a,b,c,d){var e,f,g;if(c!=35713&&c!=35712){e=a.j;f=BM(BQ(C(a.cO),b));g=e.getShaderParameter(f,c);d=C(d);DM(d,g);}else{e=a.j;f=BM(BQ(C(a.cO),b));b=!(e.getShaderParameter(f,c)?1:0)?0:1;d=C(d);DM(d,b);}BN(d);}
function P1(a,b){return $rt_str(a.j.getParameter(b));}
function PY(a,b,c){var d,e,f;d=a.j;e=BM(BQ(C(a.bE),b));d=d.getUniformLocation(e,$rt_ustr(c));if(d===null)return (-1);c=W(BQ(C(a.fL),b),LL);if(c===null){c=Dn();D8(C(a.fL),b,c);}f=a.lk;a.lk=f+1|0;D8(c,f,Ez(d));return f;}
function NW(a,b){var c,d;c=a.j;d=BM(BQ(C(a.bE),b));c.linkProgram(d);}
function O8(a,b,c){a.j.pixelStorei(b,c);}
function ML(a,b,c){var d,e;d=a.j;e=BM(BQ(C(a.cO),b));d.shaderSource(e,$rt_ustr(c));}
function Sj(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t;if(j===null){j=a.j;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else{l=j.k;if(l>4){if(!A2i)m=!(j instanceof Dc)?$rt_globals.Uint8Array.from(Lp(a,j)):Mv(a,W(j,Dc));else{n=HV(j);if(j instanceof Dc){o=Bl(j);l=n.byteOffset+j.f|0;m=AAL(n.buffer,l,o);}else{o=Bl(j);l=n.byteOffset+j.f|0;m=new $rt_globals.Uint8Array(n.buffer,l,o);}}a.j.texImage2D(b,c,d,e,f,g,h,i,m);}else{if(3>=l){j=new Bg;b=l-3|0;k=new N;Q(k);Be(C(V(C(L(C(V(C(L(k,D(163))),0)),D(164))),b)),41);S(j,O(k));J(j);}p
=j.N;q=j.bD+0|0;p=C(p).data;o=p[B(q,p)]&255;l=p[B(q+1|0,p)]&255;r=p[B(q+2|0,p)]&255;q=p[B(q+3|0,p)]&255;j=j.b0;FQ();q=j!==A2K?q<<24|r<<16|l<<8|o:o<<24|l<<16|r<<8|q;SN();k=C(W(BQ(C(A2y),q),Ln));s=k.eL;if(s===null&&k.bA!==null?1:0){j=a.j;n=C(k.bA).rV;j.texImage2D(b,c,d,e,f,g,h,i,n);}else if(s===null&&k.ed!==null?1:0){j=a.j;t=k.ed;j.texImage2D(b,c,d,h,i,t);}else if(!(s===null&&k.fm!==null?1:0)){j=a.j;k=Lj(k);j.texImage2D(b,c,d,h,i,k);}else{j=a.j;t=k.fm;j.texImage2D(b,c,d,h,i,t);}}}}
function Ry(a,b,c,d){a.j.texParameterf(b,c,d);}
function So(a,b,c,d){var e,f;e=a.j;f=d;e.texParameterf(b,c,f);}
function SA(a,b,c){var d;d=MP(a,b);a.j.uniform1i(d,c);}
function YC(a,b,c,d,e,f){var g,h,i,j,k,l;g=MP(a,b);h=a.j;i="uniformMatrix4fv";j=!!d;if(e===null)k=null;else{e=e.data;c=e.length;k=new $rt_globals.Array(c);b=0;while(b<c){b=B$(b);l=e[b];b;k[b]=l;b=b+1|0;}}h[i](g,j,k);}
function NZ(a,b){var c,d;a.jz=b;c=a.j;d=BM(BQ(C(a.bE),b));c.useProgram(d);}
function Rk(a,b,c,d,e,f,g){a.j.vertexAttribPointer(b,c,d,!!e,f,g);}
function MZ(a,b,c,d,e){a.j.viewport(b,c,d,e);}
var Rq=F(0);
function Mp(){var a=this;HN.call(a);a.cV=null;a.yN=null;a.xR=0;a.tG=null;a.uc=0;a.vy=null;a.sX=0;a.gb=null;a.lA=0;a.w1=null;}
function AV9(a){var b=new Mp();VJ(b,a);return b;}
function VJ(a,b){R1(a,b);a.yN=Dn();a.xR=1;a.tG=Dn();a.uc=1;a.vy=Dn();a.sX=1;a.gb=Dn();a.lA=1;a.w1=new $rt_globals.Uint32Array(12000);a.cV=b;}
function Y0(a,b){var c,d;c=a.cV;d=BM(BQ(C(a.gb),b));c.bindVertexArray(d);}
function AAc(a,b,c){var d,e,f,g,h;d=C(c);e=d.f;f=0;while(f<b){g=Ui(d);h=BM(BQ(C(a.gb),g));Ek(C(a.gb),g);a.cV.deleteVertexArray(h);f=f+1|0;}BT(d,e);}
function ABm(a,b,c,d,e){a.cV.drawArraysInstanced(b,c,d,e);}
function AFu(a,b,c,d,e,f){a.cV.drawElementsInstanced(b,c,d,e,f);}
function ABG(a,b,c){var d,e,f,g,h;c=C(c);d=c.f;e=0;while(e<b){f=a.cV.createVertexArray();g=a.lA;a.lA=g+1|0;h=a.gb;f=Ez(f);D8(C(h),g,f);DM(c,g);e=e+1|0;}BT(c,d);}
function AAh(a,b,c){var d;if(b!=34045)RR(a,b,c);else{d=a.cV.getParameter(b);c=C(c);Vi(c,0,d);BN(c);}}
var NY=F(Mp);
function Bp(a){var b,c,d,e;b=a.cV.getError();if(!b)return;c=new BU;d=Jl(b);e=new N;Q(e);L(C(L(C(V(C(L(e,D(167))),b)),D(61))),d);S(c,O(e));J(c);}
function AKe(a,b){Y0(a,b);Bp(a);}
function ANj(a,b,c){AAc(a,b,c);Bp(a);}
function AH0(a,b,c,d,e){ABm(a,b,c,d,e);Bp(a);}
function ASy(a,b,c,d,e,f){AFu(a,b,c,d,e,f);Bp(a);}
function AHh(a,b,c){ABG(a,b,c);Bp(a);}
function AHV(a,b,c){OI(a,b,c);Bp(a);}
function ARa(a,b){TY(a,b);Bp(a);}
function ANg(a,b,c,d,e){ON(a,b,c,d,e);Bp(a);}
function AHe(a,b){T1(a,b);Bp(a);}
function ARC(a,b){SB(a,b);Bp(a);}
function AJH(a,b,c,d){O9(a,b,c,d);Bp(a);}
function APj(a,b,c,d,e){QX(a,b,c,d,e);Bp(a);}
function AQh(a,b){UN(a,b);Bp(a);}
function AFR(a,b){return P1(a,b);}
function AGD(a,b,c){O8(a,b,c);Bp(a);}
function AND(a,b,c,d,e,f,g,h,i,j){Sj(a,b,c,d,e,f,g,h,i,j);Bp(a);}
function AJw(a,b,c,d){Ry(a,b,c,d);Bp(a);}
function AKV(a,b,c,d,e){MZ(a,b,c,d,e);Bp(a);}
function AMI(a,b,c){Qj(a,b,c);Bp(a);}
function ASd(a,b,c){U3(a,b,c);Bp(a);}
function AKf(a,b,c,d,e){P9(a,b,c,d,e);Bp(a);}
function ANt(a,b,c,d,e){PU(a,b,c,d,e);Bp(a);}
function AR9(a,b,c,d,e){PT(a,b,c,d,e);Bp(a);}
function AOc(a,b){QH(a,b);Bp(a);}
function AS_(a){var b;b=Vk(a);Bp(a);return b;}
function APw(a,b){var c;c=SH(a,b);Bp(a);return c;}
function AIK(a,b){S2(a,b);Bp(a);}
function AOT(a,b){R7(a,b);Bp(a);}
function AS2(a,b){RZ(a,b);Bp(a);}
function AHA(a,b,c,d,e){RL(a,b,c,d,e);Bp(a);}
function APB(a,b){Uk(a,b);Bp(a);}
function ARd(a,b){MM(a,b);Bp(a);}
function ALJ(a,b,c,d,e){var f;f=NG(a,b,c,d,e);Bp(a);return f;}
function AQ$(a,b,c,d,e){var f;f=Q3(a,b,c,d,e);Bp(a);return f;}
function ANO(a,b,c){var d;d=PK(a,b,c);Bp(a);return d;}
function AKm(a,b,c){AAh(a,b,c);Bp(a);}
function AIO(a,b,c,d){RY(a,b,c,d);Bp(a);}
function AGC(a,b){var c;c=Vd(a,b);Bp(a);return c;}
function AS9(a,b,c,d){O5(a,b,c,d);Bp(a);}
function AG6(a,b){var c;c=Q_(a,b);Bp(a);return c;}
function AGE(a,b,c){var d;d=PY(a,b,c);Bp(a);return d;}
function ASs(a,b){NW(a,b);Bp(a);}
function AGz(a,b,c){ML(a,b,c);Bp(a);}
function AHp(a,b,c,d){So(a,b,c,d);Bp(a);}
function AIc(a,b,c){SA(a,b,c);Bp(a);}
function ATz(a,b){NZ(a,b);Bp(a);}
function AP0(a,b,c,d,e,f,g){Rk(a,b,c,d,e,f,g);Bp(a);}
function PO(){var a=this;E.call(a);a.mV=0;a.lG=0;a.l4=0;a.s_=null;a.vA=null;a.dt=null;a.sO=D(144);}
function Kz(a,b,c){var d,e,f,g;d=C(GH(C(Gx(b)),c));if(!GF(d)){e=A1b;b=new N;Q(b);Bb(b,D(168));Bb(b,c);Sg(C(e),D(144),O(b));a.mV=2;a.lG=0;a.l4=0;}else{f=C(K7(C(G2(d,1)),D(169))).data;a.mV=Kq(a,f[AWr(0,f)],2);g=f.length;a.lG=g<2?0:Kq(a,f[AWr(1,f)],0);a.l4=g<3?0:Kq(a,f[AWr(2,f)],0);}}
function Kq(a,b,c){var d,e,f,g,$$je;a:{try{d=B8(b);}catch($$e){$$je=Bj($$e);if($$je instanceof BK){break a;}else{throw $$e;}}return d;}e=A1b;f=new N;Q(f);Bb(f,D(170));Bb(f,b);Bb(f,D(171));g=O(C(V(f,c)));b=C(e);if(b.lP>=1){b=C(b.js);b=ADo();f=new N;Q(f);L(C(L(C(L(f,D(172))),D(75))),g);D2(C(b),O(f));}return c;}
var D1=F(Bo);
var A1c=null;var A2A=null;var A2L=null;var A2C=null;var A1d=null;var A1e=null;var A2M=null;function MT(){MT=T(D1);AI7();}
function IU(a,b){var c=new D1();WY(c,a,b);return c;}
function WY(a,b,c){MT();B_(a,b,c);}
function AI7(){var b,c,d,e;A1c=IU(D(3),0);A2A=IU(D(173),1);A2L=IU(D(174),2);A2C=IU(D(175),3);A1d=IU(D(176),4);b=IU(D(177),5);A1e=b;c=K(D1,6);d=c.data;e=A1c;d[AWr(0,d)]=e;e=A2A;d[AWr(1,d)]=e;e=A2L;d[AWr(2,d)]=e;e=A2C;d[AWr(3,d)]=e;e=A1d;d[AWr(4,d)]=e;d[AWr(5,d)]=b;A2M=c;}
var SX=F(0);
function SF(){E.call(this);this.tf=null;}
function AJz(a){}
var UG=F(HN);
function Bv(a){var b,c,d,e;b=a.j.getError();if(!b)return;c=new BU;d=Jl(b);e=new N;Q(e);L(C(L(C(V(C(L(e,D(167))),b)),D(61))),d);S(c,O(e));J(c);}
function ASN(a,b,c){OI(a,b,c);Bv(a);}
function AIV(a,b){TY(a,b);Bv(a);}
function AJu(a,b,c,d,e){ON(a,b,c,d,e);Bv(a);}
function ANs(a,b){T1(a,b);Bv(a);}
function ATe(a,b){SB(a,b);Bv(a);}
function ALP(a,b,c,d){O9(a,b,c,d);Bv(a);}
function ASV(a,b,c,d,e){QX(a,b,c,d,e);Bv(a);}
function AHD(a,b){UN(a,b);Bv(a);}
function AMA(a,b){return P1(a,b);}
function AOg(a,b,c){O8(a,b,c);Bv(a);}
function AKo(a,b,c,d,e,f,g,h,i,j){Sj(a,b,c,d,e,f,g,h,i,j);Bv(a);}
function AJR(a,b,c,d){Ry(a,b,c,d);Bv(a);}
function AS6(a,b,c,d,e){MZ(a,b,c,d,e);Bv(a);}
function AGx(a,b,c){Qj(a,b,c);Bv(a);}
function AFQ(a,b,c){U3(a,b,c);Bv(a);}
function AFP(a,b,c,d,e){P9(a,b,c,d,e);Bv(a);}
function AMf(a,b,c,d,e){PU(a,b,c,d,e);Bv(a);}
function AKZ(a,b,c,d,e){PT(a,b,c,d,e);Bv(a);}
function ATl(a,b){QH(a,b);Bv(a);}
function AOD(a){var b;b=Vk(a);Bv(a);return b;}
function ATb(a,b){var c;c=SH(a,b);Bv(a);return c;}
function AR7(a,b){S2(a,b);Bv(a);}
function AF$(a,b){R7(a,b);Bv(a);}
function AOB(a,b){RZ(a,b);Bv(a);}
function AK7(a,b,c,d,e){RL(a,b,c,d,e);Bv(a);}
function ATf(a,b){Uk(a,b);Bv(a);}
function ANU(a,b){MM(a,b);Bv(a);}
function AMi(a,b,c,d,e){var f;f=NG(a,b,c,d,e);Bv(a);return f;}
function AHY(a,b,c,d,e){var f;f=Q3(a,b,c,d,e);Bv(a);return f;}
function ALc(a,b,c){var d;d=PK(a,b,c);Bv(a);return d;}
function AGn(a,b,c){RR(a,b,c);Bv(a);}
function AKs(a,b,c,d){RY(a,b,c,d);Bv(a);}
function AKw(a,b){var c;c=Vd(a,b);Bv(a);return c;}
function AGK(a,b,c,d){O5(a,b,c,d);Bv(a);}
function AP2(a,b){var c;c=Q_(a,b);Bv(a);return c;}
function ARo(a,b,c){var d;d=PY(a,b,c);Bv(a);return d;}
function AM1(a,b){NW(a,b);Bv(a);}
function ASR(a,b,c){ML(a,b,c);Bv(a);}
function ARj(a,b,c,d){So(a,b,c,d);Bv(a);}
function AS$(a,b,c){SA(a,b,c);Bv(a);}
function AGL(a,b){NZ(a,b);Bv(a);}
function AID(a,b,c,d,e,f,g){Rk(a,b,c,d,e,f,g);Bv(a);}
function LL(){var a=this;E.call(a);a.cB=0;a.db=null;a.cG=null;a.dY=null;a.d3=0;a.o1=0.0;a.i7=0;a.kl=0;a.f1=0;}
function Dn(){var a=new LL();AS5(a);return a;}
function AWk(a,b){var c=new LL();YY(c,a,b);return c;}
function AS5(a){YY(a,51,0.800000011920929);}
function YY(a,b,c){var d,e,f;if(c>0.0&&c<1.0){a.o1=c;d=L2(b,c);a.i7=d*c|0;b=d-1|0;a.f1=b;a.kl=EG(Bc(b));a.db=Bk(d);a.cG=K(E,d);return;}e=new Bh;f=new N;Q(f);Bb(f,D(62));S(e,O(C(Ew(f,c))));J(e);}
function KC(a,b){return E1(Ci(BO(Bc(b),G(2135587861, 2654435769)),a.kl));}
function Kf(a,b){var c,d,e,f,g;c=a.db;d=KC(a,b);while(true){c=C(c);e=c.data;f=B(d,e);g=e[f];if(!g)return  -(f+1|0)|0;if(g==b)break;d=(f+1|0)&a.f1;}return f;}
function D8(a,b,c){var d,e,f,g,h,i,j,k,l;if(!b){d=a.dY;a.dY=c;if(!a.d3){a.d3=1;a.cB=a.cB+1|0;}return d;}e=Kf(a,b);if(e>=0){f=C(a.cG).data;e=B(e,f);d=f[e];f[AWr(e,f)]=c;return d;}e= -(e+1|0)|0;f=C(a.db).data;e=B(e,f);f[e]=b;g=C(a.cG).data;g[AWr(e,g)]=c;b=a.cB+1|0;a.cB=b;if(b>=a.i7)a:{b=f.length;e=b<<1;a.i7=e*a.o1|0;h=e-1|0;a.f1=h;a.kl=EG(Bc(h));f=a.db;g=a.cG;a.db=Bk(e);a.cG=K(E,e);if(a.cB>0){e=0;while(true){if(e>=b)break a;f=C(f);i=f.data;j=B(e,i);h=i[j];if(h){g=C(g);i=g.data;j=AWr(j,i);c=i[j];i=a.db;e=KC(a,
h);while(true){i=C(i);k=i.data;l=B(e,k);if(!k[l])break;e=(l+1|0)&a.f1;}k[l]=h;i=C(a.cG).data;i[AWr(l,i)]=c;}e=j+1|0;}}}return null;}
function BQ(a,b){var c,d,e;if(!b)return !a.d3?null:a.dY;c=Kf(a,b);if(c<0)d=null;else{e=C(a.cG).data;d=e[B(c,e)];}return d;}
function Ek(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.d3)return null;a.d3=0;c=a.dY;a.dY=null;a.cB=a.cB-1|0;return c;}d=Kf(a,b);if(d<0)return null;e=a.db;f=C(a.cG).data;g=B(d,f);c=f[g];h=a.f1;i=(g+1|0)&h;while(true){e=C(e);j=e.data;i=B(i,j);d=j[i];if(!d)break;k=KC(a,d);if(((i-k|0)&h)>((g-k|0)&h)){b=B(g,j);j[b]=d;g=AWr(i,f);f[AWr(b,f)]=f[g];}i=(i+1|0)&h;}d=B(g,j);j[d]=0;l=null;f[AWr(d,f)]=l;a.cB=a.cB-1|0;return c;}
function AAw(){var a=this;E.call(a);a.b$=0;a.dK=null;a.f3=0;a.st=0.0;a.jH=0;a.kg=0;a.fB=0;}
function ARH(){var a=new AAw();AJL(a);return a;}
function AJL(a){var b,c;a.st=0.800000011920929;b=L2(51,0.800000011920929);a.jH=b*0.800000011920929|0;c=b-1|0;a.fB=c;a.kg=EG(Bc(c));a.dK=Bk(b);}
function Ma(a,b){return E1(Ci(BO(Bc(b),G(2135587861, 2654435769)),a.kg));}
function Ko(a,b){var c,d,e,f,g;c=a.dK;d=Ma(a,b);while(true){c=C(c);e=c.data;f=B(d,e);g=e[f];if(!g)return  -(f+1|0)|0;if(g==b)break;d=(f+1|0)&a.fB;}return f;}
function XH(a,b){var c,d,e,f,g,h,i;if(!b){if(a.f3)return 0;a.f3=1;a.b$=a.b$+1|0;return 1;}c=Ko(a,b);if(c>=0)return 0;c= -(c+1|0)|0;d=C(a.dK).data;d[B(c,d)]=b;b=a.b$+1|0;a.b$=b;if(b>=a.jH)a:{b=d.length;c=b<<1;a.jH=c*a.st|0;e=c-1|0;a.fB=e;a.kg=EG(Bc(e));d=a.dK;a.dK=Bk(c);if(a.b$>0){c=0;while(true){if(c>=b)break a;d=C(d);f=d.data;g=B(c,f);c=f[g];if(c){f=a.dK;e=Ma(a,c);while(true){f=C(f);h=f.data;i=B(e,h);if(!h[i])break;e=(i+1|0)&a.fB;}h[i]=c;}c=g+1|0;}}}return 1;}
function AEt(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.f3)return 0;a.f3=0;a.b$=a.b$-1|0;return 1;}c=Ko(a,b);if(c<0)return 0;d=a.dK;e=a.fB;f=(c+1|0)&e;while(true){d=C(d);g=d.data;f=B(f,g);h=g[f];if(!h)break;i=Ma(a,h);if(((f-i|0)&e)>((c-i|0)&e)){g[B(c,g)]=h;c=f;}f=(f+1|0)&e;}g[B(c,g)]=0;a.b$=a.b$-1|0;return 1;}
var TK=F(0);
function RC(){E.call(this);this.hg=null;}
function AGu(a){var b;b=C(a.hg);b.hF=1;ADj($rt_ustr(b.lo));}
function AJi(a){var b;b=C(a.hg);b.hF=1;ADj($rt_ustr(b.lo));}
function AGk(a){C(a.hg).hF=0;}
var Jh=F(0);
function Mn(){var a=this;E.call(a);a.eH=null;a.mm=null;a.x0=null;}
var A2N=0;function N4(a){if(!A2N)Sg(C(A1b),D(178),D(179));A2N=1;}
function ADr(a){a.mm.disconnect(a.eH.destination);}
function ABs(a){a.mm.connect(a.eH.destination);}
function AIA(b,c){var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){$rt_globals.document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){$rt_globals.document.addEventListener(eventName,unlock);});}
function AIk(){var AudioContext=$rt_globals.window.AudioContext||$rt_globals.window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
function AOy(b){var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function M8(){CS.call(this);this.s7=null;}
var EE=F(0);
var Pj=F(0);
var QL=F(0);
var QB=F(0);
var R_=F(0);
var UZ=F(0);
var Tb=F(0);
var OF=F(0);
var Kc=F(0);
var Wz=F();
function AOW(a,b){return Ua(a.h2(b));}
function AQ0(a,b,c){a.wN($rt_str(b),CY(c,"handleEvent"));}
function AQy(a,b,c){a.uQ($rt_str(b),CY(c,"handleEvent"));}
function AOO(a,b,c,d){a.tj($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function ASk(a,b){return !!a.wU(b);}
function AIF(a){return a.xD();}
function AGj(a,b,c,d){a.vU($rt_str(b),CY(c,"handleEvent"),d?1:0);}
var KO=F();
function HF(){var a=this;KO.call(a);a.ji=0;a.cX=null;a.p0=0.0;a.nZ=0;a.gx=0;a.fS=0;a.sz=0;}
var A2O=null;var A2P=null;function A2Q(){var a=new HF();KW(a);return a;}
function KW(a){var b,c;a.fS=(-1);a.ji=0;b=K(Id,11);c=b.data;a.cX=b;a.gx=c.length;a.p0=0.75;NQ(a);}
function NQ(a){a.nZ=C(a.cX).data.length*a.p0|0;}
function Ec(a,b,c){var d,e,f,g,h,i,j,k,l,m;EM(a);try{if(b!==null&&c!==null){d=IN(b)&2147483647;e=C(a.cX).data;f=B(d%e.length|0,e);g=e[f];a:{while(g!==null){if(g.qt==IN(b)&&C(g.fr).ca(b)?1:0)break a;g=g.h8;}}if(g!==null){h=g.el;g.el=c;return h;}a.sz=a.sz+1|0;i=a.ji+1|0;a.ji=i;if(i>a.nZ){i=(C(a.cX).data.length<<1)+1|0;if(!i)i=1;j=(-1);k=K(Id,i);f=a.fS+1|0;l=i;while(true){f=f+(-1)|0;if(f<a.gx)break;e=C(a.cX).data;f=B(f,e);g=e[f];while(g!==null){m=(C(g.fr).cE()&2147483647)%i|0;if(m<l)l=m;if(m>j)j=m;h=g.h8;k=C(k);e
=k.data;m=B(m,e);g.h8=e[m];e[m]=g;g=h;}}a.gx=l;a.fS=j;a.cX=k;NQ(a);f=d%C(a.cX).data.length|0;}if(f<a.gx)a.gx=f;if(f>a.fS)a.fS=f;g=new Id;Vs(g,b,c);g.qt=IN(b);e=C(a.cX).data;i=B(f,e);g.h8=e[i];e[AWr(i,e)]=g;return null;}b=new EC;Y(b);J(b);}finally{Cu(a);}}
function AFe(){A2O=new Nn;A2P=new Nm;}
function LN(){HF.call(this);this.xf=null;}
var Zd=F();
function AAL(b,c,d){return new $rt_globals.Float32Array(b,c,d);}
var Fh=F(Bo);
var A2B=null;var A2z=null;var A2E=null;var A2D=null;var A2R=null;function FA(){FA=T(Fh);ANy();}
function Qa(a,b){var c=new Fh();AFC(c,a,b);return c;}
function AFC(a,b,c){FA();B_(a,b,c);}
function ANy(){var b,c,d,e;A2B=Qa(D(180),0);A2z=Qa(D(181),1);A2E=Qa(D(176),2);b=Qa(D(182),3);A2D=b;c=K(Fh,4);d=c.data;e=A2B;d[AWr(0,d)]=e;e=A2z;d[AWr(1,d)]=e;e=A2E;d[AWr(2,d)]=e;d[AWr(3,d)]=b;A2R=c;}
var C1=F();
var X3=F(C1);
var XF=F(C1);
var AAi=F(C1);
var ABE=F(C1);
var Zv=F(C1);
function YI(){E.call(this);this.ww=null;}
function AVt(a){var b=new YI();AH1(b,a);return b;}
function AH1(a,b){a.ww=b;}
function AL4(a,b){b.preventDefault();}
function YJ(){E.call(this);this.yA=null;}
function AUH(a){var b=new YJ();ATp(b,a);return b;}
function ATp(a,b){a.yA=b;}
function ASW(a,b){b.preventDefault();}
function YH(){var a=this;E.call(a);a.nI=null;a.nm=null;a.oo=null;}
function AUM(a,b,c){var d=new YH();ALq(d,a,b,c);return d;}
function ALq(a,b,c,d){a.oo=b;a.nI=c;a.nm=d;}
function APq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=El();f=0;while(true){if(f>=d)break a;g=c[f];h=$rt_str(g.name);b=C(h);i=KS(b,46);b=C(i==(-1)?D(1):DJ(b,i+1|0));if(!FR(b)){i=0;j=0;k=C(b.w).data;l=k.length;m=0;b:{while(m<l){m=B(m,k);n=k[m];if(DU(n)!=n){i=1;break b;}if(HH(n))j=1;m=m+1|0;}}if(i){if(!j){k=BS(C(b.w).data.length);m=0;while(true){o=C(b.w).data;if(m>=o.length)break;p=k.data;i=B(m,o);m=DU(o[i]);i=AWr(i,p);p[i]=m;m=i+1|0;}b=HQ(k);}else
{p=Bk(C(b.w).data.length);n=0;j=0;while(true){k=C(b.w).data;m=k.length;if(j>=m)break;c:{if(j!=(m-1|0)){j=B(j,k);if(Ce(k[j])){k=b.w;m=j+1|0;k=C(k).data;i=B(m,k);if(Cc(k[i])){o=p.data;l=n+1|0;k=C(b.w).data;m=k[AWr(j,k)];j=AWr(i,k);o[B(n,o)]=FW(DV(m,k[j]));break c;}}}k=p.data;l=n+1|0;o=C(b.w).data;j=B(j,o);k[B(n,k)]=DU(o[j]);}j=j+1|0;n=l;}b=ARS(p,0,n);}}}if(!Bn(b,D(183))&&!Bn(b,D(184))&&!Bn(b,D(185))&&!Bn(b,D(186))&&!Bn(b,D(187))?0:1){EV();q=A2S;}else if(!Bn(b,D(188))&&!Bn(b,D(189))&&!Bn(b,D(190))?0:1){EV();q=
A2T;}else if(!ALK(b)){EV();q=A2U;}else{EV();q=A2V;}r=new $rt_globals.FileReader();b=new Sz;b.id=a;b.kn=q;b.mW=h;b.gY=e;b.m4=d;r.addEventListener("load",BR(b,"handleEvent"));EV();if(q!==A2U&&q!==A2T){if(q===A2S)r.readAsDataURL(g);else if(q===A2V)r.readAsText(g);}else r.readAsArrayBuffer(g);f=f+1|0;}}}}
function Rh(){var a=this;Cn.call(a);a.t3=null;a.uo=null;}
var TP=F(0);
function Nx(){E.call(this);this.q0=null;}
function AJ6(a){N4(C(a.q0));}
var Xy=F(C1);
function Qv(){var a=this;E.call(a);a.c=null;a.b6=0;a.jU=null;a.nC=0;a.eB=0;a.da=0;a.R=0;a.lm=null;}
function GH(a,b){var c,d,e,f,g,h,i,j,k;c=new Rt;c.ej=(-1);c.hl=(-1);c.t6=a;c.rD=a.lm;c.c6=b;c.ej=0;d=X(C(b));c.hl=d;e=new Tp;f=c.ej;g=a.eB;h=a.da+1|0;i=a.R+1|0;e.eM=(-1);j=g+1|0;e.on=j;e.cf=Bk(j*2|0);k=Bk(i);e.iJ=k;H0(k,(-1));if(h>0)e.k7=Bk(h);H0(e.cf,(-1));Mm(e,b,f,d);c.bu=e;e.dJ=1;return c;}
function ND(a,b,c){var d,e,f,g,h,i,j,k;d=AB$();e=GH(a,b);f=0;g=0;b=C(b);if(!X(b)){h=K(BB,1);i=h.data;i[AWr(0,i)]=D(1);return h;}while(true){e=C(e);if(!GF(e))break;j=f+1|0;if(j>=c&&c>0)break;Fo(d,C(B7(b,g,U6(e))));g=PQ(e);f=j;}a:{Fo(d,C(B7(b,g,X(b))));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(X(C(W(Df(d,f),BB))))break a;Tw(d,f);}}if(f<0)f=0;b=K(BB,f);k=b.data;g=d.Y;c=k.length;if(c<g)b=IZ(Fb(C(CZ(b))),g);else while(g<c){e=null;g=B$(g);k[g]=e;g=g+1|0;}c=0;d=PS(d);while(true){d=C(d);if(!RU(d))break;f
=c+1|0;e=Uo(d);b=C(b);k=b.data;k[B(c,k)]=e;c=f;}return Dm(b,$rt_arraycls(BB));}
function Ki(a){return C(a.c).bn;}
function Vo(a,b,c,d){var e,f,g,h,i,j,k;e=AB$();f=a.b6;g=0;if(c!=f)a.b6=c;a:{switch(b){case -1073741784:h=new Q0;c=a.R+1|0;a.R=c;FI(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PG;c=a.R+1|0;a.R=c;FI(h,c);break a;case -33554392:h=new Lk;c=a.R+1|0;a.R=c;FI(h,c);break a;default:c=a.eB+1|0;a.eB=c;if(d!==null)h=AVF(c);else{h=new FZ;FI(h,0);g=1;}c=a.eB;if(c<=(-1))break a;if(c>=10)break a;i=C(a.jU).data;i[B(c,i)]=h;break a;}h=new Vf;FI(h,(-1));}while(true){if(Fs(C(a.c))&&C(a.c).g
==(-536870788)){d=AR3(Cd(a,2),Cd(a,64));while(!Do(C(a.c))&&Fs(C(a.c))){j=C(a.c);k=j.g;if(k&&k!=(-536870788)&&k!=(-536870871))break;Cv(d,Bi(j));j=C(a.c);if(j.O!=(-536870788))continue;Bi(j);}j=C(K$(a,d));j.B(h);}else if(C(a.c).O==(-536870788)){j=Hf(h);Bi(C(a.c));}else{j=OZ(a,h);d=C(a.c);if(d.O==(-536870788))Bi(d);}if(j!==null)Fo(e,j);if(Do(C(a.c)))break;if(C(a.c).O==(-536870871))break;}if(C(a.c).kq==(-536870788))Fo(e,Hf(h));if(a.b6!=f&&!g){a.b6=f;d=C(a.c);d.en=f;d.g=d.O;d.c8=d.dS;k=d.cN;d.m=k+1|0;d.fJ=k;Fz(d);}switch
(b){case -1073741784:break;case -536870872:d=new MV;F1(d,e,h);return d;case -268435416:d=new T7;F1(d,e,h);return d;case -134217688:d=new Qz;F1(d,e,h);return d;case -67108824:d=new R9;F1(d,e,h);return d;case -33554392:d=new DY;F1(d,e,h);return d;default:switch(e.Y){case 0:break;case 1:return AVp(W(Df(e,0),Bw),h);default:return AUZ(e,h);}return Hf(h);}d=new Jj;F1(d,e,h);return d;}
function AC8(a){var b,c,d,e,f,g,h;b=new J2;Q(b);while(!Do(C(a.c))&&Fs(C(a.c))&&!Ob(C(a.c))&&!Tq(C(a.c))){if(!(!J4(C(a.c))&&!C(a.c).g)&&!(!J4(C(a.c))&&KI(C(a.c).g))){c=C(a.c).g;if(c!=(-536870871)&&(c&(-2147418113))!=(-2147483608)&&c!=(-536870788)&&c!=(-536870876))break;}d=Bi(C(a.c));if(!Me(d))Be(b,d&65535);else IT(b,FP(d));}if(!Cd(a,2)){e=new QV;DF(e);e.bo=O(b);d=b.t;e.ba=d;e.ki=AOp(d);e.lq=AOp(e.ba);d=0;while(d<(e.ba-1|0)){QD(C(e.ki),R(C(e.bo),d),(e.ba-d|0)-1|0);QD(C(e.lq),R(C(e.bo),(e.ba-d|0)-1|0),(e.ba-d|
0)-1|0);d=d+1|0;}return e;}if(!Cd(a,64)){e=new Nz;DF(e);e.eu=O(b);e.ba=b.t;return e;}e=new MR;DF(e);f=new N;Q(f);d=0;while(true){g=Cz(d,b.t);if(g>=0){e.fV=O(f);e.ba=f.t;return e;}if(d<0)break;if(g>=0)break;h=C(b.q).data;g=B(d,h);Be(f,DU(Dw(h[g])));d=g+1|0;}b=new Bg;Y(b);J(b);}
function ADf(a){var b,c,d,e,f,g,h;b=Bk(4);c=0;d=(-1);e=(-1);if(!Do(C(a.c))&&Fs(C(a.c))){f=b.data;d=Bi(C(a.c));c=AWr(c,f);f[c]=d;e=d-4352|0;}if(e>=0&&e<19){f=BS(3);b=f.data;b[AWr(c,b)]=d&65535;g=C(a.c);e=g.O;c=e-4449|0;if(c>=0&&c<21){b[AWr(1,b)]=e&65535;Bi(g);g=C(a.c);h=g.O;c=h-4519|0;if(c>=0&&c<28){b[AWr(2,b)]=h&65535;Bi(g);return ARM(f,3);}return ARM(f,2);}if(!Cd(a,2))return XQ(b[AWr(0,b)]);if(Cd(a,64))return APV(b[AWr(0,b)]);return AIw(b[AWr(0,b)]);}d=1;while(d<4&&!Do(C(a.c))&&Fs(C(a.c))){f=b.data;c=d+1|0;e
=Bi(C(a.c));f[B(d,f)]=e;d=c;}if(d==1){f=b.data;c=f[AWr(0,f)];if(!(C(A2W).it(c)==A2X?0:1))return Vc(a,f[AWr(0,f)]);}if(!Cd(a,2))return AWl(b,d);if(Cd(a,64)){g=new U5;N6(g,b,d);return g;}g=new Sy;N6(g,b,d);return g;}
function OZ(a,b){var c,d,e,f;if(Fs(C(a.c))&&!J4(C(a.c))&&KI(C(a.c).g)){if(!Cd(a,128))c=!Ob(C(a.c))&&!Tq(C(a.c))?AC8(a):Mj(a,b,U4(a,b));else{c=ADf(a);if(!Do(C(a.c))){d=C(a.c);e=d.O;if(!(e==(-536870871)&&!(b instanceof FZ))&&e!=(-536870788)&&!Fs(d))c=Mj(a,b,c);}}}else{d=C(a.c);if(d.O!=(-536870871))c=Mj(a,b,U4(a,b));else{if(b instanceof FZ)J(B9(D(1),d.bn,d.cN));c=Hf(b);}}a:{if(!Do(C(a.c))){e=C(a.c).O;if(!(e==(-536870871)&&!(b instanceof FZ))&&e!=(-536870788)){f=OZ(a,b);if(c instanceof CO&&!(c instanceof FB)&&!(c instanceof C0)
&&!(c instanceof ES)){b=C(W(c,CO));d=b.y;f=C(f);if(!f.be(d)){c=new Uj;Ff(c,W(b.y,BZ),b.b,b.f_);C(c.y).B(c);}}f=C(f);if((f.gl()&65535)!=43){c=C(c);c.B(f);}else{b=C(W(f,CO)).y;c=C(c);c.B(b);}break a;}}if(c===null)return null;c.B(b);}if((c.gl()&65535)!=43)return c;return C(W(c,DR)).y;}
function Mj(a,b,c){var d,e,f,g,h;d=C(a.c);e=d.O;if(c!==null&&!(c instanceof BZ)){switch(e){case -2147483606:Bi(d);f=new VA;Dl(f,c,b,e);Ms();c.B(A2Y);return f;case -2147483605:Bi(d);f=new Px;Dl(f,c,b,(-2147483606));Ms();c.B(A2Y);return f;case -2147483585:Bi(d);f=new Pf;Dl(f,c,b,(-536870849));Ms();c.B(A2Y);return f;case -2147483525:f=new Nq;d=W(FE(d),Eo);g=a.da+1|0;a.da=g;Jv(f,d,c,b,(-536870849),g);Ms();c.B(A2Y);return f;case -1073741782:case -1073741781:Bi(d);d=new QR;Dl(d,c,b,e);c.B(d);return d;case -1073741761:Bi(d);d
=new Qb;Dl(d,c,b,(-536870849));c.B(b);return d;case -1073741701:h=new Te;f=W(FE(d),Eo);e=a.da+1|0;a.da=e;Jv(h,f,c,b,(-536870849),e);c.B(h);return h;case -536870870:case -536870869:Bi(d);if(c.gl()!=(-2147483602)){d=new C0;Dl(d,c,b,e);}else if(Cd(a,32)){d=new QS;Dl(d,c,b,e);}else{d=new Oi;f=Pi(a.b6);Dl(d,c,b,e);d.kp=f;}c.B(d);return d;case -536870849:Bi(d);d=new Gd;Dl(d,c,b,(-536870849));c.B(b);return d;case -536870789:h=new FG;f=W(FE(d),Eo);e=a.da+1|0;a.da=e;Jv(h,f,c,b,(-536870849),e);c.B(h);return h;default:}return c;}f
=null;if(c!==null)f=W(c,BZ);switch(e){case -2147483606:case -2147483605:Bi(d);d=new VB;Ff(d,f,b,e);C(f).b=d;return d;case -2147483585:Bi(d);c=new Uc;Ff(c,f,b,(-2147483585));return c;case -2147483525:c=new OX;Rf(c,W(FE(d),Eo),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bi(d);d=new P_;Ff(d,f,b,e);C(f).b=d;return d;case -1073741761:Bi(d);c=new SG;Ff(c,f,b,(-1073741761));return c;case -1073741701:c=new QA;Rf(c,W(FE(d),Eo),f,b,(-1073741701));return c;case -536870870:case -536870869:Bi(d);d=AVv(f,
b,e);C(f).b=d;return d;case -536870849:Bi(d);c=new ES;Ff(c,f,b,(-536870849));return c;case -536870789:return AUn(W(FE(d),Eo),f,b,(-536870789));default:}return c;}
function U4(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FZ;while(true){a:{e=IB(C(a.c));if((e&(-2147418113))==(-2147483608)){Bi(C(a.c));f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.b6=f;else{if(e!=(-1073741784))f=a.b6;c=Vo(a,e,f,b);if(IB(C(a.c))!=(-536870871))J(B9(D(1),DI(C(a.c)),Go(C(a.c))));Bi(C(a.c));}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bi(C(a.c));c
=ARw(0);break a;case -2147483577:Bi(C(a.c));c=AUo();break a;case -2147483558:Bi(C(a.c));c=new UM;g=a.R+1|0;a.R=g;ADX(c,g);break a;case -2147483550:Bi(C(a.c));c=ARw(1);break a;case -2147483526:Bi(C(a.c));c=AVW();break a;case -536870876:Bi(C(a.c));a.R=a.R+1|0;if(Cd(a,8)){if(Cd(a,1)){c=AUK(a.R);break a;}c=ATW(a.R);break a;}if(Cd(a,1)){c=AU6(a.R);break a;}c=AVQ(a.R);break a;case -536870866:Bi(C(a.c));if(Cd(a,32)){c=AWa();break a;}c=AVB(Pi(a.b6));break a;case -536870821:Bi(C(a.c));h=0;if(IB(C(a.c))==(-536870818))
{h=1;Bi(C(a.c));}c=ABH(a,h,b);if(IB(C(a.c))!=(-536870819))J(B9(D(1),DI(C(a.c)),Go(C(a.c))));OJ(C(a.c),1);Bi(C(a.c));break a;case -536870818:Bi(C(a.c));a.R=a.R+1|0;if(!Cd(a,8)){c=ARF();break a;}c=AVZ(Pi(a.b6));break a;case 0:i=W(Pn(C(a.c)),Ba);if(i!==null)c=K$(a,i);else{if(Do(C(a.c))){c=Hf(b);break a;}c=XQ(e&65535);}Bi(C(a.c));break a;default:break b;}Bi(C(a.c));c=ARF();break a;}g=(e&2147483647)-48|0;if(a.eB<g)J(B9(D(1),DI(C(a.c)),Go(C(a.c))));Bi(C(a.c));a.R=a.R+1|0;c=!Cd(a,2)?ATZ(g,a.R):Cd(a,64)?AUL(g,a.R):
AWi(g,a.R);j=C(a.jU).data;C(j[B(g,j)]).jS=1;a.nC=1;break a;}if(e>=0&&!Hi(C(a.c))){c=Vc(a,e);Bi(C(a.c));}else if(e==(-536870788))c=Hf(b);else{if(e!=(-536870871))J(B9(!Hi(C(a.c))?Mf(e&65535):C(Pn(C(a.c))).F(),DI(C(a.c)),Go(C(a.c))));if(d)J(B9(D(1),DI(C(a.c)),Go(C(a.c))));c=Hf(b);}}}if(e!=(-16777176))break;}return c;}
function ABH(a,b,c){var d;d=C(K$(a,Gn(a,b)));d.B(c);return d;}
function Gn(a,b){var c,d,e,f,g,h,i,j,$$je;c=AR3(Cd(a,2),Cd(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Do(C(a.c)))break a;h=C(a.c);b=h.O;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0){c=C(c);Cv(c,d);}d=Bi(C(a.c));h=C(a.c);if(h.O!=(-536870874)){d=38;break d;}if(h.g==(-536870821)){Bi(h);e=1;d=(-1);break d;}Bi(h);if(g){c=Gn(a,0);break d;}if(C(a.c).O==(-536870819))break d;h=Gn(a,0);c=C(c);Uw(c,h);break d;case -536870867:if(!g){b=h.g;if(b!=(-536870819)&&b!=(-536870821)
&&d>=0){Bi(h);h=C(a.c);i=h.O;if(Hi(h))break c;if(i<0){b=C(a.c).g;if(b!=(-536870819)&&b!=(-536870821)&&d>=0)break c;}e:{try{if(KI(i))break e;i=i&65535;break e;}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){break b;}else{throw $$e;}}}try{c=C(c);B4(c,d,i);}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){break b;}else{throw $$e;}}Bi(C(a.c));d=(-1);break d;}}if(d>=0){c=C(c);Cv(c,d);}d=45;Bi(C(a.c));break d;case -536870821:if(d>=0){c=C(c);Cv(c,d);d=(-1);}Bi(C(a.c));j=0;h=C(a.c);if(h.O==(-536870818)){Bi(h);j=1;}if
(!e){h=Gn(a,j);c=C(c);VM(c,h);}else{h=Gn(a,j);c=C(c);Uw(c,h);}e=0;Bi(C(a.c));break d;case -536870819:if(d>=0){c=C(c);Cv(c,d);}d=93;Bi(C(a.c));break d;case -536870818:if(d>=0){c=C(c);Cv(c,d);}d=94;Bi(C(a.c));break d;case 0:if(d>=0){c=C(c);Cv(c,d);}h=W(C(a.c).dS,Ba);if(h===null)d=0;else{c=C(c);AFB(c,h);d=(-1);}Bi(C(a.c));break d;default:}if(d>=0){c=C(c);Cv(c,d);}d=Bi(C(a.c));}g=0;}J(B9(D(1),Ki(a),C(a.c).cN));}J(B9(D(1),Ki(a),C(a.c).cN));}if(!f){if(d>=0){c=C(c);Cv(c,d);}return c;}J(B9(D(1),Ki(a),C(a.c).cN-1|0));}
function Vc(a,b){var c,d,e;c=Me(b);if(Cd(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AIw(b&65535);}if(Cd(a,64)&&b>128){if(c){d=new MN;DF(d);d.ba=2;d.k2=FW(FU(b));return d;}if(OS(b))return AOu(b&65535);if(!Rv(b))return APV(b&65535);return ALU(b&65535);}}if(!c){if(OS(b))return AOu(b&65535);if(!Rv(b))return XQ(b&65535);return ALU(b&65535);}d=new C6;DF(d);d.ba=2;d.d_=b;e=C(FP(b)).data;d.gv=e[AWr(0,e)];d.fu=e[AWr(1,e)];return d;}
function K$(a,b){var c,d,e;c=C(b);if(!AA1(c)){if(!c.A){if(c.fo())return ALn(c);return ARx(c);}if(!c.fo())return AMq(c);b=new Jx;ST(b,c);return b;}d=WG(c);e=new M0;B2(e);b=C(d);e.ks=b;e.nb=b.L;if(!c.A){if(c.fo())return ACp(ALn(H2(c)),e);return ACp(ARx(H2(c)),e);}if(!c.fo())return ACp(AMq(H2(c)),e);b=new P3;d=new Jx;ST(d,H2(c));AE9(b,d,e);return b;}
function Gx(b){var c,d,e,f;if(b===null){b=new EC;S(b,D(191));J(b);}A2Z=1;c=new Qv;c.jU=K(CX,10);c.eB=(-1);c.da=(-1);c.R=(-1);d=new G9;d.c$=1;d.bn=b;d.K=BS(X(b)+2|0);Cg(Ix(b),0,d.K,0,X(b));e=C(d.K).data;f=e.length;e[B(f-1|0,e)]=0;e[B(f-2|0,e)]=0;d.qa=f;d.en=0;Fz(d);Fz(d);c.c=d;c.b6=0;c.lm=Vo(c,(-1),0,null);if(Do(C(c.c))){if(c.nC)C(c.lm).cH();return c;}b=new Uy;c=C(c.c);Wu(b,D(1),c.bn,c.cN);J(b);}
function H5(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cd(a,b){return (a.b6&b)!=b?0:1;}
function DT(){E.call(this);this.qC=null;}
var A20=null;var A21=null;var A22=null;var A23=null;var A24=null;var A25=null;var A26=null;function GQ(){GQ=T(DT);AIQ();}
function Jz(a){var b=new DT();AA8(b,a);return b;}
function AA8(a,b){GQ();a.qC=b;}
function Ez(b){var c,d,e,f,g,h,i;GQ();if(b===null)return null;c=b;d=C($rt_str(typeof c));e=!Bn(d,D(192))&&!Bn(d,D(193))?0:1;if(e&&b[A27]===true)return b;b=A21;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Jz(c);A21.set(c,new $rt_globals.WeakRef(h));return h;}if(Bn(d,D(194))){f=A22.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Jz(c);i=h;A22.set(c,new $rt_globals.WeakRef(i));NO(A25,
i,c);return h;}if(Bn(d,D(195))){f=A23.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Jz(c);i=h;A23.set(c,new $rt_globals.WeakRef(i));NO(A26,i,c);return h;}if(Bn(d,D(196))){f=A24;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Jz(c);A24=new $rt_globals.WeakRef(h);return h;}}return Jz(c);}
function BM(b){GQ();if(b===null)return null;return b[A27]===true?b:C(W(b,DT)).qC;}
function NC(b){GQ();if(b===null)return null;return !(b instanceof $rt_objcls())?b:BM(b);}
function Ua(b){GQ();if(b===null)return null;return b instanceof $rt_objcls()&&b instanceof DT?BM(b):b;}
function RF(b){GQ();if(b===null)return null;return b instanceof $rt_objcls()?b:Ez(b);}
function AIQ(){A20=new $rt_globals.WeakMap();A21=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();A22=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A23=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A25=A22===null?null:new $rt_globals.FinalizationRegistry(BR(new RP,"accept"));A26=A23===null?null:new $rt_globals.FinalizationRegistry(BR(new RN,"accept"));}
function NO(b,c,d){return b.register(c,d);}
var KE=F(0);
var Nn=F();
var I5=F(0);
var Nm=F();
var L_=F(0);
function Rt(){var a=this;E.call(a);a.t6=null;a.rD=null;a.c6=null;a.bu=null;a.ej=0;a.hl=0;a.ht=0;a.jK=null;a.j$=null;a.dc=null;}
function ACg(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;c=a.jK;if(c!==null&&Bn(c,b)){if(a.dc===null)return a.j$;d=new N;Q(d);e=0;while(true){b=C(a.dc);if(e>=b.Y)break;L(d,Df(b,e));e=e+1|0;}return O(d);}a.jK=b;f=Ix(C(b));c=new N;Q(c);a.dc=null;g=0;h=0;i=0;a:{b:while(true){f=C(f);j=f.data;e=j.length;if(g>=e){b=a.dc;if(b!==null){k=c.t;if(h!=k)Fo(b,Tn(c,h,k));}return O(c);}g=B$(g);if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=e)break b;g=B(g,j);Be(c,j[g]);i=0;}else{g=B(g,j);if(j[g]!=36)Be(c,j[g]);else{if(a.dc===null)a.dc
=AB$();d:{try{b=new BB;g=g+1|0;MC(b,f,g,1);k=B8(b);if(h==HZ(c))break d;Fo(C(a.dc),Tn(c,h,HZ(c)));h=HZ(c);break d;}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){break a;}else{throw $$e;}}}try{Fo(C(a.dc),AU7(a,k));l=C(G2(a,k));h=h+X(l)|0;En(c,l);break c;}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){break a;}else{throw $$e;}}}}}g=g+1|0;}b=new Bg;Y(b);J(b);}b=new Bh;S(b,D(1));J(b);}
function G2(a,b){var c;c=C(a.bu);return H9(c,b)<0?null:C(B7(C(c.hO),H9(c,b),K4(c,b)));}
function MW(a,b){var c,d,e,f;c=X(C(a.c6));if(b>=0&&b<=c){Mm(C(a.bu),null,(-1),(-1));d=a.bu;e=C(d);e.ij=1;e.cD=b;c=e.eM;if(c<0)c=b;e.eM=c;b=C(a.rD).bt(b,a.c6,d);if(b==(-1))C(a.bu).b2=1;if(b>=0){d=C(a.bu);if(d.hK){f=C(d.cf).data;if(f[AWr(0,f)]==(-1)){c=d.cD;f[AWr(0,f)]=c;f[AWr(1,f)]=c;}d.eM=Jr(d);return 1;}}C(a.bu).cD=(-1);return 0;}d=new Bg;S(d,Lw(b));J(d);}
function GF(a){var b,c,d;b=X(C(a.c6));c=C(a.bu);if(!c.hR)b=a.hl;if(c.cD>=0&&c.ij==1){c.cD=Jr(c);if(Jr(C(a.bu))==H9(C(a.bu),0)){c=C(a.bu);c.cD=c.cD+1|0;}d=C(a.bu).cD;return d<=b&&MW(a,d)?1:0;}return MW(a,a.ej);}
function U6(a){return H9(C(a.bu),0);}
function PQ(a){return K4(C(a.bu),0);}
var BK=F(Bh);
function Bw(){var a=this;E.call(a);a.b=null;a.bp=0;a.j_=null;a.f_=0;}
var A2Z=0;function B2(a){var b;b=A2Z;A2Z=b+1|0;a.j_=LF(b);}
function K6(a,b){var c;c=A2Z;A2Z=c+1|0;a.j_=LF(c);a.b=b;}
function Ic(a,b,c,d){var e;d=C(d);e=d.n;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function Ip(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI9(a,b){a.f_=b;}
function AIa(a){return a.f_;}
function ABi(a){var b,c,d;b=a.j_;c=a.l();d=new N;Q(d);Be(d,60);b=C(L(d,b));Be(b,58);Be(C(L(b,c)),62);return O(d);}
function AP_(a){return ABi(a);}
function AQU(a){return a.b;}
function ARP(a,b){a.b=b;}
function ARO(a,b){return 1;}
function ASO(a){return null;}
function Js(a){var b;a.bp=1;b=a.b;if(b!==null){if(!b.bp){b=b.dQ();if(b!==null){C(a.b).bp=1;a.b=b;}C(a.b).cH();}else if(b instanceof GU&&C(C(W(b,BY)).cL).jS)a.b=b.b;}}
function AFn(){A2Z=1;}
var AE0=F();
var YK=F();
var AFE=F();
var Ke=F(0);
var RP=F();
function ARZ(a,b){var c;b=RF(b);c=A22;b=BM(b);c.delete(b);}
var Zo=F();
var RN=F();
function AG$(a,b){var c;b=RF(b);c=A23;b=BM(b);c.delete(b);}
function Id(){var a=this;GT.call(a);a.h8=null;a.qt=0;}
function CX(){var a=this;Bw.call(a);a.jS=0;a.b9=0;}
var A2Y=null;function Ms(){Ms=T(CX);AKl();}
function AVF(a){var b=new CX();FI(b,a);return b;}
function FI(a,b){Ms();B2(a);a.b9=b;}
function AHo(a,b,c,d){var e,f;e=a.b9;d=C(d);e=I2(d,e);JZ(d,a.b9,b);f=C(a.b).a(b,c,d);if(f<0)JZ(d,a.b9,e);return f;}
function ANB(a){return a.b9;}
function ALx(a){return D(197);}
function AHW(a,b){return 0;}
function AKl(){var b;b=new Od;B2(b);A2Y=b;}
function G9(){var a=this;E.call(a);a.K=null;a.en=0;a.c$=0;a.rL=0;a.kq=0;a.O=0;a.g=0;a.qa=0;a.dS=null;a.c8=null;a.m=0;a.gs=0;a.cN=0;a.fJ=0;a.bn=null;}
var A28=null;var A2W=null;var A2X=0;function IB(a){return a.O;}
function OJ(a,b){if(b>0&&b<3)a.c$=b;if(b==1){a.g=a.O;a.c8=a.dS;a.m=a.fJ;a.fJ=a.cN;Fz(a);}}
function Pn(a){return a.dS;}
function Hi(a){return a.dS===null?0:1;}
function J4(a){return a.c8===null?0:1;}
function Bi(a){Fz(a);return a.kq;}
function FE(a){var b;b=a.dS;Fz(a);return b;}
function Fz(a){var b,c,d,e,f,g,h,$$je;a.kq=a.O;a.O=a.g;a.dS=a.c8;a.cN=a.fJ;a.fJ=a.m;while(true){b=0;c=a.m>=C(a.K).data.length?0:LW(a);a.g=c;a.c8=null;if(a.c$==4){if(c!=92)return;c=a.m;d=C(a.K).data;c=c>=d.length?0:d[B(B5(a),d)];a.g=c;switch(c){case 69:break;default:a.g=92;a.m=a.gs;return;}a.c$=a.rL;a.g=a.m>(C(a.K).data.length-2|0)?0:LW(a);}a:{c=a.g;if(c!=92){e=a.c$;if(e==1)switch(c){case 36:a.g=(-536870876);break a;case 40:d=a.K;c=a.m;d=C(d).data;if(d[B(c,d)]!=63){a.g=(-2147483608);break a;}B5(a);d=a.K;c=a.m;d
=C(d).data;c=d[B(c,d)];e=0;while(true){b:{if(e){e=0;switch(c){case 33:break;case 61:a.g=(-134217688);B5(a);break b;default:J(B9(D(1),DI(a),a.m));}a.g=(-67108824);B5(a);}else{switch(c){case 33:break;case 60:B5(a);d=a.K;c=a.m;d=C(d).data;c=d[B(c,d)];e=1;break b;case 61:a.g=(-536870872);B5(a);break b;case 62:a.g=(-33554392);B5(a);break b;default:f=AFp(a);a.g=f;if(f<256){a.en=f;f=f<<16;a.g=f;a.g=(-1073741784)|f;break b;}f=f&255;a.g=f;a.en=f;f=f<<16;a.g=f;a.g=(-16777176)|f;break b;}a.g=(-268435416);B5(a);}}if(!e)break;}break a;case 41:a.g
=(-536870871);break a;case 42:case 43:case 63:e=a.m;d=C(a.K).data;switch(e>=d.length?42:d[B(e,d)]){case 43:a.g=c|(-2147483648);B5(a);break a;case 63:a.g=c|(-1073741824);B5(a);break a;default:}a.g=c|(-536870912);break a;case 46:a.g=(-536870866);break a;case 91:a.g=(-536870821);OJ(a,2);break a;case 93:if(e!=2)break a;a.g=(-536870819);break a;case 94:a.g=(-536870818);break a;case 123:a.c8=AEw(a,c);break a;case 124:a.g=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.g=(-536870874);break a;case 45:a.g
=(-536870867);break a;case 91:a.g=(-536870821);break a;case 93:a.g=(-536870819);break a;case 94:a.g=(-536870818);break a;default:}}else{c=a.m>=(C(a.K).data.length-2|0)?(-1):LW(a);c:{a.g=c;switch(c){case -1:J(B9(D(1),DI(a),a.m));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.g
=ABS(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.c$!=1)break a;a.g=(-2147483648)|c;break a;case 65:a.g=(-2147483583);break a;case 66:a.g=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B9(D(1),DI(a),a.m));case 68:case 83:case 87:case 100:case 115:case 119:a.c8=Rb(H6(a.K,
a.gs,1),0);a.g=0;break a;case 71:a.g=(-2147483577);break a;case 80:case 112:break c;case 81:a.rL=a.c$;a.c$=4;b=1;break a;case 90:a.g=(-2147483558);break a;case 97:a.g=7;break a;case 98:a.g=(-2147483550);break a;case 99:c=a.m;d=C(a.K).data;if(c>=(d.length-2|0))J(B9(D(1),DI(a),a.m));a.g=d[B(B5(a),d)]&31;break a;case 101:a.g=27;break a;case 102:a.g=12;break a;case 110:a.g=10;break a;case 114:a.g=13;break a;case 116:a.g=9;break a;case 117:a.g=PB(a,4);break a;case 120:a.g=PB(a,2);break a;case 122:a.g=(-2147483526);break a;default:}break a;}g
=ABu(a);h=0;if(a.g==80)h=1;try{a.c8=Rb(g,h);}catch($$e){$$je=Bj($$e);if($$je instanceof JA){J(B9(D(1),DI(a),a.m));}else{throw $$e;}}a.g=0;}}if(b)continue;else break;}}
function ABu(a){var b,c,d,e,f,g;b=new N;ET(b,10);c=a.m;d=a.K;e=C(d).data;if(c<(e.length-2|0)){if(e[B(c,e)]!=123){b=H6(d,B5(a),1);f=new N;Q(f);L(C(L(f,D(198))),b);return O(f);}B5(a);c=0;a:{while(true){g=a.m;d=C(a.K).data;if(g>=(d.length-2|0))break;c=d[B(B5(a),d)];if(c==125)break a;Be(b,c);}}if(c!=125)J(B9(D(1),a.bn,a.m));}if(!b.t)J(B9(D(1),a.bn,a.m));f=C(O(b));if(X(f)==1){b=new N;Q(b);L(C(L(b,D(198))),f);return O(b);}b:{c:{if(X(f)>3){if(DK(f,D(198)))break c;if(DK(f,D(199)))break c;}break b;}f=DJ(f,2);}return f;}
function AEw(a,b){var c,d,e,f,g,$$je;c=new N;ET(c,4);d=(-1);e=2147483647;a:{while(true){f=a.m;g=C(a.K).data;if(f>=g.length)break a;b=g[B(B5(a),g)];if(b==125)break a;if(b==44&&d<0)try{d=HW(Eq(c),10);AEJ(c,0,HZ(c));continue;}catch($$e){$$je=Bj($$e);if($$je instanceof BK){break;}else{throw $$e;}}Be(c,b&65535);}J(B9(D(1),a.bn,a.m));}if(b!=125)J(B9(D(1),a.bn,a.m));if(c.t>0)b:{try{e=HW(Eq(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bj($$e);if($$je instanceof BK){}else{throw $$e;}}J(B9(D(1),a.bn,a.m));}else if
(d<0)J(B9(D(1),a.bn,a.m));if((d|e|(e-d|0))<0)J(B9(D(1),a.bn,a.m));b=a.m;g=C(a.K).data;f=b>=g.length?42:g[B(b,g)];c:{switch(f){case 43:a.g=(-2147483525);B5(a);break c;case 63:a.g=(-1073741701);B5(a);break c;default:}a.g=(-536870789);}c=new Eo;c.c9=d;c.c5=e;return c;}
function DI(a){return a.bn;}
function Do(a){return !a.O&&!a.g&&a.m==a.qa&&!Hi(a)?1:0;}
function KI(b){return b<0?0:1;}
function Fs(a){return !Do(a)&&!Hi(a)&&KI(a.O)?1:0;}
function Ob(a){var b;b=a.O;return b<=56319&&b>=55296?1:0;}
function Tq(a){var b;b=a.O;return b<=57343&&b>=56320?1:0;}
function Rv(b){return b<=56319&&b>=55296?1:0;}
function OS(b){return b<=57343&&b>=56320?1:0;}
function PB(a,b){var c,d,e,f,g,$$je;c=new N;ET(c,b);d=C(a.K).data.length-2|0;e=0;while(true){f=Cz(e,b);if(f>=0)break;if(a.m>=d)break;g=a.K;f=B5(a);g=C(g).data;Be(c,g[B(f,g)]);e=e+1|0;}if(!f)a:{try{b=HW(Eq(c),16);}catch($$e){$$je=Bj($$e);if($$je instanceof BK){break a;}else{throw $$e;}}return b;}J(B9(D(1),a.bn,a.m));}
function ABS(a){var b,c,d,e,f,g;b=3;c=1;d=C(a.K).data;e=d.length-2|0;f=Ta(d[B(a.m,d)],8);switch(f){case -1:break;default:if(f>3)b=2;B5(a);a:{while(true){if(c>=b)break a;g=a.m;if(g>=e)break a;d=C(a.K).data;g=Ta(d[B(g,d)],8);if(g<0)break;f=(f*8|0)+g|0;B5(a);c=c+1|0;}}return f;}J(B9(D(1),a.bn,a.m));}
function AFp(a){var b,c,d,e;b=1;c=a.en;a:while(true){d=a.m;e=C(a.K).data;if(d>=e.length)J(B9(D(1),a.bn,d));b:{c:{switch(e[B(d,e)]){case 41:B5(a);return c|256;case 45:if(!b)J(B9(D(1),a.bn,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B5(a);}B5(a);return c;}
function B5(a){var b,c,d,e,f;b=a.m;a.gs=b;if(!(a.en&4))a.m=b+1|0;else{c=C(a.K).data.length-2|0;a.m=b+1|0;a:while(true){d=a.m;if(d<c){e=C(a.K).data;if(Qx(e[B(d,e)])){a.m=a.m+1|0;continue;}}d=a.m;if(d>=c)break;e=C(a.K).data;if(e[B(d,e)]!=35)break;a.m=d+1|0;while(true){f=a.m;if(f>=c)continue a;d=e[B(f,e)];if(d!=10&&d!=13&&d!=133&&(d|1)!=8233?0:1)continue a;a.m=f+1|0;}}}return a.gs;}
function AEb(b){return C(A28).CZ(b);}
function LW(a){var b,c,d,e;b=a.K;c=B5(a);b=C(b).data;c=b[B(c,b)];if(Ce(c)){d=a.gs+1|0;b=C(a.K).data;if(d<b.length){e=b[B(d,b)];if(Cc(e)){B5(a);return DV(c,e);}}}return c;}
function Go(a){return a.cN;}
function Uy(){var a=this;Bh.call(a);a.qR=null;a.ln=null;a.hy=0;}
function B9(a,b,c){var d=new Uy();Wu(d,a,b,c);return d;}
function Wu(a,b,c,d){Y(a);a.hy=(-1);a.qR=b;a.ln=c;a.hy=d;}
function ASJ(a){var b,c,d,e,f,g,h,i,j,k,l;b=D(1);c=a.hy;if(c>=1){d=BS(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bh;Y(b);J(b);}e=d;while(c<f){g=e.data;h=c+1|0;g[B(c,g)]=32;c=h;}b=HQ(d);}i=a.qR;j=a.ln;if(j!==null&&X(j)){k=a.hy;j=a.ln;l=new N;Q(l);L(C(L(C(L(C(L(C(V(l,k)),D(61))),j)),D(61))),b);b=O(l);}else b=D(1);j=new N;Q(j);L(C(L(j,i)),b);return O(j);}
var JX=F(0);
var Ld=F();
var Q6=F(0);
var M4=F(0);
function J1(){Ld.call(this);this.dg=0;}
function PS(a){var b;b=new NK;b.nU=a;b.rW=a.dg;b.pa=a.Y;b.qc=(-1);return b;}
var SK=F(0);
function WU(){var a=this;J1.call(a);a.ct=null;a.Y=0;}
function AB$(){var a=new WU();AKH(a);return a;}
function AKH(a){a.ct=K(E,10);}
function NE(a,b){var c,d;c=C(a.ct).data.length;if(c<b){d=c>=1073741823?2147483647:BF(b,BF(c*2|0,5));a.ct=KU(a.ct,d);}}
function Df(a,b){var c;M1(a,b);c=C(a.ct).data;return c[B(b,c)];}
function Fo(a,b){var c,d;NE(a,a.Y+1|0);c=a.ct;d=a.Y;a.Y=d+1|0;c=C(c).data;c[B(d,c)]=b;a.dg=a.dg+1|0;return 1;}
function Tw(a,b){var c,d,e,f,g,h;M1(a,b);c=C(a.ct).data;d=B(b,c);e=c[d];f=a.Y-1|0;a.Y=f;while(d<f){g=B(d+1|0,c);h=c[g];c[B(d,c)]=h;d=g;}h=null;c[B(f,c)]=h;a.dg=a.dg+1|0;return e;}
function M1(a,b){var c;if(b>=0&&b<a.Y)return;c=new Bg;Y(c);J(c);}
var Q0=F(CX);
function AGI(a,b,c,d){var e;e=a.b9;d=C(d);BP(d,e,b-Dq(d,e)|0);return C(a.b).a(b,c,d);}
function AJj(a){return D(200);}
function AQs(a,b){return 0;}
var Vf=F(CX);
function AI6(a,b,c,d){return b;}
function AL_(a){return D(201);}
var PG=F(CX);
function AH$(a,b,c,d){if(Dq(C(d),a.b9)!=b)b=(-1);return b;}
function ARI(a){return D(202);}
function Lk(){CX.call(this);this.ns=0;}
function AGZ(a,b,c,d){var e;e=a.b9;d=C(d);BP(d,e,b-Dq(d,e)|0);a.ns=b;return b;}
function AQV(a){return D(203);}
function APc(a,b){return 0;}
var FZ=F(CX);
function AR$(a,b,c,d){d=C(d);if(d.ij!=1&&b!=d.n)return (-1);d.hK=1;JZ(d,0,b);return b;}
function AIo(a){return D(204);}
function BZ(){Bw.call(this);this.ba=0;}
function DF(a){B2(a);a.ba=1;}
function ATm(a,b,c,d){var e;e=b+a.bh()|0;d=C(d);if(e>d.n){d.b2=1;return (-1);}e=a.Q(b,c);if(e<0)return (-1);return C(a.b).a(b+e|0,c,d);}
function ARb(a){return a.ba;}
function AL5(a,b){return 1;}
var ADT=F(BZ);
function Hf(a){var b=new ADT();ANL(b,a);return b;}
function ANL(a,b){K6(a,b);a.ba=1;a.f_=1;a.ba=0;}
function AQP(a,b,c){return 0;}
function AKv(a,b,c,d){var e,f,g;d=C(d);e=d.n;f=d.bG;while(true){g=Cz(b,e);if(g>0)return (-1);if(g<0){c=C(c);if(Cc(R(c,b))&&b>f&&Ce(R(c,b-1|0))){b=b+1|0;continue;}}if(C(a.b).a(b,c,d)>=0)break;b=b+1|0;}return b;}
function AIU(a,b,c,d,e){var f,g;e=C(e);f=e.n;g=e.bG;while(true){if(c<b)return (-1);if(c<f){d=C(d);if(Cc(R(d,c))&&c>g&&Ce(R(d,c-1|0))){c=c+(-1)|0;continue;}}if(C(a.b).a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ALy(a){return D(205);}
function AGU(a,b){return 0;}
function BY(){var a=this;Bw.call(a);a.X=null;a.cL=null;a.C=0;}
function AUZ(a,b){var c=new BY();F1(c,a,b);return c;}
function F1(a,b,c){B2(a);a.X=b;a.cL=c;a.C=C(c).b9;}
function AK9(a,b,c,d){var e,f,g,h;if(a.X===null)return (-1);e=a.C;d=C(d);f=F4(d,e);DE(d,a.C,b);g=C(a.X).Y;h=0;while(true){if(h>=g){DE(d,a.C,f);return (-1);}e=C(W(Df(C(a.X),h),Bw)).a(b,c,d);if(e>=0)break;h=h+1|0;}return e;}
function AO8(a,b){C(a.cL).b=b;}
function AMd(a){return D(206);}
function AM0(a,b){var c;a:{c=a.X;if(c!==null){c=PS(c);while(true){c=C(c);if(!RU(c))break a;if(C(W(Uo(c),Bw)).be(b))return 1;}}}return 0;}
function APL(a,b){var c;c=a.C;b=C(b);return I2(b,c)>=0&&F4(b,a.C)==I2(b,a.C)?0:1;}
function AIL(a){var b,c,d,e,f,g,h,i,j;a.bp=1;b=a.cL;if(b!==null&&!b.bp)Js(b);a:{b=a.X;if(b!==null){c=b.Y;d=0;while(true){if(d>=c)break a;b=C(W(Df(C(a.X),d),Bw));e=b.dQ();if(e===null)e=b;else{b.bp=1;Tw(C(a.X),d);f=C(a.X);if(d<0)break;g=f.Y;if(d>g)break;NE(f,g+1|0);h=f.Y;i=h;while(i>d){j=f.ct;g=i-1|0;j=C(j).data;b=j[B(g,j)];i=B(i,j);j[i]=b;i=i+(-1)|0;}j=C(f.ct).data;d=B(d,j);j[d]=e;f.Y=h+1|0;f.dg=f.dg+1|0;}if(!e.bp)e.cH();d=d+1|0;}b=new Bg;Y(b);J(b);}}if(a.b!==null)Js(a);}
var Jj=F(BY);
function AOS(a,b,c,d){var e,f,g,h;e=a.C;d=C(d);f=Dq(d,e);BP(d,a.C,b);g=C(a.X).Y;h=0;while(true){if(h>=g){BP(d,a.C,f);return (-1);}e=C(W(Df(C(a.X),h),Bw)).a(b,c,d);if(e>=0)break;h=h+1|0;}return e;}
function ANb(a){return D(207);}
function AP4(a,b){return !Dq(C(b),a.C)?0:1;}
var DY=F(Jj);
function AJA(a,b,c,d){var e,f,g,h;e=a.C;f=C(d);e=Dq(f,e);BP(f,a.C,b);g=C(a.X).Y;h=0;while(h<g){if(C(W(Df(C(a.X),h),Bw)).a(b,c,f)>=0)return C(a.b).a(C(W(a.cL,Lk)).ns,c,f);h=h+1|0;}BP(f,a.C,e);return (-1);}
function APR(a,b){a.b=b;}
function AGP(a){return D(207);}
var MV=F(DY);
function AO2(a,b,c,d){var e,f;e=C(a.X).Y;f=0;while(f<e){if(C(W(Df(C(a.X),f),Bw)).a(b,c,d)>=0)return C(a.b).a(b,c,d);f=f+1|0;}return (-1);}
function ARV(a,b){return 0;}
function ASM(a){return D(208);}
var T7=F(DY);
function AHM(a,b,c,d){var e,f;e=C(a.X).Y;f=0;while(true){if(f>=e)return C(a.b).a(b,c,d);if(C(W(Df(C(a.X),f),Bw)).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ARm(a,b){return 0;}
function AK1(a){return D(209);}
var Qz=F(DY);
function AIG(a,b,c,d){var e,f,g,h;e=C(a.X).Y;d=C(d);f=d.hR?0:d.bG;a:{g=C(a.b).a(b,c,d);if(g>=0){BP(d,a.C,b);h=0;while(true){if(h>=e)break a;if(C(W(Df(C(a.X),h),Bw)).bv(f,b,c,d)>=0){BP(d,a.C,(-1));return g;}h=h+1|0;}}}return (-1);}
function ATJ(a,b){return 0;}
function AOA(a){return D(210);}
var R9=F(DY);
function AGd(a,b,c,d){var e,f,g;e=C(a.X).Y;f=a.C;d=C(d);BP(d,f,b);g=0;while(true){if(g>=e)return C(a.b).a(b,c,d);if(C(W(Df(C(a.X),g),Bw)).bv(0,b,c,d)>=0)break;g=g+1|0;}return (-1);}
function AQi(a,b){return 0;}
function AH_(a){return D(211);}
function GU(){BY.call(this);this.bP=null;}
function AVp(a,b){var c=new GU();XD(c,a,b);return c;}
function XD(a,b,c){B2(a);a.bP=b;a.cL=c;a.C=C(c).b9;}
function AGv(a,b,c,d){var e,f;e=a.C;d=C(d);e=F4(d,e);DE(d,a.C,b);f=C(a.bP).a(b,c,d);if(f>=0)return f;DE(d,a.C,e);return (-1);}
function ANi(a,b,c,d){var e;e=C(a.bP).bt(b,c,d);if(e>=0)DE(C(d),a.C,e);return e;}
function AQz(a,b,c,d,e){var f;f=C(a.bP).bv(b,c,d,e);if(f>=0)DE(C(e),a.C,f);return f;}
function AMX(a,b){return C(a.bP).be(b);}
function AO$(a){var b;b=new No;XD(b,a.bP,a.cL);a.b=b;return b;}
function ASS(a){var b;a.bp=1;b=a.cL;if(b!==null&&!b.bp)Js(b);b=a.bP;if(b!==null&&!b.bp){b=b.dQ();if(b!==null){C(a.bP).bp=1;a.bP=b;}C(a.bP).cH();}}
var Hd=F();
function Ba(){var a=this;Hd.call(a);a.L=0;a.bm=0;a.z=null;a.iF=null;a.jv=null;a.A=0;}
var A29=null;function OG(){OG=T(Ba);AJl();}
function Bx(a){var b;OG();b=new UI;b.o=Bk(64);a.z=b;}
function AHP(a){return null;}
function AG5(a){return a.z;}
function AA1(a){var b,c,d,e,f,g;if(!a.bm)b=HM(C(a.z),0)>=2048?0:1;else{a:{c=a.z;b=0;c=C(c);d=c.P;if(b<d){e=C(c.o).data;f=AWr(0,e);g=(e[f]^(-1))>>>0|0;if(g)b=G$(g)+b|0;else{b=(d+31|0)/32|0;g=f+1|0;while(g<b){f=B(g,e);if(e[f]!=(-1)){b=(f*32|0)+G$(e[AWr(f,e)]^(-1))|0;break a;}g=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function ALm(a){return a.A;}
function AQ7(a){return a;}
function WG(a){var b,c;if(a.jv===null){b=a.dh();c=new Uf;c.yr=a;c.nL=b;Bx(c);a.jv=c;EO(c,a.bm);}return a.jv;}
function H2(a){var b,c;if(a.iF===null){b=a.dh();c=new Ud;c.xE=a;c.rp=b;c.rQ=a;Bx(c);a.iF=c;EO(c,a.L);C(a.iF).A=a.A;}return a.iF;}
function ASL(a){return 0;}
function EO(a,b){var c;c=a.L;if(c^b){a.L=c?0:1;a.bm=a.bm?0:1;}if(!a.A)a.A=1;return a;}
function AKz(a){return a.L;}
function Kw(b,c){OG();return C(b).h(c);}
function IO(b,c){var d,e,f,g,h,i;OG();d=C(b);if(d.bX()!==null){c=C(c);if(c.bX()!==null){b=d.bX();c=c.bX();b=C(b);e=C(b.o).data.length;c=C(c);e=B1(e,C(c.o).data.length);f=0;a:{while(f<e){g=C(b.o).data;h=B(f,g);f=g[h];g=C(c.o).data;i=AWr(h,g);if(f&g[i]){e=1;break a;}f=i+1|0;}e=0;}return e;}}return 1;}
function Rb(b,c){var d,e,f,g,h;OG();d=C(A29);e=0;while(true){AQg();f=C(A2$).data;if(e>=f.length){g=new JA;S(g,D(1));g.y$=D(1);g.yB=b;J(g);}h=B(e,f);f=C(f[h]).data;d=f[AWr(0,f)];b=C(b);if(Bn(b,d))break;e=h+1|0;}return AC2(C(W(f[AWr(1,f)],Bf)),c);}
function AJl(){var b;b=new HA;AQg();A29=b;}
function Xn(){var a=this;Ba.call(a);a.lv=0;a.nr=0;a.eC=0;a.k0=0;a.ci=0;a.dI=0;a.v=null;a.W=null;}
function Dr(){var a=new Xn();ATt(a);return a;}
function AR3(a,b){var c=new Xn();AI8(c,a,b);return c;}
function ATt(a){Bx(a);a.v=ATL();}
function AI8(a,b,c){Bx(a);a.v=ATL();a.lv=b;a.nr=c;}
function Cv(a,b){var c,d;a:{if(a.lv){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ci){MB(C(a.v),H5(b&65535));break a;}c=a.v;d=H5(b&65535);LM(C(c),d);break a;}if(a.nr&&b>128){a.eC=1;b=FW(FU(b));}}}if(!(!Rv(b)&&!OS(b))){if(a.k0)MB(C(a.z),b-55296|0);else LM(C(a.z),b-55296|0);}if(a.ci)MB(C(a.v),b);else LM(C(a.v),b);if(!a.A&&Me(b))a.A=1;return a;}
function AFB(a,b){var c,d,e;if(!a.A){b=C(b);if(b.A)a.A=1;}if(a.k0){c=C(b);if(!c.bm)Ge(C(a.z),c.dh());else Di(C(a.z),c.dh());}else{c=C(b);if(!c.bm)Ga(C(a.z),c.dh());else{FT(C(a.z),c.dh());Di(C(a.z),c.dh());a.bm=a.bm?0:1;a.k0=1;}}if(!a.dI&&c.bX()!==null){if(a.ci){if(!c.L)Ge(C(a.v),c.bX());else Di(C(a.v),c.bX());}else if(!c.L)Ga(C(a.v),c.bX());else{FT(C(a.v),c.bX());Di(C(a.v),c.bX());a.L=a.L?0:1;a.ci=1;}}else{d=a.L;e=a.W;if(e!==null){if(!d){b=new Oz;b.tV=a;b.se=d;b.rG=e;b.ry=c;Bx(b);a.W=b;}else{b=new OA;b.zj=a;b.pN
=d;b.pB=e;b.pb=c;Bx(b);a.W=b;}}else{if(d&&!a.ci&&Mg(C(a.v))){b=new Ov;b.wm=a;b.pG=c;Bx(b);a.W=b;}else if(!d){b=new Ot;b.kB=a;b.i1=d;b.oj=c;Bx(b);a.W=b;}else{b=new Ou;b.lJ=a;b.jd=d;b.rC=c;Bx(b);a.W=b;}a.dI=1;}}return a;}
function B4(a,b,c){var d,e,f,g;if(b>c){d=new Bh;Y(d);J(d);}a:{b:{if(!a.lv){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cv(a,b);b=b+1|0;}}if(!a.ci)Is(C(a.v),b,c+1|0);else{d=a.v;c=c+1|0;d=C(d);if(b>=0&&b<=c){e=d.P;if(b<e){e=B1(e,c);if(b!=e){c=b/32|0;f=e/32|0;if(c==f){g=C(d.o).data;f=B(c,g);g[f]=g[f]&(II(d,b)|Ih(d,e));}else{g=C(d.o).data;c=B(c,g);g[c]=g[c]&II(d,b);b=c+1|0;while(b<f){g=C(d.o).data;c=B(b,g);g[c]=0;b=c+1|0;}if(e&31){g=C(d.o).data;b=B(f,g);g[b]=g[b]&Ih(d,e);}}HE(d);}}}
else{d=new Bg;Y(d);J(d);}}}return a;}
function VM(a,b){var c,d,e;if(!a.A){b=C(b);if(b.A)a.A=1;}c=C(b);if(c.eC)a.eC=1;d=a.bm;if(!(d^c.bm)){if(!d)Ga(C(a.z),c.z);else Di(C(a.z),c.z);}else if(d)Ge(C(a.z),c.z);else{FT(C(a.z),c.z);Di(C(a.z),c.z);a.bm=1;}if(!a.dI&&C2(c)!==null){d=a.L;if(!(d^c.L)){if(!d)Ga(C(a.v),C2(c));else Di(C(a.v),C2(c));}else if(d)Ge(C(a.v),C2(c));else{FT(C(a.v),C2(c));Di(C(a.v),C2(c));a.L=1;}}else{d=a.L;e=a.W;if(e!==null){if(!d){b=new Om;b.tc=a;b.qZ=d;b.rB=e;b.rZ=c;Bx(b);a.W=b;}else{b=new O2;b.ub=a;b.rX=d;b.ni=e;b.nu=c;Bx(b);a.W=
b;}}else{if(!a.ci&&Mg(C(a.v))){if(!d){b=new Ox;b.zt=a;b.o5=c;Bx(b);a.W=b;}else{b=new Oy;b.un=a;b.rO=c;Bx(b);a.W=b;}}else if(!d){b=new OB;b.q2=a;b.p1=c;b.pE=d;Bx(b);a.W=b;}else{b=new OC;b.qd=a;b.qn=c;b.qw=d;Bx(b);a.W=b;}a.dI=1;}}}
function Uw(a,b){var c,d,e;if(!a.A){b=C(b);if(b.A)a.A=1;}c=C(b);if(c.eC)a.eC=1;d=a.bm;if(!(d^c.bm)){if(!d)Di(C(a.z),c.z);else Ga(C(a.z),c.z);}else if(!d)Ge(C(a.z),c.z);else{FT(C(a.z),c.z);Di(C(a.z),c.z);a.bm=0;}if(!a.dI&&C2(c)!==null){d=a.L;if(!(d^c.L)){if(!d)Di(C(a.v),C2(c));else Ga(C(a.v),C2(c));}else if(!d)Ge(C(a.v),C2(c));else{FT(C(a.v),C2(c));Di(C(a.v),C2(c));a.L=0;}}else{d=a.L;e=a.W;if(e!==null){if(!d){b=new Oo;b.tR=a;b.q4=d;b.nK=e;b.pL=c;Bx(b);a.W=b;}else{b=new Op;b.uE=a;b.qG=d;b.nc=e;b.qY=c;Bx(b);a.W
=b;}}else{if(!a.ci&&Mg(C(a.v))){if(!d){b=new Ok;b.uw=a;b.oL=c;Bx(b);a.W=b;}else{b=new Ol;b.zc=a;b.oQ=c;Bx(b);a.W=b;}}else if(!d){b=new Oq;b.sK=a;b.sb=c;b.qk=d;Bx(b);a.W=b;}else{b=new Oj;b.qi=a;b.qQ=c;b.pP=d;Bx(b);a.W=b;}a.dI=1;}}}
function C7(a,b){var c;c=a.W;if(c!==null)return a.L^c.h(b);return a.L^Dx(C(a.v),b);}
function C2(a){if(!a.dI)return a.v;return null;}
function AKk(a){return a.z;}
function ARE(a){var b,c;if(a.W!==null)return a;b=C2(a);c=new On;c.s6=a;c.hj=b;Bx(c);return EO(c,a.L);}
function AN_(a){var b,c,d,e;b=new N;Q(b);c=HM(C(a.v),0);while(c>=0){IT(b,FP(c));Be(b,124);d=a.v;c=c+1|0;c=HM(C(d),c);}e=b.t;if(e>0)T$(b,e-1|0);return O(b);}
function AKA(a){return a.eC;}
function JA(){var a=this;Bu.call(a);a.y$=null;a.yB=null;}
function DR(){Bw.call(this);this.y=null;}
function Dl(a,b,c,d){K6(a,c);a.y=b;a.f_=d;}
function ATs(a){return a.y;}
function AQC(a,b){return !C(a.y).be(b)&&!C(a.b).be(b)?0:1;}
function AR5(a,b){return 1;}
function ANJ(a){var b;a.bp=1;b=a.b;if(b!==null&&!b.bp){b=b.dQ();if(b!==null){C(a.b).bp=1;a.b=b;}C(a.b).cH();}b=a.y;if(b!==null){if(!b.bp){b=b.dQ();if(b!==null){C(a.y).bp=1;a.y=b;}C(a.y).cH();}else if(b instanceof GU&&C(C(W(b,BY)).cL).jS)a.y=b.b;}}
function CO(){DR.call(this);this.H=null;}
function AVv(a,b,c){var d=new CO();Ff(d,a,b,c);return d;}
function Ff(a,b,c,d){Dl(a,b,c,d);a.H=b;}
function AGf(a,b,c,d){var e,f,g;e=0;a:{while(true){f=b+C(a.H).bh()|0;d=C(d);if(f>d.n)break;g=C(a.H).Q(b,c);if(g<=0)break a;b=b+g|0;e=e+1|0;}}while(true){if(e<0)return (-1);g=C(a.b).a(b,c,d);if(g>=0)break;b=b-C(a.H).bh()|0;e=e+(-1)|0;}return g;}
function AII(a){return D(212);}
function FB(){CO.call(this);this.gg=null;}
function AUn(a,b,c,d){var e=new FB();Rf(e,a,b,c,d);return e;}
function Rf(a,b,c,d,e){Ff(a,c,d,e);a.gg=b;}
function AHr(a,b,c,d){var e,f,g,h,i;e=C(a.gg);f=e.c9;g=e.c5;h=0;while(true){if(h>=f){a:{while(h<g){i=b+C(a.H).bh()|0;d=C(d);if(i>d.n)break a;i=C(a.H).Q(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=C(a.b).a(b,c,d);if(i>=0)break;b=b-C(a.H).bh()|0;h=h+(-1)|0;}return i;}i=b+C(a.H).bh()|0;d=C(d);if(i>d.n){d.b2=1;return (-1);}i=C(a.H).Q(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AHU(a){return R2(C(a.gg));}
var C0=F(DR);
function AGt(a,b,c,d){var e;if(!C(a.y).x(d))return C(a.b).a(b,c,d);e=C(a.y).a(b,c,d);if(e>=0)return e;return C(a.b).a(b,c,d);}
function ALM(a){return D(213);}
var ES=F(CO);
function ANr(a,b,c,d){var e;e=C(a.y).a(b,c,d);if(e<0)e=C(a.b).a(b,c,d);return e;}
function ATM(a,b){a.b=b;C(a.y).B(b);}
var Uj=F(CO);
function ATd(a,b,c,d){var e;while(true){e=b+C(a.H).bh()|0;d=C(d);if(e>d.n)break;if(C(a.H).Q(b,c)<=0)break;b=b+C(a.H).bh()|0;}return C(a.b).a(b,c,d);}
function AN6(a,b,c,d){var e,f,g;e=C(a.b).bt(b,c,d);if(e<0)return (-1);f=e-C(a.H).bh()|0;while(f>=b&&C(a.H).Q(f,c)>0){g=f-C(a.H).bh()|0;e=f;f=g;}return e;}
function Bf(){var a=this;E.call(a);a.lR=null;a.kt=null;}
function AC2(a,b){if(!b&&a.lR===null)a.lR=a.s();else if(b&&a.kt===null)a.kt=EO(C(a.s()),1);if(b)return a.kt;return a.lR;}
function Eo(){var a=this;Hd.call(a);a.c9=0;a.c5=0;}
function R2(a){var b,c,d,e,f;b=a.c9;c=a.c5;d=c!=2147483647?LF(c):D(1);e=new N;Q(e);Be(e,123);f=C(V(e,b));Be(f,44);Be(C(L(f,d)),125);return O(e);}
var Od=F(Bw);
function AMt(a,b,c,d){return b;}
function AO0(a){return D(214);}
function AO7(a,b){return 0;}
function UI(){var a=this;E.call(a);a.o=null;a.P=0;}
function ATL(){var a=new UI();AIp(a);return a;}
function AIp(a){a.o=Bk(2);}
function LM(a,b){var c,d,e,f;if(b<0){c=new Bg;Y(c);J(c);}d=b/32|0;if(b>=a.P){IW(a,d+1|0);a.P=b+1|0;}e=C(a.o).data;f=B(d,e);e[f]=e[f]|1<<(b%32|0);}
function Is(a,b,c){var d,e,f,g,h;if(b>=0){d=Cz(b,c);if(d<=0){if(!d)return;e=b/32|0;d=c/32|0;if(c>a.P){IW(a,d+1|0);a.P=c;}if(e==d){f=C(a.o).data;e=B(e,f);f[e]=f[e]|Ih(a,b)&II(a,c);}else{f=C(a.o).data;e=B(e,f);f[e]=f[e]|Ih(a,b);g=e+1|0;while(g<d){f=C(a.o).data;g=B(g,f);f[g]=(-1);g=g+1|0;}if(c&31){f=C(a.o).data;d=B(d,f);f[d]=f[d]|II(a,c);}}return;}}h=new Bg;Y(h);J(h);}
function Ih(a,b){return (-1)<<(b%32|0);}
function II(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function MB(a,b){var c,d,e,f,g,h;if(b<0){c=new Bg;Y(c);J(c);}d=b/32|0;e=C(a.o).data;if(d<e.length){f=B(d,e);g=e[f];h=(b%32|0)&31;e[f]=g&((-2)<<h|((-2)>>>(32-h|0)|0));if(b==(a.P-1|0))HE(a);}}
function Dx(a,b){var c,d,e;if(b<0){c=new Bg;Y(c);J(c);}d=b/32|0;e=C(a.o).data;return d<e.length&&e[B(d,e)]&1<<(b%32|0)?1:0;}
function HM(a,b){var c,d,e,f,g,h;if(b<0){c=new Bg;Y(c);J(c);}d=a.P;if(b>=d)return (-1);e=b/32|0;f=C(a.o).data;g=B(e,f);e=f[g]>>>(b%32|0)|0;if(e)return G$(e)+b|0;d=(d+31|0)/32|0;h=g+1|0;while(h<d){h=B(h,f);if(f[h])return (h*32|0)+G$(f[AWr(h,f)])|0;h=h+1|0;}return (-1);}
function IW(a,b){var c,d,e,f,g;c=C(a.o).data.length;if(c>=b)return;c=BF((b*3|0)/2|0,(c*2|0)+1|0);d=a.o;e=Bk(c);d=C(d).data;b=B1(c,d.length);c=0;while(c<b){f=e.data;g=B(c,d);c=d[g];g=AWr(g,f);f[g]=c;c=g+1|0;}a.o=e;}
function HE(a){var b,c,d,e,f;b=(a.P+31|0)/32|0;a.P=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=C(a.o).data;e=B(c,d);f=JQ(d[e]);if(f<32)break;c=e+(-1)|0;a.P=a.P-32|0;}a.P=a.P-f|0;}}
function Di(a,b){var c,d,e,f,g;c=C(a.o).data.length;b=C(b);c=B1(c,C(b.o).data.length);d=0;while(d<c){e=C(a.o).data;d=B(d,e);f=e[d];g=C(b.o).data;d=AWr(d,g);e[d]=f&g[d];d=d+1|0;}while(true){e=C(a.o).data;if(c>=e.length)break;f=B(c,e);e[f]=0;c=f+1|0;}a.P=B1(a.P,b.P);HE(a);}
function Ge(a,b){var c,d,e,f,g,h;c=C(a.o).data.length;b=C(b);c=B1(c,C(b.o).data.length);d=0;while(d<c){e=C(a.o).data;d=B(d,e);f=e[d];g=C(b.o).data;h=AWr(d,g);e[h]=f&(g[h]^(-1));d=h+1|0;}HE(a);}
function Ga(a,b){var c,d,e,f,g,h;c=a.P;b=C(b);c=BF(c,b.P);a.P=c;IW(a,(c+31|0)/32|0);c=B1(C(a.o).data.length,C(b.o).data.length);d=0;while(d<c){e=C(a.o).data;f=B(d,e);d=e[f];g=C(b.o).data;h=AWr(f,g);e[h]=d|g[h];d=h+1|0;}}
function FT(a,b){var c,d,e,f,g,h;c=a.P;b=C(b);c=BF(c,b.P);a.P=c;IW(a,(c+31|0)/32|0);c=B1(C(a.o).data.length,C(b.o).data.length);d=0;while(d<c){e=C(a.o).data;f=B(d,e);d=e[f];g=C(b.o).data;h=AWr(f,g);e[h]=d^g[h];d=h+1|0;}HE(a);}
function Mg(a){return a.P?0:1;}
function M0(){var a=this;BY.call(a);a.ks=null;a.nb=0;}
function APg(a){var b,c,d;b=!a.nb?D(215):D(216);c=C(a.ks).F();d=new N;Q(d);L(C(L(C(L(d,D(217))),b)),c);return O(d);}
function P3(){var a=this;BY.call(a);a.iz=null;a.h6=null;}
function ACp(a,b){var c=new P3();AE9(c,a,b);return c;}
function AE9(a,b,c){B2(a);a.iz=b;a.h6=c;}
function AHi(a,b,c,d){var e,f,g,h,i,j;e=C(a.iz).a(b,c,d);if(e<0)a:{f=C(a.h6);d=C(d);g=d.bG;h=d.n;i=b+1|0;e=Cz(i,h);if(e>0){d.b2=1;e=(-1);}else{j=C(c);h=R(j,b);if(!C(f.ks).h(h))e=(-1);else{if(Ce(h)){if(e<0&&Cc(R(j,i))){e=(-1);break a;}}else if(Cc(h)&&b>g&&Ce(R(j,b-1|0))){e=(-1);break a;}e=C(f.b).a(i,j,d);}}}if(e>=0)return e;return (-1);}
function AOQ(a,b){a.b=b;C(a.h6).b=b;C(a.iz).B(b);}
function APu(a){var b,c,d;b=a.iz;c=a.h6;d=new N;Q(d);L(C(L(C(L(C(L(d,D(218))),b)),D(219))),c);return O(d);}
function AIf(a,b){return 1;}
function AHO(a,b){return 1;}
function CG(){var a=this;BY.call(a);a.bT=null;a.lf=0;}
function AMq(a){var b=new CG();ST(b,a);return b;}
function ST(a,b){var c;B2(a);c=C(b);a.bT=c.hY();a.lf=c.L;}
function AJ$(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.n;if(b<f){g=b+1|0;c=C(c);h=R(c,b);if(a.h(h)){i=C(a.b).a(g,c,e);if(i>0)return i;}if(g<f){b=g+1|0;g=R(c,g);if(HT(h,g)&&a.h(DV(h,g)))return C(a.b).a(b,c,e);}}return (-1);}
function ASD(a){var b,c,d;b=!a.lf?D(215):D(216);c=C(a.bT).F();d=new N;Q(d);L(C(L(C(L(d,D(217))),b)),c);return O(d);}
function AKI(a,b){return C(a.bT).h(b);}
function AHb(a,b){if(b instanceof C6)return Kw(a.bT,C(W(b,C6)).d_);if(b instanceof De)return Kw(a.bT,C(W(b,De)).bR);if(b instanceof CG)return IO(a.bT,C(W(b,CG)).bT);if(!(b instanceof C$))return 1;return IO(a.bT,C(W(b,C$)).cW);}
function AMk(a){return a.bT;}
function AQ2(a,b){a.b=b;}
function AKp(a,b){return 1;}
var Jx=F(CG);
function AL6(a,b){return C(a.bT).h(FW(FU(b)));}
function AS1(a){var b,c,d;b=!a.lf?D(215):D(216);c=C(a.bT).F();d=new N;Q(d);L(C(L(C(L(d,D(220))),b)),c);return O(d);}
function Xf(){var a=this;BZ.call(a);a.kQ=null;a.o9=0;}
function ALn(a){var b=new Xf();AOq(b,a);return b;}
function AOq(a,b){var c;DF(a);c=C(b);a.kQ=c.hY();a.o9=c.L;}
function AMu(a,b,c){return !C(a.kQ).h(DU(Dw(R(C(c),b))))?(-1):1;}
function AH2(a){var b,c,d;b=!a.o9?D(215):D(216);c=C(a.kQ).F();d=new N;Q(d);L(C(L(C(L(d,D(220))),b)),c);return O(d);}
function C$(){var a=this;BZ.call(a);a.cW=null;a.qp=0;}
function ARx(a){var b=new C$();APz(b,a);return b;}
function APz(a,b){var c;DF(a);c=C(b);a.cW=c.hY();a.qp=c.L;}
function MJ(a,b,c){return !C(a.cW).h(R(C(c),b))?(-1):1;}
function AMC(a){var b,c,d;b=!a.qp?D(215):D(216);c=C(a.cW).F();d=new N;Q(d);L(C(L(C(L(d,D(217))),b)),c);return O(d);}
function AO9(a,b){if(b instanceof De)return Kw(a.cW,C(W(b,De)).bR);if(b instanceof C$)return IO(a.cW,C(W(b,C$)).cW);if(!(b instanceof CG)){if(!(b instanceof C6))return 1;return 0;}return IO(a.cW,C(W(b,CG)).bT);}
function J9(){var a=this;BY.call(a);a.e3=null;a.l_=null;a.ih=0;}
function ARM(a,b){var c=new J9();AGw(c,a,b);return c;}
function AGw(a,b,c){B2(a);a.e3=b;a.ih=c;}
function ANp(a,b){a.b=b;}
function KB(a){if(a.l_===null)a.l_=HQ(a.e3);return a.l_;}
function AQk(a){var b,c;b=KB(a);c=new N;Q(c);L(C(L(c,D(221))),b);return O(c);}
function AF2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;d=C(d);e=d.n;f=Bk(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;c=C(c);j=R(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=Bk(2);n=m.data;n[AWr(0,n)]=b;n[AWr(1,n)]=l;}else{k=4519+k|0;m=Bk(3);n=m.data;n[AWr(0,n)]=b;n[AWr(1,n)]=l;n[AWr(2,n)]=k;}}else m=null;if(m!==null){n=m.data;l=0;b=n.length;k=a.ih;if(b!=k)return (-1);while(true){if(l>=k)return C(a.b).a(i,c,d);b=B(l,n);o=n[b];f=C(a.e3).data;b=AWr(b,f);if(o!=f[b])break;l
=b+1|0;}return (-1);}n=f.data;n[AWr(0,n)]=j;p=j-4352|0;if(p>=0&&p<19){if(i<e){j=R(c,i);g=j-4449|0;}if(g>=0&&g<21){b=i+1|0;n[AWr(1,n)]=j;if(b<e){j=R(c,b);h=j-4519|0;}if(h>=0&&h<28){a:{o=b+1|0;n[AWr(2,n)]=j;if(a.ih==3){k=n[AWr(0,n)];f=C(a.e3).data;if(k==f[AWr(0,f)]&&n[AWr(1,n)]==f[AWr(1,f)]&&n[AWr(2,n)]==f[AWr(2,f)]){b=C(a.b).a(o,c,d);break a;}}b=(-1);}return b;}b:{if(a.ih==2){o=n[AWr(0,n)];f=C(a.e3).data;if(o==f[AWr(0,f)]&&n[AWr(1,n)]==f[AWr(1,f)]){b=C(a.b).a(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AH7(a,b){return b instanceof J9&&!Bn(C(KB(C(W(b,J9)))),KB(a))?0:1;}
function ARK(a,b){return 1;}
function De(){BZ.call(this);this.bR=0;}
function XQ(a){var b=new De();APC(b,a);return b;}
function APC(a,b){DF(a);a.bR=b;}
function AMe(a){return 1;}
function ALk(a,b,c){return a.bR!=R(C(c),b)?(-1):1;}
function AJ9(a,b,c,d){var e,f,g,h;if(!(c instanceof BB))return Ic(a,b,c,d);d=C(d);e=d.n;f=c;while(true){if(b>=e)return (-1);g=a.bR;f=C(f);g=DP(f,g,b);if(g<0)return (-1);h=a.b;b=g+1|0;if(C(h).a(b,c,d)>=0)break;}return g;}
function AMl(a,b,c,d,e){var f,g;if(!(d instanceof BB))return Ip(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=a.bR;f=C(f);g=Gm(f,g,c);if(g<0)break a;if(g<b)break a;if(C(a.b).a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AR1(a){var b,c;b=a.bR;c=new N;Q(c);Be(c,b);return O(c);}
function ARA(a,b){if(b instanceof De)return C(W(b,De)).bR!=a.bR?0:1;if(!(b instanceof C$)){if(b instanceof CG)return C(W(b,CG)).h(a.bR);if(!(b instanceof C6))return 1;return 0;}return MJ(C(W(b,C$)),0,Mf(a.bR))<=0?0:1;}
function AEO(){BZ.call(this);this.iY=0;}
function APV(a){var b=new AEO();AN1(b,a);return b;}
function AN1(a,b){DF(a);a.iY=DU(Dw(b));}
function AFU(a,b,c){return a.iY!=DU(Dw(R(C(c),b)))?(-1):1;}
function AOP(a){var b,c;b=a.iY;c=new N;Q(c);Be(C(L(c,D(222))),b);return O(c);}
function VS(){var a=this;BZ.call(a);a.mD=0;a.nF=0;}
function AIw(a){var b=new VS();AQb(b,a);return b;}
function AQb(a,b){DF(a);a.mD=b;a.nF=H5(b);}
function AGq(a,b,c){var d;d=a.mD;c=C(c);return d!=R(c,b)&&a.nF!=R(c,b)?(-1):1;}
function ALD(a){var b,c;b=a.mD;c=new N;Q(c);Be(C(L(c,D(223))),b);return O(c);}
function E2(){var a=this;BY.call(a);a.f2=0;a.kc=null;a.i5=null;a.iX=0;}
function AWl(a,b){var c=new E2();N6(c,a,b);return c;}
function N6(a,b,c){B2(a);a.f2=1;a.i5=b;a.iX=c;}
function ASQ(a,b){a.b=b;}
function AOR(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bk(4);d=C(d);f=d.n;if(b>=f)return (-1);g=KX(a,b,c,f);h=b+a.f2|0;i=AEb(g);if(i===null){j=e.data;b=1;j[AWr(0,j)]=g;}else{b=i.data.length;Cg(i,0,e,0,b);b=0+b|0;}a:{if(h<f){g=KX(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){j=e.data;k=b+1|0;j[B(b,j)]=g;}else{j=C(AEb(g)).data;if(j.length!=2){i=e.data;k=b+1|0;i[B(b,i)]=j[AWr(0,j)];}else{i=e.data;g=b+1|0;i[B(b,i)]=j[AWr(0,j)];k=g+1|0;i[B(g,i)]=j[AWr(1,j)];}}h=h+a.f2|0;if(h>=f){b=k;break a;}g
=KX(a,h,c,f);b=k;}}}if(b!=a.iX)return (-1);g=0;while(true){if(g>=b)return C(a.b).a(h,c,d);j=e.data;k=B(g,j);g=j[k];j=C(a.i5).data;l=AWr(k,j);if(g!=j[l])break;g=l+1|0;}return (-1);}
function Mb(a){var b,c,d,e;if(a.kc===null){b=new N;Q(b);c=0;while(c<a.iX){d=C(a.i5).data;e=B(c,d);IT(b,FP(d[e]));c=e+1|0;}a.kc=O(b);}return a.kc;}
function AOE(a){var b,c;b=Mb(a);c=new N;Q(c);L(C(L(c,D(224))),b);return O(c);}
function KX(a,b,c,d){var e,f,g,h;a.f2=1;if(b>=(d-1|0))e=R(C(c),b);else{d=b+1|0;c=C(c);e=R(c,b);f=R(c,d);if(HT(e,f)){a:{g=BS(2);h=g.data;h[AWr(0,h)]=e;h[AWr(1,h)]=f;e=0;if(e<(h.length-1|0)){e=AWr(e,h);if(Ce(h[e])){d=AWr(e+1|0,h);if(Cc(h[d])){e=DV(h[e],h[d]);break a;}}}g=g.data;e=g[AWr(e,g)];}a.f2=2;}}return e;}
function AMv(a,b){return b instanceof E2&&!Bn(C(Mb(C(W(b,E2)))),Mb(a))?0:1;}
function APU(a,b){return 1;}
var U5=F(E2);
var Sy=F(E2);
var VA=F(C0);
function AJc(a,b,c,d){var e;while(true){e=C(a.y).a(b,c,d);if(e<=0)break;b=e;}return C(a.b).a(b,c,d);}
var Px=F(C0);
function ANV(a,b,c,d){var e;e=C(a.y).a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=C(a.y).a(e,c,d);if(b<=e)break;e=b;}b=e;}return C(a.b).a(b,c,d);}
var Gd=F(C0);
function AQZ(a,b,c,d){var e;if(!C(a.y).x(d))return C(a.b).a(b,c,d);e=C(a.y).a(b,c,d);if(e>=0)return e;return C(a.b).a(b,c,d);}
function ASe(a,b){a.b=b;C(a.y).B(b);}
var Pf=F(Gd);
function AMj(a,b,c,d){var e;e=C(a.y).a(b,c,d);if(e<=0)e=b;return C(a.b).a(e,c,d);}
function AOh(a,b){a.b=b;}
function FG(){var a=this;C0.call(a);a.dB=null;a.b4=0;}
function A2_(a,b,c,d,e){var f=new FG();Jv(f,a,b,c,d,e);return f;}
function Jv(a,b,c,d,e,f){Dl(a,c,d,e);a.dB=b;a.b4=f;}
function ATG(a,b,c,d){var e,f,g,h;e=a.b4;f=C(d);g=M5(f,e);if(!C(a.y).x(f))return C(a.b).a(b,c,f);if(g>=C(a.dB).c5)return C(a.b).a(b,c,f);h=a.b4;e=g+1|0;Er(f,h,e);h=C(a.y).a(b,c,f);if(h>=0){Er(f,a.b4,0);return h;}h=a.b4;g=e+(-1)|0;Er(f,h,g);if(g>=C(a.dB).c9)return C(a.b).a(b,c,f);Er(f,a.b4,0);return (-1);}
function ASi(a){return R2(C(a.dB));}
var Nq=F(FG);
function ALN(a,b,c,d){var e,f,g;e=0;f=C(a.dB).c5;a:{while(true){g=C(a.y).a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<C(a.dB).c9)return (-1);return C(a.b).a(b,c,d);}
var QR=F(C0);
function AS4(a,b,c,d){var e;if(!C(a.y).x(d))return C(a.b).a(b,c,d);e=C(a.b).a(b,c,d);if(e>=0)return e;return C(a.y).a(b,c,d);}
var Qb=F(Gd);
function AIg(a,b,c,d){var e;if(!C(a.y).x(d))return C(a.b).a(b,c,d);e=C(a.b).a(b,c,d);if(e<0)e=C(a.y).a(b,c,d);return e;}
var Te=F(FG);
function AG0(a,b,c,d){var e,f,g;e=a.b4;f=C(d);g=M5(f,e);if(!C(a.y).x(f))return C(a.b).a(b,c,f);d=C(a.dB);if(g>=d.c5){Er(f,a.b4,0);return C(a.b).a(b,c,f);}if(g<d.c9){Er(f,a.b4,g+1|0);e=C(a.y).a(b,c,f);}else{e=C(a.b).a(b,c,f);if(e>=0){Er(f,a.b4,0);return e;}Er(f,a.b4,g+1|0);e=C(a.y).a(b,c,f);}return e;}
var QS=F(DR);
function ATo(a,b,c,d){var e;d=C(d);e=d.n;if(e>b)return C(a.b).bv(b,e,c,d);return C(a.b).a(b,c,d);}
function AQ8(a,b,c,d){var e;d=C(d);e=d.n;if(C(a.b).bv(b,e,c,d)>=0)return b;return (-1);}
function APA(a){return D(225);}
function Oi(){DR.call(this);this.kp=null;}
function AO_(a,b,c,d){var e,f;d=C(d);e=d.n;f=Tf(a,b,e,c);if(f>=0)e=f;if(e>b)return C(a.b).bv(b,e,c,d);return C(a.b).a(b,c,d);}
function AF_(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.n;g=C(a.b).bt(b,c,e);if(g<0)return (-1);h=Tf(a,g,f,c);if(h>=0)f=h;f=BF(g,C(a.b).bv(g,f,c,e));if(f<=0)i=f?(-1):0;else{i=f-1|0;a:{while(true){if(i<b){i=(-1);break a;}d=a.kp;c=C(c);if(C(d).f9(R(c,i)))break;i=i+(-1)|0;}}}if(i>=b)b=i>=f?i:i+1|0;return b;}
function Tf(a,b,c,d){var e;while(true){if(b>=c)return (-1);e=a.kp;d=C(d);if(C(e).f9(R(d,b)))break;b=b+1|0;}return b;}
function AQq(a){return D(226);}
var E$=F();
var A3a=null;var A3b=null;function Pi(b){var c;if(!(b&1)){c=A3b;if(c!==null)return c;c=new Tu;A3b=c;return c;}c=A3a;if(c!==null)return c;c=new Tt;A3a=c;return c;}
var VB=F(CO);
function AG2(a,b,c,d){var e;a:{while(true){e=b+C(a.H).bh()|0;d=C(d);if(e>d.n)break a;e=C(a.H).Q(b,c);if(e<1)break;b=b+e|0;}}return C(a.b).a(b,c,d);}
var Uc=F(ES);
function ANR(a,b,c,d){var e;e=b+C(a.H).bh()|0;d=C(d);if(e<=d.n){e=C(a.H).Q(b,c);if(e>=1)b=b+e|0;}return C(a.b).a(b,c,d);}
var OX=F(FB);
function AQF(a,b,c,d){var e,f,g,h,i,j;e=C(a.gg);f=e.c9;g=e.c5;h=0;while(true){if(h>=f){a:{while(h<g){i=b+C(a.H).bh()|0;d=C(d);if(i>d.n)break a;j=C(a.H).Q(b,c);if(j<1)break a;b=b+j|0;h=h+1|0;}}return C(a.b).a(b,c,d);}j=b+C(a.H).bh()|0;d=C(d);if(j>d.n){d.b2=1;return (-1);}j=C(a.H).Q(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var P_=F(CO);
function AO4(a,b,c,d){var e,f;while(true){e=C(a.b).a(b,c,d);if(e>=0)break;f=b+C(a.H).bh()|0;d=C(d);if(f<=d.n){e=C(a.H).Q(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var SG=F(ES);
function AG8(a,b,c,d){var e;e=C(a.b).a(b,c,d);if(e>=0)return e;return C(a.y).a(b,c,d);}
var QA=F(FB);
function AQR(a,b,c,d){var e,f,g,h,i,j;e=C(a.gg);f=e.c9;g=e.c5;h=0;while(true){if(h>=f){a:{while(true){f=C(a.b).a(b,c,d);if(f>=0)break;i=b+C(a.H).bh()|0;d=C(d);if(i<=d.n){f=C(a.H).Q(b,c);b=b+f|0;h=h+1|0;}if(f<1)break a;if(h>g)break a;}return f;}return (-1);}j=b+C(a.H).bh()|0;d=C(d);if(j>d.n){d.b2=1;return (-1);}j=C(a.H).Q(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var ZC=F(Bw);
function ARF(){var a=new ZC();AJE(a);return a;}
function AJE(a){B2(a);}
function AMY(a,b,c,d){if(b){d=C(d);if(!(d.dJ&&b==d.bG))return (-1);}return C(a.b).a(b,c,d);}
function AL0(a,b){return 0;}
function ANS(a){return D(227);}
function X4(){Bw.call(this);this.rI=0;}
function ARw(a){var b=new X4();AL$(b,a);return b;}
function AL$(a,b){B2(a);a.rI=b;}
function AHL(a,b,c,d){var e,f,g,h,i;e=C(d);if(b>=e.n)f=32;else{c=C(c);f=R(c,b);}if(!b)g=32;else{h=b-1|0;c=C(c);g=R(c,h);}i=e.hR?0:e.bG;return (f!=32&&!Qe(a,f,b,i,c)?0:1)^(g!=32&&!Qe(a,g,b-1|0,i,c)?0:1)^a.rI?(-1):C(a.b).a(b,c,e);}
function AH5(a,b){return 0;}
function ATD(a){return D(228);}
function Qe(a,b,c,d,e){var f;if(!JP(b)&&b!=95){a:{if(Cr(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;e=C(e);f=R(e,c);if(JP(f))return 0;if(Cr(f)!=6)return 1;}}return 1;}return 0;}
var W_=F(Bw);
function AUo(){var a=new W_();AQ4(a);return a;}
function AQ4(a){B2(a);}
function AL9(a,b,c,d){d=C(d);if(b!=d.eM)return (-1);return C(a.b).a(b,c,d);}
function ATA(a,b){return 0;}
function AHt(a){return D(229);}
function UM(){Bw.call(this);this.ep=0;}
function AVQ(a){var b=new UM();ADX(b,a);return b;}
function ADX(a,b){B2(a);a.ep=b;}
function APE(a,b,c,d){var e,f,g,h;e=C(d);if(!e.dJ){c=C(c);f=X(c);}else f=e.n;if(b>=f){BP(e,a.ep,0);return C(a.b).a(b,c,e);}f=f-b|0;if(f==2){c=C(c);if(R(c,b)==13&&R(c,b+1|0)==10){BP(e,a.ep,0);return C(a.b).a(b,c,e);}}a:{if(f==1){g=C(c);h=R(g,b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}BP(e,a.ep,0);return C(a.b).a(b,g,e);}
function AI0(a,b){var c;c=a.ep;b=C(b);c=!Dq(b,c)?0:1;BP(b,a.ep,(-1));return c;}
function ANx(a){return D(230);}
var AEq=F(Bw);
function AVW(){var a=new AEq();AL1(a);return a;}
function AL1(a){B2(a);}
function AON(a,b,c,d){var e;d=C(d);if(!d.hR)e=d.n;else{c=C(c);e=X(c);}if(b<e)return (-1);d.b2=1;d.x8=1;return C(a.b).a(b,c,d);}
function AFS(a,b){return 0;}
function AK8(a){return D(231);}
function Wr(){Bw.call(this);this.pV=null;}
function AVZ(a){var b=new Wr();APG(b,a);return b;}
function APG(a,b){B2(a);a.pV=b;}
function AIJ(a,b,c,d){var e,f;a:{e=C(d);if(b!=e.n){if(!b)break a;if(e.dJ&&b==e.bG)break a;d=a.pV;f=b-1|0;c=C(c);if(C(d).qL(R(c,f),R(c,b)))break a;}return (-1);}return C(a.b).a(b,c,e);}
function AKW(a,b){return 0;}
function AHd(a){return D(232);}
var AEk=F(BY);
function AWa(){var a=new AEk();AOv(a);return a;}
function AOv(a){B2(a);}
function AS8(a,b,c,d){var e,f,g;d=C(d);e=d.n;f=b+1|0;if(f>e){d.b2=1;return (-1);}c=C(c);g=R(c,b);if(Ce(g)){b=b+2|0;if(b<=e&&HT(g,R(c,f)))return C(a.b).a(b,c,d);}return C(a.b).a(f,c,d);}
function AJJ(a){return D(233);}
function AH9(a,b){a.b=b;}
function AOr(a){return (-2147483602);}
function AH8(a,b){return 1;}
function Xl(){BY.call(this);this.lc=null;}
function AVB(a){var b=new Xl();AIY(b,a);return b;}
function AIY(a,b){B2(a);a.lc=b;}
function AOG(a,b,c,d){var e,f,g,h;d=C(d);e=d.n;f=b+1|0;if(f>e){d.b2=1;return (-1);}c=C(c);g=R(c,b);if(Ce(g)){b=b+2|0;if(b<=e){h=R(c,f);if(HT(g,h))return C(a.lc).f9(DV(g,h))?(-1):C(a.b).a(b,c,d);}}return C(a.lc).f9(g)?(-1):C(a.b).a(f,c,d);}
function AJa(a){return D(234);}
function AQo(a,b){a.b=b;}
function AFN(a){return (-2147483602);}
function ATj(a,b){return 1;}
function AD_(){Bw.call(this);this.fM=0;}
function AU6(a){var b=new AD_();AKQ(b,a);return b;}
function AKQ(a,b){B2(a);a.fM=b;}
function AMB(a,b,c,d){var e,f;d=C(d);if(!d.dJ){c=C(c);e=X(c);}else e=d.n;if(b>=e){BP(d,a.fM,0);return C(a.b).a(b,c,d);}if((e-b|0)==1){f=C(c);if(R(f,b)==10){BP(d,a.fM,1);return C(a.b).a(b+1|0,f,d);}}return (-1);}
function AKO(a,b){var c;c=a.fM;b=C(b);c=!Dq(b,c)?0:1;BP(b,a.fM,(-1));return c;}
function AM8(a){return D(230);}
function ABa(){Bw.call(this);this.fX=0;}
function AUK(a){var b=new ABa();ALo(b,a);return b;}
function ALo(a,b){B2(a);a.fX=b;}
function AOL(a,b,c,d){var e;d=C(d);if(!d.dJ){c=C(c);e=X(c)-b|0;}else e=d.n-b|0;if(e<=0){BP(d,a.fX,0);return C(a.b).a(b,c,d);}c=C(c);if(R(c,b)!=10)return (-1);BP(d,a.fX,1);return C(a.b).a(b+1|0,c,d);}
function AKG(a,b){var c;c=a.fX;b=C(b);c=!Dq(b,c)?0:1;BP(b,a.fX,(-1));return c;}
function AGM(a){return D(235);}
function VL(){Bw.call(this);this.dV=0;}
function ATW(a){var b=new VL();ATI(b,a);return b;}
function ATI(a,b){B2(a);a.dV=b;}
function ALR(a,b,c,d){var e,f,g,h;d=C(d);if(!d.dJ){c=C(c);e=X(c)-b|0;}else e=d.n-b|0;if(!e){BP(d,a.dV,0);return C(a.b).a(b,c,d);}if(e<2){f=C(c);g=R(f,b);h=97;}else{f=C(c);g=R(f,b);h=R(f,b+1|0);}switch(g){case 10:case 133:case 8232:case 8233:BP(d,a.dV,0);return C(a.b).a(b,f,d);case 13:if(h!=10){BP(d,a.dV,0);return C(a.b).a(b,f,d);}BP(d,a.dV,0);return C(a.b).a(b,f,d);default:}return (-1);}
function AI5(a,b){var c;c=a.dV;b=C(b);c=!Dq(b,c)?0:1;BP(b,a.dV,(-1));return c;}
function AKX(a){return D(236);}
function HB(){var a=this;BY.call(a);a.no=0;a.eX=0;}
function AWi(a,b){var c=new HB();OP(c,a,b);return c;}
function OP(a,b,c){B2(a);a.no=b;a.eX=c;}
function AG3(a,b,c,d){var e,f,g,h;e=Gu(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.n){g=0;while(true){if(g>=X(e)){BP(d,a.eX,X(e));return C(a.b).a(b+X(e)|0,c,d);}h=R(e,g);f=b+g|0;c=C(c);if(h!=R(c,f)&&H5(R(e,g))!=R(c,f))break;g=g+1|0;}return (-1);}}return (-1);}
function APQ(a,b){a.b=b;}
function Gu(a,b){var c,d;c=a.no;b=C(b);d=F4(b,c);c=I2(b,c);return (c|d|(c-d|0))>=0&&c<=X(C(b.hO))?C(B7(C(b.hO),d,c)):null;}
function AGS(a){var b,c;b=a.C;c=new N;Q(c);V(C(L(c,D(237))),b);return O(c);}
function AP5(a,b){var c;c=a.eX;b=C(b);c=!Dq(b,c)?0:1;BP(b,a.eX,(-1));return c;}
var AEf=F(HB);
function ATZ(a,b){var c=new AEf();AR6(c,a,b);return c;}
function AR6(a,b,c){OP(a,b,c);}
function AJb(a,b,c,d){var e,f,g;e=Gu(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.n){g=C(c);f=!SS(g,e,b)?(-1):X(e);if(f<0)return (-1);BP(d,a.eX,f);return C(a.b).a(b+f|0,g,d);}}return (-1);}
function ARR(a,b,c,d){var e,f,g,h;e=Gu(a,d);d=C(d);f=d.bG;if(e!==null&&(b+X(e)|0)<=f){g=C(c);h=g;while(true){if(b>f)return (-1);b=PA(h,e,b);if(b<0)return (-1);if(C(a.b).a(b+X(e)|0,g,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AGN(a,b,c,d,e){var f,g,h;f=Gu(a,e);if(f===null)return (-1);d=C(d);g=d;a:{while(true){if(c<b)return (-1);h=PH(g,f,c);if(h<0)break a;if(h<b)break a;if(C(a.b).a(h+X(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function ANN(a,b){return 1;}
function ASc(a){var b,c;b=a.C;c=new N;Q(c);V(C(L(c,D(238))),b);return O(c);}
function Zr(){HB.call(this);this.tl=0;}
function AUL(a,b){var c=new Zr();AKM(c,a,b);return c;}
function AKM(a,b,c){OP(a,b,c);}
function ANd(a,b,c,d){var e,f,g,h;e=Gu(a,d);if(e!==null){f=b+X(e)|0;d=C(d);if(f<=d.n){f=0;while(true){if(f>=X(e)){BP(d,a.eX,X(e));return C(a.b).a(b+X(e)|0,c,d);}g=DU(Dw(R(e,f)));h=b+f|0;c=C(c);if(g!=DU(Dw(R(c,h))))break;f=f+1|0;}return (-1);}}return (-1);}
function AH6(a){var b,c;b=a.tl;c=new N;Q(c);V(C(L(c,D(239))),b);return O(c);}
var J2=F(GI);
function Ur(a,b){var c,d,e,f,g,h;c=0;b=C(b);d=X(b);e=a.t;if(c<=d&&d<=X(b)){Ck(a,e,(e+d|0)-c|0);while(c<d){f=a.q;g=e+1|0;h=R(b,c);f=C(f).data;f[B(e,f)]=h;c=c+1|0;e=g;}return a;}b=new Bg;Wd(b);J(b);}
function AKB(a,b,c,d,e){Nl(a,b,c,d,e);return a;}
function AHT(a,b,c,d){UY(a,b,c,d);return a;}
function AIn(a,b){N5(a,b);}
function AQ_(a,b,c){U7(a,b,c);return a;}
function AGo(a,b,c){LY(a,b,c);return a;}
function QV(){var a=this;BZ.call(a);a.bo=null;a.ki=null;a.lq=null;}
function AJx(a,b,c){return !KM(a,c,b)?(-1):a.ba;}
function AHE(a,b,c,d){var e,f,g,h,i;e=C(d);f=e.n;while(true){if(b>f)return (-1);g=R(C(a.bo),a.ba-1|0);h=c;a:{while(true){i=a.ba;if(b>(f-i|0)){b=(-1);break a;}i=(b+i|0)-1|0;h=C(h);i=R(h,i);if(i==g&&KM(a,h,b))break;b=b+RB(C(a.ki),i)|0;}}if(b<0)return (-1);if(C(a.b).a(b+a.ba|0,c,e)>=0)break;b=b+1|0;}return b;}
function AKT(a,b,c,d,e){var f,g,h;while(true){if(c<b)return (-1);f=R(C(a.bo),0);g=C(d);h=(X(g)-c|0)-a.ba|0;if(h<=0)c=c+h|0;a:{while(true){if(c<b){c=(-1);break a;}h=R(g,c);if(h==f&&KM(a,g,c))break;c=c-RB(C(a.lq),h)|0;}}if(c<0)return (-1);if(C(a.b).a(c+a.ba|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOY(a){var b,c;b=a.bo;c=new N;Q(c);L(C(L(c,D(240))),b);return O(c);}
function ALw(a,b){var c,d;if(b instanceof De)return C(W(b,De)).bR!=R(C(a.bo),0)?0:1;if(b instanceof C$)return MJ(C(W(b,C$)),0,B7(C(a.bo),0,1))<=0?0:1;if(!(b instanceof CG)){if(!(b instanceof C6))return 1;return X(C(a.bo))>1&&C(W(b,C6)).d_==DV(R(C(a.bo),0),R(C(a.bo),1))?1:0;}a:{b:{b=W(b,CG);c=R(C(a.bo),0);d=C(b);if(!d.h(c)){if(X(C(a.bo))<=1)break b;if(!d.h(DV(R(C(a.bo),0),R(C(a.bo),1))))break b;}c=1;break a;}c=0;}return c;}
function KM(a,b,c){var d,e;d=0;while(d<a.ba){e=d+c|0;b=C(b);if(R(b,e)!=R(C(a.bo),d))return 0;d=d+1|0;}return 1;}
function MR(){BZ.call(this);this.fV=null;}
function ANl(a,b,c){var d,e,f;d=0;while(true){if(d>=X(C(a.fV)))return X(C(a.fV));e=R(C(a.fV),d);f=b+d|0;c=C(c);if(e!=DU(Dw(R(c,f))))break;d=d+1|0;}return (-1);}
function ALF(a){var b,c;b=a.fV;c=new N;Q(c);L(C(L(c,D(241))),b);return O(c);}
function Nz(){BZ.call(this);this.eu=null;}
function AQI(a,b,c){var d,e,f;d=0;while(true){if(d>=X(C(a.eu)))return X(C(a.eu));e=R(C(a.eu),d);f=b+d|0;c=C(c);if(e!=R(c,f)&&H5(R(C(a.eu),d))!=R(c,f))break;d=d+1|0;}return (-1);}
function ARD(a){var b,c;b=a.eu;c=new N;Q(c);L(C(L(c,D(242))),b);return O(c);}
var AFI=F();
var HA=F();
var A3c=null;var A3d=null;var A2$=null;function AQg(){AQg=T(HA);AJT();}
function AJT(){var b,c,d,e,f;A3c=AVV();A3d=AUW();b=K($rt_arraycls(E),194);c=b.data;d=K(E,2);e=d.data;e[AWr(0,e)]=D(243);f=AWj();e[AWr(1,e)]=f;c[AWr(0,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(244);f=ATT();e[AWr(1,e)]=f;c[AWr(1,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(245);f=AVU();e[AWr(1,e)]=f;c[AWr(2,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(246);f=AV6();e[AWr(1,e)]=f;c[AWr(3,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(247);f=A3d;e[AWr(1,e)]=f;c[AWr(4,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(248);f=AU$();e[AWr(1,e)]=f;c[AWr(5,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(249);f=AUQ();e[AWr(1,e)]=f;c[AWr(6,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(250);f=AT3();e[AWr(1,e)]=f;c[AWr(7,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(251);f=ATY();e[AWr(1,e)]=f;c[AWr(8,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(252);f=AT8();e[AWr(1,e)]=f;c[AWr(9,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(253);f=AUs();e[AWr(1,e)]=f;c[AWr(10,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(254);f=AT6();e[AWr(1,e)]=f;c[AWr(11,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(255);f=AVu();e[AWr(1,e)]=f;c[AWr(12,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(256);f=ATQ();e[AWr(1,e)]=f;c[AWr(13,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(257);f=AV1();e[AWr(1,e)]=f;c[AWr(14,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(258);f=AUq();e[AWr(1,e)]=f;c[AWr(15,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(259);f=AU8();e[AWr(1,e)]=f;c[AWr(16,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(260);f=AUm();e[AWr(1,e)]=f;c[AWr(17,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(261);f=AU9();e[AWr(1,e)]=f;c[AWr(18,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(262);f=AUa();e[AWr(1,e)]=f;c[AWr(19,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(263);f=AV_();e[AWr(1,e)]=f;c[AWr(20,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(264);f=AUg();e[AWr(1,e)]=f;c[AWr(21,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(265);f=AVe();e[AWr(1,e)]=f;c[AWr(22,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(266);f=AVS();e[AWr(1,e)]=f;c[AWr(23,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(267);f=AVR();e[AWr(1,e)]=f;c[AWr(24,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(268);f=AV8();e[AWr(1,e)]=f;c[AWr(25,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(269);f=AT$();e[AWr(1,e)]=f;c[AWr(26,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(270);f=AVz();e[AWr(1,e)]=f;c[AWr(27,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(271);f=A3c;e[AWr(1,e)]=f;c[AWr(28,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(272);f=AVi();e[AWr(1,e)]=f;c[AWr(29,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(273);f=AT4();e[AWr(1,e)]=f;c[AWr(30,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(274);f=A3c;e[AWr(1,e)]=f;c[AWr(31,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(275);f=ATP();e[AWr(1,e)]=f;c[AWr(32,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(276);f=A3d;e[AWr(1,e)]=f;c[AWr(33,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(277);f=AUC();e[AWr(1,e)]=f;c[AWr(34,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(278);f=U(0,127);e[AWr(1,e)]=f;c[AWr(35,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(279);f=U(128,255);e[AWr(1,e)]=f;c[AWr(36,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(280);f=U(256,383);e[AWr(1,e)]=f;c[AWr(37,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(281);f=U(384,591);e[AWr(1,e)]=f;c[AWr(38,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(282);f=U(592,687);e[AWr(1,e)]=f;c[AWr(39,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(283);f=
U(688,767);e[AWr(1,e)]=f;c[AWr(40,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(284);f=U(768,879);e[AWr(1,e)]=f;c[AWr(41,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(285);f=U(880,1023);e[AWr(1,e)]=f;c[AWr(42,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(286);f=U(1024,1279);e[AWr(1,e)]=f;c[AWr(43,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(287);f=U(1280,1327);e[AWr(1,e)]=f;c[AWr(44,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(288);f=U(1328,1423);e[AWr(1,e)]=f;c[AWr(45,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(289);f=U(1424,1535);e[AWr(1,e)]=f;c[AWr(46,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(290);f=U(1536,1791);e[AWr(1,e)]=f;c[AWr(47,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(291);f=U(1792,1871);e[AWr(1,e)]=f;c[AWr(48,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(292);f=U(1872,1919);e[AWr(1,e)]=f;c[AWr(49,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(293);f=U(1920,1983);e[AWr(1,e)]=f;c[AWr(50,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(294);f=U(2304,2431);e[AWr(1,e)]=f;c[AWr(51,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(295);f=U(2432,2559);e[AWr(1,e)]=f;c[AWr(52,c)]=d;d=K(E,2);e=d.data;e[AWr(0,
e)]=D(296);f=U(2560,2687);e[AWr(1,e)]=f;c[AWr(53,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(297);f=U(2688,2815);e[AWr(1,e)]=f;c[AWr(54,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(298);f=U(2816,2943);e[AWr(1,e)]=f;c[AWr(55,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(299);f=U(2944,3071);e[AWr(1,e)]=f;c[AWr(56,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(300);f=U(3072,3199);e[AWr(1,e)]=f;c[AWr(57,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(301);f=U(3200,3327);e[AWr(1,e)]=f;c[AWr(58,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(302);f=U(3328,3455);e[AWr(1,
e)]=f;c[AWr(59,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(303);f=U(3456,3583);e[AWr(1,e)]=f;c[AWr(60,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(304);f=U(3584,3711);e[AWr(1,e)]=f;c[AWr(61,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(305);f=U(3712,3839);e[AWr(1,e)]=f;c[AWr(62,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(306);f=U(3840,4095);e[AWr(1,e)]=f;c[AWr(63,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(307);f=U(4096,4255);e[AWr(1,e)]=f;c[AWr(64,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(308);f=U(4256,4351);e[AWr(1,e)]=f;c[AWr(65,c)]=d;d=K(E,
2);e=d.data;e[AWr(0,e)]=D(309);f=U(4352,4607);e[AWr(1,e)]=f;c[AWr(66,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(310);f=U(4608,4991);e[AWr(1,e)]=f;c[AWr(67,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(311);f=U(4992,5023);e[AWr(1,e)]=f;c[AWr(68,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(312);f=U(5024,5119);e[AWr(1,e)]=f;c[AWr(69,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(313);f=U(5120,5759);e[AWr(1,e)]=f;c[AWr(70,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(314);f=U(5760,5791);e[AWr(1,e)]=f;c[AWr(71,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(315);f
=U(5792,5887);e[AWr(1,e)]=f;c[AWr(72,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(316);f=U(5888,5919);e[AWr(1,e)]=f;c[AWr(73,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(317);f=U(5920,5951);e[AWr(1,e)]=f;c[AWr(74,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(318);f=U(5952,5983);e[AWr(1,e)]=f;c[AWr(75,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(319);f=U(5984,6015);e[AWr(1,e)]=f;c[AWr(76,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(320);f=U(6016,6143);e[AWr(1,e)]=f;c[AWr(77,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(321);f=U(6144,6319);e[AWr(1,e)]=
f;c[AWr(78,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(322);f=U(6400,6479);e[AWr(1,e)]=f;c[AWr(79,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(323);f=U(6480,6527);e[AWr(1,e)]=f;c[AWr(80,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(324);f=U(6528,6623);e[AWr(1,e)]=f;c[AWr(81,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(325);f=U(6624,6655);e[AWr(1,e)]=f;c[AWr(82,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(326);f=U(6656,6687);e[AWr(1,e)]=f;c[AWr(83,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(327);f=U(7424,7551);e[AWr(1,e)]=f;c[AWr(84,c)]=d;d=K(E,2);e
=d.data;e[AWr(0,e)]=D(328);f=U(7552,7615);e[AWr(1,e)]=f;c[AWr(85,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(329);f=U(7616,7679);e[AWr(1,e)]=f;c[AWr(86,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(330);f=U(7680,7935);e[AWr(1,e)]=f;c[AWr(87,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(331);f=U(7936,8191);e[AWr(1,e)]=f;c[AWr(88,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(332);f=U(8192,8303);e[AWr(1,e)]=f;c[AWr(89,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(333);f=U(8304,8351);e[AWr(1,e)]=f;c[AWr(90,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(334);f
=U(8352,8399);e[AWr(1,e)]=f;c[AWr(91,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(335);f=U(8400,8447);e[AWr(1,e)]=f;c[AWr(92,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(336);f=U(8448,8527);e[AWr(1,e)]=f;c[AWr(93,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(337);f=U(8528,8591);e[AWr(1,e)]=f;c[AWr(94,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(338);f=U(8592,8703);e[AWr(1,e)]=f;c[AWr(95,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(339);f=U(8704,8959);e[AWr(1,e)]=f;c[AWr(96,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(340);f=U(8960,9215);e[AWr(1,e)]=
f;c[AWr(97,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(341);f=U(9216,9279);e[AWr(1,e)]=f;c[AWr(98,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(342);f=U(9280,9311);e[AWr(1,e)]=f;c[AWr(99,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(343);f=U(9312,9471);e[AWr(1,e)]=f;c[AWr(100,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(344);f=U(9472,9599);e[AWr(1,e)]=f;c[AWr(101,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(345);f=U(9600,9631);e[AWr(1,e)]=f;c[AWr(102,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(346);f=U(9632,9727);e[AWr(1,e)]=f;c[AWr(103,c)]=d;d=K(E,
2);e=d.data;e[AWr(0,e)]=D(347);f=U(9728,9983);e[AWr(1,e)]=f;c[AWr(104,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(348);f=U(9984,10175);e[AWr(1,e)]=f;c[AWr(105,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(349);f=U(10176,10223);e[AWr(1,e)]=f;c[AWr(106,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(350);f=U(10224,10239);e[AWr(1,e)]=f;c[AWr(107,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(351);f=U(10240,10495);e[AWr(1,e)]=f;c[AWr(108,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(352);f=U(10496,10623);e[AWr(1,e)]=f;c[AWr(109,c)]=d;d=K(E,2);e=d.data;e[AWr(0,
e)]=D(353);f=U(10624,10751);e[AWr(1,e)]=f;c[AWr(110,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(354);f=U(10752,11007);e[AWr(1,e)]=f;c[AWr(111,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(355);f=U(11008,11263);e[AWr(1,e)]=f;c[AWr(112,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(356);f=U(11264,11359);e[AWr(1,e)]=f;c[AWr(113,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(357);f=U(11392,11519);e[AWr(1,e)]=f;c[AWr(114,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(358);f=U(11520,11567);e[AWr(1,e)]=f;c[AWr(115,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(359);f
=U(11568,11647);e[AWr(1,e)]=f;c[AWr(116,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(360);f=U(11648,11743);e[AWr(1,e)]=f;c[AWr(117,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(361);f=U(11776,11903);e[AWr(1,e)]=f;c[AWr(118,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(362);f=U(11904,12031);e[AWr(1,e)]=f;c[AWr(119,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(363);f=U(12032,12255);e[AWr(1,e)]=f;c[AWr(120,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(364);f=U(12272,12287);e[AWr(1,e)]=f;c[AWr(121,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(365);f=U(12288,
12351);e[AWr(1,e)]=f;c[AWr(122,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(366);f=U(12352,12447);e[AWr(1,e)]=f;c[AWr(123,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(367);f=U(12448,12543);e[AWr(1,e)]=f;c[AWr(124,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(368);f=U(12544,12591);e[AWr(1,e)]=f;c[AWr(125,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(369);f=U(12592,12687);e[AWr(1,e)]=f;c[AWr(126,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(370);f=U(12688,12703);e[AWr(1,e)]=f;c[AWr(127,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(371);f=U(12704,12735);e[AWr(1,
e)]=f;c[AWr(128,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(372);f=U(12736,12783);e[AWr(1,e)]=f;c[AWr(129,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(373);f=U(12784,12799);e[AWr(1,e)]=f;c[AWr(130,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(374);f=U(12800,13055);e[AWr(1,e)]=f;c[AWr(131,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(375);f=U(13056,13311);e[AWr(1,e)]=f;c[AWr(132,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(376);f=U(13312,19893);e[AWr(1,e)]=f;c[AWr(133,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(377);f=U(19904,19967);e[AWr(1,e)]=f;c[AWr(134,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(378);f=U(19968,40959);e[AWr(1,e)]=f;c[AWr(135,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(379);f=U(40960,42127);e[AWr(1,e)]=f;c[AWr(136,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(380);f=U(42128,42191);e[AWr(1,e)]=f;c[AWr(137,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(381);f=U(42752,42783);e[AWr(1,e)]=f;c[AWr(138,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(382);f=U(43008,43055);e[AWr(1,e)]=f;c[AWr(139,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(383);f=U(44032,55203);e[AWr(1,e)]=f;c[AWr(140,c)]=d;d=
K(E,2);e=d.data;e[AWr(0,e)]=D(384);f=U(55296,56191);e[AWr(1,e)]=f;c[AWr(141,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(385);f=U(56192,56319);e[AWr(1,e)]=f;c[AWr(142,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(386);f=U(56320,57343);e[AWr(1,e)]=f;c[AWr(143,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(387);f=U(57344,63743);e[AWr(1,e)]=f;c[AWr(144,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(388);f=U(63744,64255);e[AWr(1,e)]=f;c[AWr(145,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(389);f=U(64256,64335);e[AWr(1,e)]=f;c[AWr(146,c)]=d;d=K(E,2);e
=d.data;e[AWr(0,e)]=D(390);f=U(64336,65023);e[AWr(1,e)]=f;c[AWr(147,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(391);f=U(65024,65039);e[AWr(1,e)]=f;c[AWr(148,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(392);f=U(65040,65055);e[AWr(1,e)]=f;c[AWr(149,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(393);f=U(65056,65071);e[AWr(1,e)]=f;c[AWr(150,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(394);f=U(65072,65103);e[AWr(1,e)]=f;c[AWr(151,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(395);f=U(65104,65135);e[AWr(1,e)]=f;c[AWr(152,c)]=d;d=K(E,2);e=d.data;e[AWr(0,
e)]=D(396);f=U(65136,65279);e[AWr(1,e)]=f;c[AWr(153,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(397);f=U(65280,65519);e[AWr(1,e)]=f;c[AWr(154,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(27);f=U(0,1114111);e[AWr(1,e)]=f;c[AWr(155,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(398);f=AT7();e[AWr(1,e)]=f;c[AWr(156,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(399);f=BW(0,1);e[AWr(1,e)]=f;c[AWr(157,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(400);f=Jd(62,1);e[AWr(1,e)]=f;c[AWr(158,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(401);f=BW(1,1);e[AWr(1,e)]=
f;c[AWr(159,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(402);f=BW(2,1);e[AWr(1,e)]=f;c[AWr(160,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(403);f=BW(3,0);e[AWr(1,e)]=f;c[AWr(161,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(404);f=BW(4,0);e[AWr(1,e)]=f;c[AWr(162,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(405);f=BW(5,1);e[AWr(1,e)]=f;c[AWr(163,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(406);f=Jd(448,1);e[AWr(1,e)]=f;c[AWr(164,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(407);f=BW(6,1);e[AWr(1,e)]=f;c[AWr(165,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=
D(408);f=BW(7,0);e[AWr(1,e)]=f;c[AWr(166,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(409);f=BW(8,1);e[AWr(1,e)]=f;c[AWr(167,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(410);f=Jd(3584,1);e[AWr(1,e)]=f;c[AWr(168,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(411);f=BW(9,1);e[AWr(1,e)]=f;c[AWr(169,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(412);f=BW(10,1);e[AWr(1,e)]=f;c[AWr(170,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(413);f=BW(11,1);e[AWr(1,e)]=f;c[AWr(171,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(414);f=Jd(28672,0);e[AWr(1,e)]=f;c[AWr(172,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(415);f=BW(12,0);e[AWr(1,e)]=f;c[AWr(173,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(416);f=BW(13,0);e[AWr(1,e)]=f;c[AWr(174,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(417);f=BW(14,0);e[AWr(1,e)]=f;c[AWr(175,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(418);f=AUN(983040,1,1);e[AWr(1,e)]=f;c[AWr(176,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(419);f=BW(15,0);e[AWr(1,e)]=f;c[AWr(177,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(420);f=BW(16,1);e[AWr(1,e)]=f;c[AWr(178,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(421);f
=BW(18,1);e[AWr(1,e)]=f;c[AWr(179,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(422);f=AU4(19,0,1);e[AWr(1,e)]=f;c[AWr(180,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(423);f=Jd(1643118592,1);e[AWr(1,e)]=f;c[AWr(181,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(424);f=BW(20,0);e[AWr(1,e)]=f;c[AWr(182,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(425);f=BW(21,0);e[AWr(1,e)]=f;c[AWr(183,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(426);f=BW(22,0);e[AWr(1,e)]=f;c[AWr(184,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(427);f=BW(23,0);e[AWr(1,e)]=f;c[AWr(185,
c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(428);f=BW(24,1);e[AWr(1,e)]=f;c[AWr(186,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(429);f=Jd(2113929216,1);e[AWr(1,e)]=f;c[AWr(187,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(430);f=BW(25,1);e[AWr(1,e)]=f;c[AWr(188,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(431);f=BW(26,0);e[AWr(1,e)]=f;c[AWr(189,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(432);f=BW(27,0);e[AWr(1,e)]=f;c[AWr(190,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(433);f=BW(28,1);e[AWr(1,e)]=f;c[AWr(191,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=
D(434);f=BW(29,0);e[AWr(1,e)]=f;c[AWr(192,c)]=d;d=K(E,2);e=d.data;e[AWr(0,e)]=D(435);f=BW(30,0);e[AWr(1,e)]=f;c[AWr(193,c)]=d;A2$=b;}
function MN(){BZ.call(this);this.k2=0;}
function AQM(a,b,c){var d,e;d=b+1|0;c=C(c);e=R(c,b);d=R(c,d);return a.k2!=FW(FU(DV(e,d)))?(-1):2;}
function ATB(a){var b,c;b=HQ(FP(a.k2));c=new N;Q(c);L(C(L(c,D(222))),b);return O(c);}
function IE(){BY.call(this);this.dP=0;}
function AOu(a){var b=new IE();AIi(b,a);return b;}
function AIi(a,b){B2(a);a.dP=b;}
function AO1(a,b){a.b=b;}
function AI1(a,b,c,d){var e,f;e=b+1|0;d=C(d);if(e>d.n){d.b2=1;return (-1);}c=C(c);f=R(c,b);if(b>d.bG&&Ce(R(c,b-1|0)))return (-1);if(a.dP!=f)return (-1);return C(a.b).a(e,c,d);}
function ALs(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BB))return Ic(a,b,c,d);e=C(d);f=e.bG;g=e.n;h=c;while(true){if(b>=g)return (-1);i=a.dP;h=C(h);i=DP(h,i,b);if(i<0)return (-1);if(i>f&&Ce(R(h,i-1|0))){b=i+1|0;continue;}d=a.b;b=i+1|0;if(C(d).a(b,c,e)>=0)break;}return i;}
function AJG(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BB))return Ip(a,b,c,d,e);f=C(e);g=f.bG;h=d;a:{while(true){if(c<b)return (-1);i=a.dP;h=C(h);c=Gm(h,i,c);if(c<0)break a;if(c<b)break a;if(c>g&&Ce(R(h,c-1|0))){c=c+(-2)|0;continue;}if(C(a.b).a(c+1|0,d,f)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ARg(a){var b,c;b=a.dP;c=new N;Q(c);Be(c,b);return O(c);}
function AGH(a,b){if(b instanceof De)return 0;if(b instanceof C$)return 0;if(b instanceof CG)return 0;if(b instanceof C6)return 0;if(b instanceof IP)return 0;if(!(b instanceof IE))return 1;return C(W(b,IE)).dP!=a.dP?0:1;}
function ARp(a,b){return 1;}
function IP(){BY.call(this);this.dx=0;}
function ALU(a){var b=new IP();AOH(b,a);return b;}
function AOH(a,b){B2(a);a.dx=b;}
function AIl(a,b){a.b=b;}
function AGe(a,b,c,d){var e,f,g,h,i;d=C(d);e=d.n;f=b+1|0;g=Cz(f,e);if(g>0){d.b2=1;return (-1);}h=C(c);i=R(h,b);if(g<0&&Cc(R(h,f)))return (-1);if(a.dx!=i)return (-1);return C(a.b).a(f,h,d);}
function APm(a,b,c,d){var e,f,g,h;if(!(c instanceof BB))return Ic(a,b,c,d);e=C(d);f=e.n;g=c;while(true){if(b>=f)return (-1);h=a.dx;g=C(g);h=DP(g,h,b);if(h<0)return (-1);b=h+1|0;if(b<f&&Cc(R(g,b))){b=h+2|0;continue;}if(C(a.b).a(b,c,e)>=0)break;}return h;}
function AQG(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BB))return Ip(a,b,c,d,e);f=C(e);g=f.n;h=d;a:{while(true){if(c<b)return (-1);i=a.dx;h=C(h);c=Gm(h,i,c);if(c<0)break a;if(c<b)break a;i=c+1|0;if(i<g&&Cc(R(h,i))){c=c+(-1)|0;continue;}if(C(a.b).a(i,d,f)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AS7(a){var b,c;b=a.dx;c=new N;Q(c);Be(c,b);return O(c);}
function AJy(a,b){if(b instanceof De)return 0;if(b instanceof C$)return 0;if(b instanceof CG)return 0;if(b instanceof C6)return 0;if(b instanceof IE)return 0;if(!(b instanceof IP))return 1;return C(W(b,IP)).dx!=a.dx?0:1;}
function APv(a,b){return 1;}
function C6(){var a=this;BZ.call(a);a.gv=0;a.fu=0;a.d_=0;}
function AP6(a,b,c){var d,e;d=b+1|0;c=C(c);e=R(c,b);d=R(c,d);return a.gv==e&&a.fu==d?2:(-1);}
function AOb(a,b,c,d){var e,f,g,h;if(!(c instanceof BB))return Ic(a,b,c,d);e=C(d);f=e.n;g=c;while(b<f){h=a.gv;g=C(g);b=DP(g,h,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;h=R(g,b);if(a.fu==h&&C(a.b).a(b+1|0,c,e)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AIj(a,b,c,d,e){var f,g;if(!(d instanceof BB))return Ip(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=a.fu;f=C(f);c=Gm(f,g,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.gv==R(f,c)&&C(a.b).a(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ASf(a){var b,c,d;b=a.gv;c=a.fu;d=new N;Q(d);Be(d,b);Be(d,c);return O(d);}
function APW(a,b){if(b instanceof C6)return C(W(b,C6)).d_!=a.d_?0:1;if(b instanceof CG)return C(W(b,CG)).h(a.d_);if(b instanceof De)return 0;if(!(b instanceof C$))return 1;return 0;}
var Tt=F(E$);
function AIx(a,b){return b!=10?0:1;}
function AP1(a,b,c){return b!=10?0:1;}
var Tu=F(E$);
function AQT(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ASG(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACH(){var a=this;E.call(a);a.mM=null;a.jc=null;a.fk=0;a.sv=0;}
function AOp(a){var b=new ACH();AL7(b,a);return b;}
function AL7(a,b){var c,d;while(true){c=a.fk;if(b<c)break;a.fk=c<<1|1;}d=c<<1|1;a.fk=d;d=d+1|0;a.mM=Bk(d);a.jc=Bk(d);a.sv=b;}
function QD(a,b,c){var d,e,f,g;d=0;e=a.fk;f=b&e;a:{while(true){g=C(a.mM).data;f=B(f,g);if(!g[f])break;f=AWr(f,g);if(g[f]==b)break a;d=(d+1|0)&e;f=(f+d|0)&e;}}f=AWr(f,g);g[f]=b;g=C(a.jc).data;g[AWr(f,g)]=c;}
function RB(a,b){var c,d,e,f,g,h;c=a.fk;d=b&c;e=0;while(true){f=C(a.mM).data;g=B(d,f);h=f[g];if(!h)break;if(h==b){f=C(a.jc).data;return f[AWr(g,f)];}e=(e+1|0)&c;d=(g+e|0)&c;}return a.sv;}
var XM=F();
var Xd=F();
function Zj(b){var c,d,e,f,g,h,i,j;c=AQv(Ix(C(b)));d=J6(c);e=Bk(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+J6(c)|0;i=B(g*2|0,h);h[i]=f;j=i+1|0;i=Np(c);h[B(j,h)]=i;g=g+1|0;}return e;}
function VR(b){var c,d,e,f,g,h,i,j,k,l,m;c=Bk(65536);d=0;e=0;f=0;a:{while(true){b=C(b);g=b.data;if(f>=g.length)break;h=c.data;i=B(f,g);j=g[i];k=g[B(i+1|0,g)];l=h.length;if(j<l)l=j;else if(j==d)break a;Yl(c,d,l,e);f=i+2|0;d=l;e=k;}}m=new TL;m.pT=b;m.p8=c;return m;}
function KZ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ATK(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=K(JI,16384);d=CE(16384);e=0;f=0;g=0;h=0;while(true){b=C(b);if(h>=X(b))break;i=KZ(R(b,h));if(i==64){h=h+1|0;i=KZ(R(b,h));j=0;k=1;l=0;while(l<3){h=h+1|0;j=j|DO(k,KZ(R(b,h)));k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=KZ(R(b,h));}if(!i&&j>=128){if(e>0){k=f+1|0;m=AKC(g,g+e|0,UB(d,e));c=C(c);n=c.data;n[B(f,n)]=m;f=k;}g=g+(e+j|0)|0;e=0;}else{k=e+j|0;d=C(d);n=d.data;if(k<n.length)l=f;else{l=f+1|0;m=AKC(g,g+e|0,UB(d,e));c=C(c);o=c.data;o[B(f,
o)]=m;g=g+k|0;e=0;}while(true){p=j+(-1)|0;if(j<=0)break;j=e+1|0;n[B(e,n)]=i;e=j;j=p;}f=l;}h=h+1|0;}return Dm(KU(c,f),$rt_arraycls(JI));}
var Wm=F();
function ACZ(){var a=this;E.call(a);a.n6=null;a.pv=0;}
function AQv(a){var b=new ACZ();AJB(b,a);return b;}
function AJB(a,b){a.n6=b;}
var Zc=F();
function J6(b){var c,d,e,f,g;c=0;d=1;while(true){b=C(b);e=b.n6;f=b.pv;b.pv=f+1|0;e=C(e).data;g=e[B(f,e)];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+DO(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Np(b){var c,d;c=J6(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Lg=F(Bf);
function AVV(){var a=new Lg();ALO(a);return a;}
function ALO(a){}
function ZA(a){return Cv(C(B4(Dr(),9,13)),32);}
var Kk=F(Bf);
function AUW(){var a=new Kk();ARh(a);return a;}
function ARh(a){}
function AAU(a){return B4(Dr(),48,57);}
var ACE=F(Bf);
function AWj(){var a=new ACE();AK$(a);return a;}
function AK$(a){}
function AQr(a){return B4(Dr(),97,122);}
var ADi=F(Bf);
function ATT(){var a=new ADi();AMb(a);return a;}
function AMb(a){}
function ARr(a){return B4(Dr(),65,90);}
var ADl=F(Bf);
function AVU(){var a=new ADl();AHG(a);return a;}
function AHG(a){}
function AKa(a){return B4(Dr(),0,127);}
var La=F(Bf);
function AV6(){var a=new La();AJd(a);return a;}
function AJd(a){}
function Xq(a){return B4(C(B4(Dr(),97,122)),65,90);}
var LK=F(La);
function AU$(){var a=new LK();ALY(a);return a;}
function ALY(a){}
function YE(a){return B4(C(Xq(a)),48,57);}
var AFA=F(Bf);
function AUQ(){var a=new AFA();ANW(a);return a;}
function ANW(a){}
function ALr(a){return B4(C(B4(C(B4(Dr(),33,64)),91,96)),123,126);}
var MD=F(LK);
function AT3(){var a=new MD();APJ(a);return a;}
function APJ(a){}
function VH(a){return B4(C(B4(C(B4(C(YE(a)),33,64)),91,96)),123,126);}
var Z3=F(MD);
function ATY(){var a=new Z3();AQ6(a);return a;}
function AQ6(a){}
function ANK(a){return Cv(C(VH(a)),32);}
var AAG=F(Bf);
function AT8(){var a=new AAG();AQJ(a);return a;}
function AQJ(a){}
function AJr(a){return Cv(C(Cv(Dr(),32)),9);}
var XV=F(Bf);
function AUs(){var a=new XV();ASx(a);return a;}
function ASx(a){}
function ANH(a){return Cv(C(B4(Dr(),0,31)),127);}
var XC=F(Bf);
function AT6(){var a=new XC();AH3(a);return a;}
function AH3(a){}
function ASK(a){return B4(C(B4(C(B4(Dr(),48,57)),97,102)),65,70);}
var ADq=F(Bf);
function AVu(){var a=new ADq();AHq(a);return a;}
function AHq(a){}
function AOn(a){var b;b=new RQ;b.v4=a;Bx(b);b.A=1;return b;}
var AFL=F(Bf);
function ATQ(){var a=new AFL();APZ(a);return a;}
function APZ(a){}
function AF4(a){var b;b=new MY;b.wr=a;Bx(b);b.A=1;return b;}
var ACI=F(Bf);
function AV1(){var a=new ACI();AHJ(a);return a;}
function AHJ(a){}
function ALW(a){var b;b=new Q$;b.u8=a;Bx(b);return b;}
var ACq=F(Bf);
function AUq(){var a=new ACq();ANI(a);return a;}
function ANI(a){}
function AP$(a){var b;b=new Q9;b.uy=a;Bx(b);return b;}
var ADY=F(Bf);
function AU8(){var a=new ADY();AI$(a);return a;}
function AI$(a){}
function AJo(a){var b;b=new Ux;b.ym=a;Bx(b);Is(C(b.z),0,2048);b.A=1;return b;}
var WM=F(Bf);
function AUm(){var a=new WM();AIt(a);return a;}
function AIt(a){}
function AJN(a){var b;b=new OT;b.wZ=a;Bx(b);b.A=1;return b;}
var V$=F(Bf);
function AU9(){var a=new V$();ANh(a);return a;}
function ANh(a){}
function ASC(a){var b;b=new N$;b.za=a;Bx(b);b.A=1;return b;}
var ACS=F(Bf);
function AUa(){var a=new ACS();ANX(a);return a;}
function ANX(a){}
function AFV(a){var b;b=new Qm;b.v6=a;Bx(b);return b;}
var AC9=F(Bf);
function AV_(){var a=new AC9();ALE(a);return a;}
function ALE(a){}
function AMF(a){var b;b=new MU;b.sS=a;Bx(b);b.A=1;return b;}
var Yo=F(Bf);
function AUg(){var a=new Yo();AGT(a);return a;}
function AGT(a){}
function AJV(a){var b;b=new MX;b.w8=a;Bx(b);b.A=1;return b;}
var AAM=F(Bf);
function AVe(){var a=new AAM();AIE(a);return a;}
function AIE(a){}
function AKY(a){var b;b=new N0;b.yi=a;Bx(b);b.A=1;return b;}
var AE3=F(Bf);
function AVS(){var a=new AE3();AMS(a);return a;}
function AMS(a){}
function AMK(a){var b;b=new Pk;b.yH=a;Bx(b);b.A=1;return b;}
var AC6=F(Bf);
function AVR(){var a=new AC6();AOe(a);return a;}
function AOe(a){}
function ARN(a){var b;b=new Pp;b.vp=a;Bx(b);return b;}
var Zl=F(Bf);
function AV8(){var a=new Zl();AIu(a);return a;}
function AIu(a){}
function APD(a){var b;b=new Sn;b.xp=a;Bx(b);return b;}
var Yn=F(Bf);
function AT$(){var a=new Yn();AQa(a);return a;}
function AQa(a){}
function AOd(a){var b;b=new Ru;b.sY=a;Bx(b);b.A=1;return b;}
var AFG=F(Bf);
function AVz(){var a=new AFG();ALB(a);return a;}
function ALB(a){}
function AQl(a){var b;b=new M9;b.zx=a;Bx(b);b.A=1;return b;}
var JJ=F(Bf);
function AVi(){var a=new JJ();AJ4(a);return a;}
function AJ4(a){}
function AAJ(a){return Cv(C(B4(C(B4(C(B4(Dr(),97,122)),65,90)),48,57)),95);}
var AD6=F(JJ);
function AT4(){var a=new AD6();ALH(a);return a;}
function ALH(a){}
function ANZ(a){var b;b=C(EO(C(AAJ(a)),1));b.A=1;return b;}
var AAd=F(Lg);
function ATP(){var a=new AAd();ASg(a);return a;}
function ASg(a){}
function AHB(a){var b;b=C(EO(C(ZA(a)),1));b.A=1;return b;}
var Yj=F(Kk);
function AUC(){var a=new Yj();AMs(a);return a;}
function AMs(a){}
function ALi(a){var b;b=C(EO(C(AAU(a)),1));b.A=1;return b;}
function XK(){var a=this;Bf.call(a);a.pq=0;a.pR=0;}
function U(a,b){var c=new XK();ASz(c,a,b);return c;}
function ASz(a,b,c){a.pq=b;a.pR=c;}
function AM3(a){return B4(Dr(),a.pq,a.pR);}
var Yc=F(Bf);
function AT7(){var a=new Yc();AST(a);return a;}
function AST(a){}
function ASt(a){return B4(C(B4(Dr(),65279,65279)),65520,65533);}
function ZN(){var a=this;Bf.call(a);a.mc=0;a.iW=0;a.os=0;}
function BW(a,b){var c=new ZN();AI4(c,a,b);return c;}
function AU4(a,b,c){var d=new ZN();ASB(d,a,b,c);return d;}
function AI4(a,b,c){a.iW=c;a.mc=b;}
function ASB(a,b,c,d){a.os=d;a.iW=c;a.mc=b;}
function AKE(a){var b;b=AWf(a.mc);if(a.os)Is(C(b.z),0,2048);b.A=a.iW;return b;}
function Z4(){var a=this;Bf.call(a);a.mb=0;a.jf=0;a.nt=0;}
function Jd(a,b){var c=new Z4();AJW(c,a,b);return c;}
function AUN(a,b,c){var d=new Z4();AFX(d,a,b,c);return d;}
function AJW(a,b,c){a.jf=c;a.mb=b;}
function AFX(a,b,c,d){a.nt=d;a.jf=c;a.mb=b;}
function AFW(a){var b;b=new Q2;ABU(b,a.mb);if(a.nt)Is(C(b.z),0,2048);b.A=a.jf;return b;}
function TL(){var a=this;E.call(a);a.pT=null;a.p8=null;}
function JI(){var a=this;E.call(a);a.oS=0;a.p6=0;a.o0=null;}
function AKC(a,b,c){var d=new JI();AQ5(d,a,b,c);return d;}
function AQ5(a,b,c,d){a.oS=b;a.p6=c;a.o0=d;}
function P5(){var a=this;CS.call(a);a.oa=null;a.n5=0;a.d8=null;}
function AQ9(a,b){}
function AJ0(a,b){var c,d;b=EX();c=a.oa;d=new N;Q(d);L(C(L(d,D(436))),c);c=O(d);D2(C(b),c);}
function Ww(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=C(K7(C(c),D(95))).data;e=d.length;f=0;while(true){if(f>=e){a:{c=C(a.d8);c.k3=C(c.hb).e;if(a.n5){e=0;while(true){b=C(C(a.d8).hb);if(e>=b.e)break a;g=W(CK(b,e),Lh);c=C(a.d8);h=C(g);g=h.kE;if(!Ej(C(c.f7),g)&&!Ej(C(c.fO),g)&&!Ej(C(c.gd),g)&&!Ej(C(c.hX),g)&&!Ej(C(c.lE),g)?0:1){h.o7=h.rP;h.lN=1;h.ku=0;h.fU=0;}else if(!h.fU)b:{h.ku=0;h.lN=0;h.fU=1;i=h.kE;j=h.oz;k=h.oi;l=new P6;l.zb=c;l.gQ=h;b=A2h;g=KH(c);h=new N;Q(h);L(C(L(h,g)),i);g=O(h);h=new P4;h.qm=c;h.iC=l;h.rt
=j;h.ps=i;l=C(b);AVT();d=A3e;b=C(j);f=b.r;d=C(d).data;switch(d[B(f,d)]){case 1:break;case 2:b=null;c=new Ni;c.gH=l;c.fa=h;c.oX=b;c.sh=k;Gs(l,1,g,c);break b;case 3:Gs(l,1,g,h);break b;case 4:Y$(l,1,g,h);break b;case 5:Li(h,g,null);break b;default:c=new BU;g=new N;Q(g);L(C(L(g,D(437))),b);Ye(c,O(g));J(c);}HU(l,1,g,h);}e=e+1|0;}}}return 0;}f=B$(f);m=C(K7(C(d[f]),D(93))).data;if(m.length!=4)break;k=m[AWr(0,m)];b=C(m[AWr(1,m)]);n=0;o=X(b)-1|0;c:{while(n<=o){if(R(b,n)>32)break c;n=n+1|0;}}while(n<=o&&R(b,o)<=32){o
=o+(-1)|0;}j=B7(b,n,o+1|0);b=m[AWr(2,m)];if(b===null){b=new BK;S(b,D(78));J(b);}p=AD5(b,0,X(b),10);l=m[AWr(3,m)];EV();i=A2V;k=C(k);if(Bn(k,D(438)))i=A2S;if(Bn(k,D(439)))i=A2U;if(Bn(k,D(440)))i=A2T;if(Bn(k,D(276)))i=A3f;if(i===A2T&&!C(A2h).rl)p=Cs;g=new Lh;g.kE=j;g.oz=i;g.rP=p;g.oi=l;Bt(C(C(a.d8).oZ),j,j);CJ(C(C(a.d8).hb),g);f=f+1|0;}b=new BU;S(b,D(441));J(b);}
function AN8(a,b,c){return Ww(a,b,c);}
var BL=F(Bo);
var A2F=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=null;var A3m=null;var A3n=null;var A3o=null;function AIB(){AIB=T(BL);AGW();}
function DL(a,b,c){AIB();B_(a,b,c);}
function AGW(){var b,c,d,e;b=new TZ;DL(b,D(442),0);A2F=b;b=new T0;DL(b,D(443),1);A3g=b;b=new T5;DL(b,D(444),2);A3h=b;b=new T6;DL(b,D(445),3);A3i=b;b=new T3;DL(b,D(446),4);A3j=b;b=new T4;DL(b,D(447),5);A3k=b;b=new TV;DL(b,D(448),6);A3l=b;b=new TW;DL(b,D(449),7);A3m=b;b=new TU;DL(b,D(450),8);A3n=b;c=K(BL,9);d=c.data;e=A2F;d[AWr(0,d)]=e;e=A3g;d[AWr(1,d)]=e;e=A3h;d[AWr(2,d)]=e;e=A3i;d[AWr(3,d)]=e;e=A3j;d[AWr(4,d)]=e;e=A3k;d[AWr(5,d)]=e;e=A3l;d[AWr(6,d)]=e;e=A3m;d[AWr(7,d)]=e;d[AWr(8,d)]=b;A3o=c;}
var AFm=F(0);
function ALK(b){var c,d;a:{b:{c=C(b);if(Bn(c,D(451)))break b;if(Bn(c,D(452)))break b;if(Bn(c,D(453)))break b;if(Bn(c,D(454)))break b;if(Bn(c,D(455)))break b;if(Bn(c,D(456)))break b;if(Bn(c,D(457)))break b;if(Bn(c,D(458)))break b;if(!Bn(c,D(459))){d=0;break a;}}d=1;}return d;}
var S3=F(0);
var Ya=F();
function ASw(a,b,c){a.zY($rt_str(b),CY(c,"handleEvent"));}
function AOw(a,b){return !!a.Dc(b);}
function AIm(a,b,c){a.xi($rt_str(b),CY(c,"handleEvent"));}
function AMm(a,b,c,d){a.z6($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function AQY(a,b,c,d){a.C7($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function Sz(){var a=this;E.call(a);a.kn=null;a.mW=null;a.gY=null;a.m4=0;a.id=null;}
function ANw(a,b){var c,d,e;c=b.target;d=null;e=a.kn;EV();if(e!==A2U&&e!==A2T){if(e===A2S){b=$rt_globals.window.document.createElement("img");d=$rt_ustr($rt_str(c.result));b.src=d;e=c.result;d=Y9(e,new $rt_globals.Int8Array(e));d.lU=b;}else if(e===A2V)d=$rt_str(c.result);}else{b=c.result;d=Y9(b,new $rt_globals.Int8Array(b));}if(d!==null){Na(C(C(a.id).oo),a.kn,a.mW,d);CJ(C(a.gY),a.mW);if(C(a.gY).e==a.m4){b=C(a.id).nI;d=new Nb;d.li=a;CJ(C(C(b).gc),d);}}}
function Es(){Bo.call(this);this.xs=null;}
var A2S=null;var A2T=null;var A2V=null;var A2U=null;var A3f=null;var A3p=null;function EV(){EV=T(Es);AOM();}
function Kt(a,b,c){var d=new Es();Zs(d,a,b,c);return d;}
function OO(){EV();return C(A3p).ck();}
function Zs(a,b,c,d){EV();B_(a,b,c);a.xs=d;}
function AOM(){var b,c,d,e;A2S=Kt(D(460),0,D(438));A2T=Kt(D(461),1,D(440));A2V=Kt(D(462),2,D(463));A2U=Kt(D(464),3,D(439));b=Kt(D(465),4,D(276));A3f=b;c=K(Es,5);d=c.data;e=A2S;d[AWr(0,d)]=e;e=A2T;d[AWr(1,d)]=e;e=A2V;d[AWr(2,d)]=e;e=A2U;d[AWr(3,d)]=e;d[AWr(4,d)]=b;A3p=c;}
function Uf(){var a=this;Ba.call(a);a.nL=null;a.yr=null;}
function AKi(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bm^Dx(C(a.nL),c):0;}
function Ud(){var a=this;Ba.call(a);a.rp=null;a.rQ=null;a.xE=null;}
function AGs(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bm^Dx(C(a.rp),c):0;return C(a.rQ).h(b)&&!d?1:0;}
function On(){var a=this;Ba.call(a);a.hj=null;a.s6=null;}
function AMU(a,b){return a.L^Dx(C(a.hj),b);}
function AK4(a){var b,c,d,e;b=new N;Q(b);c=HM(C(a.hj),0);while(c>=0){IT(b,FP(c));Be(b,124);d=a.hj;c=c+1|0;c=HM(C(d),c);}e=b.t;if(e>0)T$(b,e-1|0);return O(b);}
function Ov(){var a=this;Ba.call(a);a.pG=null;a.wm=null;}
function AP8(a,b){return C(a.pG).h(b);}
function Ot(){var a=this;Ba.call(a);a.i1=0;a.oj=null;a.kB=null;}
function AQL(a,b){return !(a.i1^Dx(C(C(a.kB).v),b))&&!(a.i1^C(a.kB).ci^C(a.oj).h(b))?0:1;}
function Ou(){var a=this;Ba.call(a);a.jd=0;a.rC=null;a.lJ=null;}
function ANk(a,b){return !(a.jd^Dx(C(C(a.lJ).v),b))&&!(a.jd^C(a.lJ).ci^C(a.rC).h(b))?1:0;}
function Oz(){var a=this;Ba.call(a);a.se=0;a.rG=null;a.ry=null;a.tV=null;}
function AJQ(a,b){return a.se^(!C(a.rG).h(b)&&!C(a.ry).h(b)?0:1);}
function OA(){var a=this;Ba.call(a);a.pN=0;a.pB=null;a.pb=null;a.zj=null;}
function AFO(a,b){return a.pN^(!C(a.pB).h(b)&&!C(a.pb).h(b)?0:1)?0:1;}
function Ox(){var a=this;Ba.call(a);a.o5=null;a.zt=null;}
function AK_(a,b){return C7(C(a.o5),b);}
function Oy(){var a=this;Ba.call(a);a.rO=null;a.un=null;}
function ANm(a,b){return C7(C(a.rO),b)?0:1;}
function OB(){var a=this;Ba.call(a);a.p1=null;a.pE=0;a.q2=null;}
function ARW(a,b){return !C7(C(a.p1),b)&&!(a.pE^Dx(C(C(a.q2).v),b))?0:1;}
function OC(){var a=this;Ba.call(a);a.qn=null;a.qw=0;a.qd=null;}
function AJg(a,b){return !C7(C(a.qn),b)&&!(a.qw^Dx(C(C(a.qd).v),b))?1:0;}
function Om(){var a=this;Ba.call(a);a.qZ=0;a.rB=null;a.rZ=null;a.tc=null;}
function ATN(a,b){return !(a.qZ^C(a.rB).h(b))&&!C7(C(a.rZ),b)?0:1;}
function O2(){var a=this;Ba.call(a);a.rX=0;a.ni=null;a.nu=null;a.ub=null;}
function ALe(a,b){return !(a.rX^C(a.ni).h(b))&&!C7(C(a.nu),b)?1:0;}
function Ok(){var a=this;Ba.call(a);a.oL=null;a.uw=null;}
function AJe(a,b){return C7(C(a.oL),b);}
function Ol(){var a=this;Ba.call(a);a.oQ=null;a.zc=null;}
function AKL(a,b){return C7(C(a.oQ),b)?0:1;}
function Oq(){var a=this;Ba.call(a);a.sb=null;a.qk=0;a.sK=null;}
function AMa(a,b){return C7(C(a.sb),b)&&a.qk^Dx(C(C(a.sK).v),b)?1:0;}
function Oj(){var a=this;Ba.call(a);a.qQ=null;a.pP=0;a.qi=null;}
function ARy(a,b){return C7(C(a.qQ),b)&&a.pP^Dx(C(C(a.qi).v),b)?0:1;}
function Oo(){var a=this;Ba.call(a);a.q4=0;a.nK=null;a.pL=null;a.tR=null;}
function AHX(a,b){return a.q4^C(a.nK).h(b)&&C7(C(a.pL),b)?1:0;}
function Op(){var a=this;Ba.call(a);a.qG=0;a.nc=null;a.qY=null;a.uE=null;}
function APr(a,b){return a.qG^C(a.nc).h(b)&&C7(C(a.qY),b)?0:1;}
function O6(){var a=this;E.call(a);a.c2=null;a.lI=null;a.bq=null;a.bB=0;}
function Ds(){var a=this;E.call(a);a.zl=null;a.y9=Cs;a.wd=Cs;a.gS=null;a.oA=null;a.uJ=null;a.gL=0;a.zp=null;}
var A3q=null;var A3r=null;var A3s=0;var A3t=0;var A3u=null;function Fu(){Fu=T(Ds);AHw();}
function A3v(){var a=new Ds();Mt(a);return a;}
function A3w(a,b){var c=new Ds();LS(c,a,b);return c;}
function Mt(a){Fu();LS(a,null,null);}
function LS(a,b,c){var d;Fu();a.gS=new E;a.gL=1;a.uJ=c;a.zp=b;d=A3s;A3s=d+1|0;a.y9=Bc(d);}
function Ne(a){var b;b=new TC;b.oV=a;APF(b);}
function EJ(b){var c;Fu();if(A3r!==b)A3r=b;b=A3r;c=TG();C(b).wd=c;}
function Dv(){Fu();return A3r;}
function X2(b){var $p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Fu();$p=1;case 1:AEm(b);if(Ik()){break _;}return;default:AGm();}}TF().s(b,$p);}
function AJO(b,c){var d,e;Fu();d=Dv();e=new N_;e.sM=d;e.rw=c;e.yu=ADy(e,AUk(b,Bc(2147483647))?2147483647:E1(b));C(d).oA=e;}
function Zk(a){var b;b=a.zl;if(b!==null)return b;Fu();return A3u;}
function AHw(){var b;b=new Ds;Fu();LS(b,null,D(466));A3q=b;A3r=b;A3s=1;A3t=1;A3u=new Ra;}
function AEm(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wJ=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.xe=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AU3(callback);thread.suspend(function(){try{AJO(b,callback);}catch($e){callback.xe($rt_exception($e));}});return null;}
var CA=F(Bu);
function AUD(a){var b=new CA();AO5(b,a);return b;}
function AO5(a,b){S(a,b);}
var In=F(Bu);
function Tp(){var a=this;E.call(a);a.cf=null;a.iJ=null;a.k7=null;a.hO=null;a.on=0;a.hK=0;a.bG=0;a.n=0;a.cD=0;a.hR=0;a.dJ=0;a.b2=0;a.x8=0;a.eM=0;a.ij=0;}
function BP(a,b,c){var d;d=C(a.iJ).data;d[B(b,d)]=c;}
function Dq(a,b){var c;c=C(a.iJ).data;return c[B(b,c)];}
function Jr(a){return K4(a,0);}
function K4(a,b){var c;Q1(a,b);c=a.cf;b=(b*2|0)+1|0;c=C(c).data;return c[B(b,c)];}
function DE(a,b,c){var d;d=a.cf;b=b*2|0;d=C(d).data;d[B(b,d)]=c;}
function JZ(a,b,c){var d;d=a.cf;b=(b*2|0)+1|0;d=C(d).data;d[B(b,d)]=c;}
function F4(a,b){var c;c=a.cf;b=b*2|0;c=C(c).data;return c[B(b,c)];}
function I2(a,b){var c;c=a.cf;b=(b*2|0)+1|0;c=C(c).data;return c[B(b,c)];}
function H9(a,b){var c;Q1(a,b);c=a.cf;b=b*2|0;c=C(c).data;return c[B(b,c)];}
function M5(a,b){var c;c=C(a.k7).data;return c[B(b,c)];}
function Er(a,b,c){var d;d=C(a.k7).data;d[B(b,d)]=c;}
function Q1(a,b){var c;if(!a.hK){c=new CA;Y(c);J(c);}if(b>=0&&b<a.on)return;c=new Bg;S(c,Lw(b));J(c);}
function Mm(a,b,c,d){a.hK=0;a.ij=2;H0(a.cf,(-1));H0(a.iJ,(-1));if(b!==null)a.hO=b;if(c>=0){a.bG=c;a.n=d;}a.cD=a.bG;}
var AC3=F();
function AAy(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function L1(b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
var YL=F();
function EW(){return AWI($rt_globals.performance.now()*1000000.0);}
var Wa=F();
function I6(b){return b.length?0:1;}
function AB4(b){b=b.shift();GQ();if(b!==null&&!(b instanceof $rt_objcls()))b=Ez(b);return b;}
var EZ=F(0);
function Vh(){E.call(this);this.pe=null;}
function ARY(a){var b,c,d,e;b=C(a.pe);if(!Gy(b)){c=C(b.V);if(c.bq===null){b=c.c2;if(b!==null&&!I6(b)){d=Dm(AB4(c.c2),EZ);c.c2=null;b=C(d);d=b.ox;c=b.oy;e=b.ov;b=b.ow;EJ(d);c=C(C(c).V);c.bq=d;c.bB=c.bB+e|0;Iz(C(b),null);}}}}
var TZ=F(BL);
var T0=F(BL);
var T5=F(BL);
var T6=F(BL);
var T3=F(BL);
var T4=F(BL);
var TV=F(BL);
var TW=F(BL);
var TU=F(BL);
var Nv=F(0);
var Ra=F();
function WB(a,b,c){Qo(C(c));}
var YW=F();
var QM=F(0);
function Qt(){E.call(this);this.mR=null;}
function AU3(b){var c;c=new Qt;c.mR=b;return c;}
function Iz(a,b){C(a.mR).wJ(b);}
function AS0(a,b){C(a.mR).xe(b);}
function RO(){var a=this;E.call(a);a.ox=null;a.oy=null;a.ov=0;a.ow=null;}
var No=F(GU);
function AKF(a,b,c,d){var e,f,g,h;e=0;f=C(d);g=f.n;a:{while(true){if(b>g){b=e;break a;}h=F4(f,a.C);DE(f,a.C,b);e=C(a.bP).a(b,c,f);if(e>=0)break;DE(f,a.C,h);b=b+1|0;}}return b;}
function ATE(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.C;e=C(e);g=F4(e,g);DE(e,a.C,c);f=C(a.bP).a(c,d,e);if(f>=0)break;DE(e,a.C,g);c=c+(-1)|0;}}return c;}
function AIZ(a){return null;}
var XN=F();
function NK(){var a=this;E.call(a);a.mA=0;a.rW=0;a.pa=0;a.qc=0;a.nU=null;}
function RU(a){return a.mA>=a.pa?0:1;}
function Uo(a){var b,c,d;b=a.rW;c=C(a.nU);if(b<c.dg){c=new Um;Y(c);J(c);}d=a.mA;a.qc=d;a.mA=d+1|0;return Df(c,d);}
function Nd(){var a=this;Ds.call(a);a.gF=0;a.dF=null;a.d5=null;a.dM=null;}
function AO6(a){var b,c,d,e;b=new $rt_globals.XMLHttpRequest();c=new To;c.cs=a;c.eA=b;c=BR(c,"handleEvent");b.onreadystatechange=c;c=a.dM;d=a.d5;Mu(C(c),b,d);d=a.dF;e=a.gF;b.open("GET",$rt_ustr(d),!!e);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
var M$=F();
var A2m=null;function AVj(){AVj=T(M$);AQD();}
function AQD(){var b,c;Il();b=Bk(C(C(A2u).ck()).data.length);c=b.data;A2m=b;c[B(C(AWL).r,c)]=1;c[B(C(A2n).r,c)]=2;}
var AD7=F();
function AMZ(a,b,c){a.wN($rt_str(b),CY(c,"handleEvent"));}
function ANG(a,b,c){a.uQ($rt_str(b),CY(c,"handleEvent"));}
function AGh(a,b,c,d){a.tj($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function AGp(a,b){return !!a.wU(b);}
function ALa(a,b,c,d){a.vU($rt_str(b),CY(c,"handleEvent"),d?1:0);}
var Gj=F(0);
function Nf(){var a=this;E.call(a);a.dE=null;a.k1=0;a.hG=null;a.gh=null;a.eI=null;}
function AFa(a,b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.dE.readyState==4){if(a.dE.status!=200){if(a.dE.status!=404&&a.dE.status!=403){try{c=Bc(100);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}My(C(a.eI),a.k1,a.hG,a.gh);}else b=C(a.gh);}else{if(C(a.eI).dn){b=EX();d=a.hG;e=new N;Q(e);L(C(L(e,D(467))),d);D2(C(b),O(e));}f=a.dE.response;e=GL(C(Hr()));g
=e.createElement("script");b=e.createTextNode(f);g.appendChild(b);e.body.appendChild(g);b=a.gh;$rt_str(a.dE.responseText);b=C(b);}Fk(C(a.eI));}return;case 1:a:{try{X2(c);if(Ik()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}}b=a.eI;h=a.k1;d=a.hG;e=a.gh;My(C(b),h,d,e);Fk(C(a.eI));return;default:AGm();}}TF().s(a,b,c,d,e,f,g,h,$p);}
function Z1(a,b){var $p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFa(a,b);if(Ik()){break _;}return;default:AGm();}}TF().s(a,b,$p);}
var RT=F();
var A1g=0;function Yf(){var a=this;E.call(a);a.mq=null;a.wh=0;a.ff=0;a.cS=0;}
function Rz(a,b){var c=new Yf();AN4(c,a,b);return c;}
function AN4(a,b,c){a.cS=1;a.mq=b;a.wh=c;}
function QW(a){var b;if(!a.cS){b=new BU;S(b,D(468));J(b);}return a.ff>=C(a.mq).e?0:1;}
function O0(a){var b,c,d;b=a.ff;c=C(a.mq);if(b>=c.e){c=new MA;S(c,Lw(b));J(c);}if(!a.cS){c=new BU;S(c,D(468));J(c);}d=c.E;a.ff=b+1|0;d=C(d).data;return d[B(b,d)];}
function Oa(){var a=this;E.call(a);a.hB=null;a.iD=0;a.lB=null;a.lC=null;}
function Fy(){var a=this;E.call(a);a.wQ=null;a.b3=null;a.lU=null;}
function Y9(a,b){var c=new Fy();AMg(c,a,b);return c;}
function AMg(a,b,c){a.b3=c;a.wQ=b;}
function AC1(a){var b,c,d,e,f;b=a.b3.length;c=new N;ET(c,((b*4|0)/3|0)+2|0);d=0;while(d<b){e=b-d|0;if(e>=3){f=(((a.b3[d]&255)<<16)+((a.b3[d+1|0]&255)<<8)|0)+(a.b3[d+2|0]&255)|0;Be(c,R(D(469),f>>18&63));Be(c,R(D(469),f>>12&63));Be(c,R(D(469),f>>6&63));Be(c,R(D(469),f&63));}else if(e<2){f=(a.b3[d]&255)<<16;Be(c,R(D(469),f>>18&63));Be(c,R(D(469),f>>12&63));Bb(c,D(470));}else{f=((a.b3[d]&255)<<16)+((a.b3[d+1|0]&255)<<8)|0;Be(c,R(D(469),f>>18&63));Be(c,R(D(469),f>>12&63));Be(c,R(D(469),f>>6&63));Bb(c,D(471));}d=
d+3|0;}return O(c);}
function Nb(){E.call(this);this.li=null;}
function AGa(a){var b,c,d;b=C(C(a.li).gY);c=IZ(Fb(C(CZ(C(b.E)))),b.e);Rs(b.E,0,c,0,b.e);d=Dm(c,$rt_arraycls(BB));C(C(C(C(a.li).id).nm).oe).GR(d);}
var Vm=F(0);
var IK=F(0);
var S0=F(0);
var GO=F();
function JK(){GO.call(this);this.sL=null;}
function YT(){var a=this;JK.call(a);a.xm=0;a.kY=0;a.eq=null;a.j7=null;a.q1=null;}
function AN2(a,b){var c=new YT();ART(c,a,b);return c;}
function ART(a,b,c){a.sL=b;b=new N;Q(b);a.eq=b;a.j7=BS(32);a.xm=c;PZ();a.q1=A3x;}
function R5(a,b,c,d){var e,$$je;e=a.sL;if(e===null)a.kY=1;if(!(a.kY?0:1))return;a:{try{C(e).jV(b,c,d);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof Fg){}else{throw $$e;}}a.kY=1;}}
function N9(a,b,c,d){var e,f,g,h,i,j;d=d-c|0;e=AAk(b,c,d);f=CE(BF(16,B1(d,1024)));g=Kn(f);h=AEY(C(a.q1));Fp();i=A3y;h=Rm(C(h),i);i=A3y;i=UW(C(h),i);while(true){i=C(i);j=F$(C(JV(i,e,g,1)));g=C(g);R5(a,f,0,g.f);BN(g);if(!j)break;}while(true){j=F$(C(M3(i,g)));R5(a,f,0,g.f);BN(g);if(!j)break;}}
function Iv(a,b){Bb(C(a.eq),b);JL(a);}
function D2(a,b){var c;c=C(a.eq);Bb(c,b);Be(c,10);JL(a);}
function JL(a){var b,c,d,e,f,g,h,i,j;b=C(a.eq);c=b.t;d=a.j7;if(c>C(d).data.length)d=BS(c);e=0;f=0;if(e>c){b=new Bg;S(b,D(472));J(b);}g=d;while(e<c){h=f+1|0;i=b.q;j=e+1|0;i=C(i).data;e=i[B(e,i)];g=C(g);i=g.data;i[B(f,i)]=e;f=h;e=j;}N9(a,d,0,c);C(a.eq).t=0;}
function GA(){GO.call(this);this.wK=null;}
function Vt(a){a.wK=CE(1);}
var LE=F(GA);
var A10=null;function AMh(a,b,c,d){var e,f,g;e=0;while(e<d){f=e+c|0;b=C(b);g=b.data;$rt_putStdout(g[B(f,g)]&255);e=e+1|0;}}
function ACF(){var b;b=new LE;Vt(b);A10=b;}
function Nj(){var a=this;E.call(a);a.ob=null;a.yC=null;}
function AOz(a,b){var c,d;c=a.ob;d=b.loaded;C(c).fG(d);}
function Dk(){var a=this;E.call(a);a.i0=null;a.u6=null;}
function H7(a,b,c){var d,e,f;Ts(b);d=C(c);c=d.data;e=c.length;f=0;while(f<e){f=B$(f);Ts(c[f]);f=f+1|0;}a.i0=b;a.u6=d.ck();}
function Ts(b){var c,d;b=C(b);if(FR(b))J(YF(b));if(!AC4(R(b,0)))J(YF(b));c=1;while(c<X(b)){a:{d=R(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AC4(d))break a;else J(YF(b));}}c=c+1|0;}}
function AC4(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function AOt(a){return a.i0;}
function AE1(a,b){var c,d,$$je;a:{try{c=a.iu();Fp();b=X$(C(UW(C(Rm(C(c),A3y)),A3y)),b);}catch($$e){$$je=Bj($$e);if($$je instanceof Gb){d=$$je;break a;}else{throw $$e;}}return b;}c=new UO;Dp(c,D(473),d);J(c);}
var Mx=F(Dk);
var A3x=null;function PZ(){PZ=T(Mx);AKb();}
function AEY(a){var b;b=new Po;H8(b,a,2.0,4.0);return b;}
function AKb(){var b;b=new Mx;PZ();H7(b,D(474),K(BB,0));A3x=b;}
function AC_(){Bh.call(this);this.ts=null;}
function YF(a){var b=new AC_();ARq(b,a);return b;}
function ARq(a,b){Y(a);a.ts=b;}
var MA=F(Bu);
var BU=F(Bu);
function ANu(a,b){var c=new BU();AGQ(c,a,b);return c;}
function EU(a){var b=new BU();Ye(b,a);return b;}
function AGQ(a,b,c){Dp(a,b,c);}
function Ye(a,b){S(a,b);}
function RQ(){Ba.call(this);this.v4=null;}
function AR8(a,b){return Cr(b)!=2?0:1;}
function MY(){Ba.call(this);this.wr=null;}
function AHu(a,b){return Cr(b)!=1?0:1;}
function Q$(){Ba.call(this);this.u8=null;}
function AG7(a,b){return Qx(b);}
function Q9(){Ba.call(this);this.uy=null;}
function AKD(a,b){return 0;}
function Ux(){Ba.call(this);this.ym=null;}
function AL2(a,b){return !Cr(b)?0:1;}
function OT(){Ba.call(this);this.wZ=null;}
function AR_(a,b){return Cr(b)!=9?0:1;}
function N$(){Ba.call(this);this.za=null;}
function AOX(a,b){return GM(b);}
function Qm(){Ba.call(this);this.v6=null;}
function AQf(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MU(){Ba.call(this);this.sS=null;}
function ATg(a,b){a:{b:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GM(b);}return b;}
function MX(){Ba.call(this);this.w8=null;}
function AJD(a,b){a:{b:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GM(b);}return b;}
function N0(){Ba.call(this);this.yi=null;}
function ASp(a,b){a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pk(){Ba.call(this);this.yH=null;}
function ANE(a,b){return JP(b);}
function Pp(){Ba.call(this);this.vp=null;}
function APN(a,b){return Pr(b);}
function Sn(){Ba.call(this);this.xp=null;}
function ARX(a,b){return Cr(b)!=3?0:1;}
function Ru(){Ba.call(this);this.sY=null;}
function ASX(a,b){a:{b:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GM(b);}return b;}
function M9(){Ba.call(this);this.zx=null;}
function AJq(a,b){a:{b:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GM(b);}return b;}
function Mk(){Ba.call(this);this.lz=0;}
function AWf(a){var b=new Mk();ABU(b,a);return b;}
function ABU(a,b){Bx(a);a.lz=b;}
function AOZ(a,b){return a.L^(a.lz!=Cr(b&65535)?0:1);}
var Q2=F(Mk);
function AQ3(a,b){return a.L^(!(a.lz>>Cr(b&65535)&1)?0:1);}
function TC(){E.call(this);this.oV=null;}
function AHf(a){var b,c,d,$$je;b=C(a.oV);a:{b:{c:{d:{try{Fu();A3t=A3t+1|0;EJ(b);b.cM();}catch($$e){$$je=Bj($$e);if($$je instanceof CP){c=$$je;break d;}else{c=$$je;break c;}}c=C(b.gS);EM(c);e:{try{Ml(c);Cu(c);break e;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(c);J(b);}b.gL=0;A3t=A3t-1|0;EJ(A3q);break a;}try{WB(C(Zk(b)),b,c);break b;}catch($$e){$$je=Bj($$e);c=$$je;}}d=C(b.gS);EM(d);f:{try{Ml(d);Cu(d);break f;}catch($$e){$$je=Bj($$e);b=$$je;}Cu(d);J(b);}b.gL=0;A3t=A3t-1|0;EJ(A3q);J(c);}c=C(b.gS);EM(c);g:{try{Ml(c);Cu(c);break g;}
catch($$e){$$je=Bj($$e);b=$$je;}Cu(c);J(b);}b.gL=0;A3t=A3t-1|0;EJ(A3q);}}
var Yq=F();
var U_=F();
var A2G=null;function AV7(){AV7=T(U_);AQX();}
function AQX(){var b,c;b=Bk(C(OO()).data.length);c=b.data;A2G=b;c[B(C(A2V).r,c)]=1;c[B(C(A2S).r,c)]=2;c[B(C(A2U).r,c)]=3;c[B(C(A2T).r,c)]=4;c[B(C(A3f).r,c)]=5;}
var Um=F(Bu);
var Pc=F(0);
function TM(){var a=this;E.call(a);a.iI=null;a.em=null;a.bF=0;a.e1=null;a.sx=0.0;a.nz=0.0;a.ds=0;a.rf=null;a.l1=null;a.iy=null;a.l6=0;a.qV=0;a.oC=0;a.oT=0;a.m7=0;a.du=null;a.e8=null;a.nq=0;a.wy=null;a.rF=0.0;a.hi=0;a.ky=0;a.mt=0;}
var A3z=null;function AQS(){AQS=T(TM);ANP();}
function ATU(){var a=new TM();ADV(a);return a;}
function A3A(a,b){var c=new TM();OM(c,a,b);return c;}
function ADV(a){AQS();OM(a,1000,null);}
function OM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;AQS();a.bF=0;a.e1=null;a.sx=0.0;a.nz=0.0;a.ds=0;a.rf=Je();a.l1=Je();a.iy=Je();a.l6=0;a.qV=770;a.oC=771;a.oT=770;a.m7=771;a.e8=null;a.wy=C5(1.0,1.0,1.0,1.0);a.rF=A0x;a.hi=0;a.ky=0;a.mt=0;if(b>8191){c=new Bh;d=new N;Q(d);Bb(d,D(475));S(c,O(C(V(d,b))));J(c);}if(A1f===null)e=A3z;else{Qh();e=A3B;}f=new Le;g=b*4|0;h=b*6|0;i=K(L3,3).data;i[AWr(0,i)]=ACT(1,2,D(476));i[AWr(1,i)]=ACT(4,4,D(477));i[AWr(2,i)]=ACT(16,2,D(478));d=new Og;d.ty=Bc(-1);d.vW=(-1);d.xH=(-1);j=
i.length;if(!j){c=new Bh;S(c,D(479));J(c);}k=K(L3,j);l=0;while(l<j){m=k.data;l=B(l,i);n=i[l];o=AWr(l,m);m[o]=n;l=o+1|0;}d.jB=k;j=0;l=0;while(true){m=k.data;if(l>=m.length)break;a:{b:{l=B(l,m);n=C(m[l]);n.ei=j;switch(n.dH){case 5120:case 5121:break;case 5122:case 5123:o=2*n.cI|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:o=4*n.cI|0;break a;default:break b;}o=n.cI;break a;}o=0;}j=j+o|0;l=l+1|0;}d.co=j;UL(f,e,0,g,h,d);a.iI=f;n=a.l1;p=Jf(C(A03));q=Jp(C(A03));ABx(C(n),
0.0,0.0+p,0.0,0.0+q,0.0,1.0);a.em=C4(b*20|0);m=Yh(h);l=0;j=0;while(j<h){k=m.data;o=B(j,k);k[o]=l;b=o+1|0;j=(l+1|0)<<16>>16;k[B(b,k)]=j;b=o+2|0;j=(l+2|0)<<16>>16;k[B(b,k)]=j;k[B(o+3|0,k)]=j;b=o+4|0;j=(l+3|0)<<16>>16;k[B(b,k)]=j;k[B(o+5|0,k)]=l;j=o+6|0;l=(l+4|0)<<16>>16;}k=m.data;C(C(a.iI).br).qv(m,0,k.length);if(c!==null)a.du=c;else{n=AUz(D(480),D(481));if(!n.dX){c=new Bh;d=new N;Q(d);Bb(d,D(482));Bb(d,TX(n));S(c,O(d));J(c);}a.du=n;a.nq=1;}}
function ADQ(a){var b,c;if(!a.ds){b=new CA;S(b,D(483));J(b);}if(a.bF>0)GP(a);a.e1=null;a.ds=0;c=C(A02);c.h1(1);if(a.l6?0:1)c.gR(3042);}
function ADn(a,b,c,d,e,f){var g,h,i,j,k,l;if(!a.ds){b=new CA;S(b,D(484));J(b);}g=a.em;if(b!==a.e1)Sr(a,b);else{h=a.bF;g=C(g);if(h==g.data.length)GP(a);}i=c+e;j=d+f;k=a.rF;h=a.bF;g=C(g).data;l=B(h,g);g[l]=c;g[B(l+1|0,g)]=d;g[B(l+2|0,g)]=k;g[B(l+3|0,g)]=0.0;g[B(l+4|0,g)]=1.0;g[B(l+5|0,g)]=c;g[B(l+6|0,g)]=j;g[B(l+7|0,g)]=k;g[B(l+8|0,g)]=0.0;g[B(l+9|0,g)]=0.0;g[B(l+10|0,g)]=i;g[B(l+11|0,g)]=j;g[B(l+12|0,g)]=k;g[B(l+13|0,g)]=1.0;g[B(l+14|0,g)]=0.0;g[B(l+15|0,g)]=i;g[B(l+16|0,g)]=d;g[B(l+17|0,g)]=k;g[B(l+18|0,g)]
=1.0;g[B(l+19|0,g)]=1.0;a.bF=l+20|0;}
function GP(a){var b,c,d,e,f,g,h;b=a.bF;if(!b)return;a.hi=a.hi+1|0;a.ky=a.ky+1|0;c=b/20|0;if(c>a.mt)a.mt=c;b=c*6|0;RK(C(a.e1));d=a.iI;e=a.em;f=a.bF;g=C(d);C(g.dm).lt(e,0,f);h=C(C(g.br).lW(1));BT(h,0);CF(h,b);if(a.l6)C(A02).gR(3042);else{C(A02).kF(3042);c=a.qV;if(c!=(-1))C(A02).l8(c,a.oC,a.oT,a.m7);}d=a.e8;if(d===null)d=a.du;ABc(g,d,4,0,b,g.om);a.bF=0;}
function Sr(a,b){GP(a);a.e1=b;b=C(b);a.sx=1.0/F0(b);a.nz=1.0/F9(b);}
function ANP(){Qh();A3z=A3C;}
var K5=F(GA);
var A11=null;function AKt(a,b,c,d){var e,f,g;e=0;while(e<d){f=e+c|0;b=C(b);g=b.data;$rt_putStderr(g[B(f,g)]&255);e=e+1|0;}}
function AFK(){var b;b=new K5;Vt(b);A11=b;}
var F2=F();
var A3D=null;var A3E=null;var A1U=null;var A1T=null;var A1S=null;function ZX(){var b,c;b=Bk(10);c=b.data;c[AWr(0,c)]=1;c[AWr(1,c)]=10;c[AWr(2,c)]=100;c[AWr(3,c)]=1000;c[AWr(4,c)]=10000;c[AWr(5,c)]=100000;c[AWr(6,c)]=1000000;c[AWr(7,c)]=10000000;c[AWr(8,c)]=100000000;c[AWr(9,c)]=1000000000;A3D=b;b=AEy(19);c=b.data;c[AWr(0,c)]=Bc(1);c[AWr(1,c)]=Bc(10);c[AWr(2,c)]=Bc(100);c[AWr(3,c)]=Bc(1000);c[AWr(4,c)]=Bc(10000);c[AWr(5,c)]=Bc(100000);c[AWr(6,c)]=Bc(1000000);c[AWr(7,c)]=Bc(10000000);c[AWr(8,c)]=Bc(100000000);c[AWr(9,
c)]=Bc(1000000000);c[AWr(10,c)]=G(1410065408, 2);c[AWr(11,c)]=G(1215752192, 23);c[AWr(12,c)]=G(3567587328, 232);c[AWr(13,c)]=G(1316134912, 2328);c[AWr(14,c)]=G(276447232, 23283);c[AWr(15,c)]=G(2764472320, 232830);c[AWr(16,c)]=G(1874919424, 2328306);c[AWr(17,c)]=G(1569325056, 23283064);c[AWr(18,c)]=G(2808348672, 232830643);A3E=b;b=AEy(6);c=b.data;c[AWr(0,c)]=Bc(1);c[AWr(1,c)]=Bc(10);c[AWr(2,c)]=Bc(100);c[AWr(3,c)]=Bc(10000);c[AWr(4,c)]=Bc(100000000);c[AWr(5,c)]=G(1874919424, 2328306);A1U=b;A1T=new SI;A1S=new TD;}
var Ig=F();
var A3F=0;var A3G=null;var A3H=null;function ABj(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=Fl(b);e=!(d&(-2147483648))?0:1;c=C(c);c.nR=e;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kw=0;c.j5=0;return;}if(f)d=e|8388608;else{d=e<<1;while(DG(C3(Bc(d),Bc(8388608)),Cs)){d=d<<1;f=f+(-1)|0;}}g=A3H;e=0;h=C(g);g=h.data;i=g.length;if(e>i){c=new Bh;Y(c);J(c);}j=i-1|0;a:{while(true){if(e>j){i=( -e|0)-1|0;break a;}k=h.data;i=B((e+j|0)/2|0,k);l=k[i];if(l==f)break;if(f>=l)e=i+1|0;else j=i-1|0;}}if(i<0)i= -i|0;e=B(i+1|0,g);m=9+(f
-g[e]|0)|0;g=C(A3G).data;n=Gv(d,g[AWr(e,g)],m);if(n<A3F){while($rt_ucmp(n,A3F)<=0){i=i+(-1)|0;n=(n*10|0)+9|0;}g=A3H;e=i+1|0;g=C(g).data;j=B(e,g);m=9+(f-g[j]|0)|0;g=C(A3G).data;n=Gv(d,g[AWr(j,g)],m);}d=d<<1;f=d+1|0;g=A3G;e=i+1|0;g=C(g).data;e=B(e,g);l=g[e];j=m-1|0;o=Gv(f,l,j);d=d-1|0;g=C(A3G).data;p=Gv(d,g[AWr(e,g)],j);q=1;while(true){r=q*10|0;if($rt_ucmp($rt_udiv(n,r),$rt_udiv(p,r))<=0)break;q=r;}j=1;while(true){l=j*10|0;if($rt_ucmp($rt_udiv(n,l),$rt_udiv(o,l))>=0)break;j=l;}s=$rt_ucmp(q,j);d=s>0?DO($rt_udiv(n,
q),q):s<0?DO($rt_udiv(n,j),j)+j|0:DO($rt_udiv((n+(j/2|0)|0),j),j);if(EF(Bc(d),Bc(1000000000))>=0)while(true){i=i+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){i=i+(-1)|0;d=d*10|0;}c.kw=d;c.j5=i-50|0;}
function Gv(b,c,d){return E1(Ci(BO(C3(Bc(b),G(4294967295, 0)),C3(Bc(c),G(4294967295, 0))),32-d|0));}
function Ym(){var b,c;A3F=$rt_udiv((-1),10);b=Bk(100);c=b.data;c[AWr(0,c)]=(-18543760);c[AWr(1,c)]=(-873828468);c[AWr(2,c)]=(-1558056233);c[AWr(3,c)]=(-2105438446);c[AWr(4,c)]=(-791721136);c[AWr(5,c)]=(-1492370368);c[AWr(6,c)]=(-2052889754);c[AWr(7,c)]=(-707643228);c[AWr(8,c)]=(-1425108042);c[AWr(9,c)]=(-1999079893);c[AWr(10,c)]=(-621547450);c[AWr(11,c)]=(-1356231419);c[AWr(12,c)]=(-1943978595);c[AWr(13,c)]=(-533385374);c[AWr(14,c)]=(-1285701758);c[AWr(15,c)]=(-1887554866);c[AWr(16,c)]=(-443107408);c[AWr(17,
c)]=(-1213479385);c[AWr(18,c)]=(-1829776968);c[AWr(19,c)]=(-350662770);c[AWr(20,c)]=(-1139523676);c[AWr(21,c)]=(-1770612400);c[AWr(22,c)]=(-255999462);c[AWr(23,c)]=(-1063793029);c[AWr(24,c)]=(-1710027882);c[AWr(25,c)]=(-159064234);c[AWr(26,c)]=(-986244846);c[AWr(27,c)]=(-1647989336);c[AWr(28,c)]=(-59802560);c[AWr(29,c)]=(-906835507);c[AWr(30,c)]=(-1584461865);c[AWr(31,c)]=(-2126562952);c[AWr(32,c)]=(-825520345);c[AWr(33,c)]=(-1519409735);c[AWr(34,c)]=(-2074521247);c[AWr(35,c)]=(-742253618);c[AWr(36,c)]=(-1452796353);c[AWr(37,
c)]=(-2021230542);c[AWr(38,c)]=(-656988489);c[AWr(39,c)]=(-1384584251);c[AWr(40,c)]=(-1966660860);c[AWr(41,c)]=(-569676998);c[AWr(42,c)]=(-1314735058);c[AWr(43,c)]=(-1910781505);c[AWr(44,c)]=(-480270031);c[AWr(45,c)]=(-1243209484);c[AWr(46,c)]=(-1853561046);c[AWr(47,c)]=(-388717296);c[AWr(48,c)]=(-1169967296);c[AWr(49,c)]=(-1794967296);c[AWr(50,c)]=(-294967296);c[AWr(51,c)]=(-1094967296);c[AWr(52,c)]=(-1734967296);c[AWr(53,c)]=(-198967296);c[AWr(54,c)]=(-1018167296);c[AWr(55,c)]=(-1673527296);c[AWr(56,c)]=(-100663296);c[AWr(57,
c)]=(-939524096);c[AWr(58,c)]=(-1610612736);c[AWr(59,c)]=(-2147483648);c[AWr(60,c)]=(-858993460);c[AWr(61,c)]=(-1546188227);c[AWr(62,c)]=(-2095944041);c[AWr(63,c)]=(-776530088);c[AWr(64,c)]=(-1480217529);c[AWr(65,c)]=(-2043167483);c[AWr(66,c)]=(-692087595);c[AWr(67,c)]=(-1412663535);c[AWr(68,c)]=(-1989124287);c[AWr(69,c)]=(-605618482);c[AWr(70,c)]=(-1343488245);c[AWr(71,c)]=(-1933784055);c[AWr(72,c)]=(-517074110);c[AWr(73,c)]=(-1272652747);c[AWr(74,c)]=(-1877115657);c[AWr(75,c)]=(-426404674);c[AWr(76,c)]=(-1200117198);c[AWr(77,
c)]=(-1819087218);c[AWr(78,c)]=(-333559171);c[AWr(79,c)]=(-1125840796);c[AWr(80,c)]=(-1759666096);c[AWr(81,c)]=(-238485376);c[AWr(82,c)]=(-1049781760);c[AWr(83,c)]=(-1698818867);c[AWr(84,c)]=(-141129810);c[AWr(85,c)]=(-971897307);c[AWr(86,c)]=(-1636511305);c[AWr(87,c)]=(-41437710);c[AWr(88,c)]=(-892143627);c[AWr(89,c)]=(-1572708361);c[AWr(90,c)]=(-2117160148);c[AWr(91,c)]=(-810475859);c[AWr(92,c)]=(-1507374147);c[AWr(93,c)]=(-2064892777);c[AWr(94,c)]=(-726848065);c[AWr(95,c)]=(-1440471911);c[AWr(96,c)]=(-2011370988);c[AWr(97,
c)]=(-641213203);c[AWr(98,c)]=(-1371964022);c[AWr(99,c)]=(-1956564688);A3G=b;b=Bk(100);c=b.data;c[AWr(0,c)]=(-37);c[AWr(1,c)]=(-34);c[AWr(2,c)]=(-31);c[AWr(3,c)]=(-28);c[AWr(4,c)]=(-24);c[AWr(5,c)]=(-21);c[AWr(6,c)]=(-18);c[AWr(7,c)]=(-14);c[AWr(8,c)]=(-11);c[AWr(9,c)]=(-8);c[AWr(10,c)]=(-4);c[AWr(11,c)]=(-1);c[AWr(12,c)]=2;c[AWr(13,c)]=6;c[AWr(14,c)]=9;c[AWr(15,c)]=12;c[AWr(16,c)]=16;c[AWr(17,c)]=19;c[AWr(18,c)]=22;c[AWr(19,c)]=26;c[AWr(20,c)]=29;c[AWr(21,c)]=32;c[AWr(22,c)]=36;c[AWr(23,c)]=39;c[AWr(24,c)]
=42;c[AWr(25,c)]=46;c[AWr(26,c)]=49;c[AWr(27,c)]=52;c[AWr(28,c)]=56;c[AWr(29,c)]=59;c[AWr(30,c)]=62;c[AWr(31,c)]=65;c[AWr(32,c)]=69;c[AWr(33,c)]=72;c[AWr(34,c)]=75;c[AWr(35,c)]=79;c[AWr(36,c)]=82;c[AWr(37,c)]=85;c[AWr(38,c)]=89;c[AWr(39,c)]=92;c[AWr(40,c)]=95;c[AWr(41,c)]=99;c[AWr(42,c)]=102;c[AWr(43,c)]=105;c[AWr(44,c)]=109;c[AWr(45,c)]=112;c[AWr(46,c)]=115;c[AWr(47,c)]=119;c[AWr(48,c)]=122;c[AWr(49,c)]=125;c[AWr(50,c)]=129;c[AWr(51,c)]=132;c[AWr(52,c)]=135;c[AWr(53,c)]=139;c[AWr(54,c)]=142;c[AWr(55,c)]=145;c[AWr(56,
c)]=149;c[AWr(57,c)]=152;c[AWr(58,c)]=155;c[AWr(59,c)]=158;c[AWr(60,c)]=162;c[AWr(61,c)]=165;c[AWr(62,c)]=168;c[AWr(63,c)]=172;c[AWr(64,c)]=175;c[AWr(65,c)]=178;c[AWr(66,c)]=182;c[AWr(67,c)]=185;c[AWr(68,c)]=188;c[AWr(69,c)]=192;c[AWr(70,c)]=195;c[AWr(71,c)]=198;c[AWr(72,c)]=202;c[AWr(73,c)]=205;c[AWr(74,c)]=208;c[AWr(75,c)]=212;c[AWr(76,c)]=215;c[AWr(77,c)]=218;c[AWr(78,c)]=222;c[AWr(79,c)]=225;c[AWr(80,c)]=228;c[AWr(81,c)]=232;c[AWr(82,c)]=235;c[AWr(83,c)]=238;c[AWr(84,c)]=242;c[AWr(85,c)]=245;c[AWr(86,c)]
=248;c[AWr(87,c)]=252;c[AWr(88,c)]=255;c[AWr(89,c)]=258;c[AWr(90,c)]=261;c[AWr(91,c)]=265;c[AWr(92,c)]=268;c[AWr(93,c)]=271;c[AWr(94,c)]=275;c[AWr(95,c)]=278;c[AWr(96,c)]=281;c[AWr(97,c)]=285;c[AWr(98,c)]=288;c[AWr(99,c)]=291;A3H=b;}
function TD(){var a=this;E.call(a);a.kw=0;a.j5=0;a.nR=0;}
var Pt=F(D4);
var A3I=null;function Xr(){A3I=H($rt_doublecls());}
var I0=F();
var A3J=Cs;var A3K=null;var A3L=null;function ZQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):G(0, 2146959360);e=DG(C3(d,G(0, 2147483648)),Cs)?0:1;c=C(c);c.nw=e;f=C3(d,G(4294967295, 1048575));e=E1(AUO(d,52))&2047;if(DG(f,Cs)&&!e){c.lp=Cs;c.jF=0;return;}if(e)f=AKg(f,G(0, 1048576));else{f=FN(f,1);while(DG(C3(f,G(0, 1048576)),Cs)){f=FN(f,1);e=e+(-1)|0;}}g=A3L;h=e<<16>>16;i=0;j=C(g);g=j.data;k=g.length;if(i>k){c=new Bh;Y(c);J(c);}l=k-1|0;a:{while(true){if
(i>l){k=( -i|0)-1|0;break a;}m=j.data;k=B((i+l|0)/2|0,m);n=Cz(m[k],h);if(!n)break;if(n<=0)i=k+1|0;else l=k-1|0;}}if(k<0)k= -k|0;h=B(k+1|0,g);l=12+(e-g[h]|0)|0;g=C(A3K).data;o=Iw(f,g[AWr(h,g)],l);if(AJ1(o,A3J)){while(EF(o,A3J)<=0){k=k+(-1)|0;o=Cw(BO(o,Bc(10)),Bc(9));}g=A3L;h=k+1|0;g=C(g).data;i=B(h,g);l=12+(e-g[i]|0)|0;g=C(A3K).data;o=Iw(f,g[AWr(i,g)],l);}f=FN(f,1);d=Cw(f,Bc(1));g=A3K;e=k+1|0;g=C(g).data;h=B(e,g);p=g[h];i=l-1|0;q=Iw(d,p,i);d=ALL(f,Bc(1));g=C(A3K).data;p=Iw(d,g[AWr(h,g)],i);r=Bc(1);while(true)
{s=BO(r,Bc(10));if(EF(Ei(o,s),Ei(p,s))<=0)break;r=s;}t=Bc(1);while(true){u=BO(t,Bc(10));if(EF(Ei(o,u),Ei(q,u))>=0)break;t=u;}h=EF(r,t);f=h>0?BO(Ei(o,r),r):h<0?Cw(BO(Ei(o,t),t),t):BO(Ei(Cw(o,Th(t,Bc(2))),t),t);if(EF(f,G(2808348672, 232830643))>=0)while(true){k=k+1|0;f=Ei(f,Bc(10));if(EF(f,G(2808348672, 232830643))<0)break;}else if(EF(f,G(1569325056, 23283064))<0){k=k+(-1)|0;f=BO(f,Bc(10));}c.lp=f;c.jF=k-330|0;}
function Iw(b,c,d){var e,f,g,h,i,j,k,l;e=C3(b,Bc(65535));f=C3(Ci(b,16),Bc(65535));g=C3(Ci(b,32),Bc(65535));h=C3(Ci(b,48),Bc(65535));i=C3(c,Bc(65535));j=C3(Ci(c,16),Bc(65535));k=C3(Ci(c,32),Bc(65535));l=C3(Ci(c,48),Bc(65535));return Cw(Cw(Cw(FN(BO(l,h),32+d|0),FN(Cw(BO(l,g),BO(k,h)),16+d|0)),FN(Cw(Cw(BO(l,f),BO(k,g)),BO(j,h)),d)),Ci(Cw(Cw(Cw(BO(k,e),BO(j,f)),BO(i,g)),FN(Cw(Cw(Cw(BO(l,e),BO(k,f)),BO(j,g)),BO(i,h)),16)),32-d|0));}
function Zb(){var b,c;A3J=Ei(Bc(-1),Bc(10));b=AEy(660);c=b.data;c[AWr(0,c)]=G(3251292512, 2194092222);c[AWr(1,c)]=G(1766094183, 3510547556);c[AWr(2,c)]=G(553881887, 2808438045);c[AWr(3,c)]=G(443105509, 2246750436);c[AWr(4,c)]=G(3285949193, 3594800697);c[AWr(5,c)]=G(910772436, 2875840558);c[AWr(6,c)]=G(2446604867, 2300672446);c[AWr(7,c)]=G(2196580869, 3681075914);c[AWr(8,c)]=G(2616258154, 2944860731);c[AWr(9,c)]=G(1234013064, 2355888585);c[AWr(10,c)]=G(1974420903, 3769421736);c[AWr(11,c)]=G(720543263, 3015537389);c[AWr(12,
c)]=G(1435428070, 2412429911);c[AWr(13,c)]=G(578697993, 3859887858);c[AWr(14,c)]=G(2180945313, 3087910286);c[AWr(15,c)]=G(885762791, 2470328229);c[AWr(16,c)]=G(3135207384, 3952525166);c[AWr(17,c)]=G(1649172448, 3162020133);c[AWr(18,c)]=G(3037324877, 2529616106);c[AWr(19,c)]=G(3141732885, 4047385770);c[AWr(20,c)]=G(2513386308, 3237908616);c[AWr(21,c)]=G(1151715587, 2590326893);c[AWr(22,c)]=G(983751480, 4144523029);c[AWr(23,c)]=G(1645994643, 3315618423);c[AWr(24,c)]=G(3034782633, 2652494738);c[AWr(25,c)]=G(3996658754, 4243991581);c[AWr(26,
c)]=G(2338333544, 3395193265);c[AWr(27,c)]=G(1870666835, 2716154612);c[AWr(28,c)]=G(4073513845, 2172923689);c[AWr(29,c)]=G(3940641775, 3476677903);c[AWr(30,c)]=G(575533043, 2781342323);c[AWr(31,c)]=G(2178413352, 2225073858);c[AWr(32,c)]=G(2626467905, 3560118173);c[AWr(33,c)]=G(3819161242, 2848094538);c[AWr(34,c)]=G(478348616, 2278475631);c[AWr(35,c)]=G(3342338164, 3645561009);c[AWr(36,c)]=G(3532863990, 2916448807);c[AWr(37,c)]=G(1108304273, 2333159046);c[AWr(38,c)]=G(55299919, 3733054474);c[AWr(39,c)]=G(903233395, 2986443579);c[AWr(40,
c)]=G(1581580175, 2389154863);c[AWr(41,c)]=G(1671534821, 3822647781);c[AWr(42,c)]=G(478234397, 3058118225);c[AWr(43,c)]=G(382587518, 2446494580);c[AWr(44,c)]=G(612140029, 3914391328);c[AWr(45,c)]=G(2207698941, 3131513062);c[AWr(46,c)]=G(48172235, 2505210450);c[AWr(47,c)]=G(77075576, 4008336720);c[AWr(48,c)]=G(61660460, 3206669376);c[AWr(49,c)]=G(3485302205, 2565335500);c[AWr(50,c)]=G(1281516232, 4104536801);c[AWr(51,c)]=G(166219527, 3283629441);c[AWr(52,c)]=G(3568949458, 2626903552);c[AWr(53,c)]=G(2274345296, 4203045684);c[AWr(54,
c)]=G(2678469696, 3362436547);c[AWr(55,c)]=G(424788838, 2689949238);c[AWr(56,c)]=G(2057817989, 2151959390);c[AWr(57,c)]=G(3292508783, 3443135024);c[AWr(58,c)]=G(3493000485, 2754508019);c[AWr(59,c)]=G(3653393847, 2203606415);c[AWr(60,c)]=G(1550462860, 3525770265);c[AWr(61,c)]=G(1240370288, 2820616212);c[AWr(62,c)]=G(3569276608, 2256492969);c[AWr(63,c)]=G(3133862195, 3610388751);c[AWr(64,c)]=G(1648096297, 2888311001);c[AWr(65,c)]=G(459483578, 2310648801);c[AWr(66,c)]=G(3312154103, 3697038081);c[AWr(67,c)]=G(1790729823, 2957630465);c[AWr(68,
c)]=G(1432583858, 2366104372);c[AWr(69,c)]=G(3151127633, 3785766995);c[AWr(70,c)]=G(2520902106, 3028613596);c[AWr(71,c)]=G(1157728226, 2422890877);c[AWr(72,c)]=G(2711358621, 3876625403);c[AWr(73,c)]=G(3887073815, 3101300322);c[AWr(74,c)]=G(1391672133, 2481040258);c[AWr(75,c)]=G(1367681954, 3969664413);c[AWr(76,c)]=G(2812132482, 3175731530);c[AWr(77,c)]=G(2249705985, 2540585224);c[AWr(78,c)]=G(1022549199, 4064936359);c[AWr(79,c)]=G(1677032818, 3251949087);c[AWr(80,c)]=G(3918606632, 2601559269);c[AWr(81,c)]=G(3692790234, 4162494831);c[AWr(82,
c)]=G(2095238728, 3329995865);c[AWr(83,c)]=G(1676190982, 2663996692);c[AWr(84,c)]=G(3540899031, 4262394707);c[AWr(85,c)]=G(1114732307, 3409915766);c[AWr(86,c)]=G(32792386, 2727932613);c[AWr(87,c)]=G(1744220827, 2182346090);c[AWr(88,c)]=G(2790753324, 3491753744);c[AWr(89,c)]=G(3091596118, 2793402995);c[AWr(90,c)]=G(2473276894, 2234722396);c[AWr(91,c)]=G(2239256113, 3575555834);c[AWr(92,c)]=G(2650398349, 2860444667);c[AWr(93,c)]=G(402331761, 2288355734);c[AWr(94,c)]=G(2361717736, 3661369174);c[AWr(95,c)]=G(2748367648, 2929095339);c[AWr(96,
c)]=G(3057687578, 2343276271);c[AWr(97,c)]=G(3174313206, 3749242034);c[AWr(98,c)]=G(3398444024, 2999393627);c[AWr(99,c)]=G(1000768301, 2399514902);c[AWr(100,c)]=G(2460222741, 3839223843);c[AWr(101,c)]=G(3686165111, 3071379074);c[AWr(102,c)]=G(3807925548, 2457103259);c[AWr(103,c)]=G(3515700499, 3931365215);c[AWr(104,c)]=G(2812560399, 3145092172);c[AWr(105,c)]=G(532061401, 2516073738);c[AWr(106,c)]=G(4287272078, 4025717980);c[AWr(107,c)]=G(3429817663, 3220574384);c[AWr(108,c)]=G(3602847589, 2576459507);c[AWr(109,
c)]=G(2328582306, 4122335212);c[AWr(110,c)]=G(144878926, 3297868170);c[AWr(111,c)]=G(115903141, 2638294536);c[AWr(112,c)]=G(2762425404, 4221271257);c[AWr(113,c)]=G(491953404, 3377017006);c[AWr(114,c)]=G(3829536560, 2701613604);c[AWr(115,c)]=G(3922622707, 2161290883);c[AWr(116,c)]=G(1122235577, 3458065414);c[AWr(117,c)]=G(1756781920, 2766452331);c[AWr(118,c)]=G(546432077, 2213161865);c[AWr(119,c)]=G(874291324, 3541058984);c[AWr(120,c)]=G(1558426518, 2832847187);c[AWr(121,c)]=G(3823721592, 2266277749);c[AWr(122,
c)]=G(3540974170, 3626044399);c[AWr(123,c)]=G(3691772795, 2900835519);c[AWr(124,c)]=G(3812411695, 2320668415);c[AWr(125,c)]=G(1804891416, 3713069465);c[AWr(126,c)]=G(1443913133, 2970455572);c[AWr(127,c)]=G(3732110884, 2376364457);c[AWr(128,c)]=G(2535403578, 3802183132);c[AWr(129,c)]=G(310335944, 3041746506);c[AWr(130,c)]=G(3684242592, 2433397204);c[AWr(131,c)]=G(3317807769, 3893435527);c[AWr(132,c)]=G(936259297, 3114748422);c[AWr(133,c)]=G(3325987815, 2491798737);c[AWr(134,c)]=G(1885606668, 3986877980);c[AWr(135,
c)]=G(1508485334, 3189502384);c[AWr(136,c)]=G(2065781726, 2551601907);c[AWr(137,c)]=G(4164244222, 4082563051);c[AWr(138,c)]=G(2472401918, 3266050441);c[AWr(139,c)]=G(1118928075, 2612840353);c[AWr(140,c)]=G(931291461, 4180544565);c[AWr(141,c)]=G(745033169, 3344435652);c[AWr(142,c)]=G(3173006913, 2675548521);c[AWr(143,c)]=G(3358824142, 4280877634);c[AWr(144,c)]=G(3546052773, 3424702107);c[AWr(145,c)]=G(1118855300, 2739761686);c[AWr(146,c)]=G(36090780, 2191809349);c[AWr(147,c)]=G(1775732167, 3506894958);c[AWr(148,
c)]=G(3138572652, 2805515966);c[AWr(149,c)]=G(1651864662, 2244412773);c[AWr(150,c)]=G(1783990001, 3591060437);c[AWr(151,c)]=G(4004172378, 2872848349);c[AWr(152,c)]=G(4062331362, 2298278679);c[AWr(153,c)]=G(3922749802, 3677245887);c[AWr(154,c)]=G(1420212923, 2941796710);c[AWr(155,c)]=G(1136170338, 2353437368);c[AWr(156,c)]=G(958879082, 3765499789);c[AWr(157,c)]=G(1626096725, 3012399831);c[AWr(158,c)]=G(441883920, 2409919865);c[AWr(159,c)]=G(707014273, 3855871784);c[AWr(160,c)]=G(1424604878, 3084697427);c[AWr(161,
c)]=G(3716664280, 2467757941);c[AWr(162,c)]=G(4228675929, 3948412706);c[AWr(163,c)]=G(2523947284, 3158730165);c[AWr(164,c)]=G(2019157827, 2526984132);c[AWr(165,c)]=G(4089645983, 4043174611);c[AWr(166,c)]=G(2412723327, 3234539689);c[AWr(167,c)]=G(2789172121, 2587631751);c[AWr(168,c)]=G(2744688475, 4140210802);c[AWr(169,c)]=G(477763862, 3312168642);c[AWr(170,c)]=G(2959191467, 2649734913);c[AWr(171,c)]=G(3875712888, 4239575861);c[AWr(172,c)]=G(2241576851, 3391660689);c[AWr(173,c)]=G(2652254940, 2713328551);c[AWr(174,
c)]=G(1262810493, 2170662841);c[AWr(175,c)]=G(302509870, 3473060546);c[AWr(176,c)]=G(3677981733, 2778448436);c[AWr(177,c)]=G(2083391927, 2222758749);c[AWr(178,c)]=G(756446706, 3556413999);c[AWr(179,c)]=G(1464150824, 2845131199);c[AWr(180,c)]=G(2030314118, 2276104959);c[AWr(181,c)]=G(671522212, 3641767935);c[AWr(182,c)]=G(537217769, 2913414348);c[AWr(183,c)]=G(2147761134, 2330731478);c[AWr(184,c)]=G(2577424355, 3729170365);c[AWr(185,c)]=G(2061939484, 2983336292);c[AWr(186,c)]=G(4226531965, 2386669033);c[AWr(187,
c)]=G(1608490388, 3818670454);c[AWr(188,c)]=G(2145785770, 3054936363);c[AWr(189,c)]=G(3434615534, 2443949090);c[AWr(190,c)]=G(1200417559, 3910318545);c[AWr(191,c)]=G(960334047, 3128254836);c[AWr(192,c)]=G(4204241074, 2502603868);c[AWr(193,c)]=G(1572824964, 4004166190);c[AWr(194,c)]=G(1258259971, 3203332952);c[AWr(195,c)]=G(3583588354, 2562666361);c[AWr(196,c)]=G(4015754449, 4100266178);c[AWr(197,c)]=G(635623181, 3280212943);c[AWr(198,c)]=G(2226485463, 2624170354);c[AWr(199,c)]=G(985396364, 4198672567);c[AWr(200,
c)]=G(3365297469, 3358938053);c[AWr(201,c)]=G(115257597, 2687150443);c[AWr(202,c)]=G(1810192996, 2149720354);c[AWr(203,c)]=G(319328417, 3439552567);c[AWr(204,c)]=G(2832443111, 2751642053);c[AWr(205,c)]=G(3983941407, 2201313642);c[AWr(206,c)]=G(2938332415, 3522101828);c[AWr(207,c)]=G(4068652850, 2817681462);c[AWr(208,c)]=G(1536935362, 2254145170);c[AWr(209,c)]=G(2459096579, 3606632272);c[AWr(210,c)]=G(249290345, 2885305818);c[AWr(211,c)]=G(1917419194, 2308244654);c[AWr(212,c)]=G(490890333, 3693191447);c[AWr(213,
c)]=G(2969692644, 2954553157);c[AWr(214,c)]=G(657767197, 2363642526);c[AWr(215,c)]=G(3629407892, 3781828041);c[AWr(216,c)]=G(2044532855, 3025462433);c[AWr(217,c)]=G(3353613202, 2420369946);c[AWr(218,c)]=G(3647794205, 3872591914);c[AWr(219,c)]=G(3777228823, 3098073531);c[AWr(220,c)]=G(2162789599, 2478458825);c[AWr(221,c)]=G(3460463359, 3965534120);c[AWr(222,c)]=G(2768370687, 3172427296);c[AWr(223,c)]=G(1355703090, 2537941837);c[AWr(224,c)]=G(3028118404, 4060706939);c[AWr(225,c)]=G(3281488183, 3248565551);c[AWr(226,
c)]=G(1766197087, 2598852441);c[AWr(227,c)]=G(1107928421, 4158163906);c[AWr(228,c)]=G(27349277, 3326531125);c[AWr(229,c)]=G(21879422, 2661224900);c[AWr(230,c)]=G(35007075, 4257959840);c[AWr(231,c)]=G(28005660, 3406367872);c[AWr(232,c)]=G(2599384905, 2725094297);c[AWr(233,c)]=G(361521006, 2180075438);c[AWr(234,c)]=G(4014407446, 3488120700);c[AWr(235,c)]=G(3211525957, 2790496560);c[AWr(236,c)]=G(2569220766, 2232397248);c[AWr(237,c)]=G(3251759766, 3571835597);c[AWr(238,c)]=G(883420894, 2857468478);c[AWr(239,c)]
=G(2424723634, 2285974782);c[AWr(240,c)]=G(443583977, 3657559652);c[AWr(241,c)]=G(2931847559, 2926047721);c[AWr(242,c)]=G(1486484588, 2340838177);c[AWr(243,c)]=G(3237368801, 3745341083);c[AWr(244,c)]=G(12914663, 2996272867);c[AWr(245,c)]=G(2587312108, 2397018293);c[AWr(246,c)]=G(3280705914, 3835229269);c[AWr(247,c)]=G(3483558190, 3068183415);c[AWr(248,c)]=G(2786846552, 2454546732);c[AWr(249,c)]=G(1022980646, 3927274772);c[AWr(250,c)]=G(3395364895, 3141819817);c[AWr(251,c)]=G(998304997, 2513455854);c[AWr(252,
c)]=G(3315274914, 4021529366);c[AWr(253,c)]=G(1793226472, 3217223493);c[AWr(254,c)]=G(3152568096, 2573778794);c[AWr(255,c)]=G(2467128576, 4118046071);c[AWr(256,c)]=G(1114709402, 3294436857);c[AWr(257,c)]=G(3468747899, 2635549485);c[AWr(258,c)]=G(1255029343, 4216879177);c[AWr(259,c)]=G(3581003852, 3373503341);c[AWr(260,c)]=G(2005809622, 2698802673);c[AWr(261,c)]=G(3322634616, 2159042138);c[AWr(262,c)]=G(162254630, 3454467422);c[AWr(263,c)]=G(2706784082, 2763573937);c[AWr(264,c)]=G(447440347, 2210859150);c[AWr(265,
c)]=G(715904555, 3537374640);c[AWr(266,c)]=G(572723644, 2829899712);c[AWr(267,c)]=G(3035159293, 2263919769);c[AWr(268,c)]=G(2279274491, 3622271631);c[AWr(269,c)]=G(964426134, 2897817305);c[AWr(270,c)]=G(771540907, 2318253844);c[AWr(271,c)]=G(2952452370, 3709206150);c[AWr(272,c)]=G(2361961896, 2967364920);c[AWr(273,c)]=G(1889569516, 2373891936);c[AWr(274,c)]=G(1305324308, 3798227098);c[AWr(275,c)]=G(2762246365, 3038581678);c[AWr(276,c)]=G(3927784010, 2430865342);c[AWr(277,c)]=G(2848480580, 3889384548);c[AWr(278,
c)]=G(3996771382, 3111507638);c[AWr(279,c)]=G(620436728, 2489206111);c[AWr(280,c)]=G(3569679143, 3982729777);c[AWr(281,c)]=G(1137756396, 3186183822);c[AWr(282,c)]=G(3487185494, 2548947057);c[AWr(283,c)]=G(2143522954, 4078315292);c[AWr(284,c)]=G(4291798741, 3262652233);c[AWr(285,c)]=G(856458615, 2610121787);c[AWr(286,c)]=G(2229327243, 4176194859);c[AWr(287,c)]=G(2642455254, 3340955887);c[AWr(288,c)]=G(395977285, 2672764710);c[AWr(289,c)]=G(633563656, 4276423536);c[AWr(290,c)]=G(3942824761, 3421138828);c[AWr(291,
c)]=G(577279431, 2736911063);c[AWr(292,c)]=G(2179810463, 2189528850);c[AWr(293,c)]=G(3487696741, 3503246160);c[AWr(294,c)]=G(2790157393, 2802596928);c[AWr(295,c)]=G(3950112833, 2242077542);c[AWr(296,c)]=G(2884206696, 3587324068);c[AWr(297,c)]=G(4025352275, 2869859254);c[AWr(298,c)]=G(4079275279, 2295887403);c[AWr(299,c)]=G(1372879692, 3673419846);c[AWr(300,c)]=G(239310294, 2938735877);c[AWr(301,c)]=G(2768428613, 2350988701);c[AWr(302,c)]=G(2711498862, 3761581922);c[AWr(303,c)]=G(451212171, 3009265538);c[AWr(304,
c)]=G(2078956655, 2407412430);c[AWr(305,c)]=G(3326330649, 3851859888);c[AWr(306,c)]=G(84084141, 3081487911);c[AWr(307,c)]=G(3503241150, 2465190328);c[AWr(308,c)]=G(451225085, 3944304526);c[AWr(309,c)]=G(3796953905, 3155443620);c[AWr(310,c)]=G(3037563124, 2524354896);c[AWr(311,c)]=G(3142114080, 4038967834);c[AWr(312,c)]=G(3372684723, 3231174267);c[AWr(313,c)]=G(980160860, 2584939414);c[AWr(314,c)]=G(3286244294, 4135903062);c[AWr(315,c)]=G(911008517, 3308722450);c[AWr(316,c)]=G(728806813, 2646977960);c[AWr(317,
c)]=G(1166090902, 4235164736);c[AWr(318,c)]=G(73879262, 3388131789);c[AWr(319,c)]=G(918096869, 2710505431);c[AWr(320,c)]=G(4170451332, 2168404344);c[AWr(321,c)]=G(4095741754, 3469446951);c[AWr(322,c)]=G(2417599944, 2775557561);c[AWr(323,c)]=G(1075086496, 2220446049);c[AWr(324,c)]=G(3438125312, 3552713678);c[AWr(325,c)]=G(173519872, 2842170943);c[AWr(326,c)]=G(1856802816, 2273736754);c[AWr(327,c)]=G(393904128, 3637978807);c[AWr(328,c)]=G(2892103680, 2910383045);c[AWr(329,c)]=G(2313682944, 2328306436);c[AWr(330,
c)]=G(1983905792, 3725290298);c[AWr(331,c)]=G(3305111552, 2980232238);c[AWr(332,c)]=G(67108864, 2384185791);c[AWr(333,c)]=G(2684354560, 3814697265);c[AWr(334,c)]=G(2147483648, 3051757812);c[AWr(335,c)]=G(0, 2441406250);c[AWr(336,c)]=G(0, 3906250000);c[AWr(337,c)]=G(0, 3125000000);c[AWr(338,c)]=G(0, 2500000000);c[AWr(339,c)]=G(0, 4000000000);c[AWr(340,c)]=G(0, 3200000000);c[AWr(341,c)]=G(0, 2560000000);c[AWr(342,c)]=G(0, 4096000000);c[AWr(343,c)]=G(0, 3276800000);c[AWr(344,c)]=G(0, 2621440000);c[AWr(345,c)]=
G(0, 4194304000);c[AWr(346,c)]=G(0, 3355443200);c[AWr(347,c)]=G(0, 2684354560);c[AWr(348,c)]=G(0, 2147483648);c[AWr(349,c)]=G(3435973836, 3435973836);c[AWr(350,c)]=G(1889785610, 2748779069);c[AWr(351,c)]=G(2370821947, 2199023255);c[AWr(352,c)]=G(3793315115, 3518437208);c[AWr(353,c)]=G(457671715, 2814749767);c[AWr(354,c)]=G(2943117749, 2251799813);c[AWr(355,c)]=G(3849994940, 3602879701);c[AWr(356,c)]=G(2221002492, 2882303761);c[AWr(357,c)]=G(917808535, 2305843009);c[AWr(358,c)]=G(3186480574, 3689348814);c[AWr(359,
c)]=G(3408177918, 2951479051);c[AWr(360,c)]=G(1867548875, 2361183241);c[AWr(361,c)]=G(1270091283, 3777893186);c[AWr(362,c)]=G(157079567, 3022314549);c[AWr(363,c)]=G(984657113, 2417851639);c[AWr(364,c)]=G(3293438299, 3868562622);c[AWr(365,c)]=G(916763721, 3094850098);c[AWr(366,c)]=G(2451397895, 2475880078);c[AWr(367,c)]=G(3063243173, 3961408125);c[AWr(368,c)]=G(2450594538, 3169126500);c[AWr(369,c)]=G(1960475630, 2535301200);c[AWr(370,c)]=G(3136761009, 4056481920);c[AWr(371,c)]=G(2509408807, 3245185536);c[AWr(372,
c)]=G(1148533586, 2596148429);c[AWr(373,c)]=G(3555640657, 4153837486);c[AWr(374,c)]=G(1985519066, 3323069989);c[AWr(375,c)]=G(2447408712, 2658455991);c[AWr(376,c)]=G(2197867021, 4253529586);c[AWr(377,c)]=G(899300158, 3402823669);c[AWr(378,c)]=G(1578433585, 2722258935);c[AWr(379,c)]=G(1262746868, 2177807148);c[AWr(380,c)]=G(1161401530, 3484491437);c[AWr(381,c)]=G(3506101601, 2787593149);c[AWr(382,c)]=G(3663874740, 2230074519);c[AWr(383,c)]=G(3285219207, 3568119231);c[AWr(384,c)]=G(1769181906, 2854495385);c[AWr(385,
c)]=G(1415345525, 2283596308);c[AWr(386,c)]=G(1405559381, 3653754093);c[AWr(387,c)]=G(2842434423, 2923003274);c[AWr(388,c)]=G(3132940998, 2338402619);c[AWr(389,c)]=G(2435725219, 3741444191);c[AWr(390,c)]=G(1089586716, 2993155353);c[AWr(391,c)]=G(2589656291, 2394524282);c[AWr(392,c)]=G(707476229, 3831238852);c[AWr(393,c)]=G(3142961361, 3064991081);c[AWr(394,c)]=G(1655375629, 2451992865);c[AWr(395,c)]=G(2648601007, 3923188584);c[AWr(396,c)]=G(2977874265, 3138550867);c[AWr(397,c)]=G(664312493, 2510840694);c[AWr(398,
c)]=G(2780886908, 4017345110);c[AWr(399,c)]=G(2224709526, 3213876088);c[AWr(400,c)]=G(3497754539, 2571100870);c[AWr(401,c)]=G(1301439967, 4113761393);c[AWr(402,c)]=G(2759138892, 3291009114);c[AWr(403,c)]=G(3066304573, 2632807291);c[AWr(404,c)]=G(3188100398, 4212491666);c[AWr(405,c)]=G(1691486859, 3369993333);c[AWr(406,c)]=G(3071176406, 2695994666);c[AWr(407,c)]=G(1597947665, 2156795733);c[AWr(408,c)]=G(1697722806, 3450873173);c[AWr(409,c)]=G(3076165163, 2760698538);c[AWr(410,c)]=G(4178919049, 2208558830);c[AWr(411,
c)]=G(2391303182, 3533694129);c[AWr(412,c)]=G(2772036005, 2826955303);c[AWr(413,c)]=G(3935615722, 2261564242);c[AWr(414,c)]=G(2861011319, 3618502788);c[AWr(415,c)]=G(4006795973, 2894802230);c[AWr(416,c)]=G(3205436779, 2315841784);c[AWr(417,c)]=G(2551718468, 3705346855);c[AWr(418,c)]=G(2041374775, 2964277484);c[AWr(419,c)]=G(2492093279, 2371421987);c[AWr(420,c)]=G(551375410, 3794275180);c[AWr(421,c)]=G(441100328, 3035420144);c[AWr(422,c)]=G(1211873721, 2428336115);c[AWr(423,c)]=G(1938997954, 3885337784);c[AWr(424,
c)]=G(2410191822, 3108270227);c[AWr(425,c)]=G(210166539, 2486616182);c[AWr(426,c)]=G(1195259923, 3978585891);c[AWr(427,c)]=G(97214479, 3182868713);c[AWr(428,c)]=G(1795758501, 2546294970);c[AWr(429,c)]=G(2873213602, 4074071952);c[AWr(430,c)]=G(580583963, 3259257562);c[AWr(431,c)]=G(3041447548, 2607406049);c[AWr(432,c)]=G(2289335700, 4171849679);c[AWr(433,c)]=G(2690462019, 3337479743);c[AWr(434,c)]=G(3870356534, 2669983794);c[AWr(435,c)]=G(3615590076, 4271974071);c[AWr(436,c)]=G(2033478602, 3417579257);c[AWr(437,
c)]=G(4203763259, 2734063405);c[AWr(438,c)]=G(3363010607, 2187250724);c[AWr(439,c)]=G(2803836594, 3499601159);c[AWr(440,c)]=G(3102062734, 2799680927);c[AWr(441,c)]=G(763663269, 2239744742);c[AWr(442,c)]=G(2080854690, 3583591587);c[AWr(443,c)]=G(4241664129, 2866873269);c[AWr(444,c)]=G(4252324763, 2293498615);c[AWr(445,c)]=G(2508752324, 3669597785);c[AWr(446,c)]=G(2007001859, 2935678228);c[AWr(447,c)]=G(3323588406, 2348542582);c[AWr(448,c)]=G(1881767613, 3757668132);c[AWr(449,c)]=G(4082394468, 3006134505);c[AWr(450,
c)]=G(3265915574, 2404907604);c[AWr(451,c)]=G(2648484541, 3847852167);c[AWr(452,c)]=G(400800715, 3078281734);c[AWr(453,c)]=G(1179634031, 2462625387);c[AWr(454,c)]=G(2746407909, 3940200619);c[AWr(455,c)]=G(3056119786, 3152160495);c[AWr(456,c)]=G(2444895829, 2521728396);c[AWr(457,c)]=G(2193846408, 4034765434);c[AWr(458,c)]=G(2614070585, 3227812347);c[AWr(459,c)]=G(373269550, 2582249878);c[AWr(460,c)]=G(4033205117, 4131599804);c[AWr(461,c)]=G(4085557553, 3305279843);c[AWr(462,c)]=G(691465664, 2644223875);c[AWr(463,
c)]=G(1106345063, 4230758200);c[AWr(464,c)]=G(885076050, 3384606560);c[AWr(465,c)]=G(708060840, 2707685248);c[AWr(466,c)]=G(2284435591, 2166148198);c[AWr(467,c)]=G(2796103486, 3465837117);c[AWr(468,c)]=G(518895870, 2772669694);c[AWr(469,c)]=G(1274110155, 2218135755);c[AWr(470,c)]=G(2038576249, 3549017208);c[AWr(471,c)]=G(3348847917, 2839213766);c[AWr(472,c)]=G(1820084875, 2271371013);c[AWr(473,c)]=G(2053142340, 3634193621);c[AWr(474,c)]=G(783520413, 2907354897);c[AWr(475,c)]=G(3203796708, 2325883917);c[AWr(476,
c)]=G(1690100896, 3721414268);c[AWr(477,c)]=G(3070067635, 2977131414);c[AWr(478,c)]=G(3315047567, 2381705131);c[AWr(479,c)]=G(3586089190, 3810728210);c[AWr(480,c)]=G(2868871352, 3048582568);c[AWr(481,c)]=G(4013084000, 2438866054);c[AWr(482,c)]=G(3843954022, 3902185687);c[AWr(483,c)]=G(1357176299, 3121748550);c[AWr(484,c)]=G(1085741039, 2497398840);c[AWr(485,c)]=G(1737185663, 3995838144);c[AWr(486,c)]=G(2248741989, 3196670515);c[AWr(487,c)]=G(1798993591, 2557336412);c[AWr(488,c)]=G(3737383206, 4091738259);c[AWr(489,
c)]=G(3848900024, 3273390607);c[AWr(490,c)]=G(1361133101, 2618712486);c[AWr(491,c)]=G(459826043, 4189939978);c[AWr(492,c)]=G(2085847752, 3351951982);c[AWr(493,c)]=G(4245658579, 2681561585);c[AWr(494,c)]=G(2498086431, 4290498537);c[AWr(495,c)]=G(280482227, 3432398830);c[AWr(496,c)]=G(224385781, 2745919064);c[AWr(497,c)]=G(1038502084, 2196735251);c[AWr(498,c)]=G(4238583712, 3514776401);c[AWr(499,c)]=G(2531873511, 2811821121);c[AWr(500,c)]=G(1166505349, 2249456897);c[AWr(501,c)]=G(2725402018, 3599131035);c[AWr(502,
c)]=G(2180321615, 2879304828);c[AWr(503,c)]=G(3462244210, 2303443862);c[AWr(504,c)]=G(2103616899, 3685510180);c[AWr(505,c)]=G(1682893519, 2948408144);c[AWr(506,c)]=G(2205308275, 2358726515);c[AWr(507,c)]=G(3528493240, 3773962424);c[AWr(508,c)]=G(3681788051, 3019169939);c[AWr(509,c)]=G(3804423900, 2415335951);c[AWr(510,c)]=G(74124026, 3864537523);c[AWr(511,c)]=G(1777286139, 3091630018);c[AWr(512,c)]=G(3139815829, 2473304014);c[AWr(513,c)]=G(2446724950, 3957286423);c[AWr(514,c)]=G(3675366878, 3165829138);c[AWr(515,
c)]=G(363313125, 2532663311);c[AWr(516,c)]=G(3158281377, 4052261297);c[AWr(517,c)]=G(808638183, 3241809038);c[AWr(518,c)]=G(2364897465, 2593447230);c[AWr(519,c)]=G(3783835944, 4149515568);c[AWr(520,c)]=G(450088378, 3319612455);c[AWr(521,c)]=G(360070702, 2655689964);c[AWr(522,c)]=G(2294100042, 4249103942);c[AWr(523,c)]=G(117293115, 3399283154);c[AWr(524,c)]=G(952827951, 2719426523);c[AWr(525,c)]=G(2480249279, 2175541218);c[AWr(526,c)]=G(3109405388, 3480865949);c[AWr(527,c)]=G(3346517769, 2784692759);c[AWr(528,
c)]=G(3536207675, 2227754207);c[AWr(529,c)]=G(2221958443, 3564406732);c[AWr(530,c)]=G(59579836, 2851525386);c[AWr(531,c)]=G(3483637705, 2281220308);c[AWr(532,c)]=G(419859574, 3649952494);c[AWr(533,c)]=G(1194881118, 2919961995);c[AWr(534,c)]=G(955904894, 2335969596);c[AWr(535,c)]=G(4106428209, 3737551353);c[AWr(536,c)]=G(708162189, 2990041083);c[AWr(537,c)]=G(2284516670, 2392032866);c[AWr(538,c)]=G(1937239754, 3827252586);c[AWr(539,c)]=G(690798344, 3061802069);c[AWr(540,c)]=G(1411632134, 2449441655);c[AWr(541,
c)]=G(2258611415, 3919106648);c[AWr(542,c)]=G(3524876050, 3135285318);c[AWr(543,c)]=G(242920462, 2508228255);c[AWr(544,c)]=G(388672740, 4013165208);c[AWr(545,c)]=G(2028925110, 3210532166);c[AWr(546,c)]=G(764146629, 2568425733);c[AWr(547,c)]=G(363641147, 4109481173);c[AWr(548,c)]=G(2008899836, 3287584938);c[AWr(549,c)]=G(3325106787, 2630067950);c[AWr(550,c)]=G(1025203564, 4208108721);c[AWr(551,c)]=G(4256136688, 3366486976);c[AWr(552,c)]=G(2545915891, 2693189581);c[AWr(553,c)]=G(1177739254, 2154551665);c[AWr(554,
c)]=G(1884382806, 3447282664);c[AWr(555,c)]=G(2366499704, 2757826131);c[AWr(556,c)]=G(1034206304, 2206260905);c[AWr(557,c)]=G(1654730086, 3530017448);c[AWr(558,c)]=G(3041770987, 2824013958);c[AWr(559,c)]=G(4151403708, 2259211166);c[AWr(560,c)]=G(629291719, 3614737867);c[AWr(561,c)]=G(3080413753, 2891790293);c[AWr(562,c)]=G(4182317920, 2313432234);c[AWr(563,c)]=G(4114728295, 3701491575);c[AWr(564,c)]=G(3291782636, 2961193260);c[AWr(565,c)]=G(2633426109, 2368954608);c[AWr(566,c)]=G(3354488315, 3790327373);c[AWr(567,
c)]=G(106610275, 3032261899);c[AWr(568,c)]=G(944281679, 2425809519);c[AWr(569,c)]=G(3228837605, 3881295230);c[AWr(570,c)]=G(2583070084, 3105036184);c[AWr(571,c)]=G(2925449526, 2484028947);c[AWr(572,c)]=G(1244745405, 3974446316);c[AWr(573,c)]=G(136802865, 3179557053);c[AWr(574,c)]=G(1827429210, 2543645642);c[AWr(575,c)]=G(3782880196, 4069833027);c[AWr(576,c)]=G(1308317238, 3255866422);c[AWr(577,c)]=G(3623634168, 2604693137);c[AWr(578,c)]=G(2361840832, 4167509020);c[AWr(579,c)]=G(1889472666, 3334007216);c[AWr(580,
c)]=G(652584673, 2667205773);c[AWr(581,c)]=G(185142018, 4267529237);c[AWr(582,c)]=G(2725093992, 3414023389);c[AWr(583,c)]=G(3039068653, 2731218711);c[AWr(584,c)]=G(1572261463, 2184974969);c[AWr(585,c)]=G(4233605259, 3495959950);c[AWr(586,c)]=G(3386884207, 2796767960);c[AWr(587,c)]=G(2709507366, 2237414368);c[AWr(588,c)]=G(3476218326, 3579862989);c[AWr(589,c)]=G(3639968120, 2863890391);c[AWr(590,c)]=G(2052981037, 2291112313);c[AWr(591,c)]=G(2425776200, 3665779701);c[AWr(592,c)]=G(1081627501, 2932623761);c[AWr(593,
c)]=G(6308541, 2346099009);c[AWr(594,c)]=G(1728080585, 3753758414);c[AWr(595,c)]=G(2241457927, 3003006731);c[AWr(596,c)]=G(934172882, 2402405385);c[AWr(597,c)]=G(1494676612, 3843848616);c[AWr(598,c)]=G(336747830, 3075078893);c[AWr(599,c)]=G(1987385183, 2460063114);c[AWr(600,c)]=G(602835915, 3936100983);c[AWr(601,c)]=G(2200255650, 3148880786);c[AWr(602,c)]=G(901211061, 2519104629);c[AWr(603,c)]=G(3159924616, 4030567406);c[AWr(604,c)]=G(1668946233, 3224453925);c[AWr(605,c)]=G(1335156987, 2579563140);c[AWr(606,
c)]=G(2136251179, 4127301024);c[AWr(607,c)]=G(2567994402, 3301840819);c[AWr(608,c)]=G(2913388981, 2641472655);c[AWr(609,c)]=G(366455074, 4226356249);c[AWr(610,c)]=G(1152157518, 3381084999);c[AWr(611,c)]=G(1780719474, 2704867999);c[AWr(612,c)]=G(2283569038, 2163894399);c[AWr(613,c)]=G(1076730083, 3462231039);c[AWr(614,c)]=G(1720377526, 2769784831);c[AWr(615,c)]=G(517308561, 2215827865);c[AWr(616,c)]=G(827693699, 3545324584);c[AWr(617,c)]=G(1521148418, 2836259667);c[AWr(618,c)]=G(3793899112, 2269007733);c[AWr(619,
c)]=G(916277824, 3630412374);c[AWr(620,c)]=G(1592015718, 2904329899);c[AWr(621,c)]=G(2132606034, 2323463919);c[AWr(622,c)]=G(835189277, 3717542271);c[AWr(623,c)]=G(4104125258, 2974033816);c[AWr(624,c)]=G(2424306747, 2379227053);c[AWr(625,c)]=G(3019897337, 3806763285);c[AWr(626,c)]=G(2415917869, 3045410628);c[AWr(627,c)]=G(3650721214, 2436328502);c[AWr(628,c)]=G(2405180105, 3898125604);c[AWr(629,c)]=G(2783137543, 3118500483);c[AWr(630,c)]=G(3944496953, 2494800386);c[AWr(631,c)]=G(298240911, 3991680619);c[AWr(632,
c)]=G(1097586188, 3193344495);c[AWr(633,c)]=G(878068950, 2554675596);c[AWr(634,c)]=G(3981890698, 4087480953);c[AWr(635,c)]=G(608532181, 3269984763);c[AWr(636,c)]=G(2204812663, 2615987810);c[AWr(637,c)]=G(3527700261, 4185580496);c[AWr(638,c)]=G(1963166749, 3348464397);c[AWr(639,c)]=G(4147513777, 2678771517);c[AWr(640,c)]=G(3200048207, 4286034428);c[AWr(641,c)]=G(4278025484, 3428827542);c[AWr(642,c)]=G(1704433468, 2743062034);c[AWr(643,c)]=G(2222540234, 2194449627);c[AWr(644,c)]=G(120090538, 3511119404);c[AWr(645,
c)]=G(955065889, 2808895523);c[AWr(646,c)]=G(2482039630, 2247116418);c[AWr(647,c)]=G(3112269949, 3595386269);c[AWr(648,c)]=G(3348809418, 2876309015);c[AWr(649,c)]=G(2679047534, 2301047212);c[AWr(650,c)]=G(850502218, 3681675540);c[AWr(651,c)]=G(680401775, 2945340432);c[AWr(652,c)]=G(3121301797, 2356272345);c[AWr(653,c)]=G(699115580, 3770035753);c[AWr(654,c)]=G(2277279382, 3016028602);c[AWr(655,c)]=G(103836587, 2412822882);c[AWr(656,c)]=G(1025131999, 3860516611);c[AWr(657,c)]=G(4256079436, 3088413288);c[AWr(658,
c)]=G(827883168, 2470730631);c[AWr(659,c)]=G(3901593088, 3953169009);A3K=b;b=Yh(660);c=b.data;c[AWr(0,c)]=(-70);c[AWr(1,c)]=(-66);c[AWr(2,c)]=(-63);c[AWr(3,c)]=(-60);c[AWr(4,c)]=(-56);c[AWr(5,c)]=(-53);c[AWr(6,c)]=(-50);c[AWr(7,c)]=(-46);c[AWr(8,c)]=(-43);c[AWr(9,c)]=(-40);c[AWr(10,c)]=(-36);c[AWr(11,c)]=(-33);c[AWr(12,c)]=(-30);c[AWr(13,c)]=(-26);c[AWr(14,c)]=(-23);c[AWr(15,c)]=(-20);c[AWr(16,c)]=(-16);c[AWr(17,c)]=(-13);c[AWr(18,c)]=(-10);c[AWr(19,c)]=(-6);c[AWr(20,c)]=(-3);c[AWr(21,c)]=0;c[AWr(22,c)]=4;c[AWr(23,
c)]=7;c[AWr(24,c)]=10;c[AWr(25,c)]=14;c[AWr(26,c)]=17;c[AWr(27,c)]=20;c[AWr(28,c)]=23;c[AWr(29,c)]=27;c[AWr(30,c)]=30;c[AWr(31,c)]=33;c[AWr(32,c)]=37;c[AWr(33,c)]=40;c[AWr(34,c)]=43;c[AWr(35,c)]=47;c[AWr(36,c)]=50;c[AWr(37,c)]=53;c[AWr(38,c)]=57;c[AWr(39,c)]=60;c[AWr(40,c)]=63;c[AWr(41,c)]=67;c[AWr(42,c)]=70;c[AWr(43,c)]=73;c[AWr(44,c)]=77;c[AWr(45,c)]=80;c[AWr(46,c)]=83;c[AWr(47,c)]=87;c[AWr(48,c)]=90;c[AWr(49,c)]=93;c[AWr(50,c)]=97;c[AWr(51,c)]=100;c[AWr(52,c)]=103;c[AWr(53,c)]=107;c[AWr(54,c)]=110;c[AWr(55,
c)]=113;c[AWr(56,c)]=116;c[AWr(57,c)]=120;c[AWr(58,c)]=123;c[AWr(59,c)]=126;c[AWr(60,c)]=130;c[AWr(61,c)]=133;c[AWr(62,c)]=136;c[AWr(63,c)]=140;c[AWr(64,c)]=143;c[AWr(65,c)]=146;c[AWr(66,c)]=150;c[AWr(67,c)]=153;c[AWr(68,c)]=156;c[AWr(69,c)]=160;c[AWr(70,c)]=163;c[AWr(71,c)]=166;c[AWr(72,c)]=170;c[AWr(73,c)]=173;c[AWr(74,c)]=176;c[AWr(75,c)]=180;c[AWr(76,c)]=183;c[AWr(77,c)]=186;c[AWr(78,c)]=190;c[AWr(79,c)]=193;c[AWr(80,c)]=196;c[AWr(81,c)]=200;c[AWr(82,c)]=203;c[AWr(83,c)]=206;c[AWr(84,c)]=210;c[AWr(85,c)]
=213;c[AWr(86,c)]=216;c[AWr(87,c)]=219;c[AWr(88,c)]=223;c[AWr(89,c)]=226;c[AWr(90,c)]=229;c[AWr(91,c)]=233;c[AWr(92,c)]=236;c[AWr(93,c)]=239;c[AWr(94,c)]=243;c[AWr(95,c)]=246;c[AWr(96,c)]=249;c[AWr(97,c)]=253;c[AWr(98,c)]=256;c[AWr(99,c)]=259;c[AWr(100,c)]=263;c[AWr(101,c)]=266;c[AWr(102,c)]=269;c[AWr(103,c)]=273;c[AWr(104,c)]=276;c[AWr(105,c)]=279;c[AWr(106,c)]=283;c[AWr(107,c)]=286;c[AWr(108,c)]=289;c[AWr(109,c)]=293;c[AWr(110,c)]=296;c[AWr(111,c)]=299;c[AWr(112,c)]=303;c[AWr(113,c)]=306;c[AWr(114,c)]=309;c[AWr(115,
c)]=312;c[AWr(116,c)]=316;c[AWr(117,c)]=319;c[AWr(118,c)]=322;c[AWr(119,c)]=326;c[AWr(120,c)]=329;c[AWr(121,c)]=332;c[AWr(122,c)]=336;c[AWr(123,c)]=339;c[AWr(124,c)]=342;c[AWr(125,c)]=346;c[AWr(126,c)]=349;c[AWr(127,c)]=352;c[AWr(128,c)]=356;c[AWr(129,c)]=359;c[AWr(130,c)]=362;c[AWr(131,c)]=366;c[AWr(132,c)]=369;c[AWr(133,c)]=372;c[AWr(134,c)]=376;c[AWr(135,c)]=379;c[AWr(136,c)]=382;c[AWr(137,c)]=386;c[AWr(138,c)]=389;c[AWr(139,c)]=392;c[AWr(140,c)]=396;c[AWr(141,c)]=399;c[AWr(142,c)]=402;c[AWr(143,c)]=406;c[AWr(144,
c)]=409;c[AWr(145,c)]=412;c[AWr(146,c)]=415;c[AWr(147,c)]=419;c[AWr(148,c)]=422;c[AWr(149,c)]=425;c[AWr(150,c)]=429;c[AWr(151,c)]=432;c[AWr(152,c)]=435;c[AWr(153,c)]=439;c[AWr(154,c)]=442;c[AWr(155,c)]=445;c[AWr(156,c)]=449;c[AWr(157,c)]=452;c[AWr(158,c)]=455;c[AWr(159,c)]=459;c[AWr(160,c)]=462;c[AWr(161,c)]=465;c[AWr(162,c)]=469;c[AWr(163,c)]=472;c[AWr(164,c)]=475;c[AWr(165,c)]=479;c[AWr(166,c)]=482;c[AWr(167,c)]=485;c[AWr(168,c)]=489;c[AWr(169,c)]=492;c[AWr(170,c)]=495;c[AWr(171,c)]=499;c[AWr(172,c)]=502;c[AWr(173,
c)]=505;c[AWr(174,c)]=508;c[AWr(175,c)]=512;c[AWr(176,c)]=515;c[AWr(177,c)]=518;c[AWr(178,c)]=522;c[AWr(179,c)]=525;c[AWr(180,c)]=528;c[AWr(181,c)]=532;c[AWr(182,c)]=535;c[AWr(183,c)]=538;c[AWr(184,c)]=542;c[AWr(185,c)]=545;c[AWr(186,c)]=548;c[AWr(187,c)]=552;c[AWr(188,c)]=555;c[AWr(189,c)]=558;c[AWr(190,c)]=562;c[AWr(191,c)]=565;c[AWr(192,c)]=568;c[AWr(193,c)]=572;c[AWr(194,c)]=575;c[AWr(195,c)]=578;c[AWr(196,c)]=582;c[AWr(197,c)]=585;c[AWr(198,c)]=588;c[AWr(199,c)]=592;c[AWr(200,c)]=595;c[AWr(201,c)]=598;c[AWr(202,
c)]=601;c[AWr(203,c)]=605;c[AWr(204,c)]=608;c[AWr(205,c)]=611;c[AWr(206,c)]=615;c[AWr(207,c)]=618;c[AWr(208,c)]=621;c[AWr(209,c)]=625;c[AWr(210,c)]=628;c[AWr(211,c)]=631;c[AWr(212,c)]=635;c[AWr(213,c)]=638;c[AWr(214,c)]=641;c[AWr(215,c)]=645;c[AWr(216,c)]=648;c[AWr(217,c)]=651;c[AWr(218,c)]=655;c[AWr(219,c)]=658;c[AWr(220,c)]=661;c[AWr(221,c)]=665;c[AWr(222,c)]=668;c[AWr(223,c)]=671;c[AWr(224,c)]=675;c[AWr(225,c)]=678;c[AWr(226,c)]=681;c[AWr(227,c)]=685;c[AWr(228,c)]=688;c[AWr(229,c)]=691;c[AWr(230,c)]=695;c[AWr(231,
c)]=698;c[AWr(232,c)]=701;c[AWr(233,c)]=704;c[AWr(234,c)]=708;c[AWr(235,c)]=711;c[AWr(236,c)]=714;c[AWr(237,c)]=718;c[AWr(238,c)]=721;c[AWr(239,c)]=724;c[AWr(240,c)]=728;c[AWr(241,c)]=731;c[AWr(242,c)]=734;c[AWr(243,c)]=738;c[AWr(244,c)]=741;c[AWr(245,c)]=744;c[AWr(246,c)]=748;c[AWr(247,c)]=751;c[AWr(248,c)]=754;c[AWr(249,c)]=758;c[AWr(250,c)]=761;c[AWr(251,c)]=764;c[AWr(252,c)]=768;c[AWr(253,c)]=771;c[AWr(254,c)]=774;c[AWr(255,c)]=778;c[AWr(256,c)]=781;c[AWr(257,c)]=784;c[AWr(258,c)]=788;c[AWr(259,c)]=791;c[AWr(260,
c)]=794;c[AWr(261,c)]=797;c[AWr(262,c)]=801;c[AWr(263,c)]=804;c[AWr(264,c)]=807;c[AWr(265,c)]=811;c[AWr(266,c)]=814;c[AWr(267,c)]=817;c[AWr(268,c)]=821;c[AWr(269,c)]=824;c[AWr(270,c)]=827;c[AWr(271,c)]=831;c[AWr(272,c)]=834;c[AWr(273,c)]=837;c[AWr(274,c)]=841;c[AWr(275,c)]=844;c[AWr(276,c)]=847;c[AWr(277,c)]=851;c[AWr(278,c)]=854;c[AWr(279,c)]=857;c[AWr(280,c)]=861;c[AWr(281,c)]=864;c[AWr(282,c)]=867;c[AWr(283,c)]=871;c[AWr(284,c)]=874;c[AWr(285,c)]=877;c[AWr(286,c)]=881;c[AWr(287,c)]=884;c[AWr(288,c)]=887;c[AWr(289,
c)]=891;c[AWr(290,c)]=894;c[AWr(291,c)]=897;c[AWr(292,c)]=900;c[AWr(293,c)]=904;c[AWr(294,c)]=907;c[AWr(295,c)]=910;c[AWr(296,c)]=914;c[AWr(297,c)]=917;c[AWr(298,c)]=920;c[AWr(299,c)]=924;c[AWr(300,c)]=927;c[AWr(301,c)]=930;c[AWr(302,c)]=934;c[AWr(303,c)]=937;c[AWr(304,c)]=940;c[AWr(305,c)]=944;c[AWr(306,c)]=947;c[AWr(307,c)]=950;c[AWr(308,c)]=954;c[AWr(309,c)]=957;c[AWr(310,c)]=960;c[AWr(311,c)]=964;c[AWr(312,c)]=967;c[AWr(313,c)]=970;c[AWr(314,c)]=974;c[AWr(315,c)]=977;c[AWr(316,c)]=980;c[AWr(317,c)]=984;c[AWr(318,
c)]=987;c[AWr(319,c)]=990;c[AWr(320,c)]=993;c[AWr(321,c)]=997;c[AWr(322,c)]=1000;c[AWr(323,c)]=1003;c[AWr(324,c)]=1007;c[AWr(325,c)]=1010;c[AWr(326,c)]=1013;c[AWr(327,c)]=1017;c[AWr(328,c)]=1020;c[AWr(329,c)]=1023;c[AWr(330,c)]=1027;c[AWr(331,c)]=1030;c[AWr(332,c)]=1033;c[AWr(333,c)]=1037;c[AWr(334,c)]=1040;c[AWr(335,c)]=1043;c[AWr(336,c)]=1047;c[AWr(337,c)]=1050;c[AWr(338,c)]=1053;c[AWr(339,c)]=1057;c[AWr(340,c)]=1060;c[AWr(341,c)]=1063;c[AWr(342,c)]=1067;c[AWr(343,c)]=1070;c[AWr(344,c)]=1073;c[AWr(345,c)]
=1077;c[AWr(346,c)]=1080;c[AWr(347,c)]=1083;c[AWr(348,c)]=1086;c[AWr(349,c)]=1090;c[AWr(350,c)]=1093;c[AWr(351,c)]=1096;c[AWr(352,c)]=1100;c[AWr(353,c)]=1103;c[AWr(354,c)]=1106;c[AWr(355,c)]=1110;c[AWr(356,c)]=1113;c[AWr(357,c)]=1116;c[AWr(358,c)]=1120;c[AWr(359,c)]=1123;c[AWr(360,c)]=1126;c[AWr(361,c)]=1130;c[AWr(362,c)]=1133;c[AWr(363,c)]=1136;c[AWr(364,c)]=1140;c[AWr(365,c)]=1143;c[AWr(366,c)]=1146;c[AWr(367,c)]=1150;c[AWr(368,c)]=1153;c[AWr(369,c)]=1156;c[AWr(370,c)]=1160;c[AWr(371,c)]=1163;c[AWr(372,c)]
=1166;c[AWr(373,c)]=1170;c[AWr(374,c)]=1173;c[AWr(375,c)]=1176;c[AWr(376,c)]=1180;c[AWr(377,c)]=1183;c[AWr(378,c)]=1186;c[AWr(379,c)]=1189;c[AWr(380,c)]=1193;c[AWr(381,c)]=1196;c[AWr(382,c)]=1199;c[AWr(383,c)]=1203;c[AWr(384,c)]=1206;c[AWr(385,c)]=1209;c[AWr(386,c)]=1213;c[AWr(387,c)]=1216;c[AWr(388,c)]=1219;c[AWr(389,c)]=1223;c[AWr(390,c)]=1226;c[AWr(391,c)]=1229;c[AWr(392,c)]=1233;c[AWr(393,c)]=1236;c[AWr(394,c)]=1239;c[AWr(395,c)]=1243;c[AWr(396,c)]=1246;c[AWr(397,c)]=1249;c[AWr(398,c)]=1253;c[AWr(399,c)]
=1256;c[AWr(400,c)]=1259;c[AWr(401,c)]=1263;c[AWr(402,c)]=1266;c[AWr(403,c)]=1269;c[AWr(404,c)]=1273;c[AWr(405,c)]=1276;c[AWr(406,c)]=1279;c[AWr(407,c)]=1282;c[AWr(408,c)]=1286;c[AWr(409,c)]=1289;c[AWr(410,c)]=1292;c[AWr(411,c)]=1296;c[AWr(412,c)]=1299;c[AWr(413,c)]=1302;c[AWr(414,c)]=1306;c[AWr(415,c)]=1309;c[AWr(416,c)]=1312;c[AWr(417,c)]=1316;c[AWr(418,c)]=1319;c[AWr(419,c)]=1322;c[AWr(420,c)]=1326;c[AWr(421,c)]=1329;c[AWr(422,c)]=1332;c[AWr(423,c)]=1336;c[AWr(424,c)]=1339;c[AWr(425,c)]=1342;c[AWr(426,c)]
=1346;c[AWr(427,c)]=1349;c[AWr(428,c)]=1352;c[AWr(429,c)]=1356;c[AWr(430,c)]=1359;c[AWr(431,c)]=1362;c[AWr(432,c)]=1366;c[AWr(433,c)]=1369;c[AWr(434,c)]=1372;c[AWr(435,c)]=1376;c[AWr(436,c)]=1379;c[AWr(437,c)]=1382;c[AWr(438,c)]=1385;c[AWr(439,c)]=1389;c[AWr(440,c)]=1392;c[AWr(441,c)]=1395;c[AWr(442,c)]=1399;c[AWr(443,c)]=1402;c[AWr(444,c)]=1405;c[AWr(445,c)]=1409;c[AWr(446,c)]=1412;c[AWr(447,c)]=1415;c[AWr(448,c)]=1419;c[AWr(449,c)]=1422;c[AWr(450,c)]=1425;c[AWr(451,c)]=1429;c[AWr(452,c)]=1432;c[AWr(453,c)]
=1435;c[AWr(454,c)]=1439;c[AWr(455,c)]=1442;c[AWr(456,c)]=1445;c[AWr(457,c)]=1449;c[AWr(458,c)]=1452;c[AWr(459,c)]=1455;c[AWr(460,c)]=1459;c[AWr(461,c)]=1462;c[AWr(462,c)]=1465;c[AWr(463,c)]=1469;c[AWr(464,c)]=1472;c[AWr(465,c)]=1475;c[AWr(466,c)]=1478;c[AWr(467,c)]=1482;c[AWr(468,c)]=1485;c[AWr(469,c)]=1488;c[AWr(470,c)]=1492;c[AWr(471,c)]=1495;c[AWr(472,c)]=1498;c[AWr(473,c)]=1502;c[AWr(474,c)]=1505;c[AWr(475,c)]=1508;c[AWr(476,c)]=1512;c[AWr(477,c)]=1515;c[AWr(478,c)]=1518;c[AWr(479,c)]=1522;c[AWr(480,c)]
=1525;c[AWr(481,c)]=1528;c[AWr(482,c)]=1532;c[AWr(483,c)]=1535;c[AWr(484,c)]=1538;c[AWr(485,c)]=1542;c[AWr(486,c)]=1545;c[AWr(487,c)]=1548;c[AWr(488,c)]=1552;c[AWr(489,c)]=1555;c[AWr(490,c)]=1558;c[AWr(491,c)]=1562;c[AWr(492,c)]=1565;c[AWr(493,c)]=1568;c[AWr(494,c)]=1572;c[AWr(495,c)]=1575;c[AWr(496,c)]=1578;c[AWr(497,c)]=1581;c[AWr(498,c)]=1585;c[AWr(499,c)]=1588;c[AWr(500,c)]=1591;c[AWr(501,c)]=1595;c[AWr(502,c)]=1598;c[AWr(503,c)]=1601;c[AWr(504,c)]=1605;c[AWr(505,c)]=1608;c[AWr(506,c)]=1611;c[AWr(507,c)]
=1615;c[AWr(508,c)]=1618;c[AWr(509,c)]=1621;c[AWr(510,c)]=1625;c[AWr(511,c)]=1628;c[AWr(512,c)]=1631;c[AWr(513,c)]=1635;c[AWr(514,c)]=1638;c[AWr(515,c)]=1641;c[AWr(516,c)]=1645;c[AWr(517,c)]=1648;c[AWr(518,c)]=1651;c[AWr(519,c)]=1655;c[AWr(520,c)]=1658;c[AWr(521,c)]=1661;c[AWr(522,c)]=1665;c[AWr(523,c)]=1668;c[AWr(524,c)]=1671;c[AWr(525,c)]=1674;c[AWr(526,c)]=1678;c[AWr(527,c)]=1681;c[AWr(528,c)]=1684;c[AWr(529,c)]=1688;c[AWr(530,c)]=1691;c[AWr(531,c)]=1694;c[AWr(532,c)]=1698;c[AWr(533,c)]=1701;c[AWr(534,c)]
=1704;c[AWr(535,c)]=1708;c[AWr(536,c)]=1711;c[AWr(537,c)]=1714;c[AWr(538,c)]=1718;c[AWr(539,c)]=1721;c[AWr(540,c)]=1724;c[AWr(541,c)]=1728;c[AWr(542,c)]=1731;c[AWr(543,c)]=1734;c[AWr(544,c)]=1738;c[AWr(545,c)]=1741;c[AWr(546,c)]=1744;c[AWr(547,c)]=1748;c[AWr(548,c)]=1751;c[AWr(549,c)]=1754;c[AWr(550,c)]=1758;c[AWr(551,c)]=1761;c[AWr(552,c)]=1764;c[AWr(553,c)]=1767;c[AWr(554,c)]=1771;c[AWr(555,c)]=1774;c[AWr(556,c)]=1777;c[AWr(557,c)]=1781;c[AWr(558,c)]=1784;c[AWr(559,c)]=1787;c[AWr(560,c)]=1791;c[AWr(561,c)]
=1794;c[AWr(562,c)]=1797;c[AWr(563,c)]=1801;c[AWr(564,c)]=1804;c[AWr(565,c)]=1807;c[AWr(566,c)]=1811;c[AWr(567,c)]=1814;c[AWr(568,c)]=1817;c[AWr(569,c)]=1821;c[AWr(570,c)]=1824;c[AWr(571,c)]=1827;c[AWr(572,c)]=1831;c[AWr(573,c)]=1834;c[AWr(574,c)]=1837;c[AWr(575,c)]=1841;c[AWr(576,c)]=1844;c[AWr(577,c)]=1847;c[AWr(578,c)]=1851;c[AWr(579,c)]=1854;c[AWr(580,c)]=1857;c[AWr(581,c)]=1861;c[AWr(582,c)]=1864;c[AWr(583,c)]=1867;c[AWr(584,c)]=1870;c[AWr(585,c)]=1874;c[AWr(586,c)]=1877;c[AWr(587,c)]=1880;c[AWr(588,c)]
=1884;c[AWr(589,c)]=1887;c[AWr(590,c)]=1890;c[AWr(591,c)]=1894;c[AWr(592,c)]=1897;c[AWr(593,c)]=1900;c[AWr(594,c)]=1904;c[AWr(595,c)]=1907;c[AWr(596,c)]=1910;c[AWr(597,c)]=1914;c[AWr(598,c)]=1917;c[AWr(599,c)]=1920;c[AWr(600,c)]=1924;c[AWr(601,c)]=1927;c[AWr(602,c)]=1930;c[AWr(603,c)]=1934;c[AWr(604,c)]=1937;c[AWr(605,c)]=1940;c[AWr(606,c)]=1944;c[AWr(607,c)]=1947;c[AWr(608,c)]=1950;c[AWr(609,c)]=1954;c[AWr(610,c)]=1957;c[AWr(611,c)]=1960;c[AWr(612,c)]=1963;c[AWr(613,c)]=1967;c[AWr(614,c)]=1970;c[AWr(615,c)]
=1973;c[AWr(616,c)]=1977;c[AWr(617,c)]=1980;c[AWr(618,c)]=1983;c[AWr(619,c)]=1987;c[AWr(620,c)]=1990;c[AWr(621,c)]=1993;c[AWr(622,c)]=1997;c[AWr(623,c)]=2000;c[AWr(624,c)]=2003;c[AWr(625,c)]=2007;c[AWr(626,c)]=2010;c[AWr(627,c)]=2013;c[AWr(628,c)]=2017;c[AWr(629,c)]=2020;c[AWr(630,c)]=2023;c[AWr(631,c)]=2027;c[AWr(632,c)]=2030;c[AWr(633,c)]=2033;c[AWr(634,c)]=2037;c[AWr(635,c)]=2040;c[AWr(636,c)]=2043;c[AWr(637,c)]=2047;c[AWr(638,c)]=2050;c[AWr(639,c)]=2053;c[AWr(640,c)]=2057;c[AWr(641,c)]=2060;c[AWr(642,c)]
=2063;c[AWr(643,c)]=2066;c[AWr(644,c)]=2070;c[AWr(645,c)]=2073;c[AWr(646,c)]=2076;c[AWr(647,c)]=2080;c[AWr(648,c)]=2083;c[AWr(649,c)]=2086;c[AWr(650,c)]=2090;c[AWr(651,c)]=2093;c[AWr(652,c)]=2096;c[AWr(653,c)]=2100;c[AWr(654,c)]=2103;c[AWr(655,c)]=2106;c[AWr(656,c)]=2110;c[AWr(657,c)]=2113;c[AWr(658,c)]=2116;c[AWr(659,c)]=2120;A3L=b;}
function SI(){var a=this;E.call(a);a.lp=Cs;a.jF=0;a.nw=0;}
function Du(){var a=this;E.call(a);a.bM=0;a.f=0;a.k=0;a.cA=0;}
function Hs(a,b){a.cA=(-1);a.bM=b;a.k=b;}
function AJ2(a){return a.bM;}
function AOK(a){return a.f;}
function BT(a,b){var c,d,e;if(b>=0&&b<=a.k){a.f=b;if(b<a.cA)a.cA=0;return a;}c=new Bh;d=a.k;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(485))),b)),D(164))),d)),93);S(c,O(e));J(c);}
function ARs(a){return a.k;}
function CF(a,b){var c,d,e;if(b>=0&&b<=a.bM){if(a.cA>b)a.cA=(-1);a.k=b;if(a.f>b)a.f=b;return a;}c=new Bh;d=a.bM;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(486))),b)),D(164))),d)),93);S(c,O(e));J(c);}
function BN(a){a.f=0;a.k=a.bM;a.cA=(-1);return a;}
function Cf(a){a.k=a.f;a.f=0;a.cA=(-1);return a;}
function Bl(a){return a.k-a.f|0;}
function CB(a){return a.f>=a.k?0:1;}
var K_=F(0);
var Lo=F(Du);
function AAk(b,c,d){var e,f,g;e=new QC;b=C(b);f=b.data.length;g=c+d|0;Hs(e,f);e.f=c;e.k=g;e.mk=0;e.iN=0;e.k_=b;return e;}
function ABn(b){var c;c=C(b);return AAk(c,0,c.data.length);}
function NJ(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){b=C(b);e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bg;i=new N;Q(i);V(C(L(C(V(C(L(i,D(487))),g)),D(488))),f);S(h,O(i));J(h);}if(Bl(a)<d){h=new I_;Y(h);J(h);}if(d<0){h=new Bg;i=new N;Q(i);L(C(V(C(L(i,D(489))),d)),D(490));S(h,O(i));J(h);}g=a.f;j=0;while(j<d){k=c+1|0;f=g+1|0;e[B(c,e)]=Sl(a,g);j=j+1|0;c=k;g=f;}a.f=a.f+d|0;return a;}}h=new Bg;d=C(b).data.length;l=new N;Q(l);Be(C(V(C(L(C(V(C(L(l,D(491))),c)),D(164))),d)),41);S(h,O(l));J(h);}
function Kp(a,b){var c,d,e,f,g,h,i;c=0;b=C(b);d=X(b);if(a.iN){b=new Dj;Y(b);J(b);}e=d-c|0;if(Bl(a)<e){b=new E4;Y(b);J(b);}if(c>X(b)){f=new Bg;d=X(b);b=new N;Q(b);Be(C(V(C(L(C(V(C(L(b,D(492))),c)),D(164))),d)),41);S(f,O(b));J(f);}if(d>X(b)){f=new Bg;c=X(b);b=new N;Q(b);V(C(L(C(V(C(L(b,D(493))),d)),D(494))),c);S(f,O(b));J(f);}if(c<=d){g=a.f;while(c<d){h=g+1|0;i=c+1|0;Lc(a,g,R(b,c));g=h;c=i;}a.f=a.f+e|0;return a;}b=new Bg;f=new N;Q(f);V(C(L(C(V(C(L(f,D(492))),c)),D(495))),d);S(b,O(f));J(b);}
function D3(){var a=this;Du.call(a);a.bD=0;a.N=null;a.b0=null;}
function HX(b){var c,d;if(b>=0)return AMP(b,1);c=new Bh;d=new N;Q(d);V(C(L(d,D(496))),b);S(c,O(d));J(c);}
function AAz(b){var c,d;if(b>=0)return AMP(b,0);c=new Bh;d=new N;Q(d);V(C(L(d,D(496))),b);S(c,O(d));J(c);}
function Kn(b){var c,d;c=C(b);d=c.data.length;return AUw(0,d,c,0,0+d|0,0,0);}
function Pg(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){b=C(b);e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bg;i=new N;Q(i);V(C(L(C(V(C(L(i,D(497))),g)),D(488))),f);S(h,O(i));J(h);}if(Bl(a)<d){j=new I_;Y(j);J(j);}if(d<0){j=new Bg;h=new N;Q(h);L(C(V(C(L(h,D(489))),d)),D(490));S(j,O(h));J(j);}g=a.f;k=g+a.bD|0;l=0;while(l<d){m=c+1|0;b=a.N;f=k+1|0;b=C(b).data;e[B(c,e)]=b[B(k,b)];l=l+1|0;c=m;k=f;}a.f=g+d|0;return a;}}j=new Bg;d=C(b).data.length;h=new N;Q(h);Be(C(V(C(L(C(V(C(L(h,D(491))),c)),D(164))),d)),41);S(j,
O(h));J(j);}
function UF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;if(!d)return a;if(a.b_){e=new Dj;Y(e);J(e);}if(Bl(a)<d){e=new E4;Y(e);J(e);}if(c>=0){b=C(b);f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bg;j=new N;Q(j);V(C(L(C(V(C(L(j,D(498))),h)),D(488))),g);S(i,O(j));J(i);}if(d<0){e=new Bg;i=new N;Q(i);L(C(V(C(L(i,D(489))),d)),D(490));S(e,O(i));J(e);}h=a.f;k=h+a.bD|0;l=0;while(l<d){b=a.N;m=k+1|0;g=c+1|0;n=f[B(c,f)];b=C(b).data;b[B(k,b)]=n;l=l+1|0;k=m;c=g;}a.f=h+d|0;return a;}}e=new Bg;d=C(b).data.length;i=new N;Q(i);Be(C(V(C(L(C(V(C(L(i,
D(491))),c)),D(164))),d)),41);S(e,O(i));J(e);}
function APh(a,b){CF(a,b);return a;}
function AGO(a,b){BT(a,b);return a;}
function If(){E.call(this);this.yw=null;}
var A3M=null;var A3y=null;var A3N=null;function Fp(){Fp=T(If);ANz();}
function AEN(a){var b=new If();ACW(b,a);return b;}
function ACW(a,b){Fp();a.yw=b;}
function ANz(){A3M=AEN(D(499));A3y=AEN(D(500));A3N=AEN(D(501));}
var L7=F(0);
var Ug=F(0);
function N_(){var a=this;E.call(a);a.sM=null;a.rw=null;a.v2=0;a.yu=0;}
function APH(a){var b;if(!a.v2){b=a.sM;C(b).oA=null;EJ(b);Iz(C(a.rw),null);}}
var Fq=F(Bo);
var A3C=null;var A3O=null;var A3P=null;var A3B=null;var A3Q=null;function Qh(){Qh=T(Fq);ASq();}
function M7(a,b){var c=new Fq();WT(c,a,b);return c;}
function WT(a,b,c){Qh();B_(a,b,c);}
function ASq(){var b,c,d,e;A3C=M7(D(502),0);A3O=M7(D(503),1);A3P=M7(D(504),2);b=M7(D(505),3);A3B=b;c=K(Fq,4);d=c.data;e=A3C;d[AWr(0,d)]=e;e=A3O;d[AWr(1,d)]=e;e=A3P;d[AWr(2,d)]=e;d[AWr(3,d)]=b;A3Q=c;}
var Km=F(Lo);
function QC(){var a=this;Km.call(a);a.iN=0;a.mk=0;a.k_=null;}
function Sl(a,b){var c;c=a.k_;b=b+a.mk|0;c=C(c).data;return c[B(b,c)];}
function Lc(a,b,c){var d;d=a.k_;b=b+a.mk|0;d=C(d).data;d[B(b,d)]=c;}
function Lb(){var a=this;E.call(a);a.ti=null;a.pc=null;a.qu=0.0;a.m1=0.0;a.lY=null;a.k5=null;a.fE=0;}
function Rm(a,b){var c;if(b!==null){a.lY=b;return a;}c=new Bh;S(c,D(506));J(c);}
function AS3(a,b){}
function UW(a,b){var c;if(b!==null){a.k5=b;return a;}c=new Bh;S(c,D(506));J(c);}
function ALQ(a,b){}
function JV(a,b,c,d){var e,f,g,h,i,j,$$je;a:{e=a.fE;if(e!=3){if(d)break a;if(e!=2)break a;}b=new CA;Y(b);J(b);}a.fE=!d?1:2;while(true){try{f=WR(a,b,c);}catch($$e){$$je=Bj($$e);if($$je instanceof Bu){g=$$je;J(AJt(g));}else{throw $$e;}}f=C(f);if(G4(f)){if(!d)return f;b=C(b);h=Bl(b);if(h<=0)return f;f=Cq(h);}else if(F$(f))return f;g=C(f);i=!Mc(g)?a.lY:a.k5;Fp();if(i===A3y){c=C(c);h=Bl(c);j=C(a.pc);e=j.data.length;if(h<e)return A3R;UF(c,j,0,e);}else if(i!==A3M)break;b=C(b);BT(b,b.f+Ks(g)|0);}return g;}
function X$(a,b){var c,d,e;c=C(b);if(!Bl(c))return AAz(0);V1(a);d=AAz(Bl(c)*a.qu|0);while(true){e=JV(a,c,d,0);if(e===A3S)break;if(e===A3R){d=NR(a,d);continue;}e=C(e);if(!K3(e))continue;TA(e);}b=C(JV(a,c,d,1));if(K3(b))TA(b);while(true){b=C(M3(a,d));if(G4(b))break;if(!F$(b))continue;d=NR(a,d);}b=C(d);Cf(b);return b;}
function NR(a,b){var c,d,e;b=C(b);c=C(b.N);d=Kn(UB(c,c.data.length*2|0));e=b.f;d=C(d);BT(d,e);return d;}
function M3(a,b){var c,d;c=a.fE;if(c!=2&&c!=4){b=new CA;Y(b);J(b);}d=A3S;if(d===d)a.fE=3;return d;}
function ANA(a,b){return A3S;}
function V1(a){a.fE=0;return a;}
function AOU(a){}
function L5(){var a=this;E.call(a);a.eQ=0;a.gW=0;}
var A3S=null;var A3R=null;function Oc(a,b){var c=new L5();XJ(c,a,b);return c;}
function XJ(a,b,c){a.eQ=b;a.gW=c;}
function G4(a){return a.eQ?0:1;}
function F$(a){return a.eQ!=1?0:1;}
function K3(a){return !Qk(a)&&!Mc(a)?0:1;}
function Qk(a){return a.eQ!=2?0:1;}
function Mc(a){return a.eQ!=3?0:1;}
function Ks(a){var b;if(K3(a))return a.gW;b=new Im;Y(b);J(b);}
function Cq(b){return Oc(2,b);}
function Ij(b){return Oc(3,b);}
function TA(a){var b,c;switch(a.eQ){case 0:b=new PX;Y(b);J(b);case 1:b=new U0;Y(b);J(b);case 2:b=new Tr;c=a.gW;Y(b);b.sd=c;J(b);case 3:b=new PV;c=a.gW;Y(b);b.rU=c;J(b);default:}}
function Yd(){A3S=Oc(0,0);A3R=Oc(1,0);}
var Fa=F(0);
function AEA(){var a=this;D3.call(a);a.wj=0;a.b_=0;}
function AMP(a,b){var c=new AEA();ALI(c,a,b);return c;}
function AUw(a,b,c,d,e,f,g){var h=new AEA();V_(h,a,b,c,d,e,f,g);return h;}
function ALI(a,b,c){V_(a,0,b,CE(b),0,b,c,0);}
function V_(a,b,c,d,e,f,g,h){Hs(a,c);FQ();a.b0=A2K;a.bD=b;a.N=d;a.f=e;a.k=f;a.wj=g;a.b_=h;}
function Vq(a){var b,c;b=Bl(a)/2|0;c=a.b0;FQ();if(c!==A2K){c=new Nu;SY(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}c=new PI;SY(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}
function YU(a,b,c){var d,e,f,g;if(a.b_){d=new Dj;Y(d);J(d);}if(b>=0&&(b+3|0)<a.k){d=a.b0;FQ();if(d!==A2K){e=a.N;b=a.bD+b|0;f=c<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;e[B(f,e)]=c>>8<<24>>24;f=b+2|0;e[B(f,e)]=c>>16<<24>>24;b=b+3|0;e[B(b,e)]=c>>24<<24>>24;}else{e=a.N;b=a.bD+b|0;f=c>>24<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;e[B(f,e)]=c>>16<<24>>24;f=b+2|0;e[B(f,e)]=c>>8<<24>>24;b=b+3|0;e[B(b,e)]=c<<24>>24;}return a;}d=new Bg;c=a.k-3|0;g=new N;Q(g);Be(C(V(C(L(C(V(C(L(g,D(163))),b)),D(164))),c)),41);S(d,O(g));J(d);}
function Vr(a){var b,c;b=Bl(a)/4|0;c=a.b0;FQ();if(c!==A2K){c=new N3;M_(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}c=new RW;M_(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}
function Lr(a){var b,c;b=Bl(a)/4|0;c=a.b0;FQ();if(c!==A3T){c=new NH;UK(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}c=new Qp;UK(c,a.bD+a.f|0,b,a,0,b,a.b_);return c;}
function Vy(a){return a.N.data;}
function It(){E.call(this);this.xg=null;}
var A2K=null;var A3T=null;var A3U=null;function FQ(){FQ=T(It);ATw();}
function AJ3(a){var b=new It();VG(b,a);return b;}
function VG(a,b){FQ();a.xg=b;}
function GX(){var b,c;FQ();if(A3U===null){b=new $rt_globals.ArrayBuffer(2);c=new $rt_globals.Int16Array(b);0;c[0]=1;A3U=(new $rt_globals.Int8Array(b))[0]?A3T:A2K;}return A3U;}
function ATw(){A2K=AJ3(D(507));A3T=AJ3(D(508));}
function D$(){var a=this;Lb.call(a);a.oP=null;a.nT=null;}
function H8(a,b,c,d){var e,f,g,h;e=CE(1);f=e.data;f[AWr(0,f)]=63;Fp();g=A3N;a.lY=g;a.k5=g;h=f.length;if(h&&h>=a.m1){a.ti=b;a.pc=e.ck();a.qu=c;a.m1=d;a.oP=BS(512);a.nT=CE(512);return;}g=new Bh;S(g,D(509));J(g);}
function WR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.oP;e=0;f=0;g=a.nT;a:{while(true){if((e+32|0)>f){b=C(b);if(CB(b)){h=e;while(h<f){i=h-e|0;d=C(d);j=d.data;k=B(h,j);j[B(i,j)]=j[k];h=k+1|0;}h=f-e|0;i=Bl(b)+h|0;d=C(d);f=B1(i,d.data.length);NJ(b,d,h,f-h|0);e=0;}}c=C(c);if(!CB(c)){b=C(b);l=!CB(b)&&e>=f?A3S:A3R;break a;}h=Bl(c);g=C(g);m=B1(h,g.data.length);n=new NS;n.i6=b;n.kI=c;l=a.gK(d,e,f,g,0,m,n);e=n.eJ;h=n.eU;if(l===null){b=C(b);if(!CB(b)&&e>=f)l=A3S;else if(!CB(c)&&e>=f)l=A3R;}UF(c,g,0,h);if(l!==null)break;}}b
=C(b);BT(b,b.f-(f-e|0)|0);return l;}
var Po=F(D$);
function AMG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(l<128){m=f+1|0;c=l<<24>>24;e=C(e);k=e.data;k[B(f,k)]=c;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;h=C(h);if(Fj(h,2))break a;i=A3R;break a;}n=f+1|0;m=(192|l>>6)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=m;m=n+1|0;k[B(n,k)]=(128|l&63)<<24>>24;}else if(!HH(l)){if((f+3|0)>g){j=j+(-1)|0;h=C(h);if(Fj(h,3))break a;i=A3R;break a;}m=f+1|0;n=(224|l>>12)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=n;f=m+1|0;k[B(m,
k)]=(128|l>>6&63)<<24>>24;m=f+1|0;k[B(f,k)]=(128|l&63)<<24>>24;}else{if(!Ce(l)){i=Cq(1);break a;}if(j>=d){h=C(h);if(CB(C(h.i6)))break a;i=A3S;break a;}o=j+1|0;m=k[B(j,k)];if(!Cc(m)){j=o+(-2)|0;i=Cq(1);break a;}if((f+4|0)>g){j=o+(-2)|0;h=C(h);if(Fj(h,4))break a;i=A3R;break a;}j=DV(l,m);c=f+1|0;m=(240|j>>18)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=m;f=c+1|0;k[B(c,k)]=(128|j>>12&63)<<24>>24;n=f+1|0;k[B(f,k)]=(128|j>>6&63)<<24>>24;m=n+1|0;k[B(n,k)]=(128|j&63)<<24>>24;j=o;}c=j;f=m;}j=c;}h=C(h);h.eJ=j;h.eU=f;return i;}
var Fg=F(Cl);
function Le(){var a=this;E.call(a);a.dm=null;a.br=null;a.om=0;a.ga=0;a.es=null;a.iA=0;a.xA=null;}
var A2p=null;function A3V(a,b,c,d,e){var f=new Le();UL(f,a,b,c,d,e);return f;}
function UL(a,b,c,d,e,f){var g,h,i;a:{a.om=1;a.iA=0;a.xA=Br();AVo();g=A3W;h=C(b).r;g=C(g).data;switch(g[B(h,g)]){case 1:a.dm=AU5(c,d,f);b=new IA;b.dq=1;b.fF=0;b.oK=1;f=AC0(e);b.b7=f;Cf(C(f));b.fn=FM(C(A04));b.hU=!c?35048:35044;a.br=b;a.ga=0;break a;case 2:i=new OU;i.fZ=0;i.g$=0;i.th=c;i.df=f;b=Pb(DO(C(f).co,d));i.cJ=b;i.nY=1;i.jw=!c?35048:35044;i.cp=Lr(C(b));h=FM(C(A04));C(A04).Z(34962,h);C(A04).b1(34962,C(i.cJ).bM,null,i.jw);C(A04).Z(34962,0);i.gM=h;Cf(C(i.cp));Cf(C(i.cJ));a.dm=i;a.br=ATi(c,e);a.ga=0;break a;case 3:b
=new Kv;AKN();b.f6=0;b.iS=0;b.ef=(-1);b.bZ=AFH();b.yT=c;b.d6=f;f=Lv(DO(C(f).co/4|0,d));b.dU=f;Cf(C(f));b.f5=FM(C(A04));b.lr=!c?35048:35044;BN(C(A3X));C(A1f).nE(1,A3X);b.ef=Ui(C(A3X));a.dm=b;a.br=ATi(c,e);a.ga=0;break a;case 4:break;default:}b=new N7;ABA(b,0,d,f);a.dm=b;b=new Pu;b.dq=1;b.fF=0;b.oK=1;f=AC0(e);b.b7=f;Cf(C(f));b.fn=FM(C(A04));b.hU=35044;a.br=b;a.ga=1;}b=A1b;f=W(Fn(C(A2p),b),DQ);if(f===null)f=El();CJ(f,a);Lt(C(A2p),b,f);}
function ABc(a,b,c,d,e,f){var g,h,i,j,k;if(!e)return;if(f){g=null;h=null;C(a.dm).iH(b,g);g=a.es;if(g!==null&&g.ss()>0)C(a.es).iH(b,h);if(C(a.br).fA()>0)C(a.br).gJ();}if(a.ga){if(C(a.br).fA()<=0)C(A04).hn(c,d,e);else{g=C(C(a.br).lW(0));i=g.f;BT(g,d);C(A04).kZ(c,e,5123,g);BT(g,i);}}else{j=0;if(a.iA)j=C(a.es).ss();if(C(a.br).fA()<=0){if(a.iA&&j>0)C(A1f).r4(c,d,e,j);else C(A04).hn(c,d,e);}else{if((e+d|0)>C(a.br).jZ()){g=new BU;h=new N;Q(h);Bb(h,D(510));b=C(V(h,e));Bb(b,D(511));k=C(V(b,d));Bb(k,D(512));b=C(V(k,C(a.br).jZ()));Bb(b,
D(513));S(g,O(b));J(g);}if(a.iA&&j>0)C(A1f).qN(c,e,5123,d*2|0,j);else C(A04).lV(c,e,5123,d*2|0);}}if(f){g=null;h=null;C(a.dm).ig(b,g);g=a.es;if(g!==null&&g.ss()>0)C(a.es).ig(b,h);if(C(a.br).fA()>0)C(a.br).qU();}}
function AFo(){A2p=AAH();}
var ZH=F();
function Zg(){var a=this;E.call(a);a.wS=null;a.eT=null;a.ra=null;a.kC=0;a.rT=0.0;a.hD=0.0;a.j1=0.0;a.ii=0.0;a.lX=0.0;a.cv=0.0;a.hr=0.0;a.eh=0.0;a.gX=0.0;a.o8=0.0;a.gr=0.0;a.sr=0.0;a.fW=0;a.et=null;a.j3=null;a.mQ=0.0;a.kr=0.0;a.wP=null;a.n9=null;a.pf=null;}
function AT0(a,b){var c=new Zg();AN7(c,a,b);return c;}
function AN7(a,b,c){var d,e;a.cv=1.0;a.o8=1.0;a.gr=1.0;a.sr=1.0;a.et=K($rt_arraycls(CL),128);a.kr=1.0;d=BS(13);e=d.data;e[AWr(0,e)]=120;e[AWr(1,e)]=101;e[AWr(2,e)]=97;e[AWr(3,e)]=111;e[AWr(4,e)]=110;e[AWr(5,e)]=115;e[AWr(6,e)]=114;e[AWr(7,e)]=99;e[AWr(8,e)]=117;e[AWr(9,e)]=109;e[AWr(10,e)]=118;e[AWr(11,e)]=119;e[AWr(12,e)]=122;a.n9=d;d=BS(26);e=d.data;e[AWr(0,e)]=77;e[AWr(1,e)]=78;e[AWr(2,e)]=66;e[AWr(3,e)]=68;e[AWr(4,e)]=67;e[AWr(5,e)]=69;e[AWr(6,e)]=70;e[AWr(7,e)]=75;e[AWr(8,e)]=65;e[AWr(9,e)]=71;e[AWr(10,
e)]=72;e[AWr(11,e)]=73;e[AWr(12,e)]=74;e[AWr(13,e)]=76;e[AWr(14,e)]=79;e[AWr(15,e)]=80;e[AWr(16,e)]=81;e[AWr(17,e)]=82;e[AWr(18,e)]=83;e[AWr(19,e)]=84;e[AWr(20,e)]=85;e[AWr(21,e)]=86;e[AWr(22,e)]=87;e[AWr(23,e)]=88;e[AWr(24,e)]=89;e[AWr(25,e)]=90;a.pf=d;a.ra=b;a.kC=c;Xs(a,b,c);}
function Xs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$$je;if(a.eT!==null)J(AUD(D(514)));d=C(b);a.wS=AE2(d);e=AVm(AUb(ABM(d)),512);a:{b:{try{f=HO(e);if(f===null)J(EU(D(515)));b=C(DJ(f,AB7(f,D(516))+8|0));g=C(UC(C(B7(b,0,PM(b,32))),D(517),4)).data;if(g.length!=4)J(EU(D(518)));a.rT=B8(g[AWr(0,g)]);a.hD=B8(g[AWr(1,g)]);a.j1=B8(g[AWr(2,g)]);a.ii=B8(g[AWr(3,g)]);h=a.rT+a.j1;b=HO(e);if(b===null)J(EU(D(519)));g=C(UC(b,D(215),9)).data;i=g.length;if(i<3)J(EU(D(520)));if
(!DK(C(g[AWr(1,g)]),D(521)))J(EU(D(522)));a.lX=B8(DJ(C(g[AWr(1,g)]),11));if(!DK(C(g[AWr(2,g)]),D(523)))J(EU(D(524)));c:{j=B8(DJ(C(g[AWr(2,g)]),5));k=1;if(i<6)i=k;else if(g[AWr(5,g)]===null)i=k;else if(!DK(C(g[AWr(5,g)]),D(525)))i=k;else{try{i=BF(1,B8(DJ(C(g[AWr(5,g)]),6)));k=i;break c;}catch($$e){$$je=Bj($$e);if($$je instanceof BK){}else{throw $$e;}}i=k;}}a.eT=K(BB,i);l=0;d:{e:{f:{while(true){if(l>=i)break d;b=HO(e);if(b===null)J(EU(D(526)));g:{m=C(GH(C(Gx(D(527))),b));if(GF(m)){n=G2(m,1);try{if(B8(n)!=l)break f;break g;}
catch($$e){$$je=Bj($$e);if($$je instanceof BK){o=$$je;break e;}else{throw $$e;}}}}b=C(GH(C(Gx(D(528))),b));if(!GF(b))break;p=G2(b,1);g=a.eT;b=Yp(C(VU(C(VP(C(V4(d)),p)))),D(529),D(91));g=C(g).data;l=B(l,g);g[l]=b;l=l+1|0;}J(EU(D(530)));}try{J(EU(Eq(C(En(C(En(L9(),D(531))),n)))));}catch($$e){$$je=Bj($$e);if($$je instanceof BK){o=$$je;}else{throw $$e;}}}J(ANu(Eq(C(En(C(En(L9(),D(532))),n))),o));}a.eh=0.0;h:{while(true){q=HO(e);if(q===null)break;if(DK(q,D(533)))break h;if(DK(q,D(534)))break h;if(!DK(q,D(535)))continue;r
=AH4();s=AEi(q,D(536));Bs(s);Bs(s);t=B8(Bs(s));if(t<=0)a.j3=r;else{if(t>65535)continue;Vj(a,t,r);}r.cU=t;Bs(s);r.nP=B8(Bs(s));Bs(s);r.nQ=B8(Bs(s));Bs(s);r.bL=B8(Bs(s));Bs(s);r.bO=B8(Bs(s));Bs(s);r.cr=B8(Bs(s));Bs(s);if(c)r.eY=B8(Bs(s));else r.eY= -(r.bO+B8(Bs(s))|0)|0;Bs(s);r.dA=B8(Bs(s));if(Vu(s))Bs(s);i:{if(Vu(s))try{r.eK=B8(Bs(s));break i;}catch($$e){$$je=Bj($$e);if($$je instanceof BK){}else{throw $$e;}}}if(r.bL>0&&r.bO>0)a.eh=AD9(j+r.eY,a.eh);}}a.eh=a.eh+a.j1;j:{while(true){b=HO(e);if(b===null)break;if(!DK(b,
D(537)))break j;s=AEi(b,D(536));Bs(s);Bs(s);u=B8(Bs(s));Bs(s);i=B8(Bs(s));if(u<0)continue;if(u>65535)continue;if(i<0)continue;if(i>65535)continue;r=FF(a,u&65535);Bs(s);v=B8(Bs(s));if(r!==null)ACy(r,i,v);}}w=0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;bc=0.0;bd=0.0;if(b!==null&&DK(b,D(534))){w=1;s=AEi(b,D(536));Bs(s);Bs(s);x=Fc(Bs(s));Bs(s);y=Fc(Bs(s));Bs(s);z=Fc(Bs(s));Bs(s);ba=Fc(Bs(s));Bs(s);bb=Fc(Bs(s));Bs(s);bc=Fc(Bs(s));Bs(s);bd=Fc(Bs(s));}be=FF(a,32);if(be===null){be=AH4();be.cU=32;bf=FF(a,108);if(bf===null)bf=
RG(a);be.dA=C(bf).dA;Vj(a,32,be);}if(!be.bL){bg=a.ii;be.bL=bg+be.dA+a.hD|0;be.cr= -bg|0;}a.mQ=be.dA;bh=null;g=C(a.n9).data;u=g.length;i=0;k:{while(i<u){v=B(i,g);bh=FF(a,g[v]);if(bh!==null)break k;i=v+1|0;}}if(bh===null)bh=RG(a);a.kr=C(bh).bO-h;q=null;g=C(a.pf).data;u=g.length;i=0;l:{while(i<u){v=B(i,g);q=FF(a,g[v]);if(q!==null)break l;i=v+1|0;}}if(q!==null)a.cv=q.bO;else{g=C(a.et).data;u=g.length;i=0;while(i<u){m:{bi=B$(i);bj=g[bi];if(bj!==null){bj=bj.data;i=bj.length;v=0;while(true){if(v>=i)break m;t=B$(v);r
=bj[t];if(r!==null){v=r.bO;if(v&&r.bL)a.cv=H3(a.cv,v);}v=t+1|0;}}}i=bi+1|0;}}bg=a.cv-h;a.cv=bg;bg=j-bg;a.hr=bg;bk= -a.lX;a.gX=bk;if(c){a.hr= -bg;a.gX= -bk;}if(w){a.hr=x;a.eh=y;a.gX=z;a.cv=ba;a.lX=bb;a.mQ=bc;a.kr=bd;}}catch($$e){$$je=Bj($$e);if($$je instanceof Cl){o=$$je;break b;}else{b=$$je;break a;}}Vn(e);return;}try{J(ANu(Eq(C(L(C(En(L9(),D(538))),d))),o));}catch($$e){$$je=Bj($$e);b=$$je;}}Vn(e);J(b);}
function Ny(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=C(c);d=C(c.di);e=1.0/F0(d);f=1.0/F9(d);g=0.0;h=0.0;i=c.r7;j=c.r$;k=c.ir;l=c.jo;if(c instanceof Kx){m=C(W(c,Kx));g=m.v9;h=(m.uC-m.xl|0)-m.v8;}b=C(b);n=b.nP;o=n;p=b.bL;q=n+p|0;n=b.nQ;r=n;s=b.bO;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.bL=p+o|0;b.cr=b.cr-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.bL=b.bL-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.bO=n;if(n<0)b.bO=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.bO=b.bO-u|0;b.eY=b.eY+u|0;}}b.m8=i+o*e;b.n4
=i+k*e;if(!a.kC){b.jT=j+r*f;b.i3=j+l*f;}else{b.i3=j+r*f;b.jT=j+l*f;}}
function Vj(a,b,c){var d,e,f,g;d=a.et;e=b/512|0;d=C(d).data;f=B(e,d);g=d[f];if(g===null){g=K(CL,512);d[AWr(f,d)]=g;}d=g.data;d[B(b&511,d)]=c;}
function RG(a){var b,c,d,e,f,g,h,i,j;b=C(a.et).data;c=b.length;d=0;a:while(true){if(d>=c){e=new BU;S(e,D(539));J(e);}b:{f=B$(d);g=b[f];if(g!==null){g=g.data;d=g.length;h=0;while(true){if(h>=d)break b;i=B$(h);j=g[i];if(j!==null&&j.bO&&j.bL)break a;h=i+1|0;}}}d=f+1|0;}return j;}
function FF(a,b){var c,d;c=a.et;d=b/512|0;c=C(c).data;c=c[B(d,c)];if(c===null)return null;c=c.data;return c[B(b&511,c)];}
function OL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.fW;i=a.gr;b=C(b);j=b.G;k=b.I;j=C(j);if(g<0){b=new Bh;c=new N;Q(c);Bb(c,D(540));S(b,O(C(V(c,g))));J(b);}l=j.e+g|0;if(l>C(j.E).data.length)Kl(j,BF(BF(8,l),j.e*1.75|0));b=b.I;g=g+1|0;b=C(b);if(g<0){b=new Bh;c=new N;Q(c);Bb(c,D(540));S(b,O(C(V(c,g))));J(b);}l=b.D+g|0;if(l>C(b.bf).data.length)Lu(b,BF(BF(8,l),b.D*1.75|0));while(true){a:{l=d+1|0;c=C(c);m=R(c,d);if(m!=13){n=FF(a,m);if(n===null){n=a.j3;if(n===null)break a;}CJ(j,n);if(f===null)o
=n.mI?0.0:( -n.cr|0)*i-a.ii;else{b:{g=f.dA;p=f.hv;if(p!==null){p=p.data;p=p[B(m>>>9|0,p)];if(p!==null){p=p.data;d=p[B(m&511,p)];break b;}}d=0;}o=(g+d|0)*i;}k=C(k);OK(k,o);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(R(c,l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null)OK(C(k),f.mI?f.dA*i:(f.bL+f.cr|0)*i-a.hD);}
function VO(a,b,c){var d,e,f;d=c-1|0;e=C(C(b).E).data;d=B(d,e);f=C(W(e[d],CL)).cU&65535;if(Ie(a,f))return d;if(Pa(a,f))d=d+(-1)|0;a:{while(d>0){f=B(d,e);c=C(W(e[f],CL)).cU&65535;if(Ie(a,c))break a;if(Pa(a,c))break a;d=f+(-1)|0;}return 0;}return f+1|0;}
function Pa(a,b){var c,d,e,f;c=a.wP;if(c===null)return 0;c=c.data;d=c.length;e=0;while(e<d){f=B$(e);if(b==c[f])return 1;e=f+1|0;}return 0;}
function Ie(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
function Og(){var a=this;E.call(a);a.jB=null;a.co=0;a.ty=Cs;a.vW=0;a.xH=0;}
function FD(a){return C(a.jB).data.length;}
function Ev(a,b){var c;c=C(a.jB).data;return c[B(b,c)];}
function FV(){var a=this;E.call(a);a.c7=null;a.dX=0;a.gB=null;a.po=null;a.qP=null;a.pU=null;a.gk=null;a.pS=null;a.q_=null;a.oH=null;a.bU=0;a.hk=0;a.i8=0;a.yV=null;a.nN=null;a.op=null;a.qz=0;a.yp=0;a.bx=null;a.dv=null;}
var A3Y=0;var A3Z=null;var A30=null;var A2q=null;var A31=null;function AFg(){AFg=T(FV);APX();}
function AUz(a,b){var c=new FV();AFl(c,a,b);return c;}
function AFl(a,b,c){var d,e,f,g,h;AFg();a.c7=D(1);a.gB=I1();a.po=I1();a.qP=I1();a.gk=I1();a.pS=I1();a.q_=I1();a.yp=0;a.bx=Jc(1);a.dv=Jc(1);if(b===null){b=new Bh;S(b,D(541));J(b);}if(c===null){b=new Bh;S(b,D(542));J(b);}d=A3Z;if(d!==null&&X(d)>0){d=new N;Q(d);Bb(d,A3Z);Bb(d,b);b=O(d);}d=A30;if(d!==null&&X(d)>0){d=new N;Q(d);Bb(d,A30);Bb(d,c);c=O(d);}a.nN=b;a.op=c;a.yV=Lv(16);Pz(a,b,c);if(a.dX){BN(C(a.bx));C(A04).fc(a.bU,35721,a.bx);e=EB(C(a.bx),0);a.oH=K(BB,e);f=0;while(f<e){BN(C(a.bx));Uq(C(a.bx),0,1);BN(C(a.dv));c
=C(A04).l$(a.bU,f,a.bx,a.dv);g=C(A04).hP(a.bU,c);EN(C(a.gk),c,g);EN(C(a.pS),c,EB(C(a.dv),0));EN(C(a.q_),c,EB(C(a.bx),0));h=C(a.oH).data;f=B(f,h);h[f]=c;f=f+1|0;}BN(C(a.bx));C(A04).fc(a.bU,35718,a.bx);e=EB(C(a.bx),0);a.pU=K(BB,e);g=0;while(g<e){BN(C(a.bx));Uq(C(a.bx),0,1);BN(C(a.dv));b=C(A04).mw(a.bU,g,a.bx,a.dv);f=C(A04).gO(a.bU,b);EN(C(a.gB),b,f);EN(C(a.po),b,EB(C(a.dv),0));EN(C(a.qP),b,EB(C(a.bx),0));h=C(a.pU).data;f=B(g,h);h[f]=b;g=f+1|0;}b=A1b;c=W(DC(C(A2q),b),DQ);if(c===null)c=El();CJ(c,a);Bt(C(A2q),b,
c);}}
function Pz(a,b,c){var d,e,f;a.hk=Vx(a,35633,b);d=Vx(a,35632,c);a.i8=d;if(a.hk!=(-1)&&d!=(-1)){d=C(A04).km();if(!d)d=(-1);b=A04;if(d==(-1))d=(-1);else{e=a.hk;f=C(b);f.hs(d,e);f.hs(d,a.i8);f.iZ(d);b=HX(4);c=GX();b=C(b);b.b0=c;b=Vr(b);f.fc(d,35714,b);if(!EB(C(b),0)){a.c7=C(A04).iR(d);d=(-1);}}a.bU=d;if(d!=(-1)){a.dX=1;return;}a.dX=0;return;}a.dX=0;}
function Vx(a,b,c){var d,e,f,g;d=A04;e=Jc(1);d=C(d);f=d.lx(b);if(!f)return (-1);d.mL(f,c);d.k$(f);d.la(f,35713,e);if(EB(C(e),0))return f;g=d.lg(f);d=new N;Q(d);Bb(d,a.c7);Bb(d,b!=35633?D(543):D(544));a.c7=O(d);c=new N;Q(c);Bb(c,a.c7);Bb(c,g);a.c7=O(c);return (-1);}
function TX(a){var b,c;if(!a.dX)return a.c7;b=A04;c=a.bU;b=C(b).iR(c);a.c7=b;return b;}
function NN(a,b){var c,d,e,f;AFg();c=A3Y;d=J8(C(a.gB),b,(-2));if(d==(-2)){d=C(A04).gO(a.bU,b);if(d==(-1)&&c){if(!a.dX){b=new CA;e=new N;Q(e);Bb(e,D(545));Bb(e,TX(a));S(b,O(e));J(b);}e=new Bh;f=new N;Q(f);Bb(f,D(546));Bb(f,b);Bb(f,D(547));S(e,O(f));J(e);}EN(C(a.gB),b,d);}return d;}
function HL(a,b,c,d,e,f,g){var h;h=A04;E6(a);C(h).l5(b,c,d,e,f,g);}
function N8(a,b){var c,d,e;c=A04;E6(a);d=A04;e=J8(C(a.gk),b,(-2));if(e==(-2)){e=C(d).hP(a.bU,b);EN(C(a.gk),b,e);}if(e==(-1))return;C(c).hC(e);}
function K9(a,b){var c;c=A04;E6(a);C(c).hC(b);}
function Hh(a,b){var c;c=A04;E6(a);C(c).mK(b);}
function E6(a){if(a.qz){Pz(a,a.nN,a.op);a.qz=0;}}
function HY(a,b){return J8(C(a.gk),b,(-1));}
function APX(){A3Y=1;A3Z=D(1);A30=D(1);A2q=EA();A31=Jc(1);}
var R3=F(0);
function H_(){var a=this;E.call(a);a.oU=null;a.hz=0;a.g2=0;a.ee=null;a.cl=null;a.p2=0;a.dO=0;}
var A32=0;function O3(a){var b;if(a.dO){b=new BU;S(b,D(548));J(b);}if(a.cl===null){b=TJ(a,APM(a.oU));a.cl=b;a.hz=CN(C(b));a.g2=CQ(C(a.cl));if(a.ee===null)a.ee=Gw(C(a.cl));}a.dO=1;}
function TJ(a,b){var c,d,e,f,g;a:{if(A04===null&&A32){b=C(b);c=CN(b);d=CQ(b);e=Kr(c);f=Kr(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=V8(e,f,Gw(b));PD(g,b,0,0,0,0,c,d);H4(b);return g;}
function Ln(){var a=this;E.call(a);a.fi=0;a.fz=0;a.eL=null;a.bb=null;a.kk=0;a.eN=null;a.rY=0;a.r0=0;a.r2=0;a.r1=0.0;a.hE=null;a.hH=null;a.rz=null;a.yg=null;a.ed=null;a.fm=null;a.n3=0;a.bA=null;a.pl=0;}
var A33=null;function RM(){RM=T(Ln);AMD();}
function APM(a){var b=new Ln();Wb(b,a);return b;}
function V8(a,b,c){var d=new Ln();AEn(d,a,b,c);return d;}
function Wb(a,b){var c,d,e,f,g,h,i,j,k,l;RM();a:{a.rY=255;a.r0=255;a.r2=255;a.hE=LH(255,255,255,a.r1);Hu();a.hH=A34;ACl();a.rz=A35;a.n3=0;c=C(b);d=c.bj;e=W(DC(C(C(c.e9).fO),d),Fy);if(!C(C(A1b).bY).lT){Jy(a,(-1),(-1),C(e).lU,null);if(a.ed!==null)break a;b=new BU;c=c.bj;e=new N;Q(e);L(C(L(C(L(e,D(549))),c)),D(550));S(b,O(e));J(b);}b=C(e).b3;if(b===null)f=null;else{f=CE(b.length);g=0;while(true){h=f.data;if(g>=h.length)break;i=NC(b[g]);g=B$(g);h[g]=i;g=g+1|0;}}b=new Rc;f=C(f).data;g=f.length;h=Bk(4);b.rJ=h;e=h.data;j
=new $rt_globals.Array(g);k=0;while(k<g){l=B$(k);c=f[l];l;j[l]=c;k=l+1|0;}b.rV=ARn(e,j,0,g);f=C(b.rJ).data;b.dC=f[AWr(0,f)];b.rN=f[AWr(1,f)];b.qo=f[AWr(2,f)];b.ha=f[AWr(3,f)];a.bA=b;Jy(a,(-1),(-1),null,null);}}
function AEn(a,b,c,d){RM();a.rY=255;a.r0=255;a.r2=255;a.hE=LH(255,255,255,a.r1);Hu();a.hH=A34;ACl();a.rz=A35;a.n3=0;Jy(a,b,c,null,null);}
function Jy(a,b,c,d,e){if(e!==null){a.fm=e;a.fi=e.getWidth();a.fz=e.getHeight();}else if(d===null){a.fi=b;a.fz=c;}else{a.ed=d;a.fi=d.width;a.fz=d.height;}d=Pb(4);a.eN=d;SN();c=A2x;A2x=c+1|0;a.kk=c;YU(C(d),0,c);d=A2y;b=a.kk;D8(C(d),b,a);}
function I3(){RM();JC();return A36;}
function LH(b,c,d,e){var f,g;RM();f=new N;Q(f);g=C(V(C(L(f,D(551))),b));Be(g,44);g=C(V(g,c));Be(g,44);g=C(V(g,d));Be(g,44);Be(C(Ew(g,e)),41);return O(f);}
function Lj(a){IY(a);return a.eL;}
function IY(a){var b,c;if(a.eL===null){b=(GL(C(Hr()))).createElement("canvas");a.eL=b;c=a.fi;b.width=c;b=a.eL;c=a.fz;b.height=c;c=a.eL.getContext("2d");a.bb=c;b=$rt_ustr(Ql(C(I3())));c.globalCompositeOperation=b;if(a.ed!==null){b=a.bb;JC();c=$rt_ustr(C(A37).eO);b.globalCompositeOperation=c;b=a.bb;c=a.ed;b.drawImage(c,0.0,0.0);b=a.bb;c=$rt_ustr(C(I3()).eO);b.globalCompositeOperation=c;}if(a.fm!==null){c=a.bb;JC();b=$rt_ustr(C(A37).eO);c.globalCompositeOperation=b;b=a.bb;c=a.fm;b.drawImage(c,0.0,0.0);b=a.bb;c
=$rt_ustr(C(I3()).eO);b.globalCompositeOperation=c;}}}
function PD(a,b,c,d,e,f,g,h){var i;i=a.bA;if(i!==null)Y8(i,C(b).bA,e,f,c,d,g,h);else MG(a,Lj(C(b)),e,f,g,h,c,d,g,h);}
function CN(a){var b;b=a.bA;if(b===null)return a.fi;return b.rN;}
function CQ(a){var b;b=a.bA;if(b===null)return a.fz;return b.qo;}
function H4(a){var b,c;if(a.pl){b=new BU;S(b,D(552));J(b);}SN();Ek(C(A2y),a.kk);c=a.bA;if(c!==null)Yi(c);a.pl=1;}
function G5(a){var b;b=a.bA;if(b===null)return 6408;return T9(b);}
function GR(a){var b;b=a.bA;if(b===null)return 6408;return T9(b);}
function Hq(a){var b,c,d;b=a.bA;if(b===null)return 5121;a:{c=b.ha;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break a;case 6:c=32819;break a;default:b=new BU;d=new N;Q(d);V(C(L(d,D(553))),c);S(b,O(d));J(b);}c=5121;}return c;}
function Gw(a){var b,c,d;b=a.bA;if(b===null){XG();return A38;}c=b.ha;XG();if(c==1)b=A39;else if(c==2)b=A3$;else if(c==5)b=A3_;else if(c==6)b=A4a;else if(c==3)b=A4b;else{if(c!=4){b=new BU;d=new N;Q(d);V(C(L(d,D(554))),c);S(b,O(d));J(b);}b=A38;}return b;}
function M2(a,b){var c;a.hH=b;c=a.bA;if(c===null){IY(a);b=a.bb;c=$rt_ustr(Ql(C(I3())));b.globalCompositeOperation=c;}else{Hu();ZK(c,b!==A0_?1:0);}}
function MG(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x;IY(a);k=a.hH;Hu();if(k===A0_){a:{l=a.bb;k=$rt_ustr(A33);l.fillStyle=k;m=a.bb;l=$rt_ustr(A33);m.strokeStyle=l;m=a.bb;l="destination-out";m.globalCompositeOperation=l;a.bb.beginPath();n=a.bb;o=g;p=h;q=i;r=j;n.rect(o,p,q,r);ZV();l=A4c;IY(a);AUE();s=A4d;t=C(l).r;s=C(s).data;switch(s[B(t,s)]){case 1:break;case 2:a.bb.stroke();break a;default:break a;}a.bb.fill();}a.bb.closePath();m=a.bb;l=$rt_ustr(a.hE);m.fillStyle=l;m=a.bb;k=$rt_ustr(a.hE);m.strokeStyle
=k;m=a.bb;JC();l=$rt_ustr(C(A36).eO);m.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bb;o=c;p=d;q=e;r=f;u=g;v=h;w=i;x=j;l.drawImage(b,o,p,q,r,u,v,w,x);}a.yg=null;}
function AMD(){A33=LH(255,255,255,1.0);}
function CL(){var a=this;E.call(a);a.cU=0;a.nP=0;a.nQ=0;a.bL=0;a.bO=0;a.m8=0.0;a.i3=0.0;a.n4=0.0;a.jT=0.0;a.cr=0;a.eY=0;a.dA=0;a.hv=null;a.mI=0;a.eK=0;}
function AH4(){var a=new CL();AQ1(a);return a;}
function AQ1(a){a.eK=0;}
function ACy(a,b,c){var d,e,f,g;if(a.hv===null)a.hv=K($rt_arraycls($rt_bytecls()),128);d=a.hv;e=b>>>9|0;d=C(d).data;f=B(e,d);g=d[f];if(g===null){g=CE(512);d[AWr(f,d)]=g;}d=g.data;b=b&511;c=c<<24>>24;d[B(b,d)]=c;}
function ALh(a){return Mf(a.cU&65535);}
var Vw=F();
var A3W=null;function AVo(){AVo=T(Vw);AQm();}
function AQm(){var b,c;Qh();b=Bk(C(C(A3Q).ck()).data.length);c=b.data;A3W=b;c[B(C(A3O).r,c)]=1;c[B(C(A3P).r,c)]=2;c[B(C(A3B).r,c)]=3;c[B(C(A3C).r,c)]=4;}
var IM=F(0);
function KY(){var a=this;E.call(a);a.dl=null;a.eR=null;a.hS=0;a.yG=0;a.kW=0;a.gf=0;a.gN=0;}
function AU5(a,b,c){var d=new KY();ABA(d,a,b,c);return d;}
function ABA(a,b,c,d){a.gf=0;a.gN=0;a.yG=b;a.dl=d;d=Lv(DO(C(d).co/4|0,c));a.eR=d;Cf(C(d));a.hS=FM(C(A04));a.kW=!b?35048:35044;}
function AOC(a,b,c,d){var e,f;a.gf=1;Ul(b,a.eR,d,c);BT(C(a.eR),0);CF(C(a.eR),d);if(a.gN){e=A04;f=a.eR;C(e).b1(34962,C(f).k,f,a.kW);a.gf=0;}}
function AKq(a,b,c){var d,e,f,g,h,i,j,k;d=A04;e=a.hS;d=C(d);d.Z(34962,e);if(a.gf){f=a.eR;d.b1(34962,C(f).k,f,a.kW);a.gf=0;}a:{g=FD(C(a.dl));if(c!==null){h=0;while(true){if(h>=g)break a;i=c.data;f=Ev(C(a.dl),h);j=B(h,i);e=i[j];if(e>=0){b=C(b);Hh(b,e);k=C(f);HL(b,e,k.cI,k.dH,k.d$,C(a.dl).co,k.ei);}h=j+1|0;}}h=0;while(h<g){k=C(Ev(C(a.dl),h));f=k.dT;b=C(b);e=HY(b,f);if(e>=0){Hh(b,e);HL(b,e,k.cI,k.dH,k.d$,C(a.dl).co,k.ei);}h=h+1|0;}}a.gN=1;}
function AHl(a,b,c){var d,e,f,g,h,i;a:{d=A04;e=FD(C(a.dl));if(c===null){f=0;while(f<e){g=C(Ev(C(a.dl),f)).dT;b=C(b);N8(b,g);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;h=c.data;f=B(f,h);i=h[f];if(i>=0){b=C(b);K9(b,i);}f=f+1|0;}}}C(d).Z(34962,0);a.gN=0;}
function ARU(a){var b;b=C(A04);b.Z(34962,0);Ho(b,a.hS);a.hS=0;}
var JE=F(0);
function IA(){var a=this;E.call(a);a.b7=null;a.fn=0;a.oK=0;a.dq=0;a.fF=0;a.hU=0;}
function ALC(a){return C(a.b7).k;}
function AGG(a){return C(a.b7).bM;}
function AOf(a,b,c,d){var e,f;a.dq=1;BN(C(a.b7));Ub(C(a.b7),b,c,d);Cf(C(a.b7));if(a.fF){e=A04;f=a.b7;C(e).b1(34963,C(f).k,f,a.hU);a.dq=0;}}
function AHa(a,b){a.dq=a.dq|b;return a.b7;}
function ASm(a){var b,c,d;b=a.fn;if(!b){c=new BU;S(c,D(555));J(c);}C(A04).Z(34963,b);if(a.dq){c=A04;d=a.b7;C(c).b1(34963,C(d).k,d,a.hU);a.dq=0;}a.fF=1;}
function AQe(a){C(A04).Z(34963,0);a.fF=0;}
function AIb(a){var b;b=C(A04);b.Z(34963,0);Ho(b,a.fn);a.fn=0;}
function OU(){var a=this;E.call(a);a.df=null;a.cp=null;a.cJ=null;a.gM=0;a.nY=0;a.th=0;a.jw=0;a.fZ=0;a.g$=0;}
function AHK(a,b,c,d){var e,f;a.fZ=1;if(a.nY){Ul(b,a.cJ,d,c);BT(C(a.cp),0);CF(C(a.cp),d);}else{BN(C(a.cp));RX(C(a.cp),b,c,d);Cf(C(a.cp));BT(C(a.cJ),0);CF(C(a.cJ),C(a.cp).k<<2);}if(a.g$){e=A04;f=a.cJ;C(e).fd(34962,0,C(f).k,f);a.fZ=0;}}
function AN9(a,b,c){var d,e,f,g,h,i,j,k;d=A04;e=a.gM;d=C(d);d.Z(34962,e);if(a.fZ){CF(C(a.cJ),C(a.cp).k*4|0);f=a.cJ;d.b1(34962,C(f).k,f,a.jw);a.fZ=0;}a:{g=FD(C(a.df));if(c!==null){h=0;while(true){if(h>=g)break a;i=c.data;f=Ev(C(a.df),h);j=B(h,i);e=i[j];if(e>=0){b=C(b);Hh(b,e);k=C(f);HL(b,e,k.cI,k.dH,k.d$,C(a.df).co,k.ei);}h=j+1|0;}}h=0;while(h<g){k=C(Ev(C(a.df),h));f=k.dT;b=C(b);e=HY(b,f);if(e>=0){Hh(b,e);HL(b,e,k.cI,k.dH,k.d$,C(a.df).co,k.ei);}h=h+1|0;}}a.g$=1;}
function AKr(a,b,c){var d,e,f,g,h,i;a:{d=A04;e=FD(C(a.df));if(c===null){f=0;while(f<e){g=C(Ev(C(a.df),f)).dT;b=C(b);N8(b,g);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;h=c.data;f=B(f,h);i=h[f];if(i>=0){b=C(b);K9(b,i);}f=f+1|0;}}}C(d).Z(34962,0);a.g$=0;}
function AKS(a){var b;b=C(A04);b.Z(34962,0);Ho(b,a.gM);a.gM=0;}
function AAv(){var a=this;E.call(a);a.dk=null;a.cP=null;a.hW=0;a.vE=0;a.d0=0;a.hc=0;a.qT=0;}
function ATi(a,b){var c=new AAv();AJZ(c,a,b);return c;}
function AJZ(a,b,c){var d,e,f,g;a.d0=1;a.hc=0;d=Pb(c*2|0);a.cP=d;a.vE=1;a.qT=!b?35048:35044;d=Vq(C(d));a.dk=d;Cf(C(d));Cf(C(a.cP));c=FM(C(A04));C(A04).Z(34963,c);e=A04;f=C(a.cP).bM;d=null;g=a.qT;C(e).b1(34963,f,d,g);C(A04).Z(34963,0);a.hW=c;}
function APK(a){return C(a.dk).k;}
function AF7(a){return C(a.dk).bM;}
function ALV(a,b,c,d){var e,f;a.d0=1;BN(C(a.dk));Ub(C(a.dk),b,c,d);Cf(C(a.dk));BT(C(a.cP),0);CF(C(a.cP),d<<1);if(a.hc){e=A04;f=a.cP;C(e).fd(34963,0,C(f).k,f);a.d0=0;}}
function ARt(a,b){a.d0=a.d0|b;return a.dk;}
function AMn(a){var b,c,d;b=a.hW;if(!b){c=new BU;S(c,D(556));J(c);}C(A04).Z(34963,b);if(a.d0){CF(C(a.cP),C(a.dk).k*2|0);c=A04;d=a.cP;C(c).fd(34963,0,C(d).k,d);a.d0=0;}a.hc=1;}
function AIe(a){C(A04).Z(34963,0);a.hc=0;}
function AIy(a){var b;b=C(A04);b.Z(34963,0);Ho(b,a.hW);a.hW=0;}
function Kv(){var a=this;E.call(a);a.d6=null;a.dU=null;a.f5=0;a.yT=0;a.lr=0;a.f6=0;a.iS=0;a.ef=0;a.bZ=null;}
var A3X=null;function AKN(){AKN=T(Kv);ATu();}
function AHH(a,b,c,d){var e,f;a.f6=1;Ul(b,a.dU,d,c);BT(C(a.dU),0);CF(C(a.dU),d);if(a.iS){e=A04;f=a.dU;C(e).b1(34962,C(f).k,f,a.lr);a.f6=0;}}
function ARe(a,b,c){var d,e;d=A1f;e=a.ef;d=C(d);d.mN(e);ADs(a,b,c);if(a.f6){d.Z(34962,a.f5);b=C(a.dU);CF(b,b.k);b=a.dU;d.b1(34962,C(b).k,b,a.lr);a.f6=0;}a.iS=1;}
function ADs(a,b,c){var d,e,f,g,h,i,j,k,l;d=!C(a.bZ).p?0:1;a:{e=FD(C(a.d6));if(d){if(c===null){f=0;while(d&&f<e){g=C(Ev(C(a.d6),f)).dT;b=C(b);d=HY(b,g)!=Dt(C(a.bZ),f)?0:1;f=f+1|0;}}else{h=c.data;d=h.length!=C(a.bZ).p?0:1;f=0;while(d){if(f>=e)break a;i=B(f,h);d=h[i]!=Dt(C(a.bZ),i)?0:1;f=i+1|0;}}}}b:{if(!d){C(A02).Z(34962,a.f5);if(C(a.bZ).p){f=FD(C(a.d6));j=0;k=b;while(j<f){d=Dt(C(a.bZ),j);if(d>=0){k=C(k);K9(k,d);}j=j+1|0;}}Ii(C(a.bZ));f=0;while(true){if(f>=e)break b;k=Ev(C(a.d6),f);if(c!==null){h=c.data;g=a.bZ;f
=B(f,h);Ey(C(g),h[f]);}else{g=a.bZ;k=C(k);l=k.dT;b=C(b);Ey(C(g),HY(b,l));}j=Dt(C(a.bZ),f);if(j>=0){b=C(b);Hh(b,j);g=C(k);HL(b,j,g.cI,g.dH,g.d$,C(a.d6).co,g.ei);}f=f+1|0;}}}}
function AJP(a,b,c){C(A1f).mN(0);a.iS=0;}
function AJ_(a){var b;b=C(A1f);b.Z(34962,0);Ho(b,a.f5);a.f5=0;if(a.ef!=(-1)){AKN();BN(C(A3X));DM(C(A3X),a.ef);Cf(C(A3X));C(A1f).qF(1,A3X);a.ef=(-1);}}
function ATu(){A3X=Jc(1);}
var N7=F(KY);
var Pu=F(IA);
function ACP(){var a=this;E.call(a);a.ju=0;a.d9=null;a.dZ=null;a.oF=0.0;a.j2=0;a.mp=0;a.il=0;}
function I1(){var a=new ACP();AMV(a);return a;}
function AMV(a){var b,c;a.oF=0.800000011920929;b=L2(51,0.800000011920929);a.j2=b*0.800000011920929|0;c=b-1|0;a.il=c;a.mp=EG(Bc(c));a.d9=K(E,b);a.dZ=Bk(b);}
function RD(a,b){return E1(Ci(BO(Bc(IN(C(b))),G(2135587861, 2654435769)),a.mp));}
function O_(a,b){var c,d,e,f,g;if(b===null){c=new Bh;S(c,D(63));J(c);}d=a.d9;e=RD(a,b);while(true){d=C(d);f=d.data;g=B(e,f);c=f[g];if(c===null)return  -(g+1|0)|0;if(Bn(c,b))break;e=(g+1|0)&a.il;}return g;}
function EN(a,b,c){var d,e,f,g,h,i,j,k;d=O_(a,b);if(d>=0){e=C(a.dZ).data;e[B(d,e)]=c;return;}d= -(d+1|0)|0;e=C(a.d9).data;d=B(d,e);e[d]=b;f=C(a.dZ).data;f[AWr(d,f)]=c;c=a.ju+1|0;a.ju=c;if(c>=a.j2)a:{c=e.length;d=c<<1;a.j2=d*a.oF|0;g=d-1|0;a.il=g;a.mp=EG(Bc(g));f=a.d9;h=a.dZ;a.d9=K(E,d);a.dZ=Bk(d);if(a.ju>0){d=0;while(true){if(d>=c)break a;f=C(f);e=f.data;d=B(d,e);b=e[d];if(b!==null){h=C(h);e=h.data;d=AWr(d,e);g=e[d];e=a.d9;i=RD(a,b);while(true){e=C(e);j=e.data;k=B(i,j);if(j[k]===null)break;i=(k+1|0)&a.il;}j[k]
=b;e=C(a.dZ).data;e[AWr(k,e)]=g;}d=d+1|0;}}}}
function J8(a,b,c){var d,e;d=O_(a,b);if(d>=0){e=C(a.dZ).data;c=e[B(d,e)];}return c;}
var ACL=F();
function Ul(b,c,d,e){var f;f=null;if(c instanceof D3)f=Lr(C(W(c,D3)));else if(c instanceof Dc)f=W(c,Dc);if(f===null){f=new BU;S(f,D(557));J(f);}BN(f);c=C(c);c.e5(0);RX(f,b,e,d);c.e5(0);if(!(c instanceof D3))c.fw(d);else c.fw(d<<2);}
function Lv(b){var c,d,e,f;if(A2w){c=HX(b*4|0);d=GX();c=C(c);c.b0=d;return Lr(c);}e=C4(b);f=e.data.length;c=new Un;Rn(c,f,0,0+f|0);c.mC=0;c.pI=0;c.kS=e;return c;}
function Pb(b){var c,d;if(!A2w)return Kn(CE(b));c=HX(b);d=GX();c=C(c);c.b0=d;return c;}
function AC0(b){var c,d,e,f;if(A2w){c=HX(b*2|0);d=GX();c=C(c);c.b0=d;return Vq(c);}e=Yh(b);f=e.data.length;c=new Uv;SU(c,f,0,0+f|0);c.l2=0;c.m5=0;c.kD=e;return c;}
function Jc(b){var c,d,e,f;if(A2w){c=HX(b*4|0);d=GX();c=C(c);c.b0=d;return Vr(c);}e=Bk(b);f=e.data.length;c=new Qc;OV(c,f,0,0+f|0);c.lO=0;c.r8=0;c.jQ=e;return c;}
var Hx=F(Bo);
var A0_=null;var A34=null;var A4e=null;function Hu(){Hu=T(Hx);AK5();}
function AJ8(a,b){var c=new Hx();ABR(c,a,b);return c;}
function ABR(a,b,c){Hu();B_(a,b,c);}
function AK5(){var b,c,d,e;A0_=AJ8(D(558),0);b=AJ8(D(559),1);A34=b;c=K(Hx,2);d=c.data;e=A0_;d[AWr(0,d)]=e;d[AWr(1,d)]=b;A4e=c;}
var Gh=F(Bo);
var A4f=null;var A35=null;var A4g=null;function ACl(){ACl=T(Gh);AQO();}
function AOl(a,b){var c=new Gh();Z_(c,a,b);return c;}
function Z_(a,b,c){ACl();B_(a,b,c);}
function AQO(){var b,c,d,e;A4f=AOl(D(560),0);b=AOl(D(561),1);A35=b;c=K(Gh,2);d=c.data;e=A4f;d[AWr(0,d)]=e;d[AWr(1,d)]=b;A4g=c;}
var JH=F();
function I$(){var a=this;JH.call(a);a.e9=null;a.bj=null;a.fs=null;}
function APx(a,b,c){var d=new I$();Ky(d,a,b,c);return d;}
function Ky(a,b,c,d){Ls();if(d!==A2J&&d!==A2I&&d!==A4h){b=new BU;c=new N;Q(c);L(C(L(C(L(c,D(562))),d)),D(563));S(b,O(c));J(b);}a.e9=b;b=C(LT(C(c),D(564),D(91)));if(PN(b,D(91)))b=B7(b,0,X(b)-1|0);a.bj=b;a.fs=d;}
function VU(a){return a.bj;}
function AE2(a){var b,c;b=KS(C(a.bj),47);c=C(b<0?a.bj:DJ(C(a.bj),b+1|0));b=KS(c,46);if(b==(-1))return c;return B7(c,0,b);}
function ABM(a){var b,c,d,e,f,g,h,$$je;b=a.fs;Ls();if(b!==A4h){a:{c=a.e9;b=a.bj;d=C(c);if(Ej(C(d.f7),b)){try{c=Ph(ABq(C(W(DC(C(d.f7),b),BB)),D(474)));break a;}catch($$e){$$je=Bj($$e);if($$je instanceof PR){}else{throw $$e;}}c=null;}else if(Ej(C(d.fO),b))c=Ph(CE(1));else if(Ej(C(d.gd),b)){b=C(W(DC(C(d.gd),b),Fy));c=new Vb;c.lK=b;}else c=!Ej(C(d.hX),b)?null:Ph(CE(1));}if(c!==null)return c;c=new BU;b=a.bj;d=new N;Q(d);L(C(L(d,b)),D(565));S(c,O(d));J(c);}if(A4i===null){c=new NF;b=new I8;d=new Qq;e=C(C(A1b).bY).sq;d.j9
=$rt_globals.window.localStorage;d.jG=e;JU(b,d);c.pi=b;b=new I8;d=new R8;d.pu=Hk(16);d.mi=AWc(16,0.800000011920929);JU(b,d);c.kh=b;A4i=c;}b:{c=C(A4i);b=C(c.kh);d=b.fH;e=a.bj;f=new N;Q(f);L(C(L(f,D(566))),e);if(C(d).h3(O(f))===null){b=b.fH;g=a.bj;d=new N;Q(d);L(C(L(d,D(567))),g);if(C(b).h3(O(d))===null){h=0;break b;}}h=1;}return !h?Ut(C(c.pi),a):Ut(C(c.kh),a);}
function VP(a,b){var c,d,e,f,g;c=new I$;d=a.e9;if(FR(C(a.bj)))e=D(1);else{e=a.bj;f=!PN(C(e),D(91))?D(91):D(1);g=new N;Q(g);L(C(L(g,e)),f);e=O(g);}g=new N;Q(g);L(C(L(g,e)),b);Ky(c,d,O(g),a.fs);return c;}
function V4(a){var b,c,d;b=C(a.bj);c=PH(b,D(91),X(b));d=D(1);if(c>0)d=B7(C(a.bj),0,c);return APx(a.e9,d,a.fs);}
function ATx(a){return a.bj;}
function Rc(){var a=this;E.call(a);a.dC=0;a.rN=0;a.qo=0;a.ha=0;a.rJ=null;a.rV=null;}
function Yi(a){ARi(a.dC);}
function Y8(a,b,c,d,e,f,g,h){var i,j;i=C(b).dC;j=a.dC;AEB(i,j,c,d,g,h,e,f,g,h);}
function ZK(a,b){APf(a.dC,b);}
function T9(a){var b,c,d;a:{b=a.ha;switch(b){case 1:break;case 2:b=6410;break a;case 3:case 5:b=6407;break a;case 4:case 6:b=6408;break a;default:c=new BU;d=new N;Q(d);V(C(L(d,D(553))),b);S(c,O(d));J(c);}b=6406;}return b;}
function ARn(b,c,d,e){var cBufferSize=c.length*$rt_globals.Uint8Array.BYTES_PER_ELEMENT;var cBuffer=$rt_globals.Gdx._malloc(cBufferSize);$rt_globals.Gdx.writeArrayToMemory(c,cBuffer);var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);$rt_globals.Gdx._free(cBuffer);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]
=height;b[3]=format;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
function AVC(b,c,d,e){var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,
endIndex);return newArray;}
function ARi(b){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_free(nativeObject);}
function AEB(b,c,d,e,f,g,h,i,j,k){var nativeObjectSrc=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);var nativeObjectDst=$rt_globals.Gdx.wrapPointer(c,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
function APf(b,c){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
var EY=F(Du);
function AQu(a){BN(a);return a;}
function ATF(a){Cf(a);return a;}
function AF5(a,b){BT(a,b);return a;}
function AN5(a){BN(a);return a;}
var Dc=F(Du);
function RX(a,b,c,d){var e,f,g,h,i,j,k;if(a.bK()){e=new Dj;Y(e);J(e);}if(Bl(a)<d){e=new E4;Y(e);J(e);}if(c>=0){b=C(b);f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){e=new Bg;i=new N;Q(i);V(C(L(C(V(C(L(i,D(568))),h)),D(488))),g);S(e,O(i));J(e);}if(d<0){e=new Bg;i=new N;Q(i);L(C(V(C(L(i,D(489))),d)),D(490));S(e,O(i));J(e);}h=a.f;j=0;while(j<d){k=h+1|0;g=c+1|0;a.g4(h,f[B(c,f)]);j=j+1|0;h=k;c=g;}a.f=a.f+d|0;return a;}}e=new Bg;d=C(b).data.length;i=new N;Q(i);Be(C(V(C(L(C(V(C(L(i,D(491))),c)),D(164))),d)),41);S(e,
O(i));J(e);}
function ANn(a){BN(a);return a;}
function AHN(a){Cf(a);return a;}
function AK3(a,b){CF(a,b);return a;}
function AOj(a,b){BT(a,b);return a;}
function ALg(a){Cf(a);return a;}
function ATy(a){BN(a);return a;}
function APk(a,b){CF(a,b);return a;}
function ASF(a,b){BT(a,b);return a;}
var ABK=F();
function DS(){Bo.call(this);this.le=0;}
var A07=null;var A4j=null;var A4k=null;var A4l=null;var A4m=null;var A4n=null;var A4o=null;var A4p=null;function AI2(){AI2=T(DS);AHZ();}
function Hc(a,b,c){var d=new DS();VD(d,a,b,c);return d;}
function VD(a,b,c,d){AI2();B_(a,b,c);a.le=d;}
function AHZ(){var b,c,d,e;A07=Hc(D(569),0,9728);A4j=Hc(D(570),1,9729);A4k=Hc(D(571),2,9987);A4l=Hc(D(572),3,9984);A4m=Hc(D(573),4,9985);A4n=Hc(D(574),5,9986);b=Hc(D(575),6,9987);A4o=b;c=K(DS,7);d=c.data;e=A07;d[AWr(0,d)]=e;e=A4j;d[AWr(1,d)]=e;e=A4k;d[AWr(2,d)]=e;e=A4l;d[AWr(3,d)]=e;e=A4m;d[AWr(4,d)]=e;e=A4n;d[AWr(5,d)]=e;d[AWr(6,d)]=b;A4p=c;}
function F6(){Bo.call(this);this.mS=0;}
var A4q=null;var A08=null;var A4r=null;var A4s=null;function AF1(){AF1=T(F6);ALG();}
function Ys(a,b,c){var d=new F6();AAl(d,a,b,c);return d;}
function AAl(a,b,c,d){AF1();B_(a,b,c);a.mS=d;}
function ALG(){var b,c,d,e;A4q=Ys(D(576),0,33648);A08=Ys(D(577),1,33071);b=Ys(D(578),2,10497);A4r=b;c=K(F6,3);d=c.data;e=A4q;d[AWr(0,d)]=e;e=A08;d[AWr(1,d)]=e;d[AWr(2,d)]=b;A4s=c;}
var E0=F(Du);
function Ub(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.bK()){e=new Dj;Y(e);J(e);}if(Bl(a)<d){e=new E4;Y(e);J(e);}if(c>=0){b=C(b);f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){e=new Bg;i=new N;Q(i);V(C(L(C(V(C(L(i,D(579))),h)),D(488))),g);S(e,O(i));J(e);}if(d<0){e=new Bg;i=new N;Q(i);L(C(V(C(L(i,D(489))),d)),D(490));S(e,O(i));J(e);}h=a.f;j=0;while(j<d){k=h+1|0;g=c+1|0;a.ke(h,f[B(c,f)]);j=j+1|0;h=k;c=g;}a.f=a.f+d|0;return a;}}e=new Bg;d=C(b).data.length;l=new N;Q(l);Be(C(V(C(L(C(V(C(L(l,D(491))),c)),D(164))),d)),41);S(e,
O(l));J(e);}
function ASl(a){BN(a);return a;}
function ASa(a){Cf(a);return a;}
function AP3(a,b){CF(a,b);return a;}
function AQE(a,b){BT(a,b);return a;}
function ARu(a){Cf(a);return a;}
function ATh(a){BN(a);return a;}
function ANv(a,b){CF(a,b);return a;}
function AGJ(a,b){BT(a,b);return a;}
var ABe=F();
var YG=F();
function ATn(a,b){return Ua(a.h2(b));}
function AIC(a){return a.xD();}
var GN=F(EY);
function OV(a,b,c,d){Hs(a,b);a.f=c;a.k=d;}
function Ui(a){var b,c;b=a.f;if(b<a.k){a.f=b+1|0;return a.iK(b);}c=new I_;Y(c);J(c);}
function DM(a,b){var c,d;if(a.bK()){c=new Dj;Y(c);J(c);}d=a.f;if(d<a.k){a.f=d+1|0;a.hZ(d,b);return a;}c=new E4;Y(c);J(c);}
function EB(a,b){var c,d,e;if(b>=0&&b<a.k)return a.iK(b);c=new Bg;d=a.k;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(163))),b)),D(164))),d)),41);S(c,O(e));J(c);}
function Uq(a,b,c){var d,e;if(a.bK()){d=new Dj;Y(d);J(d);}if(b>=0&&b<a.k){a.hZ(b,c);return a;}d=new Bg;c=a.k;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(163))),b)),D(164))),c)),41);S(d,O(e));J(d);}
function AM2(a){return a.bK();}
function Qc(){var a=this;GN.call(a);a.r8=0;a.lO=0;a.jQ=null;}
function AOx(a,b){var c;c=a.jQ;b=b+a.lO|0;c=C(c).data;return c[B(b,c)];}
function ANa(a,b,c){var d;d=a.jQ;b=b+a.lO|0;d=C(d).data;d[B(b,d)]=c;}
function AFZ(a){return a.r8;}
var GD=F(Dc);
function Rn(a,b,c,d){Hs(a,b);a.f=c;a.k=d;}
function QU(a,b){var c,d,e;if(b>=0&&b<a.k)return a.mH(b);c=new Bg;d=a.k;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(163))),b)),D(164))),d)),41);S(c,O(e));J(c);}
function Vi(a,b,c){var d,e,f;if(a.bK()){d=new Dj;Y(d);J(d);}if(b>=0&&b<a.k){a.g4(b,c);return a;}d=new Bg;e=a.k;f=new N;Q(f);Be(C(V(C(L(C(V(C(L(f,D(163))),b)),D(164))),e)),41);S(d,O(f));J(d);}
function AJv(a){return a.bK();}
function Un(){var a=this;GD.call(a);a.pI=0;a.mC=0;a.kS=null;}
function APs(a,b){var c;c=a.kS;b=b+a.mC|0;c=C(c).data;return c[B(b,c)];}
function AOJ(a,b,c){var d;d=a.kS;b=b+a.mC|0;d=C(d).data;d[B(b,d)]=c;}
function AOV(a){return a.pI;}
var Hz=F(E0);
function SU(a,b,c,d){Hs(a,b);a.f=c;a.k=d;}
function ACM(a,b){var c,d,e;if(b>=0&&b<a.k)return a.mG(b);c=new Bg;d=a.k;e=new N;Q(e);Be(C(V(C(L(C(V(C(L(e,D(163))),b)),D(164))),d)),41);S(c,O(e));J(c);}
function AMx(a){return a.bK();}
function Uv(){var a=this;Hz.call(a);a.m5=0;a.l2=0;a.kD=null;}
function AKP(a,b){var c;c=a.kD;b=b+a.l2|0;c=C(c).data;return c[B(b,c)];}
function AL8(a,b,c){var d;d=a.kD;b=b+a.l2|0;d=C(d).data;d[B(b,d)]=c;}
function AJn(a){return a.m5;}
function GE(){var a=this;GD.call(a);a.eV=null;a.sc=0;a.e4=0;}
function UK(a,b,c,d,e,f,g){Rn(a,c,e,f);a.e4=b;a.eV=d;a.sc=g;}
function AO3(a){return a.sc;}
function APS(a){return Vy(C(a.eV));}
var NH=F(GE);
function AMW(a,b){var c;c=C(a.eV).N;b=a.e4+(b*4|0)|0;c=C(c).data;return $rt_intBitsToFloat((c[B(b,c)]&255)<<24|(c[B(b+1|0,c)]&255)<<16|(c[B(b+2|0,c)]&255)<<8|c[B(b+3|0,c)]&255);}
function APO(a,b,c){var d,e,f,g;d=Fl(c);e=C(a.eV).N;b=a.e4+(b*4|0)|0;f=d>>24<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;g=d>>16<<24>>24;e[B(f,e)]=g;f=b+2|0;g=d>>8<<24>>24;e[B(f,e)]=g;b=b+3|0;d=d<<24>>24;e[B(b,e)]=d;}
var Qp=F(GE);
function AF8(a,b){var c;c=C(a.eV).N;b=a.e4+(b*4|0)|0;c=C(c).data;return $rt_intBitsToFloat(c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8|(c[B(b+2|0,c)]&255)<<16|(c[B(b+3|0,c)]&255)<<24);}
function AML(a,b,c){var d,e,f,g;d=Fl(c);e=C(a.eV).N;b=a.e4+(b*4|0)|0;f=d<<24>>24;e=C(e).data;e[B(b,e)]=f;f=b+1|0;g=d>>8<<24>>24;e[B(f,e)]=g;f=b+2|0;g=d>>16<<24>>24;e[B(f,e)]=g;b=b+3|0;d=d>>24<<24>>24;e[B(b,e)]=d;}
function Gp(){var a=this;Hz.call(a);a.eP=null;a.ot=0;a.fT=0;}
function SY(a,b,c,d,e,f,g){SU(a,c,e,f);a.fT=b;a.eP=d;a.ot=g;}
function ALu(a){return a.ot;}
function AQd(a){return Vy(C(a.eP));}
var Nu=F(Gp);
function AJf(a,b){var c;c=C(a.eP).N;b=a.fT+(b*2|0)|0;c=C(c).data;return (c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8)<<16>>16;}
function AIz(a,b,c){var d,e;d=C(a.eP).N;b=a.fT+(b*2|0)|0;e=c<<24>>24;d=C(d).data;d[B(b,d)]=e;b=b+1|0;c=c>>8<<24>>24;d[B(b,d)]=c;}
var PI=F(Gp);
function AOo(a,b){var c;c=C(a.eP).N;b=a.fT+(b*2|0)|0;c=C(c).data;return ((c[B(b,c)]&255)<<8|c[B(b+1|0,c)]&255)<<16>>16;}
function AJh(a,b,c){var d,e;d=C(a.eP).N;b=a.fT+(b*2|0)|0;e=c>>8<<24>>24;d=C(d).data;d[B(b,d)]=e;b=b+1|0;c=c<<24>>24;d[B(b,d)]=c;}
var Im=F(Bu);
var Dj=F(Im);
function Hm(){var a=this;GN.call(a);a.fj=null;a.pQ=0;a.fl=0;}
function M_(a,b,c,d,e,f,g){OV(a,c,e,f);a.fl=b;a.fj=d;a.pQ=g;}
function AMQ(a){return a.pQ;}
var N3=F(Hm);
function AKK(a,b){var c;c=C(a.fj).N;b=a.fl+(b*4|0)|0;c=C(c).data;return c[B(b,c)]&255|(c[B(b+1|0,c)]&255)<<8|(c[B(b+2|0,c)]&255)<<16|(c[B(b+3|0,c)]&255)<<24;}
function AFY(a,b,c){var d,e,f;d=C(a.fj).N;b=a.fl+(b*4|0)|0;e=c<<24>>24;d=C(d).data;d[B(b,d)]=e;e=b+1|0;f=c>>8<<24>>24;d[B(e,d)]=f;e=b+2|0;f=c>>16<<24>>24;d[B(e,d)]=f;b=b+3|0;c=c>>24<<24>>24;d[B(b,d)]=c;}
var RW=F(Hm);
function ARc(a,b){var c;c=C(a.fj).N;b=a.fl+(b*4|0)|0;c=C(c).data;return (c[B(b,c)]&255)<<24|(c[B(b+1|0,c)]&255)<<16|(c[B(b+2|0,c)]&255)<<8|c[B(b+3|0,c)]&255;}
function AHn(a,b,c){var d,e,f;d=C(a.fj).N;b=a.fl+(b*4|0)|0;e=c>>24<<24>>24;d=C(d).data;d[B(b,d)]=e;e=b+1|0;f=c>>16<<24>>24;d[B(e,d)]=f;e=b+2|0;f=c>>8<<24>>24;d[B(e,d)]=f;b=b+3|0;c=c<<24>>24;d[B(b,d)]=c;}
var I_=F(Bu);
var Yx=F();
function To(){var a=this;E.call(a);a.eA=null;a.cs=null;}
function Zw(a,b){var c,d,e,f,$$je,$p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eA.readyState==4){if(a.eA.status==200){if(C(C(a.cs).dM).dn){b=EX();c=C(a.cs).dF;d=new N;Q(d);L(C(L(d,D(580))),c);D2(C(b),O(d));}c=C(a.cs);C(c.d5).fh(c.dF,$rt_str(a.eA.responseText));}else if(a.eA.status!=404&&a.eA.status!=403){try{e=Bc(100);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}d=C(a.cs);HU(C(d.dM),
d.gF,d.dF,d.d5);}else{c=C(a.cs);C(c.d5).e6(c.dF);}Fk(C(C(a.cs).dM));}return;case 1:a:{try{X2(e);if(Ik()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}}d=C(a.cs);b=d.dM;f=d.gF;c=d.dF;d=d.d5;HU(C(b),f,c,d);Fk(C(C(a.cs).dM));return;default:AGm();}}TF().s(a,b,c,d,e,f,$p);}
var S1=F(0);
var EQ=F(Bo);
var A2I=null;var A2J=null;var A4t=null;var A4u=null;var A4h=null;var A4v=null;function Ls(){Ls=T(EQ);AKc();}
function LO(a,b){var c=new EQ();Xb(c,a,b);return c;}
function Xb(a,b,c){Ls();B_(a,b,c);}
function AKc(){var b,c,d,e;A2I=LO(D(581),0);A2J=LO(D(582),1);A4t=LO(D(583),2);A4u=LO(D(584),3);b=LO(D(585),4);A4h=b;c=K(EQ,5);d=c.data;e=A2I;d[AWr(0,d)]=e;e=A2J;d[AWr(1,d)]=e;e=A4t;d[AWr(2,d)]=e;e=A4u;d[AWr(3,d)]=e;d[AWr(4,d)]=b;A4v=c;}
function Gz(){E.call(this);this.u5=null;}
function Si(a){a.u5=new E;}
function ABr(){var a=this;Gz.call(a);a.gq=null;a.hx=null;a.d4=0;a.g3=0;a.lw=0;a.rg=0;}
function AVm(a,b){var c=new ABr();AJK(c,a,b);return c;}
function AJK(a,b,c){Si(a);a.rg=(-1);if(c<0){b=new Bh;Y(b);J(b);}a.gq=b;a.hx=BS(BF(64,c));}
function AAA(a){Uh(a);C(C(a.gq).l0).i$();a.gq=null;}
function HO(a){var b,c,d,e;Uh(a);if(a.lw&&a.d4>=a.g3)return null;b=new N;Q(b);a:{while(true){if(a.d4>=a.g3&&!RI(a,0))break a;c=a.hx;d=a.d4;e=d+1|0;a.d4=e;c=C(c).data;d=c[B(d,c)];if(d==10)break;if(d==13){if(e>=a.g3&&!RI(a,0))break a;c=a.hx;e=a.d4;c=C(c).data;if(c[B(e,c)]!=10)break a;a.d4=e+1|0;break a;}Be(b,d);}}return O(b);}
function RI(a,b){var c,d,e,f,g,h,i,j,k;if(a.lw)return 0;a:{b:while(true){c=a.hx;d=C(c).data.length;if(b>=d)break a;e=a.gq;f=d-b|0;g=C(e);if(g.mj&&!CB(C(g.de)))h=(-1);else{h=0;c:{while(f>0){d=B1(f,Bl(C(g.de)));NJ(C(g.de),c,b+h|0,d);f=f-d|0;h=h+d|0;if(!CB(C(g.de))){if(g.mj)d=0;else{e=C(g.de);if(e.iN){e=new Dj;Y(e);J(e);}d:{i=Bl(e);j=e.f;if(j>0){k=0;while(true){if(k>=i)break d;d=j+1|0;Lc(e,k,Sl(e,j));k=k+1|0;j=d;}}}e.f=i;e.k=e.bM;e.cA=(-1);e:{while(true){if(!CB(C(g.cd))&&!Tg(g))break e;e=C(Yw(C(g.mo),g.cd,g.de,
g.iE));if(F$(e))break;if(G4(e))Tg(g);}}if(!CB(C(g.cd))&&g.iE){e=C(g.mo);i=e.hw;if(i!=3&&i!=2)break b;e.hw=3;if(G4(C(A3S)))g.mj=1;}Cf(C(g.de));d=1;}if(!d)break c;}}}}if(h==(-1)){a.lw=1;break a;}if(!h)break a;b=b+h|0;}e=new CA;Y(e);J(e);}a.g3=b;a.d4=0;a.rg=(-1);return 1;}
function Uh(a){var b;if(a.gq!==null)return;b=new Fg;Y(b);J(b);}
function WV(){var a=this;Gz.call(a);a.l0=null;a.mo=null;a.zo=null;a.cd=null;a.uz=null;a.de=null;a.iE=0;a.mj=0;}
function AUb(a){var b=new WV();AGg(b,a);return b;}
function AGg(a,b){var c,d,e,f;PZ();c=C(A3x);d=new R6;d.dz=D(586);Fp();e=A3N;d.fq=e;d.l9=e;d.uF=c;d.sU=0.3333333432674408;d.vD=0.5;d.n2=CE(512);d.qA=BS(512);c=A3y;if(c===null){c=new Bh;S(c,D(587));J(c);}d.fq=c;d.l9=c;Si(a);f=CE(8192);a.zo=f;a.cd=Kn(f);f=BS(1024);a.uz=f;c=ABn(f);a.de=c;a.l0=b;a.mo=d;b=C(c);BT(b,b.k);b=C(a.cd);BT(b,b.k);}
function Tg(a){var b,c,d,e,f,g,h,i,j;if(a.iE)return 0;b=C(a.cd);if(b.b_){b=new Dj;Y(b);J(b);}a:{c=Bl(b);d=b.f;if(d>0){e=b.bD;f=e+d|0;g=0;while(true){if(g>=c)break a;h=b.N;i=e+1|0;d=f+1|0;h=C(h).data;f=h[B(f,h)];h[B(e,h)]=f;g=g+1|0;e=i;f=d;}}}b.f=c;b.k=b.bM;b.cA=(-1);b:{while(true){if(!CB(C(a.cd)))break b;b=a.l0;j=C(a.cd);d=C(b).pD(j.N,j.f,Bl(j));if(d==(-1)){a.iE=1;break b;}b=C(a.cd);BT(b,b.f+d|0);if(!d)break;}}Cf(C(a.cd));return 1;}
function VF(){var a=this;E.call(a);a.bN=null;a.c4=null;a.me=0;a.bg=0;}
function AEi(a,b){var c=new VF();AR4(c,a,b);return c;}
function AR4(a,b,c){if(b===null){b=new EC;Y(b);J(b);}a.bN=b;a.c4=c;a.me=0;a.bg=0;}
function Vu(a){var b,c,d;if(a.c4===null){b=new EC;Y(b);J(b);}a:{c=X(C(a.bN));d=a.bg;if(d<c){if(a.me)return 1;while(true){if(d>=c)break a;if(DP(C(a.c4),R(C(a.bN),d),0)==(-1))return 1;d=d+1|0;}}}return 0;}
function Bs(a){var b,c,d,e,f,g;if(a.c4===null){b=new EC;Y(b);J(b);}c=a.bg;d=X(C(a.bN));if(c<d){if(a.me){if(DP(C(a.c4),R(C(a.bN),a.bg),0)>=0){b=a.bN;c=a.bg;a.bg=c+1|0;e=R(C(b),c);b=new BB;f=BS(1);g=f.data;g[AWr(0,g)]=e;JD(b,f);return b;}a.bg=a.bg+1|0;while(true){e=a.bg;if(e>=d)break;if(DP(C(a.c4),R(C(a.bN),e),0)>=0)return B7(C(a.bN),c,a.bg);a.bg=a.bg+1|0;}return DJ(C(a.bN),c);}while(true){e=Cz(c,d);if(e>=0)break;if(DP(C(a.c4),R(C(a.bN),c),0)<0)break;c=c+1|0;}a.bg=c;if(e<0){a.bg=c+1|0;while(true){e=a.bg;if(e>=
d)break;if(DP(C(a.c4),R(C(a.bN),e),0)>=0)return B7(C(a.bN),c,a.bg);a.bg=a.bg+1|0;}return DJ(C(a.bN),c);}}b=new MA;Y(b);J(b);}
var Qi=F();
var A4w=null;function Vn(b){var $$je;a:{if(b!==null)try{AAA(b);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}}}
function ADm(){A4w=CE(0);}
var DX=F(Bo);
var A39=null;var A4x=null;var A3$=null;var A3_=null;var A4a=null;var A4b=null;var A38=null;var A4y=null;function XG(){XG=T(DX);AF0();}
function G1(a,b){var c=new DX();AFJ(c,a,b);return c;}
function AFJ(a,b,c){XG();B_(a,b,c);}
function AF0(){var b,c,d,e;A39=G1(D(246),0);A4x=G1(D(588),1);A3$=G1(D(589),2);A3_=G1(D(590),3);A4a=G1(D(591),4);A4b=G1(D(592),5);b=G1(D(593),6);A38=b;c=K(DX,7);d=c.data;e=A39;d[AWr(0,d)]=e;e=A4x;d[AWr(1,d)]=e;e=A3$;d[AWr(2,d)]=e;e=A3_;d[AWr(3,d)]=e;e=A4a;d[AWr(4,d)]=e;e=A4b;d[AWr(5,d)]=e;d[AWr(6,d)]=b;A4y=c;}
function LZ(){var a=this;E.call(a);a.go=null;a.oW=0;a.mU=null;a.hp=null;a.r9=0;a.t2=0.0;a.t1=0.0;a.rS=null;a.ux=0.0;a.cm=null;a.cn=null;a.d1=null;a.jg=null;}
var A4z=null;function AVa(){AVa=T(LZ);AM$();}
function X8(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=C(a.go).cz;d=0;e=C(a.cm).data.length;while(d<e){f=C(a.cn).data;g=B(d,f);if(f[g]>0){f=C(a.cm).data;h=AWr(g,f);i=f[h];c=C(c);j=C(W(CK(c,h),DW)).di;d=0;f=C(a.cn).data;g=AWr(h,f);k=f[g];b=C(b);if(!b.ds){b=new CA;S(b,D(484));J(b);}h=C(b.em).data.length;if(j!==b.e1){Sr(b,j);l=h;}else{l=h-b.bF|0;if(!l){GP(b);l=h;}}l=B1(l,k);Cg(i,d,b.em,b.bF,l);b.bF=b.bF+l|0;m=k-l|0;while(m>0){d=d+l|0;GP(b);l=B1(h,m);Cg(i,d,b.em,0,l);b.bF=b.bF+l|0;m=m-l|0;}}d=g+1|0;}}
function Tm(a,b,c){var d,e,f,g,h,i,j;d=a.d1;if(d!==null){d=d.data;b=B(b,d);if(c>C(C(d[b]).by).data.length){b=AWr(b,d);e=d[b];b=AWr(b,d);f=c-C(d[b]).p|0;e=C(e);if(f<0){e=new Bh;g=new N;Q(g);Bb(g,D(540));S(e,O(C(V(g,f))));J(e);}f=e.p+f|0;if(f>C(e.by).data.length)JW(e,BF(BF(8,f),e.p*1.75|0));}}d=C(a.cn).data;f=B(b,d);h=d[f]+(c*20|0)|0;i=C(a.cm).data;f=AWr(f,i);j=i[f];if(j===null)i[AWr(f,i)]=C4(h);else if(j.data.length<h){i=C4(h);f=AWr(f,d);Cg(j,0,i,0,d[f]);d=C(a.cm).data;d[AWr(f,d)]=i;}}
function AC$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=C(C(a.go).gV);g=f.gr;h=f.sr;b=C(b);c=c+b.cr*g;d=d+b.eY*h;i=b.bL*g;j=b.bO*h;k=b.m8;l=b.n4;m=b.i3;n=b.jT;if(a.oW){c=Eh(c);d=Eh(d);i=Eh(i);j=Eh(j);}o=c+i;p=d+j;q=b.eK;r=C(a.cn).data;q=B(q,r);s=r[q];t=AWr(q,r);r[t]=r[t]+20|0;r=a.d1;if(r!==null){r=r.data;t=AWr(t,r);b=r[t];u=a.r9;a.r9=u+1|0;Ey(C(b),u);}r=C(a.cm).data;r=r[AWr(t,r)];q=s+1|0;r=C(r).data;r[B(s,r)]=c;u=q+1|0;r[B(q,r)]=d;q=u+1|0;r[B(u,r)]=e;u=q+1|0;r[B(q,r)]=k;q=u+1|0;r[B(u,r)]=m;u=q+1|0;r[B(q,
r)]=c;q=u+1|0;r[B(u,r)]=p;u=q+1|0;r[B(q,r)]=e;q=u+1|0;r[B(u,r)]=k;u=q+1|0;r[B(q,r)]=n;q=u+1|0;r[B(u,r)]=o;u=q+1|0;r[B(q,r)]=p;q=u+1|0;r[B(u,r)]=e;u=q+1|0;r[B(q,r)]=l;q=u+1|0;r[B(u,r)]=n;u=q+1|0;r[B(q,r)]=o;q=u+1|0;r[B(u,r)]=d;u=q+1|0;r[B(q,r)]=e;q=u+1|0;r[B(u,r)]=l;r[B(q,r)]=m;}
function AFs(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v;Yz();k=W(HS(C(LG(H(Gk)))),Gk);CJ(C(a.hp),k);l=a.go;m=a.rS;k=C(k);Ia(k,l,b,e,f,m,g,h,i,j);j=C(a.go);d=d+C(j.gV).hr;n=C(k.bi).e;if(n){o=a.cm;h=C(o).data.length;i=C(j.cz).e;if(h<i){p=K($rt_arraycls($rt_floatcls()),i);Cg(o,0,p,0,h);a.cm=p;p=Bk(i);o=a.cn;Cg(o,0,p,0,C(o).data.length);a.cn=p;p=K(G_,i);e=0;o=a.d1;if(o!==null){e=o.data.length;Cg(o,0,p,0,e);}while(e<i){o=p.data;b=AFH();e=B(e,o);o[e]=b;e=e+1|0;}a.d1=p;a.jg=Bk(i);}a:{CJ(C(a.mU),k);if(C(a.cm).data.length
==1)Tm(a,0,k.bs);else{p=a.jg;H0(p,0);h=0;i=C(k.bi).e;while(h<i){b=C(C(W(CK(C(k.bi),h),DD)).G);o=b.E;e=0;q=b.e;while(e<q){o=C(o);r=o.data;e=B(e,r);f=C(W(r[e],CL)).eK;p=C(p);r=p.data;f=B(f,r);r[f]=r[f]+1|0;e=e+1|0;}h=h+1|0;}e=0;p=C(p).data;f=p.length;while(true){if(e>=f)break a;e=B$(e);Tm(a,e,p[e]);e=e+1|0;}}}b=k.S;f=0;h=0;e=0;g=0.0;i=0;while(i<n){l=C(W(CK(C(k.bi),i),DD));m=C(l.G);p=m.E;o=C(l.I).bf;s=c+l.ce;t=d+l.hM;q=0;u=m.e;while(q<u){v=e+1|0;if(e==h){e=f+1|0;b=C(b);g=W$(Dt(b,e));f=e+1|0;h=f>=b.p?(-1):Dt(b,
f);}o=C(o);r=o.data;e=B(q,r);s=s+r[e];p=C(p);r=p.data;e=AWr(e,r);AC$(a,W(r[e],CL),s,t,g);q=e+1|0;e=v;}i=i+1|0;}J5();a.ux=A0x;}return k;}
function AM$(){A4z=C5(1.0,1.0,1.0,1.0);}
var Ju=F();
var A4A=null;var A4B=null;function AE4(b,c,d){var e,f,g,h,i,j,k;e=50+c|0;if(b){f=C(A4A).data;if(e<=f.length&&e>=0){g=B(e,f);h=Gv(b,f[g],0);f=C(A4B).data;i=f[AWr(g,f)]-1|0;j=(32-JQ(h)|0)-30|0;b=j>=0?h>>>j|0:h<<( -j|0);c=i+j|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){b=b>>B1(( -c|0)+1|0,32);c=0;}k=(b>>>6|0)&8388607|c<<23;if(d)k=k^(-2147483648);return $rt_intBitsToFloat(k);}}return $rt_intBitsToFloat(!d?0:(-2147483648));}
function ACB(){var b,c;b=Bk(100);c=b.data;c[AWr(0,c)]=(-1598972629);c[AWr(1,c)]=(-924973963);c[AWr(2,c)]=(-82475629);c[AWr(3,c)]=(-1662160004);c[AWr(4,c)]=(-1003958181);c[AWr(5,c)]=(-181205903);c[AWr(6,c)]=(-1723866425);c[AWr(7,c)]=(-1081091207);c[AWr(8,c)]=(-277622185);c[AWr(9,c)]=(-1784126602);c[AWr(10,c)]=(-1156416428);c[AWr(11,c)]=(-371778711);c[AWr(12,c)]=(-1842974431);c[AWr(13,c)]=(-1229976214);c[AWr(14,c)]=(-463728444);c[AWr(15,c)]=(-1900443013);c[AWr(16,c)]=(-1301811943);c[AWr(17,c)]=(-553523104);c[AWr(18,
c)]=(-1956564676);c[AWr(19,c)]=(-1371964021);c[AWr(20,c)]=(-641213203);c[AWr(21,c)]=(-2011370988);c[AWr(22,c)]=(-1440471911);c[AWr(23,c)]=(-726848064);c[AWr(24,c)]=(-2064892776);c[AWr(25,c)]=(-1507374146);c[AWr(26,c)]=(-810475859);c[AWr(27,c)]=(-2117160148);c[AWr(28,c)]=(-1572708361);c[AWr(29,c)]=(-892143627);c[AWr(30,c)]=(-41437709);c[AWr(31,c)]=(-1636511304);c[AWr(32,c)]=(-971897307);c[AWr(33,c)]=(-141129809);c[AWr(34,c)]=(-1698818867);c[AWr(35,c)]=(-1049781759);c[AWr(36,c)]=(-238485375);c[AWr(37,c)]=(-1759666096);c[AWr(38,
c)]=(-1125840795);c[AWr(39,c)]=(-333559170);c[AWr(40,c)]=(-1819087217);c[AWr(41,c)]=(-1200117198);c[AWr(42,c)]=(-426404673);c[AWr(43,c)]=(-1877115657);c[AWr(44,c)]=(-1272652747);c[AWr(45,c)]=(-517074110);c[AWr(46,c)]=(-1933784055);c[AWr(47,c)]=(-1343488244);c[AWr(48,c)]=(-605618481);c[AWr(49,c)]=(-1989124287);c[AWr(50,c)]=(-1412663534);c[AWr(51,c)]=(-692087594);c[AWr(52,c)]=(-2043167482);c[AWr(53,c)]=(-1480217529);c[AWr(54,c)]=(-776530087);c[AWr(55,c)]=(-2095944040);c[AWr(56,c)]=(-1546188227);c[AWr(57,c)]=(-858993459);c[AWr(58,
c)]=(-2147483648);c[AWr(59,c)]=(-1610612736);c[AWr(60,c)]=(-939524096);c[AWr(61,c)]=(-100663296);c[AWr(62,c)]=(-1673527296);c[AWr(63,c)]=(-1018167296);c[AWr(64,c)]=(-198967296);c[AWr(65,c)]=(-1734967296);c[AWr(66,c)]=(-1094967296);c[AWr(67,c)]=(-294967296);c[AWr(68,c)]=(-1794967296);c[AWr(69,c)]=(-1169967296);c[AWr(70,c)]=(-388717296);c[AWr(71,c)]=(-1853561046);c[AWr(72,c)]=(-1243209483);c[AWr(73,c)]=(-480270030);c[AWr(74,c)]=(-1910781505);c[AWr(75,c)]=(-1314735057);c[AWr(76,c)]=(-569676998);c[AWr(77,c)]=(-1966660859);c[AWr(78,
c)]=(-1384584250);c[AWr(79,c)]=(-656988489);c[AWr(80,c)]=(-2021230542);c[AWr(81,c)]=(-1452796353);c[AWr(82,c)]=(-742253617);c[AWr(83,c)]=(-2074521247);c[AWr(84,c)]=(-1519409734);c[AWr(85,c)]=(-825520344);c[AWr(86,c)]=(-2126562951);c[AWr(87,c)]=(-1584461865);c[AWr(88,c)]=(-906835507);c[AWr(89,c)]=(-59802560);c[AWr(90,c)]=(-1647989336);c[AWr(91,c)]=(-986244846);c[AWr(92,c)]=(-159064233);c[AWr(93,c)]=(-1710027882);c[AWr(94,c)]=(-1063793028);c[AWr(95,c)]=(-255999461);c[AWr(96,c)]=(-1770612399);c[AWr(97,c)]=(-1139523675);c[AWr(98,
c)]=(-350662770);c[AWr(99,c)]=(-1829776967);A4A=b;b=Bk(100);c=b.data;c[AWr(0,c)]=(-35);c[AWr(1,c)]=(-32);c[AWr(2,c)]=(-29);c[AWr(3,c)]=(-25);c[AWr(4,c)]=(-22);c[AWr(5,c)]=(-19);c[AWr(6,c)]=(-15);c[AWr(7,c)]=(-12);c[AWr(8,c)]=(-9);c[AWr(9,c)]=(-5);c[AWr(10,c)]=(-2);c[AWr(11,c)]=1;c[AWr(12,c)]=5;c[AWr(13,c)]=8;c[AWr(14,c)]=11;c[AWr(15,c)]=15;c[AWr(16,c)]=18;c[AWr(17,c)]=21;c[AWr(18,c)]=25;c[AWr(19,c)]=28;c[AWr(20,c)]=31;c[AWr(21,c)]=35;c[AWr(22,c)]=38;c[AWr(23,c)]=41;c[AWr(24,c)]=45;c[AWr(25,c)]=48;c[AWr(26,c)]
=51;c[AWr(27,c)]=55;c[AWr(28,c)]=58;c[AWr(29,c)]=61;c[AWr(30,c)]=64;c[AWr(31,c)]=68;c[AWr(32,c)]=71;c[AWr(33,c)]=74;c[AWr(34,c)]=78;c[AWr(35,c)]=81;c[AWr(36,c)]=84;c[AWr(37,c)]=88;c[AWr(38,c)]=91;c[AWr(39,c)]=94;c[AWr(40,c)]=98;c[AWr(41,c)]=101;c[AWr(42,c)]=104;c[AWr(43,c)]=108;c[AWr(44,c)]=111;c[AWr(45,c)]=114;c[AWr(46,c)]=118;c[AWr(47,c)]=121;c[AWr(48,c)]=124;c[AWr(49,c)]=128;c[AWr(50,c)]=131;c[AWr(51,c)]=134;c[AWr(52,c)]=138;c[AWr(53,c)]=141;c[AWr(54,c)]=144;c[AWr(55,c)]=148;c[AWr(56,c)]=151;c[AWr(57,c)]
=154;c[AWr(58,c)]=158;c[AWr(59,c)]=161;c[AWr(60,c)]=164;c[AWr(61,c)]=167;c[AWr(62,c)]=171;c[AWr(63,c)]=174;c[AWr(64,c)]=177;c[AWr(65,c)]=181;c[AWr(66,c)]=184;c[AWr(67,c)]=187;c[AWr(68,c)]=191;c[AWr(69,c)]=194;c[AWr(70,c)]=197;c[AWr(71,c)]=201;c[AWr(72,c)]=204;c[AWr(73,c)]=207;c[AWr(74,c)]=211;c[AWr(75,c)]=214;c[AWr(76,c)]=217;c[AWr(77,c)]=221;c[AWr(78,c)]=224;c[AWr(79,c)]=227;c[AWr(80,c)]=231;c[AWr(81,c)]=234;c[AWr(82,c)]=237;c[AWr(83,c)]=241;c[AWr(84,c)]=244;c[AWr(85,c)]=247;c[AWr(86,c)]=251;c[AWr(87,c)]=254;c[AWr(88,
c)]=257;c[AWr(89,c)]=260;c[AWr(90,c)]=264;c[AWr(91,c)]=267;c[AWr(92,c)]=270;c[AWr(93,c)]=274;c[AWr(94,c)]=277;c[AWr(95,c)]=280;c[AWr(96,c)]=284;c[AWr(97,c)]=287;c[AWr(98,c)]=290;c[AWr(99,c)]=294;A4B=b;}
var GZ=F(Bo);
var A4c=null;var A4C=null;var A4D=null;function ZV(){ZV=T(GZ);ATr();}
function AMO(a,b){var c=new GZ();AEP(c,a,b);return c;}
function AEP(a,b,c){ZV();B_(a,b,c);}
function ATr(){var b,c,d,e;A4c=AMO(D(594),0);b=AMO(D(595),1);A4C=b;c=K(GZ,2);d=c.data;e=A4c;d[AWr(0,d)]=e;d[AWr(1,d)]=b;A4D=c;}
function CM(){Bo.call(this);this.eO=null;}
var A37=null;var A4E=null;var A4F=null;var A4G=null;var A4H=null;var A4I=null;var A4J=null;var A4K=null;var A4L=null;var A36=null;var A4M=null;var A4N=null;function JC(){JC=T(CM);AK0();}
function D7(a,b,c){var d=new CM();ACw(d,a,b,c);return d;}
function ACw(a,b,c,d){JC();B_(a,b,c);a.eO=d;}
function AK0(){var b,c,d,e;A37=D7(D(596),0,D(597));A4E=D7(D(598),1,D(599));A4F=D7(D(600),2,D(601));A4G=D7(D(602),3,D(603));A4H=D7(D(604),4,D(605));A4I=D7(D(606),5,D(607));A4J=D7(D(608),6,D(609));A4K=D7(D(610),7,D(611));A4L=D7(D(612),8,D(613));A36=D7(D(614),9,D(615));b=D7(D(616),10,D(617));A4M=b;c=K(CM,11);d=c.data;e=A37;d[AWr(0,d)]=e;e=A4E;d[AWr(1,d)]=e;e=A4F;d[AWr(2,d)]=e;e=A4G;d[AWr(3,d)]=e;e=A4H;d[AWr(4,d)]=e;e=A4I;d[AWr(5,d)]=e;e=A4J;d[AWr(6,d)]=e;e=A4K;d[AWr(7,d)]=e;e=A4L;d[AWr(8,d)]=e;e=A36;d[AWr(9,d)]
=e;d[AWr(10,d)]=b;A4N=c;}
var W0=F();
var Gr=F(Bo);
var A09=null;var A0$=null;var A4O=null;function AGB(){AGB=T(Gr);AIX();}
function APo(a,b){var c=new Gr();AEd(c,a,b);return c;}
function AEd(a,b,c){AGB();B_(a,b,c);}
function AIX(){var b,c,d,e;A09=APo(D(618),0);b=APo(D(619),1);A0$=b;c=K(Gr,2);d=c.data;e=A09;d[AWr(0,d)]=e;d[AWr(1,d)]=b;A4O=c;}
var SC=F();
var A1a=0;function Pv(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=A02;g=C(c);C(f).dD(b,0,GR(g),CN(g),CQ(g),0,G5(g),Hq(g),g.eN);if(A04===null&&d!=e){c=new BU;S(c,D(620));J(c);}h=CN(g)/2|0;i=CQ(g)/2|0;j=1;while(h>0&&i>0){f=V8(h,i,Gw(g));Hu();M2(f,A0_);k=CN(g);l=CQ(g);m=f.bA;if(m===null)MG(f,Lj(g),0,0,k,l,0,0,h,i);else{n=C(g.bA).dC;o=m.dC;AEB(n,o,0,0,k,l,0,0,h,i);}if(j>1)H4(g);c=A02;d=GR(f);e=CN(f);h=CQ(f);p=G5(f);q=Hq(f);g=f.eN;C(c).dD(b,j,d,e,h,0,p,q,g);h=CN(f)/2|0;i=CQ(f)/2|0;j=j+1|0;g=f;}}
function AAD(){A1a=1;}
var Sh=F();
var A4d=null;function AUE(){AUE=T(Sh);ATq();}
function ATq(){var b,c;ZV();b=Bk(C(C(A4D).ck()).data.length);c=b.data;A4d=b;c[B(C(A4c).r,c)]=1;c[B(C(A4C).r,c)]=2;}
function Md(){var a=this;E.call(a);a.uF=null;a.sU=0.0;a.vD=0.0;a.dz=null;a.fq=null;a.l9=null;a.hw=0;}
function Yw(a,b,c,d){var e,f,g,h,i,$$je;e=a.hw;if(!(e==2&&!d)&&e!=3){a.hw=d?2:1;while(true){try{f=AEo(a,b,c);}catch($$e){$$je=Bj($$e);if($$je instanceof Bu){g=$$je;J(AJt(g));}else{throw $$e;}}h=C(f);if(F$(h))break;if(G4(h)){if(d){b=C(b);if(CB(b)){i=a.fq;Fp();if(i===A3N)return Cq(Bl(b));i=C(c);if(Bl(i)<=X(C(a.dz)))return A3R;BT(b,b.f+Bl(b)|0);if(a.fq===A3y)Kp(i,a.dz);}}return h;}if(Qk(h)){i=a.fq;Fp();if(i===A3N)return h;if(i===A3y){c=C(c);if(Bl(c)<X(C(a.dz)))return A3R;Kp(c,a.dz);}b=C(b);BT(b,b.f+Ks(h)|0);}else if
(Mc(h)){i=a.l9;Fp();if(i===A3N)return h;if(i===A3y){c=C(c);if(Bl(c)<X(C(a.dz)))return A3R;Kp(c,a.dz);}b=C(b);BT(b,b.f+Ks(h)|0);}}return h;}b=new CA;Y(b);J(b);}
var E4=F(Bu);
var FX=F();
var A4i=null;function WW(){A4i=null;}
function Kx(){var a=this;DW.call(a);a.v9=0.0;a.v8=0.0;a.xl=0;a.uC=0;}
var Yb=F();
function HV(b){if(!AD3(b,Fa))return null;return C(Dm(b,Fa)).jx();}
function KP(){var a=this;Md.call(a);a.n2=null;a.qA=null;}
function AEo(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.n2;e=0;f=0;g=a.qA;a:{while(true){if((e+32|0)>f){b=C(b);if(CB(b)){h=e;while(h<f){i=h-e|0;d=C(d);j=d.data;h=B(h,j);j[B(i,j)]=j[h];h=h+1|0;}h=f-e|0;i=Bl(b)+h|0;d=C(d);f=B1(i,d.data.length);Pg(b,d,h,f-h|0);e=0;}}c=C(c);if(!CB(c)){b=C(b);k=!CB(b)&&e>=f?A3S:A3R;break a;}h=Bl(c);g=C(g);j=g.data;l=j.length;m=B1(h,l);n=new Tl;n.p4=b;n.rs=c;k=AEX(a,d,e,f,g,0,m,n);e=n.so;if(k===null&&0==n.jM)k=A3S;o=n.jM;p=0;if(c.iN){b=new Dj;Y(b);J(b);}if(Bl(c)<o)break;if(p>l){d=g.data;b
=new Bg;h=d.length;c=new N;Q(c);Be(C(V(C(L(C(V(C(L(c,D(491))),p)),D(164))),h)),41);S(b,O(c));J(b);}h=p+o|0;if(h>l){b=new Bg;c=new N;Q(c);V(C(L(C(V(C(L(c,D(493))),h)),D(488))),l);S(b,O(c));J(b);}if(o<0){b=new Bg;c=new N;Q(c);L(C(V(C(L(c,D(489))),o)),D(490));S(b,O(c));J(b);}h=c.f;i=0;while(i<o){l=h+1|0;m=p+1|0;Lc(c,h,j[B(p,j)]);i=i+1|0;h=l;p=m;}c.f=c.f+o|0;if(k!==null)break a;}b=new E4;Y(b);J(b);}b=C(b);BT(b,b.f-(f-e|0)|0);return k;}
var R6=F(KP);
function AEX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)]&255;if(!(l&128)){m=f+1|0;c=l&65535;e=C(e);k=e.data;k[B(f,k)]=c;}else if((l&224)==192){if(j>=d){c=j+(-1)|0;h=C(h);if(KR(h,2))break a;i=A3S;break a;}n=j+1|0;j=k[B(j,k)];if(!F7(a,j)){c=n+(-2)|0;i=Cq(1);break a;}m=f+1|0;c=((l&31)<<6|j&63)&65535;e=C(e);k=e.data;k[B(f,k)]=c;j=n;}else if((l&240)==224){if((j+2|0)>d){c=j+(-1)|0;h=C(h);if(KR(h,3))break a;i=A3S;break a;}n=j+1|0;o=k[B(j,k)];j
=n+1|0;m=k[B(n,k)];if(!F7(a,o))break b;if(!F7(a,m))break b;p=((l&15)<<12|(o&63)<<6|m&63)&65535;if(HH(p)){c=j+(-3)|0;i=Cq(3);break a;}m=f+1|0;e=C(e);k=e.data;k[B(f,k)]=p;}else{if((l&248)!=240){c=j+(-1)|0;i=Cq(1);break a;}if((j+3|0)>d){c=j+(-1)|0;h=C(h);if(KR(h,4))break a;i=A3S;break a;}if((f+2|0)>g){c=j+(-1)|0;h=C(h);if(Bl(C(h.rs))<2?0:1)break a;i=A3R;break a;}c=j+1|0;o=k[B(j,k)];n=c+1|0;m=k[B(c,k)];j=n+1|0;n=k[B(n,k)];if(!F7(a,o))break c;if(!F7(a,m))break c;if(!F7(a,n))break c;q=(l&7)<<18|(o&63)<<12|(m&63)<<
6|n&63;o=f+1|0;n=GY(q);e=C(e);k=e.data;k[B(f,k)]=n;m=o+1|0;k[B(o,k)]=HC(q);}c=j;f=m;}break a;}c=j+(-3)|0;i=Cq(1);break a;}c=j+(-3)|0;i=Cq(1);}h=C(h);h.so=c;h.jM=f;return i;}
function F7(a,b){return (b&192)!=128?0:1;}
function NF(){var a=this;FX.call(a);a.pi=null;a.kh=null;}
function I8(){FX.call(this);this.fH=null;}
var A4P=0;function AVc(){AVc=T(I8);AKJ();}
function A4Q(a){var b=new I8();JU(b,a);return b;}
function JU(a,b){AVc();a.fH=b;}
function Ut(a,b){var c,d,e,f,$$je;c=a.fH;d=C(b);e=d.bj;b=new N;Q(b);L(C(L(b,D(567))),e);f=O(b);c=C(c).h3(f);a:{try{b=Ph(ZO(c));}catch($$e){$$je=Bj($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}return b;}b=a.fH;e=d.bj;c=new N;Q(c);L(C(L(c,D(567))),e);c=O(c);C(b).sN(c);J(f);}
function AKJ(){A4P=X(D(567));}
var LB=F(0);
function Qq(){var a=this;E.call(a);a.j9=null;a.jG=null;}
function AI_(a,b){var c,d,e;c=a.j9;d=a.jG;e=new N;Q(e);L(C(L(e,d)),b);d=O(e);return $rt_str(c.getItem($rt_ustr(d)));}
function APe(a,b){var c,d,e;c=a.j9;d=a.jG;e=new N;Q(e);L(C(L(e,d)),b);d=O(e);c.removeItem($rt_ustr(d));}
function R8(){var a=this;E.call(a);a.pu=null;a.mi=null;}
function APt(a,b){return W(DC(C(a.mi),b),BB);}
function ARk(a,b){var c,d,e,f,g,h,i,j;H$(C(a.pu),b,0);c=C(a.mi);d=Iq(c,b);if(d>=0){e=c.cT;f=C(c.cx).data;g=c.ge;h=(d+1|0)&g;while(true){e=C(e);i=e.data;j=B(h,i);b=i[j];if(b===null)break;h=J$(c,b);if(((j-h|0)&g)>((d-h|0)&g)){h=B(d,i);i[h]=b;d=AWr(j,f);f[AWr(h,f)]=f[d];}h=(j+1|0)&g;}b=null;d=B(d,i);i[d]=b;f[AWr(d,f)]=null;c.dN=c.dN-1|0;}}
var AAV=F();
var ACa=F(E7);
function AJt(a){var b=new ACa();ANM(b,a);return b;}
function ANM(a,b){a.h$=1;a.iQ=1;a.fK=b;}
var He=F();
function ARJ(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.nS();if(f<0){if(!e)e=(-1);return e;}g=c+1|0;f=f<<24>>24;b=C(b);h=b.data;h[B(c,h)]=f;e=e+1|0;c=g;}if(d<=0)d=(-1);return d;}
function ALp(a){}
function ADu(){var a=this;He.call(a);a.kj=null;a.eD=0;a.vI=0;a.j0=0;}
function Ph(a){var b=new ADu();AHQ(b,a);return b;}
function AHQ(a,b){var c,d;c=C(b);d=c.data.length;a.kj=c;a.eD=0;a.vI=0;a.j0=0+d|0;}
function AIW(a){var b,c,d;b=a.eD;if(b>=a.j0)c=(-1);else{d=a.kj;a.eD=b+1|0;d=C(d).data;c=d[B(b,d)]&255;}return c;}
function ASY(a,b,c,d){var e,f,g,h;e=B1(d,a.j0-a.eD|0);f=0;while(f<e){d=c+1|0;g=a.kj;h=a.eD;a.eD=h+1|0;g=C(g).data;h=g[B(h,g)];b=C(b);g=b.data;g[B(c,g)]=h;f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function ALA(a){}
var PR=F(Fg);
function NS(){var a=this;E.call(a);a.i6=null;a.kI=null;a.eJ=0;a.eU=0;}
function Jg(a,b){return Bl(C(a.i6))<b?0:1;}
function Fj(a,b){return Bl(C(a.kI))<b?0:1;}
var L6=F();
var A4R=null;var A4S=null;function ZO(b){var c,d,e,f,g,h;b=C(b);c=CE(X(b)/2|0);d=0;while(true){e=c.data;if(d>=e.length)break;f=d*2|0;g=R(b,f);f=R(b,f+1|0);h=C(A4S).data;g=((h[B(g,h)]<<4)+h[B(f,h)]|0)<<24>>24;d=B$(d);e[d]=g;d=d+1|0;}return c;}
function ACV(){var b,c,d,e,f,g,h;b=BS(16);c=b.data;c[AWr(0,c)]=48;c[AWr(1,c)]=49;c[AWr(2,c)]=50;c[AWr(3,c)]=51;c[AWr(4,c)]=52;c[AWr(5,c)]=53;c[AWr(6,c)]=54;c[AWr(7,c)]=55;c[AWr(8,c)]=56;c[AWr(9,c)]=57;c[AWr(10,c)]=65;c[AWr(11,c)]=66;c[AWr(12,c)]=67;c[AWr(13,c)]=68;c[AWr(14,c)]=69;c[AWr(15,c)]=70;A4R=b;b=Bk(128);d=b.data;A4S=b;e=0;f=c.length;while(e<f){g=B(e,c);d[B(c[g],d)]=g;h=AWr(g,c);if(c[h]>=65){h=AWr(h,c);d[B((c[h]-65|0)+97|0,d)]=h;}e=h+1|0;}}
function Vb(){var a=this;He.call(a);a.kU=0;a.lK=null;}
function ANq(a){var b,c;if(a.kU==C(a.lK).b3.length)return (-1);b=a.lK;c=a.kU;a.kU=c+1|0;return C(b).b3[c]&255;}
function Lh(){var a=this;E.call(a);a.lN=0;a.ku=0;a.fU=0;a.o7=Cs;a.kE=null;a.oz=null;a.rP=Cs;a.oi=null;}
var UE=F();
var A1O=null;function AUY(){AUY=T(UE);AQH();}
function AQH(){var b,c,d,e,f,g,h;A1O=AAH();b=K(Dk,6).data;AUp();c=A4T;b[AWr(0,b)]=c;c=A4U;b[AWr(1,b)]=c;c=A4V;b[AWr(2,b)]=c;c=A4W;b[AWr(3,b)]=c;c=A4X;b[AWr(4,b)]=c;c=A4Y;b[AWr(5,b)]=c;d=b.length;e=0;while(e<d){f=B$(e);c=b[f];g=A1O;c=C(c);h=c.i0;Lt(C(g),h,c);e=f+1|0;}}
function QI(){Bh.call(this);this.v5=null;}
var Fm=F();
var A4T=null;var A4U=null;var A4V=null;var A4W=null;var A4X=null;var A4Y=null;function AUp(){AUp=T(Fm);AN$();}
function AN$(){var b;PZ();A4T=A3x;b=new Q5;H7(b,D(621),K(BB,0));A4U=b;b=new PP;H7(b,D(622),K(BB,0));A4V=b;A4W=AAp(D(623),1,0);A4X=AAp(D(624),0,0);A4Y=AAp(D(625),0,1);}
var Q5=F(Dk);
function AF3(a){var b;b=new SP;H8(b,a,1.0,1.0);return b;}
var PP=F(Dk);
function AQW(a){var b;b=new T_;H8(b,a,1.0,1.0);return b;}
function AAC(){var a=this;Dk.call(a);a.qO=0;a.nd=0;}
function AAp(a,b,c){var d=new AAC();AHF(d,a,b,c);return d;}
function AHF(a,b,c,d){H7(a,b,K(BB,0));a.qO=c;a.nd=d;}
function AGF(a){var b,c,d;b=new Pe;c=a.qO;d=a.nd;H8(b,a,2.0,4.0);b.kv=c;b.k6=d;return b;}
function P6(){var a=this;CS.call(a);a.gQ=null;a.zb=null;}
function Tl(){var a=this;E.call(a);a.p4=null;a.rs=null;a.so=0;a.jM=0;}
function KR(a,b){return Bl(C(a.p4))<b?0:1;}
var Gb=F(Fg);
var UO=F(E7);
function P4(){var a=this;CS.call(a);a.iC=null;a.rt=null;a.ps=null;a.qm=null;}
function N1(a,b){var c,d;c=C(a.iC).gQ;d=AWI(b);C(c).o7=d;}
function Jt(a,b){b=C(C(a.iC).gQ);b.ku=1;b.fU=0;}
function Li(a,b,c){var d,e;b=a.qm;d=a.rt;e=a.ps;Na(C(b),d,e,c);b=C(C(a.iC).gQ);b.lN=1;b.fU=0;return 0;}
var Lz=F(D9);
var Jq=F(D9);
var NA=F(D9);
function ABk(){var a=this;E.call(a);a.n7=0;a.yJ=0;a.q3=null;}
function AU7(a,b){var c=new ABk();AJI(c,a,b);return c;}
function AJI(a,b,c){a.q3=b;a.yJ=c;a.n7=c;}
function AM5(a){return G2(C(a.q3),a.n7);}
var SP=F(D$);
function ALf(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g){j=c;break a;}j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(Ce(l)){if(j>=d){h=C(h);if(!Jg(h,2)){i=A3S;break a;}j=j+(-1)|0;break a;}j=B(j,k);if(!Cc(k[j])){i=Cq(1);break a;}j=j+(-1)|0;i=Ij(2);break a;}if(Cc(l))i=Cq(1);if(l>=128){i=Ij(1);j=j+(-1)|0;break a;}m=f+1|0;c=l<<24>>24;e=C(e);k=e.data;k[B(f,k)]=c;c=j;f=m;}j=c;}h=C(h);h.eJ=j;h.eU=f;return i;}
var T_=F(D$);
function AQx(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g){j=c;break a;}j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(Ce(l)){if(j==d){h=C(h);if(!Jg(h,2)){i=A3S;break a;}j=j+(-1)|0;break a;}j=B(j,k);if(!Cc(k[j])){i=Cq(1);break a;}j=j+(-1)|0;i=Ij(2);break a;}if(Cc(l))i=Cq(1);if(l>=256){j=j+(-1)|0;i=Ij(1);break a;}m=f+1|0;c=l<<24>>24;e=C(e);k=e.data;k[B(f,k)]=c;c=j;f=m;}j=c;}h=C(h);h.eJ=j;h.eU=f;return i;}
function Pe(){var a=this;D$.call(a);a.kv=0;a.k6=0;}
function AQc(a,b,c,d,e,f,g,h){var i,j,k;if(a.kv){if((f+2|0)>g)return !CB(C(C(h).kI))?A3R:null;a.kv=0;if(!a.k6){i=f+1|0;e=C(e);j=e.data;j[B(f,j)]=(-2);f=i+1|0;j[B(i,j)]=(-1);}else{k=f+1|0;e=C(e);j=e.data;j[B(f,j)]=(-1);f=k+1|0;j[B(k,j)]=(-2);}}return !a.k6?WX(a,b,c,d,e,f,g,h):WJ(a,b,c,d,e,f,g,h);}
function WJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(!Ce(l)){if(Cc(l)){c=j+(-1)|0;i=Cq(1);break a;}if((f+2|0)>g){c=j+(-1)|0;h=C(h);if(Fj(h,2))break a;i=A3R;break a;}m=f+1|0;n=(l&255)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=n;f=m+1|0;k[B(m,k)]=l>>8<<24>>24;c=j;}else{if(j==d){c=j+(-1)|0;h=C(h);if(Jg(h,2))break a;i=A3S;break a;}c=j+1|0;m=k[B(j,k)];if(!Cc(m)){c=c+(-2)|0;i=Cq(1);break a;}if((f+4|0)>g){c=c+(-2)|0;h=C(h);if(Fj(h,4))break a;i=A3R;break a;}n
=f+1|0;j=(l&255)<<24>>24;e=C(e);k=e.data;k[B(f,k)]=j;f=n+1|0;k[B(n,k)]=l>>8<<24>>24;j=f+1|0;k[B(f,k)]=(m&255)<<24>>24;f=j+1|0;k[B(j,k)]=m>>8<<24>>24;}}}h=C(h);h.eJ=c;h.eU=f;return i;}
function WX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=c+1|0;b=C(b);k=b.data;l=k[B(c,k)];if(!Ce(l)){if(Cc(l)){c=j+(-1)|0;i=Cq(1);break a;}if((f+2|0)>g){c=j+(-1)|0;h=C(h);if(Fj(h,2))break a;i=A3R;break a;}m=f+1|0;n=l>>8<<24>>24;e=C(e);k=e.data;k[B(f,k)]=n;f=m+1|0;k[B(m,k)]=(l&255)<<24>>24;c=j;}else{if(j==d){c=j+(-1)|0;h=C(h);if(Jg(h,2))break a;i=A3S;break a;}c=j+1|0;m=k[B(j,k)];if(!Cc(m)){c=c+(-2)|0;i=Cq(1);break a;}if((f+4|0)>g){c=c+(-2)|0;h=C(h);if(Fj(h,4))break a;i=A3R;break a;}n
=f+1|0;j=l>>8<<24>>24;e=C(e);k=e.data;k[B(f,k)]=j;f=n+1|0;k[B(n,k)]=(l&255)<<24>>24;j=f+1|0;k[B(f,k)]=m>>8<<24>>24;f=j+1|0;k[B(j,k)]=(m&255)<<24>>24;}}}h=C(h);h.eJ=c;h.eU=f;return i;}
var Nk=F();
var A3e=null;function AVT(){AVT=T(Nk);AM_();}
function AM_(){var b,c;b=Bk(C(OO()).data.length);c=b.data;A3e=b;c[B(C(A2V).r,c)]=1;c[B(C(A2S).r,c)]=2;c[B(C(A2U).r,c)]=3;c[B(C(A2T).r,c)]=4;c[B(C(A3f).r,c)]=5;}
var YN=F();
function Iy(){E.call(this);this.sg=0;}
var A4Z=null;var A40=null;var A41=null;function APp(a){var b=new Iy();ACt(b,a);return b;}
function ACt(a,b){a.sg=b;}
function ALb(a){return a.sg;}
function WZ(){A4Z=APp(1);A40=APp(0);A41=H($rt_booleancls());}
function Q7(){var a=this;E.call(a);a.b8=null;a.bC=0;}
var A42=null;function ASZ(a){var b=new Q7();XS(b,a);return b;}
function XS(a,b){var c;if(b>=0){a.b8=BS(b);return;}c=new ME;Y(c);J(c);}
function Kh(a,b){var c,d,e,f;c=a.b8;d=C(c).data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=BS(e);Cg(c,0,f,0,a.bC);a.b8=f;}
function TQ(a){var b,c,d;b=a.bC+4|0;if(b>C(a.b8).data.length)Kh(a,b);c=a.b8;d=a.bC;b=d+1|0;a.bC=b;c=C(c).data;c[B(d,c)]=110;d=b+1|0;a.bC=d;c[B(b,c)]=117;b=d+1|0;a.bC=b;c[B(d,c)]=108;a.bC=b+1|0;c[B(b,c)]=108;}
function Cx(a,b){var c,d,e;c=a.bC;if(c==C(a.b8).data.length)Kh(a,c+1|0);d=a.b8;e=a.bC;a.bC=e+1|0;d=C(d).data;d[B(e,d)]=b;}
function H1(a,b){var c,d,e,f,g,h;if(b===null){TQ(a);return;}c=X(b);d=a.bC+c|0;if(d>C(a.b8).data.length)Kh(a,d);e=a.b8;f=a.bC;if(0<=c&&c<=X(b)&&f>=0){c=c-0|0;g=f+c|0;h=C(e);if(g<=h.data.length){Cg(b.w,0,h,f,c);a.bC=d;return;}}b=new Bg;Y(b);J(b);}
function Ns(a){var b;b=a.bC;if(!b)return D(1);return H6(a.b8,0,b);}
function Tx(a,b){return Ws(a,b,0,48);}
function Ws(a,b,c,d){var e,f,g,h;if(b==(-2147483648)){H1(a,D(626));return a;}if(b<0){Cx(a,45);b= -b|0;}a:{if(c>1){e=b>=0?1:2;f=b;while(true){f=f/10|0;if(!f)break;e=e+1|0;}g=c-e|0;while(true){if(g<=0)break a;Cx(a,d);g=g+(-1)|0;}}}if(b>=10000){if(b>=1000000000){h=A42;c=E1(Th(V2(Bc(b),G(1410065408, 2)),Bc(1000000000)));h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=100000000){h=A42;c=(b%1000000000|0)/100000000|0;h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=10000000){h=A42;c=(b%100000000|0)/10000000|0;h=C(h).data;Cx(a,h[B(c,h)]);}if
(b>=1000000){h=A42;c=(b%10000000|0)/1000000|0;h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=100000){h=A42;c=(b%1000000|0)/100000|0;h=C(h).data;Cx(a,h[B(c,h)]);}h=A42;c=(b%100000|0)/10000|0;h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=1000){h=A42;c=(b%10000|0)/1000|0;h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=100){h=A42;c=(b%1000|0)/100|0;h=C(h).data;Cx(a,h[B(c,h)]);}if(b>=10){h=A42;c=(b%100|0)/10|0;h=C(h).data;Cx(a,h[B(c,h)]);}h=A42;b=b%10|0;h=C(h).data;Cx(a,h[B(b,h)]);return a;}
function RE(a,b){if(b===null)TQ(a);else H1(a,b.F());return a;}
function ABz(){var b,c;b=BS(10);c=b.data;c[AWr(0,c)]=48;c[AWr(1,c)]=49;c[AWr(2,c)]=50;c[AWr(3,c)]=51;c[AWr(4,c)]=52;c[AWr(5,c)]=53;c[AWr(6,c)]=54;c[AWr(7,c)]=55;c[AWr(8,c)]=56;c[AWr(9,c)]=57;A42=b;}
var T8=F();
var A0o=null;function AKu(){AKu=T(T8);AF9();}
function AE$(){var b,c,d;AKu();b=C(A0o);if(b.dN){b.dN=0;AFz(b.cT,null);AFz(b.cx,null);}c=A0o;J5();d=A0y;Bt(C(c),D(627),d);b=A0o;c=A0w;Bt(C(b),D(628),c);b=A0o;c=A0s;Bt(C(b),D(629),c);b=A0o;c=A0t;Bt(C(b),D(630),c);b=A0o;c=A0u;Bt(C(b),D(631),c);b=A0o;c=A0v;Bt(C(b),D(632),c);b=A0o;c=A0z;Bt(C(b),D(633),c);b=A0o;c=A0A;Bt(C(b),D(634),c);b=A0o;c=A0B;Bt(C(b),D(635),c);b=A0o;c=A0C;Bt(C(b),D(636),c);b=A0o;c=A0D;Bt(C(b),D(637),c);b=A0o;c=A0E;Bt(C(b),D(638),c);b=A0o;c=A0F;Bt(C(b),D(639),c);b=A0o;c=A0G;Bt(C(b),D(640),c);b
=A0o;c=A0H;Bt(C(b),D(641),c);b=A0o;c=A0I;Bt(C(b),D(642),c);b=A0o;c=A0J;Bt(C(b),D(643),c);b=A0o;c=A0K;Bt(C(b),D(644),c);b=A0o;c=A0L;Bt(C(b),D(645),c);b=A0o;c=A0M;Bt(C(b),D(646),c);b=A0o;c=A0N;Bt(C(b),D(647),c);b=A0o;c=A0O;Bt(C(b),D(648),c);b=A0o;c=A0P;Bt(C(b),D(649),c);b=A0o;c=A0Q;Bt(C(b),D(650),c);b=A0o;c=A0R;Bt(C(b),D(651),c);b=A0o;c=A0S;Bt(C(b),D(652),c);b=A0o;c=A0T;Bt(C(b),D(653),c);b=A0o;c=A0U;Bt(C(b),D(654),c);b=A0o;c=A0V;Bt(C(b),D(655),c);b=A0o;c=A0W;Bt(C(b),D(656),c);b=A0o;c=A0X;Bt(C(b),D(657),c);b=A0o;c
=A0Y;Bt(C(b),D(658),c);b=A0o;c=A0Z;Bt(C(b),D(659),c);b=A0o;c=A00;Bt(C(b),D(660),c);}
function AF9(){A0o=EA();AE$();}
var PX=F(Bu);
var U0=F(Bu);
function Tr(){Gb.call(this);this.sd=0;}
function AKn(a){var b,c;b=a.sd;c=new N;Q(c);V(C(L(c,D(661))),b);return O(c);}
function PV(){Gb.call(this);this.rU=0;}
function AJF(a){var b,c;b=a.rU;c=new N;Q(c);V(C(L(c,D(662))),b);return O(c);}
function Nh(){var a=this;Ds.call(a);a.gi=0;a.dy=null;a.ev=null;a.dG=null;}
function AIs(a){var b,c,d,e;b=new $rt_globals.XMLHttpRequest();c=new NV;c.cK=a;c.d7=b;c=BR(c,"handleEvent");b.onreadystatechange=c;Mu(C(a.dG),b,a.ev);d=a.dy;e=a.gi;b.open("GET",$rt_ustr(d),!!e);if(a.gi){c="arraybuffer";b.responseType=c;}b.send();}
function Ng(){var a=this;CS.call(a);a.hQ=null;a.x3=null;}
function AIv(a,b){N1(C(a.hQ),b);}
function ANQ(a,b){Jt(C(a.hQ),b);}
function AHj(a,b,c){return Li(C(a.hQ),b,null);}
function Ni(){var a=this;CS.call(a);a.fa=null;a.oX=null;a.sh=null;a.gH=null;}
function AKR(a,b){N1(C(a.fa),b);}
function AGy(a,b){Jt(C(a.fa),b);}
function ALd(a,b,c){var d,e;d=$rt_globals.window.document.createElement("img");e=a.oX;if(e!==null)d.setAttribute("crossOrigin",$rt_ustr(e));IF(C(a.gH));e=new Ps;e.ie=a;e.mJ=b;e.ro=c;e.nD=d;d.addEventListener("load",BR(e,"handleEvent"),!!0);d.addEventListener("error",BR(e,"handleEvent"),!!0);if(!C(a.gH).sD){b=$rt_ustr(b);d.src=b;}else{b=a.sh;c=AC1(C(c));e=new N;Q(e);L(C(L(C(L(C(L(e,D(663))),b)),D(664))),c);b=$rt_ustr(O(e));d.src=b;}return 0;}
function NV(){var a=this;E.call(a);a.d7=null;a.cK=null;}
function AAT(a,b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.d7.readyState==4){if(a.d7.status!=200){if(a.d7.status!=404&&a.d7.status!=403){try{c=Bc(100);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}d=C(a.cK);Gs(C(d.dG),d.gi,d.dy,d.ev);}else{e=C(a.cK);C(e.ev).e6(e.dy);}}else{if(C(C(a.cK).dG).dn){b=EX();e=C(a.cK).dy;d=new N;Q(d);L(C(L(d,D(580))),
e);D2(C(b),O(d));}f=a.d7.response;g=new $rt_globals.Int8Array(f);b=C(a.cK);C(b.ev).fh(b.dy,Y9(f,g));}Fk(C(C(a.cK).dG));}return;case 1:a:{try{X2(c);if(Ik()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof CP){}else{throw $$e;}}}d=C(a.cK);b=d.dG;h=d.gi;e=d.dy;d=d.ev;Gs(C(b),h,e,d);Fk(C(C(a.cK).dG));return;default:AGm();}}TF().s(a,b,c,d,e,f,g,h,$p);}
function AE5(a,b){var $p,$z;$p=0;if(ALj()){var $T=TF();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAT(a,b);if(Ik()){break _;}return;default:AGm();}}TF().s(a,b,$p);}
function Ps(){var a=this;E.call(a);a.mJ=null;a.ro=null;a.nD=null;a.ie=null;}
function AKj(a,b){if(Bn(C($rt_str(b.type)),D(665)))Jt(C(C(a.ie).fa),a.mJ);else{b=a.ro;C(b).lU=a.nD;Li(C(C(a.ie).fa),a.mJ,b);}Fk(C(C(a.ie).gH));}
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",5,"preloader",5,"webaudio",0,"badlogic",8,"gdx",9,"utils",10,"reflect",9,"scenes",12,"scene2d",13,"ui",9,"graphics",15,"glutils",15,"g2d",-1,"java",18,"util",19,"regex",18,"nio",21,"charset",18,"io",18,"lang",24,"reflect",-1,"org",26,"teavm",27,"classlib",28,"impl",29,"unicode"]);
$rt_metadata([E,"Object",24,0,[],0,3,0,0,["cE",AWs(AJp),"ca",AWt(AA0),"F",AWs(OE)],V3,0,E,[],4,3,0,0,0,Fx,0,E,[],0,3,0,AWR,0,MS,0,E,[],3,3,0,0,0,Lm,0,E,[MS],0,3,0,0,0,CH,0,E,[],3,3,0,0,0,ADZ,0,Lm,[CH],0,3,0,0,0,Dy,0,E,[],3,3,0,0,0,E_,0,E,[Dy],0,3,0,0,0,CC,0,E,[],3,3,0,0,0,BG,0,E,[],3,3,0,0,0,Bo,0,E,[CC,BG],1,3,0,0,["F",AWs(Ql)],FH,0,Bo,[],12,3,0,AUx,0,Fi,0,E,[],0,3,0,0,0,Lq,0,E,[],3,3,0,0,0,Io,0,Fi,[Lq],0,3,0,0,0,FO,0,E,[],3,3,0,0,0,Dg,0,E,[],3,3,0,0,0,Gg,0,E,[FO,Dg],0,3,0,0,0,F3,0,E,[],3,3,0,0,0,BD,0,E,[F3],
0,3,0,0,0,GC,0,BD,[],0,3,0,0,0,ACd,0,GC,[],0,0,0,0,0,Ht,0,Bo,[],12,3,0,ASj,0,L8,0,E,[],3,3,0,0,0,Iu,0,E,[L8],3,3,0,0,0,Fe,0,E,[],3,3,0,0,0,CW,0,E,[Fe],1,3,0,0,0,ADI,0,CW,[],0,0,0,0,0,LV,0,Gg,[],0,3,0,0,0,Ha,0,E,[F3],0,3,0,0,0,X5,0,E,[],1,3,0,0,0,VZ,0,E,[],0,3,0,0,0,U$,0,E,[],3,3,0,0,0,KL,0,E,[U$],0,3,0,0,0,ABY,0,KL,[],0,0,0,0,0,ZR,0,E_,[],0,3,0,0,0,Qr,0,E,[],32,0,0,AW4,0,AAZ,0,E,[],1,3,0,0,0,Sq,0,E,[],32,0,0,AW6,0,ADH,0,CW,[],0,0,0,0,0,ER,0,E,[L8],0,3,0,0,0,Sk,0,ER,[Iu],0,3,0,0,0,Gc,0,E,[],4,3,0,AXd,0,K0,0,
E,[F3],1,3,0,0,0,U1,0,GC,[],0,3,0,0,0,P2,0,E,[],0,3,0,0,0,I9,0,E,[],0,3,0,AXj,0,L0,0,E,[F3],1,3,0,0,0,Ib,0,ER,[Iu],0,3,0,0,0]);
$rt_metadata([U2,0,ER,[Iu],0,3,0,0,0,Db,0,BD,[],0,3,0,0,0,UQ,0,Ib,[],0,3,0,0,0,Xu,0,E_,[],0,3,0,0,0,JR,0,E,[],3,3,0,0,0,AAK,0,E_,[],0,3,0,0,0,Zf,0,E,[Dy],4,3,0,0,0,MH,0,E,[],32,0,0,AXm,0,CU,0,Bo,[],12,3,0,ANT,0,BX,0,E,[Dy],1,3,0,0,0,Em,0,BX,[],1,3,0,0,0,ZD,0,Em,[],0,3,0,0,0,ABO,0,Em,[],0,3,0,0,0,Cj,0,BX,[],1,3,0,0,0,Ee,0,Cj,[],1,3,0,0,0,V9,0,Ee,[],0,3,0,0,0,W6,0,E,[F3],0,0,0,0,0,Mq,0,BX,[],0,3,0,0,0,Xz,0,Mq,[],0,3,0,0,0,YB,0,BX,[],0,3,0,0,0,AAE,0,BX,[],0,3,0,0,0,ACO,0,BX,[],0,3,0,0,0,ADc,0,E,[],0,3,0,0,0,KV,
0,BX,[],1,3,0,0,0,AAr,0,KV,[],0,3,0,0,0,XO,0,Cj,[],0,3,0,0,0,ADC,0,Cj,[],0,3,0,0,0,AD0,0,Ee,[],0,3,0,0,0,AB9,0,BX,[],0,3,0,0,0,ACi,0,Ee,[],0,3,0,0,0,AEL,0,Cj,[],0,3,0,0,0,AEr,0,Cj,[],0,3,0,0,0,YV,0,BX,[],0,3,0,0,0,AAe,0,Cj,[],0,3,0,0,0,AAj,0,BX,[],0,3,0,0,0,Y5,0,BX,[],0,3,0,0,0,AAs,0,Em,[],0,3,0,0,0,Wx,0,Cj,[],0,3,0,0,0,AEM,0,BX,[],0,3,0,0,0,ABV,0,Ee,[],0,3,0,0,0,YZ,0,Em,[],0,3,0,0,0,ABy,0,BX,[],0,3,0,0,0,W7,0,Cj,[],0,3,0,0,0,ZW,0,Cj,[],0,3,0,0,0,OY,0,E,[CH],0,3,0,0,0,Cp,0,Io,[JR],0,3,0,0,0,CD,0,Cp,[],0,3,0,
AXE,0,Fv,0,CD,[FO],0,3,0,0,0,KD,0,Fv,[],0,3,0,0,0,XL,0,KD,[],0,3,0,0,0]);
$rt_metadata([ADE,0,BD,[],0,0,0,0,0,LA,0,Cp,[],0,3,0,0,0,Q8,0,E,[],3,3,0,0,0,Ea,0,E,[Q8],1,3,0,0,0,YP,0,Ea,[],0,0,0,0,0,CI,0,Fi,[JR],0,3,0,0,0,WD,0,CI,[],0,3,0,0,0,ADD,0,BD,[],0,0,0,0,0,BA,0,E,[],1,3,0,ATR,0,Sw,0,BA,[],0,0,0,0,0,ABZ,0,BA,[],0,0,0,0,0,JF,0,Db,[],0,3,0,0,0,AAn,0,JF,[],0,3,0,0,0,UT,0,BA,[],0,0,0,0,0,AEC,0,BD,[],0,0,0,0,0,G0,0,CD,[],0,3,0,0,0,AB0,0,BA,[],0,0,0,0,0,FK,0,E,[],3,3,0,0,0,EH,0,E,[BG,FK],0,3,0,0,0,Kg,"Table$DebugRect",14,EH,[],0,3,0,AWh,0,YS,0,Ea,[],0,0,0,0,0,EK,0,CI,[FO],0,3,0,0,0,XW,
0,EK,[],0,3,0,0,0,Z0,0,BD,[],0,0,0,0,0,Py,0,E,[],3,3,0,0,0,ACQ,0,E,[Py],0,3,0,0,0,FS,0,E,[],0,3,0,0,0,F_,0,FS,[],0,3,0,0,0,Tj,0,F_,[],0,3,0,0,0,LR,0,CI,[FO],0,3,0,0,0,Zq,0,LR,[],0,3,0,0,0,AFr,0,LA,[],0,0,0,0,0,JS,0,Cp,[],0,3,0,0,0,AFM,0,Fv,[],0,3,0,0,0,L$,0,CI,[Lq],0,3,0,0,0,UR,0,BA,[],0,0,0,0,0,TO,0,E,[],0,3,0,0,0,Y3,0,E,[Fe],0,0,0,0,0,AAo,0,BD,[],0,0,0,0,0,AA3,0,CW,[],0,0,0,0,0,ZE,0,E,[],0,3,0,0,0,ACD,0,BD,[],0,0,0,0,0,AFf,0,Db,[],0,0,0,0,0,ZY,0,Ha,[],0,0,0,0,0,Ss,0,BA,[],0,0,0,0,0,Sv,0,BA,[],0,0,0,0,0,RS,
0,E,[],3,3,0,0,0,Ji,0,E,[],0,3,0,0,0,NL,0,Ji,[],0,3,0,0,0,YQ,0,Ea,[],0,0,0,0,0]);
$rt_metadata([ADB,0,K0,[],0,0,0,0,0,ADF,0,L0,[],0,0,0,0,0,AED,0,BD,[],0,0,0,0,0,AEF,0,Db,[],0,0,0,0,0,US,0,BA,[],0,0,0,0,0,Dz,0,E,[Dy],0,3,0,AX6,0,QZ,0,F_,[],0,3,0,0,0,Z8,0,BD,[],0,0,0,0,0,WO,0,CW,[],0,0,0,0,0,Sx,0,BA,[],0,0,0,0,0,X7,0,Cp,[],0,3,0,0,0,ZZ,0,BD,[],0,0,0,0,0,Rl,0,E,[],0,3,0,0,0,IG,0,BA,[],0,3,0,0,0,Y4,0,JS,[],0,3,0,0,0,St,0,BA,[],0,0,0,0,0,Rg,0,CI,[FO],0,3,0,0,0,Z5,0,LV,[],0,0,0,0,0,Us,0,E,[],0,3,0,0,0,J0,0,CI,[],0,3,0,AX_,0,Oe,0,E,[],0,3,0,0,0,AB1,0,BA,[],0,0,0,0,0,UU,0,BA,[],0,0,0,0,0,ADh,0,
G0,[],0,3,0,0,0,Su,0,BA,[],0,0,0,0,0,Qs,0,E,[],0,3,0,0,0,AFc,0,E,[],0,3,0,0,0,Ex,0,Bo,[],12,3,0,AV2,0,AFk,0,BA,[],0,0,0,0,0,ZS,0,CW,[],0,0,0,0,0,Cn,0,E,[],1,3,0,0,0,UV,0,Cn,[],0,0,0,0,0,WI,0,E,[RS],0,3,0,0,0,UA,0,E,[],0,3,0,0,0,RA,0,E,[],0,3,0,0,0,Sm,0,E,[],0,3,0,0,0,Ja,0,BD,[],0,3,0,0,0,WN,0,CW,[],0,0,0,0,0,AEG,0,L$,[],0,0,0,0,0,WK,0,E,[],3,3,0,0,0,Z9,0,BD,[],0,0,0,0,0,AFD,0,Cp,[],0,3,0,0,0,ABN,0,Cp,[],0,3,0,0,0,Z6,0,Db,[],0,0,0,0,0,LX,0,E,[],0,3,0,0,0,YO,0,LX,[],0,0,0,0,0,AEu,0,Fi,[CH],0,3,0,0,0,Wj,0,BD,[],
0,0,0,0,0,ADp,0,Fv,[],0,3,0,0,0,ABh,0,BD,[],0,0,0,0,0]);
$rt_metadata([AE6,0,Db,[],0,0,0,0,0,TS,0,FS,[],0,3,0,0,0,ABP,0,Cp,[],0,3,0,0,0,Rp,0,E,[],0,3,0,0,0,QE,0,E,[],0,3,0,0,0,AA6,0,CI,[],0,3,0,0,0,AFh,0,Gg,[],0,0,0,0,0,Wk,0,BD,[],0,0,0,0,0,SV,0,Cp,[],0,3,0,0,0,AFq,0,Ja,[],0,3,0,0,0,Wl,0,CD,[],0,0,0,0,0,YR,0,Ea,[],0,0,0,0,0,VC,0,E,[],1,3,0,0,0,UP,0,E,[],0,3,0,0,0,Dh,0,E,[BG],0,3,0,AYt,0,Z,0,E,[],1,3,0,AVX,0,Ow,0,Z,[],0,3,0,0,0,ZU,0,E,[],0,3,0,0,0,S8,0,Z,[],0,0,0,0,0,AEU,0,E,[],0,3,0,0,0,G7,0,Z,[],0,3,0,0,0,Hj,0,G7,[],0,3,0,0,0,G6,0,G7,[],0,3,0,0,0,IX,0,E,[],3,3,0,
0,0,XB,0,E,[IX],0,3,0,0,0,S_,0,Z,[],0,0,0,0,0,ADP,0,E,[FK],0,3,0,0,0,S7,0,Z,[],0,0,0,0,0,G8,0,Z,[],0,3,0,0,0,S6,0,Z,[],0,0,0,0,0,S5,0,Z,[],0,0,0,0,0,IR,0,E,[],4,3,0,0,0,VY,0,Cn,[],0,0,0,0,0,ID,0,E,[],3,3,0,0,0,BJ,0,E,[BG,ID],0,3,0,0,0,Sc,0,Z,[],0,0,0,0,0,Hw,0,Z,[],0,3,0,0,0,AA4,0,E,[],0,3,0,0,0,Tc,0,Z,[],0,0,0,0,0,Mo,0,Hw,[],0,3,0,0,0,Y1,0,E,[Dy],0,3,0,0,0,FJ,0,Bo,[],12,3,0,AVD,0,Rx,0,E,[],0,3,0,AZl,0,HK,0,Z,[],0,3,0,0,0,QT,0,HK,[],0,3,0,0,0,R$,0,Z,[],0,0,0,0,0,ABt,0,E,[BG],4,3,0,0,0,S4,0,Z,[],0,0,0,0,0,FC,
0,E,[BG,ID],0,3,0,AVq,0,NU,0,G8,[],0,3,0,0,0]);
$rt_metadata([Qy,0,Z,[],0,3,0,0,0,Xv,0,E,[],0,3,0,0,0,AFw,0,E,[FK],0,3,0,0,0,S9,0,Z,[],0,0,0,0,0,UD,0,Z,[],0,3,0,0,0,Sd,0,Z,[],0,0,0,0,0,Qw,0,G8,[],0,3,0,0,0,Jn,0,E,[BG],0,3,0,AZu,0,JN,0,E,[BG],0,3,0,AWm,0,QQ,0,E,[BG],0,3,0,AZx,0,XE,0,E,[BG],0,3,0,0,0,Wc,0,E,[BG],0,3,0,0,0,ACz,0,E,[BG,FK],0,3,0,0,0,Zy,0,E,[IX],0,3,0,0,0,SJ,0,E,[],4,3,0,AOI,0,B3,0,E,[],4,3,0,AZX,0,WS,0,E,[],4,3,0,0,0,P$,0,HK,[],0,3,0,0,0,C_,0,E,[BG],0,3,0,ANe,0,OH,0,E,[],3,3,0,0,0,IJ,0,E,[OH,BG],0,3,0,0,0,R0,0,IJ,[],0,3,0,0,0,Sb,0,Z,[],0,0,0,
0,0,S$,0,Z,[],0,0,0,0,0,I4,0,E,[],0,3,0,A0a,0,Mw,0,E,[BG],0,3,0,AP7,0,VT,0,E,[],0,3,0,0,0,ABL,0,E,[],0,3,0,0,0,DA,0,E,[BG,ID],0,3,0,APd,0,Y2,0,E,[BG,FK],0,3,0,0,0,X_,0,Cn,[],0,0,0,0,0,K8,0,Hw,[],0,3,0,0,0,AB2,0,E,[IX],0,3,0,0,0,W3,0,E,[],0,3,0,0,0,AD2,0,E,[BG],0,3,0,0,0,Uu,0,E,[BG],0,3,0,0,0,Sa,0,Z,[],0,0,0,0,0,AD4,0,E,[],0,3,0,0,0,W5,0,E,[],0,3,0,0,0,ACx,0,E,[],0,3,0,0,0,AD1,0,E,[BG],0,3,0,0,0,ABp,0,E,[],3,3,0,0,0,Y7,0,E,[BG],0,3,0,0,0,Tk,0,E,[],0,0,0,0,0,Gk,"GlyphLayout",17,E,[Dy],0,3,0,Eb,["jW",AWs(AD$),
"F",AWs(AOF)],DW,"TextureRegion",17,E,[],0,3,0,0,0,ABI,0,DW,[],0,3,0,0,0,Qd,"BitmapFont",17,E,[CH],0,3,0,0,0,SL,0,E,[],0,3,0,A0r,0,By,"Color",15,E,[],0,3,0,J5,["ca",AWt(AJX),"cE",AWs(AM4),"F",AWs(AJm)]]);
$rt_metadata([Jo,0,E,[CH],1,3,0,0,0,TE,"Texture",15,Jo,[],0,3,0,0,["F",AWs(AN0)],DQ,"Array",10,E,[Dg],0,3,0,0,["cE",AWs(AHx),"ca",AWt(AMJ),"F",AWs(ARB)],Jm,0,E,[Dg],0,3,0,0,0,Zm,0,Jm,[],0,3,0,0,0,AFb,0,E,[Dg],0,3,0,0,0,L3,0,E,[],4,3,0,0,0,AFj,0,E,[],0,3,0,0,0,AAg,0,E,[],0,3,0,0,0,ABJ,0,E,[],0,3,0,0,0,AAS,0,E,[],0,3,0,0,0,QG,0,E,[],0,3,0,A1j,0,Wh,0,E,[],0,3,0,0,0,AA$,0,E,[],0,3,0,0,0,AAF,0,E,[],0,3,0,0,0,AAX,0,E,[],0,3,0,0,0,ADN,0,E,[],0,3,0,0,0,Y6,0,E,[],0,3,0,0,0,AEx,0,E,[],0,3,0,0,0,Z2,0,E,[],0,3,0,0,0,W9,
0,E,[],0,3,0,0,0,Xx,0,E,[],0,3,0,0,0,HD,0,Bo,[],12,3,0,AVb,0,ABb,0,E,[],0,3,0,0,0,SR,0,E,[],3,3,0,0,0,CV,0,E,[],0,3,0,0,0,Wp,0,CV,[],0,3,0,0,0,Wo,0,CV,[],0,3,0,0,0,AAu,0,CV,[],0,3,0,0,0,X6,0,CV,[],0,3,0,0,0,ACA,0,CV,[],0,3,0,0,0,K2,0,CV,[],0,3,0,0,0,X1,0,K2,[],0,3,0,0,0,GV,0,E,[],3,3,0,0,0,Yv,0,E,[CH,GV],0,3,0,0,0,EP,0,E,[],3,3,0,0,0,ACv,0,E,[EP,GV],0,3,0,0,0,AEv,0,E,[EP],0,3,0,0,0,Xm,0,E,[],0,3,0,0,0,Ef,0,E,[EP],0,3,0,0,0,AB5,0,Ef,[],0,3,0,0,0,GS,0,Ef,[GV,EP],1,3,0,0,0,C9,0,GS,[],1,3,0,A1o,0,ACm,0,E,[],0,3,
0,0,0,ADM,0,C9,[],4,3,0,0,0,AAa,0,C9,[],4,3,0,0,0,UX,0,Ef,[],0,3,0,0,0,Ku,0,Ef,[],0,3,0,0,0,Wf,0,Ku,[],0,3,0,0,0,XZ,0,C9,[],4,3,0,0,0]);
$rt_metadata([Gi,0,GS,[],1,3,0,0,0,AAP,0,Gi,[],4,3,0,0,0,Z$,0,C9,[],4,3,0,0,0,AAY,0,C9,[],4,3,0,0,0,AAO,0,Gi,[],4,3,0,0,0,FL,0,Bo,[],12,3,0,AUB,0,Fr,0,E,[CH,EP,GV],1,3,0,0,0,LQ,0,Fr,[EP],1,3,0,0,0,VI,0,LQ,[EP],0,3,0,0,0,FY,0,Bo,[],12,3,0,AUV,0,Ch,0,Fr,[],1,3,0,0,0,HG,0,Ch,[],1,3,0,0,0,Xi,0,E,[],0,3,0,0,0,Eg,0,Ch,[],1,3,0,A1C,0,D5,0,Eg,[],1,3,0,0,0,Fw,0,D5,[],1,3,0,0,0,Yu,0,Fw,[],0,3,0,0,0,G3,0,Ch,[],1,3,0,0,0,AFy,0,G3,[],0,3,0,0,0,ADK,0,Ch,[],0,3,0,0,0,E3,0,Ch,[],1,3,0,0,0,Wi,0,E3,[],0,3,0,0,0,GB,0,Ch,[],1,
3,0,0,0,Yr,0,D5,[],0,3,0,0,0,Zx,0,D5,[],0,3,0,0,0,J3,0,Ch,[],1,3,0,0,0,AB6,0,J3,[],0,3,0,0,0,W1,0,E3,[],0,3,0,0,0,AAf,0,Fw,[],0,3,0,0,0,AB3,0,Ch,[],0,3,0,0,0,AA2,0,E3,[],0,3,0,0,0,AB8,0,Ch,[],0,3,0,0,0,ACR,0,Eg,[],0,3,0,0,0,Zz,0,Cn,[],0,0,0,0,0,Xc,0,Cn,[],0,0,0,0,0,Xg,0,D5,[],0,3,0,0,0,ACh,0,GB,[],0,3,0,0,0,AES,0,HG,[],0,3,0,0,0,ABw,0,HG,[],0,3,0,0,0,ACJ,0,GB,[],0,3,0,0,0,AAB,0,Fw,[],0,3,0,0,0,AE8,0,G3,[],0,3,0,0,0,Ed,0,Fr,[],1,3,0,0,0,AAQ,0,Ed,[],0,3,0,0,0,E9,0,E,[],1,3,0,0,0,ACs,0,E9,[],0,3,0,0,0,AC5,0,Ed,
[],0,3,0,0,0,ADJ,0,Ed,[],0,3,0,0,0,AEe,0,E9,[],0,3,0,0,0,Yk,0,Ed,[],0,3,0,0,0]);
$rt_metadata([ADO,0,E9,[],0,3,0,0,0,JB,0,E,[],3,3,0,0,0,MQ,0,E,[],3,3,0,0,0,Hv,"Class",24,E,[JB,MQ],0,3,0,0,["F",AWs(AM9)],XA,0,E,[],4,0,0,0,0,Xe,0,E,[],4,3,0,0,0,CP,0,E,[],0,3,0,0,["e7",AWs(AQn)],Cl,0,CP,[],0,3,0,0,0,Bu,"RuntimeException",24,Cl,[],0,3,0,0,0,Z7,"ClassCastException",24,Bu,[],0,3,0,0,0,HI,"CharSequence",24,E,[],3,3,0,0,0,BB,"String",24,E,[BG,CC,HI],0,3,0,IC,["F",AWs(AIh),"ca",AWt(Bn),"cE",AWs(IN)],E7,0,CP,[],0,3,0,0,0,HP,0,E7,[],0,3,0,0,0,Zp,0,HP,[],0,3,0,0,0,D4,0,E,[BG],1,3,0,0,0,D6,0,D4,[CC],
0,3,0,0,0,GI,0,E,[BG,HI],0,0,0,0,["eW",AWt(N5),"F",AWs(O)],GK,0,E,[],3,3,0,0,0,N,0,GI,[GK],0,3,0,0,["lL",AWw(AMw),"kH",AWv(AJM),"F",AWs(Eq),"eW",AWt(AMH),"ms",AWu(ANf),"md",AWu(ATH)],Hy,0,HP,[],0,3,0,0,0,ABX,0,Hy,[],0,3,0,0,0,YX,0,Hy,[],0,3,0,0,0,Bg,"IndexOutOfBoundsException",24,Bu,[],0,3,0,0,0,AEj,0,Bg,[],0,3,0,0,0,EC,"NullPointerException",24,Bu,[],0,3,0,0,0,J7,0,E,[],4,3,0,0,0,IV,0,E,[],4,3,0,0,0,ADa,0,E,[],4,3,0,0,0,AB_,0,E,[],0,3,0,0,0,Qg,0,E,[],0,3,0,Yz,0,Mi,0,D4,[CC],0,3,0,0,0,ADL,0,E,[],0,3,0,0,0,ZB,
0,E,[],4,3,0,0,0,DD,"GlyphLayout$GlyphRun",17,E,[Dy],0,3,0,0,["jW",AWs(AMr),"F",AWs(Wy)],G_,"IntArray",10,E,[],0,3,0,0,["cE",AWs(AM6),"ca",AWt(ASb),"F",AWs(AMR)],Ll,0,E,[],3,3,0,0,0,Ka,0,E,[Ll],1,3,0,0,0,EL,0,E,[],3,3,0,0,0,AAb,0,Ka,[EL,BG],0,3,0,0,0,U8,0,E,[],3,3,0,0,0,TB,0,E,[U8],0,3,0,0,0,ABv,0,E,[],4,3,0,0,0,Jb,"ArrayStoreException",24,Bu,[],0,3,0,0,0,Dd,0,E,[CC],0,3,0,0,0,Bh,"IllegalArgumentException",24,Bu,[],0,3,0,0,0,TH,"CloneNotSupportedException",24,Cl,[],0,3,0,0,0,O1,"ReflectionPool",10,Cn,[],0,3,
0,0,0,W2,0,E,[Dg],0,3,0,0,0,Rd,0,D4,[CC],0,3,0,0,0]);
$rt_metadata([W8,0,E,[],4,3,0,0,0,DB,"ReflectionException",11,Cl,[],0,3,0,0,0,Xk,0,E,[],4,3,0,0,0,JY,0,Bu,[],0,3,0,0,0,D9,0,Cl,[],0,3,0,0,0,GG,"NoSuchMethodException",24,D9,[],0,3,0,0,0,Qn,0,E,[],0,3,0,0,0,O$,0,E,[],3,3,0,0,0,KQ,"TeaApplication",5,E,[O$,Fe],0,3,0,0,["cM",AWs(ZI)],UJ,0,E,[],3,3,0,0,0,Ly,0,E,[UJ],1,3,0,0,0,U9,0,Ly,[],0,3,0,0,0,HJ,"StringIndexOutOfBoundsException",24,Bg,[],0,3,0,0,0,ADd,0,E,[],4,3,0,0,0,MK,0,E,[],3,3,0,0,0,GT,0,E,[MK,EL],0,0,0,0,0,IH,0,GT,[],0,0,0,0,0,KT,0,E,[],0,3,0,0,0,WP,0,
E,[],0,3,0,0,0,LJ,0,E,[JB],0,3,0,0,0,QN,0,E,[],3,3,0,0,0,E8,"Constructor",25,LJ,[QN],0,3,0,0,["F",AWs(AHk)],F8,0,Bo,[],12,3,0,Il,0,Nc,0,E,[],3,3,0,0,0,B0,0,E,[],3,3,0,0,0,QF,0,E,[B0],3,3,0,0,0,R4,0,E,[Nc,QF],0,3,0,ALl,["DR",AWt(APa)],XR,0,E,[],0,3,0,0,0,MF,0,E,[],3,3,0,0,0,NX,0,E,[MF],0,3,0,0,0,Pd,0,E,[],0,3,0,0,0,KA,0,E,[],0,3,0,0,0,SD,0,E,[],3,3,0,0,0,JT,0,E,[SD],0,3,0,SN,0,M6,0,E,[],0,3,0,0,0,CS,0,E,[],0,3,0,0,["fG",AWt(ANF)],Sf,0,E,[],3,3,0,0,0,D0,0,E,[B0],3,3,0,0,0,ABd,0,E,[Sf,D0],0,3,0,0,["bV",AWt(AGV)],Rr,
0,E,[],3,3,0,0,0,AC7,0,E,[Rr],0,3,0,0,0,ACk,0,E,[SR],0,3,0,0,0,SE,0,E,[],3,3,0,0,0,Ze,0,E,[SE],0,3,0,0,0,OD,0,E,[],3,3,0,0,0,ACf,0,E,[OD],0,3,0,0,0,DN,0,E,[],0,3,0,0,0,Ty,0,E,[],3,3,0,0,0,SO,0,E,[Ty],3,3,0,0,0,Yy,0,E,[SO],0,3,0,0,0]);
$rt_metadata([V6,0,E,[D0],0,0,0,0,["bV",AWt(API)],V7,0,E,[D0],0,0,0,0,["bV",AWt(ASI)],AD8,0,E,[],4,3,0,0,0,ME,"NegativeArraySizeException",24,Bu,[],0,3,0,0,0,AAq,0,E,[B0],1,3,0,0,0,Lf,0,E,[],3,3,0,0,0,HN,"TeaGL20",5,E,[Lf],0,3,0,0,["hs",AWu(Qj),"Z",AWu(U3),"iG",AWu(OI),"l8",AWw(P9),"b1",AWw(PU),"fd",AWw(PT),"ma",AWt(TY),"jE",AWw(ON),"k$",AWt(QH),"km",AWs(Vk),"lx",AWt(SH),"ko",AWt(S2),"hL",AWt(R7),"h1",AWt(T1),"gR",AWt(SB),"hC",AWt(RZ),"hn",AWv(O9),"kZ",AWw(QX),"lV",AWw(RL),"kF",AWt(UN),"mK",AWt(Uk),"hm",AWt(MM),
"l$",AWw(NG),"mw",AWw(Q3),"hP",AWu(PK),"g9",AWu(RR),"iR",AWt(Vd),"fc",AWv(RY),"lg",AWt(Q_),"la",AWv(O5),"fI",AWt(P1),"gO",AWu(PY),"iZ",AWt(NW),"jN",AWu(O8),"mL",AWu(ML),"dD",function(b,c,d,e,f,g,h,i,j){Sj(this,b,c,d,e,f,g,h,i,j);},"lQ",AWv(Ry),"eZ",AWv(So),"kz",AWu(SA),"io",AWt(NZ),"l5",function(b,c,d,e,f,g){Rk(this,b,c,d,e,f,g);},"jp",AWw(MZ)],Rq,0,E,[Lf],3,3,0,0,0,Mp,"TeaGL30",5,HN,[Rq],0,3,0,0,["mN",AWt(Y0),"qF",AWu(AAc),"r4",AWw(ABm),"qN",function(b,c,d,e,f){AFu(this,b,c,d,e,f);},"nE",AWu(ABG),"g9",AWu(AAh)],NY,
"TeaGL30Debug",5,Mp,[],0,3,0,0,["mN",AWt(AKe),"qF",AWu(ANj),"r4",AWw(AH0),"qN",function(b,c,d,e,f){ASy(this,b,c,d,e,f);},"nE",AWu(AHh),"iG",AWu(AHV),"ma",AWt(ARa),"jE",AWw(ANg),"h1",AWt(AHe),"gR",AWt(ARC),"hn",AWv(AJH),"kZ",AWw(APj),"kF",AWt(AQh),"fI",AWt(AFR),"jN",AWu(AGD),"dD",function(b,c,d,e,f,g,h,i,j){AND(this,b,c,d,e,f,g,h,i,j);},"lQ",AWv(AJw),"jp",AWw(AKV),"hs",AWu(AMI),"Z",AWu(ASd),"l8",AWw(AKf),"b1",AWw(ANt),"fd",AWw(AR9),"k$",AWt(AOc),"km",AWs(AS_),"lx",AWt(APw),"ko",AWt(AIK),"hL",AWt(AOT),"hC",AWt(AS2),
"lV",AWw(AHA),"mK",AWt(APB),"hm",AWt(ARd),"l$",AWw(ALJ),"mw",AWw(AQ$),"hP",AWu(ANO),"g9",AWu(AKm),"fc",AWv(AIO),"iR",AWt(AGC),"la",AWv(AS9),"lg",AWt(AG6),"gO",AWu(AGE),"iZ",AWt(ASs),"mL",AWu(AGz),"eZ",AWv(AHp),"kz",AWu(AIc),"io",AWt(ATz),"l5",function(b,c,d,e,f,g){AP0(this,b,c,d,e,f,g);}],PO,0,E,[],0,3,0,0,0,D1,0,Bo,[],12,3,0,MT,0,SX,0,E,[B0],3,3,0,0,0,SF,0,E,[SX],0,0,0,0,["FL",AWs(AJz)],UG,"TeaGL20Debug",5,HN,[],0,3,0,0,["iG",AWu(ASN),"ma",AWt(AIV),"jE",AWw(AJu),"h1",AWt(ANs),"gR",AWt(ATe),"hn",AWv(ALP),"kZ",
AWw(ASV),"kF",AWt(AHD),"fI",AWt(AMA),"jN",AWu(AOg),"dD",function(b,c,d,e,f,g,h,i,j){AKo(this,b,c,d,e,f,g,h,i,j);},"lQ",AWv(AJR),"jp",AWw(AS6),"hs",AWu(AGx),"Z",AWu(AFQ),"l8",AWw(AFP),"b1",AWw(AMf),"fd",AWw(AKZ),"k$",AWt(ATl),"km",AWs(AOD),"lx",AWt(ATb),"ko",AWt(AR7),"hL",AWt(AF$),"hC",AWt(AOB),"lV",AWw(AK7),"mK",AWt(ATf),"hm",AWt(ANU),"l$",AWw(AMi),"mw",AWw(AHY),"hP",AWu(ALc),"g9",AWu(AGn),"fc",AWv(AKs),"iR",AWt(AKw),"la",AWv(AGK),"lg",AWt(AP2),"gO",AWu(ARo),"iZ",AWt(AM1),"mL",AWu(ASR),"eZ",AWv(ARj),"kz",AWu(AS$),
"io",AWt(AGL),"l5",function(b,c,d,e,f,g){AID(this,b,c,d,e,f,g);}],LL,0,E,[Dg],0,3,0,0,0,AAw,0,E,[],0,3,0,0,0,TK,0,E,[B0],3,3,0,0,0,RC,0,E,[TK],0,0,0,0,["Ah",AWs(AGu),"CP",AWs(AJi),"Hb",AWs(AGk)],Jh,0,E,[],3,3,0,0,0,Mn,"WebAudioAPIManager",7,E,[Jh],0,3,0,0,0,M8,0,CS,[],0,0,0,0,0,EE,0,E,[B0],3,3,0,0,0,Pj,0,E,[EE],3,3,0,0,0,QL,0,E,[EE],3,3,0,0,0,QB,0,E,[EE],3,3,0,0,0,R_,0,E,[EE],3,3,0,0,0,UZ,0,E,[EE],3,3,0,0,0,Tb,0,E,[EE,Pj,QL,QB,R_,UZ],3,3,0,0,0,OF,0,E,[],3,3,0,0,0,Kc,0,E,[B0],3,3,0,0,0,Wz,0,E,[B0,Tb,OF,Kc],1,
3,0,0,["yW",AWt(AOW),"BH",AWu(AQ0),"Gx",AWu(AQy),"DP",AWv(AOO),"Cq",AWt(ASk),"Cw",AWs(AIF),"A$",AWv(AGj)],KO,0,E,[],1,3,0,0,0,HF,0,KO,[Ll,EL,BG],0,3,0,0,0,LN,0,HF,[],0,3,0,0,0,Zd,0,E,[],0,3,0,0,0,Fh,0,Bo,[],12,3,0,FA,0,C1,0,E,[B0],1,3,0,0,0,X3,0,C1,[],1,3,0,0,0,XF,0,C1,[],1,3,0,0,0,AAi,0,C1,[],1,3,0,0,0,ABE,0,C1,[],1,3,0,0,0,Zv,0,C1,[],1,3,0,0,0,YI,0,E,[D0],0,0,0,0,["bV",AWt(AL4)],YJ,0,E,[D0],0,0,0,0,["bV",AWt(ASW)],YH,0,E,[D0],0,0,0,0,["bV",AWt(APq)],Rh,0,Cn,[],0,3,0,0,0,TP,0,E,[B0],3,3,0,0,0,Nx,0,E,[TP],0,
0,0,0,["AY",AWs(AJ6)],Xy,0,C1,[],1,3,0,0,0]);
$rt_metadata([Qv,0,E,[BG],4,3,0,0,0,DT,0,E,[],4,3,0,GQ,0,KE,0,E,[],3,3,0,0,0,Nn,0,E,[KE],0,0,0,0,0,I5,0,E,[],3,3,0,0,0,Nm,0,E,[I5],0,0,0,0,0,L_,0,E,[],3,3,0,0,0,Rt,0,E,[L_],4,3,0,0,0,BK,"NumberFormatException",24,Bh,[],0,3,0,0,0,Bw,0,E,[],1,0,0,0,["bt",AWv(Ic),"bv",AWw(Ip),"gl",AWs(AIa),"F",AWs(AP_),"B",AWt(ARP),"be",AWt(ARO),"dQ",AWs(ASO),"cH",AWs(Js)],AE0,0,E,[B0],1,3,0,0,0,YK,0,E,[B0],1,3,0,0,0,AFE,0,E,[B0],1,3,0,0,0,Ke,0,E,[B0],3,3,0,0,0,RP,0,E,[Ke],0,3,0,0,["zk",AWt(ARZ)],Zo,0,E,[B0],1,3,0,0,0,RN,0,E,[Ke],
0,3,0,0,["zk",AWt(AG$)],Id,0,GT,[],0,0,0,0,0,CX,"FSet",20,Bw,[],0,0,0,Ms,["a",AWv(AHo),"l",AWs(ALx),"x",AWt(AHW)],G9,0,E,[],0,0,0,0,0,Uy,"PatternSyntaxException",20,Bh,[],0,3,0,0,["e7",AWs(ASJ)],JX,0,E,[Dg],3,3,0,0,0,Ld,0,E,[JX],1,3,0,0,0,Q6,0,E,[JX],3,3,0,0,0,M4,0,E,[Q6],3,3,0,0,0,J1,0,Ld,[M4],1,3,0,0,0,SK,0,E,[],3,3,0,0,0,WU,0,J1,[EL,BG,SK],0,3,0,0,0,Q0,"NonCapFSet",20,CX,[],0,0,0,0,["a",AWv(AGI),"l",AWs(AJj),"x",AWt(AQs)],Vf,"AheadFSet",20,CX,[],0,0,0,0,["a",AWv(AI6),"l",AWs(AL_)],PG,"BehindFSet",20,CX,[],
0,0,0,0,["a",AWv(AH$),"l",AWs(ARI)],Lk,"AtomicFSet",20,CX,[],0,0,0,0,["a",AWv(AGZ),"l",AWs(AQV),"x",AWt(APc)],FZ,"FinalSet",20,CX,[],0,0,0,0,["a",AWv(AR$),"l",AWs(AIo)],BZ,0,Bw,[],1,0,0,0,["a",AWv(ATm),"bh",AWs(ARb),"x",AWt(AL5)],ADT,"EmptySet",20,BZ,[],0,0,0,0,["Q",AWu(AQP),"bt",AWv(AKv),"bv",AWw(AIU),"l",AWs(ALy),"x",AWt(AGU)],BY,"JointSet",20,Bw,[],0,0,0,0,["a",AWv(AK9),"B",AWt(AO8),"l",AWs(AMd),"be",AWt(AM0),"x",AWt(APL),"cH",AWs(AIL)],Jj,"NonCapJointSet",20,BY,[],0,0,0,0,["a",AWv(AOS),"l",AWs(ANb),"x",
AWt(AP4)],DY,"AtomicJointSet",20,Jj,[],0,0,0,0,["a",AWv(AJA),"B",AWt(APR),"l",AWs(AGP)],MV,"PositiveLookAhead",20,DY,[],0,0,0,0,["a",AWv(AO2),"x",AWt(ARV),"l",AWs(ASM)],T7,"NegativeLookAhead",20,DY,[],0,0,0,0,["a",AWv(AHM),"x",AWt(ARm),"l",AWs(AK1)],Qz,"PositiveLookBehind",20,DY,[],0,0,0,0,["a",AWv(AIG),"x",AWt(ATJ),"l",AWs(AOA)],R9,"NegativeLookBehind",20,DY,[],0,0,0,0,["a",AWv(AGd),"x",AWt(AQi),"l",AWs(AH_)],GU,"SingleSet",20,BY,[],0,0,0,0,["a",AWv(AGv),"bt",AWv(ANi),"bv",AWw(AQz),"be",AWt(AMX),"dQ",AWs(AO$),
"cH",AWs(ASS)],Hd,0,E,[],1,0,0,0,0,Ba,0,Hd,[],1,0,0,OG,["bX",AWs(AHP),"dh",AWs(AG5),"hY",AWs(AQ7),"fo",AWs(ASL)],Xn,"CharClass",20,Ba,[],0,0,0,0,["h",AWt(C7),"bX",AWs(C2),"dh",AWs(AKk),"hY",AWs(ARE),"F",AWs(AN_),"fo",AWs(AKA)],JA,"MissingResourceException",19,Bu,[],0,3,0,0,0,DR,0,Bw,[],1,0,0,0,["be",AWt(AQC),"x",AWt(AR5),"cH",AWs(ANJ)],CO,"LeafQuantifierSet",20,DR,[],0,0,0,0,["a",AWv(AGf),"l",AWs(AII)],FB,"CompositeQuantifierSet",20,CO,[],0,0,0,0,["a",AWv(AHr),"l",AWs(AHU)]]);
$rt_metadata([C0,"GroupQuantifierSet",20,DR,[],0,0,0,0,["a",AWv(AGt),"l",AWs(ALM)],ES,"AltQuantifierSet",20,CO,[],0,0,0,0,["a",AWv(ANr),"B",AWt(ATM)],Uj,"UnifiedQuantifierSet",20,CO,[],0,0,0,0,["a",AWv(ATd),"bt",AWv(AN6)],Bf,0,E,[],1,0,0,0,0,Eo,"Quantifier",20,Hd,[EL],0,0,0,0,["F",AWs(R2)],Od,"FSet$PossessiveFSet",20,Bw,[],0,0,0,0,["a",AWv(AMt),"l",AWs(AO0),"x",AWt(AO7)],UI,0,E,[EL,BG],0,3,0,0,0,M0,"LowHighSurrogateRangeSet",20,BY,[],0,0,0,0,["l",AWs(APg)],P3,"CompositeRangeSet",20,BY,[],0,0,0,0,["a",AWv(AHi),
"B",AWt(AOQ),"l",AWs(APu),"x",AWt(AIf),"be",AWt(AHO)],CG,"SupplRangeSet",20,BY,[],0,0,0,0,["a",AWv(AJ$),"l",AWs(ASD),"h",AWt(AKI),"be",AWt(AHb),"B",AWt(AQ2),"x",AWt(AKp)],Jx,"UCISupplRangeSet",20,CG,[],0,0,0,0,["h",AWt(AL6),"l",AWs(AS1)],Xf,"UCIRangeSet",20,BZ,[],0,0,0,0,["Q",AWu(AMu),"l",AWs(AH2)],C$,"RangeSet",20,BZ,[],0,0,0,0,["Q",AWu(MJ),"l",AWs(AMC),"be",AWt(AO9)],J9,"HangulDecomposedCharSet",20,BY,[],0,0,0,0,["B",AWt(ANp),"l",AWs(AQk),"a",AWv(AF2),"be",AWt(AH7),"x",AWt(ARK)],De,"CharSet",20,BZ,[],0,0,
0,0,["bh",AWs(AMe),"Q",AWu(ALk),"bt",AWv(AJ9),"bv",AWw(AMl),"l",AWs(AR1),"be",AWt(ARA)],AEO,"UCICharSet",20,BZ,[],0,0,0,0,["Q",AWu(AFU),"l",AWs(AOP)],VS,"CICharSet",20,BZ,[],0,0,0,0,["Q",AWu(AGq),"l",AWs(ALD)],E2,"DecomposedCharSet",20,BY,[],0,0,0,0,["B",AWt(ASQ),"a",AWv(AOR),"l",AWs(AOE),"be",AWt(AMv),"x",AWt(APU)],U5,"UCIDecomposedCharSet",20,E2,[],0,0,0,0,0,Sy,"CIDecomposedCharSet",20,E2,[],0,0,0,0,0,VA,"PossessiveGroupQuantifierSet",20,C0,[],0,0,0,0,["a",AWv(AJc)],Px,"PosPlusGroupQuantifierSet",20,C0,[],
0,0,0,0,["a",AWv(ANV)],Gd,"AltGroupQuantifierSet",20,C0,[],0,0,0,0,["a",AWv(AQZ),"B",AWt(ASe)],Pf,"PosAltGroupQuantifierSet",20,Gd,[],0,0,0,0,["a",AWv(AMj),"B",AWt(AOh)],FG,"CompositeGroupQuantifierSet",20,C0,[],0,0,0,0,["a",AWv(ATG),"l",AWs(ASi)],Nq,"PosCompositeGroupQuantifierSet",20,FG,[],0,0,0,0,["a",AWv(ALN)],QR,"ReluctantGroupQuantifierSet",20,C0,[],0,0,0,0,["a",AWv(AS4)],Qb,"RelAltGroupQuantifierSet",20,Gd,[],0,0,0,0,["a",AWv(AIg)],Te,"RelCompositeGroupQuantifierSet",20,FG,[],0,0,0,0,["a",AWv(AG0)],QS,
"DotAllQuantifierSet",20,DR,[],0,0,0,0,["a",AWv(ATo),"bt",AWv(AQ8),"l",AWs(APA)],Oi,"DotQuantifierSet",20,DR,[],0,0,0,0,["a",AWv(AO_),"bt",AWv(AF_),"l",AWs(AQq)],E$,0,E,[],1,0,0,0,0,VB,"PossessiveQuantifierSet",20,CO,[],0,0,0,0,["a",AWv(AG2)],Uc,"PossessiveAltQuantifierSet",20,ES,[],0,0,0,0,["a",AWv(ANR)],OX,"PossessiveCompositeQuantifierSet",20,FB,[],0,0,0,0,["a",AWv(AQF)],P_,"ReluctantQuantifierSet",20,CO,[],0,0,0,0,["a",AWv(AO4)],SG,"ReluctantAltQuantifierSet",20,ES,[],0,0,0,0,["a",AWv(AG8)],QA,"ReluctantCompositeQuantifierSet",
20,FB,[],0,0,0,0,["a",AWv(AQR)],ZC,"SOLSet",20,Bw,[],4,0,0,0,["a",AWv(AMY),"x",AWt(AL0),"l",AWs(ANS)],X4,"WordBoundary",20,Bw,[],0,0,0,0,["a",AWv(AHL),"x",AWt(AH5),"l",AWs(ATD)],W_,"PreviousMatch",20,Bw,[],0,0,0,0,["a",AWv(AL9),"x",AWt(ATA),"l",AWs(AHt)],UM,"EOLSet",20,Bw,[],4,0,0,0,["a",AWv(APE),"x",AWt(AI0),"l",AWs(ANx)],AEq,"EOISet",20,Bw,[],0,0,0,0,["a",AWv(AON),"x",AWt(AFS),"l",AWs(AK8)],Wr,"MultiLineSOLSet",20,Bw,[],0,0,0,0,["a",AWv(AIJ),"x",AWt(AKW),"l",AWs(AHd)],AEk,"DotAllSet",20,BY,[],0,0,0,0,["a",
AWv(AS8),"l",AWs(AJJ),"B",AWt(AH9),"gl",AWs(AOr),"x",AWt(AH8)],Xl,"DotSet",20,BY,[],4,0,0,0,["a",AWv(AOG),"l",AWs(AJa),"B",AWt(AQo),"gl",AWs(AFN),"x",AWt(ATj)],AD_,"UEOLSet",20,Bw,[],4,0,0,0,["a",AWv(AMB),"x",AWt(AKO),"l",AWs(AM8)],ABa,"UMultiLineEOLSet",20,Bw,[],0,0,0,0,["a",AWv(AOL),"x",AWt(AKG),"l",AWs(AGM)],VL,"MultiLineEOLSet",20,Bw,[],0,0,0,0,["a",AWv(ALR),"x",AWt(AI5),"l",AWs(AKX)],HB,"CIBackReferenceSet",20,BY,[],0,0,0,0,["a",AWv(AG3),"B",AWt(APQ),"l",AWs(AGS),"x",AWt(AP5)]]);
$rt_metadata([AEf,"BackReferenceSet",20,HB,[],0,0,0,0,["a",AWv(AJb),"bt",AWv(ARR),"bv",AWw(AGN),"be",AWt(ANN),"l",AWs(ASc)],Zr,"UCIBackReferenceSet",20,HB,[],0,0,0,0,["a",AWv(ANd),"l",AWs(AH6)],J2,0,GI,[GK],0,3,0,0,["lL",AWw(AKB),"kH",AWv(AHT),"eW",AWt(AIn),"ms",AWu(AQ_),"md",AWu(AGo)],QV,"SequenceSet",20,BZ,[],0,0,0,0,["Q",AWu(AJx),"bt",AWv(AHE),"bv",AWw(AKT),"l",AWs(AOY),"be",AWt(ALw)],MR,"UCISequenceSet",20,BZ,[],0,0,0,0,["Q",AWu(ANl),"l",AWs(ALF)],Nz,"CISequenceSet",20,BZ,[],0,0,0,0,["Q",AWu(AQI),"l",AWs(ARD)],AFI,
0,E,[],4,3,0,0,0,HA,0,E,[],4,0,0,AQg,0,MN,"UCISupplCharSet",20,BZ,[],0,0,0,0,["Q",AWu(AQM),"l",AWs(ATB)],IE,"LowSurrogateCharSet",20,BY,[],0,0,0,0,["B",AWt(AO1),"a",AWv(AI1),"bt",AWv(ALs),"bv",AWw(AJG),"l",AWs(ARg),"be",AWt(AGH),"x",AWt(ARp)],IP,"HighSurrogateCharSet",20,BY,[],0,0,0,0,["B",AWt(AIl),"a",AWv(AGe),"bt",AWv(APm),"bv",AWw(AQG),"l",AWs(AS7),"be",AWt(AJy),"x",AWt(APv)],C6,"SupplCharSet",20,BZ,[],0,0,0,0,["Q",AWu(AP6),"bt",AWv(AOb),"bv",AWw(AIj),"l",AWs(ASf),"be",AWt(APW)],Tt,0,E$,[],0,0,0,0,["f9",
AWt(AIx),"qL",AWu(AP1)],Tu,0,E$,[],0,0,0,0,["f9",AWt(AQT),"qL",AWu(ASG)],ACH,0,E,[],0,0,0,0,0,XM,0,E,[],4,0,0,0,0,Xd,0,E,[],4,3,0,0,0,Wm,0,E,[],0,0,0,0,0,ACZ,0,E,[],0,3,0,0,0,Zc,0,E,[],4,3,0,0,0,Lg,0,Bf,[],0,0,0,0,["s",AWs(ZA)],Kk,0,Bf,[],0,0,0,0,["s",AWs(AAU)],ACE,0,Bf,[],0,0,0,0,["s",AWs(AQr)],ADi,0,Bf,[],0,0,0,0,["s",AWs(ARr)],ADl,0,Bf,[],0,0,0,0,["s",AWs(AKa)],La,0,Bf,[],0,0,0,0,["s",AWs(Xq)],LK,0,La,[],0,0,0,0,["s",AWs(YE)],AFA,0,Bf,[],0,0,0,0,["s",AWs(ALr)],MD,0,LK,[],0,0,0,0,["s",AWs(VH)],Z3,0,MD,[],
0,0,0,0,["s",AWs(ANK)],AAG,0,Bf,[],0,0,0,0,["s",AWs(AJr)],XV,0,Bf,[],0,0,0,0,["s",AWs(ANH)],XC,0,Bf,[],0,0,0,0,["s",AWs(ASK)],ADq,0,Bf,[],0,0,0,0,["s",AWs(AOn)],AFL,0,Bf,[],0,0,0,0,["s",AWs(AF4)],ACI,0,Bf,[],0,0,0,0,["s",AWs(ALW)],ACq,0,Bf,[],0,0,0,0,["s",AWs(AP$)],ADY,0,Bf,[],0,0,0,0,["s",AWs(AJo)],WM,0,Bf,[],0,0,0,0,["s",AWs(AJN)],V$,0,Bf,[],0,0,0,0,["s",AWs(ASC)],ACS,0,Bf,[],0,0,0,0,["s",AWs(AFV)],AC9,0,Bf,[],0,0,0,0,["s",AWs(AMF)],Yo,0,Bf,[],0,0,0,0,["s",AWs(AJV)],AAM,0,Bf,[],0,0,0,0,["s",AWs(AKY)],AE3,
0,Bf,[],0,0,0,0,["s",AWs(AMK)],AC6,0,Bf,[],0,0,0,0,["s",AWs(ARN)],Zl,0,Bf,[],0,0,0,0,["s",AWs(APD)],Yn,0,Bf,[],0,0,0,0,["s",AWs(AOd)],AFG,0,Bf,[],0,0,0,0,["s",AWs(AQl)],JJ,0,Bf,[],0,0,0,0,["s",AWs(AAJ)]]);
$rt_metadata([AD6,0,JJ,[],0,0,0,0,["s",AWs(ANZ)],AAd,0,Lg,[],0,0,0,0,["s",AWs(AHB)],Yj,0,Kk,[],0,0,0,0,["s",AWs(ALi)],XK,0,Bf,[],0,0,0,0,["s",AWs(AM3)],Yc,0,Bf,[],0,0,0,0,["s",AWs(ASt)],ZN,0,Bf,[],0,0,0,0,["s",AWs(AKE)],Z4,0,Bf,[],0,0,0,0,["s",AWs(AFW)],TL,0,E,[],0,3,0,0,0,JI,"UnicodeHelper$Range",30,E,[],0,3,0,0,0,P5,0,CS,[],0,0,0,0,["fG",AWt(AQ9),"e6",AWt(AJ0),"fh",AWu(AN8)],BL,0,Bo,[],9,3,0,AIB,0,AFm,0,E,[],3,3,0,0,0,S3,0,E,[B0],3,3,0,0,0,Ya,0,E,[S3,B0],1,3,0,0,["Aj",AWu(ASw),"BE",AWt(AOw),"A6",AWu(AIm),
"D$",AWv(AMm),"Ge",AWv(AQY)],Sz,0,E,[D0],0,0,0,0,["bV",AWt(ANw)],Es,"AssetType",6,Bo,[],12,3,0,EV,0,Uf,"AbstractCharClass$1",20,Ba,[],0,0,0,0,["h",AWt(AKi)],Ud,"AbstractCharClass$2",20,Ba,[],0,0,0,0,["h",AWt(AGs)],On,"CharClass$18",20,Ba,[],0,0,0,0,["h",AWt(AMU),"F",AWs(AK4)],Ov,0,Ba,[],0,0,0,0,["h",AWt(AP8)],Ot,0,Ba,[],0,0,0,0,["h",AWt(AQL)],Ou,0,Ba,[],0,0,0,0,["h",AWt(ANk)],Oz,0,Ba,[],0,0,0,0,["h",AWt(AJQ)],OA,0,Ba,[],0,0,0,0,["h",AWt(AFO)],Ox,0,Ba,[],0,0,0,0,["h",AWt(AK_)],Oy,0,Ba,[],0,0,0,0,["h",AWt(ANm)],OB,
0,Ba,[],0,0,0,0,["h",AWt(ARW)],OC,0,Ba,[],0,0,0,0,["h",AWt(AJg)],Om,0,Ba,[],0,0,0,0,["h",AWt(ATN)],O2,0,Ba,[],0,0,0,0,["h",AWt(ALe)],Ok,0,Ba,[],0,0,0,0,["h",AWt(AJe)],Ol,0,Ba,[],0,0,0,0,["h",AWt(AKL)],Oq,0,Ba,[],0,0,0,0,["h",AWt(AMa)],Oj,0,Ba,[],0,0,0,0,["h",AWt(ARy)],Oo,0,Ba,[],0,0,0,0,["h",AWt(AHX)],Op,0,Ba,[],0,0,0,0,["h",AWt(APr)],O6,0,E,[],0,0,0,0,0,Ds,0,E,[Fe],0,3,0,Fu,0,CA,"IllegalStateException",24,Bu,[],0,3,0,0,0,In,"IllegalMonitorStateException",24,Bu,[],0,3,0,0,0,Tp,0,E,[L_],0,0,0,0,0,AC3,0,E,[],
0,3,0,0,0,YL,0,E,[],4,3,0,0,0,Wa,0,E,[B0],1,3,0,0,0,EZ,0,E,[],3,3,0,0,0,Vh,0,E,[EZ],0,3,0,0,["cM",AWs(ARY)],TZ,0,BL,[],12,0,0,0,0,T0,0,BL,[],12,0,0,0,0,T5,0,BL,[],12,0,0,0,0,T6,0,BL,[],12,0,0,0,0]);
$rt_metadata([T3,0,BL,[],12,0,0,0,0,T4,0,BL,[],12,0,0,0,0,TV,0,BL,[],12,0,0,0,0,TW,0,BL,[],12,0,0,0,0,TU,0,BL,[],12,0,0,0,0,Nv,0,E,[],3,3,0,0,0,Ra,0,E,[Nv],0,3,0,0,0,YW,0,E,[B0],4,3,0,0,0,QM,0,E,[],3,3,0,0,0,Qt,0,E,[QM],0,0,0,0,["wJ",AWt(Iz),"xe",AWt(AS0)],RO,0,E,[EZ],0,3,0,0,0,No,"BackReferencedSingleSet",20,GU,[],0,0,0,0,["bt",AWv(AKF),"bv",AWw(ATE),"dQ",AWs(AIZ)],XN,0,E,[],4,3,0,0,0,NK,0,E,[I5],0,0,0,0,0,Nd,0,Ds,[],0,0,0,0,["cM",AWs(AO6)],M$,0,E,[],32,0,0,AVj,0,AD7,0,E,[B0,EE],1,3,0,0,["EQ",AWu(AMZ),"GD",
AWu(ANG),"BI",AWv(AGh),"Cl",AWt(AGp),"Ez",AWv(ALa)],Gj,0,E,[B0],3,3,0,0,0,Nf,0,E,[Gj],0,0,0,0,["bV",AWt(Z1)],RT,0,E,[],0,3,0,0,0,Yf,0,E,[I5,Dg],0,3,0,0,0,Oa,0,E,[Dg],0,3,0,0,0,Fy,"Blob",6,E,[],4,3,0,0,0,Nb,"Preloader$3$1$1",6,E,[Fe],0,0,0,0,["cM",AWs(AGa)],Vm,0,E,[],3,3,0,0,0,IK,0,E,[Vm],3,3,0,0,0,S0,0,E,[],3,3,0,0,0,GO,0,E,[IK,S0],1,3,0,0,0,JK,0,GO,[],0,3,0,0,0,YT,0,JK,[],0,3,0,0,0,GA,0,GO,[],1,3,0,0,0,LE,0,GA,[],0,3,0,0,["jV",AWv(AMh)],Nj,0,E,[Gj],0,0,0,0,["bV",AWt(AOz)],Dk,0,E,[CC],1,3,0,0,0,Mx,0,Dk,[],0,
3,0,PZ,["iu",AWs(AEY)],AC_,"IllegalCharsetNameException",22,Bh,[],0,3,0,0,0,MA,"NoSuchElementException",19,Bu,[],0,3,0,0,0,BU,"GdxRuntimeException",10,Bu,[],0,3,0,0,0,RQ,"AbstractCharClass$LazyJavaLowerCase$1",20,Ba,[],0,0,0,0,["h",AWt(AR8)],MY,"AbstractCharClass$LazyJavaUpperCase$1",20,Ba,[],0,0,0,0,["h",AWt(AHu)],Q$,"AbstractCharClass$LazyJavaWhitespace$1",20,Ba,[],0,0,0,0,["h",AWt(AG7)],Q9,"AbstractCharClass$LazyJavaMirrored$1",20,Ba,[],0,0,0,0,["h",AWt(AKD)],Ux,"AbstractCharClass$LazyJavaDefined$1",20,Ba,
[],0,0,0,0,["h",AWt(AL2)],OT,"AbstractCharClass$LazyJavaDigit$1",20,Ba,[],0,0,0,0,["h",AWt(AR_)],N$,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",20,Ba,[],0,0,0,0,["h",AWt(AOX)],Qm,"AbstractCharClass$LazyJavaISOControl$1",20,Ba,[],0,0,0,0,["h",AWt(AQf)],MU,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",20,Ba,[],0,0,0,0,["h",AWt(ATg)],MX,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",20,Ba,[],0,0,0,0,["h",AWt(AJD)],N0,"AbstractCharClass$LazyJavaLetter$1",20,Ba,[],0,0,0,0,["h",AWt(ASp)],Pk,"AbstractCharClass$LazyJavaLetterOrDigit$1",
20,Ba,[],0,0,0,0,["h",AWt(ANE)]]);
$rt_metadata([Pp,"AbstractCharClass$LazyJavaSpaceChar$1",20,Ba,[],0,0,0,0,["h",AWt(APN)],Sn,"AbstractCharClass$LazyJavaTitleCase$1",20,Ba,[],0,0,0,0,["h",AWt(ARX)],Ru,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",20,Ba,[],0,0,0,0,["h",AWt(ASX)],M9,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",20,Ba,[],0,0,0,0,["h",AWt(AJq)],Mk,"UnicodeCategory",20,Ba,[],0,0,0,0,["h",AWt(AOZ)],Q2,"UnicodeCategoryScope",20,Mk,[],0,0,0,0,["h",AWt(AQ3)],TC,0,E,[EZ],0,3,0,0,["cM",AWs(AHf)],Yq,0,E,[],4,3,0,0,0,U_,0,E,
[],32,0,0,AV7,0,Um,"ConcurrentModificationException",19,Bu,[],0,3,0,0,0,Pc,0,E,[CH],3,3,0,0,0,TM,0,E,[Pc],0,3,0,AQS,0,K5,0,GA,[],0,3,0,0,["jV",AWv(AKt)],F2,0,E,[],0,0,0,0,0,Ig,0,E,[],4,3,0,0,0,TD,0,E,[],0,3,0,0,0,Pt,0,D4,[CC],0,3,0,0,0,I0,0,E,[],4,3,0,0,0,SI,0,E,[],0,3,0,0,0,Du,0,E,[],1,3,0,0,0,K_,0,E,[],3,3,0,0,0,Lo,0,Du,[CC,GK,HI,K_],1,3,0,0,0,D3,0,Du,[CC],1,3,0,0,["fw",AWt(APh),"e5",AWt(AGO)],If,0,E,[],0,3,0,Fp,0,L7,0,E,[],3,3,0,0,0,Ug,0,E,[],3,3,0,0,0,N_,0,E,[EZ,L7,Ug],0,0,0,0,["cM",AWs(APH)],Fq,0,Bo,[],
12,3,0,Qh,0,Km,0,Lo,[],1,0,0,0,0,QC,0,Km,[],0,0,0,0,0,Lb,0,E,[],1,3,0,0,0,L5,0,E,[],0,3,0,0,0,Fa,0,E,[],3,3,0,0,0,AEA,0,D3,[Fa],0,0,0,0,["jx",AWs(Vy)],It,0,E,[],4,3,0,FQ,0,D$,0,Lb,[],1,3,0,0,0,Po,0,D$,[],0,3,0,0,["gK",function(b,c,d,e,f,g,h){return AMG(this,b,c,d,e,f,g,h);}],Fg,"IOException",23,Cl,[],0,3,0,0,0,Le,"Mesh",15,E,[CH],0,3,0,0,0,ZH,0,E,[],0,3,0,0,0,Zg,"BitmapFont$BitmapFontData",17,E,[],0,3,0,0,0,Og,0,E,[Dg,CC],4,3,0,0,0,FV,"ShaderProgram",16,E,[CH],0,3,0,AFg,0,R3,0,E,[],3,3,0,0,0,H_,"FileTextureData",
16,E,[R3],0,3,0,0,0,Ln,0,E,[CH],0,3,0,RM,0,CL,"BitmapFont$Glyph",17,E,[],0,3,0,0,["F",AWs(ALh)],Vw,0,E,[],32,0,0,AVo,0,IM,0,E,[CH],3,3,0,0,0,KY,0,E,[IM],0,3,0,0,["lt",AWv(AOC),"iH",AWu(AKq),"ig",AWu(AHl),"bW",AWs(ARU)]]);
$rt_metadata([JE,0,E,[CH],3,3,0,0,0,IA,0,E,[JE],0,3,0,0,["fA",AWs(ALC),"jZ",AWs(AGG),"qv",AWv(AOf),"lW",AWt(AHa),"gJ",AWs(ASm),"qU",AWs(AQe),"bW",AWs(AIb)],OU,0,E,[IM],0,3,0,0,["lt",AWv(AHK),"iH",AWu(AN9),"ig",AWu(AKr),"bW",AWs(AKS)],AAv,0,E,[JE],0,3,0,0,["fA",AWs(APK),"jZ",AWs(AF7),"qv",AWv(ALV),"lW",AWt(ARt),"gJ",AWs(AMn),"qU",AWs(AIe),"bW",AWs(AIy)],Kv,0,E,[IM],0,3,0,AKN,["lt",AWv(AHH),"iH",AWu(ARe),"ig",AWu(AJP),"bW",AWs(AJ_)],N7,0,KY,[],0,3,0,0,0,Pu,0,IA,[],0,3,0,0,0,ACP,0,E,[Dg],0,3,0,0,0,ACL,0,E,[],4,
3,0,0,0,Hx,0,Bo,[],12,3,0,Hu,0,Gh,0,Bo,[],12,3,0,ACl,0,JH,0,E,[],0,3,0,0,0,I$,"TeaFileHandle",5,JH,[],0,3,0,0,["F",AWs(ATx)],Rc,0,E,[CH],0,3,0,0,0,EY,0,Du,[CC],1,3,0,0,0,Dc,0,Du,[CC],1,3,0,0,["fw",AWt(APk),"e5",AWt(ASF)],ABK,0,E,[B0],1,3,0,0,0,DS,0,Bo,[],12,3,0,AI2,0,F6,0,Bo,[],12,3,0,AF1,0,E0,0,Du,[CC],1,3,0,0,0,ABe,0,E,[B0],1,3,0,0,0,YG,0,E,[Kc],1,3,0,0,["yW",AWt(ATn),"F$",AWs(AIC)],GN,0,EY,[],1,0,0,0,0,Qc,0,GN,[],0,0,0,0,["iK",AWt(AOx),"hZ",AWu(ANa),"bK",AWs(AFZ)],GD,0,Dc,[],1,0,0,0,0,Un,0,GD,[],0,0,0,0,
["mH",AWt(APs),"g4",AWu(AOJ),"bK",AWs(AOV)],Hz,0,E0,[],1,0,0,0,0,Uv,0,Hz,[],0,0,0,0,["mG",AWt(AKP),"ke",AWu(AL8),"bK",AWs(AJn)],GE,0,GD,[Fa],1,0,0,0,["bK",AWs(AO3),"jx",AWs(APS)],NH,0,GE,[],0,0,0,0,["mH",AWt(AMW),"g4",AWu(APO)],Qp,0,GE,[],0,0,0,0,["mH",AWt(AF8),"g4",AWu(AML)],Gp,0,Hz,[Fa],1,0,0,0,["bK",AWs(ALu),"jx",AWs(AQd)],Nu,0,Gp,[],0,0,0,0,["mG",AWt(AJf),"ke",AWu(AIz)],PI,0,Gp,[],0,0,0,0,["mG",AWt(AOo),"ke",AWu(AJh)],Im,"UnsupportedOperationException",24,Bu,[],0,3,0,0,0,Dj,"ReadOnlyBufferException",21,
Im,[],0,3,0,0,0,Hm,0,GN,[Fa],1,0,0,0,["bK",AWs(AMQ)],N3,0,Hm,[],0,0,0,0,["iK",AWt(AKK),"hZ",AWu(AFY)],RW,0,Hm,[],0,0,0,0,["iK",AWt(ARc),"hZ",AWu(AHn)],I_,"BufferUnderflowException",21,Bu,[],0,3,0,0,0,Yx,0,E,[],4,3,0,0,0,To,0,E,[Gj],0,0,0,0,["bV",AWt(Zw)],S1,0,E,[EZ,L7],3,0,0,0,0,EQ,"Files$FileType",9,Bo,[],12,3,0,Ls,0,Gz,0,E,[IK,K_],1,3,0,0,0,ABr,0,Gz,[],0,3,0,0,0,WV,0,Gz,[],0,3,0,0,0,VF,0,E,[KE],0,3,0,0,0,Qi,0,E,[],4,3,0,0,0,DX,0,Bo,[],12,3,0,XG,0]);
$rt_metadata([LZ,0,E,[],0,3,0,AVa,0,Ju,0,E,[],4,3,0,0,0,GZ,0,Bo,[],12,0,0,ZV,0,CM,0,Bo,[],12,3,0,JC,0,W0,0,E,[],0,0,0,0,0,Gr,0,Bo,[],12,3,0,AGB,0,SC,0,E,[],0,3,0,0,0,Sh,0,E,[],32,0,0,AUE,0,Md,0,E,[],1,3,0,0,0,E4,"BufferOverflowException",21,Bu,[],0,3,0,0,0,FX,0,E,[],1,3,0,0,0,Kx,0,DW,[],0,3,0,0,0,Yb,0,E,[],0,3,0,0,0,KP,0,Md,[],1,3,0,0,0,R6,0,KP,[],0,3,0,0,0,NF,0,FX,[],4,3,0,0,0,I8,0,FX,[],4,0,0,AVc,0,LB,0,E,[],3,3,0,0,0,Qq,0,E,[LB],0,0,0,0,["h3",AWt(AI_),"sN",AWt(APe)],R8,0,E,[LB],0,0,0,0,["h3",AWt(APt),"sN",
AWt(ARk)],AAV,0,E,[B0],1,3,0,0,0,ACa,"CoderMalfunctionError",22,E7,[],0,3,0,0,0,He,0,E,[IK],1,3,0,0,["pD",AWv(ARJ),"i$",AWs(ALp)],ADu,0,He,[],0,3,0,0,["nS",AWs(AIW),"pD",AWv(ASY),"i$",AWs(ALA)],PR,0,Fg,[],0,3,0,0,0,NS,0,E,[],0,3,0,0,0,L6,0,E,[],0,3,0,0,0,Vb,0,He,[],0,0,0,0,["nS",AWs(ANq)],Lh,"Preloader$Asset",6,E,[],0,3,0,0,0,UE,0,E,[],0,0,0,AUY,0,QI,"UnsupportedCharsetException",22,Bh,[],0,3,0,0,0,Fm,0,E,[],4,3,0,AUp,0,Q5,0,Dk,[],0,3,0,0,["iu",AWs(AF3)],PP,0,Dk,[],0,3,0,0,["iu",AWs(AQW)],AAC,0,Dk,[],0,3,0,
0,["iu",AWs(AGF)],P6,0,CS,[],0,0,0,0,0,Tl,0,E,[],0,3,0,0,0,Gb,0,Fg,[],0,3,0,0,0,UO,"AssertionError",24,E7,[],0,3,0,0,0,P4,0,CS,[],0,0,0,0,["fG",AWt(N1),"e6",AWt(Jt),"fh",AWu(Li)],Lz,"InstantiationException",24,D9,[],0,3,0,0,0,Jq,"IllegalAccessException",24,D9,[],0,3,0,0,0,NA,0,D9,[],0,3,0,0,0,ABk,"Matcher$1",20,E,[],0,0,0,0,["F",AWs(AM5)],SP,0,D$,[],0,3,0,0,["gK",function(b,c,d,e,f,g,h){return ALf(this,b,c,d,e,f,g,h);}],T_,0,D$,[],0,3,0,0,["gK",function(b,c,d,e,f,g,h){return AQx(this,b,c,d,e,f,g,h);}],Pe,0,
D$,[],0,3,0,0,["gK",function(b,c,d,e,f,g,h){return AQc(this,b,c,d,e,f,g,h);}],Nk,0,E,[],32,0,0,AVT,0,YN,0,E,[],4,3,0,0,0,Iy,0,E,[BG,CC],0,3,0,0,0]);
$rt_metadata([Q7,0,E,[GK,HI],0,3,0,0,0,T8,0,E,[],4,3,0,AKu,0,PX,"BufferUnderflowException",22,Bu,[],0,3,0,0,0,U0,"BufferOverflowException",22,Bu,[],0,3,0,0,0,Tr,"MalformedInputException",22,Gb,[],0,3,0,0,["e7",AWs(AKn)],PV,"UnmappableCharacterException",22,Gb,[],0,3,0,0,["e7",AWs(AJF)],Nh,0,Ds,[],0,0,0,0,["cM",AWs(AIs)],Ng,0,CS,[],0,0,0,0,["fG",AWt(AIv),"e6",AWt(ANQ),"fh",AWu(AHj)],Ni,0,CS,[],0,0,0,0,["fG",AWt(AKR),"e6",AWt(AGy),"fh",AWu(ALd)],NV,0,E,[Gj],0,0,0,0,["bV",AWt(AE5)],Ps,0,E,[D0],0,0,0,0,["bV",AWt(AKj)]]);
function $rt_array(cls,data){this.V=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","all","table","cell","actor","Unable to create new instance: ","object cannot be null.","OnPlane",
"Back","Front","bounces cannot be < 2 or > 5: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: "," >= ","start can\'t be > end: "," > ","Array is empty.","objects cannot be null.","texture cannot be null.","com/badlogic/gdx/utils/lsans-15.fnt","com/badlogic/gdx/utils/lsans-15.png","If no regions are specified, the font data must have an images path.","The specified font must contain at least one texture page.","0","GL_EXT_texture_filter_anisotropic","This TextureData implementation does not upload data itself",
"Call prepare() before calling getPixmap()","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","index can\'t be >= size: ","newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","interface ","class ","<init>",": ","\tat ","Caused by: ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",
"The value is too big for int type: ","Illegal radix: ","null","Either src or dest is null","java.version","1.8","os.name","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Class cannot be created (missing no-arg constructor): ","offset + length must be <= size: ","capacity must be >= 0: ","The required capacity is too large: ","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'",
"\'.","Security violation while getting constructor for class: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","java.runtime.name","userAgent","Windows","OS X","no OS",".html","index.html","index-debug.html","assets.txt","resize","SpriteBatch.end must be called before begin.","u_projTrans","u_texture","Not much here is there?","gdx.wasm.js","libgdxlogo.png","public","protected","private","abstract","static",
"final","transient","volatile","synchronized","native","strictfp","interface","LOAD_ASSETS","APP_CREATE","APP_LOOP","Loading asset : ","Loading script : ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","px","assets/","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","Index "," is outside of range [0;","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend",
"GL error: ","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","jpg","jpeg","png","bmp","gif","mp3","ogg","wav","Patter is null","object","function","string","number","undefined","fSet","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet",
"<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl",
"XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement",
"Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement",
"LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B",
"SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs",
"YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp",
"IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","Unsupported asset type ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Index out of bounds","Should never been thrown",
"UTF-8","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attributes must be >= 1","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n","#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"Error compiling shader: ","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","New position ","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","Capacity is negative: ","The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO",
"Action must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","Replacement preconditions do not hold","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ",
"Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","additionalCapacity must be >= 0: ","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","Pixmap already disposed!","unknown format: ","Unknown Gdx2DPixmap Format: ","No buffer allocated!",
"IndexBufferObject cannot be used after it has been disposed.","data must be a ByteBuffer or FloatBuffer","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","file-d:","file-f:","The last float in src ","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","The last short in src ","Asset loaded: ","Classpath","Internal","External","Absolute",
"Local","�","newAction must be non-null","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","texture width and height must be square when using mipmapping.","US-ASCII",
"ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Malformed input of length ","Unmappable characters of length ","data:",";base64,","error"]);
BB.prototype.toString=function(){return $rt_ustr(this);};
BB.prototype.valueOf=BB.prototype.toString;E.prototype.toString=function(){return $rt_ustr(OE(this));};
E.prototype.__teavm_class__=function(){return $dbg_class(this);};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cw=Long_add;var ALL=Long_sub;var BO=Long_mul;var Th=Long_div;var V2=Long_rem;var AKg=Long_or;var C3=Long_and;var AEc=Long_xor;var FN=Long_shl;var AUO=Long_shr;var Ci=Long_shru;var A43=Long_compare;var DG=Long_eq;var AKh=Long_ne;var AUl=Long_lt;var AJ1=Long_le;var AUj=Long_gt;var AUk=Long_ge;var A44=Long_not;var AVd=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}$rt_exports.main=$rt_mainStarter(AUA);
$rt_exports.main.javaException=$rt_javaException;
let A27=$rt_globals.Symbol('jsoClass');
(function(){var c;c=R4.prototype;c[A27]=true;c.onAnimationFrame=c.DR;c=ABd.prototype;c[A27]=true;c.handleEvent=c.bV;c=V6.prototype;c[A27]=true;c.handleEvent=c.bV;c=V7.prototype;c[A27]=true;c.handleEvent=c.bV;c=SF.prototype;c[A27]=true;c.fullscreenChanged=c.FL;c=RC.prototype;c[A27]=true;c.denied=c.Hb;c.prompt=c.CP;c.granted=c.Ah;c=Wz.prototype;c.removeEventListener=c.DP;c.dispatchEvent=c.Cq;c.get=c.yW;c.addEventListener=c.A$;Object.defineProperty(c,"length",{get:c.Cw});c=YI.prototype;c[A27]=true;c.handleEvent
=c.bV;c=YJ.prototype;c[A27]=true;c.handleEvent=c.bV;c=YH.prototype;c[A27]=true;c.handleEvent=c.bV;c=Nx.prototype;c[A27]=true;c.unlockFunction=c.AY;c=RP.prototype;c[A27]=true;c.accept=c.zk;c=RN.prototype;c[A27]=true;c.accept=c.zk;c=Ya.prototype;c.removeEventListener=c.Ge;c.dispatchEvent=c.BE;c.addEventListener=c.D$;c=Sz.prototype;c[A27]=true;c.handleEvent=c.bV;c=YW.prototype;c[A27]=true;c=AD7.prototype;c.removeEventListener=c.BI;c.dispatchEvent=c.Cl;c.addEventListener=c.Ez;c=Nf.prototype;c[A27]=true;c.handleEvent
=c.bV;c=Nj.prototype;c[A27]=true;c.handleEvent=c.bV;c=YG.prototype;c.get=c.yW;Object.defineProperty(c,"length",{get:c.F$});c=To.prototype;c[A27]=true;c.handleEvent=c.bV;c=NV.prototype;c[A27]=true;c.handleEvent=c.bV;c=Ps.prototype;c[A27]=true;c.handleEvent=c.bV;})();
}));
