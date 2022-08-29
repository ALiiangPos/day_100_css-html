JS DOM 对象学习 笔记 

&& 
如果两边都为数字，或字符串数字，则返回右边的
如果左边的值为 【true 】，不管右边的值是（真）是（假）都返回右边的
如果左边的值为 【false 】，则都返回左边的，那么返回左边的值，但是当逻辑与的左边为 null/NaN/undefined ，结果就会得到null/NaN/undefined。


|| 
如果两边都为数字，或字符串数字，则返回左边的
如果左边的值布尔转换后为true，那么返回左边的值，如果两个操作数都是是null （NaN/undefined），返回null（NaN/undefined）
如果左边的值布尔转换后为false，那么返回右边的值（不管右边的值是真还是假）。 



apply()把参数打包成Array再传入；
call()把参数按顺序传入。