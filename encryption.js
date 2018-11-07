function hEncode(str) {
    var crypt = '';
    var charCode;
	for(var i=0;i<str.length;i++) {
        charCode=str.charCodeAt(i).toString(10);
       key=parseInt(charCode)+parseInt(103);
	hex=key.toString(16)
        crypt+=''+hex+"";
        
	}
	return crypt;
}

function hDecode(str){
    decodeStr="";
    for (let i = 0;i< (str.length)-1; i++) {
        strSlice=str.slice(i,i+2)
        i++;
        removeNum=parseInt(strSlice,16)-parseInt(103);
        decodeStr+=""+String.fromCharCode(removeNum);
        
 }
 return decodeStr;
}
str="My Name is Haider";
console.log("Encrypted Text:"+hEncode(str));
console.log("Decrypted Text: " + hDecode(hEncode(str)));
