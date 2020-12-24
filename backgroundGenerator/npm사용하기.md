### NPM live-server 사용하기

1. backgroundGenerator dir 안에서
2. \> npm init (package.json 파일 생성)
3. \> npm install live-server
4. \> live-server

### NPM lodash 사용하기

1. \> npm install ladash
2. \> node_module이라는 dir이 생성된다
3. \> package.json에 lodash 가 추가된다
4. script.js에 추가

``` javascript
import { without } from 'lodash'
console.log(without)
```

5. 지금까지 해서 live-server 하고 f12 보면 syntax error
6. \> npm install -g browserify (browser에서 쓰기위해서 require를 해줘야하므로 browserify 를 설치해준다)
7. script.js에서 require를 사용해 lodash 를 가져옴

``` javascript
let _ = require('lodash')
console.log(_)
```

8. 이후 script.js 파일을 브라우저에서 사용할 수 있는 bundel.js 파일로 만들어준다
9. \> browserify script.js > bundles.js
10. index.html 파일의 script태그에서 script.js를 bundle.js로 바꿔준다

``` html
<script type="text/javascript" src="bundle.js"></script> 
```

11. 다시 live-server로 실행시키고 f12를 눌러도 error가 발생하지 않는 것을 알 수 있다
12. script.js파일에 lodash를 사용하는 코드를 작성한다

``` javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('answer', _.without(array, 3)) // array에서 3을 없앤다
```

13. \> browserify script.js > bundles.js
14. live-server후 f12를 클릭해 console을 확인하면 3이 사라진 array가 출력된다
15. 하지만 bundle.js는 방대하다(모든 라이브러리가 포함되어있다)

### package.json
1. 만약 사용자가 node_modules dir를 지워도 npm install 하면 package.json에 있는 것이 다시 install 된다
2. dependency 말고 dev dependency가 있는데, 이것은 개발과 테스트에만 사용되고, release될 때는 삭제된다
3. \> npm run test 실행시 package.json파일의 scripts의 test가 출력됨
4. package.json 의 scripts 부분에 "build" : "browserify script.js > bundle.js && live-server" 이것을 추가한다
5. \> npm run build 하면 자동으로 bundle.js가 업데이트 되고, live-server가 실행됨