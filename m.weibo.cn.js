// ==UserScript==
// @name          Remove by User or keyWords
// @namespace     https://github.com/Tiamisu
// @description   Remove by User or keyWords
// @include       *m.weibo.cn*
// @exclude       *m.weibo.cn/profile/*
// @exclude       *m.weibo.cn/detail/*
// @exclude       *m.weibo.cn/search/*
// ==/UserScript==
setInterval(removeblock, 5000);

var allPost, keyWords;

var keyWords = ["肖战"];

function removeblock() {


  allPost = document.getElementsByClassName('wb-item');
  for (var i = 0; i < allPost.length; i++) {

    console.log(i);
    if (isBlock(allPost[i], keyWords) == true) {
      console.log(allPost[i].innerText);
      allPost[i].innerHTML = "";
    }
  }
}

function isBlock(thisPost, keyWords) {
  weiboText = thisPost.innerText;
  if (keyWords.some((value) => {
      return (weiboText.search(value) != -1);
    })) {
    return true;
  }
  return false;
}
