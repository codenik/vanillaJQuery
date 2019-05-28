n$ = (el) => document.querySelector(el);
n$$ = (el) => document.querySelectorAll(el);

a$$ = (el) => Array.from(n$$(el));

a$$t = (el) => a$$(el).map(el => el.innerText);
a$$s = (el) => a$$(el).map(el => el.src);
a$$h = (el) => a$$(el).map(el => el.href);

a$$a = (el, attr) => a$$(el).map(el => el[attr]);

a$$f = (el, attr, val) => a$$(el).filter(el => el[attr] == val);
a$$f1 = (el, attr, val) => a$$(el).filter(el => el[attr].startsWith(val));
a$$f5 = (el, attr, val) => a$$(el).filter(el => el[attr].includes(val));
a$$f9 = (el, attr, val) => a$$(el).filter(el => el[attr].endsWith(val));

robbie$ = 'hello';
