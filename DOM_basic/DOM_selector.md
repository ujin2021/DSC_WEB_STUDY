### DOM Selectors
* getElementsByTagName
* getElementByClassName
* getElementById
<br>

* querySelector
> 첫번째 것만 선택됨
``` HTML
document.querySelectorAll('li')[1]
```

* querySelectorAll

<br>

### Changing Styles
* style.{property} 
* className
* classList

<br>

* classList.add
* classList.remove
* classList.toggle

<br>

### Bonus
* innerHTML(Dangerous)
``` HTML
document.querySelector('h1').innerHTML = '<strong>!!!</strong>';
```
<br>

* parentElement
``` HTML
document.querySelectorAll('li')[1].parentElement;
```
* children