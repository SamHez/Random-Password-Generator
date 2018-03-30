function generate(len)
{
var keys="abcdefghijklmnopqrstuvwxyz1234567890";
var text="";
for(var i=0;i<len;i++)
{
  text+=keys.charAt(Math.floor(Math.random()*keys.length));
}
return text;
}
function populate(size)
{
  document.myform.gen.value=generate(size);
}
