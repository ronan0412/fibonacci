'use strict';
const memo = new Map();
memo.set(0, 0);//キー左が0で、値右が0
memo.set(1, 1);

function fib(n) {
    if (memo.has(n)) {//Mapがnをキーとした値を持ってたら
        return memo.get(n);//nに対応した値を返す
    } 
    //Mapがnをキーとした値を持ってなかったら、
    //再帰関数を計算して値を求め、
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);//それをMapに格納して
    return value;//返す
}

const length = 40;
for (let i = 0; i <= length; i ++) {    
    console.log(fib(i));
}