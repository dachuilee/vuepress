# mysql
> 1个位就表示1个二进制位，8位表示一个标准字节，而字节编码就是字符的代号，AscII用Asni编码表示，8位一个字节，而中文字符由于字符过多用一个字节无法足够表示，就用了2个字节来表示，除了2字节长度的编码还有3字节和4字节的；
UTF-8编码时：UTF-8一个(字符)占用(3)个字节，英文占用(1)个字节。
GDK编码时：GDK一个(字符)占用(2)个字节，英文占用(1)个字节。
## 数据类型
1. 整数
* tinyint(-128~125|0-255，1字节) 
* samllint(2字节)  
* mddiumint(3字节) 
* int(4字节) 
* bigint(8字节)
2. 小数
* float:单精度浮点数(小数点后八位)
* double:双精度浮点数
## 字符创类型
* varchar 225
* text 1G

## 时间类型
* data(3字节)
* timestamp(4字节)
* datetime(8字节)

## 主键
> 用来查询时的索引，具有唯一性，可自动递增

## sql 语句
* 查询：SELECT * FROM `news` WHERE 1 // * 号指所有字段

  ``` 
   SELECT `id`, `title`, `img`, `content`, `date` FROM `news` WHERE 1
  ```
* 插入：INSERT INTO `news`(`id`, `title`, `img`, `content`, `date`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])
* 修改：UPDATE `news` SET `id`=[value-1],`title`=[value-2],`img`=[value-3],`content`=[value-4],`date`=[value-5] WHERE 1
* 删除 DELETE FROM `news` WHERE 0
