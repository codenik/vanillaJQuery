  const v$ = (el) => document.querySelector(el);

  const v$$ = (el) => document.querySelectorAll(el);

  const vr$$ = (el) => Array.from(document.querySelectorAll(el));

  const vt$$ = (el) => Array.from(document.querySelectorAll(el)).map(el => el.innerText);

  const va$$ = (el, attr) => Array.from(document.querySelectorAll(el)).map(el => el[attr]);

  const vf$$ = (el, attr, val) => Array.from(document.querySelectorAll(el)).filter(el => el[attr] == val);

  const vf1$$ = (el, attr, val) => Array.from(document.querySelectorAll(el)).filter(el => el[attr].startsWith(val));
  
